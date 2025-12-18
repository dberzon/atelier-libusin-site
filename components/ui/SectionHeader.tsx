import React from 'react'

interface SectionHeaderProps {
    eyebrow?: string
    title: string
    subtitle?: string
    className?: string
    align?: 'left' | 'center'
}

export default function SectionHeader({
    eyebrow,
    title,
    subtitle,
    className = '',
    align = 'left'
}: SectionHeaderProps) {
    const alignClass = align === 'center' ? 'text-center mx-auto' : 'text-left'

    return (
        <div className={`max-w-3xl mb-12 ${alignClass} ${className}`}>
            {eyebrow && (
                <span className="block text-sm font-bold tracking-[0.2em] uppercase text-[var(--brand)] mb-3 animate-in fade-in slide-in-from-bottom-2 duration-700">
                    {eyebrow}
                </span>
            )}
            <h2 className="text-3xl md:text-5xl font-serif font-light text-[var(--text-main)] mb-6 leading-tight">
                {title}
            </h2>
            {subtitle && (
                <p className="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl">
                    {subtitle}
                </p>
            )}
        </div>
    )
}
