


import type { Metadata } from 'next'
import Script from 'next/script'
import SectionHeader from '../../components/ui/SectionHeader'

export const metadata: Metadata = { title: 'Apply — Ateliér Libušín' }

export default function Apply() {
  return (
    <div className="container max-w-5xl mx-auto px-6 py-24 space-y-24">

      {/* Header */}
      <SectionHeader
        eyebrow="Open Call"
        title="Apply for Residency"
        subtitle="We accept applications on a rolling basis for the Winter Research and Summer Open Air sessions."
        align="center"
      />

      {/* Green Mobility Ethos */}
      <section className="bg-[var(--bg-panel)] p-8 md:p-12 rounded-2xl border border-white/5">
        <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
          <h2 className="text-2xl font-serif text-white">Green Mobility & The Slow Travel Ethos</h2>
          <span className="text-xs font-bold uppercase tracking-widest text-[#4ade80] border border-[#4ade80]/30 px-3 py-1 rounded-full bg-[#4ade80]/5">
            EU Green Deal
          </span>
        </div>

        <p className="text-[var(--text-muted)] mb-12 leading-relaxed">
          Atelier Libušín is committed to reducing the carbon footprint of cultural mobility.
          We prioritize <strong>Slow Travel</strong>—the journey should be an intentional part of the creative process.
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* The 35-minute Green Link */}
          <div className="bg-[var(--bg-deep)] p-6 rounded-xl border border-white/10 hover:border-[#4ade80]/50 transition-colors group">
            <h3 className="text-[#4ade80] font-bold mb-4 flex items-center gap-2 group-hover:text-white transition-colors">
              <span className="text-xl">🚌</span> The 35-Minute Green Link
            </h3>
            <p className="text-sm text-[var(--text-muted)] mb-4 leading-relaxed">
              Direct bus connection from <strong>Prague Metro A (Nádraží Veleslavín)</strong>.
              Seamless "door-to-door" accessibility for residents with luggage.
            </p>
            <div className="text-xs uppercase tracking-wider text-[var(--text-muted)] opacity-80">
              <span className="block mb-1">Stop: Libušín, náměstí</span>
              <span className="block text-[#4ade80]">Carbon Reduction: ~80% vs Car</span>
            </div>
          </div>

          {/* Policy & Bonus */}
          <div className="bg-[var(--bg-deep)] p-6 rounded-xl border border-white/10">
            <h3 className="text-white font-bold mb-4">Policies & Perks</h3>
            <ul className="space-y-4 text-sm text-[var(--text-muted)]">
              <li className="flex gap-3">
                <span className="text-[#4ade80]">✓</span>
                <span>
                  <strong>Green Mobility Bonus:</strong> Applicants utilizing train/bus are prioritized in selection.
                </span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#4ade80]">🚲</span>
                <span>
                  <strong>Local Navigation:</strong> Bike & Transit Pass provided for local errands.
                </span>
              </li>
              <li className="flex gap-3 text-[var(--text-muted)] opacity-60">
                <span>✈️</span>
                <span>
                  <strong>Flight Policy:</strong> Short-haul flights discouraged. Proof of carbon offset required if flying.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Application Form Block */}
      <section className="space-y-6">
        {/* EU Compliance Note */}
        <div className="bg-[var(--bg-panel)] p-6 rounded-xl border border-[var(--brand)]/20 text-sm text-[var(--text-muted)] flex items-start gap-4">
          <span className="text-2xl mt-1">🇪🇺</span>
          <p className="leading-relaxed">
            This application form captures data required for <strong>Creative Europe</strong> and <strong>Visegrad Fund</strong> reporting.
            Please answer the "Grant Alignment" and "Travel Plan" questions carefully.
          </p>
        </div>

        {/* Smart Form Embed */}
        {/* Smart Form Embed */}
        <div className="w-full bg-[#111] rounded-2xl overflow-hidden min-h-[600px] border border-white/10 relative shadow-2xl">
          <iframe
            data-tally-src="https://tally.so/embed/mBB09q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
            loading="lazy"
            width="100%"
            height="216"
            title="Residency Application"
            className="w-full h-full border-0 relative z-10"
          >
          </iframe>

          {/* Fallback / Loading State */}
          <div className="absolute inset-0 flex items-center justify-center flex-col z-0 p-8 text-center bg-[var(--bg-deep)]">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[var(--brand)] mb-6 opacity-80"></div>
            <p className="text-white font-medium text-lg mb-2">Loading application form...</p>
            <p className="text-[var(--text-muted)] text-sm">
              If the form does not load securely within a few seconds, <br />
              <a href="https://tally.so/r/mBB09q" target="_blank" rel="noopener noreferrer" className="text-[var(--brand)] underline hover:text-white transition-colors">
                click here to open it directly
              </a>.
            </p>
          </div>
        </div>
        <Script id="tally-js" src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />
      </section>

      {/* Footer Info */}
      <section className="grid md:grid-cols-2 gap-12 pt-12 border-t border-white/10 text-center md:text-left">
        <div>
          <h3 className="font-serif text-white text-xl mb-4">Response Time</h3>
          <p className="text-[var(--text-muted)]">We usually respond within 7 days. If your proposal is time-sensitive, please indicate this in the project description.</p>
        </div>
        <div>
          <h3 className="font-serif text-white text-xl mb-4">General Inquiries</h3>
          <p className="text-[var(--text-muted)]">
            For questions outside the residency application process:<br />
            <a href="mailto:berzon73@gmail.com" className="text-[var(--brand)] hover:underline mt-2 inline-block">berzon73@gmail.com</a>
          </p>
        </div>
      </section>

    </div>
  )
}
