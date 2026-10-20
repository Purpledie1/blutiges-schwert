import React from 'react';
import { ArchiveItem } from '../types';
import { Eye, Terminal, Maximize2, Sparkles } from 'lucide-react';

interface HeroOriginProps {
  item: ArchiveItem;
  onInspect: (item: ArchiveItem) => void;
}

export const HeroOrigin: React.FC<HeroOriginProps> = ({ item, onInspect }) => {
  return (
    <section className="w-full border-b border-hairline bg-obsidian-900/40 relative overflow-hidden">
      {/* Background Subtle Watermark */}
      <div className="absolute right-0 top-0 bottom-0 pointer-events-none select-none opacity-5 flex items-center pr-8 overflow-hidden">
        <span className="font-gothic text-[24vw] leading-none text-white whitespace-nowrap">
          Schwert
        </span>
      </div>

      <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
        {/* Section Header */}
        <div className="flex flex-wrap items-center justify-between border-b border-white/10 pb-3 mb-6 font-mono text-[11px] text-neutral-400">
          <div className="flex items-center space-x-2">
            <span className="inline-block w-2 h-2 bg-blood-500 rounded-full animate-ping"></span>
            <span className="text-white font-bold tracking-wider">FOUNDATIONAL PROTOTYPE</span>
            <span className="text-neutral-600">//</span>
            <span>ORIGIN ARTIFACT 00</span>
          </div>
          <div className="flex items-center space-x-3 text-neutral-400">
            <span>INVENTORY_ID: HL-BS-00</span>
            <span className="text-neutral-600">/</span>
            <span className="text-blood-400">STATUS: PRESERVED IN CATACOMB</span>
          </div>
        </div>

        {/* 2-Column Editorial Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Visual Showcase (5 Cols) */}
          <div className="lg:col-span-5 relative group">
            <div className="border border-white/20 bg-black/60 p-2 relative shadow-[0_10px_30px_rgba(0,0,0,0.8)]">
              {/* Corner brackets */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t-2 border-l-2 border-blood-500"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t-2 border-r-2 border-blood-500"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b-2 border-l-2 border-blood-500"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b-2 border-r-2 border-blood-500"></div>

              {/* Main Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-obsidian-950">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover object-center filter contrast-110 brightness-95 group-hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Technical Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-end font-mono text-[10px] text-white">
                  <div>
                    <span className="bg-blood-900/80 px-2 py-0.5 border border-blood-600/60 uppercase font-bold text-[9px] tracking-widest">
                      ARCHIVE SOURCE
                    </span>
                    <p className="mt-1 text-neutral-300 font-bold">{item.code}</p>
                  </div>
                  <button
                    onClick={() => onInspect(item)}
                    className="p-1.5 bg-black/70 hover:bg-blood-700 text-white border border-white/20 transition-colors pointer-events-auto"
                    title="Inspect Full Specs"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Micro Caption */}
            <div className="mt-2 flex justify-between text-[10px] font-mono text-neutral-400 px-1">
              <span>SCAN SPEC: 4096×4096 HIGH-DENSITY RENDER</span>
              <span>DEVIL_JIN / GOTHIC HARNESS</span>
            </div>
          </div>

          {/* Editorial Specs (7 Cols) */}
          <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
            <div>
              {/* German Accent Title */}
              <div className="inline-flex items-center gap-2 mb-2">
                <span className="font-gothic text-2xl sm:text-3xl text-blood-500 tracking-wide">
                  {item.germanTitle}
                </span>
                <span className="text-[10px] font-mono text-neutral-400 border border-neutral-700 px-1.5 py-0.5">
                  REF_00
                </span>
              </div>

              <h2 className="font-mono text-xl sm:text-2xl font-bold tracking-tight text-white mb-4">
                {item.title}
              </h2>

              <p className="text-neutral-300 text-sm leading-relaxed mb-6 font-sans">
                {item.description}
              </p>

              {/* Helmut Lang Utilitarian Tech Table */}
              <div className="border border-white/10 bg-obsidian-950 divide-y divide-white/5 font-mono text-xs">
                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">SILHOUETTE:</span>
                  <span className="col-span-2 text-white font-medium">{item.silhouette}</span>
                </div>

                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">COMPOSITION:</span>
                  <div className="col-span-2 flex flex-wrap gap-1.5">
                    {item.materials.map((mat, i) => (
                      <span
                        key={i}
                        className="bg-neutral-900 border border-neutral-800 text-neutral-300 px-2 py-0.5 text-[11px]"
                      >
                        {mat}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">HARDWARE / DETS:</span>
                  <div className="col-span-2 flex flex-wrap gap-1.5">
                    {item.hardware.map((hw, i) => (
                      <span
                        key={i}
                        className="bg-blood-950/40 border border-blood-800/40 text-blood-300 px-2 py-0.5 text-[11px]"
                      >
                        {hw}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-3 p-3">
                  <span className="text-neutral-400">SEASON & ORIGIN:</span>
                  <span className="col-span-2 text-neutral-200">{item.season}</span>
                </div>
              </div>
            </div>

            {/* Action Bar */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => onInspect(item)}
                className="flex items-center space-x-2 bg-steel-100 hover:bg-white text-obsidian-950 font-mono text-xs font-bold px-5 py-3 tracking-widest uppercase transition-all shadow-[0_0_15px_rgba(255,255,255,0.15)]"
              >
                <Eye className="w-4 h-4" />
                <span>INSPECT ARTIFACT DOSSIER</span>
              </button>

              <div className="flex items-center space-x-2 text-[11px] font-mono text-blood-400 bg-blood-950/20 border border-blood-900/40 px-3 py-2.5">
                <Sparkles className="w-3.5 h-3.5 animate-spin" />
                <span>USE BELOW EMPTY CELLS TO EXPAND THIS CAPSULE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
