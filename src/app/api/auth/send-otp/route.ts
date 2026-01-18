import { NextRequest, NextResponse } from "next/server";
import { getCloudflareContext } from "@opennextjs/cloudflare";
import { serialize } from "cookie";
import {
  hmacHash,
  signJwt,
  sendOtpEmail,
  refreshAccessToken,
  KV_KEY,
  CloudflareEnv,
} from "@/lib/auth-helpers";

interface GoogleTokens {
  access_token: string;
  refresh_token: string;
  access_token_expires_at: number;
}

export async function POST(request: NextRequest) {
  try {
    const { email } = (await request.json()) as { email: string };
    if (!email) {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    // Get Cloudflare context early to check for duplicate email
    let env: CloudflareEnv | undefined;
    try {
      const ctx = await getCloudflareContext();
      env = ctx.env as CloudflareEnv;
    } catch (_e) {
      console.warn("Could not get Cloudflare context (local dev?)", _e);
    }

    // Check if email already registered
    if (env?.DB) {
      const existing = await env.DB.prepare(
        "SELECT email FROM registrations WHERE email = ?",
      )
        .bind(email)
        .first<{ email: string }>();

      if (existing) {
        return NextResponse.json(
          { error: "Email already registered" },
          { status: 409 },
        );
      }
    }

    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    const expiry = Math.floor(Date.now() / 1000) + 600; // 10 mins

    const hash = await hmacHash(email, otp, expiry, env);
    const jwt = await signJwt({ email, expiry, hash }, env);

    // Handle KV for Email (reuse env from earlier)
    if (env?.google_token) {
      const kv = env.google_token;
      const stored = await kv.get<GoogleTokens>(KV_KEY, "json");

      if (stored) {
        const { refresh_token } = stored;
        let access_token = stored.access_token;
        let access_token_expires_at = stored.access_token_expires_at;

        // Refresh if needed
        if (Date.now() > access_token_expires_at - 60 * 1000) {
          try {
            const newTokens = await refreshAccessToken(refresh_token, env);
            access_token = newTokens.access_token;
            // Update expiry (assuming expires_in is seconds)
            access_token_expires_at = Date.now() + newTokens.expires_in * 1000;

            await kv.put(
              KV_KEY,
              JSON.stringify({
                access_token,
                refresh_token, // Keep old refresh token if not returned
                access_token_expires_at,
              }),
            );
          } catch (err) {
            console.error("Token refresh failed", err);
            return NextResponse.json(
              { error: "Email service unavailable" },
              { status: 500 },
            );
          }
        }

        try {
          await sendOtpEmail(access_token, email, otp);
        } catch {
          console.warn(
            "Could not send email (check credentials), logging OTP to console instead.",
          );
          console.log(`\n--- [LOCAL DEV] OTP FOR ${email}: ${otp} ---\n`);
        }
      } else {
        console.log(`\n--- [LOCAL DEV] OTP FOR ${email}: ${otp} ---\n`);
      }
    } else {
      console.log(`\n--- [LOCAL DEV] OTP FOR ${email}: ${otp} ---\n`);
    }

    const cookie = serialize("access_token", jwt, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 600,
    });

    const response = NextResponse.json({ message: "OTP Sent" });
    response.headers.append("Set-Cookie", cookie);
    return response;
  } catch (error: unknown) {
    console.error("OTP Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
