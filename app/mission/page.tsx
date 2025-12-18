import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'

export const metadata: Metadata = {
    title: 'Mission & Governance — Ateliér Libušín',
    keywords: ['Social Impact', 'Rural Development', 'Cultural Heritage', 'Residency', 'Art', 'Ecology']
}

export default function Mission() {
    return (
        <div className="container max-w-6xl mx-auto px-6 py-24 space-y-24">

            {/* Header */}
            <SectionHeader
                eyebrow="Our Purpose"
                title="Mission & Governance"
                subtitle='Stewarding a "Rural Avant-Garde" — where ecological grounding meets digital innovation.'
                align="center"
            />

            {/* Governance Statement */}
            <section className="bg-[var(--bg-panel)] border-l-4 border-[var(--brand)] p-8 md:p-12 rounded-r-2xl border-y border-r border-white/5">
                <h2 className="text-2xl font-serif text-white mb-4">Legal Status & Governance</h2>
                <p className="text-[var(--text-muted)] leading-relaxed">
                    Ateliér Libušín is currently transitioning its legal structure to a <strong>zapsaný spolek (z.s.)</strong> [Registered Association]
                    to better align with our non-profit mission. Previously operating as <em>Ateliér Libušín s.r.o.</em>, this restructuring reflects our commitment to transparency, democratic governance,
                    and long-term sustainability.
                </p>
            </section>

            {/* Local Context Block */}
            <section>
                <div className="border-b border-white/10 pb-4 mb-12">
                    <SectionHeader
                        title="The Libušín Connection"
                        subtitle="Local Context & Social Impact"
                        className="mb-0"
                    />
                </div>

                <div className="grid gap-12">
                    {/* Rural Revitalisation */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                        <div className="text-[var(--brand)] font-bold text-lg uppercase tracking-wider">Rural Revitalisation</div>
                        <div>
                            <p className="text-[var(--text-main)] mb-4">
                                We view the residency as a platform for <strong>"Social Scaffolding."</strong> By bringing world-class artists to a small Czech town, we challenge the centralization of culture.
                            </p>
                            <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                                <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> Public Showcases: Open-air projection nights.</li>
                                <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> Heritage Preservation: Engaging with local ecology and history.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Community Engagement */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                        <div className="text-[var(--accent)] font-bold text-lg uppercase tracking-wider">Community Engagement</div>
                        <div>
                            <p className="text-[var(--text-main)] mb-4">
                                We facilitate genuine <strong>"Cross-Border" exchange</strong> between residents and the local population.
                            </p>
                            <ul className="space-y-2 text-[var(--text-muted)] text-sm">
                                <li className="flex gap-3"><span className="text-[var(--accent)]">●</span> Workshops & Education: "Open Studio" sessions for local youth.</li>
                                <li className="flex gap-3"><span className="text-[var(--accent)]">●</span> Social Cohesion: Integration of local oral histories.</li>
                            </ul>
                        </div>
                    </div>

                    {/* Economic Impact */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                        <div className="text-white font-bold text-lg uppercase tracking-wider">Economic Impact</div>
                        <div>
                            <p className="text-[var(--text-main)] mb-4">
                                By hosting up to 8 residents at a time, we stimulate the local economy and promote Libušín as a destination for sustainable <strong>"Slow Tourism."</strong>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Philosophy / Pillars */}
            <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10">
                <div className="bg-[var(--bg-panel)] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-serif text-[var(--accent)] mb-4">Local Roots</h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        We operate as a community hub in Libušín, engaging with local history (mining) and future (ecology).
                        Our orchard is a shared resource, open for seasonal community gatherings.
                    </p>
                </div>
                <div className="bg-[var(--bg-panel)] p-8 rounded-2xl border border-white/5">
                    <h3 className="text-2xl font-serif text-[var(--brand)] mb-4">Global Reach</h3>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        Through partnerships with entities like OMAi (Austria), we export the results of our rural residencies to major festivals.
                        We act as a quiet incubation chamber for loud international work.
                    </p>
                </div>
            </section>

            {/* Green Mobility */}
            <section className="bg-[var(--bg-deep)] p-8 md:p-12 rounded-2xl border border-white/10">
                <h2 className="text-2xl font-serif mb-6 flex items-center gap-3 text-white">
                    <span className="text-[#4ade80]">●</span> Green Mobility & Access
                </h2>
                <div className="grid md:grid-cols-2 gap-12">
                    <div>
                        <h4 className="font-bold text-white mb-2 uppercase tracking-wide">The "35-Minute Link"</h4>
                        <p className="text-[var(--text-muted)] text-sm mb-6 leading-relaxed">
                            We encourage all residents to use the direct bus connection from <strong>Prague Nádraží Veleslavín</strong>.
                            It is fast, reliable, and luggage-friendly.
                        </p>
                        <ul className="text-sm space-y-2 text-[var(--text-muted)]">
                            <li>• Bus 300/399 to Kladno (freq. 10min)</li>
                            <li>• Local connection to Libušín</li>
                            <li>• Total Carbon Footprint: &lt; 2kg CO2</li>
                        </ul>
                    </div>
                    <div className="bg-[var(--bg-panel)] rounded-xl border border-white/5 flex items-center justify-center min-h-[150px]">
                        <span className="text-[var(--text-muted)] opacity-50 text-sm">[Map Placeholder]</span>
                    </div>
                </div>
            </section>

            {/* Founders' Vision */}
            <section className="pt-24 border-t border-white/10">
                <SectionHeader
                    title="Founders' Vision"
                    subtitle="From Private Studio to European Hub."
                    className="mb-12"
                />

                <div className="prose prose-lg prose-invert max-w-4xl text-[var(--text-muted)] font-light leading-relaxed">
                    <p className="mb-8">
                        Founded in 2002, Ateliér Libušín began as a private sanctuary for artistic experimentation.
                        Over two decades, what started as a personal atelier has naturally evolved into a collaborative crossroads.
                    </p>
                    <h3 className="text-white text-xl font-normal mt-12 mb-4">The Digital and Land Art Synthesis</h3>
                    <p className="mb-8">
                        Our journey reached a turning point in 2018/2019 through landmark collaborations with OMAi/Tagtool.
                        These milestones proved that rural spaces can serve as high-capacity incubators for global digital innovation.
                    </p>
                    <h3 className="text-white text-xl font-normal mt-12 mb-4">Commitment for 2025</h3>
                    <p>
                        As we align our operations with the <strong>New European Bauhaus</strong>, Ateliér Libušín stands as a "Qualified Host" dedicated to sustainable cultural mobility.
                    </p>
                </div>
            </section>

        </div>
    )
}
