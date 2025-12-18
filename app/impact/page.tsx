
import type { Metadata } from 'next'
import ArchiveGrid from '@/components/impact/ArchiveGrid'

export const metadata: Metadata = { title: 'Impact & Archive — Ateliér Libušín' }


export default function Impact() {
  return (
    <section className="space-y-12">

      {/* Introduction */}
      <div className="max-w-4xl">
        <h1 className="text-4xl font-light mb-6 text-white">Impact & Archive</h1>
        <p className="text-xl opacity-80 leading-relaxed max-w-2xl">
          Documenting our capacity to build international careers and foster innovation.
          Browse our case studies and residency history below.
        </p>
      </div>

      {/* Filterable Grid */}
      <ArchiveGrid />

    </section>
  )
}

