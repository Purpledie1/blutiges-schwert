import React, { useState } from 'react';
import { ARCHIVE_ITEMS } from './data/archiveItems';
import { ArchiveItem, Category } from './types';
import { Header, ViewMode } from './components/Header';
import { HeroOrigin } from './components/HeroOrigin';
import { ThreeArtifactViewer } from './components/ThreeArtifactViewer';
import { ArchiveGrid } from './components/ArchiveGrid';
import { SlotModal } from './components/SlotModal';
import { Footer } from './components/Footer';
import { BloodRain } from './components/BloodRain';
import { AlertCircle, Flame, Sparkles } from 'lucide-react';

export const App: React.FC = () => {
  const [items] = useState<ArchiveItem[]>(ARCHIVE_ITEMS);
  const [currentCategory, setCurrentCategory] = useState<Category>('ALL');
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);
  const [isRainActive, setIsRainActive] = useState<boolean>(true);
  const [viewMode, setViewMode] = useState<ViewMode>('CATALOGUE');

  // The origin reference item (Slot 00)
  const originItem = items.find((item) => item.id === 'BS-00') || items[0];

  // Grid items: either filtered by category or all remaining items
  const gridItems = items.filter((item) => {
    if (currentCategory === 'ALL') {
      return item.id !== 'BS-00';
    }
    return item.category === currentCategory;
  });

  const pendingCount = items.filter((item) => item.status === 'AWAITING_DESIGN').length;

  return (
    <div className="min-h-screen bg-obsidian-950 text-steel-200 archive-grain flex flex-col font-sans selection:bg-blood-800 selection:text-white relative">
      {/* Niche Gothic Blood Rain Ambient Layer */}
      <BloodRain enabled={isRainActive} />

      {/* Top Header & Navigation */}
      <Header
        currentCategory={currentCategory}
        onSelectCategory={setCurrentCategory}
        pendingCount={pendingCount}
        isRainActive={isRainActive}
        onToggleRain={() => setIsRainActive((prev) => !prev)}
        viewMode={viewMode}
        onSelectViewMode={setViewMode}
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
              <span>3D-карточки с физикой наклона и звуковыми микро-эффектами</span>
            </div>
          </div>
        </div>

        {/* View Switcher: 3D Artifact Vault or Full Catalogue */}
        {viewMode === '3D_ARTIFACT' ? (
          <div className="animate-in fade-in duration-500">
            <ThreeArtifactViewer />
          </div>
        ) : (
          <>
            {/* Hero Section: Foundational Prototype (User's Reference) */}
            {currentCategory === 'ALL' && (
              <HeroOrigin
                item={originItem}
                onInspect={(item) => setSelectedItem(item)}
              />
            )}

            {/* Embedded 3D Blade Relic Preview Bar */}
            {currentCategory === 'ALL' && (
              <div className="border-b border-hairline bg-obsidian-900/30 p-4">
                <div className="max-w-7xl mx-auto flex justify-between items-center font-mono text-xs">
                  <div className="flex items-center space-x-2 text-neutral-300">
                    <Sparkles className="w-3.5 h-3.5 text-blood-500 animate-pulse" />
                    <span>ИНТЕРАКТИВНЫЙ 3D АРТЕФАКТ: DAS BLUTIGE SCHWERT</span>
                  </div>
                  <button
                    onClick={() => setViewMode('3D_ARTIFACT')}
                    className="border border-blood-600/80 bg-blood-950/40 hover:bg-blood-700 hover:text-white text-blood-300 px-3 py-1 font-bold tracking-widest text-[10px] transition-all"
                  >
                    ОТКРЫТЬ 3D КАМЕРУ [360° WEBGL] →
                  </button>
                </div>
              </div>
            )}

            {/* The Archive Grid of Empty & Populated Cells with 3D Tilt */}
            <ArchiveGrid
              items={gridItems}
              onSelectItem={(item) => setSelectedItem(item)}
            />
          </>
        )}
      </main>

      {/* Detail Specimen Modal */}
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

