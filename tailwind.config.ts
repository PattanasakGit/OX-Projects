import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        just_pink: "var(--just_pink)",
        just_yellow: "var(--just_yellow)",
        just_red: "var(--just_red)",
        just_gray: "var(--just_gray)",

      },
    },
  },
  plugins: [],
};
export default config;
