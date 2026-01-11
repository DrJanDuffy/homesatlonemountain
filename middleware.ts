import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Add security headers
  response.headers.set('X-DNS-Prefetch-Control', 'on')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('X-Frame-Options', 'SAMEORIGIN')
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('Referrer-Policy', 'origin-when-cross-origin')
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')

  // Handle domain redirects (choose one canonical domain)
  // Option 1: Redirect www to non-www (remove this if using www as primary)
  // Option 2: Redirect non-www to www (uncomment this if using www as primary)
  
  // Currently disabled - let Vercel handle domain redirects at DNS level
  // Uncomment and adjust based on your canonical domain preference:
  
  // For non-www canonical (homesatlonemountain.com):
  // if (request.headers.get('host')?.startsWith('www.')) {
  //   const url = request.nextUrl.clone()
  //   url.host = url.host.replace('www.', '')
  //   return NextResponse.redirect(url, 301)
  // }
  
  // For www canonical (www.homesatlonemountain.com):
  // const host = request.headers.get('host')
  // if (host && !host.startsWith('www.')) {
  //   const url = request.nextUrl.clone()
  //   url.host = `www.${url.host}`
  //   return NextResponse.redirect(url, 301)
  // }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
} 