/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      fontFamily:{ 
        "Claire":["Typefesse_Claire-Obscure","cursive"],
        "Plein":["Typefesse_Pleine","sans-serif"],
        "Anton" : ["Anton", "sans-serif"],
        "Archivo": ["Archivo_Black","sans-serif"],
      },
    },
  },
  plugins: [],
}

