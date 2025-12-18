import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'


export default {
  content: ['./app/**/*.{ts,tsx,mdx}', './components/**/*.{ts,tsx,mdx}', './content/**/*.{md,mdx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', md: '2rem' } },
    extend: {
      colors: {
        bg: 'var(--bg-deep)',
        panel: 'var(--bg-panel)',
        fg: 'var(--text-main)',
        muted: 'var(--text-muted)',
        brand: 'var(--brand)',
        accent: 'var(--accent)',
        phosphor: 'var(--phosphor)',
      },
      fontFamily: {
        serif: ['var(--font-head)', 'serif'],
        sans: ['var(--font-body)', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: 'var(--radius)',
        sm: 'calc(var(--radius) - 2px)',
        lg: 'calc(var(--radius) + 4px)',
      }
    }
  },
  plugins: [typography]
} satisfies Config
