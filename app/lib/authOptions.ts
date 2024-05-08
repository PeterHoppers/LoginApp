import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { getUser } from "./data";
import { LanguageStrings, Page } from "@/lib/strings";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: Page.LogIn,
    },
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
        }),
        CredentialsProvider({
            name: "Credentials",
            credentials: {
                email: { label: "Email", type: "text"},
                password: { label: "Password", type: "password" }
              },
            async authorize(credentials) {
              const parsedCredentials = z
                .object({ email: z.string().email(), password: z.string().min(6) })
                .safeParse(credentials);
       
              if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;
                const user = await getUser(email);
                if (!user) {
                    throw new Error(LanguageStrings.Error_Email);
                }
                const passwordsMatch = await bcrypt.compare(password, user.password);               
                
                if (passwordsMatch) {
                    return user;
                } else {
                    throw new Error(LanguageStrings.Error_Password);
                }
              }
       
              throw new Error(LanguageStrings.Error_Formatting);
            },
          }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET
}