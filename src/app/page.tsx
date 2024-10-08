"use client";

import Image from "next/image"; // Note: This import is not currently used
import { useUser } from "@auth0/nextjs-auth0/client";

export default function Home() {
  const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;

  if (!user) {
    window.location.href = "/login";
  }

  return (
    <div className="h-full w-full">
      <main className="flex flex-col h-full w-full items-center justify-center">
      </main>
    </div>
  );
}
