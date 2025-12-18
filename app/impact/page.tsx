        // ...existing code...

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

