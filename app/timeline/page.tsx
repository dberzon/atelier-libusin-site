import SectionHeader from '../../components/ui/SectionHeader'

export const metadata = { title: 'Timeline — Ateliér Libušín' }

export default function Timeline() {
    const milestones = [
        { year: '2025', title: 'European Green Deal Alignment', desc: 'Full implementation of "Green Mobility" incentives and slow travel policies.' },
        { year: '2024', title: 'Launch of "Green Mobility" Corridor', desc: 'Partnership with regional transit for the 35-minute Prague link.' },
        { year: '2023', title: 'Qualified Host Status', desc: 'Officially recognized by Creative Europe for residency support.' },
        { year: '2019', title: 'First "Land Art" Series', desc: 'Inaugural open-air projection mapping festival in the orchard.' },
        { year: '2015', title: 'Foundation', desc: 'Ateliér Libušín established as an independent cultural station.' }
    ]

    return (
        <div className="container max-w-4xl mx-auto px-6 py-24 space-y-16">
            <SectionHeader
                eyebrow="History"
                title="Our Timeline"
                subtitle="A decade of adapting heritage for the future."
                align="center"
            />

            <div className="relative border-l border-white/10 ml-6 md:ml-12 pl-8 md:pl-16 space-y-12">
                {milestones.map((m, i) => (
                    <div key={i} className="relative group">
                        <span className="absolute -left-[41px] md:-left-[73px] top-2 w-4 h-4 rounded-full bg-[var(--bg-deep)] border-2 border-[var(--brand)] group-hover:bg-[var(--brand)] transition-colors shadow-[0_0_10px_var(--glow)]"></span>

                        <span className="block text-4xl font-serif text-[var(--brand)] font-bold mb-2 opacity-80">{m.year}</span>
                        <h3 className="text-2xl font-light text-white mb-2">{m.title}</h3>
                        <p className="text-[var(--text-muted)] max-w-xl leading-relaxed">{m.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}
