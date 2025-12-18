import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Timeline — Ateliér Libušín' }

export default function Timeline() {
    const milestones = [
        { year: '2025', title: 'EU Green Vision', desc: 'Full alignment with "Green Mobility" incentives and slow travel policies.' },
        { year: '2024', title: 'Green Link Launch', desc: 'Established 35-minute direct sustainable transport link from Prague.' },
        { year: '2023', title: 'Qualified Host', desc: 'Officially recognized by Creative Europe for residency support.' },
        { year: '2019', title: 'Land Art Series', desc: 'Inaugural open-air projection mapping festival in the orchard.' },
        { year: '2015', title: 'Foundation', desc: 'Ateliér Libušín established as an independent cultural station.' }
    ]

    return (
        <div className="container max-w-4xl mx-auto px-6 py-24 space-y-24">
            <SectionHeader
                eyebrow="History"
                title="Our Timeline"
                subtitle="Key dates in the development of Ateliér Libušín."
                align="center"
            />

            <div className="relative border-l-2 border-white/5 ml-4 md:ml-12 pl-8 md:pl-16 space-y-16 py-4">
                {milestones.map((m, i) => (
                    <div key={i} className="relative group">
                        {/* Timeline Dot */}
                        <span className="absolute -left-[43px] md:-left-[75px] top-1.5 w-7 h-7 rounded-full bg-[var(--bg-deep)] border-4 border-[var(--bg-panel)] group-hover:border-[var(--brand)] transition-colors duration-500 z-10 box-content"></span>

                        <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                            <span className="text-3xl font-serif text-[var(--brand)] font-bold mb-1 md:mb-0 w-24 flex-shrink-0">{m.year}</span>
                            <div>
                                <h3 className="text-lg font-bold text-white mb-1 group-hover:text-[var(--brand)] transition-colors">{m.title}</h3>
                                <p className="text-sm text-[var(--text-muted)] leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">
                                    {m.desc}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* CTA Block */}
            <section className="bg-[var(--bg-panel)] rounded-3xl p-16 border border-[var(--brand)]/20 text-center space-y-10 my-12">
                <div className="space-y-4">
                    <h2 className="text-4xl font-serif text-white">Next steps</h2>
                    <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
                        The residency program is ongoing.
                    </p>
                </div>
                <div className="flex flex-col md:flex-row gap-6 justify-center">
                    <LinkButton href="/apply" variant="primary">Apply</LinkButton>
                    <LinkButton href="/mission" variant="ghost">Mission</LinkButton>
                </div>
            </section>
        </div>
    )
}
