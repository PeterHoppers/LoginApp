"use client"

import { signIn } from "next-auth/react"
import Image from "next/image"
import styles from './google-login.module.css';
import { LanguageStrings } from "@/lib/strings";

export default function GoogleLogin() {    
    return (
        <>
            <div 
                className={styles.google}
                onClick={() => signIn('google')}>
                    <Image src={"/google.svg"} alt="Google's logo" width={25} height={25}/>
                    <span>{LanguageStrings.GoogleLogin}</span>
            </div>
        </>
    )
}