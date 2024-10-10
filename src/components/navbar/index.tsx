"use client";

import SoundToggleButton from "@/components/button-music";
import { motion, AnimatePresence } from "framer-motion";
import { useUser } from "@auth0/nextjs-auth0/client";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Modal from "@/components/modal";
import {
  HambergerMenu,
  LogoutCurve,
  Maximize4,
  MinusSquare,
} from "iconsax-react";

const Navbar: React.FC = () => {
  const { user, error, isLoading } = useUser();
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const router = useRouter();

  if (isLoading) return <div>.</div>;
  if (error) return <div>{error.message}</div>;

  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleFullscreen = () => setIsFullscreen(!isFullscreen);

  return (
    <>
      <AnimatePresence>
        {!isFullscreen && user && (
          <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            exit={{ y: -100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="w-full bg-[#FFFBF550] p-1 shadow-lg rounded-b-3xl"
          >
            <div className="ml-[3%] mr-[1%] flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <span
                  className="text-[#333333] text-[30px] md:text-[42px] font-bold tracking-wide cursor-pointer"
                  style={{ WebkitTextStroke: "2px #33333350" }}
                  onClick={() => router.push("/")}
                >
                  Tic-
                  <span className="text-[#FFC400]">Tac</span>
                  -Toe
                </span>
                <div
                  className="hidden text-[#333333] lg:flex space-x-4 "
                  style={{ marginLeft: "50px" }}
                >
                  {["PlayGame", "Rules", "AboutUs"].map((item, index) => (
                    <motion.a
                      key={item}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() =>
                        router.push(
                          item === "PlayGame" ? "/" : `/${item.toLowerCase()}`
                        )
                      }
                      className="cursor-pointer hover:underline hover:decoration-just_red hover:decoration-4"
                    >
                      {item}
                    </motion.a>
                  ))}
                </div>
              </div>

              <div className="hidden lg:flex items-center space-x-4">
                <SoundToggleButton />

                <div className="flex items-center space-x-3 bg-[#FFF3E6] p-2 px-3 rounded-full shadow-inner">
                  <img
                    src={user.picture || ""}
                    alt={user.name || ""}
                    className="w-10 h-10 rounded-full border-4 border-[#FF8A65] shadow-sm"
                  />
                  <div className="text-left">
                    <p className="text-[#333333] font-bold text-[12px]">
                      {user.name}
                    </p>
                    <p className="text-[#666666] text-[12px]">{user.email}</p>
                  </div>
                </div>
                <button
                  onClick={() => {
                    window.location.href = "/api/auth/logout";
                  }}
                  className="bg-[#FF8A65] text-white px-5 py-2 rounded-full shadow-md hover:bg-[#FFC400] hover:text-[#333333] transition duration-300 flex items-center space-x-2"
                >
                  <LogoutCurve size="24" color="#FFFFFF" />
                  <span>Logout</span>
                </button>
                <button
                  onClick={toggleFullscreen}
                  className="text-[#333333] p-2 rounded-full bg-[#ffffff50] hover:bg-[#FFF3E6] transition "
                  style={{ marginLeft: "80px" }}
                >
                  <Maximize4 size="20" color="#FF8A65" />
                </button>
              </div>

              <div className="flex items-center space-x-2 lg:hidden">
                <button
                  onClick={toggleFullscreen}
                  className="text-[#333333] p-2 rounded-full bg-[#ffffff50] hover:bg-[#FFF3E6] transition "
                  style={{ marginLeft: "80px" }}
                >
                  <Maximize4 size="20" color="#FF8A65" />
                </button>
                <button
                  onClick={toggleModal}
                  className=" text-[#333333] p-2 rounded-full bg-[#ffffff50] hover:bg-[#FFF3E6] transition"
                >
                  <HambergerMenu size="24" color="#FF8A65" />
                </button>
              </div>
            </div>

            <Modal isOpen={isModalOpen} onClose={toggleModal}>
              <div className="flex flex-col items-center space-y-4">
                <div className="flex items-center space-x-3 bg-[#FFF3E6] p-2 px-3 rounded-full shadow-inner">
                  <img
                    src={user.picture || ""}
                    alt={user.name || ""}
                    className="w-16 h-16 rounded-full border-4 border-[#FF8A65] shadow-sm"
                  />
                  <div className="text-center">
                    <p className="text-[#333333] font-bold text-[16px]">
                      {user.name}
                    </p>
                    <p className="text-[#666666] text-[14px]">{user.email}</p>
                  </div>
                </div>

                {["PlayGame", "Rules", "AboutUs"].map((item, index) => (
                  <a
                    key={item}
                    onClick={() => {
                      toggleModal();
                      router.push(
                        item === "PlayGame" ? "/" : `/${item.toLowerCase()}`
                      );
                    }}
                    className="cursor-pointer py-2 text-lg font-semibold text-[#333333] bg-orange-300 h-full w-full flex items-center justify-center rounded-xl hover:text-[#FF4500] transition-colors duration-300 hover:underline hover:decoration-[#FF4500] hover:decoration-4"
                  >
                    {item}
                  </a>
                ))}

                <div className="py-4">
                  <SoundToggleButton />
                </div>

                <button
                  onClick={() => {
                    toggleModal();
                    window.location.href = "/api/auth/logout";
                  }}
                  className="bg-[#FF8A65] text-white px-8 py-2 rounded-full shadow-md hover:bg-[#FFC400] hover:text-[#333333] transition duration-300 flex items-center space-x-2"
                >
                  <LogoutCurve size="24" color="#FFFFFF" />
                  <span>Logout</span>
                </button>
              </div>
            </Modal>
          </motion.nav>
        )}
      </AnimatePresence>

      {isFullscreen && (
        <div className="fixed top-2 right-2">
          <button
            onClick={toggleFullscreen}
            className="bg-[#FF8A65] p-2 rounded-full shadow-lg hover:bg-[#FFC400] transition"
          >
            <MinusSquare size="24" color="#FFFFFF" />
          </button>
        </div>
      )}
    </>
  );
};

export default Navbar;
