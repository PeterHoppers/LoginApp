import styles from "./layout.module.css";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>      
      <section className={`card ${styles.section}`}>
        {children}
      </section>
    </main>
  );
}