/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
      },
      colors: {
        bg: '#04060f',
        surface: '#0a0d1a',
        'surface-2': '#0f1525',
        cyan: { DEFAULT: '#00d4ff', dim: '#00d4ff33' },
        violet: { DEFAULT: '#8b5cf6', dim: '#8b5cf622' },
        fuchsia: { DEFAULT: '#d946ef', dim: '#d946ef22' },
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'float-slow': 'float 9s ease-in-out infinite',
        'blob': 'blob 12s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'spin-slow': 'spin 12s linear infinite',
        'pulse-glow': 'pulseGlow 2.5s ease-in-out infinite',
        'grid-fade': 'gridFade 3s ease-in-out infinite',
      },
      keyframes: {
        float: { '0%,100%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-18px)' } },
        blob: {
          '0%,100%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '33%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
          '66%': { borderRadius: '40% 60% 60% 40% / 40% 50% 60% 50%' },
        },
        marquee: { '0%': { transform: 'translateX(0)' }, '100%': { transform: 'translateX(-50%)' } },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 20px rgba(0,212,255,0.3)' },
          '50%': { boxShadow: '0 0 50px rgba(0,212,255,0.7), 0 0 80px rgba(139,92,246,0.3)' },
        },
        gridFade: { '0%,100%': { opacity: '0.3' }, '50%': { opacity: '0.6' } },
      },
      backdropBlur: { xs: '2px' },
    },
  },
  plugins: [],
}
