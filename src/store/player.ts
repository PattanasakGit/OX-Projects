import { create } from "zustand";

interface PlayerStateType {
  player: "X" | "O" | null;
  setPlayer: (player: "X" | "O" | null) => void;

  playerData: {
    imageSrc: string;
    name: string;
    ox: string;
  } | null;
  setPlayerData: (
    playerData: {
      imageSrc: string;
      name: string;
      ox: string;
    } | null
  ) => void;

  resetData: () => void;
}

const usePlayerStore = create<PlayerStateType>((set) => ({
  player: null,
  playerData: null,
  setPlayer: (player: "X" | "O" | null) => set({ player }),
  setPlayerData: (
    playerData: {
      imageSrc: string;
      name: string;
      ox: string;
    } | null
  ) => set({ playerData }),
  resetData: () => set({ player: null, playerData: null }),
}));

export default usePlayerStore;
