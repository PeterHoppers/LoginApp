'use client';

import styles from "./page.module.css";
import LoginForm from "../ui/login-form";
import { signOut } from "next-auth/react";

export default function DisplayPage() {
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
