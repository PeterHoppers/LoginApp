'use client';

import { signOut } from "next-auth/react";
import { LanguageStrings } from "@/lib/strings";

export default function LogoutForm() {
    return (
        <>
         <form
              action={async () => {
                await signOut();
              }}
            >
              <button className="primary-button">
                {LanguageStrings.LogOut}
              </button>
            </form>
        </>
      );
}