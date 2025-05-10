/** @type {import('tailwindcss').Config} */
import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import tailwindcssAnimate from "tailwindcss-animate";

module.exports = {
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
        serif: ["var(--font-alice)", ...fontFamily.serif],
        mono: ["var(--font-geist-mono)", ...fontFamily.mono],
        emilysCandy: ["var(--font-emilys-candy)"],
      },
      colors: {
        blush: "#ecd6c6",
        nero: "#262626",
      },
      animation: {
        "sun-moon": "sun-moon 0.5s cubic-bezier(0, 0, 0, 1.25) forwards",
        typewriter: "typewriter 1.75s steps(35) 0.25s forwards",
        caret:
          "typewriter 1.75s steps(35) 0.25s forwards, blink 1s steps(35) infinite 2s",
      },
      keyframes: {
        "sun-moon": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(0.65)" },
        },
        typewriter: {
          to: {
            left: "100%",
          },
        },
        blink: {
          "0%": {
            opacity: "0",
          },
          "0.1%": {
            opacity: "1",
          },
          "50%": {
            opacity: "1",
          },
          "50.1%": {
            opacity: "0",
          },
          "100%": {
            opacity: "0",
          },
        },
      },
    },
  },
  plugins: [tailwindcssAnimate],
} satisfies Config;
