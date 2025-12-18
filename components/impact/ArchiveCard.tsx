import { ArchiveItem } from '@/data/archive';

interface ArchiveCardProps {
    item: ArchiveItem;
    onClick: (item: ArchiveItem) => void;
}

export default function ArchiveCard({ item, onClick }: ArchiveCardProps) {
    const isFeatured = item.status === 'featured';

    return (
        <div
            onClick={() => onClick(item)}
            className={`group relative p-6 rounded-xl border transition-all cursor-pointer overflow-hidden
        ${isFeatured
                    ? 'bg-white/5 border-white/20 hover:border-[#00f0ff] hover:shadow-[0_0_30px_rgba(0,240,255,0.1)]'
                    : 'bg-transparent border-white/5 hover:border-white/20 hover:bg-white/[0.02]'
                }
      `}
        >
            {/* Year Badge */}
            <span className={`inline-block text-xs font-mono mb-4 px-2 py-1 rounded 
        ${isFeatured ? 'bg-[#00f0ff]/10 text-[#00f0ff]' : 'bg-white/5 text-white/50 group-hover:text-white'}
      `}>
                {item.year}
            </span>

            {/* Featured Indicator */}
            {isFeatured && (
                <span className="absolute top-6 right-6 text-[10px] uppercase tracking-widest text-[#ff0055] font-bold border border-[#ff0055]/30 px-2 py-1 rounded-full">
                    Case Study
                </span>
            )}

            {/* Title */}
            <h3 className={`font-medium mb-2 leading-tight ${isFeatured ? 'text-xl text-white' : 'text-lg text-gray-300'}`}>
                {item.title}
            </h3>

            {/* Partner */}
            {item.partners && (
                <div className="text-sm text-white/50 mb-4">{item.partners}</div>
            )}

            {/* Impact Summary (Truncated for standard) */}
            {item.impact_summary && (
                <p className="text-sm text-white/70 leading-relaxed mb-4 line-clamp-3">
                    {item.impact_summary}
                </p>
            )}

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mt-auto">
                {item.eu_alignment?.map(tag => (
                    <span key={tag} className="text-[10px] uppercase border border-white/10 px-2 py-0.5 rounded text-white/40 group-hover:border-white/30 transition-colors">
                        {tag}
                    </span>
                ))}
            </div>

            {/* Hover decoration */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#00f0ff]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
        </div>
    );
}
