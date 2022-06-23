/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: ["corporate", "night", ],
  },
  plugins: [require("daisyui")],
}
