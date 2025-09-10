/** @type {import('tailwindcss').Config} */
import forms from '@tailwindcss/forms';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#DB8F75', // Sable rosé/terracotta littoral
        dark: '#1F2937',
        cream: '#F7F4F1',
        atlantic: '#2A6F8E',
        salicornes: '#6C8C7A',
        purple: '#6B5B95',
        sand: {
          50: '#FDF8F6',
          100: '#F7F1ED',
          200: '#F0E4DC',
          300: '#E5D1C3',
          400: '#DB8F75', // Primary
          500: '#C87B61',
          600: '#A8654E',
          700: '#8A523F',
          800: '#6F4234',
          900: '#5A362B',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1F2937',
            maxWidth: 'none',
            h1: {
              fontFamily: 'Playfair Display, serif',
            },
            h2: {
              fontFamily: 'Playfair Display, serif',
            },
            h3: {
              fontFamily: 'Playfair Display, serif',
            },
          },
        },
      },
    },
  },
  plugins: [forms],
};
