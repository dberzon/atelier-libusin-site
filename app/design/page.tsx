"use client"
import { useEffect, useState } from 'react'
import styles from './design-tuner.module.css'

export default function DesignTuner() {
  const [brand, setBrand]   = useState('#052962')
  const [accent, setAccent] = useState('#ffe500')
  const [radius, setRadius] = useState(16)

  // Load saved settings
  useEffect(() => {
    const b = localStorage.getItem('brand')   || brand
    const a = localStorage.getItem('accent')  || accent
    const r = Number(localStorage.getItem('radius') || radius)
    setBrand(b as string); setAccent(a as string); setRadius(r)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Apply to CSS variables
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
    localStorage.removeItem('brand'); localStorage.removeItem('accent'); localStorage.removeItem('radius')
  }

  return (
    <section className="prose max-w-none">
      <h1>Design Tuner</h1>
      <p>Play with brand color, accent, and corner radius. Changes apply instantly and persist in your browser.</p>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="p-6 border rounded-2xl">
          <label htmlFor="brand-color" className="block text-sm mb-2">Brand color</label>
          <div className={`mt-4 p-4 rounded-[var(--radius)] text-white ${styles.brandPreview}`}>
            Header / Primary button preview
          </div>
        </div>

        <div className="p-6 border rounded-2xl">
          <label htmlFor="accent-color" className="block text-sm mb-2">Accent color</label>
          <div className={`mt-4 underline underline-offset-4 ${styles.accentUnderline}`}>
            Link/underline preview
          </div>
        </div>

        <div className="p-6 border rounded-2xl">
          <label htmlFor="radius-range" className="block text-sm mb-2">Corner radius: {radius}px</label>
          <input
            id="radius-range"
            type="range"
            min={4}
            max={32}
            step={1}
            value={radius}
            title={`Corner radius ${radius}px`}
            onChange={(e) => setRadius(Number(e.target.value))}
          />
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

      <p className="text-sm opacity-70 mt-6">Tip: keep contrast AA compliant when changing colors.</p>
    </section>
  )
}
