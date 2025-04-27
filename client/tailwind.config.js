/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: false, 
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins, sans-serif'],
        
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
  daisyui: {
    themes: ["light"],
    darkTheme: false,   
  },
}

