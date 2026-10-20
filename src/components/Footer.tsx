import React from 'react';
import { Skull, Compass, ShieldCheck } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full border-t border-hairline bg-obsidian-950 mt-16 text-neutral-400 font-mono text-xs">
      {/* Top Manifesto Band */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-1 md:grid-cols-4 gap-8 border-b border-white/5">
        <div className="space-y-3">
          <div className="font-gothic text-2xl text-white tracking-wide">
            Blutiges Schwert
          </div>
          <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
            Автономная лаборатория архивного дизайна и готической эстетики. Пересечение индустриального минимализма 90-х и темного постапокалиптического фэнтези 2000-х.
          </p>
          <div className="text-[10px] text-blood-500 font-bold flex items-center">
            <Skull className="w-3.5 h-3.5 mr-1" />
            DER WEG DES BLUTES UND DES STAHLS
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-white text-[11px] font-bold tracking-widest block uppercase border-b border-white/10 pb-1">
            ARCHIVE CODES
          </span>
          <ul className="space-y-1 text-[11px] text-neutral-400">
            <li>HL-BS-00: ORIGIN GUARDIAN</li>
            <li>HL-BS-01: MANTEL SPECIMEN</li>
            <li>HL-BS-02: RUNIC FLARE HOSE</li>
            <li>HL-BS-03: MOTO ARMORED BOMBER</li>
            <li>HL-BS-04: CATACOMB HARNESS</li>
            <li>HL-BS-05: EXOSKELETON BOOTS</li>
          </ul>
        </div>

        <div className="space-y-2">
          <span className="text-white text-[11px] font-bold tracking-widest block uppercase border-b border-white/10 pb-1">
            TECHNICAL DIRECTIVE
          </span>
          <p className="text-[11px] text-neutral-400 font-sans leading-relaxed">
            Все представленные изделия подлежат строгому архивированию. Пустые ячейки наполняются по замыслу главного дизайнера с последующей каталогизацией в реестр.
          </p>
          <div className="flex items-center text-[10px] text-neutral-400">
            <ShieldCheck className="w-3.5 h-3.5 mr-1 text-neutral-400" />
            PROTOCOL 1999-2026 // UNALTERED
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-white text-[11px] font-bold tracking-widest block uppercase border-b border-white/10 pb-1">
            COORDINATES & VAULT
          </span>
          <div className="text-[11px] text-neutral-400 space-y-1">
            <div>VAULT: SUB-LEVEL CATACOMB 07</div>
            <div>STATUS: UNRESTRICTED ACCESS</div>
            <div>DEPLOYMENT: GITHUB PAGES VERIFIED</div>
            <div className="text-blood-400 pt-2 flex items-center">
              <Compass className="w-3.5 h-3.5 mr-1" />
              NORTHERN MERIDIAN SECTOR
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Minimalist Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-neutral-400">
        <div>
          © 2026 BLUTIGES SCHWERT. ALL ARCHIVAL RIGHTS RESERVED.
        </div>
        <div className="flex space-x-6">
          <span>TERMS: RAW ARCHIVE</span>
          <span>CURATION: PROPRIETARY</span>
          <span>HELMUT RAW GRID</span>
        </div>
      </div>
    </footer>
  );
};
