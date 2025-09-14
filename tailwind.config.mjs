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
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(30px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.6s cubic-bezier(0.4,0,0.2,1) both',
        'slide-up': 'slideUp 1.2s cubic-bezier(0.4,0,0.2,1) both',
        'scale-in': 'scaleIn 1.2s cubic-bezier(0.4,0,0.2,1) both',
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
