import React from "react";

interface WinRoundProps {
  winRounds: number;
}

const WinRound: React.FC<WinRoundProps> = ({ winRounds }) => {
  return (
    <div className="py-1 px-4 text-xl border-4 border-just_yellow text-just_yellow text-center rounded-full bg-just_pink mt-4">
      <span>Score : </span>
      <span className="font-bold"> {winRounds} </span>
    </div>
  );
};

export default WinRound;
