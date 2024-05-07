import { Session } from "next-auth";
import LogoutForm from "./logout-form";
import styles from './session-display.module.css';

export default function SessionDisplay({session} : {session : Session}) {
    const loggedInUser = session.user;
    return (
        <>
            <h1>Hello there!</h1>
            <div className={styles.container}>
                <div className={styles.info}>
                    <span>Name:</span> 
                    <span>{loggedInUser?.name}</span>
                </div>
                <div className={styles.info}>
                    <span>Email:</span> 
                    <span>{loggedInUser?.email}</span>
                </div>
                <LogoutForm/>
            </div>            
        </>
    );
}