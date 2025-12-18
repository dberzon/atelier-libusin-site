
import type { Metadata } from 'next'
import ArchiveGrid from '@/components/impact/ArchiveGrid'
import SectionHeader from '../../components/ui/SectionHeader'

export const metadata: Metadata = { title: 'Impact & Archive — Ateliér Libušín' }


export default function Impact() {
  return (
    <div className="container max-w-7xl mx-auto px-6 py-24 space-y-16">

      {/* Header */}
      <SectionHeader
        eyebrow="Documentation"
        title="Impact & Archive"
        subtitle="Documenting our capacity to build international careers and foster innovation. Browse our case studies and residency history below."
        align="center"
      />

      {/* Filterable Grid */}
      <div className="bg-[var(--bg-panel)] p-6 md:p-8 rounded-2xl border border-white/5 min-h-[500px]">
        <ArchiveGrid />
      </div>

    </div>
  )
}

