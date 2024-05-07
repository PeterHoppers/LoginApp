'use client';

import { signOut } from "next-auth/react";

export default function LogoutForm() {
    return (
        <>
         <form
              action={async () => {
                await signOut();
              }}
            >
              <button>
                Sign Out
              </button>
            </form>
        </>
      );
}