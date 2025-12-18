import GalleryGrid, { GalleryItem } from '../../components/GalleryGrid'
import type { Metadata } from 'next'

export const metadata: Metadata = { title: 'Gallery — Ateliér Libušín' }

const items: GalleryItem[] = [
  { src: '/gallery/01.jpg', width: 1600, height: 1200, alt: 'Outdoor projection in the garden', caption: 'Outdoor projection in the garden', year: 2023, credit: 'Ateliér Libušín' },
  { src: '/gallery/02.jpg', width: 1600, height: 1200, alt: 'Tagtool live drawing session', caption: 'Tagtool live drawing session', year: 2019, credit: 'Frances Sander' },
  { src: '/gallery/03.jpg', width: 1600, height: 1200, alt: 'Studio performance', caption: 'Studio performance', year: 2024 },
  { src: '/gallery/04.jpg', width: 1600, height: 1200, alt: 'Workshop with guests', caption: 'Workshop with guests', year: 2022 },
]

export default function GalleryPage() {
  return (
    <section className="space-y-6">
      <h1 className="text-2xl md:text-3xl font-semibold">Gallery</h1>
      <p className="opacity-80 max-w-2xl">A selection of images from residencies, workshops and performances at Ateliér Libušín.</p>
      <GalleryGrid items={items} />
      <p className="text-sm opacity-60">Photo use by permission; please credit Ateliér Libušín or the named photographer.</p>
    </section>
  )
}
