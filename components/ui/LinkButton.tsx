import Link from 'next/link'
import { ReactNode } from 'react'

interface LinkButtonProps {
    href: string
    children: ReactNode
    variant?: 'primary' | 'secondary' | 'ghost'
    className?: string
}

export default function LinkButton({
    href,
    children,
    variant = 'primary',
    className = ''
}: LinkButtonProps) {

    const baseStyles = "inline-flex items-center justify-center font-medium uppercase tracking-wider text-sm transition-all duration-300 rounded-[var(--radius)]"

    const variants = {
        primary: "bg-[var(--text-main)] text-[var(--bg-deep)] hover:bg-[var(--brand)] hover:text-[var(--bg-deep)] hover:shadow-[0_0_20px_var(--glow)] px-8 py-4 font-bold",
        secondary: "border border-[var(--text-muted)] text-[var(--text-main)] hover:border-[var(--brand)] hover:text-[var(--brand)] px-8 py-4 bg-transparent",
        ghost: "text-[var(--text-muted)] hover:text-[var(--brand)] px-0 py-2 hover:bg-transparent"
    }

    return (
        <Link
            href={href}
            className={`${baseStyles} ${variants[variant]} ${className}`}
        >
            {children}
        </Link>
    )
}
