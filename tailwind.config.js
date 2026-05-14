/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        apc: {
          green: '#0B6E2C',
          'green-dark': '#064E1F',
          'green-light': '#1E8A45',
          red: '#C8102E',
          gold: '#D4AF37',
          cream: '#FAF7EE',
          dark: '#0a1612',
          'dark-card': '#12221a',
        }
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['Inter', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px -10px rgba(6, 78, 31, 0.3)',
        glow: '0 0 40px -10px rgba(11, 110, 44, 0.4)'
      },
      keyframes: {
        'fade-up': {
          '0%':   { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        },
        'pulse-slow': {
          '0%, 100%': { opacity: 0.6 },
          '50%':      { opacity: 1 }
        }
      },
      animation: {
        'fade-up':    'fade-up 0.6s ease-out both',
        'pulse-slow': 'pulse-slow 3s ease-in-out infinite'
      }
    }
  },
  plugins: []
}
