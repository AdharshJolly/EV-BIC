import { NextRequest, NextResponse } from "next/server";
import { serialize } from "cookie";
import { verifyJwt, hmacHash, signJwt } from "@/lib/auth-helpers";
import { JWTPayload } from "jose";

interface OtpJwtPayload extends JWTPayload {
  email: string;
  hash: string;
  expiry: number;
}

export async function POST(request: NextRequest) {
  try {
    const { otp } = (await request.json()) as { otp: string };
    const token = request.cookies.get("access_token")?.value;

    if (!token) {
      return NextResponse.json({ error: "Session expired" }, { status: 401 });
    }

    const payload = await verifyJwt(token);
    if (!payload) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 });
    }

    const { email, hash, expiry } = payload as OtpJwtPayload;

    if (Date.now() / 1000 > expiry) {
      return NextResponse.json({ error: "OTP expired" }, { status: 400 });
    }

    const computedHash = await hmacHash(email, otp, expiry);
    if (computedHash !== hash) {
      return NextResponse.json({ error: "Invalid OTP" }, { status: 400 });
    }

    // Issue Verified Token
    const verifiedToken = await signJwt({ email, verified: true });

    const cookie = serialize("verified_token", verifiedToken, {
      path: "/",
      httpOnly: true,
      sameSite: "strict",
      secure: process.env.NODE_ENV === "production",
      maxAge: 3600, // 1 hour to finish registration
    });

    const response = NextResponse.json({ success: true });
    response.headers.append("Set-Cookie", cookie);
    return response;
  } catch (error: unknown) {
    console.error("Verify Error:", error);
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error";
    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
