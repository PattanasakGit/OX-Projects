import type { Metadata } from "next";
import "./globals.css";

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
      <body>{children}</body>
    </html>
  );
}
