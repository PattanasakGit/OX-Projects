type RulesType = {
    th: { [key: string]: string[] };
    en: { [key: string]: string[] };
  };

const rulesData: RulesType = {
    th: {
      "กฎพื้นฐาน": [
        "เกมเล่นบนตาราง 3x3",
        "ผู้เล่นสองฝ่าย (ผู้เล่นและบอท) เล่นสลับกันโดยใช้สัญลักษณ์ 'X' และ 'O'",
        "ผู้เล่นที่สามารถเรียงสัญลักษณ์ของตนเองให้ครบ 3 ช่องในแนวตั้ง แนวนอน หรือแนวทแยงเป็นผู้ชนะ",
        "หากไม่มีใครชนะและกระดานเต็ม ถือว่าเสมอกัน",
      ],
      "ระบบคะแนน": [
        "ผู้เล่นชนะบอท: ได้ 1 คะแนน",
        "ผู้เล่นแพ้บอท: เสีย 1 คะแนน",
        "บอทชนะผู้เล่น: บอทได้ 1 คะแนน",
        "บอทแพ้ผู้เล่น: บอทไม่เสียคะแนน",
        "เกมเสมอ: ไม่มีการเปลี่ยนแปลงคะแนน",
      ],
      "โบนัสชัยชนะต่อเนื่อง": [
        "ผู้เล่นชนะติดต่อกัน 3 ครั้ง: ได้รับคะแนนโบนัส 1 คะแนน",
        "หลังได้รับคะแนนโบนัส: รีเซ็ตการนับชัยชนะต่อเนื่องเป็น 0",
        "คะแนนโบนัส: โบนัสต่อเนื่อใช้กับผู้เล่นเท่านั้นไม่ส่งผลกับบอท",
      ],
    },
    en: {
      "Basic Rules": [
        "The game is played on a 3x3 grid.",
        "Two players (player and bot) take turns using 'X' and 'O' symbols.",
        "The player who aligns three of their symbols vertically, horizontally, or diagonally wins.",
        "If no one wins and the board is full, it's a draw.",
      ],
      "Scoring System": [
        "Player wins against bot: Gain 1 point",
        "Player loses to bot: Lose 1 point",
        "Bot wins against player: Bot gains 1 point",
        "Bot loses to player: Bot doesn't lose points",
        "Draw game: No change in points",
      ],
      "Winning Streak Bonus": [
        "Player wins 3 times in a row: Receive 1 bonus point",
        "After receiving bonus: Reset winning streak count to 0",
        "Bonus: The winning streak bonus applies only to the player, not the bot.",
      ],
    },
  };

export default rulesData;