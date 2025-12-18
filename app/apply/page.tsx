


import type { Metadata } from 'next'

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

      {/* EU Compliance Note */}
      <div className="bg-white/5 p-6 rounded border border-white/10 text-sm opacity-80 flex gap-4">
        <span className="text-2xl">🇪🇺</span>
        <p>
          This application form captures data required for <strong>Creative Europe</strong> and <strong>Visegrad Fund</strong> reporting.
          Please answer the "Grant Alignment" questions carefully to help us support your stay.
        </p>
      </div>

      {/* Smart Form Embed Placeholder */}
      <div className="w-full bg-[#111] rounded-xl overflow-hidden min-h-[600px] border border-white/10 relative">
        <div className="absolute inset-0 flex items-center justify-center flex-col opacity-50">
          <p className="mb-4">[ Tally.so Smart Form Embed ]</p>
          <ul className="text-sm list-disc text-left space-y-2">
            <li>Logic: Applicant Type (Individual/Group)</li>
            <li>Logic: Grant Alignment (Sustainability/Digital/Social)</li>
            <li>Logic: Green Mobility Tracker</li>
            <li>Upload: Portfolio (PDF/Link)</li>
          </ul>
        </div>
        {/* Actual Embed Code would go here: <iframe data-tally-src="..." ... /> */}
      </div>

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
