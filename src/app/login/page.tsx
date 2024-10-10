"use client";

import React from "react";
import Image from "next/image";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import tic_tac_toe_animation from "../../../public/lottiefiles/tic_tac_toe_animetion.json";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function LoginPage() {
  const { user, error, isLoading } = useUser();
  
  if ((user && !isLoading) ) {
    window.location.href = "/";
  }
  return (
    <div className="w-full h-screen flex items-center justify-center bg-[#ffa68b] bg-grid-pattern p-4 lg:p-0">
      <div className="w-full lg:w-4/5 h-full lg:h-4/5 grid grid-cols-1 lg:grid-cols-2 bg-white rounded-3xl shadow-xl">
        <div className="hidden lg:flex flex-col items-center justify-center bg-[#ff8a65] rounded-t-3xl lg:rounded-l-3xl lg:rounded-tr-none ">
          <motion.div
            className="mt-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Lottie animationData={tic_tac_toe_animation} loop={true} />
          </motion.div>
        </div>

        <div className="p-4 bg-white rounded-b-3xl lg:rounded-r-3xl lg:rounded-bl-none">
          <div className="flex flex-col items-center justify-start p-8  border-dashed border-[4px] rounded-2xl h-full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.5 }}
            >
              <Image
                height={800}
                width={800}
                src="/images/logo_bg.webp"
                alt="logo"
                className="rounded-3xl"
              />
            </motion.div>

            <motion.button
              className="mt-24 px-24 py-6 bg-[#f34954] text-white rounded-full text-[36px] font-semibold tracking-wide hover:bg-[#ff8a65] transition-all duration-300 ease-in-out"
              onClick={() => (window.location.href = "/api/auth/login")}
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
            >
              LOGIN
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}
