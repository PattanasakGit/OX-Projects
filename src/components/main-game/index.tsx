import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowCircleLeft, User } from "iconsax-react";
import CardProfile from "@/components/card-profile";
import OrdinalNumber from "./roundDisplay";
import usePlayerStore from "@/store/player";
import WinRound from "../win-round";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [round, setRound] = useState(1);
  const [userWins, setUserWins] = useState(0);
  const [botWins, setBotWins] = useState(0);
  const { playerData, resetData } = usePlayerStore();

  const checkWinner = (squares: any[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  };

  const handleClick = (index: number) => {
    if (board[index] || !isUserTurn) return;
    const newBoard = [...board];
    newBoard[index] = "X";
    setBoard(newBoard);
    setIsUserTurn(false);
  };

  useEffect(() => {
    if (!isUserTurn) {
      const timer = setTimeout(() => {
        const emptySquares = board.reduce(
          (acc, val, idx) => (val === null ? [...acc, idx] : acc),
          []
        );
        if (emptySquares.length > 0) {
          const randomIndex =
            emptySquares[Math.floor(Math.random() * emptySquares.length)];
          const newBoard = [...board];
          newBoard[randomIndex] = "O";
          setBoard(newBoard);
          setIsUserTurn(true);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isUserTurn, board]);

  useEffect(() => {
    const winner = checkWinner(board);
    if (winner || board.every((square) => square !== null)) {
      // Handle game end
      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setRound(round + 1);
        if (winner === "X") setUserWins(userWins + 1);
        if (winner === "O") setBotWins(botWins + 1);
      }, 1500);
    }
  }, [board]);

  return (
    <div>
      <button
        onClick={resetData}
        className="border-4 border-[#ffffff50] rounded-full m-8 hover:bg-just_pink"
      >
        <ArrowCircleLeft size="56" color="#ffc400" />
      </button>
      <div className="w-full flex flex-col items-center justify-center h-full bg-[--background] text-[--just_gray]">
        <div className="text-xl font-semibold mb-4 rounded-full p-4 border-[5px] border-dashed bg-just_yellow">
          {OrdinalNumber({ number: round })}
        </div>
        <div className="w-full flex items-center justify-center gap-16  mb-4">
          <div className="hidden lg:block">
            <CardProfile
              imageSrc={playerData?.imageSrc || ""}
              id={playerData?.name || ""}
              ox={playerData?.ox || ""}
            />
            <WinRound winRounds={userWins} />
          </div>
          <div className="border-[6px] border-dashed border-just_pink rounded-3xl">
            <div className="grid grid-cols-3 gap-2 bg-white p-2 rounded-3xl">
              {board.map((square, index) => (
                <motion.button
                  key={index}
                  className={`w-[120px] h-[120px] ${
                    square === "X"
                      ? "bg-[--just_yellow]"
                      : square === "O"
                      ? "bg-[--just_red]"
                      : "bg-[--just_pink]"
                  } rounded-2xl flex items-center justify-center text-4xl font-bold`}
                  onClick={() => handleClick(index)}
                  whileTap={{ scale: 0.95 }}
                >
                  {square}
                </motion.button>
              ))}
            </div>
          </div>
          <div className="hidden lg:block">
            <CardProfile
              imageSrc={"/images/bot.webp"}
              id={"Bot Deng"}
              ox={playerData?.ox === "X" ? "O" : "X"}
            />
            <WinRound winRounds={botWins} />
          </div>
        </div>

        <motion.div
          className="bg-[--just_yellow] text-[--just_gray] px-12 py-4 rounded-full font-semibold"
          animate={{ opacity: isUserTurn ? 1 : 0.5 }}
        >
          {isUserTurn ? "YOUR TURN" : "BOT'S TURN"}
        </motion.div>

        <div className="flex flex-col justify-center items-center lg:hidden my-4  w-[90%] p-16 rounded-3xl border-4 border-dashed">
          <div className="mt-24">
            <CardProfile
              imageSrc={playerData?.imageSrc || ""}
              id={playerData?.name || ""}
              ox={playerData?.ox || ""}
            />
            <WinRound winRounds={userWins} />
          </div>
          <div className="mt-24">
            <CardProfile
              imageSrc={"/images/bot.webp"}
              id={"Bot Deng"}
              ox={playerData?.ox === "X" ? "O" : "X"}
            />
            <WinRound winRounds={botWins} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicTacToeGame;
