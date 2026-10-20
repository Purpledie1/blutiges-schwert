import React from 'react';
import { ArchiveItem } from '../types';
import { Plus, Eye, CornerDownRight, Cpu, Sparkles } from 'lucide-react';

interface ArchiveGridProps {
  items: ArchiveItem[];
  onSelectItem: (item: ArchiveItem) => void;
}

export const ArchiveGrid: React.FC<ArchiveGridProps> = ({ items, onSelectItem }) => {
  return (
    <section className="w-full max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
      {/* Grid Meta Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-hairline pb-4 mb-8 gap-4 font-mono">
        <div>
          <div className="flex items-center space-x-2">
            <span className="font-gothic text-2xl text-white">Zellenspeicher</span>
            <span className="text-xs text-neutral-400">// ARCHIVAL SPECIMEN CELLS</span>
          </div>
          <p className="text-[11px] text-neutral-400 mt-1 uppercase tracking-wider">
            EDITORIAL CATALOGUE // VACANT SLOTS AWAITING DESIGNER MANIFESTO
          </p>
        </div>

        <div className="flex items-center space-x-3 text-xs bg-obsidian-900 border border-white/10 px-3 py-1.5">
          <span className="w-2 h-2 rounded-full bg-blood-500 animate-pulse"></span>
          <span className="text-neutral-300">TOTAL CELLS: {items.length}</span>
          <span className="text-neutral-600">|</span>
          <span className="text-blood-400 font-bold">
            EMPTY: {items.filter((i) => i.status === 'AWAITING_DESIGN').length}
          </span>
        </div>
      </div>

      {/* Grid of Cells */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {items.map((item, index) => {
          const isEmpty = item.status === 'AWAITING_DESIGN';

          return (
            <div
              key={item.id}
              onClick={() => onSelectItem(item)}
              className={`group relative flex flex-col justify-between border cursor-pointer transition-all duration-300 ${
                isEmpty
                  ? 'border-neutral-800 bg-obsidian-900/60 hover:border-blood-600/70 hover:bg-obsidian-850'
                  : 'border-white/20 bg-obsidian-950 hover:border-white hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]'
              }`}
            >
              {/* Top Cell Bar */}
              <div className="border-b border-white/5 p-3 flex justify-between items-center font-mono text-[10px]">
                <span className="font-bold text-white tracking-widest">{item.slotNumber}</span>
                <span
                  className={`px-1.5 py-0.5 border text-[9px] uppercase tracking-wider ${
                    isEmpty
                      ? 'border-blood-700/50 bg-blood-950/40 text-blood-400'
                      : 'border-emerald-700/50 bg-emerald-950/40 text-emerald-400'
                  }`}
                >
                  {isEmpty ? 'VACANT // PENDING' : 'CATALOGUED'}
                </span>
              </div>

              {/* Cell Visual Stage */}
              <div className="relative aspect-[3/4] w-full overflow-hidden bg-obsidian-950 flex flex-col items-center justify-center p-4">
                {isEmpty ? (
                  /* Vacant Gothic Blueprint / Wireframe Stage */
                  <div className="w-full h-full border border-dashed border-neutral-800 flex flex-col items-center justify-center p-4 text-center relative group-hover:border-blood-600/50 transition-colors">
                    {/* Corner accent marks */}
                    <div className="absolute top-1 left-1 text-[8px] font-mono text-neutral-600">+</div>
                    <div className="absolute top-1 right-1 text-[8px] font-mono text-neutral-600">+</div>
                    <div className="absolute bottom-1 left-1 text-[8px] font-mono text-neutral-600">+</div>
                    <div className="absolute bottom-1 right-1 text-[8px] font-mono text-neutral-600">+</div>

                    {/* Technical Reticle in center */}
                    <div className="w-20 h-20 rounded-full border border-white/5 flex items-center justify-center mb-4 group-hover:border-blood-600/40 transition-colors group-hover:scale-110">
                      <div className="w-12 h-12 rounded-full border border-blood-900/40 flex items-center justify-center">
                        <Plus className="w-6 h-6 text-neutral-600 group-hover:text-blood-400 transition-colors" />
                      </div>
                    </div>

                    <span className="font-gothic text-lg text-neutral-300 group-hover:text-white transition-colors mb-1">
                      {item.germanTitle}
                    </span>

                    <span className="font-mono text-[10px] text-blood-400 tracking-widest uppercase">
                      [CLICK TO CONFIGURE CONCEPT]
                    </span>

                    <div className="mt-3 font-mono text-[9px] text-neutral-400 uppercase tracking-wider">
                      {item.category.replace('_', ' ')}
                    </div>
                  </div>
                ) : (
                  /* Filled Garment Visual */
                  <div className="relative w-full h-full overflow-hidden">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover object-center filter contrast-105 group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                  </div>
                )}

                {/* Inspect Action Hover Overlay */}
                <div className="absolute inset-0 bg-obsidian-950/70 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity backdrop-blur-xs">
                  <div className="border border-white/20 bg-black px-4 py-2 flex items-center space-x-2 font-mono text-xs tracking-widest uppercase text-white shadow-xl">
                    <Eye className="w-3.5 h-3.5 text-blood-500" />
                    <span>{isEmpty ? 'PROVIDE CONCEPT' : 'VIEW SPECIMEN'}</span>
                  </div>
                </div>
              </div>

              {/* Cell Bottom Technical Specs */}
              <div className="p-3.5 border-t border-white/5 bg-obsidian-950/80 font-mono text-[11px] space-y-2">
                <div className="flex justify-between items-baseline text-neutral-400">
                  <span className="text-white font-bold tracking-wider truncate max-w-[170px]">
                    {item.code}
                  </span>
                  <span className="text-[9px] text-neutral-400">{item.season}</span>
                </div>

                <div className="text-[10px] text-neutral-400 line-clamp-2 font-sans">
                  {item.silhouette}
                </div>

                <div className="pt-2 border-t border-white/5 flex justify-between items-center text-[10px]">
                  <span className="text-neutral-400 flex items-center">
                    <CornerDownRight className="w-3 h-3 mr-1 text-blood-500" />
                    {item.category}
                  </span>
                  <span className="text-neutral-400 group-hover:text-blood-400 transition-colors font-bold">
                    SPEC_DOSSIER →
                  </span>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
