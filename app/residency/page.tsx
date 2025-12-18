

import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import FeatureCard from '../../components/ui/FeatureCard'

export const metadata: Metadata = { title: 'Residency — Ateliér Libušín' }

export default function Residency() {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-24 space-y-24">
      {/* Header */}
      <SectionHeader
        eyebrow="Program"
        title="Adaptive Residency Model"
        subtitle="Shifting focus with the seasons to maximize our unique potential."
        align="center"
      />

      {/* Seasonal Block */}
      <section className="grid md:grid-cols-2 gap-8">
        <FeatureCard
          title="Winter Research (Nov — Mar)"
          description="Dedicated to deep work, writing, and coding. 24/7 access to heated atelier. Ideal for digital artists and composers requiring isolation."
          href="/apply"
          className="border-t-4 border-t-[var(--brand)]"
          icon={<span className="text-2xl">❄️</span>}
        />
        <FeatureCard
          title="Summer Open Air (Apr — Oct)"
          description="Focused on Land Art, Projection Mapping, and Performance. Expands into the outdoor pavilion and orchard for large-scale experimentation."
          href="/apply"
          className="border-t-4 border-t-[var(--accent)]"
          icon={<span className="text-2xl">☀️</span>}
        />
      </section>

      {/* Facilities Info */}
      <section className="bg-[var(--bg-panel)] rounded-2xl p-8 md:p-12 border border-white/5">
        <h2 className="text-3xl font-light text-white mb-8 font-serif">Core Facilities</h2>
        <div className="grid md:grid-cols-3 gap-8 text-[var(--text-muted)]">
          <div>
            <h3 className="text-white font-bold mb-2">The Atelier</h3>
            <p>50m² heated studio, projection walls, basic sound system.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">Accommodation</h3>
            <p>Private room (2p) or Shared Loft (6p). 8 certified beds.</p>
          </div>
          <div>
            <h3 className="text-white font-bold mb-2">The Orchard</h3>
            <p>2000m² enclosed garden for outdoor installations.</p>
          </div>
        </div>
      </section>

      {/* Fees / Support */}
      <section className="text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-light text-white mb-4 font-serif">Fees & Support</h2>
        <p className="text-[var(--text-muted)] text-lg mb-8">
          Fees by arrangement. We act as a project partner for Visegrad Fund and Creative Europe applications.
          Formal Letters of Invitation available.
        </p>
      </section>
    </div>
  )
}
