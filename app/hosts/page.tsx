
import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = { title: 'Hosts — Ateliér Libušín' }

export default function Hosts() {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

      {/* Header */}
      <SectionHeader
        eyebrow="Team"
        title="Your Hosts"
        subtitle="Artist-run and artist-led. We facilitate your residency from lived experience."
        align="center"
      />

      {/* Person Cards Grid */}
      <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">

        {/* Dmitri */}
        <div className="bg-[var(--bg-panel)] rounded-2xl border border-white/5 p-8 text-center group hover:border-[var(--brand)] transition-colors duration-300">
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 mb-6 overflow-hidden border-2 border-white/5 group-hover:border-[var(--brand)] transition-colors">
            {/* Placeholder for real image: /host-dmitri.jpg */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
          </div>
          <h3 className="text-2xl font-serif text-white mb-2">Dmitri Berzon</h3>
          <span className="block text-xs uppercase tracking-widest text-[var(--brand)] mb-4">Director & Technical Lead</span>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
            Time-based media artist trained at Central Saint Martins. Supports residents with digital projection, mapping, and immersive sound environments.
          </p>
          <a href="#" className="text-xs text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white">View Portfolio ↗</a>
        </div>

        {/* Frances */}
        <div className="bg-[var(--bg-panel)] rounded-2xl border border-white/5 p-8 text-center group hover:border-[var(--accent)] transition-colors duration-300">
          <div className="w-32 h-32 mx-auto rounded-full bg-gray-800 mb-6 overflow-hidden border-2 border-white/5 group-hover:border-[var(--accent)] transition-colors">
            {/* Placeholder for real image: /host-frances.jpg */}
            <div className="w-full h-full bg-gradient-to-br from-gray-700 to-gray-900" />
          </div>
          <h3 className="text-2xl font-serif text-white mb-2">Frances Sander</h3>
          <span className="block text-xs uppercase tracking-widest text-[var(--accent)] mb-4">Curator & Mentor</span>
          <p className="text-[var(--text-muted)] text-sm leading-relaxed mb-6">
            Visual artist (Edinburgh College of Art) specializing in Tagtool and site-specific performance. 20+ years of experience in the Czech cultural sector.
          </p>
          <a href="#" className="text-xs text-white/50 hover:text-white transition-colors border-b border-transparent hover:border-white">View Portfolio ↗</a>
        </div>

      </div>

      {/* CTA Block */}
      <section className="bg-[var(--bg-panel)] rounded-3xl p-16 border border-[var(--brand)]/20 text-center space-y-10 my-12">
        <div className="space-y-4">
          <h2 className="text-4xl font-serif text-white">Have questions for the team?</h2>
          <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
            We are happy to discuss custom residency needs or technical requirements.
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <LinkButton href="mailto:info@atelierlibusin.cz" variant="primary">Send Email</LinkButton>
          <LinkButton href="/contact" variant="ghost">Go to Contact</LinkButton>
        </div>
      </section>

    </div>
  )
}
