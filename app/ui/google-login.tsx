"use client"

import { signIn, useSession } from "next-auth/react"

export default function GoogleLogin() {
    const {data: session} = useSession();
    
    return (
        <>
            {session ? 
            (
                <>
                    <h1>In a session</h1>
                </>
            ) : 
            (
                <>
                    <button onClick={() => signIn('google')}>Sign in with google</button>
                </>
            )

            }
        </>
    )
}