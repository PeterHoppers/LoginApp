'use client';

import { useSession } from "next-auth/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  const {data: session} = useSession();

  return (
    <main>
      <section>
        {session && <p>In a session</p>}
        <p>Display!</p>
        {children}
      </section>
    </main>
  );
}