/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          50: '#f5f6f8',
          100: '#e8eaef',
          200: '#d1d5de',
          300: '#aab1c1',
          400: '#7a8499',
          500: '#5a6478',
          600: '#434b5d',
          700: '#353c4a',
          800: '#252a35',
          900: '#1a1d26',
          950: '#0f1116',
        },
        brand: {
          50: '#eef9f4',
          100: '#d6f1e6',
          200: '#aee3cd',
          300: '#7cd0ae',
          400: '#48b88b',
          500: '#2a9d72',
          600: '#1d7d5a',
          700: '#1a6449',
          800: '#174f3a',
          900: '#13402f',
        },
        accent: {
          50: '#fff8eb',
          100: '#ffedc6',
          200: '#ffd988',
          300: '#ffc04a',
          400: '#ffa820',
          500: '#f7900a',
          600: '#db6f02',
          700: '#b65206',
          800: '#923e0c',
          900: '#78330e',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        '2xs': ['0.625rem', { lineHeight: '0.875rem' }],
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.6s ease-out forwards',
        'slide-in': 'slideIn 0.5s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideIn: {
          '0%': { opacity: '0', transform: 'translateX(-24px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
      },
    },
  },
  plugins: [],
}
