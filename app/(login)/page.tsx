import styles from "./page.module.css";
import LoginForm from "../ui/login-form";

export default function Home() {
  return (
    <>
      <button>Continue With Google</button>
      <p>or</p>
      <LoginForm/>
    </>    
  );
}
