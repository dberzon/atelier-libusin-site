'use client';

import { Discipline, EUGoal } from '@/data/archive';

interface ArchiveFilterProps {
    activeDiscipline: Discipline | 'All';
    activeGoal: EUGoal | 'All';
    onDisciplineChange: (d: Discipline | 'All') => void;
    onGoalChange: (g: EUGoal | 'All') => void;
}

const DISCIPLINES: Discipline[] = ['Sound', 'Light', 'Land Art', 'Digital', 'Community'];
const GOALS: EUGoal[] = ['Sustainability', 'Innovation', 'International Mobility', 'Capacity Building'];

export default function ArchiveFilter({
    activeDiscipline,
    activeGoal,
    onDisciplineChange,
    onGoalChange
}: ArchiveFilterProps) {
    return (
        <div className="space-y-6 mb-12 p-6 rounded-lg bg-white/5 border border-white/10">

            {/* Discipline Filter */}
            <div>
                <h3 className="text-xs uppercase tracking-widest opacity-50 mb-3">Filter by Discipline</h3>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onDisciplineChange('All')}
                        className={`px-3 py-1 text-sm rounded-full transition-all border ${activeDiscipline === 'All'
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white/60 border-white/10 hover:border-white/40'
                            }`}
                    >
                        All Disciplines
                    </button>

                    {DISCIPLINES.map(d => (
                        <button
                            key={d}
                            onClick={() => onDisciplineChange(d)}
                            className={`px-3 py-1 text-sm rounded-full transition-all border ${activeDiscipline === d
                                    ? 'bg-brandAccent text-black border-brandAccent font-medium' // Yellow for active discipline
                                    : 'bg-transparent text-white/60 border-white/10 hover:border-white/40'
                                }`}
                        >
                            {d}
                        </button>
                    ))}
                </div>
            </div>

            {/* EU Goal Filter */}
            <div>
                <h3 className="text-xs uppercase tracking-widest opacity-50 mb-3">Filter by EU Strategic Goal</h3>
                <div className="flex flex-wrap gap-2">
                    <button
                        onClick={() => onGoalChange('All')}
                        className={`px-3 py-1 text-sm rounded-full transition-all border ${activeGoal === 'All'
                                ? 'bg-white text-black border-white'
                                : 'bg-transparent text-white/60 border-white/10 hover:border-white/40'
                            }`}
                    >
                        All Goals
                    </button>

                    {GOALS.map(g => (
                        <button
                            key={g}
                            onClick={() => onGoalChange(g)}
                            className={`px-3 py-1 text-sm rounded-full transition-all border ${activeGoal === g
                                    ? 'bg-[#00f0ff] text-black border-[#00f0ff] font-medium' // Cyan for active goal
                                    : 'bg-transparent text-white/60 border-white/10 hover:border-white/40'
                                }`}
                        >
                            {g}
                        </button>
                    ))}
                </div>
            </div>

        </div>
    );
}
