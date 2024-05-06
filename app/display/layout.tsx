export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <section>
        <p>Display!</p>
        {children}
      </section>
    </main>
  );
}