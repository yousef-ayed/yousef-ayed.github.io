/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        void: {
          950: '#05070A',
          900: '#0A0F14',
          800: '#0F161D',
          700: '#151E27',
          600: '#1C2731',
        },
        cyan: {
          accent: '#22D3EE',
          dim: '#0E7490',
        },
        emerald: {
          accent: '#34D399',
          dim: '#047857',
        },
        signal: {
          amber: '#F5B759',
          red: '#F2545B',
        },
        ink: {
          100: '#E7ECF1',
          300: '#B8C4CE',
          500: '#8393A2',
          700: '#4B5A66',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-pattern':
          'linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px)',
        'radial-fade':
          'radial-gradient(ellipse at top, rgba(34,211,238,0.08), transparent 60%)',
      },
      backgroundSize: {
        grid: '42px 42px',
      },
      keyframes: {
        scanline: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        blink: {
          '0%, 100%': { opacity: 1 },
          '50%': { opacity: 0 },
        },
        pulseGlow: {
          '0%, 100%': { opacity: 0.6, transform: 'scale(1)' },
          '50%': { opacity: 1, transform: 'scale(1.06)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        scanline: 'scanline 6s linear infinite',
        blink: 'blink 1.1s step-start infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        float: 'float 5s ease-in-out infinite',
      },
      boxShadow: {
        'glow-cyan': '0 0 24px rgba(34,211,238,0.25)',
        'glow-emerald': '0 0 24px rgba(52,211,153,0.25)',
        panel: '0 1px 0 rgba(255,255,255,0.04) inset, 0 24px 48px -24px rgba(0,0,0,0.6)',
      },
    },
  },
  plugins: [],
}
