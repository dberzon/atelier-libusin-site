

import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Residency — Ateliér Libušín' }

export default function Residency() {
  return (
    <article className="prose max-w-none">
      <h1>Residency Program</h1>
      <p className="lead">
        Ateliér Libušín offers an <strong>Adaptive Residency</strong> model, shifting its focus with the seasons to maximize our facility's unique potential.
      </p>

      <section className="grid md:grid-cols-2 gap-8 not-prose my-12">
        <div className="card p-6 border-t-4 border-t-[#00f0ff]">
          <h3 className="text-xl font-bold text-white mb-2">❄️ Winter Research</h3>
          <p className="text-sm opacity-80 uppercase tracking-widest mb-4">Nov — Mar • Studio Focus</p>
          <p className="text-sm opacity-90">
            Dedicated to <strong>deep work, writing, and coding</strong>. Residents have 24/7 access to the heated indoor atelier.
            Ideal for digital artists, writers, and composers requiring isolation and high-speed infrastructure.
          </p>
        </div>
        <div className="card p-6 border-t-4 border-t-[#ff0055]">
          <h3 className="text-xl font-bold text-white mb-2">☀️ Summer Open Air</h3>
          <p className="text-sm opacity-80 uppercase tracking-widest mb-4">Apr — Oct • Pavilion & Garden</p>
          <p className="text-sm opacity-90">
            Focused on <strong>Land Art, Projection Mapping, and Performance</strong>.
            Expands into the outdoor pavilion and orchard. Perfect for large-scale experimentation and community interventions.
          </p>
        </div>
      </section>

      <h2>Core Facilities</h2>
      <ul>
        <li><strong>The Atelier:</strong> 50m² heated studio, projection walls, basic sound system.</li>
        <li><strong>Accommodation:</strong> Private room (up to 2p) or Shared Loft (up to 6p). Official capacity: 8 certified beds.</li>
        <li><strong>The Orchard:</strong> 2000m² enclosed garden for outdoor installations.</li>
      </ul>

      <h2>Fees & Support</h2>
      <p>
        <strong>Fees by arrangement.</strong> We act as a project partner for Visegrad Fund and Creative Europe applications.
        We can issue formal Letters of Invitation for grant-seeking artists.
      </p>
    </article>
  )
}
