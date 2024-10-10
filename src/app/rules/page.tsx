"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { DocumentText, Game, InfoCircle } from "iconsax-react";
import rulesData from "./rulesData";

const RulesPage = () => {
  const [language, setLanguage] = useState<"th" | "en">("en");
  const [showRules, setShowRules] = useState(false);

  return (
    <div className="min-h-[90dvh] flex flex-col items-center justify-center p-4">
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white rounded-2xl shadow-lg p-6 max-w-2xl w-full"
      >
        <h1 className="text-4xl font-bold mb-4 text-center text-red-500">
          {language === "th" ? "กฎการเล่น OX" : "OX Game Rules"}
        </h1>
        <div className="flex justify-center mb-4">
          <Game size={64} className="text-orange-400" />
        </div>

        <div className="flex justify-center mb-4">
          <button
            onClick={() => setLanguage("en")}
            className={`py-1 mx-2 px-3 rounded-xl ${
              language === "en"
                ? "bg-yellow-500 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            English
          </button>
          <button
            onClick={() => setLanguage("th")}
            className={`py-1 mx-2 px-3 rounded-xl ${
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
          className="w-full py-2 px-4 rounded-2xl transition duration-300 ease-in-out flex items-center justify-center bg-yellow-400 text-gray-800 hover:bg-yellow-500"
        >
          {showRules
            ? language === "th"
              ? "ซ่อนกฎ"
              : "Hide Rules"
            : language === "th"
            ? "แสดงกฎ"
            : "Show Rules"}
          <InfoCircle size={24} className="ml-2" />
        </button>

        {showRules && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mt-4 space-y-6"
          >
            {Object.entries(rulesData[language]).map(
              ([section, sectionRules], sectionIndex) => (
                <motion.div
                  key={section}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: sectionIndex * 0.1 }}
                >
                  <h2 className="text-2xl font-semibold mb-2 text-orange-600">
                    {section}
                  </h2>
                  <ul className="space-y-2">
                    {sectionRules.map((rule, index) => (
                      <li key={index} className="flex items-start">
                        <DocumentText
                          size={20}
                          className="mr-2 flex-shrink-0 text-orange-400"
                        />
                        <span className="text-gray-700">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            )}
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default RulesPage;
