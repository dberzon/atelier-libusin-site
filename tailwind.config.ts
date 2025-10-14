import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

export default {
  content: [
    './app/**/*.{ts,tsx,mdx}',
    './components/**/*.{ts,tsx,mdx}',
    './content/**/*.{md,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        ink: '#111111',
        sand: '#F8F4EC',
        accent: '#0F766E' // teal-700 vibe
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'ui-sans-serif', 'system-ui', 'Inter'],
        serif: ['var(--font-serif)', 'ui-serif', 'Georgia']
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: [typography]
} satisfies Config
