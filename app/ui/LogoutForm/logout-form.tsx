'use client';

import { signOut } from "next-auth/react";
import { LanguageStrings } from "@/lib/strings";
import styles from './logout-form.module.css';

export default function LogoutForm() {
    return (
        <>
         <form
              action={async () => {
                await signOut();
              }}
            >
              <button className={styles.signOut}>
                {LanguageStrings.LogOut}
              </button>
            </form>
        </>
      );
}