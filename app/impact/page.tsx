
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Impact & Archive — Ateliér Libušín' }

const caseStudies = [
  {
    title: "The Digital Canvas",
    partner: "OMAi / Tagtool (Austria)",
    tags: ["Digital Innovation", "Cross-Border", "New Media"],
    desc: "A 'Dark Sky' lab environment allowing artists to push boundaries of projection mapping away from urban light pollution. The techniques developed here were directly applied in large-scale public performances.",
    image: "/feature-tagtool.jpg", // Placeholder
    color: "text-[#00f0ff]"
  },
  {
    title: "From Garden to Global Stage",
    partner: "Ars Electronica Connection",
    tags: ["International Mobility", "Capacity Building"],
    desc: "A micro-residency focused on deep work and incubation. The audiovisual performance developed during this residency was subsequently presented at the Ars Electronica festival, demonstrating our role as a launchpad for European talent.",
    image: "/feature-ars.jpg", // Placeholder
    color: "text-[#ff0055]"
  }
]

const items = [
  { year: 2025, title: 'Orpheus & Eurydice — audiovisual work with Ewa Żurakowska', link: '' },
  { year: 2024, title: 'Light Painting at Friedland Castle — Kafka-inspired live projection', link: '' },
  { year: 2024, title: 'Orpheus & Eurydice concert recording at Ateliér Libušín', link: 'https://www.youtube.com/watch?v=gE34pcyBScU' },
  { year: 2023, title: 'Tagtool sessions with OMAi at the studio', link: 'https://www.omai.at/posts/session-with-frances-sander-at-atelier-libusin' },
  { year: 2019, title: 'OMAi / Tagtool residency week at the studio', link: 'https://www.omai.at/posts/artist-in-residency-at-atelier-libusin' },
  { year: 2017, title: 'OMAi artist week — interactive sphere project later shown at Ars Electronica 2018', link: '' },
  { year: 2014, title: 'Participation at Lunchmeat Festival (Prague)', link: '' },
  { year: 2010, title: 'Libušín Art & Film Festival hosted at the atelier', link: 'https://fmera.org/design/libusinfilmfest/index.html' },
  { year: 2003, title: 'Artists in the Forest — Lapak Forest Park, Kladno', link: '' },
  { year: 2002, title: 'Drawings for Mayrau — works responding to the mining museum', link: '' },
  { year: 2008, title: 'Short film "Passing Through" by Atelier Libušín members (IFFR)', link: 'https://iffr.com/en/iffr/2008/films/passing-through' },
]

export default function Impact() {
  return (
    <section className="space-y-20">

      {/* Introduction */}
      <div className="max-w-4xl">
        <h1 className="text-4xl font-light mb-6">Impact & Archive</h1>
        <p className="text-xl opacity-80">
          Documenting our capacity to build international careers and foster innovation.
        </p>
      </div>

      {/* Case Studies */}
      <section className="grid md:grid-cols-2 gap-10">
        {caseStudies.map((study) => (
          <div key={study.title} className="card group hover:border-opacity-100 border-opacity-50">
            <div className={`text-xs font-bold uppercase tracking-wider mb-2 ${study.color}`}>
              {study.partner}
            </div>
            <h3 className="text-2xl font-semibold mb-4 text-white group-hover:underline decoration-[1px] underline-offset-4">
              {study.title}
            </h3>
            <p className="opacity-80 mb-6 leading-relaxed">
              {study.desc}
            </p>
            <div className="flex flex-wrap gap-2">
              {study.tags.map(tag => (
                <span key={tag} className="text-xs border border-white/20 px-2 py-1 rounded-full opacity-60">
                  #{tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* Archive Timeline */}
      <section className="border-t border-white/10 pt-16">
        <h2 className="text-2xl font-semibold mb-8">Archive Timeline (2002—2025)</h2>
        <ul className="space-y-4 max-w-4xl">
          {items.map((i) => (
            <li key={i.year + i.title} className="flex gap-6 p-4 hover:bg-white/5 rounded-2xl transition-colors items-baseline">
              <span className="text-sm font-bold text-[#00f0ff] w-12 shrink-0">{i.year}</span>
              <div className="font-medium opacity-90">
                {i.link ? (
                  <a href={i.link} target="_blank" rel="noreferrer" className="hover:text-white border-b border-white/20 hover:border-white transition-all">
                    {i.title}
                  </a>
                ) : i.title}
              </div>
            </li>
          ))}
        </ul>
      </section>

    </section>
  )
}
