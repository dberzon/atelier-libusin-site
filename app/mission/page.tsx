import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Mission & Governance — Ateliér Libušín',
    keywords: ['Social Impact', 'Rural Development', 'Cultural Heritage', 'Residency', 'Art', 'Ecology']
}

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

            {/* Local Context & Social Impact: The Libušín Connection */}
            <section className="space-y-8">
                <div className="border-b border-white/10 pb-4 mb-8">
                    <h2 className="text-3xl font-light text-white mb-2">The Libušín Connection</h2>
                    <p className="text-lg opacity-80">Local Context & Social Impact</p>
                </div>

                <div className="grid gap-8">
                    {/* 1. Rural Revitalisation */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                        <div className="text-[#00f0ff] font-bold text-lg">Rural Revitalisation</div>
                        <div>
                            <p className="opacity-90 mb-4">
                                We view the residency as a platform for <strong>"Social Scaffolding."</strong> By bringing world-class artists to a small Czech town,
                                we challenge the centralization of culture.
                            </p>
                            <ul className="list-disc list-inside space-y-2 opacity-80 text-sm">
                                <li>
                                    <strong>Public Showcases:</strong> Open-air projection nights transforming the town's architecture into a digital gallery.
                                </li>
                                <li>
                                    <strong>Heritage Preservation:</strong> Use of a traditional building and orchard to engage with local ecology and history (New European Bauhaus alignment).
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 2. Community Engagement */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                        <div className="text-[#ff0055] font-bold text-lg">Community Engagement</div>
                        <div>
                            <p className="opacity-90 mb-4">
                                We facilitate genuine <strong>"Cross-Border" exchange</strong> between residents and the local population.
                            </p>
                            <ul className="list-disc list-inside space-y-2 opacity-80 text-sm">
                                <li>
                                    <strong>Workshops & Education:</strong> "Open Studio" sessions for local youth focusing on digital literacy (Tagtool).
                                </li>
                                <li>
                                    <strong>Social Cohesion:</strong> Projects often integrate local oral histories, giving the community a voice in the artistic narrative.
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* 3. Economic Impact */}
                    <div className="grid md:grid-cols-[1fr_2fr] gap-6">
                        <div className="text-white font-bold text-lg">Economic Impact</div>
                        <div>
                            <p className="opacity-90 mb-4">
                                By hosting up to 8 residents at a time, we stimulate the local economy and promote Libušín as a destination for sustainable <strong>"Slow Tourism."</strong>
                            </p>
                            <ul className="list-disc list-inside space-y-2 opacity-80 text-sm">
                                <li>
                                    <strong>Local Sourcing:</strong> Prioritizing local suppliers for food and services.
                                </li>
                                <li>
                                    <strong>Institutional Governance:</strong> Transparent model ensuring resources circulate within the community.
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
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

            {/* Social & Intercultural Mission */}
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


            {/* Founders' Vision: A Legacy of Innovation */}
            <section className="space-y-8 pt-16 border-t border-white/10">
                <div className="max-w-3xl">
                    <h2 className="text-3xl font-light text-white mb-2">Founders' Vision: A Legacy of Innovation</h2>
                    <p className="text-lg opacity-80">From Private Studio to European Hub</p>
                </div>

                <div className="prose prose-invert max-w-none opacity-90 leading-relaxed space-y-6">
                    <p>
                        Founded in 2002, Ateliér Libušín began as a private sanctuary for artistic experimentation in the heart of Central Bohemia.
                        Over two decades, what started as a personal atelier has naturally evolved into a collaborative crossroads where heritage architecture
                        meets the digital frontier. As we move through 2025, our mission is to formalize this evolution, transitioning from an informal
                        artist-led initiative into a professionalized <strong>z.s. (non-profit) entity</strong> capable of supporting the next generation of international creators.
                    </p>

                    <h3 className="text-white text-xl font-normal mt-8">The Digital and Land Art Synthesis</h3>
                    <p>
                        Our journey reached a turning point in 2018 and 2019, through landmark collaborations with OMAi/Tagtool and visibility at Ars Electronica.
                        These milestones proved that rural spaces can serve as high-capacity incubators for global digital innovation.
                        By integrating high-end projection technology with the physical landscape of our orchard and pavilion, we have developed an
                        <strong>"Adaptive Residency"</strong> model that thrives across seasons—offering deep-focus "Winter Research" and collaborative "Summer Labs".
                    </p>

                    <h3 className="text-white text-xl font-normal mt-8">Our Commitment for 2025 and Beyond</h3>
                    <p>
                        As we align our operations with the <strong>New European Bauhaus</strong> and the <strong>European Green Deal</strong>,
                        Ateliér Libušín stands as a "Qualified Host" dedicated to sustainable, inclusive cultural mobility. We are committed to maintaining a
                        "35-minute Green Link" to Prague, prioritizing public transport, and fostering a "Slow Travel" ethos that respects both
                        the artist’s pace and the local ecology. Our goal is to ensure that every project incubated here not only reaches a global stage
                        but also enriches the social and cultural fabric of the Libušín community.
                    </p>
                </div>
            </section>

        </article>
    )
}
