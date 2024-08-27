/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        transparan: "rgba(0, 0, 0, 0.6)",
      },
    },
  },
  plugins: [require("daisyui")],
};
