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

      {/* Grant Strategy Hooks */}
      <section className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {links.map((c) => (
          <Link key={c.title} href={c.href} className="card group">
            <h3 className="text-xl font-light text-white mb-3 group-hover:text-[#00f0ff] transition-colors">{c.title}</h3>
            <p className="text-sm leading-relaxed opacity-80 group-hover:opacity-100 transition-opacity">{c.desc}</p>
          </Link>
        ))}
      </section>

      {/* Intro Text */}
      <section className="prose mx-auto text-center px-4">
        <h2 className="text-3xl text-white font-light">A Gateway for European Culture</h2>
        <p>
          Ateliér Libušín is an independent cultural station operating as a <strong>zapsaný spolek (z.s.)</strong>.
          Located just 35 minutes from Prague, we bridge the gap between urban presentation and rural experimentation.
        </p>
        <p>
          We are a "Qualified Host" for major EU funding bodies, offering specialized support for
          <span className="text-[#00f0ff]"> digital arts</span>,
          <span className="text-[#ff0055]"> light performance</span>, and
          <span className="text-green-400"> ecological research</span>.
        </p>
      </section>
    </div>
  )
}
