import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export default function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Get authentication state from cookies
  const token = request.cookies.get('auth_token')?.value;

  const isAuthenticated = !!token;

  if (pathname.startsWith('/home') && !isAuthenticated) {
    // Redirect unauthenticated users trying to access protected routes
    const loginUrl = new URL('/login', request.url);
    return NextResponse.redirect(loginUrl);
  }
  // All checks passed
  return NextResponse.next();
}

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
