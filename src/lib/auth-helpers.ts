import { SignJWT, jwtVerify, JWTPayload } from "jose";

const JWT_SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || "your-jwt-signing-secret-should-be-in-env"
);
const HMAC_SECRET = new TextEncoder().encode(
  process.env.HMAC_SECRET || "your-hmac-secret-should-be-in-env"
);

export const KV_KEY = "google_tokens";
export const GOOGLE_CLIENT_ID =
  process.env.GOOGLE_CLIENT_ID || "your-google-client-id"; // Should be env
export const GOOGLE_CLIENT_SECRET =
  process.env.GOOGLE_CLIENT_SECRET || "your-google-client-secret"; // Should be env

export async function hmacHash(
  email: string,
  otp: string,
  expiry: number
): Promise<string> {
  const data = new TextEncoder().encode(`${email}|${otp}|${expiry}`);
  const key = await crypto.subtle.importKey(
    "raw",
    HMAC_SECRET,
    { name: "HMAC", hash: "SHA-256" },
    false,
    ["sign"]
  );
  const sig = await crypto.subtle.sign("HMAC", key, data);
  return Buffer.from(sig).toString("hex");
}

export function encodeBase64(str: string) {
  return btoa(unescape(encodeURIComponent(str)))
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");
}

export async function refreshAccessToken(refresh_token: string) {
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: GOOGLE_CLIENT_ID,
      client_secret: GOOGLE_CLIENT_SECRET,
      refresh_token,
      grant_type: "refresh_token",
    }),
  });
  if (!res.ok) throw new Error("Failed to refresh token");
  return await res.json();
}

export async function sendOtpEmail(
  access_token: string,
  email: string,
  otp: string
) {
  const rawEmail = [
    `From: VSDIAT <vsdiat@vlsisystemdesign.com>`,
    `To: ${email}`,
    `Subject: Your EV BIC OTP Code is ${otp}`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    `<h3>Your OTP code for EV BIC is <strong>${otp}</strong></h3>`,
  ].join("\r\n");

  const encodedMessage = encodeBase64(rawEmail);

  const res = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: encodedMessage }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Gmail API Error:", err);
    throw new Error("Failed to send email");
  }
}

export async function signJwt(payload: JWTPayload) {
  return await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setExpirationTime("10m")
    .sign(JWT_SECRET);
}

export async function verifyJwt(token: string) {
  try {
    const { payload } = await jwtVerify(token, JWT_SECRET);
    return payload;
  } catch {
    return null;
  }
}

export async function sendConfirmationEmail(
  access_token: string,
  email: string
) {
  const rawEmail = [
    `From: VSDIAT <vsdiat@vlsisystemdesign.com>`,
    `To: ${email}`,
    `Subject: EV BIC Registration Confirmed`,
    `Content-Type: text/html; charset=UTF-8`,
    "",
    `<h3>Registration Successful</h3><p>Thank you for registering for the EV Battery Intelligence Challenge.</p>`,
  ].join("\r\n");

  const encodedMessage = encodeBase64(rawEmail);

  const res = await fetch(
    "https://gmail.googleapis.com/gmail/v1/users/me/messages/send",
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${access_token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ raw: encodedMessage }),
    }
  );

  if (!res.ok) {
    const err = await res.text();
    console.error("Gmail API Error:", err);
  }
}
