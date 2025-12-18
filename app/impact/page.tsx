        {/* Documentation and Accountability Section */}
        <section>
          <SectionHeader title="Documentation and accountability" className="mb-6" />
          <p className="text-[var(--text-muted)] leading-relaxed">
            Activities and outcomes can be documented for institutional partners and funding bodies. The residency maintains basic reporting structures suitable for grant-supported projects and international cooperation.
          {/* Main Sections (max 4) */}
          <div className="space-y-20">

            {/* Cultural Continuity Section */}
                <p>Knowledge and experience accumulate over time, benefiting both residents and the wider region.</p>
              </div>
            </section>

            {/* Support for Artistic Practice Section */}
            <section>
              <SectionHeader title="Support for artistic practice" className="mb-6" />
              <p className="text-[var(--text-muted)] leading-relaxed">
                The residency provides artists with time, space, and autonomy to develop work that may not fit short production cycles. Emphasis is placed on process, research, and continuity rather than immediate public output.
              </p>
            </section>

            {/* Local and International Context Section */}
            <section>
              <SectionHeader title="Local and international context" className="mb-6" />
              <p className="text-[var(--text-muted)] leading-relaxed">
                Located in a rural setting near Prague, Ateliér Libušín connects local context with international artistic networks. Visiting artists contribute to a shared environment shaped by place, exchange, and long-term collaboration.
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
          <p className="text-[var(--text-muted)] leading-relaxed">
            Located in a rural setting near Prague, Ateliér Libušín connects local context with international artistic networks. Visiting artists contribute to a shared environment shaped by place, exchange, and long-term collaboration.
          </p>
        </section>

        {/* Strategy Text */}
        <section className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader title="Fostering Innovation" className="mb-6" />
            <p className="text-[var(--text-muted)] leading-relaxed mb-6">
              Our primary metric is the long-term career growth of our residents. By providing a low-pressure environment with high-tech resources, we enable artists to prototype ambitious works that act as career milestones.
            </p>
            <LinkButton href="/mission" variant="ghost">Learn about our mission ↗</LinkButton>
          </div>
          <div className="bg-[var(--bg-panel)] p-8 rounded-xl border border-white/5">
            <h3 className="text-white font-serif text-lg mb-4">Strategic Goals</h3>
            <ul className="space-y-3 text-sm text-[var(--text-muted)]">
              <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> <span>Internationalization of local culture</span></li>
              <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> <span>Digital literacy in rural areas</span></li>
              <li className="flex gap-3"><span className="text-[var(--brand)]">●</span> <span>Sustainable cross-border mobility</span></li>
            </ul>
          </div>
        </section>

        {/* Filterable Grid */}
        <section>
          <SectionHeader title="Project Archive" className="mb-8" />
          <div className="bg-[var(--bg-panel)] p-6 md:p-8 rounded-2xl border border-white/5 min-h-[500px]">
            <ArchiveGrid />
          </div>
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

