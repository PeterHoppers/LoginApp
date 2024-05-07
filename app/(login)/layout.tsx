import type { Metadata } from "next";
import { Inter } from "next/font/google";
import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main className={styles.main}>
      <section className={`card ${styles.section}`}>
        <h1>The Login Application</h1>
        {children}    
      </section>
    </main>
  );
}