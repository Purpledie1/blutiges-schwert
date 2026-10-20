import React, { useEffect, useRef } from 'react';
import { ArchiveItem } from '../types';
import { X, Sparkles, Send, ShieldAlert, Cpu, Layers } from 'lucide-react';

interface SlotModalProps {
  item: ArchiveItem | null;
  onClose: () => void;
}

export const SlotModal: React.FC<SlotModalProps> = ({ item, onClose }) => {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [activeImage, setActiveImage] = React.useState<'PRIMARY' | 'SECONDARY'>('PRIMARY');

  useEffect(() => {
    setActiveImage('PRIMARY');
  }, [item]);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (item) {
      if (!dialog.open) {
        dialog.showModal();
      }
    } else {
      if (dialog.open) {
        dialog.close();
      }
    }
  }, [item]);

  // Fallback for browsers without native `closedby="any"` support per modern-web-guidance
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    const handleBackdropClick = (event: MouseEvent) => {
      if (!('closedBy' in HTMLDialogElement.prototype)) {
        if (event.target !== dialog) return;
        const rect = dialog.getBoundingClientRect();
        const isDialogContent =
          rect.top <= event.clientY &&
          event.clientY <= rect.top + rect.height &&
          rect.left <= event.clientX &&
          event.clientX <= rect.left + rect.width;

        if (!isDialogContent) {
          dialog.close();
          onClose();
        }
      }
    };

    const handleClose = () => {
      onClose();
    };

    dialog.addEventListener('click', handleBackdropClick);
    dialog.addEventListener('close', handleClose);

    return () => {
      dialog.removeEventListener('click', handleBackdropClick);
      dialog.removeEventListener('close', handleClose);
    };
  }, [onClose]);

  if (!item) return null;

  const isEmpty = item.status === 'AWAITING_DESIGN';

  return (
    /* MANDATORY per modern-web-guidance: closedby="any" and aria-labelledby */
    <dialog
      ref={dialogRef}
      // @ts-ignore
      closedby="any"
      aria-labelledby="dialogTitle"
      className="m-auto bg-obsidian-950 text-steel-200 border border-white/20 p-0 max-w-4xl w-[94vw] max-h-[90vh] overflow-y-auto shadow-2xl backdrop:bg-black/80 backdrop:backdrop-blur-sm"
    >
      <div className="relative flex flex-col">
        {/* Modal Top System Bar */}
        <div className="border-b border-white/10 p-4 flex items-center justify-between bg-obsidian-900 font-mono text-xs">
          <div className="flex items-center space-x-3">
            <span className="text-blood-500 font-bold tracking-widest">{item.slotNumber}</span>
            <span className="text-neutral-600">//</span>
            <span className="text-neutral-400 font-semibold">{item.code}</span>
          </div>

          <form method="dialog">
            <button
              type="submit"
              onClick={onClose}
              className="p-1 text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </form>
        </div>

        {/* Modal Content Body */}
        <div className="p-6 md:p-8 space-y-6">
          {/* Header Title with German Gothic Accent */}
          <div>
            <div className="flex items-center gap-3">
              <span className="font-gothic text-2xl sm:text-3xl text-blood-500">
                {item.germanTitle}
              </span>
            </div>
            <h2 id="dialogTitle" className="font-mono text-xl sm:text-2xl font-bold text-white mt-1">
              {item.title}
            </h2>
          </div>

          {/* 2-Column Split: Visual & Technical Specification */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            {/* Visual Column */}
            <div className="border border-white/10 bg-black/60 p-2 relative">
              {item.secondaryImageUrl && (
                <div className="flex space-x-1.5 mb-2 font-mono text-[10px]">
                  <button
                    onClick={() => setActiveImage('PRIMARY')}
                    className={`px-2 py-0.5 border ${
                      activeImage === 'PRIMARY'
                        ? 'bg-steel-100 text-obsidian-950 font-bold border-white'
                        : 'bg-obsidian-900 text-neutral-400 border-white/10'
                    }`}
                  >
                    3D CHARACTER LOOK
                  </button>
                  <button
                    onClick={() => setActiveImage('SECONDARY')}
                    className={`px-2 py-0.5 border ${
                      activeImage === 'SECONDARY'
                        ? 'bg-blood-900 text-white font-bold border-blood-500'
                        : 'bg-obsidian-900 text-neutral-400 border-white/10'
                    }`}
                  >
                    GARMENT FLAT LAY
                  </button>
                </div>
              )}

              <div className="aspect-[3/4] overflow-hidden bg-obsidian-900 flex items-center justify-center">
                {item.imageUrl ? (
                  <img
                    src={activeImage === 'PRIMARY' ? item.imageUrl : item.secondaryImageUrl || item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover object-center"
                  />
                ) : (
                  <div className="p-6 text-center space-y-3 font-mono">
                    <div className="w-16 h-16 mx-auto rounded-full border border-blood-800/60 flex items-center justify-center bg-blood-950/20">
                      <Sparkles className="w-8 h-8 text-blood-500 animate-pulse" />
                    </div>
                    <div className="text-sm text-neutral-200 font-bold uppercase tracking-wider">
                      RESERVED SPECIMEN SLOT
                    </div>
                    <p className="text-[11px] text-neutral-400 leading-relaxed font-sans">
                      Эта ячейка ждет вашей идеи. Когда вы опишете вещь, я нарисую для неё эскиз и интегрирую прямо в эту карточку.
                    </p>
                  </div>
                )}
              </div>

              {/* Status Badge */}
              <div className="mt-2 flex justify-between font-mono text-[10px] text-neutral-400">
                <span>CATEGORY: {item.category}</span>
                <span className={isEmpty ? 'text-blood-400 font-bold' : 'text-emerald-400'}>
                  {isEmpty ? 'STATUS: PENDING IDEA' : 'STATUS: ARCHIVED'}
                </span>
              </div>
            </div>

            {/* Technical Specification Column */}
            <div className="space-y-5 font-mono text-xs">
              <div className="border border-white/10 bg-obsidian-900/40 p-4 space-y-3">
                <div className="text-[10px] text-neutral-400 tracking-widest uppercase border-b border-white/5 pb-1 flex items-center justify-between">
                  <span>SPECIFICATION PARAMETERS</span>
                  <span className="text-blood-500 font-bold">{item.season}</span>
                </div>

                <div>
                  <span className="text-neutral-400 block text-[10px]">SILHOUETTE / CUT:</span>
                  <p className="text-white font-medium mt-0.5">{item.silhouette}</p>
                </div>

                <div>
                  <span className="text-neutral-400 block text-[10px]">PROPOSED MATERIALS:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.materials.map((m, i) => (
                      <span key={i} className="bg-neutral-800 text-neutral-200 px-2 py-0.5 text-[10px]">
                        {m}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <span className="text-neutral-400 block text-[10px]">PROPOSED HARDWARE:</span>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {item.hardware.map((h, i) => (
                      <span key={i} className="bg-blood-950/50 border border-blood-900/50 text-blood-300 px-2 py-0.5 text-[10px]">
                        {h}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Description & Curator Notes */}
              <div className="space-y-2">
                <span className="text-neutral-400 text-[10px] tracking-wider uppercase block">
                  ARCHIVIST NOTES:
                </span>
                <p className="text-neutral-300 font-sans leading-relaxed text-sm bg-obsidian-900/20 p-3 border-l-2 border-blood-600">
                  {item.description}
                </p>
              </div>

              {/* Designer Action Card for Empty Slots */}
              {isEmpty && (
                <div className="border border-blood-600/60 bg-blood-950/20 p-4 space-y-3">
                  <div className="flex items-center space-x-2 text-blood-400 font-bold">
                    <Send className="w-4 h-4" />
                    <span className="tracking-widest uppercase">КАК НАПОЛНИТЬ ЭТУ ЯЧЕЙКУ</span>
                  </div>
                  <p className="text-neutral-300 font-sans text-xs leading-relaxed">
                    Напишите в диалоге:
                    <br />
                    <code className="text-white bg-black/60 px-2 py-1 mt-1 block font-mono text-[11px] border border-white/10">
                      "Для ячейки {item.id} нарисуй: [ваше описание вещи, детали, цвет]"
                    </code>
                  </p>
                  <p className="text-neutral-400 text-[10px]">
                    Я сразу создам визуализацию одежды и обновлю сайт!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="border-t border-white/10 p-4 bg-obsidian-900 flex justify-between items-center font-mono text-xs">
          <span className="text-neutral-500 text-[10px]">
            BLUTIGES SCHWERT // CATACOMB PROTOCOL MMXXVI
          </span>
          <form method="dialog">
            <button
              type="submit"
              onClick={onClose}
              className="bg-steel-100 hover:bg-white text-obsidian-950 px-4 py-2 font-bold uppercase tracking-widest text-[11px] transition-colors"
            >
              CLOSE DOSSIER [ESC]
            </button>
          </form>
        </div>
      </div>
    </dialog>
  );
};
