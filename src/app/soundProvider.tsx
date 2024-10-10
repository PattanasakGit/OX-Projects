"use client";

import React, {
  createContext,
  useContext,
  useState,
  useRef,
  useEffect,
} from "react";

interface SoundContextType {
  isMuted: boolean;
  toggleSound: () => void;
}

const SoundContext = createContext<SoundContextType | undefined>(undefined);

export const useSound = () => useContext(SoundContext);

export const SoundProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedMuteState = localStorage.getItem("isMuted");
    const initialMuteState = savedMuteState
      ? JSON.parse(savedMuteState)
      : false;

    setIsMuted(true);
    audioRef.current = new Audio("/sounds/musicBackground.mp3");
    audioRef.current.loop = true;
    audioRef.current.volume = 0.3;

    if (!initialMuteState) {
      audioRef.current.play();
    }

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleSound = () => {
    setIsMuted((prevMuted) => {
      const newMutedState = !prevMuted;

      if (audioRef.current) {
        if (newMutedState) {
          audioRef.current.pause();
          audioRef.current.currentTime = 0;
        } else {
          audioRef.current.play();
        }
      }
      localStorage.setItem("isMuted", JSON.stringify(newMutedState));
      return newMutedState;
    });
  };

  return (
    <SoundContext.Provider value={{ isMuted, toggleSound }}>
      {children}
    </SoundContext.Provider>
  );
};
