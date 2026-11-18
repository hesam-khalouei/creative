/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],

  theme: {
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      '2xl': '1536px',
      '3xl': '1920px',
    },

    extend: {
      colors: {
        primary: {
          DEFAULT: '#00A693',
          50: '#effef9',
          100: '#c8fff0',
          200: '#92fee2',
          300: '#53f5d0',
          400: '#1fe2ba',
          500: '#00A693',
          600: '#008c7c',
          700: '#047065',
          800: '#095951',
          900: '#0c4944',
          950: '#002b28',
        },

        secondary: {
          DEFAULT: '#FF8A34',
          50: '#fff6ed',
          100: '#ffead4',
          200: '#ffd1a8',
          300: '#ffb171',
          400: '#FF8A34',
          500: '#fe6711',
          600: '#ef4c07',
          700: '#c63708',
          800: '#9d2d0f',
          900: '#7e2710',
          950: '#441006',
        },

        surface: {
          DEFAULT: '#073b36',
          light: '#0c4944',
          dark: '#002b28',
        },
      },

      fontFamily: {
        sans: ['IranYekanX', 'sans-serif'],
        display: ['IranYekanX', 'sans-serif'],
      },

      maxWidth: {
        presentation: '1920px',
      },

      minHeight: {
        slide: '100vh',
      },

      animation: {
        'fade-up': 'fadeUp 700ms ease-out both',
        'fade-in': 'fadeIn 600ms ease-out both',
        'scale-in': 'scaleIn 500ms ease-out both',
      },

      keyframes: {
        fadeUp: {
          '0%': {
            opacity: '0',
            transform: 'translateY(24px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },

        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },

        scaleIn: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.96)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },

  plugins: [],
};
