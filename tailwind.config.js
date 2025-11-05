/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        'toast-bg': 'var(--toast-bg)',
        'toast-color': 'var(--toast-color)',
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        // Dark mode colors (existing)
        dark: {
          bg: '#121212',
          surface: '#181818',
          border: '#33353F',
          text: {
            primary: '#FFFFFF',
            secondary: '#ADB7BE',
          }
        },
        // Light mode - Soft Pink Theme (WCAG AA compliant)
        light: {
          bg: '#FFF5F7',           // Soft pink-white background
          surface: '#FFFFFF',       // Pure white for cards
          surfaceAlt: '#FFE4E9',   // Light pink surface
          border: '#FFD4DC',        // Soft pink border
          accent: '#FFC4D0',        // Pink accent
          text: {
            primary: '#2D1B2E',     // Dark purple-brown for contrast
            secondary: '#5D4E60',   // Medium purple-gray
            tertiary: '#8B7E8F',    // Light purple-gray
          },
          pink: {
            50: '#FFF5F7',
            100: '#FFE4E9',
            200: '#FFC4D0',
            300: '#FF9FB3',
            400: '#FF7A96',
            500: '#FF5579',
            600: '#E6395F',
            700: '#CC2447',
            800: '#991936',
            900: '#661125',
          },
          rose: {
            50: '#FFF1F3',
            100: '#FFE4E8',
            200: '#FFCAD4',
            300: '#FFB0C0',
            400: '#FF96AC',
            500: '#FF7C98',
            600: '#E65F7D',
            700: '#CC4263',
            800: '#993248',
            900: '#66212E',
          }
        },
        primary: colors.purple,
        secondary: colors.pink,
      },
    },
  },
  plugins: [],
};
