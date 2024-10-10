"use client";

import { useUser } from "@auth0/nextjs-auth0/client";
import CardProfile from "@/components/card-profile";
import { motion } from "framer-motion";
import usePlayerStore from "@/store/player";
import { useEffect } from "react";

const SelectOX = () => {
  const { user, error, isLoading } = useUser();
  const { player, setPlayer, playerData, setPlayerData } = usePlayerStore();

  useEffect(() => {
    setPlayer(null);
    setPlayerData(null);
  }, []);

  useEffect(() => {
    console.log("player ==>", player);
  }, [player]);

  useEffect(() => {
    const img = user?.picture;
    const name = user?.name;
    const ox = player;
    if (img && name && ox) {
      setPlayerData({ imageSrc: img, name: name, ox: player });
    }
  }, [player]);

  const cardVariants = {
    hover: { scale: 1.1 },
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <div
      className="h-[calc(100vh-80px)] min-h-screen md:min-h-[80vh] w-full"
    >
      <main className="flex flex-col md:flex-row gap-[70px] md:gap-[80px] h-full w-full items-center justify-center">
        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="hover:scale-110"
          onClick={() => setPlayer("X")}
        >
          <CardProfile
            imageSrc={user?.picture as string}
            id={user?.name as string}
            ox="X"
          />
        </motion.div>

        <span className="text-2xl md:text-4xl font-bold text-white">OR</span>

        <motion.div
          variants={cardVariants}
          initial="initial"
          animate="animate"
          whileHover="hover"
          className="hover:scale-110"
          onClick={() => setPlayer("O")}
        >
          <CardProfile
            imageSrc={user?.picture as string}
            id={user?.name as string}
            ox="O"
          />
        </motion.div>
      </main>
    </div>
  );
};

export default SelectOX;
