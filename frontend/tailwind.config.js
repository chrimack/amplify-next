/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        green: '#107b51',
        red: '#e53a33',
        yellow: '#f8b71a',
        white: '#ffffff',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        serif: ['var(--font-patua-one)'],
      },
    },
  },
  plugins: [],
};
