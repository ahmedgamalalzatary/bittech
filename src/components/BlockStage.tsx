"use client";

import { useEffect, useMemo, useRef, type RefObject } from "react";
import { BOX_COUNT, floorLines, frame, paintOrder, type Box } from "./blocks";

type Props = {
  scenes: Box[][];
  // Continuous position through the scenes: 0 = first scene, 1.5 = halfway between the 2nd and 3rd.
  position: RefObject<number>;
  reduceMotion: boolean;
  className?: string;
  label: string;
};

// How much of each step between two scenes is spent moving. The rest holds the finished object.
const MOVE_START = 0.18;
const MOVE_END = 0.82;

export function BlockStage({ scenes, position, reduceMotion, className, label }: Props) {
  const groupRefs = useRef<(SVGGElement | null)[]>([]);
  const layerRef = useRef<SVGGElement>(null);
  const lines = useMemo(() => floorLines(), []);

  useEffect(() => {
    let raf = 0;
    let shown = -1;
    let order = "";
    let idle = reduceMotion ? 0 : 1;

    const draw = (now: number) => {
      const target = Math.max(0, Math.min(scenes.length - 1, position.current ?? 0));
      // Ease the displayed position toward the scroll position so fast scrolling still glides.
      shown = shown < 0 || reduceMotion ? target : shown + (target - shown) * 0.14;
      if (Math.abs(target - shown) < 0.0005) shown = target;

      const i = Math.min(Math.floor(shown), scenes.length - 2);
      const f = shown - i;
      let t = (f - MOVE_START) / (MOVE_END - MOVE_START);
      t = Math.max(0, Math.min(1, t));
      if (reduceMotion) t = f < 0.5 ? 0 : 1;

      const boxes = frame(scenes[i], scenes[i + 1], t, now / 1000, idle);
      boxes.forEach((b) => {
        const g = groupRefs.current[b.key];
        if (!g) return;
        const polys = g.children;
        b.faces.forEach((face, k) => {
          const el = polys[k] as SVGPolygonElement;
          el.setAttribute("points", face.points);
          el.setAttribute("fill", face.color);
        });
      });

      const sorted = paintOrder(boxes);
      const nextOrder = sorted.map((b) => b.key).join(",");
      if (nextOrder !== order && layerRef.current) {
        order = nextOrder;
        sorted.forEach((b) => {
          const g = groupRefs.current[b.key];
          if (g) layerRef.current!.appendChild(g);
        });
      }

      if (!reduceMotion) raf = requestAnimationFrame(draw);
    };

    raf = requestAnimationFrame(draw);
    if (reduceMotion) {
      // Without the idle loop, redraw only when the scroll position changes.
      const onScroll = () => requestAnimationFrame(draw);
      window.addEventListener("scroll", onScroll, { passive: true });
      return () => window.removeEventListener("scroll", onScroll);
    }
    idle = 1;
    return () => cancelAnimationFrame(raf);
  }, [scenes, position, reduceMotion]);

  return (
    <svg viewBox="-175 -150 350 330" className={className} role="img" aria-label={label}>
      <g className="stage-floor">
        {lines.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
      <g ref={layerRef} strokeLinejoin="round">
        {Array.from({ length: BOX_COUNT }, (_, i) => (
          <g
            key={i}
            ref={(el) => {
              groupRefs.current[i] = el;
            }}
          >
            <polygon />
            <polygon />
            <polygon />
          </g>
        ))}
      </g>
    </svg>
  );
}
