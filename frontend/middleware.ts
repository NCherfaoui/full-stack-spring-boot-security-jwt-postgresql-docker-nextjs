// Without a defined matcher, this one line applies next-auth
// to the entire project

// Applies next-auth only to matching routes - can be regex
// See: https://nextjs.org/docs/app/building-your-application/routing/middleware
/*
 export const config = {
 api: {
   externalResolver: true,
 },
    async rewrites() {
    return [
        {
        source: '/api/auth/:path*',
        destination: '/api/auth',
        },
    ]
    },
    async redirects() {
        return [
            {
                source: '/api/auth',
                destination: '/',
                permanent: true,
            },
        ]
    },
}
*/

//export { default } from "next-auth/middleware"
import NextAuth from "next-auth";
import { options } from "./app/api/auth/[...nextauth]/options";

export default function middleware(req, res, next) {
  // Utilisez NextAuth comme middleware
  NextAuth(req, res, options);

  // Passez à la prochaine fonction middleware
  next();
}