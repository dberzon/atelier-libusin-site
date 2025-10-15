'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const links = [
  { href: '/residency', label: 'Residency' },
  { href: '/facilities', label: 'Facilities' },
  { href: '/timeline', label: 'Timeline' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/hosts', label: 'Hosts' },
  { href: '/press', label: 'Press Kit' },
  { href: '/contact', label: 'Contact' }
]

export default function Nav() {
  const pathname = usePathname()
  return (
    <div className="flex gap-5 text-sm">
      {links.map(link => {
        const active = pathname === link.href || pathname.startsWith(link.href + '/')
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`pb-1 hover:opacity-80 ${active ? 'border-b-2 border-brandAccent' : 'border-b-2 border-transparent'}`}
          >
            {link.label}
          </Link>
        )
      })}
    </div>
  )
}
