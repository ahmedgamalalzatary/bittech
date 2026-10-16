// Isometric "bits": a fixed set of boxes that rearrange into a different object for each service.
import type { ServiceId } from "@/lib/site";

export type Tone = "gold" | "ink" | "paper";
// x, y, z, width (along x), depth (along y), height (along z), tone
export type Box = [number, number, number, number, number, number, Tone];

export const BOX_COUNT = 12;
export const UNIT = 20;

const HIDDEN: Box = [4.5, 4.5, 0, 0, 0, 0, "gold"];

function fill(boxes: Box[]): Box[] {
  return [...boxes, ...Array.from({ length: BOX_COUNT - boxes.length }, () => HIDDEN)].slice(0, BOX_COUNT);
}

export const scenes: Record<ServiceId, Box[]> = {
  // Upright browser window with a header bar, hero and three cards.
  web: fill([
    [1, 4, 0.4, 7, 0.6, 5.2, "paper"],
    [1, 4.6, 4.95, 7, 0.3, 0.65, "ink"],
    [1.3, 4.9, 5.1, 0.35, 0.15, 0.35, "gold"],
    [1.85, 4.9, 5.1, 0.35, 0.15, 0.35, "gold"],
    [1.5, 4.6, 2.9, 3.8, 0.45, 1.6, "gold"],
    [5.8, 4.6, 3.6, 1.7, 0.3, 0.55, "ink"],
    [1.5, 4.6, 0.9, 1.7, 0.35, 1.5, "gold"],
    [3.6, 4.6, 0.9, 1.7, 0.6, 1.5, "ink"],
    [5.7, 4.6, 0.9, 1.8, 0.35, 1.5, "gold"],
  ]),
  // Phone with a header, list rows, tab bar and two app icons floating beside it.
  mobile: fill([
    [3, 4, 0, 3.4, 0.6, 6.6, "ink"],
    [3.25, 4.6, 0.45, 2.9, 0.1, 5.7, "paper"],
    [3.5, 4.7, 4.5, 2.4, 0.3, 1.3, "gold"],
    [3.5, 4.7, 3.3, 2.4, 0.3, 0.8, "gold"],
    [3.5, 4.7, 2.2, 2.4, 0.3, 0.8, "ink"],
    [3.5, 4.7, 1.1, 2.4, 0.3, 0.8, "gold"],
    [3.5, 4.7, 0.6, 2.4, 0.2, 0.3, "ink"],
    [7.2, 5.4, 3.8, 1, 1, 1, "gold"],
    [0.6, 5.6, 1.8, 1, 1, 1, "gold"],
    [1.1, 4.4, 4.6, 0.7, 0.7, 0.7, "ink"],
  ]),
  // Desktop monitor on a stand, with keyboard and mouse.
  desktop: fill([
    [0.8, 3.4, 2.1, 7.4, 0.45, 5, "ink"],
    [1.1, 3.85, 2.4, 6.8, 0.1, 4.4, "paper"],
    [1.4, 3.95, 3.9, 3.6, 0.25, 2.6, "gold"],
    [5.3, 3.95, 2.7, 2.3, 0.2, 3.8, "ink"],
    [1.4, 3.95, 2.7, 3.6, 0.2, 0.9, "gold"],
    [4, 3.2, 0.35, 1, 0.4, 1.8, "ink"],
    [3, 2.6, 0, 3, 1.8, 0.35, "gold"],
    [1.8, 5.6, 0, 5, 1.6, 0.3, "paper"],
    [7.4, 5.8, 0, 0.7, 1, 0.4, "gold"],
  ]),
  // A chip with a glowing core and thoughts floating above it.
  ai: fill([
    [1.8, 1.8, 0, 5.4, 5.4, 0.35, "paper"],
    [2.8, 2.8, 0.35, 3.4, 3.4, 0.9, "ink"],
    [3.7, 3.7, 1.25, 1.6, 1.6, 1.4, "gold"],
    [1.3, 4.1, 0, 1.2, 0.8, 0.25, "ink"],
    [6.5, 4.1, 0, 1.2, 0.8, 0.25, "ink"],
    [2.2, 3.6, 3.6, 0.9, 0.9, 0.9, "gold"],
    [4.2, 1.6, 4.1, 0.9, 0.9, 0.9, "ink"],
    [6, 4.6, 3.7, 0.9, 0.9, 0.9, "gold"],
    [4, 6, 4.2, 0.9, 0.9, 0.9, "gold"],
    [4.1, 4.1, 5.6, 0.8, 0.8, 0.8, "gold"],
    [2.6, 6.4, 5.4, 0.6, 0.6, 0.6, "ink"],
  ]),
  // Delivery boxes, a shopping bag and a payment card.
  store: fill([
    [1.8, 3, 0, 4, 4, 3.2, "gold"],
    [3.5, 3, 3.2, 0.6, 4, 0.08, "ink"],
    [2.6, 3.6, 3.28, 1.8, 1.8, 1.6, "paper"],
    [6.2, 4.2, 0, 2.2, 2.2, 2, "gold"],
    [7.1, 4.2, 2, 0.4, 2.2, 0.06, "ink"],
    [0.2, 6.6, 0, 1.6, 1.1, 2.6, "ink"],
    [0.6, 7.1, 2.6, 0.8, 0.1, 0.7, "gold"],
    [5.2, 7.2, 0, 2.6, 1.6, 0.2, "paper"],
    [5.5, 7.6, 0.2, 0.7, 0.5, 0.06, "gold"],
  ]),
  // Stacked design layers with interface pieces on the top layer.
  design: fill([
    [0.8, 2, 0, 6, 6, 0.25, "paper"],
    [2, 0.8, 1.5, 6, 6, 0.25, "paper"],
    [2.6, 1.6, 3, 4.6, 4.6, 0.25, "gold"],
    [3.1, 2.1, 3.25, 3.6, 0.7, 0.2, "ink"],
    [3.1, 3.3, 3.25, 1.6, 1.6, 0.6, "paper"],
    [5.1, 3.3, 3.25, 1.6, 1.6, 0.9, "ink"],
    [3.1, 5.2, 3.25, 3.6, 0.6, 0.2, "paper"],
    [7.6, 6.2, 0, 0.35, 0.35, 4.2, "ink"],
    [7.6, 6.2, 4.2, 0.35, 0.35, 0.5, "gold"],
  ]),
  // A server rack with status lights and a cloud of blocks above it.
  cloud: fill([
    [3, 3, 0, 3, 3, 1.3, "ink"],
    [3, 3, 1.5, 3, 3, 1.3, "ink"],
    [3, 3, 3, 3, 3, 1.3, "ink"],
    [3.4, 6, 0.5, 1.2, 0.08, 0.3, "gold"],
    [3.4, 6, 2, 1.2, 0.08, 0.3, "gold"],
    [3.4, 6, 3.5, 1.2, 0.08, 0.3, "gold"],
    [2.3, 3.6, 5.6, 2, 1.8, 1, "gold"],
    [3.8, 2.8, 5.9, 2.6, 2.4, 1.3, "gold"],
    [5.6, 4, 5.6, 1.6, 1.6, 0.9, "gold"],
    [4.6, 4.4, 5.5, 1.4, 1.4, 0.7, "paper"],
  ]),
};

