/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}', './src/App.tsx'],
  theme: {
    extend: {
      fontFamily: {
        kosugi: ['Kosugi Maru', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
