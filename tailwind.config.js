/** @type {import('tailwindcss').Config} \*/
module.exports = {
  content: [
    "./app/**/_.{js,ts,jsx,tsx}",
    "./pages/**/_.{js,ts,jsx,tsx}",
    "./components/*_/_.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      screens: {
        ssm: "425px",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
