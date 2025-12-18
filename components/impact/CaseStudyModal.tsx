'use client';

import { useEffect } from 'react';
import { ArchiveItem } from '@/data/archive';

interface CaseStudyModalProps {
    item: ArchiveItem;
    isOpen: boolean;
    onClose: () => void;
}

export default function CaseStudyModal({ item, isOpen, onClose }: CaseStudyModalProps) {
    // Prevent body scroll when modal is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);

    // Handle Escape key
    useEffect(() => {
        const handleEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        window.addEventListener('keydown', handleEsc);
        return () => window.removeEventListener('keydown', handleEsc);
    }, [onClose]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
                onClick={onClose}
            />

            {/* Modal Content */}
            <div className="relative w-full max-w-2xl bg-[#111] border border-white/10 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">

                {/* Header Image (if available) - Simple placeholder fallback */}
                <div className="h-48 bg-gradient-to-br from-[#052962] to-black relative">
                    {item.media && item.media.length > 0 && (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img
                            src={item.media[0]}
                            alt={item.title}
                            className="w-full h-full object-cover opacity-60"
                        />
                    )}
                    <button
                        onClick={onClose}
                        className="absolute top-4 right-4 bg-black/50 hover:bg-white text-white hover:text-black rounded-full p-2 transition-all"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                {/* Scrollable Content */}
                <div className="p-8 overflow-y-auto">
                    <div className="flex items-center gap-4 mb-2">
                        <span className="text-[#00f0ff] font-mono text-sm">{item.year}</span>
                        <span className="text-xs uppercase tracking-widest text-[#ff0055]">Case Study</span>
                    </div>

                    <h2 className="text-3xl font-light text-white mb-2">{item.title}</h2>
                    <div className="text-white/50 text-sm mb-8">{item.partners}</div>

                    <div className="prose prose-invert max-w-none">
                        <h3 className="text-white text-lg font-normal border-b border-white/10 pb-2 mb-4">Strategic Impact</h3>
                        <p className="text-lg leading-relaxed text-white/80">
                            {item.impact_summary}
                        </p>

                        {/* Additional Metadata / Grant Specifics */}
                        <div className="grid grid-cols-2 gap-4 mt-8 p-4 bg-white/5 rounded-lg">
                            <div>
                                <span className="block text-xs uppercase text-white/40 mb-1">EU Goals</span>
                                <div className="flex flex-wrap gap-1">
                                    {item.eu_alignment?.map(tag => (
                                        <span key={tag} className="text-xs text-[#00f0ff]">{tag}</span>
                                    ))}
                                </div>
                            </div>
                            <div>
                                <span className="block text-xs uppercase text-white/40 mb-1">Disciplines</span>
                                <div className="flex flex-wrap gap-1">
                                    {item.discipline.map(d => (
                                        <span key={d} className="text-xs text-white/70">{d}</span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
