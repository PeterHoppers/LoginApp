import styles from "./page.module.css";
import LoginForm from "../ui/login-form";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <button>Continue With Google</button>
      <p>or</p>
      <LoginForm/>
    </div>    
  );
}
