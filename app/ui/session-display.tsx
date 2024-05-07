import { Session } from "next-auth";
import LogoutForm from "./logout-form";

export default function SessionDisplay({session} : {session : Session}) {
    const loggedInUser = session.user;
    return (
        <section>
            <h1>Hello there!</h1>
            <div>
                <p>Name: {loggedInUser?.name}</p>
                <p>Email: {loggedInUser?.email}</p>
            </div>
            <LogoutForm/>
        </section>
    );
}