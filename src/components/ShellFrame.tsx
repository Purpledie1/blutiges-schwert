import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Droplets, Radio, Compass, Disc3, ShieldAlert, Sparkles, Box, Layers, Terminal, Sliders } from 'lucide-react';
import { Category } from '../types';
import { rainAudio } from '../utils/rainAudio';
import { sfx } from '../utils/sfx';

export type MainTab = 'MATRIX' | '3D_VAULT' | 'MANIFESTO';

interface ShellFrameProps {
  children: React.ReactNode;
  activeTab: MainTab;
  onSelectTab: (tab: MainTab) => void;
  currentCategory: Category;
  onSelectCategory: (cat: Category) => void;
  pendingCount: number;
  isRainActive: boolean;
  onToggleRain: () => void;
  onOpenQuickPrompt: () => void;
}

export const ShellFrame: React.FC<ShellFrameProps> = ({
  children,
  activeTab,
  onSelectTab,
  currentCategory,
  onSelectCategory,
  pendingCount,
  isRainActive,
  onToggleRain,
  onOpenQuickPrompt,
}) => {
  const [rainVolume, setRainVolume] = useState<number>(0.4);
  const [isRainSoundPlaying, setIsRainSoundPlaying] = useState<boolean>(false);

  useEffect(() => {
    // Sync rain sound state
    rainAudio.setVolume(rainVolume);
  }, [rainVolume]);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setRainVolume(val);
    rainAudio.setVolume(val);
    if (val > 0) {
      setIsRainSoundPlaying(true);
    } else {
      setIsRainSoundPlaying(false);
    }
  };

  const handleToggleRainSound = () => {
    sfx.playClick();
    if (isRainSoundPlaying) {
      rainAudio.stop();
      setIsRainSoundPlaying(false);
    } else {
      if (rainVolume === 0) setRainVolume(0.4);
      rainAudio.start();
      setIsRainSoundPlaying(true);
    }
  };

  const handleTabChange = (tab: MainTab) => {
    sfx.playClick();
    onSelectTab(tab);
  };

  const categories: { label: string; value: Category; code: string }[] = [
    { label: 'ALL SPECIMENS', value: 'ALL', code: '00' },
    { label: 'OUTERWEAR', value: 'OUTERWEAR', code: '01' },
    { label: 'BOTTOMS', value: 'BOTTOMS', code: '02' },
    { label: 'TACTICAL / HARNESS', value: 'LEATHER_TACTICAL', code: '03' },
    { label: 'FOOTWEAR', value: 'FOOTWEAR', code: '04' },
    { label: 'RELICS', value: 'RELICS', code: '05' },
  ];

  return (
    <div className="relative min-h-screen bg-obsidian-950 text-steel-200 font-mono flex flex-col selection:bg-blood-700 selection:text-white">
      {/* TOP COMMAND STRIP (Zero Overlapping Text) */}
      <header className="sticky top-0 z-40 bg-obsidian-950/95 backdrop-blur-md border-b border-white/10">
        {/* Upper Micro Telemetry Bar */}
        <div className="border-b border-white/5 px-4 py-1.5 flex flex-wrap justify-between items-center text-[10px] text-neutral-400 gap-2">
          {/* Left Telemetry */}
          <div className="flex items-center space-x-3 overflow-hidden text-ellipsis whitespace-nowrap">
            <span className="flex items-center text-blood-500 font-bold">
              <span className="w-1.5 h-1.5 rounded-full bg-blood-500 animate-ping mr-1.5"></span>
              SYS: CATACOMB VAULT
            </span>
            <span className="text-white/20">/</span>
            <span className="hidden sm:inline text-neutral-400">
              FRAME_NW // 48.2082°N 16.3738°E
            </span>
          </div>

          {/* Right Controls: Rain Sound Slider & Visual Rain */}
          <div className="flex items-center space-x-3 sm:space-x-4">
            {/* Vacant counter badge */}
            <div className="flex items-center space-x-1">
              <span className="text-neutral-500 hidden xs:inline">VACANT:</span>
              <span className="text-blood-400 font-bold bg-blood-950/60 border border-blood-800/40 px-1.5 py-0.5 text-[9px]">
                {pendingCount} SLOTS
              </span>
            </div>

            {/* Visual Blood Rain Toggle */}
            <button
              onClick={() => {
                sfx.playClick();
                onToggleRain();
              }}
              title="Toggle Blood Rain Visual Particles"
              className={`flex items-center space-x-1 px-2 py-0.5 border text-[9px] transition-colors ${
                isRainActive
                  ? 'border-blood-600 bg-blood-950/80 text-blood-300'
                  : 'border-white/10 bg-obsidian-900 text-neutral-400 hover:text-white'
              }`}
            >
              <Droplets className={`w-3 h-3 ${isRainActive ? 'text-blood-500 animate-pulse' : ''}`} />
              <span>VISUAL RAIN: {isRainActive ? 'ON' : 'OFF'}</span>
            </button>

            {/* RAIN SOUND CONTROLLER WITH VOLUME SLIDER */}
            <div className="flex items-center space-x-2 bg-obsidian-900/80 border border-white/10 px-2 py-0.5">
              <button
                onClick={handleToggleRainSound}
                className="hover:text-white transition-colors"
                title={isRainSoundPlaying ? 'Mute Rain Sound' : 'Play Rain Sound'}
              >
                {isRainSoundPlaying && rainVolume > 0 ? (
                  <Volume2 className="w-3 h-3 text-blood-500 animate-pulse" />
                ) : (
                  <VolumeX className="w-3 h-3 text-neutral-500" />
                )}
              </button>

              <div className="flex items-center space-x-1.5">
                <span className="text-[9px] text-neutral-400 hidden md:inline">RAIN AUDIO:</span>
                <input
                  type="range"
                  min="0"
                  max="1"
                  step="0.02"
                  value={isRainSoundPlaying ? rainVolume : 0}
                  onChange={handleVolumeChange}
                  className="w-16 sm:w-20 h-1 bg-neutral-800 rounded-lg appearance-none cursor-pointer accent-blood-500"
                  title="Rain Volume Slider"
                />
                <span className="text-[9px] text-neutral-300 w-7 text-right">
                  {isRainSoundPlaying ? `${Math.round(rainVolume * 100)}%` : '0%'}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Brand Banner with Winged Katana Logo & High-Fashion Mode Navigation */}
        <div className="px-4 lg:px-8 py-3 sm:py-4 flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-white/5">
          <div className="flex items-center gap-4">
            {/* Winged Katana Brand Crest (from User's reference) */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 border border-white/15 bg-black/80 flex items-center justify-center p-1 relative shadow-[0_0_15px_rgba(220,38,38,0.25)] group">
              <img
                src="./media/winged-sword.png"
                alt="Blutiges Schwert Crest"
                className="w-full h-full object-contain filter contrast-125 brightness-110 group-hover:scale-110 transition-transform duration-300"
              />
              <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-blood-500"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-blood-500"></div>
            </div>

            <div>
              <div className="text-[9px] tracking-ultra text-blood-500 uppercase font-bold">
                HIGH UTILITARIAN ATELIER // EST. MMXXVI
              </div>
              <h1 className="font-gothic text-3xl sm:text-4xl lg:text-5xl tracking-tight text-white drop-shadow-[0_4px_16px_rgba(220,38,38,0.35)] leading-none">
                Blutiges Schwert
              </h1>
            </div>
          </div>

          {/* Primary Viewport Tabs */}
          <div className="flex items-center space-x-1.5 text-xs overflow-x-auto scrollbar-none">
            <button
              onClick={() => handleTabChange('MATRIX')}
              className={`px-3 py-1.5 border flex items-center space-x-1.5 transition-all whitespace-nowrap ${
                activeTab === 'MATRIX'
                  ? 'bg-steel-100 text-obsidian-950 font-bold border-white shadow-[0_0_12px_rgba(255,255,255,0.2)]'
                  : 'bg-obsidian-900 text-neutral-400 border-white/10 hover:border-neutral-500 hover:text-white'
              }`}
            >
              <Layers className="w-3.5 h-3.5" />
              <span>CATALOGUE MATRIX</span>
            </button>

            <button
              onClick={() => handleTabChange('3D_VAULT')}
              className={`px-3 py-1.5 border flex items-center space-x-1.5 transition-all whitespace-nowrap ${
                activeTab === '3D_VAULT'
                  ? 'bg-blood-700 text-white font-bold border-blood-400 shadow-[0_0_15px_rgba(220,38,38,0.5)]'
                  : 'bg-obsidian-900 text-neutral-400 border-white/10 hover:border-neutral-500 hover:text-white'
              }`}
            >
              <Box className="w-3.5 h-3.5 text-blood-400 animate-pulse" />
              <span>3D BLADE VAULT</span>
            </button>

            <button
              onClick={() => handleTabChange('MANIFESTO')}
              className={`px-3 py-1.5 border flex items-center space-x-1.5 transition-all whitespace-nowrap ${
                activeTab === 'MANIFESTO'
                  ? 'bg-steel-100 text-obsidian-950 font-bold border-white'
                  : 'bg-obsidian-900 text-neutral-400 border-white/10 hover:border-neutral-500 hover:text-white'
              }`}
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>MANIFESTO</span>
            </button>
          </div>
        </div>

        {/* Category Filter Strip (Only in Matrix view) */}
        {activeTab === 'MATRIX' && (
          <div className="px-4 lg:px-8 py-2 bg-obsidian-900/60 overflow-x-auto scrollbar-none flex items-center space-x-2 text-xs">
            <span className="text-[10px] text-neutral-400 mr-1 flex items-center">
              <ShieldAlert className="w-3 h-3 mr-1 text-neutral-400" />
              FILTER:
            </span>
            {categories.map((c) => {
              const isActive = currentCategory === c.value;
              return (
                <button
                  key={c.value}
                  onClick={() => {
                    sfx.playClick();
                    onSelectCategory(c.value);
                  }}
                  className={`px-2.5 py-0.5 whitespace-nowrap border text-[11px] transition-all ${
                    isActive
                      ? 'bg-blood-900/80 text-white border-blood-500 font-bold'
                      : 'bg-obsidian-950 text-neutral-400 border-white/5 hover:text-white hover:border-white/20'
                  }`}
                >
                  <span className="text-[9px] mr-1 opacity-60">[{c.code}]</span>
                  {c.label}
                </button>
              );
            })}
          </div>
        )}
      </header>

      {/* MAIN VIEWPORT WRAPPER */}
      <div className="flex-grow flex flex-col md:flex-row relative">
        {/* Left Vertical Index Rail */}
        <aside className="w-full md:w-16 md:min-w-[4rem] border-r border-b md:border-b-0 border-white/10 bg-obsidian-950 flex md:flex-col justify-between items-center p-3 text-[10px] text-neutral-400 select-none z-30">
          <div className="hidden md:flex flex-col items-center space-y-6 pt-4">
            <span className="w-2 h-2 rounded-full bg-blood-500 animate-pulse"></span>
            <div className="[writing-mode:vertical-rl] rotate-180 tracking-widest text-[9px] uppercase text-neutral-400">
              BLUTIGES SCHWERT // CATACOMB
            </div>
          </div>

          {/* Quick Slot Index Status */}
          <div className="flex md:flex-col gap-1.5 overflow-x-auto py-1">
            {['00', '01', '02', '03', '04', '05', '06', '07'].map((num) => (
              <span
                key={num}
                className={`w-6 h-6 flex items-center justify-center border text-[9px] font-bold ${
                  num === '00' || num === '01'
                    ? 'border-emerald-700/80 bg-emerald-950/40 text-emerald-400'
                    : 'border-blood-800/80 bg-blood-950/40 text-blood-400'
                }`}
                title={num === '00' ? 'Origin Specimen' : num === '01' ? 'Archived Specimen 01' : `Vacant Slot ${num}`}
              >
                {num}
              </span>
            ))}
          </div>

          <div className="hidden md:flex flex-col items-center space-y-2 pb-4 text-neutral-400">
            <Compass className="w-4 h-4 text-blood-500" />
            <span className="text-[8px] tracking-widest">N.07</span>
          </div>
        </aside>

        {/* Content Canvas */}
        <main className="flex-grow overflow-x-hidden relative">
          {children}
        </main>
      </div>

      {/* FLOATING ACTION PILL: "ЗАДАТЬ ИДЕЮ ОДЕЖДЫ" */}
      <div className="fixed bottom-10 right-4 z-40">
        <button
          onClick={() => {
            sfx.playDossierOpen();
            onOpenQuickPrompt();
          }}
          className="group flex items-center space-x-2 bg-blood-700 hover:bg-blood-600 text-white border border-blood-400 px-4 py-2.5 shadow-[0_0_20px_rgba(220,38,38,0.6)] font-mono text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105"
        >
          <Sparkles className="w-4 h-4 text-white animate-spin" />
          <span>НАПОЛНИТЬ ЯЧЕЙКУ ИДЕЕЙ</span>
          <span className="bg-black/60 px-1.5 py-0.5 text-[10px] text-blood-300 border border-white/10">
            {pendingCount}
          </span>
        </button>
      </div>

      {/* FOOTER TICKER */}
      <footer className="border-t border-white/10 bg-obsidian-950 px-4 py-3 flex flex-col sm:flex-row justify-between items-center text-[10px] text-neutral-400 z-30 gap-2">
        <div className="flex items-center space-x-4">
          <span className="text-white font-bold">BLUTIGES SCHWERT ATELIER</span>
          <span className="text-white/20">|</span>
          <span className="text-blood-400">HELMUT LANG DISCIPLINE × ARCHIVE-CORE</span>
          <span className="hidden lg:inline text-white/20">|</span>
          <span className="hidden lg:inline text-neutral-400">
            WEB AUDIO RAIN ENGINE // THREE.JS 3D
          </span>
        </div>

        <div className="flex items-center space-x-3 text-neutral-400">
          <span>GITHUB PAGES VERIFIED</span>
          <span>© 2026 PURPLE DIE 1</span>
        </div>
      </footer>
    </div>
  );
};
