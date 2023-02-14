const defaultTheme = require('tailwindcss/defaultTheme');

const pink = {
  100: '#FF8FEA',
  300: '#FF78C9',
  400: '#FF00E5',
  500: '#ED2CA0',
  600: '#E80093',
  700: '#CF0083',
  800: '#F81AD4',
};

const purple = {
  500: '#B00AFF',
};

const yellow = {
  100: '#FFE2A2',
  200: '#FFD600',
  300: '#FFD200',
  500: '#FFA800',
  800: '#FF9B00',
  900: '#F87A37',
};

const teal = {
  300: '#B0FF73',
  500: '#47FFE9',
  600: '#06FCFC',
};

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
      colors: {
        pink,
        purple,
        yellow,
        teal,
        red,
      },
      fontSize: {
        '2xl': ['1.875rem', '2rem'],
        '3xl': ['2.25rem', '3.7rem'],
        '4xl': ['2.5rem', '3.7rem'],
      },
    },
  },
  plugins: [],
};
