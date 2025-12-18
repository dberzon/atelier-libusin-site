import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-lg mb-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/hero.png"
          alt="Atelier Libusin Projection Art"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-black/50 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-[var(--bg-deep)]/80 via-transparent to-transparent" />
      </div>

      {/* Content - Level 1 & 2 */}
      <div className="relative z-10 text-center max-w-5xl px-6 flex flex-col items-center">

        {/* Level 2: Location/Status - Context */}
        <div className="flex gap-4 mb-6 opacity-80 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--phosphor)] border border-[var(--phosphor)]/30 px-3 py-1 rounded-full bg-[var(--phosphor)]/5">
            EU Qualified Host
          </span>
          <span className="text-sm font-medium uppercase tracking-[0.2em] text-[var(--text-muted)] py-1">
            35 Min from Prague
          </span>
        </div>

        {/* Level 1: Hero Dominance */}
        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter text-white drop-shadow-2xl mb-6 leading-[0.9]">
          ATELIÉR LIBUŠÍN
        </h1>

        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-3xl mx-auto mb-10 leading-relaxed">
          Adaptive Residency for <span className="text-[var(--brand)] font-normal">Digital Innovation</span> & <span className="text-[var(--accent)] font-normal">Land Art</span>
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center w-full md:w-auto">
          <Link href="/apply" className="btn btn-primary px-10 py-5 text-lg shadow-[0_0_30px_rgba(0,240,255,0.2)]">
            Apply Now
          </Link>
          <Link href="/residency" className="btn btn-secondary px-10 py-5 text-lg backdrop-blur-sm">
            Explore Residency
          </Link>
        </div>

        {/* Level 3: Institutional Evidence */}
        <div className="w-full mt-24 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <span className="block text-4xl font-bold font-serif text-white mb-1">20+</span>
            <span className="text-sm uppercase tracking-wider text-[var(--text-muted)]">Years of History</span>
          </div>
          <div>
            <span className="block text-4xl font-bold font-serif text-[var(--brand)] mb-1">100%</span>
            <span className="text-sm uppercase tracking-wider text-[var(--text-muted)]">Grant Compliant</span>
          </div>
          <div>
            <span className="block text-4xl font-bold font-serif text-white mb-1">Global</span>
            <span className="text-sm uppercase tracking-wider text-[var(--text-muted)]">Alumni Network</span>
          </div>
        </div>

      </div>
    </section>
  )
}
