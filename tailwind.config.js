/** @type {import('tailwindcss').Config} */

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  //Because we made a dynamic class with the label we need to add those clases
  // to the safe list so the purge does not remove that
  safelist: [
    ...labelsClasses.map((lbl) => `bg-${lbl}-500`),
    ...labelsClasses.map((lbl) => `bg-${lbl}-200`),
    ...labelsClasses.map((lbl) => `text-${lbl}-400`),
  ],
  theme: {
    extend: {
      gridTemplateColumns: {
        "1/5": "1fr 5fr",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
