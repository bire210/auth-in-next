import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  const isPublicPath = path === '/login' || path === '/signup' || path === '/verifyemail'

  const token = request.cookies.get('token')?.value || '';

console.log(isPublicPath,token);
  if(isPublicPath && token) {
    console.log("inside **********************8")
    return NextResponse.redirect(new URL('/profile', request.nextUrl))
  }

  if (!isPublicPath && !token) {
    console.log("inside &&&&&&&&&&&&&&&&&&&&&&&&&&");
    return NextResponse.redirect(new URL('/login', request.nextUrl))
  }
   console.log("**********************************") 
}

 
// See "Matching Paths" below to learn more
export const config = {
  matcher: [
    '/',
    '/profile',
    '/login',
    '/signup',
    '/verifyemail'
  ]
}