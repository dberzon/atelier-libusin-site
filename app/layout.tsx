
import './globals.css'
import type { Metadata } from 'next'
import Header from '../components/Header'
import { Zilla_Slab, Source_Sans_3 } from 'next/font/google'

const zilla = Zilla_Slab({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-head' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-body' })
export const metadata: Metadata = {
  title: 'Ateliér Libušín',
  description: 'Artist-run residency and studio near Prague — a tranquil, orchard-side space for focused work, collaboration, and grant-ready projects.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${zilla.variable} ${sourceSans.variable} font-sans`}>
        <Header />

        <main className="container py-10">{children}</main>

        <footer className="border-t border-border mt-16">
          <div className="container py-10 text-sm text-muted">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div>
                © {new Date().getFullYear()} Ateliér Libušín z.s. · Libušín, Czech Republic
              </div>
              <div className="text-xs opacity-60 flex gap-4">
                <span>Registered Association (IČO Pending)</span>
                <span>•</span>
                <span>Qualified Host (Creative Europe)</span>
                <span>•</span>
                <span>Accessibility & Inclusion Committed</span>
              </div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  )
}
