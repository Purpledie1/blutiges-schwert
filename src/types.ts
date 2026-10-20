export type Category = 'ALL' | 'OUTERWEAR' | 'BOTTOMS' | 'LEATHER_TACTICAL' | 'FOOTWEAR' | 'RELICS';

export type SlotStatus = 'DOCUMENTED' | 'AWAITING_DESIGN' | 'IN_DEVELOPMENT';

export interface ArchiveItem {
  id: string; // e.g. "BS-00", "BS-01"
  slotNumber: string; // "SLOT 00", "SLOT 01"
  code: string; // "ART-00-CATACOMB"
  title: string;
  germanTitle: string;
  category: Category;
  status: SlotStatus;
  imageUrl?: string;
  season: string;
  silhouette: string;
  materials: string[];
  hardware: string[];
  dimensions?: string;
  description: string;
  curatorNotes: string;
  colorPalette: string[];
}
