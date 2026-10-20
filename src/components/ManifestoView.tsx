import React from 'react';
import { Skull, Compass, ShieldAlert, Terminal, Eye, Sparkles } from 'lucide-react';

export const ManifestoView: React.FC = () => {
  return (
    <div className="max-w-5xl mx-auto p-4 sm:p-8 lg:p-12 font-mono text-steel-200 space-y-12 animate-in fade-in duration-500">
      {/* Manifesto Title */}
      <div className="border-b border-white/10 pb-6 space-y-2">
        <span className="text-blood-500 text-xs font-bold tracking-ultra uppercase block">
          DAS MANIFEST // ARCHIVAL DIRECTIVE
        </span>
        <h2 className="font-gothic text-4xl sm:text-5xl text-white">
          Blutiges Schwert: Der Weg des Stahls
        </h2>
        <p className="text-xs text-neutral-400 uppercase tracking-widest">
          DOCUMENT PROTOCOL MMXXVI // POST-HUMAN GOTHIC DISCIPLINE
        </p>
      </div>

      {/* 3 Brutalist Pillars */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 border-b border-white/10 pb-12">
        <div className="border border-white/10 bg-obsidian-900/60 p-6 space-y-3">
          <span className="text-blood-400 font-bold text-sm block">01 / DISCIPLINE</span>
          <h3 className="text-white text-base font-bold">Утилитарный Минимализм</h3>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Отсечение любого лишнего визуального шума. Прямые строгие линии, моноширинные технические штампы, промышленные коды и функциональные ремни в традиции раннего Helmut Lang.
          </p>
        </div>

        <div className="border border-white/10 bg-obsidian-900/60 p-6 space-y-3">
          <span className="text-blood-400 font-bold text-sm block">02 / ARCHIVE-CORE</span>
          <h3 className="text-white text-base font-bold">Темное Фэнтези 2000-х</h3>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Символизм готических руин, кожаная экипировка, крылатые силуэты гаргулий, состаренное стерлинговое серебро и демонические мотивы эпохи PS2 (Devil Jin / DMC / Rick Owens).
          </p>
        </div>

        <div className="border border-white/10 bg-obsidian-900/60 p-6 space-y-3">
          <span className="text-blood-400 font-bold text-sm block">03 / CO-CREATION</span>
          <h3 className="text-white text-base font-bold">Живой Реестр Вещей</h3>
          <p className="text-xs text-neutral-400 font-sans leading-relaxed">
            Архив не является статичным. 7 пустых ячеек резервируются под эксклюзивные идеи главного дизайнера и пополняются новыми сгенерированными артами в режиме реального времени.
          </p>
        </div>
      </div>

      {/* Archival Code Table */}
      <div className="space-y-4">
        <div className="flex justify-between items-center text-xs text-neutral-400">
          <span className="text-white font-bold uppercase tracking-wider flex items-center">
            <Terminal className="w-4 h-4 mr-1 text-blood-500" />
            РЕЕСТР АРХИВНЫХ АРТЕФАКТОВ
          </span>
          <span>8 ITEMS TOTAL</span>
        </div>

        <div className="border border-white/10 divide-y divide-white/5 text-xs bg-obsidian-900/40">
          <div className="p-3 grid grid-cols-12 text-neutral-400 text-[10px] uppercase">
            <span className="col-span-2">ID</span>
            <span className="col-span-4">НАЗВАНИЕ</span>
            <span className="col-span-3">КАТЕГОРИЯ</span>
            <span className="col-span-3 text-right">СТАТУС</span>
          </div>

          <div className="p-3 grid grid-cols-12 text-white items-center">
            <span className="col-span-2 text-blood-400 font-bold">HL-BS-00</span>
            <span className="col-span-4 font-bold">THE CATACOMB GUARDIAN</span>
            <span className="col-span-3 text-neutral-400">LEATHER & HARNESS</span>
            <span className="col-span-3 text-right text-emerald-400 font-bold">ARCHIVED</span>
          </div>

          <div className="p-3 grid grid-cols-12 text-white items-center">
            <span className="col-span-2 text-blood-400 font-bold">HL-BS-01</span>
            <span className="col-span-4 font-bold">DMC3 DANTE // WIDE FANG PANTS</span>
            <span className="col-span-3 text-neutral-400">FULL ARCHIVE LOOK</span>
            <span className="col-span-3 text-right text-emerald-400 font-bold">ARCHIVED</span>
          </div>

          <div className="p-3 grid grid-cols-12 text-neutral-300 items-center">
            <span className="col-span-2 text-blood-400 font-bold">HL-BS-02</span>
            <span className="col-span-4">FLARED RUNIC TROUSERS</span>
            <span className="col-span-3 text-neutral-400">BOTTOMS</span>
            <span className="col-span-3 text-right text-blood-400 font-bold">AWAITING CONCEPT</span>
          </div>

          <div className="p-3 grid grid-cols-12 text-neutral-300 items-center">
            <span className="col-span-2 text-blood-400 font-bold">HL-BS-03</span>
            <span className="col-span-4">MOTO BOMBER JACKET</span>
            <span className="col-span-3 text-neutral-400">OUTERWEAR</span>
            <span className="col-span-3 text-right text-blood-400 font-bold">AWAITING CONCEPT</span>
          </div>
        </div>
      </div>
    </div>
  );
};
