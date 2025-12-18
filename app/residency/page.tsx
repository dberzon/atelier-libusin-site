

import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'
import FeatureCard from '../../components/ui/FeatureCard'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = { title: 'Residency — Ateliér Libušín' }

export default function Residency() {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

      {/* 1. Hero-Lite Header */}
      <div className="text-center max-w-3xl mx-auto space-y-8 pt-12 pb-8">
        <span className="text-[var(--brand)] font-medium tracking-widest uppercase text-xs">Program</span>
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">Adaptive Residency Model</h1>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
          A focused residency for artists who need time, autonomy, and a stable environment to develop long-form work, experiment, and reflect.
        </p>
        <div className="pt-4 flex justify-center">
          <LinkButton href="/apply" variant="primary">Apply Now</LinkButton>
        </div>
      </div>

      {/* 2. Key Points Strip */}
      {/* 2. Key Points Strip */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-8 border-y border-white/10 text-center">
        <div className="space-y-2">
          <div className="text-2xl opacity-50">🎯</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Focus</span>
            <span className="block text-white font-medium">Digital & Land Art</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl opacity-50">⏳</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Duration</span>
            <span className="block text-white font-medium">2–6 Weeks</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl opacity-50">👥</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Mode</span>
            <span className="block text-white font-medium">Self-directed residency</span>
          </div>
        </div>
        <div className="space-y-2">
          <div className="text-2xl opacity-50">📜</div>
          <div>
            <span className="block text-xs uppercase text-[var(--text-muted)] tracking-wider mb-1">Support</span>
            <span className="block text-white font-medium">Invitation Letter</span>
          </div>
        </div>
      </div>

      {/* 3. Main Sections */}
      <div className="space-y-32">

        {/* Section 1: Focus & Eligibility */}
        <section className="space-y-12">
          <SectionHeader
            title="Focus & Eligibility"
            subtitle="We prioritize projects that bridge the gap between digital arts and environmental stewardship."
            align="left"
          />
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-white font-serif text-xl mb-4">Digital Arts & New Media</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  We are a hub for Tagtool, projection mapping, and algorithmic art.
                  Our studio is equipped for darkness, making it ideal for light-based experimentation and testing.
                </p>
              </div>
              <div>
                <h3 className="text-white font-serif text-xl mb-4">Land Art & Ecology</h3>
                <p className="text-[var(--text-muted)] leading-relaxed">
                  The 2000m² orchard is a living canvas. We support site-specific installations, bio-acoustic research,
                  and performance works that engage directly with the soil and seasons.
                </p>
              </div>
            </div>
            <div className="bg-[var(--bg-deep)] p-8 rounded-xl border border-white/5 space-y-6">
              <h4 className="text-white font-serif text-lg mb-2">What the residency supports</h4>
              <p className="text-[var(--text-muted)] text-sm mb-4">We welcome artists and researchers whose work explores the intersection of digital media, land art, and ecological practice.</p>
              <ul className="space-y-2 text-[var(--text-muted)] text-sm pl-2">
                <li className="flex gap-2"><span className="text-green-400">•</span> Tagtool, projection mapping, and algorithmic art</li>
                <li className="flex gap-2"><span className="text-green-400">•</span> Site-specific installations and land art</li>
                <li className="flex gap-2"><span className="text-green-400">•</span> Bio-acoustic research and performance</li>
                <li className="flex gap-2"><span className="text-green-400">•</span> Self-directed, rural living</li>
                <li className="flex gap-2"><span className="text-green-400">•</span> Focused time away from city distractions</li>
              </ul>
              <ul className="pt-4 border-t border-white/5 opacity-80 space-y-1 text-xs">
                <li>Capacity: max 6</li>
                <li>No ventilation for toxic solvents (oils/turpentine)</li>
              </ul>
              <p className="text-xs text-[var(--text-muted)] mt-4">
                The residency is open to artists at different stages of practice and from varied backgrounds whose work aligns with this working model.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2: The Program & Life */}
        <section className="space-y-12">
          <SectionHeader title="The Program" subtitle="Seasonal rhythm and working conditions." className="mb-8" />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <FeatureCard
              title="Winter Research"
              description="November — March. Dedicated to deep work, writing, and coding. 24/7 access to the heated atelier."
              href="/apply"
              icon={<span className="text-2xl">❄️</span>}
            />
            <FeatureCard
              title="Summer Open Air"
              description="April — October. Focused on outdoor installation, projection mapping, and performance in the orchard."
              href="/apply"
              icon={<span className="text-2xl">☀️</span>}
            />
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center bg-[var(--bg-panel)] p-8 md:p-12 rounded-2xl border border-white/5">
            <div>
              <h3 className="text-white font-serif text-xl mb-4">Working Conditions</h3>
              <p className="text-sm text-[var(--text-muted)] leading-relaxed mb-6">
                Residents live and work in the same building, fostering a rhythm of deep focus.
                We operate on a self-catering basis with weekly shared dinners.
              </p>
              <LinkButton href="/facilities" variant="ghost">View detailed facilities ↗</LinkButton>
            </div>
            <ul className="grid grid-cols-1 gap-4 text-xs text-[var(--text-muted)] uppercase tracking-wider">
              <li className="flex items-center gap-3 bg-[var(--bg-deep)] p-3 rounded-lg border border-white/5">
                <span className="text-[var(--brand)]">●</span> 24/7 Atelier Access
              </li>
              <li className="flex items-center gap-3 bg-[var(--bg-deep)] p-3 rounded-lg border border-white/5">
                <span className="text-[var(--brand)]">●</span> 10-Minute Walk to Forest
              </li>
              <li className="flex items-center gap-3 bg-[var(--bg-deep)] p-3 rounded-lg border border-white/5">
                <span className="text-[var(--brand)]">●</span> Shared Large Kitchen & Library
              </li>
            </ul>
          </div>
        </section>

        {/* Section 3: Outcomes & Documentation */}
        <section className="space-y-12">
          <SectionHeader title="Outcomes & Documentation" subtitle="Process-led experimentation over finished products." />
          <div className="grid md:grid-cols-3 gap-8 text-[var(--text-muted)]">
            <div className="bg-[var(--bg-panel)] p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-serif mb-3">Process &gt; Product</h3>
              <p className="text-sm leading-relaxed">
                We value experimentation. You are not required to produce a finished exhibition. We encourage prototypes and sketches.
              </p>
            </div>
            <div className="bg-[var(--bg-panel)] p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-serif mb-3">Community Moment</h3>
              <p className="text-sm leading-relaxed">
                We ask for one moment of exchange—an artist talk, a technical workshop, or an open studio for the local community.
              </p>
            </div>
            <div className="bg-[var(--bg-panel)] p-6 rounded-xl border border-white/5">
              <h3 className="text-white font-serif mb-3">Archival Support</h3>
              <p className="text-sm leading-relaxed">
                We provide professional photographic documentation of your work-in-progress, ensuring you leave with high-quality assets.
              </p>
            </div>
          </div>
        </section>

        {/* Section 4: CTA Block */}
        <section className="bg-[var(--bg-panel)] rounded-3xl p-16 md:p-24 border border-[var(--brand)]/20 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="text-4xl md:text-5xl font-serif text-white">Interested in applying?</h2>
            <p className="text-[var(--text-muted)] max-w-xl mx-auto text-lg">
              We review applications on a rolling basis. Funding support letters are available for grant applications.
            </p>
              <p className="text-sm text-[var(--text-muted)] text-center mb-2">
                Applications are reviewed on a rolling basis. Selected residents are contacted directly.
              </p>
          </div>
          <div className="flex flex-col md:flex-row gap-6 justify-center">
            <LinkButton href="/apply" variant="primary">Apply</LinkButton>
            <LinkButton href="/contact" variant="ghost">Contact</LinkButton>
          </div>
        </section>

      </div>

    </div>
  )
}
