import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F14647",
        secondary: "#1F272D",
        tertiary: "#6A6A6A",
      },
      borderRadius: {
        nutritions: "50px",
      },
      fontSize: {
        xs: "8px",
      },
    },
  },
  plugins: [],
} satisfies Config;
