import Link from 'next/link'

function Hero({ subtitle }: { subtitle?: string }) {
  return (
    <header className="py-12">
      <h1 className="text-4xl font-bold">Ateliér Libušín</h1>
      {subtitle && <p className="mt-2 opacity-80">{subtitle}</p>}
    </header>
  )
}

export default function Page() {
  return (
    <div className="space-y-16">
      <Hero />

      <section className="grid md:grid-cols-3 gap-6">
        {[{
          title: 'Residency', href: '/residency',
          desc: 'Who we host, what we provide (workspace, countryside garden, projection walls), and how to apply.'
        },{
          title: 'Facilities', href: '/facilities',
          desc: 'Studio specs, projector for Tagtool/live drawing, accommodation notes, travel from Prague.'
        },{
          title: 'Timeline', href: '/timeline',
          desc: 'Selected highlights from 2007—2025 including residencies, festivals and workshops.'
        }].map((c) => (
          <Link key={c.title} href={c.href} className="block p-6 rounded-2xl border hover:shadow-md transition">
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <p className="opacity-80 text-sm">{c.desc}</p>
          </Link>
        ))}
      </section>

      <section className="prose max-w-none">
        <h2>About Ateliér Libušín</h2>
        <p>Founded by artists Dmitri Berzon and Frances Sander, Ateliér Libušín is an artist-run studio and micro-residency in Libušín (near Prague). Over the years we have hosted collaborative workshops, projection drawing sessions, and visiting artists, including OMAi / Tagtool collectives and guests from across Europe.</p>
      </section>
    </div>
  )
}
