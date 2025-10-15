
export default function Hero() {
  return (
    <section className="grid md:grid-cols-2 gap-10 items-center">
      <div className="space-y-6">
        <div className="h-1 w-16 bg-guardianBlue rounded"></div>
        <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
          Welcome to Ateliér Libušín
        </h1>
        <p className="text-lg opacity-90 max-w-prose">
          Nestled in the serene countryside just outside Prague, Czech Republic,
          Ateliér Libušín is a vibrant creative haven dedicated to artistic exploration,
          collaboration, and residency programs. Founded by artists <strong>Dmitri Berzon</strong> and
          <strong> Frances Sander</strong>, our studio has long served as a space where ideas flourish
          amid the apple orchards and rolling landscapes that inspire our work. Whether you’re seeking
          a retreat for personal projects or an opportunity to apply for grants through cultural authorities,
          Ateliér Libušín offers the tranquility and resources to bring your vision to life.
        </p>
        <div className="flex gap-3">
          <a href="/residency" className="btn btn-primary">Residency details</a>
          <a href="/timeline" className="btn">History & timeline</a>
        </div>
      </div>

      <div className="aspect-video rounded-2xl overflow-hidden shadow border">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/gE34pcyBScU"
          title="Orpheus and Eurydice at Ateliér Libušín"
          allowFullScreen
        />
      </div>
    </section>
  )
}
