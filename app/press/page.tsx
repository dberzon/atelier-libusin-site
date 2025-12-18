import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = { title: 'Press — Ateliér Libušín' }

export default function Press() {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

      {/* Header */}
      <SectionHeader
        eyebrow="Press"
        title="Press Kit & Media Information"
        subtitle="Official materials for media, partners, and institutions."
        align="center"
      />

      {/* Assets Grid */}
      <section className="bg-[var(--bg-panel)] rounded-3xl border border-white/5 p-8 md:p-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl font-serif text-white">Available Assets</h2>
            <p className="text-[var(--text-muted)] leading-relaxed">
              We provide high-resolution imagery and documentation of our heritage architecture and digital art installations.
              Reflecting the dual nature of Ateliér Libušín.
            </p>
            <p className="text-xs text-[var(--text-muted)] opacity-60 uppercase tracking-widest pt-4">
              Last updated: December 2025
            </p>
          </div>
          <ul className="space-y-6">
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-deep)] border border-white/10 flex items-center justify-center text-[var(--brand)] group-hover:border-[var(--brand)] transition-colors">
                ↓
              </div>
              <div>
                <span className="block text-white font-medium group-hover:text-[var(--brand)] transition-colors">Brand Identity</span>
                <span className="text-sm text-[var(--text-muted)]">Logos (SVG/PNG), Typography Guide</span>
              </div>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-deep)] border border-white/10 flex items-center justify-center text-[var(--brand)] group-hover:border-[var(--brand)] transition-colors">
                ↓
              </div>
              <div>
                <span className="block text-white font-medium group-hover:text-[var(--brand)] transition-colors">Location Photography</span>
                <span className="text-sm text-[var(--text-muted)]">Interior & Orchard Scapes</span>
              </div>
            </li>
            <li className="flex items-center gap-4 group cursor-pointer">
              <div className="w-12 h-12 rounded-full bg-[var(--bg-deep)] border border-white/10 flex items-center justify-center text-[var(--brand)] group-hover:border-[var(--brand)] transition-colors">
                ↓
              </div>
              <div>
                <span className="block text-white font-medium group-hover:text-[var(--brand)] transition-colors">Program Overview</span>
                <span className="text-sm text-[var(--text-muted)]">PDF One-pager (Mission & Stats)</span>
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* CTA Block */}
      <section className="bg-[var(--bg-panel)] rounded-3xl p-16 border border-[var(--brand)]/20 text-center space-y-10 my-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-serif text-white">Media Inquiries</h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
            For interviews, site visits, or specific asset requests, please contact our director directly.
          </p>
        </div>
        <div className="flex justify-center">
          <LinkButton href="mailto:berzon73@gmail.com" variant="primary">Email Press Contact</LinkButton>
        </div>
      </section>

    </div>
  )
}
