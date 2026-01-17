import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import {
  verifyJwt,
  sendConfirmationEmail,
  KV_KEY,
  refreshAccessToken,
} from "@/lib/auth-helpers";
import { JWTPayload } from "jose";

interface VerifiedJwtPayload extends JWTPayload {
  email: string;
  verified: boolean;
}

interface RegisterBody {
  participant1Name: string;
  participant2Name?: string;
  email: string;
  phoneNumber: string;
  collegeName: string;
  state: string;
  city: string;
  isBangaloreBased: boolean;
  willAttendInPerson: boolean;
}

interface GoogleTokens {
  access_token: string;
  refresh_token: string;
  access_token_expires_at: number;
}

type KvNamespaceJson = {
  get<T = unknown>(key: string, type: "json"): Promise<T | null>;
  put(key: string, value: string): Promise<void>;
};

type D1PreparedStatement = {
  bind: (...values: (string | number | boolean | null)[]) => {
    run: () => Promise<unknown>;
  };
};

type D1DatabaseLike = {
  prepare: (query: string) => D1PreparedStatement;
};

type CloudflareEnv = {
  DB?: D1DatabaseLike;
  google_token?: KvNamespaceJson;
};

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterBody;
    const token = request.cookies.get("verified_token")?.value;

    if (!token) {
      return NextResponse.json(
        { error: "Not authorized. Please verify email first." },
        { status: 401 }
      );
    }

    const payload = (await verifyJwt(token)) as VerifiedJwtPayload | null;
    if (!payload || !payload.verified || payload.email !== body.email) {
      return NextResponse.json(
        { error: "Invalid verification token" },
        { status: 401 }
      );
    }

    let env: CloudflareEnv | undefined;
    try {
      const ctx = await getCloudflareContext();
      env = ctx.env as CloudflareEnv;
    } catch {
      console.warn("No Cloudflare context");
    }

    if (!env || !env.DB) {
      return NextResponse.json(
        { error: "Database unavailable" },
        { status: 500 }
      );
    }

    const db = env.DB;
    const stmt = db
      .prepare(
        `INSERT INTO registrations (
          participant1_name,
          participant2_name,
          email,
          phone_number,
          college_name,
          state,
          city,
          is_bangalore_based,
          will_attend_in_person,
          created_at
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`
      )
      .bind(
        body.participant1Name,
        body.participant2Name ?? null,
        body.email,
        body.phoneNumber,
        body.collegeName,
        body.state,
        body.city,
        body.isBangaloreBased ? 1 : 0,
        body.willAttendInPerson ? 1 : 0,
        Date.now()
      );

    await stmt.run();

    if (env.google_token) {
      try {
        const kv = env.google_token;
        const stored = await kv.get<GoogleTokens>(KV_KEY, "json");
        if (stored) {
          const { refresh_token } = stored;
          let access_token = stored.access_token;
          let access_token_expires_at = stored.access_token_expires_at;
          if (Date.now() > access_token_expires_at - 60 * 1000) {
            const newTokens = await refreshAccessToken(refresh_token);
            access_token = newTokens.access_token;
            access_token_expires_at = Date.now() + newTokens.expires_in * 1000;
            await kv.put(
              KV_KEY,
              JSON.stringify({
                access_token,
                refresh_token,
                access_token_expires_at,
              })
            );
          }
          await sendConfirmationEmail(access_token, body.email);
        }
      } catch (emailErr) {
        console.error("Email sending failed", emailErr);
        // We do not fail the request if email fails, as DB insert was successful
      }
    }

    const response = NextResponse.json({ success: true });
    response.cookies.delete("verified_token");
    response.cookies.delete("access_token");

    return response;
  } catch (error: unknown) {
    console.error("Registration Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    if (errorMessage.includes("UNIQUE constraint failed")) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 }
      );
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