type RGB = [number, number, number];
// Face colors per tone: top, right, left.
const tones: Record<Tone, [RGB, RGB, RGB]> = {
  gold: [
    [255, 205, 74],
    [232, 168, 38],
    [178, 122, 16],
  ],
  ink: [
    [52, 52, 54],
    [24, 24, 26],
    [0, 0, 0],
  ],
  paper: [
    [255, 255, 255],
    [234, 236, 240],
    [212, 216, 222],
  ],
};

export type Face = { points: string; color: string };
export type Projected = {
  key: number;
  depth: number;
  // Bounds: x0, x1, y0, y1, z0, z1
  bounds: [number, number, number, number, number, number];
  faces: [Face, Face, Face];
};

const COS = Math.cos(Math.PI / 6);
const SIN = 0.5;

function p(x: number, y: number, z: number) {
  return `${((x - y) * COS * UNIT).toFixed(2)},${((x + y) * SIN * UNIT - z * UNIT).toFixed(2)}`;
}

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const ease = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
const rgb = (c: RGB) => `rgb(${c[0] | 0},${c[1] | 0},${c[2] | 0})`;

// Interpolates every box between two scenes. Boxes move one after another for a "rebuilding" feel.
export function frame(a: Box[], b: Box[], t: number, time: number, idle: number): Projected[] {
  const stagger = 0.035;
  const span = 1 - stagger * (BOX_COUNT - 1);
  return a.map((boxA, i) => {
    const boxB = b[i];
    const lt = ease(Math.min(1, Math.max(0, (t - i * stagger) / span)));
    // Boxes lift as they travel, like being picked up and placed.
    const lift = Math.sin(lt * Math.PI) * 1.4;
    const bob = Math.sin(time * 1.4 + i * 0.9) * 0.08 * idle;
    const [x, y, z, w, d, h] = [0, 1, 2, 3, 4, 5].map((k) => lerp(boxA[k] as number, boxB[k] as number, lt));
    const zz = z + lift + bob;
    const ca = tones[boxA[6]];
    const cb = tones[boxB[6]];
    const col = (f: number) => rgb(ca[f].map((v, k) => lerp(v, cb[f][k], lt)) as RGB);
    const visible = w > 0.01 && d > 0.01 && h > 0.005;
    return {
      key: i,
      depth: x + w / 2 + (y + d / 2) + (zz + h / 2) * 0.5,
      bounds: [x, x + w, y, y + d, zz, zz + h],
      faces: visible
        ? [
            { points: [p(x, y, zz + h), p(x + w, y, zz + h), p(x + w, y + d, zz + h), p(x, y + d, zz + h)].join(" "), color: col(0) },
            { points: [p(x + w, y, zz), p(x + w, y + d, zz), p(x + w, y + d, zz + h), p(x + w, y, zz + h)].join(" "), color: col(1) },
            { points: [p(x, y + d, zz), p(x + w, y + d, zz), p(x + w, y + d, zz + h), p(x, y + d, zz + h)].join(" "), color: col(2) },
          ]
        : [
            { points: "", color: "none" },
            { points: "", color: "none" },
            { points: "", color: "none" },
          ],
    };
  });
}

