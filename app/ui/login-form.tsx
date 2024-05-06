import Link from "next/link";
import styles from "./login-form.module.css";

export default function LoginForm() {
    return (
        <form className={styles.form}>
           <input
                className=""
                id="email"
                type="email"
                name="email"
                placeholder="Email"
                aria-label="Email text input"
                required
            />
            <input
                className=""
                id="password"
                type="password"
                name="password"
                placeholder="Password"
                aria-label="Password text input"
                required
                minLength={6}
              />
            <button className="primary-button">
                Login
            </button>
            <Link
                href={"/create"}
            >
                Create Account
            </Link>
        </form>
    );
}