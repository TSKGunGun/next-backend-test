import { NextResponse, type NextRequest } from "next/server";
import { updateSession } from "@/app/_utils/supabase/middleware";
import { isLogin } from "./app/_serviceAction/AuthServiceAction";

export async function middleware(request: NextRequest) {
  const isLoggedIn = await isLogin();

  if (isLoggedIn && request.nextUrl.pathname.startsWith("/login")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (isLoggedIn && request.nextUrl.pathname.startsWith("/register")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!isLoggedIn && request.nextUrl.pathname === "/") {
    console.log(request.nextUrl.pathname);
    return NextResponse.redirect(new URL("/login", request.url));
  }

  let res = await updateSession(request);
}

export const config = {
  macher: [
    "/",
    "/login",
    "/register",
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
