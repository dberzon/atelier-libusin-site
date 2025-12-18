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
                    Ateliér Libušín exists to support sustained artistic practice through time, autonomy, and attention to place.
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
                        The mission of Ateliér Libušín is rooted in the belief that meaningful artistic work requires time. By operating as a long-term cultural site, the residency allows practices to unfold beyond short-term production or exhibition cycles.
                    </p>
                </section>

                {/* Section 2 — Autonomy and responsibility */}
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Autonomy and responsibility</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                        Artists are given a high degree of autonomy in how they structure their work during a residency. This autonomy is paired with responsibility — toward the shared environment, the working conditions, and the long-term continuity of the site.
                    </p>
                </section>

                {/* Section 3 — Place as context */}
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Place as context</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                        The rural location of Ateliér Libušín is not a backdrop but a working condition. The site shapes the rhythm, focus, and material realities of artistic practice, encouraging attention to context rather than isolation from it.
                    </p>
                </section>

                {/* Section 4 — Independence and sustainability */}
                <section>
                    <h2 className="text-2xl font-serif text-white mb-4">Independence and sustainability</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed max-w-3xl">
                        The mission prioritizes independence in both artistic and organizational terms. This independence supports flexibility, long-term sustainability, and the ability to respond to changing cultural conditions without reliance on short-term frameworks.
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
