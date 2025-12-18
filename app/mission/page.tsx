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
                    <p className="text-[var(--text-muted)] leading-relaxed mb-4">
                        Ateliér Libušín is transitioning to a <strong>zapsaný spolek (z.s.)</strong> structure.
                        This better aligns with our non-profit mission and institutional transparency.
                    </p>
                    <p className="text-[var(--text-muted)] leading-relaxed text-sm opacity-80">
                        This restructuring reflects our commitment to democratic governance and long-term sustainability as a cultural crossroads.
                    </p>
                </section>

                {/* Strategic Pillars */}
                <section>
                    <SectionHeader title="Strategic Pillars" className="mb-8" />
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-3">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2">Rural Revitalisation</h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                Bringing world-class artists to a small town. We use art as a tool for "Social Scaffolding."
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2">Community Exchange</h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                Genuine cross-border exchange between residents and locals via workshops and oral history.
                            </p>
                        </div>
                        <div className="space-y-3">
                            <h3 className="text-lg font-serif text-white border-b border-white/10 pb-2">Ecological Awareness</h3>
                            <p className="text-sm text-[var(--text-muted)] leading-relaxed">
                                Promoting "Slow Tourism" and low-carbon mobility. Living labs for sustainable artistic practices.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Founders' Vision */}
                <section className="bg-[var(--bg-deep)] p-8 md:p-12 rounded-2xl border border-white/10">
                    <SectionHeader title="Founding Vision" className="mb-6" />
                    <div className="prose prose-invert max-w-none text-[var(--text-muted)] font-light space-y-4">
                        <p>
                            Founded in 2002, Ateliér Libušín began as a private sanctuary for experimentation.
                            It has evolved into a collaborative crossroads for digital and land art.
                        </p>
                        <p>
                            Our collaborations with OMAi/Tagtool proved that rural spaces can serve as incubators for global innovation.
                            Today, we stand as a host dedicated to sustainable cultural mobility.
                        </p>
                    </div>
                </section>

            </div>

            {/* 4. CTA Block */}
            <section className="bg-[var(--bg-panel)] rounded-3xl p-16 border border-[var(--brand)]/20 text-center space-y-10 my-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-serif text-white">Join Our Mission</h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
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
