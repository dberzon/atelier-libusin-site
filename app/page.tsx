import Hero from '../components/Hero'
import Link from 'next/link'

export default function Page() {
  const links = [
    {
      title: 'Residency & Facilities',
      href: '/residency',
      desc: 'Adaptive Season Strategy: Winter Studio (Research) vs. Summer Lab (Open Air). Full specs for funding applications.'
    },
    {
      title: 'Impact & Archive',
      href: '/impact',
      desc: 'Capacity Building & Innovation: Case studies including Tagtool, OMAi and Ars Electronica collaborations.'
    },
    {
      title: 'Mission & Governance',
      href: '/mission',
      desc: 'Sustainability (Green Mobility), Legal Status (z.s.), and our philosophy of "Rural Avant-Garde".'
    },
  ];

  return (
    <div className="space-y-24 pb-20">
      <Hero />

      {/* Grant Strategy Hooks - Design System Grid */}
      <section className="container max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {links.map((c) => (
            <Link key={c.title} href={c.href} className="col-span-1 md:col-span-4 card group flex flex-col h-full border border-white/5 hover:border-[var(--brand)] transition-colors duration-300">
              <h3 className="text-2xl font-light text-[var(--text-main)] mb-4 group-hover:text-[var(--brand)] transition-colors font-serif">
                {c.title}
              </h3>
              <p className="text-base leading-relaxed text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors flex-grow">
                {c.desc}
              </p>
              <div className="mt-6 pt-6 border-t border-white/5 opacity-0 group-hover:opacity-100 transition-opacity text-sm text-[var(--brand)] font-medium uppercase tracking-wider flex items-center gap-2">
                Learn More <span>→</span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Intro Text - generous spacing */}
      <section className="container max-w-4xl mx-auto px-6 text-center py-[var(--section-gap)]">
        <h2 className="text-4xl md:text-5xl text-[var(--text-main)] font-light mb-8 font-serif leading-tight">
          A Gateway for European Culture
        </h2>
        <div className="prose prose-lg prose-invert mx-auto">
          <p className="text-xl md:text-2xl text-[var(--text-muted)] font-light leading-relaxed mb-8">
            Ateliér Libušín is an independent cultural station operating as a <strong className="text-white">zapsaný spolek (z.s.)</strong>.
            Located just 35 minutes from Prague, we bridge the gap between urban presentation and rural experimentation.
          </p>
          <p className="text-lg text-[var(--text-muted)]">
            We are a "Qualified Host" for major EU funding bodies, offering specialized support for
            <span className="text-[var(--brand)] font-medium mx-1">digital arts</span>,
            <span className="text-[var(--accent)] font-medium mx-1">light performance</span>, and
            <span className="text-[var(--phosphor)] font-medium mx-1">ecological research</span>.
          </p>
        </div>
      </section>
    </div>
  )
}
