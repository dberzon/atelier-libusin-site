'use client'
import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/residency', label: 'Residency' },
  { href: '/impact', label: 'Impact' },
  { href: '/mission', label: 'Mission' },
  { href: '/apply', label: 'Apply' }
]

export default function Nav() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {/* Desktop Nav - 5 Columns Grid Logic */}
      <div className="hidden md:flex gap-8 text-sm items-center">
        {links.map(link => {
          const active = pathname === link.href || pathname.startsWith(link.href + '/')
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`pb-1 transition-all duration-300 ${active
                ? 'text-[var(--brand)] border-b-2 border-[var(--brand)]'
                : 'hover:text-[var(--brand)] hover:opacity-80'
                }`}
            >
              {link.label}
            </Link>
          )
        })}
      </div>

      {/* Mobile Hamburger */}
      <button
        className="md:hidden p-2 text-white"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        <div className="space-y-1.5 w-6">
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''}`}></span>
          <span className={`block h-0.5 w-full bg-white transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </div>
      </button>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-40 bg-[var(--bg-deep)]/95 backdrop-blur-xl transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden flex flex-col items-center justify-center space-y-8`}>
        {links.map(link => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-light tracking-wide text-white hover:text-[var(--brand)]"
          >
            {link.label}
          </Link>
        ))}
        {/* Close on click outside or explicit close button not strictly needed if overlay covers all */}
      </div>
    </>
  )
}
