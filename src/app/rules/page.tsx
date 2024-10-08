"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { DocumentText, Game, InfoCircle } from "iconsax-react";

type RulesType = {
  th: string[];
  en: string[];
};

const RulesPage = () => {
  const [language, setLanguage] = useState<"th" | "en">("en");
  const [showRules, setShowRules] = useState(false);

  const rules: RulesType = {
    th: [
      "เกมเล่นบนตาราง 3x3",
      "ผู้เล่นสองคนเล่นสลับกันไป โดยใช้ 'X' และ 'O'",
      "ผู้เล่นที่สามารถเรียงสัญลักษณ์ของตนเองให้ครบ 3 ช่องในแนวตั้ง แนวนอน หรือแนวทแยงเป็นผู้ชนะ",
      "ถ้าไม่มีใครชนะและกระดานเต็ม ถือว่าเสมอกัน",
    ],
    en: [
      "The game is played on a 3x3 grid.",
      "Two players take turns using 'X' and 'O'.",
      "The player who aligns three of their symbols vertically, horizontally, or diagonally wins.",
      "If no one wins and the board is full, it's a draw.",
    ],
  };

  return (
    <div
      className="min-h-[90dvh] flex flex-col items-center justify-center p-4"
      style={{ backgroundColor: "#ffa68b" }}
    >
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-lg shadow-lg p-6 max-w-md w-full"
      >
        <h1
          className="text-4xl font-bold mb-4 text-center"
          style={{ color: "#f34954" }}
        >
          {language === "th" ? "กฎการเล่น OX" : "OX Game Rules"}
        </h1>
        <div className="flex justify-center mb-4">
          <Game size="64" color="#FF8A65" variant="Bulk" />
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={() => setLanguage("en")}
            className={`py-1 mr-2 px-3 rounded ${
              language === "en"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("th")}
            className={`py-1 px-3 rounded ${
              language === "th"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            ไทย
          </button>
        </div>

        <button
          onClick={() => setShowRules(!showRules)}
          className="w-full py-2 px-4 rounded transition duration-300 ease-in-out flex items-center justify-center"
          style={{ backgroundColor: "#ffc400", color: "#333333" }}
        >
          {showRules
            ? language === "th"
              ? "ซ่อนกฎ"
              : "Hide Rules"
            : language === "th"
            ? "แสดงกฎ"
            : "Show Rules"}
          <InfoCircle size="24" className="ml-2" />
        </button>

        {showRules && (
          <motion.ul
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 space-y-2"
          >
            {rules[language].map((rule, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start"
              >
                <DocumentText
                  size="20"
                  className="mr-2 flex-shrink-0"
                  style={{ color: "#FF8A65" }}
                />
                <span style={{ color: "#333333" }}>{rule}</span>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </motion.div>
    </div>
  );
};

export default RulesPage;
