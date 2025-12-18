import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = {
    title: 'Mission & Governance — Ateliér Libušín',
    keywords: ['Social Impact', 'Rural Development', 'Cultural Heritage', 'Residency', 'Art', 'Ecology']
}

export default function Mission() {
    return (
        <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

            {/* 1. Hero-Lite Header */}
            <div className="text-center max-w-3xl mx-auto space-y-6">
                <span className="text-[var(--brand)] font-medium tracking-widest uppercase text-xs">Philosophy</span>
                <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Mission & Governance</h1>
                <p className="text-xl text-[var(--text-muted)] leading-relaxed">
                    Stewarding a "Rural Avant-Garde" — where ecological grounding meets digital innovation. We enable high-tech art in a heritage context.
                </p>
            </div>

            {/* 2. Key Points Strip */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y border-white/10">
                <div className="space-y-1 md:text-center">
                    <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider">Legal Status</span>
                    <span className="block text-white font-medium">Registered Association (z.s.)</span>
                </div>
                <div className="space-y-1 md:text-center">
                    <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider">Core Method</span>
                    <span className="block text-white font-medium">Social Scaffolding</span>
                </div>
                <div className="space-y-1 md:text-center">
                    <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider">Alignment</span>
                    <span className="block text-white font-medium">New European Bauhaus</span>
                </div>
            </div>

            {/* 3. Main Sections */}
            <div className="space-y-20">

                {/* Governance Statement */}
                <section className="bg-[var(--bg-panel)] border-l-4 border-[var(--brand)] p-8 md:p-12 rounded-r-2xl border-y border-r border-white/5">
                    <h2 className="text-2xl font-serif text-white mb-4">Governance Structure</h2>
                    <p className="text-[var(--text-muted)] leading-relaxed">
                        Ateliér Libušín is transitioning to a <strong>zapsaný spolek (z.s.)</strong> structure to better align with our non-profit mission.
                        This restructuring reflects our commitment to transparency, democratic governance, and long-term sustainability as a cultural institution.
                    </p>
                </section>

                {/* Strategic Pillars */}
                <section>
                    <SectionHeader title="Strategic Pillars" className="mb-8" />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2">Rural Revitalisation</h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                Challenging the centralization of culture by bringing world-class artists to a small town. We use art as a tool for "Social Scaffolding."
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2">Community Exchange</h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                Facilitating genuine cross-border exchange between residents and the local population through open studios, workshops, and oral history recording.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2">Ecological Awareness</h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                Promoting "Slow Tourism" and low-carbon mobility. Our enclosed orchards serve as a living lab for sustainable artistic practices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Founders' Vision */}
                <section className="bg-[var(--bg-deep)] p-8 md:p-12 rounded-2xl border border-white/10">
                    <SectionHeader title="Founding Vision" className="mb-6" />
                    <div className="prose prose-invert max-w-none text-[var(--text-muted)] font-light">
                        <p className="mb-4">
                            Founded in 2002, Ateliér Libušín began as a private sanctuary for experimentation. Over two decades, it has evolved into a collaborative crossroads for digital and land art.
                        </p>
                        <p>
                            Our landmark collaborations with OMAi/Tagtool (2018-2019) proved that rural spaces can serve as high-capacity incubators for global digital innovation.
                            Today, we stand as a "Qualified Host" dedicated to sustainable cultural mobility.
                        </p>
                    </div>
                </section>

            </div>

            {/* 4. CTA Block */}
            <section className="bg-[var(--bg-panel)] rounded-2xl p-12 border border-white/5 text-center space-y-8">
                <div>
                    <h2 className="text-3xl font-serif text-white mb-4">Join Our Mission</h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto">
                        We welcome partnerships with cultural institutions, grant bodies, and academic researchers.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <LinkButton href="/impact" variant="primary">View Impact Report</LinkButton>
                    <LinkButton href="/contact" variant="ghost">Contact Directors</LinkButton>
                </div>
            </section>

        </div>
    )
}
