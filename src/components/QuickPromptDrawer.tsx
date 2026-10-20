import React, { useRef, useEffect } from 'react';
import { X, Send, Sparkles, Copy, Check } from 'lucide-react';
import { ArchiveItem } from '../types';
import { sfx } from '../utils/sfx';

interface QuickPromptDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: ArchiveItem[];
}

export const QuickPromptDrawer: React.FC<QuickPromptDrawerProps> = ({ isOpen, onClose, items }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [copiedId, setCopiedId] = React.useState<string | null>(null);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isOpen) {
      if (!dialog.open) dialog.showModal();
    } else {
      if (dialog.open) dialog.close();
    }
  }, [isOpen]);

  const copyToClipboard = (text: string, id: string) => {
    sfx.playClick();
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const vacantSlots = items.filter((i) => i.status === 'AWAITING_DESIGN');

  return (
    // @ts-ignore
    <dialog
      ref={dialogRef}
      closedby="any"
      aria-labelledby="promptTitle"
      className="m-auto bg-obsidian-950 text-steel-200 border border-blood-700/80 p-0 max-w-2xl w-[94vw] max-h-[85vh] overflow-y-auto shadow-2xl backdrop:bg-black/85 backdrop:backdrop-blur-md font-mono"
    >
      <div className="p-4 sm:p-6 space-y-6">
        {/* Header */}
        <div className="flex justify-between items-start border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center space-x-2 text-blood-500 font-bold text-xs uppercase">
              <Sparkles className="w-4 h-4 animate-spin" />
              <span>ГЕНЕРАТОР КОНЦЕПТОВ ОДЕЖДЫ</span>
            </div>
            <h2 id="promptTitle" className="text-xl font-bold text-white mt-1">
              Наполнить пустые ячейки Blutiges Schwert
            </h2>
          </div>

          <form method="dialog">
            <button
              type="submit"
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Instructions */}
        <div className="bg-blood-950/30 border border-blood-800/40 p-4 text-xs space-y-2 font-sans">
          <p className="text-neutral-200 leading-relaxed">
            Чтобы я сгенерировал и встроил одежду в нужную ячейку сайта, просто напишите мне в чат:
          </p>
          <div className="bg-black/70 border border-white/10 p-2 text-white font-mono text-[11px]">
            Для ячейки [ID] нарисуй: [Ваша идея вещи, материал, силуэт, металлические детали]
          </div>
        </div>

        {/* Ready-to-copy Slot Ideas */}
        <div className="space-y-3">
          <span className="text-xs text-neutral-400 uppercase tracking-wider block">
            Свободные ячейки и готовые шаблоны (кликните, чтобы скопировать):
          </span>

          <div className="space-y-2">
            {vacantSlots.map((slot) => {
              const samplePrompt = `Для ячейки ${slot.id} (${slot.category}): ${slot.silhouette}, черная кожа, серебряные пряжки и шипы`;
              const isCopied = copiedId === slot.id;

              return (
                <div
                  key={slot.id}
                  onClick={() => copyToClipboard(samplePrompt, slot.id)}
                  className="group border border-neutral-800 hover:border-blood-500 bg-obsidian-900/50 p-3 flex justify-between items-center cursor-pointer transition-all hover:bg-obsidian-850"
                >
                  <div className="space-y-0.5">
                    <div className="flex items-center space-x-2">
                      <span className="text-blood-400 font-bold text-xs">{slot.slotNumber}</span>
                      <span className="text-neutral-500">//</span>
                      <span className="text-white text-xs">{slot.category}</span>
                    </div>
                    <p className="text-[11px] text-neutral-400 font-sans line-clamp-1">
                      {slot.silhouette}
                    </p>
                  </div>

                  <button
                    className={`px-2.5 py-1 border text-[10px] flex items-center space-x-1.5 transition-colors ${
                      isCopied
                        ? 'border-emerald-500 text-emerald-400 bg-emerald-950/40'
                        : 'border-white/10 text-neutral-400 group-hover:text-white group-hover:border-blood-500'
                    }`}
                  >
                    {isCopied ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span>СКОПИРОВАНО</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>СКОПИРОВАТЬ</span>
                      </>
                    )}
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/10 pt-4 flex justify-between items-center text-xs">
          <span className="text-neutral-500 text-[10px]">
            BLUTIGES SCHWERT // ATELIER PROMPT DISCIPLINE
          </span>
          <form method="dialog">
            <button
              type="submit"
              onClick={onClose}
              className="bg-steel-100 hover:bg-white text-obsidian-950 px-4 py-2 font-bold uppercase text-[11px] transition-colors"
            >
              ЗАКРЫТЬ
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
