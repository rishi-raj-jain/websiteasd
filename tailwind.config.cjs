/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}"],
  theme: {
    colors: {
      white: "#fff",
      accent: "#4adcf0",
    },
    extend: {
      animation: {
        "fade-in-0": "fadeIn 1s ease-in-out forwards",
        "fade-in-0.25": "fadeIn 1s 0.25s ease-in-out forwards",
        "fade-in-0.5": "fadeIn 1s 0.5s ease-in-out forwards",
        "fade-in-0.75": "fadeIn 1s 0.75s ease-in-out forwards",
        "fade-in-0.85": "fadeIn 1s 0.85s ease-in-out forwards",
        "fade-in-0.95": "fadeIn 1s 0.95s ease-in-out forwards",
        "fade-in-1.05": "fadeIn 1s 1.05s ease-in-out forwards",
        "fade-in-1.15": "fadeIn 1s 1.15s ease-in-out forwards",
        "fade-in-1.25": "fadeIn 1s 1.25s ease-in-out forwards",
        "fade-in-1.35": "fadeIn 1s 1.35s ease-in-out forwards",
        "fade-in-1.45": "fadeIn 1s 1.45s ease-in-out forwards",
        "fade-in-1.55": "fadeIn 1s 1.55s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-0.75rem)" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
