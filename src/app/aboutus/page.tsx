"use client";
import React from "react";
import { motion } from "framer-motion";
import { User, Clock, Heart } from "iconsax-react";

const AboutUs = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const scaleIn = {
    initial: { scale: 0.9, opacity: 0 },
    animate: { scale: 1, opacity: 1 },
    transition: { duration: 0.5 },
  };

  const buttonStyles = `
    p-4 bg-gradient-to-r from-[#ff8a65] to-[#f34954]
    text-white rounded-3xl transition-all 
    hover:scale-105 hover:shadow-lg hover:bg-[#ff8a65]
    active:scale-95 active:shadow-md 
  `;

  return (
    <div className="h-[90dvh] bg-[#ffa68b] text-[#333333] p-8">
      <motion.div
        className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl h-full overflow-auto"
        {...scaleIn}
      >
        <div className="bg-gradient-to-r from-[#ff8a65] to-[#f34954] p-8 text-white rounded-t-3xl">
          <motion.h1 className="text-4xl font-bold mb-4" {...fadeIn}>
            About Us
          </motion.h1>
          <motion.p className="text-xl" {...fadeIn} transition={{ delay: 0.2 }}>
            Designed and developed by Pattanasak A.
          </motion.p>
        </div>

        <div className="p-8">
          <motion.div className="mb-8" {...fadeIn} transition={{ delay: 0.4 }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Clock className="mr-2" variant="Bold" size={28} />
              Development Timeframe
            </h2>
            <p className="text-lg">≤ 4 days</p>
          </motion.div>

          <motion.div className="mb-8" {...fadeIn} transition={{ delay: 0.6 }}>
            <h2 className="text-2xl font-bold mb-4 flex items-center">
              <Heart className="mr-2" variant="Bold" size={28} />
              Credits
            </h2>
            <ul className="list-disc list-inside text-lg">
              <li>
                Images:
                <a
                  href="https://www.freepik.com"
                  className="text-[#f34954] hover:underline"
                >
                  Freepik
                </a>
              </li>
              <li>
                Sound:
                <a
                  href="https://www.youtube.com/watch?v=iJNOY8q4a70"
                  className="text-[#f34954] hover:underline"
                >
                  YouTube Link
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8"
            {...fadeIn}
            transition={{ delay: 0.8 }}
          >
            <button
              className={buttonStyles}
              onClick={() =>
                window.open(
                  "https://better-butter-d06.notion.site/OX-GAME-1191f906b7e08098b5c4c38e574efa38",
                  "_blank"
                )
              }
            >
              Read More About Project
            </button>
            <button
              className={buttonStyles}
              onClick={() =>
                window.open(
                  "https://github.com/PattanasakGit/OX-Projects",
                  "_blank"
                )
              }
            >
              GitHub
            </button>
            <button
              className={buttonStyles}
              onClick={() =>
                window.open("https://tptictactoe.my.canva.site/", "_blank")
              }
            >
              Document
            </button>
          </motion.div>

          <motion.div
            className="text-center mt-12"
            {...fadeIn}
            transition={{ delay: 1 }}
          >
            <User variant="Bold" size={64} className="mx-auto text-[#f34954]" />
            <p className="mt-4 text-xl font-semibold">
              Created with ❤️ by Pattanasak A.
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AboutUs;
