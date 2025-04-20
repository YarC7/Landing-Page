import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyJWT } from "./lib/jwt";

// Define protected routes that require authentication
const protectedRoutes = [
  /^\/product-db-create($|\/.*$)/,
  /^\/products($|\/.*$)/,
];

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

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

