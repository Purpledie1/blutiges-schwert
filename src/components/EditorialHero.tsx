import React, { useState } from 'react';
import { ArchiveItem } from '../types';
import { Eye, Shield, Sparkles, Box, Image as ImageIcon, CornerDownRight } from 'lucide-react';
import { ThreeArtifactViewer } from './ThreeArtifactViewer';
import { sfx } from '../utils/sfx';

interface EditorialHeroProps {
  originItem: ArchiveItem;
  onInspect: (item: ArchiveItem) => void;
}

export const EditorialHero: React.FC<EditorialHeroProps> = ({ originItem, onInspect }) => {
  const [heroMode, setHeroMode] = useState<'IMAGE' | '3D'>('IMAGE');

  return (
    <section className="w-full border-b border-hairline bg-obsidian-950/80 relative overflow-hidden font-mono">
      {/* Background Archival Watermark */}
      <div className="absolute top-0 right-0 bottom-0 pointer-events-none select-none opacity-5 flex items-center pr-12 overflow-hidden">
        <span className="font-gothic text-[28vw] leading-none text-white whitespace-nowrap">
          Blut
        </span>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-10 relative z-10">
        {/* Top Specimen Code Banner */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 mb-8 text-[11px] text-neutral-400 gap-3">
          <div className="flex items-center space-x-3">
            <span className="bg-blood-900/80 text-white font-bold px-2 py-0.5 border border-blood-500 uppercase text-[9px] tracking-widest">
              CAPSULE PROTOTYPE ZERO
            </span>
            <span className="text-white font-bold">{originItem.code}</span>
            <span className="text-white/20">//</span>
            <span className="text-neutral-400 hidden sm:inline">ORIGIN: CATACOMB GUARDIAN</span>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-neutral-400 text-[10px]">STAGE MODE:</span>
            <button
              onClick={() => {
                sfx.playClick();
                setHeroMode('IMAGE');
              }}
              className={`px-2 py-0.5 border text-[10px] flex items-center space-x-1 ${
                heroMode === 'IMAGE'
                  ? 'bg-steel-200 text-obsidian-950 font-bold border-white'
                  : 'bg-obsidian-900 text-neutral-400 border-white/10 hover:text-white'
              }`}
            >
              <ImageIcon className="w-3 h-3" />
              <span>PHOTO ARCHIVE</span>
            </button>

            <button
              onClick={() => {
                sfx.playClick();
                setHeroMode('3D');
              }}
              className={`px-2 py-0.5 border text-[10px] flex items-center space-x-1 ${
                heroMode === '3D'
                  ? 'bg-blood-700 text-white font-bold border-blood-400 shadow-[0_0_10px_rgba(220,38,38,0.5)]'
                  : 'bg-obsidian-900 text-neutral-400 border-white/10 hover:text-white'
              }`}
            >
              <Box className="w-3 h-3 text-blood-400" />
              <span>3D BLADE MODEL</span>
            </button>
          </div>
        </div>

        {/* 2-Column Split: Visual Stage vs Monolith Specs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* LEFT: Visual Stage (5 Cols) */}
          <div className="lg:col-span-5 relative">
            {heroMode === 'IMAGE' ? (
              <div className="border border-white/20 bg-black p-2 relative shadow-2xl group">
                {/* Precision corners */}
                <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blood-500"></div>
                <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blood-500"></div>
                <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blood-500"></div>
                <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blood-500"></div>

                <div className="relative aspect-[3/4] overflow-hidden bg-obsidian-950">
                  <img
                    src={originItem.imageUrl}
                    alt={originItem.title}
                    className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                  <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end text-[10px] text-white">
                    <div>
                      <span className="text-blood-400 font-bold tracking-widest text-[9px] uppercase">
                        ARCHIVE REF_00
                      </span>
                      <p className="text-neutral-300 font-bold">{originItem.title}</p>
                    </div>
                  </div>
                </div>

                <div className="mt-2 flex justify-between text-[10px] text-neutral-400 px-1">
                  <span>DEVIL_JIN FLARINGS</span>
                  <span>GOTHIC HARNESS</span>
                </div>
              </div>
            ) : (
              <div className="border border-white/20 bg-black relative shadow-2xl overflow-hidden">
                <ThreeArtifactViewer />
              </div>
            )}
          </div>

          {/* RIGHT: High-Fashion Monolith Dossier (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* German Blackletter Accent Heading */}
              <div className="flex items-center gap-3 mb-2">
                <span className="font-gothic text-3xl sm:text-4xl text-blood-500">
                  {originItem.germanTitle}
                </span>
                <span className="text-[10px] text-neutral-400 border border-neutral-700 px-2 py-0.5">
                  HL-BS-00
                </span>
              </div>

              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">
                {originItem.title}
              </h2>

              <p className="text-neutral-300 font-sans text-sm leading-relaxed mb-6 border-l-2 border-blood-600 pl-4 py-1">
                {originItem.description}
              </p>

              {/* Helmut Lang Utilitarian Spec Matrix */}
              <div className="border border-white/10 bg-obsidian-900/60 divide-y divide-white/5 text-xs">
                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">SILHOUETTE:</span>
                  <span className="col-span-2 text-white font-medium">{originItem.silhouette}</span>
                </div>

                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">MATERIALITY:</span>
                  <div className="col-span-2 flex flex-wrap gap-1.5">
                    {originItem.materials.map((m, i) => (
                      <span key={i} className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 text-[11px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">HARDWARE ACCENTS:</span>
                  <div className="col-span-2 flex flex-wrap gap-1.5">
                    {originItem.hardware.map((h, i) => (
                      <span key={i} className="bg-blood-950/50 border border-blood-900/50 text-blood-300 px-2 py-0.5 text-[11px]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">SEASON CATALOGUE:</span>
                  <span className="col-span-2 text-neutral-200">{originItem.season}</span>
                </div>
              </div>
            </div>

            {/* Actions Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => {
                  sfx.playDossierOpen();
                  onInspect(originItem);
                }}
                className="flex items-center space-x-2 bg-steel-100 hover:bg-white text-obsidian-950 text-xs font-bold px-6 py-3 tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(255,255,255,0.2)]"
              >
                <Eye className="w-4 h-4" />
                <span>INSPECT SPECIMEN DOSSIER [00]</span>
              </button>

              <div className="text-[11px] text-blood-400 bg-blood-950/30 border border-blood-900/50 px-3 py-2.5 flex items-center space-x-2">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>СЛОТЫ 01–07 ГОТОВЫ К ВАШЕМУ ДИЗАЙНУ</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
