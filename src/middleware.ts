import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./lib/jwt";

// Define protected routes that require authentication
const protectedRoutes = [
  /^\/product-db-create($|\/.*$)/,
  /^\/products($|\/.*$)/,
];

// Rate limiting configuration
const RATE_LIMIT = {
  windowMs: 15 * 60 * 1000, // 15 minutes
  maxAttempts: 5,
};

// In-memory store for rate limiting (in production, use Redis or similar)
const loginAttempts = new Map<string, { count: number; resetTime: number }>();

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const ip = request.ip || 'unknown';

  // Rate limiting for login attempts
  if (pathname === '/api/auth/login') {
    const now = Date.now();
    const attempt = loginAttempts.get(ip);

    if (attempt) {
      if (now > attempt.resetTime) {
        // Reset if window has passed
        loginAttempts.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
      } else if (attempt.count >= RATE_LIMIT.maxAttempts) {
        return NextResponse.json(
          { 
            success: false, 
            message: 'Too many login attempts. Please try again later.',
            retryAfter: Math.ceil((attempt.resetTime - now) / 1000)
          },
          { 
            status: 429,
            headers: {
              'Retry-After': Math.ceil((attempt.resetTime - now) / 1000).toString()
            }
          }
        );
      } else {
        // Increment attempt count
        loginAttempts.set(ip, { ...attempt, count: attempt.count + 1 });
      }
    } else {
      // First attempt
      loginAttempts.set(ip, { count: 1, resetTime: now + RATE_LIMIT.windowMs });
    }
  }

  // Block register route
  if (pathname === '/api/auth/register') {
    return NextResponse.json(
      { success: false, message: 'Registration is currently disabled' },
      { status: 404 }
    );
  }

  // Check if the requested path is protected
  const isProtectedRoute = protectedRoutes.some((route) => 
    route.test(pathname)
  );

  if (isProtectedRoute) {
    const token = request.cookies.get("token")?.value;
    console.log("Middleware - Checking token for path:", pathname);
    console.log("Middleware - Token present:", !!token);

    if (!token) {
      console.log("Middleware - No token found, redirecting to login");
      return NextResponse.redirect(new URL("/login", request.url));
    }

    const verified = await verifyJWT(token);
    console.log("Middleware - Token verification result:", !!verified);
    
    if (!verified) {
      console.log("Middleware - Invalid token, redirecting to login");
      return NextResponse.redirect(new URL("/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};

