/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      white: "hsl(0, 0%, 100%)",
      lightGrey: "hsl(212, 45%, 89%)",
      grayishBlue: "hsl(220, 15%, 55%)",
      darkBlue: "hsl(218, 44%, 22%)",
    },
    extend: {
      fontFamily: {
        "lora": ["Lora", "serif"]
      }
    },
  },
  plugins: [],
}