// Isometric floor grid, 0..9 on x and y.
export function floorLines(): string[] {
  const lines: string[] = [];
  for (let i = 0; i <= 9; i++) {
    lines.push(`M${p(i, 0, 0)} L${p(i, 9, 0)}`);
    lines.push(`M${p(0, i, 0)} L${p(9, i, 0)}`);
  }
  return lines;
}

const EPS = 0.001;

// True when box a must be painted before box b (a sits fully behind, left of, or below b).
function behind(a: Projected, b: Projected) {
  const [ax0, ax1, ay0, ay1, az0, az1] = a.bounds;
  const [bx0, bx1, by0, by1, bz0, bz1] = b.bounds;
  if (ax1 <= bx0 + EPS) return true;
  if (ay1 <= by0 + EPS) return true;
  if (az1 <= bz0 + EPS) return true;
  if (bx1 <= ax0 + EPS || by1 <= ay0 + EPS || bz1 <= az0 + EPS) return false;
  return a.depth < b.depth;
}

// Painter's order for isometric boxes: a topological sort on "is behind", ties broken by depth.
export function paintOrder(boxes: Projected[]): Projected[] {
  const n = boxes.length;
  const before: number[][] = boxes.map(() => []);
  const incoming = new Array(n).fill(0);
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const ij = behind(boxes[i], boxes[j]);
      const ji = behind(boxes[j], boxes[i]);
      if (ij && !ji) {
        before[i].push(j);
        incoming[j]++;
      } else if (ji && !ij) {
        before[j].push(i);
        incoming[i]++;
      }
    }
  }
  const out: Projected[] = [];
  const done = new Array(n).fill(false);
  while (out.length < n) {
    let pick = -1;
    for (let i = 0; i < n; i++) {
      if (done[i] || incoming[i] > 0) continue;
      if (pick < 0 || boxes[i].depth < boxes[pick].depth) pick = i;
    }
    // A cycle (only possible mid-move): fall back to the shallowest remaining box.
    if (pick < 0) {
      for (let i = 0; i < n; i++) if (!done[i] && (pick < 0 || boxes[i].depth < boxes[pick].depth)) pick = i;
    }
    done[pick] = true;
    out.push(boxes[pick]);
    for (const j of before[pick]) incoming[j]--;
  }
  return out;
}
