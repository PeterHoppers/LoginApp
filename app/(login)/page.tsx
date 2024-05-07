import styles from "./page.module.css";
import LoginForm from "../ui/login-form";
import { getServerSession } from "next-auth/next"
import { redirect } from 'next/navigation';
import { authOptions } from "../lib/authOptions";

import GoogleLogin from "../ui/google-login";

export default async function LoginPage() {
  const session = await getServerSession(authOptions);

  if(session !== null){
    redirect("/display");
  }

  return (
    <div className={styles.container}>
      <GoogleLogin/>
      <p>or</p>
      <LoginForm/>
    </div>    
  );
}
