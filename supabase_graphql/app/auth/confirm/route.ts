import { confirm } from "@/app/_serviceAction/AuthServiceAction";
import { type EmailOtpType } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const token_hash = searchParams.get("token_hash");
  const type = searchParams.get("type") as EmailOtpType | null;

  if (token_hash && type) {
    confirm(type, token_hash);
  }

  // return the user to an error page with some instructions
  const next = searchParams.get("next") ?? "/login";
  const redirectTo = request.nextUrl.clone();
  redirectTo.pathname = next;

  redirectTo.pathname = "/auth/auth-code-error";
  return NextResponse.redirect(redirectTo);
}
