"use client";

import React from "react";
import { VolumeHigh, VolumeMute } from "iconsax-react";
import { motion } from "framer-motion";
import { useSound } from "@/app/soundProvider";

const SoundToggleButton: React.FC = () => {
  const { isMuted, toggleSound } = useSound() ?? {};

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
