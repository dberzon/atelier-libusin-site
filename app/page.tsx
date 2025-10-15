

import Hero from '../components/Hero'
import Link from 'next/link'
export default function Page() {
  const links = [
    { title: 'Residency', href: '/residency', desc: '1–4 week artist-led residencies; who we host, what we provide, and how to apply.' },
    { title: 'Facilities', href: '/facilities', desc: 'Studio, accommodations, projection resources and outdoor pavilion.' },
    { title: 'Timeline', href: '/timeline', desc: 'Selected highlights 2002—2025 from residencies, festivals and workshops.' },
  ];
  return (
    <div className="space-y-16">
      <Hero />

      <section className="grid md:grid-cols-3 gap-6">
        {links.map((c) => (
          <Link key={c.title} href={c.href} className="card">
            <h3 className="font-semibold mb-2">{c.title}</h3>
            <p className="opacity-80 text-sm">{c.desc}</p>
          </Link>
        ))}
      </section>

      <section className="prose max-w-none">
        <h2>About Ateliér Libušín</h2>
        <p>Ateliér Libušín is a small, artist-run studio and micro-residency in Libušín (near Prague). Originally formed as Ateliér Libušín s.r.o., we later dissolved the company to evolve more flexibly as an artist-led initiative. We continue to steward the same property, with a dedicated studio and extensions designed for residents and collaborative work.</p>
        <p>Our roots are in the Czech arts landscape. Over two decades, we have developed the site into a hub for interdisciplinary projects—projection drawing, performance, experimental film and sound—often welcoming guests from across Europe. The orchard is both resource and metaphor, hosting informal gatherings and occasional outdoor projections.</p>
      </section>
    </div>
  )
}
