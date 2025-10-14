"use client";
import Image from 'next/image'
import { useEffect, useCallback } from 'react'

type Item = { src: string; alt: string; caption?: string; year?: number; credit?: string; width: number; height: number }

export default function Lightbox({ items, index, onClose, onPrev, onNext }:{ items: Item[]; index: number | null; onClose: () => void; onPrev: () => void; onNext: () => void }) {
  const open = index !== null
  const item = open ? items[index!] : null

  const onKey = useCallback((e: KeyboardEvent) => {
    if (!open) return
    if (e.key === 'Escape') onClose()
    if (e.key === 'ArrowLeft') onPrev()
    if (e.key === 'ArrowRight') onNext()
  }, [open, onClose, onPrev, onNext])

  useEffect(() => {
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onKey])

  if (!open || !item) return null

  return (
    <div className="fixed inset-0 z-[100] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4" role="dialog" aria-modal="true">
      <button aria-label="Close" className="absolute top-4 right-4 text-white/90 hover:text-white text-3xl leading-none" onClick={onClose}>×</button>
      <button aria-label="Previous" className="absolute left-3 md:left-6 text-white/80 hover:text-white text-3xl select-none" onClick={onPrev}>‹</button>
      <div className="relative w-full max-w-5xl">
        <div className="relative aspect-[16/10] bg-black/30 rounded-xl overflow-hidden border border-white/10">
          <Image src={item.src} alt={item.alt} fill sizes="(max-width: 1200px) 100vw, 1200px" className="object-contain" priority />
        </div>
        {(item.caption || item.credit || item.year) && (
          <div className="mt-3 text-sm text-white/80">
            <div>{item.caption}{item.year ? ` (${item.year})` : ''}</div>
            {item.credit && <div className="opacity-70">© {item.credit}</div>}
          </div>
        )}
      </div>
      <button aria-label="Next" className="absolute right-3 md:right-6 text-white/80 hover:text-white text-3xl select-none" onClick={onNext}>›</button>
    </div>
  )
}
