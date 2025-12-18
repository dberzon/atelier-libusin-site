import GalleryGrid, { GalleryItem } from '../../components/GalleryGrid'
import type { Metadata } from 'next'
import SectionHeader from '../../components/ui/SectionHeader'

export const metadata: Metadata = { title: 'Gallery — Ateliér Libušín' }

const items: GalleryItem[] = [
  { src: '/gallery/01.jpg', width: 1600, height: 1200, alt: 'Outdoor projection in the garden', caption: 'Outdoor projection in the garden', year: 2023, credit: 'Ateliér Libušín' },
  { src: '/gallery/02.jpg', width: 1600, height: 1200, alt: 'Tagtool live drawing session', caption: 'Tagtool live drawing session', year: 2019, credit: 'Frances Sander' },
  { src: '/gallery/03.jpg', width: 1600, height: 1200, alt: 'Studio performance', caption: 'Studio performance', year: 2024 },
  { src: '/gallery/04.jpg', width: 1600, height: 1200, alt: 'Workshop with guests', caption: 'Workshop with guests', year: 2022 },
]

export default function GalleryPage() {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-24 space-y-16">
      <SectionHeader
        eyebrow="Archive"
        title="Gallery"
        subtitle="A selection of images from residencies, workshops, and performances at Ateliér Libušín."
        align="center"
      />

      <div className="bg-[var(--bg-panel)] p-6 md:p-8 rounded-2xl border border-white/5">
        <GalleryGrid items={items} />
      </div>

      <p className="text-center text-sm opacity-40 font-mono">
        Photo use by permission; please credit Ateliér Libušín or the named photographer.
      </p>
    </div>
  )
}
