import { NextAuthOptions } from "next-auth"
import {db} from "@/lib/db"
import { PrismaAdapter } from "@auth/prisma-adapter";
import GoogleProvider from "next-auth/providers/google";

function getGoogleCredentials() {
    // if (!process.env.GOOGLE_CLIENT_ID || !process.env.GOOGLE_CLIENT_SECRET) {
    //     throw new Error(
    //         "Missing Google client ID and/or client secret environment variables."
    //     );
    // }

    return {
        clientId: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    };
}

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(db),
    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: "/login",
    },
    providers: [
        GoogleProvider({
            clientId: getGoogleCredentials().clientId,
            clientSecret: getGoogleCredentials().clientSecret,
        }),
    
    ],
    callbacks: {
        async session({token, session}) {
            if (token) {
                session.user.id = token.id
                session.user.name = token.name
                session.user.email = token.email
                session.user.image = token.picture
                
            }
            return session
        },
        async jwt({token, user}) {
            const dbUser = await db.user.findFirst({
                where: {
                    email: token.email,
                },
            })
            if (!dbUser) {
                token.id = user!.id
                return token
            }
            return {
                id: dbUser.id,
                name: dbUser.name,
                email: dbUser.email,
                picture: dbUser.image,
            }
        },
        redirect() {
            return '/home'
        },
    },
}