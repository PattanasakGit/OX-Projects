import Lottie from "lottie-react";
import { motion } from "framer-motion";
import OrdinalNumber from "./roundDisplay";
import usePlayerStore from "@/store/player";
import WinRound from "@/components/win-round";
import { ArrowCircleLeft, ArrowRotateRight } from "iconsax-react";
import WinStreakMeter from "@/components/streak";
import React, { useState, useEffect } from "react";
import CardProfile from "@/components/card-profile";
import party01 from "../../../public/lottiefiles/party01.json";
import party02 from "../../../public/lottiefiles/party02.json";

const TicTacToeGame = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isUserTurn, setIsUserTurn] = useState(true);
  const [round, setRound] = useState(1);
  const [userWins, setUserWins] = useState(0);
  const [botWins, setBotWins] = useState(0);
  const [winner, setWinner] = useState<string | null>(null);
  const { playerData, resetData } = usePlayerStore();
  const [userScore, setUserScore] = useState(0);
  const [userWinStreak, setUserWinStreak] = useState(0);
  const [userGetsBonus, setUserGetsBonus] = useState(false);

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
    if (board[index] || !isUserTurn || winner) return;
    const newBoard = [...board];
    newBoard[index] = playerData?.ox || "X";
    setBoard(newBoard);
    setIsUserTurn(false);
  };

  useEffect(() => {
    if (!isUserTurn && !winner) {
      const timer = setTimeout(() => {
        const emptySquares = board.reduce(
          (acc, val, idx) => (val === null ? [...acc, idx] : acc),
          []
        );
        if (emptySquares.length > 0) {
          const randomIndex =
            emptySquares[Math.floor(Math.random() * emptySquares.length)];
          const newBoard = [...board];
          newBoard[randomIndex] = playerData?.ox === "O" ? "X" : "O";
          setBoard(newBoard);
          setIsUserTurn(true);
        }
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [isUserTurn, board, winner]);

  useEffect(() => {
    const gameWinner = checkWinner(board);
    if (gameWinner || board.every((square) => square !== null)) {
      setWinner(gameWinner);
      setTimeout(() => {
        setBoard(Array(9).fill(null));
        setRound(round + 1);

        if (gameWinner === (playerData?.ox || "X")) {
          setUserWins(userWins + 1);
          setUserWinStreak(userWinStreak + 1);

          setUserScore(userScore + 1);

          if (userWinStreak + 1 === 3) {
            setUserGetsBonus(true);
            setUserScore(userScore + 2);
            setUserWinStreak(0);
          }
        } else if (gameWinner === (playerData?.ox === "O" ? "X" : "O")) {
          setBotWins(botWins + 1);
          setUserScore(userScore - 1);
          setUserWinStreak(0);
        }

        // if (gameWinner === null) {
        //   setUserWinStreak(0);
        // }

        setWinner(null);
      }, 3000);
    }
  }, [board]);

  useEffect(() => {
    if (userGetsBonus) {
      setTimeout(() => {
        setUserGetsBonus(false);
      }, 4000);
    }
  }, [userGetsBonus]);

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
        <div className="w-full flex items-center justify-center gap-16 mb-4">
          <div className="hidden lg:block">
            <CardProfile
              imageSrc={playerData?.imageSrc || ""}
              id={playerData?.name || ""}
              ox={playerData?.ox || ""}
            />
            <WinRound winRounds={userScore} />
            <WinStreakMeter maxValue={3} currentValue={userWinStreak} />
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
                      : "bg-[--just_pink] hover:scale-90"
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
            {userWinStreak === 2 && (
              <CardProfile
                imageSrc={"/images/bot2.webp"}
                id={"Bot Deng"}
                ox={playerData?.ox === "X" ? "O" : "X"}
              />
            )}
            {userWinStreak !== 2 && (
              <CardProfile
                imageSrc={"/images/bot.webp"}
                id={"Bot Deng"}
                ox={playerData?.ox === "X" ? "O" : "X"}
              />
            )}

            <WinRound winRounds={botWins} />
          </div>
        </div>

        <motion.div
          className="bg-[--just_yellow] text-[--just_gray] px-12 py-4 rounded-full font-semibold"
          animate={{ opacity: isUserTurn ? 1 : 0.5 }}
        >
          {isUserTurn ? "YOUR TURN" : "BOT'S TURN"}
        </motion.div>

        <div className="flex flex-col justify-center items-center lg:hidden my-4 w-[90%] p-16 rounded-3xl border-4 border-dashed">
          <div className="mt-24">
            <CardProfile
              imageSrc={playerData?.imageSrc || ""}
              id={playerData?.name || ""}
              ox={playerData?.ox || ""}
            />
            <WinRound winRounds={userWins} />
            <WinStreakMeter maxValue={3} currentValue={userWinStreak} />
          </div>

          <span className="text-4xl font-bold text-white mt-[50px]">VS</span>

          <div className="mt-24">
            <CardProfile
              imageSrc={"/images/bot.webp"}
              id={"Bot Deng"}
              ox={playerData?.ox === "X" ? "O" : "X"}
            />
            <WinRound winRounds={botWins} />
          </div>
        </div>

        {winner && (
          <motion.div
            className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm  z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 z-0 w-[120%] left-[-10%] lg:left-[25%] lg:w-1/2">
              <Lottie animationData={party02} loop={false} />
            </div>

            <motion.div
              className="relative z-10 bg-white p-8 rounded-[3rem] shadow-lg"
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
            >
              <CardProfile
                imageSrc={
                  winner === playerData?.ox
                    ? playerData?.imageSrc || ""
                    : "/images/bot.webp"
                }
                id={
                  winner === playerData?.ox
                    ? playerData?.name || "You"
                    : "Bot Deng"
                }
                ox={winner ?? ""}
              />
              <h2 className="text-center mt-4 text-3xl font-bold">Winner!!!</h2>
            </motion.div>
          </motion.div>
        )}
        {userGetsBonus && (
          <motion.div
            className="fixed inset-x-0 bottom-0 flex flex-col items-center justify-center backdrop-blur-sm z-50 w-full h-full"
            initial={{ y: 300, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -300, opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
          >
            <div className="absolute inset-0 z-0 w-[120%] left-[-10%] lg:left-[25%] lg:w-1/2">
              <Lottie animationData={party01} loop={true} />
            </div>

            <motion.div
              className="relative z-10 bg-gradient-to-r from-just_pink via-just_yellow to-just_red p-8 rounded-full shadow-2xl text-center flex flex-col items-center justify-center border-[6px] border-just_yellow"
              initial={{ scale: 0.5 }}
              animate={{ scale: 1.1 }}
              exit={{ scale: 0.5 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <h2 className="text-4xl font-bold text-white">
                🎉 You Got A Bonus! +1 🎉
              </h2>
            </motion.div>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default TicTacToeGame;
