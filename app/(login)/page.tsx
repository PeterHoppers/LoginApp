import styles from "./page.module.css";
import LoginForm from "../ui/login-form";

import GoogleLogin from "../ui/google-login";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <GoogleLogin/>
      <p>or</p>
      <LoginForm/>
    </div>    
  );
}
