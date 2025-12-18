import Link from 'next/link'
import { ReactNode } from 'react'

interface FeatureCardProps {
    title: string
    description: string
    href?: string
    icon?: ReactNode
    className?: string
}

export default function FeatureCard({
    title,
    description,
    href,
    icon,
    className = ''
}: FeatureCardProps) {
    const baseStyles = `group flex flex-col p-8 rounded-2xl bg-[var(--bg-panel)] border border-white/5 transition-all duration-300 ${href ? 'hover:border-[var(--brand)] hover:-translate-y-1 hover:shadow-lg cursor-pointer' : ''} ${className}`

    const Content = () => (
        <>
            <div className="flex items-start justify-between mb-6">
                {icon && (
                    <div className="text-[var(--text-muted)] group-hover:text-[var(--brand)] transition-colors duration-300">
                        {icon}
                    </div>
                )}
                {href && (
                    <span className="text-[var(--brand)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-x-2 group-hover:translate-x-0">
                        ↗
                    </span>
                )}
            </div>

            <h3 className="text-xl font-serif text-[var(--text-main)] mb-3 group-hover:text-[var(--brand)] transition-colors">
                {title}
            </h3>

            <p className="text-[var(--text-muted)] leading-relaxed group-hover:text-[var(--text-main)] transition-colors">
                {description}
            </p>
        </>
    )

    if (href) {
        return (
            <Link href={href} className={baseStyles}>
                <Content />
            </Link>
        )
    }

    return (
        <div className={baseStyles}>
            <Content />
        </div>
    )
}
