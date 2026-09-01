import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // Warm near-black, the site's dominant ground. Not a flat #000,
        // which reads cheap on large fills; this keeps a hint of warmth
        // so it sits well next to gold and burgundy.
        ink: {
          DEFAULT: '#0A0707',
          950: '#0A0707',
          900: '#140D0D',
          800: '#201616',
          700: '#332323',
          600: '#4D3636',
          500: '#6B4D4D',
          400: '#8C6C6C',
        },
        // Deep wine/maroon, the primary accent family, used for section
        // fills, card surfaces on dark, and the occasional headline word.
        burgundy: {
          50: '#FBF2F3',
          100: '#F3DEE1',
          200: '#E3B4BA',
          300: '#CC7C88',
          400: '#A84656',
          500: '#7A1F2B',
          600: '#5C1620',
          700: '#450F17',
          800: '#300A10',
          900: '#1F050A',
        },
        // Antique gold, the "hint of gold": hairlines, small marks, the
        // butterfly/kiwi motif, and CTA highlights. Used sparingly, never
        // as a dominant fill.
        gold: {
          50: '#FBF6E9',
          100: '#F3E5BE',
          200: '#E7CE8D',
          300: '#D8B767',
          400: '#C8A048',
          500: '#AE8536',
          600: '#8C6B2C',
          700: '#6E5424',
        },
        // Soft ivory, used only for small high-contrast surfaces (chips,
        // cards) against the dark ground; never the page background.
        ivory: {
          DEFAULT: '#FAF5EF',
          100: '#FAF5EF',
          200: '#F0E4D6',
          300: '#E1CDB6',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'serif'],
        script: ['var(--font-script)', 'cursive'],
        sans: ['var(--font-sans)', 'sans-serif'],
      },
      maxWidth: {
        content: '1180px',
      },
      letterSpacing: {
        widest2: '0.28em',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        flutter: {
          '0%, 100%': { transform: 'rotate(0deg) translateY(0)' },
          '50%': { transform: 'rotate(-4deg) translateY(-4px)' },
        },
        shimmer: {
          '0%, 100%': { opacity: '0.55' },
          '50%': { opacity: '1' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.9s cubic-bezier(0.16, 1, 0.3, 1) both',
        flutter: 'flutter 5s ease-in-out infinite',
        shimmer: 'shimmer 3.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
