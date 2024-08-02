import { NextRequest, NextResponse } from 'next/server'

// export default function middleware(req: NextRequest) {
//   const publicRoutes = ['/', 'login', 'register']

//   let cookie = req.cookies.get('accessToken')

//   if (!cookie && !publicRoutes.includes(req.nextUrl.pathname)) {
//     console.log(req.url)
//     return Response.redirect(new URL('/login'))
//   }
// }

// export const config = {
//   matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/(api|trpc)(.*)']
// }
