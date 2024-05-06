import styles from "./page.module.css";
import LoginForm from "../ui/login-form";
import { signOut } from "@/auth";

export default function DisplayPage() {
  return (
    <>
     <form
          action={async () => {
            'use server';
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
