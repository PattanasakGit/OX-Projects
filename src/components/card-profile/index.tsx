import { div } from "framer-motion/client";
import React, { useState } from "react";

interface CardProps {
  imageSrc: string;
  id: string;
  ox: string;
}

const CardProfile: React.FC<CardProps> = ({ imageSrc, id, ox }) => {
  const [imgSrc, setImgSrc] = useState(imageSrc || "/images/bot.webp");
  const displayName = id.includes('@') ? id.split('@')[0] : id;

  return (
    <div className="relative w-[280px] flex flex-col items-center px-4 pt-16 pb-6 bg-white rounded-[52px] shadow-2xl border-4 border-just_pink cursor-default">
      <div className="relative w-full flex justify-center mb-8">
        <div className="absolute top-[-120px] flex justify-center items-center w-[120px] h-[120px]">
          <img
            src={imgSrc}
            alt=""
            onError={() => setImgSrc("/images/profile.webp")}
            className="w-full h-full rounded-full border-[8px] object-cover shadow-3xl"
          />
          <div className="absolute inset-0 rounded-full border-4 border-just_pink"></div>
        </div>
      </div>
      <p className="w-full text-xl text-center font-bold text-gray-800 truncate">
        {displayName}
      </p>
      <span className="mt-8 bg-just_red text-just_yellow p-2 px-10 rounded-full hover:bg-red-500 flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 border-[4px] border-just_yellow">
        <span className="text-yellow-400 text-[30px] py-0 px-6 rounded-full font-black">
          {ox}
        </span>
      </span>
    </div>
  );
};

export default CardProfile;
