import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';
import { routing } from './i18n/routing';

const intlMiddleware = createMiddleware(routing);

import type { NextRequest } from 'next/server';

export default function middleware(req: NextRequest) {
  const path = req.nextUrl.pathname;

  // Skip next-intl middleware for API routes, sitemap, and robots (no locale in sitemap routes)
  if (path.includes('/api') || path.startsWith('/sitemap') || path === '/robots.txt') {
    return NextResponse.next();
  }

  return intlMiddleware(req);
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest|mp4|webm|mov|avi)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
  // matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};
