import React from 'react';
import { motion } from 'framer-motion';
import { Cup } from 'iconsax-react';

interface EnergyBarProps {
  maxValue: number;
  currentValue: number;
}

const EnergyBar: React.FC<EnergyBarProps> = ({ maxValue, currentValue }) => {
  const percentage = (currentValue / maxValue) * 100;

  return (
    <div className="relative w-full h-6 bg-[#ffffff50] border-2 rounded-full overflow-hidden mt-2">
      <motion.div
        className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#ff8a65] to-[#ffc400]"
        style={{ width: `${percentage}%` }}
        initial={{ width: 0 }}
        animate={{ width: `${percentage}%` }}
        transition={{ duration: 0.5 }}
      />
      {[...Array(maxValue)].map((_, index) => (
        <div
          key={index}
          className="absolute top-0 bottom-0 w-[2px] bg-white opacity-50"
          style={{ left: `${((index + 1) / maxValue) * 100}%` }}
        />
      ))}
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-between px-4">
        <Cup variant="Bold" size={16} color="#f34954" />
        <span className="text-white font-bold">{`${currentValue}/${maxValue}`}</span>
      </div>
    </div>
  );
};

export default EnergyBar;