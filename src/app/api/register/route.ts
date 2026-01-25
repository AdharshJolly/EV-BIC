import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import {
  verifyJwt,
  sendConfirmationEmail,
  KV_KEY,
  refreshAccessToken,
  hmacHash,
  CloudflareEnv,
} from "@/lib/auth-helpers";
import { JWTPayload } from "jose";

interface OtpJwtPayload extends JWTPayload {
  email: string;
  hash: string;
  expiry: number;
}

interface RegisterBody {
  participant1Name: string;
  participant2Name: string;
  email: string;
  phoneNumber: string;
  collegeName: string;
  state: string;
  city: string;
  isBangaloreBased: boolean;
  willAttendOnline: boolean;
  otp: string;
}

interface GoogleTokens {
  access_token: string;
  refresh_token: string;
  access_token_expires_at: number;
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json()) as RegisterBody;
    const token = request.cookies.get("access_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 });
    }

    // Get Cloudflare context
    let env: CloudflareEnv | undefined;
    try {
      const ctx = await getCloudflareContext();
      env = ctx.env as CloudflareEnv;
    } catch (_e) {
      console.warn("Could not get Cloudflare context (local dev?)", _e);
    }

    const payload = (await verifyJwt(token, env)) as OtpJwtPayload | null;
    if (!payload || payload.email !== body.email) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    // Verify OTP
    if (Date.now() / 1000 > payload.expiry) {
      return NextResponse.json({ error: "OTP expired" }, { status: 400 });
    }

    const computedHash = await hmacHash(
      body.email,
      body.otp,
      payload.expiry,
      env,
    );
    if (computedHash !== payload.hash) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    if (!env || !env.DB) {
      return NextResponse.json(
        { error: "Database unavailable" },
        { status: 500 },
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
        ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      )
      .bind(
        body.participant1Name,
        body.participant2Name,
        body.email,
        body.phoneNumber,
        body.collegeName,
        body.state,
        body.city,
        0, // is_bangalore_based (removed question, defaulting to 0)
        body.willAttendOnline ? 0 : 1, // will_attend_in_person (mapping online:true to in_person:false)
        Date.now(),
      );

    await stmt.run();

    // Submit to Google Form
    try {
      const formData = new URLSearchParams();
      formData.append("entry.293269717", body.participant1Name);
      formData.append("entry.1099032952", body.participant2Name);
      formData.append("entry.1401420283", body.email);
      formData.append("entry.701631980", body.phoneNumber);
      formData.append("entry.399018039", body.collegeName);
      formData.append("entry.386400877", body.state);
      formData.append("entry.1502698996", body.city);
      formData.append("entry.124030429", "No"); // isBangaloreBased removed
      formData.append(
        "entry.711559939",
        body.willAttendOnline ? "No" : "Yes", // willAttendInPerson mapping
      );

      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdFCo6FgN2zioLrt6GL6t1UtdLkoINViaTU-sN7v2oZlxh2Tw/formResponse",
        {
          method: "POST",
          body: formData,
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        },
      );
    } catch (formErr) {
      console.error("Google Form submission failed", formErr);
      // Do not fail registration if form submission fails
    }

    if (env.google_token) {
      try {
        const kv = env.google_token;
        const stored = await kv.get<GoogleTokens>(KV_KEY, "json");
        if (stored) {
          const { refresh_token } = stored;
          let access_token = stored.access_token;
          let access_token_expires_at = stored.access_token_expires_at;
          if (Date.now() > access_token_expires_at - 60 * 1000) {
            const newTokens = await refreshAccessToken(refresh_token, env);
            access_token = newTokens.access_token;
            access_token_expires_at = Date.now() + newTokens.expires_in * 1000;
            await kv.put(
              KV_KEY,
              JSON.stringify({
                access_token,
                refresh_token,
                access_token_expires_at,
              }),
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
    // Clear OTP session token after successful registration
    response.cookies.delete("access_token");

    return response;
  } catch (error: unknown) {
    console.error("Registration Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    if (errorMessage.includes("UNIQUE constraint failed")) {
      return NextResponse.json(
        { error: "Email already registered" },
        { status: 409 },
      );
    }
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
