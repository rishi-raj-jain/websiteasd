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
        "fade-in": "fadeIn 1s ease-in-out forwards",
        "fade-in-1": "fadeIn 1s 0.25s ease-in-out forwards",
        "fade-in-2": "fadeIn 1s 0.5s ease-in-out forwards",
        "fade-in-3": "fadeIn 1s 0.75s ease-in-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(-0.75rem)" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
};
