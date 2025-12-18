import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import FeatureCard from '../../components/ui/FeatureCard'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = { title: 'Facilities — Ateliér Libušín' }

export default function Facilities() {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-24 space-y-24">

      {/* Header */}
      <SectionHeader
        eyebrow="Facilities"
        title="Working conditions at Ateliér Libušín"
        subtitle="An adaptive environment designed for focus, creation, and community."
        align="center"
      />

      {/* Facilities Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

        {/* The Space */}
        <FeatureCard
          title="Main Studio"
          description="50m² light-filled atelier with high ceilings and projection-ready walls. Ideal for painting, print, and digital setup."
          icon={<span className="text-2xl">🎨</span>}
        />
        <FeatureCard
          title="Residency Accommodation"
          description="Simple, self-contained rooms (Private or Shared Loft) with shared kitchen and communal areas."
          icon={<span className="text-2xl">🏠</span>}
        />
        <FeatureCard
          title="Outdoor Extensions"
          description="Enclosed garden and orchard serving as living labs for installations, workshops, and evening events."
          icon={<span className="text-2xl">🌳</span>}
        />

        {/* Technical Resources */}
        <FeatureCard
          title="Visual & Digital"
          description="Projectors, Tagtool live-drawing setup, and code-friendly workspace."
          icon={<span className="text-2xl">⚡</span>}
        />
        <FeatureCard
          title="Sound & Research"
          description="Basic sound equipment, field recording kit, and a library of art & ecology books."
          icon={<span className="text-2xl">🎧</span>}
        />
        <FeatureCard
          title="Support & Documentation"
          description="Photo/video documentation on request. Close connections to Prague rental houses for specialist gear."
          icon={<span className="text-2xl">📸</span>}
        />
      </section>

      {/* Eco Note */}
      <div className="text-center max-w-2xl mx-auto border-t border-white/5 pt-12 text-[var(--text-muted)] italic">
        "We encourage low-impact, eco-conscious approaches and often share seasonal produce from the orchard."
      </div>

      {/* CTA Block */}
      <section className="bg-[var(--bg-panel)] rounded-2xl p-12 border border-white/5 text-center">
        <h2 className="text-3xl font-serif text-white mb-8">Interested in working here?</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <LinkButton href="/apply" variant="primary">Apply Now</LinkButton>
          <LinkButton href="/residency" variant="secondary">Explore Residency</LinkButton>
        </div>
      </section>

    </div>
  )
}
