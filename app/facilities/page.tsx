
import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'

export const metadata: Metadata = { title: 'Facilities — Ateliér Libušín' }

export default function Facilities() {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-24 space-y-24">

      {/* Header */}
      <SectionHeader
        eyebrow="Spaces"
        title="Facilities & Resources"
        subtitle="An overview of the creative environment at Ateliér Libušín."
        align="center"
      />

      {/* The Space */}
      <section className="grid md:grid-cols-2 gap-12">
        <div className="bg-[var(--bg-panel)] p-8 rounded-2xl border border-white/5">
          <SectionHeader title="The Space" className="mb-6" />
          <ul className="space-y-6 text-[var(--text-muted)]">
            <li>
              <strong className="block text-white mb-1">Main Studio (50m²)</strong>
              Light-filled atelier with high ceilings, large windows, and a projection-friendly wall. Ideal for painting, print, digital projection, and small showings. Code-friendly setup.
            </li>
            <li>
              <strong className="block text-white mb-1">Residency Accommodation</strong>
              Simple, self-contained rooms (Private or Shared Loft). Includes a shared kitchen and communal table for crits and meals. Capacity varies by season.
            </li>
            <li>
              <strong className="block text-white mb-1">Outdoor Extensions</strong>
              The enclosed garden and orchard serve as living labs for installations, workshops, and evening projection events.
            </li>
          </ul>
        </div>

        {/* Technical Resources */}
        <div className="bg-[var(--bg-deep)] p-8 rounded-2xl border border-white/10 flex flex-col justify-between">
          <div>
            <SectionHeader title="Technical Resources" className="mb-6" />
            <ul className="grid grid-cols-1 gap-4 text-[var(--text-muted)]">
              <li className="flex items-center gap-3">
                <span className="text-[var(--brand)]">●</span> Projectors & Tagtool/live drawing setup
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--brand)]">●</span> Basic sound equipment & field recording kit
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--brand)]">●</span> Small library of art & ecology books
              </li>
              <li className="flex items-center gap-3">
                <span className="text-[var(--brand)]">●</span> Documentation (photo/video) on request
              </li>
            </ul>
            <p className="mt-8 text-sm opacity-60 italic">
              Note: We are close to Prague galleries and rental houses for specialist equipment needs.
            </p>
          </div>
        </div>
      </section>

      {/* Eco Note */}
      <section className="text-center max-w-2xl mx-auto border-t border-white/5 pt-12">
        <p className="text-lg text-[var(--text-main)] italic opacity-90">
          "We encourage low-impact, eco-conscious approaches and often share seasonal produce from the orchard."
        </p>
      </section>

    </div>
  )
}
