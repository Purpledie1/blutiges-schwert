import React, { useState } from 'react';
import { Volume2, VolumeX, Radio, ShieldAlert } from 'lucide-react';
import { Category } from '../types';
import { ambientAudio } from '../utils/audio';

interface HeaderProps {
  currentCategory: Category;
  onSelectCategory: (cat: Category) => void;
  pendingCount: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentCategory,
  onSelectCategory,
  pendingCount,
}) => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleSound = () => {
    const status = ambientAudio.toggle();
    setIsAudioPlaying(status);
  };

  const categories: { label: string; value: Category; code: string }[] = [
    { label: 'ALL SPECIMENS', value: 'ALL', code: '00' },
    { label: 'OUTERWEAR', value: 'OUTERWEAR', code: '01' },
    { label: 'BOTTOMS / PANTS', value: 'BOTTOMS', code: '02' },
    { label: 'LEATHER & TACTICAL', value: 'LEATHER_TACTICAL', code: '03' },
    { label: 'FOOTWEAR', value: 'FOOTWEAR', code: '04' },
    { label: 'RELICS & JEWELRY', value: 'RELICS', code: '05' },
  ];

  return (
    <header className="w-full border-b border-hairline bg-obsidian-950/90 backdrop-blur-md sticky top-0 z-40">
      {/* Utility System Bar */}
      <div className="border-b border-white/5 px-4 py-1.5 flex flex-wrap justify-between items-center text-[10px] font-mono tracking-widest text-neutral-400">
        <div className="flex items-center space-x-3">
          <span className="inline-flex items-center text-blood-500 font-bold">
            <Radio className="w-3 h-3 mr-1 animate-pulse" />
            SYS_ONLINE // OCT 31 HALLOWEEN ARCHIVE
          </span>
          <span className="hidden sm:inline text-neutral-600">|</span>
          <span className="hidden sm:inline text-neutral-400">LOCATION: 48°12'30"N 16°22'23"E (CATACOMB VAULT)</span>
        </div>

        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-1.5">
            <span className="text-neutral-500">PENDING CONCEPTS:</span>
            <span className="text-blood-500 font-bold bg-blood-950/50 px-1.5 py-0.5 border border-blood-800/50">
              {pendingCount} SLOTS
            </span>
          </div>

          {/* Audio Drone Generator Toggle */}
          <button
            onClick={toggleSound}
            aria-label="Toggle ambient gothic soundscape"
            className="flex items-center space-x-1.5 hover:text-white transition-colors bg-obsidian-850 px-2 py-0.5 border border-white/10"
          >
            {isAudioPlaying ? (
              <>
                <Volume2 className="w-3 h-3 text-blood-500 animate-pulse" />
                <span className="text-white">DRONE: ACTIVE</span>
              </>
            ) : (
              <>
                <VolumeX className="w-3 h-3 text-neutral-500" />
                <span>DRONE: OFF</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Main Helmut Lang Style Brand Identity */}
      <div className="px-4 lg:px-8 py-6 md:py-8 flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-white/5">
        <div>
          <div className="flex items-baseline gap-3">
            <h1 className="font-gothic text-3xl sm:text-4xl md:text-5xl tracking-normal text-white drop-shadow-[0_2px_12px_rgba(220,38,38,0.3)]">
              Blutiges Schwert
            </h1>
            <span className="font-mono text-xs text-neutral-400 tracking-ultra hidden sm:inline">
              [MMXXVI]
            </span>
          </div>
          <p className="font-mono text-[11px] text-neutral-400 mt-2 tracking-widest max-w-xl uppercase">
            ARCHIVAL DISCIPLINE // HIGH UTILITARIAN GOTHIC ATELIER & SPECIMEN VAULT
          </p>
        </div>

        {/* Technical Collection Stamp */}
        <div className="font-mono text-right text-[10px] text-neutral-400 border border-white/10 p-2.5 bg-obsidian-900/50 max-w-xs self-start md:self-auto">
          <div className="flex justify-between gap-4 text-white">
            <span>COLLECTION:</span>
            <span className="font-bold text-blood-500">KATACOMBE '26</span>
          </div>
          <div className="flex justify-between gap-4 text-neutral-400 mt-1">
            <span>DISCIPLINE:</span>
            <span>HELMUT RAW ARCHIVE</span>
          </div>
          <div className="flex justify-between gap-4 text-neutral-400 mt-1">
            <span>AESTHETIC:</span>
            <span className="text-neutral-300">GOTHIC POST-HUMAN</span>
          </div>
        </div>
      </div>

      {/* Helmut Lang Utilitarian Filter Bar */}
      <div className="px-4 lg:px-8 overflow-x-auto scrollbar-none py-2.5 bg-obsidian-900/60 border-hairline-b flex items-center space-x-2">
        <span className="text-[10px] font-mono text-neutral-400 mr-2 flex items-center">
          <ShieldAlert className="w-3 h-3 mr-1 text-neutral-400" />
          FILTER:
        </span>
        {categories.map((cat) => {
          const isActive = currentCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => onSelectCategory(cat.value)}
              className={`px-3 py-1 font-mono text-xs whitespace-nowrap tracking-wider transition-all border ${
                isActive
                  ? 'bg-steel-100 text-obsidian-950 font-bold border-white shadow-[0_0_10px_rgba(255,255,255,0.2)]'
                  : 'bg-obsidian-850/60 text-neutral-400 border-white/5 hover:border-neutral-500 hover:text-white'
              }`}
            >
              <span className="text-[9px] mr-1.5 opacity-60">[{cat.code}]</span>
              {cat.label}
            </button>
          );
        })}
      </div>
    </header>
  );
};
