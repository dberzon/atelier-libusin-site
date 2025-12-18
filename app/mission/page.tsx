import type { Metadata } from 'next'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = {
    title: 'Mission — Ateliér Libušín',
    keywords: ['Social Impact', 'Rural Development', 'Cultural Heritage', 'Residency', 'Art', 'Ecology']
}

export default function Mission() {
    return (
        <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

            {/* 1. Hero-Lite Header */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Mission</h1>
                <p className="text-lg text-[var(--text-muted)] leading-relaxed">
                    Ateliér Libušín operates as a long-term residency site, structured around time, autonomy, and place.
                </p>
            </div>

            {/* 2. Key Points Strip — Values as Signals */}
            <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 py-8 border-y border-white/10">
                <span className="text-sm text-[var(--text-muted)]">Time-based artistic practice</span>
                <span className="text-white/20 hidden md:inline">·</span>
                <span className="text-sm text-[var(--text-muted)]">Autonomy and self-direction</span>
                <span className="text-white/20 hidden md:inline">·</span>
                <span className="text-sm text-[var(--text-muted)]">Attention to place and context</span>
                <span className="text-white/20 hidden md:inline">·</span>
                <span className="text-sm text-[var(--text-muted)]">Continuity over production cycles</span>
                <span className="text-white/20 hidden md:inline">·</span>
                <span className="text-sm text-[var(--text-muted)]">Independent cultural operation</span>
            </div>

            {/* 3. Main Sections */}
            <div className="space-y-20">

                {/* Section 1 — Time and continuity */}
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Time and continuity</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                        The residency operates as a long-term cultural site. This structure allows work to develop beyond short-term production or exhibition cycles.
                    </p>
                </section>

                {/* Section 2 — Autonomy and responsibility */}
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Autonomy and responsibility</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                        Residents have a high degree of autonomy in structuring their work. This is paired with responsibility toward the shared environment and the ongoing operation of the site.
                    </p>
                </section>

                {/* Section 3 — Place as context */}
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Place as context</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                        The rural location functions as a working condition. The site shapes the rhythm and material realities of artistic practice.
                    </p>
                </section>

                {/* Section 4 — Independence and sustainability */}
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Independence and sustainability</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                        The site operates independently in both artistic and organizational terms. This structure supports flexibility and long-term sustainability.
                    </p>
                </section>

            </div>

            {/* Final CTA Block — soft, directional */}
            <section className="text-center space-y-6 pt-8 border-t border-white/10">
                <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                    The mission is realized through the residency program and its long-term operation.
                </p>
                <div className="flex flex-col md:flex-row gap-4 justify-center">
                    <LinkButton href="/residency" variant="primary">Residency</LinkButton>
                    <LinkButton href="/impact" variant="ghost">Impact</LinkButton>
                </div>
            </section>

        </div>
    )
}
