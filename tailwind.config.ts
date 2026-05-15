import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}", "./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#071426",
        midnight: "#0b1726",
        ocean: "#102c3b",
        emerald: "#2fb284",
        mint: "#72dfbd",
        gold: "#d7a847",
        sky: "#6dc8ff"
      },
      boxShadow: {
        glow: "0 0 60px rgba(47, 178, 132, 0.25)",
        soft: "0 24px 80px rgba(7, 20, 38, 0.16)"
      }
    }
  },
  plugins: []
};

export default config;
