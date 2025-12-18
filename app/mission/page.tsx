import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Mission & Governance — Ateliér Libušín' }

export default function Mission() {
    return (
        <article className="max-w-4xl mx-auto space-y-16">

            {/* Header */}
            <section className="prose max-w-none text-center">
                <h1 className="text-4xl">Mission & Governance</h1>
                <p className="text-xl text-gray-300">
                    Stewarding a "Rural Avant-Garde" — where ecological grounding meets digital innovation.
                </p>
            </section>

            {/* Governance Statement (Grant Critical) */}
            <section className="card border-l-4 border-l-[#00f0ff] p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Legal Status & Governance</h2>
                <p className="opacity-90 leading-relaxed">
                    Ateliér Libušín is currently transitioning its legal structure to a <strong>zapsaný spolek (z.s.)</strong> [Registered Association]
                    to better align with our non-profit mission of supporting public cultural activities. Previously operating as
                    <em> Ateliér Libušín s.r.o.</em>, this restructuring reflects our commitment to transparency, democratic governance,
                    and long-term sustainability in the European cultural sector. As a z.s., we are dedicated to reinvesting all resources
                    into the maintenance of the residency, artist support, and community programming.
                </p>
            </section>

            {/* Philosophy / Pillars */}
            <section className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                    <h3 className="text-2xl font-light text-[#ff0055]">Local Roots</h3>
                    <p className="opacity-80">
                        We operate as a community hub in Libušín, engaging with local history (mining) and future (ecology).
                        Our orchard is a shared resource, open for seasonal community gatherings and "Field Kitchen" events.
                    </p>
                </div>
                <div className="space-y-4">
                    <h3 className="text-2xl font-light text-[#00f0ff]">Global Reach</h3>
                    <p className="opacity-80">
                        Through partnerships with entities like OMAi (Austria) and networks in Linz/Prague, we export the
                        results of our rural residencies to major festivals. We act as a quiet incubation chamber for loud international work.
                    </p>
                </div>
            </section>

            {/* Social & Intercultural Mission (New User Request) */}
            <section className="card border-l-4 border-l-[#ff0055] p-8">
                <h2 className="text-xl font-semibold text-white mb-4">Social & Intercultural Mission</h2>
                <p className="opacity-90 leading-relaxed mb-6">
                    Ateliér Libušín operates as a <strong>"Cross-Border Hub,"</strong> dedicated to fostering social inclusion through the lens of digital and land art.
                    We believe that technical innovation—specifically through tools like Tagtool—serves as a universal language that transcends cultural and linguistic barriers.
                </p>
                <ul className="space-y-3 opacity-80 text-sm">
                    <li>
                        <strong className="text-white">Equitable Access:</strong> We actively prioritize applications from artists underrepresented in the European digital arts scene.
                    </li>
                    <li>
                        <strong className="text-white">Community Connectivity:</strong> Every residency includes a "Local Exchange" component, ensuring international work engages with the rural community.
                    </li>
                    <li>
                        <strong className="text-white">Capacity Building:</strong> We provide mentorship to help artists from all backgrounds develop the digital literacy required for modern mobility.
                    </li>
                </ul>
            </section>

            {/* Green Mobility */}
            <section className="bg-[#111] p-8 rounded-lg">
                <h2 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                    <span className="text-green-400">●</span> Green Mobility & Access
                </h2>
                <div className="grid md:grid-cols-2 gap-8">
                    <div>
                        <h4 className="font-medium text-white mb-2">The "35-Minute Link"</h4>
                        <p className="opacity-80 text-sm mb-4">
                            We encourage all residents to use the direct bus connection from <strong>Prague Nádraží Veleslavín</strong>.
                            It is fast, reliable, and luggage-friendly.
                        </p>
                        <ul className="text-sm space-y-2 opacity-70">
                            <li>• Bus 300/399 to Kladno (freq. 10min)</li>
                            <li>• Local connection to Libušín</li>
                            <li>• Total Carbon Footprint: &lt; 2kg CO2</li>
                        </ul>
                    </div>
                    <div>
                        <div className="h-full bg-white/5 rounded flex items-center justify-center text-xs opacity-50 p-4">
                            [Map Placeholder: Nádraží Veleslavín &rarr; Libušín]
                        </div>
                    </div>
                </div>
            </section>

        </article>
    )
}
