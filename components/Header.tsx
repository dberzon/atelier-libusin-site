'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
    { href: '/residency', label: 'Residency' },
    { href: '/impact', label: 'Impact' },
    { href: '/mission', label: 'Mission' },
    { href: '/contact', label: 'Contact' }
]

export default function Header() {
    const pathname = usePathname()
    const [isOpen, setIsOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    // Handle scroll effect for glassmorphism intensity
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled
                    ? 'bg-[var(--bg-deep)]/80 backdrop-blur-md border-white/10 py-3'
                    : 'bg-transparent border-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-6 flex items-center justify-between">

                {/* 1. Logo / Wordmark (Left) */}
                <Link href="/" className="z-50 relative">
                    <span className="font-serif text-xl md:text-2xl font-bold tracking-tight text-white uppercase">
                        Ateliér Libušín
                    </span>
                </Link>

                {/* 2. Desktop Nav (Center/Right) */}
                <nav className="hidden md:flex items-center gap-8 absolute left-1/2 transform -translate-x-1/2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href || pathname.startsWith(link.href + '/')
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`text-sm tracking-wide transition-colors duration-200 ${isActive
                                        ? 'text-[var(--brand)] font-medium'
                                        : 'text-[var(--text-muted)] hover:text-white'
                                    }`}
                            >
                                {link.label}
                            </Link>
                        )
                    })}
                </nav>

                {/* 3. Primary CTA (Right) & Mobile Toggle */}
                <div className="flex items-center gap-4">
                    <Link
                        href="/apply"
                        className="hidden md:inline-flex items-center justify-center px-6 py-2.5 text-sm font-semibold tracking-wide uppercase bg-[var(--brand)] text-[var(--bg-deep)] rounded-[var(--radius)] hover:bg-white hover:shadow-[0_0_15px_var(--brand)] transition-all duration-300"
                    >
                        Apply Now
                    </Link>

                    {/* Hamburger */}
                    <button
                        className="md:hidden z-50 p-2 text-white focus:outline-none"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="space-y-1.5 w-6">
                            <span className={`block h-0.5 w-full bg-white transform transition duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
                            <span className={`block h-0.5 w-full bg-white transition duration-300 ${isOpen ? 'opacity-0' : ''}`} />
                            <span className={`block h-0.5 w-full bg-white transform transition duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 bg-[var(--bg-deep)] z-40 flex flex-col items-center justify-center space-y-8 transition-transform duration-300 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                {navLinks.map((link) => (
                    <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsOpen(false)}
                        className="text-3xl font-serif text-white hover:text-[var(--brand)] transition-colors"
                    >
                        {link.label}
                    </Link>
                ))}
                <Link
                    href="/apply"
                    onClick={() => setIsOpen(false)}
                    className="mt-8 px-8 py-3 text-lg font-bold uppercase bg-[var(--brand)] text-[var(--bg-deep)] rounded-[var(--radius)]"
                >
                    Apply Now
                </Link>
            </div>
        </header>
    )
}
