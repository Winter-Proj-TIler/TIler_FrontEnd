/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [`./src/**/*.{js,ts,jsx,tsx}'`],
  theme: {
    extend: {},
  },
  darkMode: "class",
  mode: "jit",
  plugins: [require("@tailwindcss/typography")],
};
