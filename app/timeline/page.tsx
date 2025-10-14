export const metadata = { title: 'Timeline — Ateliér Libušín' }

const items = [
  { year: 2024, title: 'Orpheus & Eurydice concert recording at Ateliér Libušín', link: 'https://www.youtube.com/watch?v=gE34pcyBScU' },
  { year: 2023, title: 'Tagtool sessions with OMAi at the studio', link: 'https://www.omai.at/posts/session-with-frances-sander-at-atelier-libusin' },
  { year: 2019, title: 'OMAi / Tagtool residency week at the studio', link: 'https://www.omai.at/posts/artist-in-residency-at-atelier-libusin' },
  { year: 2010, title: 'Libušín Art & Film Festival hosted at the atelier', link: 'https://fmera.org/design/libusinfilmfest/index.html' },
  { year: 2008, title: 'Short film "Passing Through" by Atelier Libušín members (IFFR)', link: 'https://iffr.com/en/iffr/2008/films/passing-through' }
]

export default function Timeline() {
  return (
    <section>
      <h1 className="text-2xl font-semibold mb-6">Selected timeline</h1>
      <ul className="space-y-4">
        {items.map((i) => (
          <li key={i.title} className="p-4 border rounded-2xl">
            <div className="flex items-center justify-between gap-4">
              <div>
                <div className="text-sm opacity-70">{i.year}</div>
                <div className="font-medium"><a href={i.link} target="_blank" rel="noreferrer">{i.title}</a></div>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
