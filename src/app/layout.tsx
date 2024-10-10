import { UserProvider } from "@auth0/nextjs-auth0/client";
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import { SoundProvider } from "./soundProvider";

export const metadata: Metadata = {
  title: "ox-projects",
  description: "Tic-Tac-Toe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <UserProvider>
          <SoundProvider>
            <Navbar />
            {children}
          </SoundProvider>
        </UserProvider>
      </body>
    </html>
  );
}
