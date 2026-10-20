import React, { useState } from 'react';
import { ARCHIVE_ITEMS } from './data/archiveItems';
import { ArchiveItem, Category } from './types';
import { Header } from './components/Header';
import { HeroOrigin } from './components/HeroOrigin';
import { ArchiveGrid } from './components/ArchiveGrid';
import { SlotModal } from './components/SlotModal';
import { Footer } from './components/Footer';
import { AlertCircle, Flame } from 'lucide-react';

export const App: React.FC = () => {
  const [items] = useState<ArchiveItem[]>(ARCHIVE_ITEMS);
  const [currentCategory, setCurrentCategory] = useState<Category>('ALL');
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);

  // The origin reference item (Slot 00)
  const originItem = items.find((item) => item.id === 'BS-00') || items[0];

  // Grid items: either filtered by category or all remaining items
  const gridItems = items.filter((item) => {
    // If category is ALL, we display the customizable slots in the grid (BS-01 to BS-07)
    if (currentCategory === 'ALL') {
      return item.id !== 'BS-00';
    }
    return item.category === currentCategory;
  });

  const pendingCount = items.filter((item) => item.status === 'AWAITING_DESIGN').length;

  return (
    <div className="min-h-screen bg-obsidian-950 text-steel-200 archive-grain flex flex-col font-sans selection:bg-blood-800 selection:text-white">
      {/* Top Header & Navigation */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={setCurrentCategory}
        pendingCount={pendingCount}
      />

      {/* Main Archival Experience */}
      <main className="flex-grow">
        {/* Designer Interaction Prompt Banner */}
        <div className="bg-blood-950/40 border-b border-blood-900/60 py-2.5 px-4">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs font-mono text-blood-300 gap-2">
            <div className="flex items-center space-x-2">
              <Flame className="w-4 h-4 text-blood-500 animate-bounce" />
              <span className="font-bold text-white uppercase tracking-wider">
                ИНТЕРАКТИВНЫЙ РЕЖИМ ДИЗАЙНЕРА:
              </span>
              <span>
                {pendingCount} пустых ячеек готовы к генерации одежды по вашим идеям.
              </span>
            </div>
            <div className="flex items-center space-x-2 text-[11px] text-neutral-400">
              <AlertCircle className="w-3.5 h-3.5 text-neutral-400" />
              <span>Кликните на любую ячейку для просмотра параметров</span>
            </div>
          </div>
        </div>

        {/* Hero Section: Foundational Prototype (User's Reference) */}
        {currentCategory === 'ALL' && (
          <HeroOrigin
            item={originItem}
            onInspect={(item) => setSelectedItem(item)}
          />
        )}

        {/* The Archive Grid of Empty & Populated Cells */}
        <ArchiveGrid
          items={gridItems}
          onSelectItem={(item) => setSelectedItem(item)}
        />
      </main>

      {/* Detail Specimen Modal (Native Dialog with Light-Dismiss per modern web guidance) */}
      <SlotModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Helmut Lang Utilitarian Footer */}
      <Footer />
    </div>
  );
};

export default App;
