'use client';

import { signIn } from "next-auth/react";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { LanguageStrings } from "@/lib/strings";

import styles from './login-form.module.css';

export default function LoginForm() {
    const [error, setError] = useState<string>(""); 
    const router = useRouter();   
    const handleSubmit = async (
        e: React.FormEvent<HTMLFormElement>
    ): Promise<void> => {
        e.preventDefault();
        const _target = e.target as any;
        const email = _target.email.value;
        const password = _target.password.value;
        const result = await signIn("credentials", {
            email,
            password,
            redirect: false,
        });
        if (result?.error) {
            setError(result.error);
        } else {
            router.push("/display");
        }
    };
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
           <input
                className={styles.input}
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email text input"
                required
            />
            <input
                className={styles.input}
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password text input"
                required
                minLength={6}
              />
            <button 
                className={styles.login}
            >
                {LanguageStrings.LogIn}
            </button>
            {error !== "" && 
                <div>
                    <p className={styles.error}>{error}</p>
                </div>
            }
        </form>
    );
}