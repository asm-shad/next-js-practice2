import { NextResponse } from "next/server";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

export async function middleware(req) {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  // Define protected routes
  const protectedRoutes = ["/profile", "/about", "/posts"];
  const pathname = req.nextUrl.pathname;

  // Redirect to login page if user is not authenticated
  if (protectedRoutes.includes(pathname) && !user) {
    return NextResponse.redirect(new URL("/api/auth/login", req.url));
  }

  return NextResponse.next();
}

// Apply the middleware only to specific routes
export const config = {
  matcher: ["/profile", "/about", "/posts"],
};
