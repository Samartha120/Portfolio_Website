/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'rgb(var(--app-bg) / <alpha-value>)',
        surface: 'rgb(var(--app-surface) / <alpha-value>)',
        primary: 'rgb(var(--app-primary) / <alpha-value>)',
        secondary: 'rgb(var(--app-secondary) / <alpha-value>)',
        accent: 'rgb(var(--app-accent) / <alpha-value>)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      animation: {
        'spin-slow': 'spin 15s linear infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        shimmer: {
          '100%': { transform: 'translateX(100%)' },
        }
      }
    },
  },
  plugins: [],
}