import { OAuthStrategy, createClient } from "@wix/sdk";
import { NextRequest, NextResponse } from "next/server";
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";

// const isPublicRoute = createRouteMatcher([
//   "/projects",
//   "/sign-in(.*)",
//   "/sign-up(.*)",
// ]);

const isProtectedRoute = createRouteMatcher([
  "/product-db-create(.*)",
  "/products(.*)",
  "/sign-up(.*)",
]);

const isAdminRoute = createRouteMatcher(["/admin(.*)"]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  if (isProtectedRoute(req) && !userId) {
    return redirectToSignIn();
  }
  if (
    isAdminRoute(req) &&
    (await auth()).sessionClaims?.metadata?.role !== "admin"
  ) {
    const url = new URL("/", req.url);
    return NextResponse.redirect(url);
  }

  // if (!userId && !isPublicRoute(req)) {
  //   // Add custom logic to run before redirecting

  //   return redirectToSignIn();
  // }
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
// export const middleware = async (request: NextRequest) => {
//   const cookies = request.cookies;
//   const res = NextResponse.next();

//   if (cookies.get("refreshToken")) {
//     return res;
//   }

//   const wixClient = createClient({
//     auth: OAuthStrategy({ clientId: process.env.NEXT_PUBLIC_WIX_CLIENT_ID! }),
//   });

//   const tokens = await wixClient.auth.generateVisitorTokens();
//   res.cookies.set("refreshToken", JSON.stringify(tokens.refreshToken), {
//     maxAge: 60 * 60 * 24 * 30,
//   });

//   return res;
// };
