import styles from "./page.module.css";
import LoginForm from "../ui/login-form";
import { signOut } from "next-auth/react";
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation';
import { authOptions } from "../lib/authOptions";

import LogoutForm from "../ui/logout-form";

export default async function DisplayPage() {
  const session = await getServerSession(authOptions);

  if(session === null){
    redirect("/");
  }

  return (
    <>
     <LogoutForm/>
    </>
  );
}
