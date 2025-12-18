'use client';

import { useState, useMemo } from 'react';
import { archiveItems, Discipline, EUGoal, ArchiveItem } from '@/data/archive';
import ArchiveCard from './ArchiveCard';
import ArchiveFilter from './ArchiveFilter';
import CaseStudyModal from './CaseStudyModal';

export default function ArchiveGrid() {
    const [activeDiscipline, setActiveDiscipline] = useState<Discipline | 'All'>('All');
    const [activeGoal, setActiveGoal] = useState<EUGoal | 'All'>('All');
    const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

    const filteredItems = useMemo(() => {
        return archiveItems.filter(item => {
            const matchDiscipline = activeDiscipline === 'All' || item.discipline.includes(activeDiscipline);
            const matchGoal = activeGoal === 'All' || (item.eu_alignment && item.eu_alignment.includes(activeGoal));
            return matchDiscipline && matchGoal;
        });
    }, [activeDiscipline, activeGoal]);

    const handleCardClick = (item: ArchiveItem) => {
        if (item.status === 'featured') {
            setSelectedItem(item);
        } else if (item.link) {
            window.open(item.link, '_blank');
        }
    };

    return (
        <>
            <ArchiveFilter
                activeDiscipline={activeDiscipline}
                activeGoal={activeGoal}
                onDisciplineChange={setActiveDiscipline}
                onGoalChange={setActiveGoal}
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map(item => (
                    <ArchiveCard
                        key={item.id}
                        item={item}
                        onClick={handleCardClick}
                    />
                ))}
            </div>

            {filteredItems.length === 0 && (
                <div className="text-center py-20 opacity-50">
                    <p>No projects match these filters.</p>
                    <button
                        onClick={() => { setActiveDiscipline('All'); setActiveGoal('All'); }}
                        className="text-[#00f0ff] underline mt-2 hover:text-white"
                    >
                        Reset Filters
                    </button>
                </div>
            )}

            {selectedItem && (
                <CaseStudyModal
                    item={selectedItem}
                    isOpen={!!selectedItem}
                    onClose={() => setSelectedItem(null)}
                />
            )}
        </>
    );
}
