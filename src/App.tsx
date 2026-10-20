import React, { useState } from 'react';
import { ARCHIVE_ITEMS } from './data/archiveItems';
import { ArchiveItem, Category } from './types';
import { ShellFrame, MainTab } from './components/ShellFrame';
import { EditorialHero } from './components/EditorialHero';
import { ArchiveGrid } from './components/ArchiveGrid';
import { ThreeArtifactViewer } from './components/ThreeArtifactViewer';
import { ManifestoView } from './components/ManifestoView';
import { SlotModal } from './components/SlotModal';
import { QuickPromptDrawer } from './components/QuickPromptDrawer';
import { BloodRain } from './components/BloodRain';

export const App: React.FC = () => {
  const [items] = useState<ArchiveItem[]>(ARCHIVE_ITEMS);
  const [currentCategory, setCurrentCategory] = useState<Category>('ALL');
  const [selectedItem, setSelectedItem] = useState<ArchiveItem | null>(null);
  const [isRainActive, setIsRainActive] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<MainTab>('MATRIX');
  const [isQuickPromptOpen, setIsQuickPromptOpen] = useState<boolean>(false);

  // Prototype Zero (Reference demon piece)
  const originItem = items.find((item) => item.id === 'BS-00') || items[0];

  // Grid items: either filtered by category or all customizable slots (BS-01 to BS-07)
  const gridItems = items.filter((item) => {
    if (currentCategory === 'ALL') {
      return item.id !== 'BS-00';
    }
    return item.category === currentCategory;
  });

  const pendingCount = items.filter((item) => item.status === 'AWAITING_DESIGN').length;

  return (
    <>
      {/* Niche Atmospheric Blood Rain Background Canvas */}
      <BloodRain enabled={isRainActive} />

      {/* Monolith Architectural Viewport Shell */}
      <ShellFrame
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        currentCategory={currentCategory}
        onSelectCategory={setCurrentCategory}
        pendingCount={pendingCount}
        isRainActive={isRainActive}
        onToggleRain={() => setIsRainActive((prev) => !prev)}
        onOpenQuickPrompt={() => setIsQuickPromptOpen(true)}
      >
        {/* TAB 1: CATALOGUE MATRIX */}
        {activeTab === 'MATRIX' && (
          <div className="animate-in fade-in duration-300">
            {/* Split Screen Editorial Hero (Photo vs 3D Blade) */}
            {currentCategory === 'ALL' && (
              <EditorialHero
                originItem={originItem}
                onInspect={(item) => setSelectedItem(item)}
              />
            )}

            {/* The 7 Interactive Empty/Customizable Specimen Slots */}
            <ArchiveGrid
              items={gridItems}
              onSelectItem={(item) => setSelectedItem(item)}
            />
          </div>
        )}

        {/* TAB 2: FULLSCREEN 3D ARTIFACT VAULT */}
        {activeTab === '3D_VAULT' && (
          <div className="animate-in fade-in duration-500 py-6">
            <ThreeArtifactViewer />
          </div>
        )}

        {/* TAB 3: MANIFESTO */}
        {activeTab === 'MANIFESTO' && <ManifestoView />}
      </ShellFrame>

      {/* Detail Specimen Dossier Modal */}
      <SlotModal
        item={selectedItem}
        onClose={() => setSelectedItem(null)}
      />

      {/* Quick Prompt Drawer */}
      <QuickPromptDrawer
        isOpen={isQuickPromptOpen}
        onClose={() => setIsQuickPromptOpen(false)}
        items={items}
      />
    </>
  );
};

export default App;
