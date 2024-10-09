"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import SelectOX from "@/components/views/selectOX";
import TicTacToeGame from "@/components/main-game";
import usePlayerStore from "@/store/player";

export default function Home() {
  const { user, error, isLoading } = useUser();
  const { playerData } = usePlayerStore();

  if (error) return <div>{error.message}</div>;
  if (!user && !isLoading) {
    window.location.href = "/login";
  }

  return (
    <div className="h-[calc(100vh-80px)] min-h-screen md:min-h-[80vh] w-full">
      {!isLoading && !playerData && <SelectOX />}
      {playerData && <TicTacToeGame />}
    </div>
  );
}
