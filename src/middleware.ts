import { NextResponse, type NextRequest } from 'next/server';

export async function middleware(request: NextRequest) {
  let response = NextResponse.next();

  const sessionCookie = request.cookies.get('demo_session')?.value;
  let session = null;
  
  if (sessionCookie) {
    try {
      session = JSON.parse(sessionCookie);
    } catch (e) {
      session = null;
    }
  }

  const dashboardRoutes = ['/hr', '/colaborador', '/profesional', '/directorio'];
  const isDashboardRoute = dashboardRoutes.some(route => request.nextUrl.pathname.startsWith(route));
  const isHrRoute = request.nextUrl.pathname.startsWith('/hr');
  const isProfRoute = request.nextUrl.pathname.startsWith('/profesional');

  if (isDashboardRoute && !session) {
    return NextResponse.redirect(new URL('/auth/login', request.url));
  }

  // Verificación de roles (Demo)
  if (session && isDashboardRoute) {
    const role = session.role || 'B2C_User';

    // Proteger ruta de RRHH
    if (isHrRoute && role !== 'HR_Manager' && role !== 'Admin') {
      return NextResponse.redirect(new URL('/colaborador', request.url));
    }

    // Proteger ruta de Profesionales
    if (isProfRoute && role !== 'Profesional' && role !== 'Admin') {
      return NextResponse.redirect(new URL('/colaborador', request.url));
    }
  }

  return response;
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
};
