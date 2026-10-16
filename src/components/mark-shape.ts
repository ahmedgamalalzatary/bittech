// Vector trace of the BitTech mark (traced from public/logo.jpeg, isometric 30° grid).
export const MARK_VIEWBOX = "125 328 437 624";

export type MarkPiece = {
  id: string;
  points: string;
  fill: "main" | "shade" | "fold";
  // Direction the piece slides in from when the mark assembles (user units).
  from: { x: number; y: number };
  // Parallax depth: how far the piece follows the pointer.
  depth: number;
};

export const markPieces: MarkPiece[] = [
  { id: "bottom", points: "131,712 350,840 350,947 131,822", fill: "shade", from: { x: -120, y: -70 }, depth: 14 },
  { id: "middle", points: "131,455 556,702 556,821 350,947 350,840 470,767 131,570", fill: "main", from: { x: 120, y: 70 }, depth: 8 },
  { id: "upper", points: "540,470 556,459 556,574 478,623 383,568 462,516", fill: "main", from: { x: 120, y: -70 }, depth: 18 },
  { id: "top", points: "248,389 341,333 556,459 540,470 444,504", fill: "main", from: { x: -120, y: -70 }, depth: 24 },
  { id: "fold", points: "444,504 540,470 462,516", fill: "fold", from: { x: 0, y: 0 }, depth: 18 },
];
