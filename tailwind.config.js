/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        main: '#365b6d',
        secondary: '#f1f1ec',
    },
    backgroundImage: {
      'hero-pattern': "url('./src/Images/BG.jpeg')",
    }
  },
  plugins: [],
}
}
