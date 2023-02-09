/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    colors: {
      green: "#14D9E5",
      gray: "#ffffff",
    },
  },
  plugins: [require("daisyui")],
};
