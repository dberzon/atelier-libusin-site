export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-8 items-center">
      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">Artist-run studio & residency in Central Bohemia</h1>
        <p className="text-lg opacity-90">Independent micro-residency, studio and performance space run by artists <strong>Dmitri Berzon</strong> & <strong>Frances Sander</strong>.
        We host focused work periods, small workshops, and collaborations.</p>
        <div className="flex gap-3">
          <a href="/residency" className="inline-block px-4 py-2 rounded-2xl border">Residency details</a>
          <a href="/timeline" className="inline-block px-4 py-2 rounded-2xl border">History & timeline</a>
        </div>
      </div>
      <div className="aspect-video rounded-2xl overflow-hidden shadow">
        <iframe className="w-full h-full" src="https://www.youtube.com/embed/gE34pcyBScU" title="Orpheus and Eurydice at Ateliér Libušín" allowFullScreen></iframe>
      </div>
    </section>
  )
}
