import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'


export default {
  content: ['./app/**/*.{ts,tsx,mdx}','./components/**/*.{ts,tsx,mdx}','./content/**/*.{md,mdx}'],
  theme: {
    container: { center: true, padding: { DEFAULT: '1rem', md: '2rem' } },
    extend: {
      colors: {
        ink: '#121212',
        brand: '#052962',        // Guardian-ish blue
        brandAccent: '#ffe500',  // Guardian-ish yellow
        surface: '#ffffff',
        paper: '#f6f6f6',
        border: '#e5e7eb',
        muted: '#6b7280'
      },
      borderRadius: { xl: '1rem', '2xl': '1.25rem' },
      boxShadow: { card: '0 6px 28px rgba(0,0,0,0.08)' }
    }
  },
  plugins: [typography]
} satisfies Config
