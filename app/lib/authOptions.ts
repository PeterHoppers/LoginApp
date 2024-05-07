import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import CredentialsProvider from "next-auth/providers/credentials";
import { z } from 'zod';
import bcrypt from 'bcrypt';
import { getUser } from "./data";

export const authOptions: NextAuthOptions = {
    pages: {
        signIn: '/',
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
                    throw new Error("Invalid email was provided.");
                }
                const passwordsMatch = await bcrypt.compare(password, user.password);               
                
                if (passwordsMatch) {
                    return user;
                } else {
                    throw new Error("Invalid password was provided.");
                }
              }
       
              throw new Error("Provided credentials are not formatted in the correct fashion.");
            },
          }),
    ],
    session: {
        strategy: "jwt",
    },
    secret: process.env.NEXTAUTH_SECRET
}