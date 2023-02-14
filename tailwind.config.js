const defaultTheme = require('tailwindcss/defaultTheme');

const red = { 600: '#FF795B', 700: '#FF4B61' };

module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './node_modules/@nft42/react/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Poppins', ...defaultTheme.fontFamily.sans],
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        '2xl': ['1.875rem', '2rem'],
        '3xl': ['2.25rem', '3.7rem'],
        '4xl': ['2.5rem', '3.7rem'],
      },
      colors: {
        'primary': '#1E40AF',
        'secondary': '#10B981',
        'danger': '#EF4444',
        'warning': '#F59E0B',
        'info': '#3B82F6',
        'light': '#F3F4F6',
      }
    },
  },
  plugins: [],
};
