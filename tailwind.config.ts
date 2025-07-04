import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'gold': '#E3B23C',
        'jade': '#2A6041',
        'porcelain': '#FAFAF8',
        'ink': '#1C1C1C',
        'tea-rose': '#E8D5D0',
        'night': '#2C3E50',
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        'playfair': ['var(--font-playfair)'],
        'montserrat': ['var(--font-montserrat)'],
        'crimson': ['var(--font-crimson)'],
        'dancing': ['var(--font-dancing)']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'tea-spin': 'tea-spin 20s linear infinite',
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'tea-spin': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config; 