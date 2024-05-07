import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import styles from "./layout.module.css";
import SessionWrapper from "./components/sessionwrapper";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Login App",
  description: "A simple login application that can be branded to fit user needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <SessionWrapper>
        <html lang="en">
          <body className={`${inter.className}`}>
            <main>
              <section className={`card`}>        
                {children}    
              </section>
            </main>
          </body>
        </html>
    </SessionWrapper>
    
  );
}
