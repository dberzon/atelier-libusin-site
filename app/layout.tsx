import './globals.css'
import Link from 'next/link'
import { Zilla_Slab, Source_Sans_3 } from 'next/font/google'

const zilla = Zilla_Slab({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-head' })
const sourceSans = Source_Sans_3({ subsets: ['latin'], weight: ['400','500','600','700'], variable: '--font-body' })


export const metadata = {
  title: 'Ateliér Libušín',
  description:
    'Artist-run residency and studio near Prague — a tranquil, orchard-side space for focused work, collaboration, and grant-ready projects.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
  <body className={`${zilla.variable} ${sourceSans.variable} font-sans bg-page text-ink`}>
        <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b">
          <nav className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
            <Link href="/" className="font-semibold tracking-wide">Ateliér Libušín</Link>
            <div className="flex gap-5 text-sm">
              <Link href="/residency" className="hover:underline underline-offset-4">Residency</Link>
              <Link href="/facilities" className="hover:underline underline-offset-4">Facilities</Link>
              <Link href="/timeline" className="hover:underline underline-offset-4">Timeline</Link>
              <Link href="/gallery" className="hover:underline underline-offset-4">Gallery</Link>
              <Link href="/hosts" className="hover:underline underline-offset-4">Hosts</Link>
              <Link href="/press" className="hover:underline underline-offset-4">Press Kit</Link>
              <Link href="/contact" className="font-medium hover:underline underline-offset-4">Contact</Link>
            </div>
          </nav>
        </header>
        <main className="mx-auto max-w-6xl px-4 py-10">{children}</main>
        <footer className="mx-auto max-w-6xl px-4 py-10 border-t text-sm opacity-80">
          <p>© {new Date().getFullYear()} Ateliér Libušín · Libušín, Czech Republic</p>
        </footer>
      </body>
    </html>
  )
}
