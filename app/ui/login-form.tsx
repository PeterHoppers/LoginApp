import Link from "next/link";

export default function LoginForm() {
    return (
        <form className="">
            <div className="">
                <label
                className=""
                htmlFor="email"
                >
                Email
                </label>
                <input
                    className=""
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Email"
                    required
                />
            </div>
            <div className="">
                <label
                className=""
                htmlFor="password"
                >
                Password
                </label>
                <input
                    className=""
                    id="password"
                    type="password"
                    name="password"
                    placeholder="Enter password"
                    required
                    minLength={6}
              />
            </div>
            <button>
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