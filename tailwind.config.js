/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          900: '#030712',
          800: '#0a0f1a',
          700: '#111827',
          600: '#1f2937',
          500: '#374151',
        },
        accent: {
          cyan: '#06b6d4',
          violet: '#8b5cf6',
          pink: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Saira', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(6, 182, 212, 0.1)',
        'glass-lg': '0 16px 48px 0 rgba(6, 182, 212, 0.15)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-violet': '0 0 20px rgba(139, 92, 246, 0.3)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-gradient': 'linear-gradient(135deg, #030712 0%, #0a0f1a 50%, #111827 100%)',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glow: {
          '0%': { boxShadow: '0 0 5px rgba(6, 182, 212, 0.2)' },
          '100%': { boxShadow: '0 0 20px rgba(6, 182, 212, 0.4)' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
