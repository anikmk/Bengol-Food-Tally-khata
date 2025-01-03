/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins, sans-serif'], // Adds a new `font-display` class
      },
      colors: {
        neutral: "#EEEEEE",
        primary: "#F53F7B",
        accent: "#3F72AF",
        secondary: "#222831",
      }
    }
  },
  plugins: [require("daisyui")],
}

