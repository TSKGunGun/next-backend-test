import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import AuthService from '@/app/_service/AuthService';

export async function middleware(request: NextRequest) {
  const authService = new AuthService();
  const isLogin = await authService.isLogin();

  if (request.nextUrl.pathname.startsWith('/login') && isLogin) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/register') && isLogin) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (request.nextUrl.pathname.startsWith('/') && !isLogin) {
    return NextResponse.redirect(new URL('/login', request.url));
  }
}

export const config = {
  macher: ['/', '/login', '/register']
}