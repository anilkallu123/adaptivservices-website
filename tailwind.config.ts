import type { Config } from 'tailwindcss'

const config: Config = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'Fira Code', 'monospace'],
      },
      colors: {
        brand: {
          purple: '#7B4FFF',
          cyan: '#00D4FF',
          pink: '#FF2D9B',
        },
      },
      fontSize: {
        display: ['3.75rem', { lineHeight: '1.05', fontWeight: '800', letterSpacing: '-0.02em' }],
        heading: ['2.25rem', { lineHeight: '1.1', fontWeight: '700', letterSpacing: '-0.01em' }],
        subhead: ['1.25rem', { lineHeight: '1.3', fontWeight: '600' }],
        body: ['1rem', { lineHeight: '1.65' }],
        caption: ['0.875rem', { lineHeight: '1.5' }],
        label: ['0.72rem', { lineHeight: '1.4', fontWeight: '500', letterSpacing: '0.08em' }],
      },
      animation: {
        'gradient-x': 'gradient-x 8s ease infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [],
}

export default config
