import type { NextAuthConfig } from 'next-auth';

const loggedInLandingPage = '/display';
 
export const authConfig = {
  pages: {
    signIn: '/',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnLandingPage = nextUrl.pathname.startsWith(loggedInLandingPage);
      if (isOnLandingPage) {
        return isLoggedIn;
      } else if (isLoggedIn) {
        return Response.redirect(new URL(loggedInLandingPage, nextUrl));
      }
      return true;
    },
  },
  providers: [],
  secret: "feb8a3bf36efb52135cfa781d0384d25",
} satisfies NextAuthConfig;