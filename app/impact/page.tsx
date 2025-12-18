import type { Metadata } from 'next'
import ArchiveGrid from '@/components/impact/ArchiveGrid'
import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = { title: 'Impact & Archive — Ateliér Libušín' }

export default function Impact() {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-24 space-y-24">

      {/* 1. Hero-Lite Header */}
      <div className="text-center max-w-3xl mx-auto space-y-8 pt-12 pb-8">
        <span className="text-[var(--brand)] font-medium tracking-widest uppercase text-xs">Analysis</span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">Cultural Impact</h1>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
          Measuring our contribution to the regional cultural ecosystem and the international careers of our alumni.
        </p>
      </div>

      {/* 2. Key Points Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10 text-center">
        <div className="space-y-2">
          <div className="text-2xl opacity-50">🏟️</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Events</span>
            <span className="block text-white font-medium">24+ Public Events</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl opacity-50">👥</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Alumni</span>
            <span className="block text-white font-medium">40+ Artists Hosted</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl opacity-50">📈</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Reach</span>
            <span className="block text-white font-medium">2,000+ Visitors</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl opacity-50">🌍</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Region</span>
            <span className="block text-white font-medium">Central Bohemia</span>
          </div>
        </div>
      </div>

      {/* 3. Main Sections */}
      <div className="space-y-20">

        {/* Strategy Text */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="Fostering Innovation" className="mb-6" />
            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
              Our primary metric is the long-term career growth of our residents. By providing a low-pressure environment with high-tech resources, we enable artists to prototype ambitious works that act as career milestones.
            </p>
            <LinkButton href="/mission" variant="ghost">Learn about our mission ↗</LinkButton>
          </div>
          <div className="bg-[var(--bg-panel)] p-8 rounded-xl border border-white/5">
            <h3 className="text-white font-serif text-lg mb-4">Strategic Goals</h3>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> <span>Internationalization of local culture</span></li>
              <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> <span>Digital literacy in rural areas</span></li>
              <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> <span>Sustainable cross-border mobility</span></li>
            </ul>
          </div>
        </section>

        {/* Filterable Grid */}
        <section>
          <SectionHeader title="Project Archive" className="mb-8" />
          <div className="bg-[var(--bg-panel)] p-6 md:p-8 rounded-2xl border border-white/5 min-h-[500px]">
            <ArchiveGrid />
          </div>
        </section>

      </div>

      {/* 4. CTA Block */}
      <section className="bg-[var(--bg-panel)] rounded-2xl p-16 border border-white/5 text-center space-y-10 my-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-serif text-white">Partner With Us</h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            We are always seeking new institutional partners and grant collaborators. Download our press kit for detailed metrics.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <LinkButton href="/press" variant="primary">Download Press Kit</LinkButton>
          <LinkButton href="/contact" variant="ghost">Get in Touch</LinkButton>
        </div>
      </section>

    </div>
  )
}

