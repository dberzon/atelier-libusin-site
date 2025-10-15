

'use client'
import { useEffect, useState } from 'react'

export default function DesignTuner() {
  const [brand, setBrand]   = useState('#052962')
  const [accent, setAccent] = useState('#ffe500')
  const [radius, setRadius] = useState(16)

  useEffect(() => {
    const b = (localStorage.getItem('brand')  || brand) as string
    const a = (localStorage.getItem('accent') || accent) as string
    const r = Number(localStorage.getItem('radius') || radius)
    setBrand(b); setAccent(a); setRadius(r)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    const root = document.documentElement
    root.style.setProperty('--brand', brand)
    root.style.setProperty('--accent', accent)
    root.style.setProperty('--radius', `${radius}px`)
    localStorage.setItem('brand', brand)
    localStorage.setItem('accent', accent)
    localStorage.setItem('radius', String(radius))
  }, [brand, accent, radius])

  const reset = () => {
    setBrand('#052962'); setAccent('#ffe500'); setRadius(16)
    localStorage.removeItem('brand')
    localStorage.removeItem('accent')
    localStorage.removeItem('radius')
  }

  return (
    <section className="prose max-w-none">
      <h1>Design Tuner</h1>
      <p>Tweak brand color, accent, and corner radius. Changes apply instantly and persist in your browser.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-2xl">
          <label className="block text-sm mb-2">Brand color</label>
          <input type="color" value={brand} onChange={(e) => setBrand(e.target.value)} />
          <div className="mt-4 p-4 rounded-[var(--radius)] text-white" style={{ background: 'var(--brand)' }}>
            Header / Primary button preview
          </div>
        </div>

        <div className="p-6 border rounded-2xl">
          <label className="block text-sm mb-2">Accent color</label>
          <input type="color" value={accent} onChange={(e) => setAccent(e.target.value)} />
          <div className="mt-4 underline underline-offset-4" style={{ textDecorationColor: 'var(--accent)' }}>
            Link/underline preview
          </div>
        </div>

        <div className="p-6 border rounded-2xl">
          <label className="block text-sm mb-2">Corner radius: {radius}px</label>
          <input type="range" min={4} max={32} step={1} value={radius} onChange={(e) => setRadius(Number(e.target.value))} />
          <div className="mt-4 grid grid-cols-3 gap-3">
            <div className="h-16 border rounded-[var(--radius)]"></div>
            <div className="h-16 border rounded-[var(--radius)]"></div>
            <div className="h-16 border rounded-[var(--radius)]"></div>
          </div>
        </div>

        <div className="p-6 border rounded-2xl">
          <button className="btn btn-primary" onClick={reset}>Reset to defaults</button>
        </div>
      </div>
    </section>
  )
}
