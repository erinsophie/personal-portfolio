/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        customPink: '#FFBDE8',
        customBlue: '#A4F5FF',
      },
    },
  },
  plugins: [],
};
