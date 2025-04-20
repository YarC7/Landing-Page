import * as jose from 'jose';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

export function signJWT(payload: any) {
  const secret = new TextEncoder().encode(JWT_SECRET);
  return new jose.SignJWT(payload)
    .setProtectedHeader({ alg: 'HS256' })
    .setExpirationTime('1d')
    .sign(secret);
}

export async function verifyJWT(token: string) {
  try {
    console.log("JWT - Verifying token");
    const secret = new TextEncoder().encode(JWT_SECRET);
    const { payload } = await jose.jwtVerify(token, secret);
    console.log("JWT - Token verified successfully");
    return payload;
  } catch (error) {
    console.error("JWT - Token verification failed:", error);
    return null;
  }
} 