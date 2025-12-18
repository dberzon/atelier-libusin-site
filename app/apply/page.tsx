


import type { Metadata } from 'next'
import Script from 'next/script'

export const metadata: Metadata = { title: 'Apply — Ateliér Libušín' }

export default function Apply() {
  return (
    <article className="max-w-3xl mx-auto space-y-12">

      <section className="text-center space-y-6">
        <h1 className="text-4xl text-white font-light">Apply for Residency</h1>
        <p className="text-xl opacity-80">
          We accept applications on a rolling basis for the <span className="text-[#00f0ff]">Winter Research</span> and <span className="text-[#ff0055]">Summer Open Air</span> sessions.
        </p>
      </section>

      {/* Green Mobility & Slow Travel Ethos */}
      <section className="space-y-6">
        <div className="flex items-center gap-3 mb-2">
          <h2 className="text-2xl font-light text-white">Green Mobility & The Slow Travel Ethos</h2>
          <span className="text-xs font-bold uppercase tracking-widest text-[#4ade80] border border-[#4ade80]/30 px-2 py-1 rounded-full">
            EU Green Deal
          </span>
        </div>

        <p className="opacity-80">
          Atelier Libušín is committed to reducing the carbon footprint of cultural mobility.
          We prioritize <strong>Slow Travel</strong>—the journey should be an intentional part of the creative process.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {/* The 35-minute Green Link */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-[#4ade80]/50 transition-colors">
            <h3 className="text-[#4ade80] font-bold mb-2 flex items-center gap-2">
              <span className="text-xl">🚌</span> The 35-Minute Green Link
            </h3>
            <p className="text-sm opacity-80 mb-4">
              Direct bus connection from <strong>Prague Metro A (Nádraží Veleslavín)</strong>.
              Seamless "door-to-door" accessibility for residents with luggage.
            </p>
            <div className="text-xs uppercase tracking-wider opacity-60">
              <span className="block">Stop: Libušín, náměstí</span>
              <span className="block text-[#4ade80]">Carbon Reduction: ~80% vs Car</span>
            </div>
          </div>

          {/* Policy & Bonus */}
          <div className="bg-white/5 p-6 rounded-xl border border-white/10">
            <h3 className="text-white font-bold mb-2">Policies & Perks</h3>
            <ul className="space-y-3 text-sm opacity-80">
              <li className="flex gap-2">
                <span className="text-[#4ade80]">✓</span>
                <span>
                  <strong>Green Mobility Bonus:</strong> Applicants utilizing train/bus are prioritized in selection.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4ade80]">🚲</span>
                <span>
                  <strong>Local Navigation:</strong> Bike & Transit Pass provided for local errands.
                </span>
              </li>
              <li className="flex gap-2 text-white/60">
                <span>✈️</span>
                <span>
                  <strong>Flight Policy:</strong> Short-haul flights discouraged. Proof of carbon offset required if flying.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* EU Compliance Note */}
      <div className="bg-white/5 p-6 rounded border border-white/10 text-sm opacity-80 flex gap-4">
        <span className="text-2xl">🇪🇺</span>
        <p>
          This application form captures data required for <strong>Creative Europe</strong> and <strong>Visegrad Fund</strong> reporting.
          Please answer the "Grant Alignment" and "Travel Plan" questions carefully.
        </p>
      </div>

      {/* Smart Form Embed */}
      <div className="w-full bg-[#111] rounded-xl overflow-hidden min-h-[600px] border border-white/10 relative">
        <iframe
          data-tally-src="https://tally.so/embed/mBB09q?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
          loading="lazy"
          width="100%"
          height="216"
          title="Residency Application"
          className="w-full h-full border-0"
        >
        </iframe>

        {/* Fallback / Loading State */}
        <div className="absolute -z-10 inset-0 flex items-center justify-center flex-col opacity-30">
          <p>Loading Secure Application Form...</p>
        </div>
      </div>

      <Script id="tally-js" src="https://tally.so/widgets/embed.js" strategy="lazyOnload" />

      <section className="grid md:grid-cols-2 gap-8 text-sm opacity-70 pt-8 border-t border-white/10">
        <div>
          <h3 className="font-bold text-white mb-2">Response Time</h3>
          <p>We usually respond within 7 days. If your proposal is time-sensitive, please indicate this in the project description.</p>
        </div>
        <div>
          <h3 className="font-bold text-white mb-2">General Inquiries</h3>
          <p>For questions outside the residency application process:<br />
            <a href="mailto:berzon73@gmail.com" className="text-[#00f0ff] hover:underline">berzon73@gmail.com</a></p>
        </div>
      </section>

    </article>
  )
}
