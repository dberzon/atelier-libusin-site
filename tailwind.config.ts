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
        ink: '#121212',
        guardianBlue: '#052962',
        guardianYellow: '#ffe500',
        page: '#ffffff',
        paper: '#f6f6f6'
      },
      fontFamily: {
        sans: ['var(--font-body)', 'ui-sans-serif', 'system-ui', 'Inter'],
        serif: ['var(--font-head)', 'ui-serif', 'Georgia']
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.25rem'
      }
    }
  },
  plugins: [typography]
} satisfies Config
