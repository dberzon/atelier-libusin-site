import type { Metadata } from 'next'
import ArchiveGrid from '@/components/impact/ArchiveGrid'
import SectionHeader from '../../components/ui/SectionHeader'
import LinkButton from '../../components/ui/LinkButton'

export const metadata: Metadata = { title: 'Impact & Archive — Ateliér Libušín' }

export default function Impact() {
  return (
    <div className="container max-w-6xl mx-auto px-6 py-24 space-y-24">
      {/* Hero-Lite Section */}
      <section className="max-w-3xl mx-auto pt-16 pb-10 text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-serif font-bold text-white">Impact</h1>
        <p className="text-xl text-[var(--text-muted)] leading-relaxed max-w-2xl mx-auto">
          Ateliér Libušín operates as a long-term cultural site. The residency program supports artistic research, production, and continuity.
        </p>
        <p className="text-[var(--text-muted)] text-base max-w-2xl mx-auto">
          The program structure allows for repeated engagement and accumulated practice over time.
        </p>
      </section>
      {/* Key Points Strip */}
      <div className="grid grid-cols-2 md:grid-cols-5 gap-4 py-6 border-y border-white/10 text-center">
        <div className="px-2">
          <span className="block text-sm text-white font-medium">Long-term cultural site</span>
        </div>
        <div className="px-2">
          <span className="block text-sm text-white font-medium">International artistic exchange</span>
        </div>
        <div className="px-2">
          <span className="block text-sm text-white font-medium">Support for independent practice</span>
        </div>
        <div className="px-2">
          <span className="block text-sm text-white font-medium">Rural–urban cultural link</span>
        </div>
        <div className="px-2">
          <span className="block text-sm text-white font-medium">EU-grant compatible operations</span>
        </div>
      </div>
      {/* Main Sections (max 4) */}
      <div className="space-y-20">
        {/* Cultural Continuity Section */}
        <section>
          <SectionHeader title="Cultural continuity" className="mb-6" />
          <p className="text-[var(--text-muted)] leading-relaxed mb-4">
            Ateliér Libušín functions as a stable cultural site rather than a project-based initiative.
          </p>
          <div className="space-y-4 text-[var(--text-muted)]">
            <p>The long-term presence of the site enables repeated engagement with the location and its surrounding community.</p>
            <p>Knowledge and experience accumulate across residency cycles.</p>
          </div>
        </section>
        {/* Support for Artistic Practice Section */}
        <section>
          <SectionHeader title="Support for artistic practice" className="mb-6" />
          <p className="text-[var(--text-muted)] leading-relaxed">
            The residency provides time, space, and autonomy. Emphasis is placed on process, research, and continuity rather than immediate public output.
          </p>
        </section>
        {/* Local and International Context Section */}
        <section>
          <SectionHeader title="Local and international context" className="mb-6" />
          <p className="text-[var(--text-muted)] leading-relaxed">
            The site is located in a rural setting near Prague. It operates within both local and international artistic networks.
          </p>
        </section>
        {/* Documentation and Accountability Section */}
        <section>
          <SectionHeader title="Documentation and accountability" className="mb-6" />
          <p className="text-[var(--text-muted)] leading-relaxed">
            Activities and outcomes can be documented for institutional partners and funding bodies. The residency maintains basic reporting structures suitable for grant-supported projects and international cooperation.
          </p>
        </section>
      </div>
      {/* Final CTA Block */}
      <section className="bg-[var(--bg-panel)] rounded-2xl p-16 border border-white/5 text-center space-y-10 my-12">
        <div className="space-y-4">
          <p className="text-lg text-[var(--text-muted)] max-w-xl mx-auto">
            For partnerships, institutional cooperation, or further information:
          </p>
        </div>
        <div className="flex flex-col md:flex-row gap-6 justify-center">
          <LinkButton href="/press" variant="primary">Press Kit</LinkButton>
          <LinkButton href="/contact" variant="ghost">Contact</LinkButton>
        </div>
      </section>
    </div>
  )
}

