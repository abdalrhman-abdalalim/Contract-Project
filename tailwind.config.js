/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      screens: {
        xl1: "1086px",
        xs0:"500px",
        xs1: "447px",
        xs2: "335px",
      },
    },
  },
  plugins: [],
};
