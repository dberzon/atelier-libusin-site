"use client";
import Image from 'next/image'
import { useState } from 'react'
import Lightbox from './Lightbox'

export type GalleryItem = { src: string; width: number; height: number; alt: string; caption?: string; year?: number; credit?: string }

export default function GalleryGrid({ items }: { items: GalleryItem[] }) {
  const [index, setIndex] = useState<number | null>(null)
  const open = (i: number) => setIndex(i)
  const close = () => setIndex(null)
  const prev = () => setIndex(i => (i === null ? null : (i + items.length - 1) % items.length))
  const next = () => setIndex(i => (i === null ? null : (i + 1) % items.length))

  return (
    <>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {items.map((it, i) => (
          <button
            key={it.src}
            onClick={() => open(i)}
            aria-label={`Open image: ${it.alt}`}
            className="group relative aspect-[4/3] overflow-hidden rounded-xl border hover:border-black/30 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-black/40"
          >
            <Image
              src={it.src}
              alt={it.alt}
              fill
              sizes="(max-width: 1024px) 50vw, 25vw"
              className="object-cover transition duration-300 group-hover:scale-105"
            />
            {it.caption && (
              <span className="absolute bottom-0 left-0 right-0 text-[11px] md:text-xs px-2 py-1 bg-black/40 text-white">
                {it.caption}
              </span>
            )}
          </button>
        ))}
      </div>

  <Lightbox items={items} index={index} onCloseAction={close} onPrevAction={prev} onNextAction={next} />
    </>
  )
}
