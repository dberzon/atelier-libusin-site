import Link from 'next/link'
import Hero from '../components/Hero'
import SectionHeader from '../components/ui/SectionHeader'
import FeatureCard from '../components/ui/FeatureCard'
import LinkButton from '../components/ui/LinkButton'

export default function Page() {
  // Data for Block 3: Timeline Preview
  const timelinePreview = [
    { year: '2025', event: 'European Green Deal Alignment' },
    { year: '2024', event: 'Launch of "Green Mobility" Corridor' },
    { year: '2023', event: 'Qualified Host Status (Creative Europe)' },
    { year: '2019', event: 'First "Land Art" Projection Series' },
  ]

  // Data for Block 4: Hosts Preview
  const hostsPreview = [
    { name: 'Dr. Marie Černá', role: 'Artistic Director', bio: 'Curator specializing in digital heritage.', img: '/host-marie.jpg' }, // Placeholder paths
    { name: 'Jan Novák', role: 'Technical Lead', bio: 'Expert in projection mapping & AV setups.', img: '/host-jan.jpg' },
  ]

  return (
    <div className="pb-24">
      <Hero />

      {/* BLOCK 1: What it is (3 Cards) */}
      <section className="container max-w-6xl mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="Residency"
          title="What happens at Ateliér Libušín"
          subtitle="A convergence of heritage, technology, and ecology."
          align="center"
          className="mb-16"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            title="Residency Program"
            description="Time and space to develop work across media, sound, code, and landscape."
            href="/residency"
            icon={<span className="text-2xl">⚡</span>} // Placeholder for Icon
          />
          <FeatureCard
            title="Facilities"
            description="Studios, tools, and flexible working conditions for focused production."
            href="/facilities"
            icon={<span className="text-2xl">🛠️</span>}
          />
          <FeatureCard
            title="Gallery & Archive"
            description="Selected projects and documentation from past years."
            href="/impact" // Changed to /impact as per previous context
            icon={<span className="text-2xl">📂</span>}
          />
        </div>
      </section>

      {/* BLOCK 2: Why it's special (Split) */}
      <section className="bg-[var(--bg-panel)] border-y border-white/5 py-24">
        <div className="container max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Left: Narrative */}
          <div>
            <SectionHeader
              title="Operating model"
              className="mb-6"
            />
            <p className="text-lg text-[var(--text-muted)] leading-relaxed mb-6">
              Ateliér Libušín is an independent cultural station operating as a <strong>zapsaný spolek (z.s.)</strong>.
              It provides a working environment separate from the urban context, connecting heritage architecture with contemporary artistic practice.
            </p>
            <div className="flex gap-4 mt-8">
              <LinkButton href="/residency" variant="primary">Residency Program</LinkButton>
              <LinkButton href="/press" variant="secondary">Press Kit</LinkButton>
            </div>
          </div>

          {/* Right: Facts List */}
          <div className="bg-[var(--bg-deep)] p-8 rounded-2xl border border-white/5">
            <h3 className="text-xl font-serif text-[var(--text-main)] mb-6">Key Facts</h3>
            <ul className="space-y-4">
              {[
                "Located in Libušín (35 min from Prague)",
                "20+ years of cultural history",
                "Focused on Digital / Sound / Land Art",
                "EU-Grant Ready / Compliant Host",
                "Global Alumni Network"
              ].map((fact, i) => (
                <li key={i} className="flex items-center text-[var(--text-muted)]">
                  <span className="w-2 h-2 rounded-full bg-[var(--brand)] mr-4"></span>
                  {fact}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* BLOCK 3: Timeline Preview */}
      <section className="container max-w-6xl mx-auto px-6 py-24 border-b border-white/5">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <SectionHeader
            eyebrow="History"
            title="Milestones"
            className="mb-0"
          />
          <LinkButton href="/timeline" variant="ghost">Full Timeline</LinkButton>
        </div>

        <div className="space-y-6">
          {timelinePreview.map((item, i) => (
            <div key={i} className="flex items-center gap-8 group">
              <span className="text-xl font-bold font-serif text-[var(--text-main)] w-24 text-right group-hover:text-[var(--brand)] transition-colors">{item.year}</span>
              <div className="flex-grow h-px bg-white/10 group-hover:bg-[var(--brand)] transition-colors"></div>
              <span className="text-[var(--text-muted)] w-2/3">{item.event}</span>
            </div>
          ))}
        </div>
      </section>

      {/* BLOCK 4: Hosts Preview */}
      <section className="container max-w-6xl mx-auto px-6 py-24">
        <SectionHeader
          eyebrow="Team"
          title="Hosts"
          subtitle="The people behind the residency."
          className="mb-12"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hostsPreview.map((host, i) => (
            <Link key={i} href="/hosts" className="group block">
              <div className="aspect-[4/5] bg-[var(--bg-panel)] rounded-2xl overflow-hidden mb-6 border border-white/5 group-hover:border-[var(--brand)] transition-colors">
                {/* Image Placeholder */}
                <div className="w-full h-full bg-white/5 flex items-center justify-center text-[var(--text-muted)]">
                  [Photo: {host.name}]
                </div>
              </div>
              <h3 className="text-xl font-serif text-[var(--text-main)] group-hover:text-[var(--brand)] transition-colors">{host.name}</h3>
              <p className="text-sm font-bold uppercase tracking-wider text-[var(--text-muted)] mb-2">{host.role}</p>
              <p className="text-[var(--text-muted)] opacity-80">{host.bio}</p>
            </Link>
          ))}

          {/* "Meet All" Card */}
          <Link href="/hosts" className="group flex flex-col items-center justify-center aspect-[4/5] rounded-2xl border border-dashed border-white/20 hover:border-[var(--brand)] hover:bg-[var(--bg-panel)] transition-all">
            <span className="text-4xl mb-4 group-hover:text-[var(--brand)] transition-colors">→</span>
            <span className="text-lg font-medium text-[var(--text-main)]">Meet the full team</span>
          </Link>
        </div>
      </section>

    </div>
  )
}
