import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden rounded-lg mb-[var(--section-gap)]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none">
        <img
          src="/IMG_8772.jpg"
          alt="Atelier Libusin Projection Art"
          className="w-full h-full object-cover"
        />
        {/* Dark overlay 30-55% range for contrast */}
        <div className="absolute inset-0 bg-black/40 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg-deep)] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 flex flex-col items-center">

        {/* H1: Mission Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-white drop-shadow-2xl mb-8 leading-[1.0] max-w-[15ch]">
          Stewarding a Rural Avant-Garde
        </h1>

        {/* Subheading: Mission tagline */}
        <p className="text-xl md:text-2xl text-[var(--text-main)] font-light max-w-2xl mx-auto mb-12 leading-relaxed opacity-90">
          Where ecological grounding meets digital innovation.
        </p>

        {/* CTA Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-center w-full md:w-auto mb-16">
          <Link href="/residency" className="btn btn-primary px-10 py-4 text-lg shadow-[0_0_20px_rgba(0,240,255,0.15)]">
            Explore Residency
          </Link>
          <Link href="/facilities" className="btn btn-secondary px-10 py-4 text-lg backdrop-blur-sm">
            Facilities
          </Link>
        </div>

        {/* Microline: Location + Season */}
        <div className="flex items-center gap-3 text-sm font-medium tracking-[0.2em] uppercase text-[var(--text-muted)] animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
          <span className="text-[var(--brand)]">●</span>
          <span>Libušín, Czech Republic</span>
          <span className="opacity-30">•</span>
          <span>Season 2025</span>
        </div>

      </div>
    </section>
  )
}
