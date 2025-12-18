

import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import FeatureCard from '../../components/ui/FeatureCard'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = { title: 'Residency — Ateliér Libušín' }

export default function Residency() {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

      {/* 1. Hero-Lite Header */}
      <div className="text-center max-w-3xl mx-auto space-y-6">
        <span className="text-[var(--brand)] font-medium tracking-widest uppercase text-xs">Program</span>
        <h1 className="text-4xl md:text-5xl font-serif font-bold text-white">Adaptive Residency Model</h1>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed">
          Shifting focus with the seasons. We offer deep-focus winter sessions for digital work and open-air summer residencies for site-specific interventions.
        </p>
      </div>

      {/* 2. Key Points Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10">
        <div className="space-y-1">
          <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider">Focus</span>
          <span className="block text-white font-medium">Digital & Land Art</span>
        </div>
        <div className="space-y-1">
          <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider">Duration</span>
          <span className="block text-white font-medium">2 — 6 Weeks</span>
        </div>
        <div className="space-y-1">
          <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider">Capacity</span>
          <span className="block text-white font-medium">1 — 6 Artists</span>
        </div>
        <div className="space-y-1">
          <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider">Support</span>
          <span className="block text-white font-medium">Letters of Invitation</span>
        </div>
      </div>

      {/* 3. Main Sections */}
      <div className="space-y-20">

        {/* Seasonal Rhythm */}
        <section>
          <SectionHeader title="Seasonal Rhythm" className="mb-8" />
          <div className="grid md:grid-cols-2 gap-8">
            <FeatureCard
              title="Winter Research"
              description="November — March. Dedicated to deep work, writing, and coding. 24/7 access to the heated atelier. Best for digital artists requiring isolation."
              href="/apply"
              icon={<span className="text-2xl">❄️</span>}
            />
            <FeatureCard
              title="Summer Open Air"
              description="April — October. Focused on outdoor installation, projection mapping, and performance. Expands into the orchard and pavilion."
              href="/apply"
              icon={<span className="text-2xl">☀️</span>}
            />
          </div>
        </section>

        {/* Facilities Summary */}
        <section className="grid md:grid-cols-2 gap-12 items-start">
          <div>
            <SectionHeader title="Facilities & Life" className="mb-6" />
            <p className="text-[var(--text-muted)] leading-relaxed mb-4">
              Residents have exclusive access to a 50m² high-ceilinged studio tailored for projection and performance.
              Accommodation is provided in simple, self-contained private rooms or a shared loft, with communal dining at its heart.
            </p>
          </div>
          <div className="bg-[var(--bg-panel)] p-6 rounded-xl border border-white/5 text-sm space-y-3">
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-[var(--text-muted)]">Studio</span>
              <span className="text-white">50m², Heated, WiFi</span>
            </div>
            <div className="flex justify-between border-b border-white/5 pb-2">
              <span className="text-[var(--text-muted)]">Garden</span>
              <span className="text-white">2000m² Enclosed Orchard</span>
            </div>
            <div className="flex justify-between">
              <span className="text-[var(--text-muted)]">Equipment</span>
              <span className="text-white">Projectors, Sound, Tagtool</span>
            </div>
          </div>
        </section>
      </div>

      {/* 4. CTA Block */}
      <section className="bg-[var(--bg-panel)] rounded-2xl p-12 border border-white/5 text-center space-y-8">
        <div>
          <h2 className="text-3xl font-serif text-white mb-4">Join the Residency</h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto">
            We review applications on a rolling basis. Funding support is available via formal letters for grant applications.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <LinkButton href="/apply" variant="primary">Apply Now</LinkButton>
          <LinkButton href="/contact" variant="ghost">Contact Us</LinkButton>
        </div>
      </section>

    </div>
  )
}
