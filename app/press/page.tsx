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

      {/* Intro & Access */}
      <section className="grid md:grid-cols-[2fr_1fr] gap-12 items-start">
        <div className="space-y-6">
          <p className="text-xl text-[var(--text-main)] font-light leading-relaxed">
            We provide a curated selection of high-resolution imagery and documentation for editorial use.
            Our materials reflect the dual nature of Ateliér Libušín—bridging heritage architecture with digital art.
          </p>
          <div className="bg-[var(--bg-panel)] rounded-xl border border-white/5 p-8">
            <h3 className="text-white font-serif text-lg mb-6">Available Assets</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-deep)] border border-white/10 flex items-center justify-center text-[var(--brand)] group-hover:border-[var(--brand)] transition-colors">
                  ↓
                </div>
                <div>
                  <span className="block text-white font-medium group-hover:text-[var(--brand)] transition-colors">Brand Identity</span>
                  <span className="text-sm text-[var(--text-muted)]">Logos (SVG/PNG), Typography Guide</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-deep)] border border-white/10 flex items-center justify-center text-[var(--brand)] group-hover:border-[var(--brand)] transition-colors">
                  ↓
                </div>
                <div>
                  <span className="block text-white font-medium group-hover:text-[var(--brand)] transition-colors">Location Photography</span>
                  <span className="text-sm text-[var(--text-muted)]">High-res selection: Exterior, Studio, Garden</span>
                </div>
              </li>
              <li className="flex items-center gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full bg-[var(--bg-deep)] border border-white/10 flex items-center justify-center text-[var(--brand)] group-hover:border-[var(--brand)] transition-colors">
                  ↓
                </div>
                <div>
                  <span className="block text-white font-medium group-hover:text-[var(--brand)] transition-colors">Program Overview</span>
                  <span className="text-sm text-[var(--text-muted)]">PDF One-pager (Mission & Statistics)</span>
                </div>
              </li>
            </ul>
            <p className="mt-8 text-xs text-[var(--text-muted)] opacity-60 uppercase tracking-widest">
              Last updated: December 2025
            </p>
          </div>
        </div>

        {/* Contact Side */}
        <div className="bg-[var(--bg-panel)] p-8 rounded-xl border border-white/5 sticky top-32">
          <h3 className="text-white font-serif text-lg mb-4">Media Inquiries</h3>
          <p className="text-[var(--text-muted)] text-sm mb-8 leading-relaxed">
            For interviews, site visits, or specific asset requests, please contact our director directly.
          </p>
          <LinkButton href="mailto:berzon73@gmail.com" variant="primary" className="w-full justify-center">
            Contact Press Office
          </LinkButton>
        </div>
      </section>

    </div>
  )
}
