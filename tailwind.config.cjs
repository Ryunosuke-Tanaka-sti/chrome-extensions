/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './index.html',
    './src/App.tsx',
    './src/contentScript.tsx',
    './src/components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
