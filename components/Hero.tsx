import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden rounded-lg">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/hero.png" 
          alt="Atelier Libusin Projection Art" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl px-6 space-y-8">
        <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white drop-shadow-xl">
          ATELIÉR LIBUŠÍN
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 font-light max-w-2xl mx-auto">
          Adaptive Residency for <span className="text-[#00f0ff] font-medium">Digital Innovation</span> & <span className="text-[#ff0055] font-medium">Land Art</span>
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 justify-center pt-8">
          <Link href="/apply" className="btn btn-primary px-8 py-4 text-lg">
            Apply Now
          </Link>
          <Link href="/residency" className="btn px-8 py-4 text-lg backdrop-blur-md bg-white/10 hover:bg-white/20">
            Explore Residency
          </Link>
        </div>

        {/* Impact Tickers */}
        <div className="pt-12 grid grid-cols-3 gap-8 text-sm opacity-80 border-t border-white/10 mt-12">
          <div>
            <span className="block text-2xl font-bold text-white">20+</span>
            Years of History
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">EU</span>
            Grant Compliant
          </div>
          <div>
            <span className="block text-2xl font-bold text-white">Global</span>
            Alumni Network
          </div>
        </div>
      </div>
    </section>
  )
}
