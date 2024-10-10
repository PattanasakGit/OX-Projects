import React, { useState, useRef, useEffect } from "react";
import { VolumeHigh, VolumeMute } from "iconsax-react";
import { motion } from "framer-motion";

const SoundToggleButton: React.FC = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const savedMuteState = localStorage.getItem("isMuted");
    const initialMuteState = savedMuteState
      ? JSON.parse(savedMuteState)
      : false;

    setIsMuted(initialMuteState);
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
    <div className="relative flex items-center justify-center">
      {!isMuted && (
        <>
          <motion.div
            className="absolute rounded-full bg-just_pink"
            style={{
              width: "45px",
              height: "45px",
              zIndex: -1,
            }}
            animate={{ scale: [1, 1.4, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <motion.div
            className="absolute rounded-full bg-just_pink"
            style={{
              width: "50px",
              height: "50px",
              zIndex: -2,
            }}
            animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </>
      )}

      <motion.button
        onClick={toggleSound}
        className={`p-2 rounded-full shadow-md transition-colors ${
          isMuted ? "bg-just_gray" : "bg-just_pink"
        } hover:bg-just_red`}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        {isMuted ? (
          <VolumeMute size={24} color="#ffffff" />
        ) : (
          <VolumeHigh size={24} color="#ffffff" />
        )}
      </motion.button>
    </div>
  );
};

export default SoundToggleButton;
