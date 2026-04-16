import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canard: {
          DEFAULT: "#2a6b7c",
          light: "#4a9bb0",
          dark: "#1c4a57",
        },
        ocre: {
          DEFAULT: "#c4622d",
          light: "#e8844a",
          dark: "#a04f22",
        },
        nuit: "#1c2b30",
      },
      fontFamily: {
        serif: ["Georgia", "Cambria", "Times New Roman", "serif"],
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
