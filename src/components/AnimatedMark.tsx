"use client";

import { useEffect, useId, useRef, type RefObject } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "motion/react";
import { MARK_VIEWBOX, markPieces, type MarkPiece } from "./mark-shape";
import { MarkGradients } from "./Mark";

type Props = {
  className?: string;
  // "load": assembles once on page load. "scroll": assembles as it scrolls into view.
  mode?: "load" | "scroll";
};

export function AnimatedMark({ className, mode = "load" }: Props) {
  const id = useId().replace(/:/g, "");
  const ref = useRef<SVGSVGElement>(null);
  const reduce = useReducedMotion() ?? false;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const px = useSpring(pointerX, { stiffness: 60, damping: 18 });
  const py = useSpring(pointerY, { stiffness: 60, damping: 18 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      pointerX.set((e.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, pointerX, pointerY]);

  const { scrollYProgress } = useScroll({ target: ref as unknown as RefObject<HTMLElement>, offset: ["start end", "center 0.55"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  return (
    <svg ref={ref} viewBox={MARK_VIEWBOX} className={className} aria-hidden="true" overflow="visible">
      <MarkGradients id={id} />
      <clipPath id={`${id}-clip`}>
        {markPieces.map((p) => (
          <polygon key={p.id} points={p.points} />
        ))}
      </clipPath>
      <linearGradient id={`${id}-sheen`} x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stopColor="#fff" stopOpacity="0" />
        <stop offset="0.5" stopColor="#fff" stopOpacity="0.55" />
        <stop offset="1" stopColor="#fff" stopOpacity="0" />
      </linearGradient>

      {markPieces.map((p, i) => (
        <Piece
          key={p.id}
          piece={p}
          index={i}
          fill={`url(#${id}-${p.fill})`}
          mode={mode}
          reduce={reduce}
          progress={progress}
          px={px}
          py={py}
        />
      ))}

      {!reduce && (
        <g clipPath={`url(#${id}-clip)`} style={{ pointerEvents: "none" }}>
          <motion.rect
            y="300"
            width="160"
            height="700"
            fill={`url(#${id}-sheen)`}
            transform="skewX(-30)"
            initial={{ x: -200 }}
            animate={{ x: 1100 }}
            transition={{
              duration: 1.6,
              ease: "easeInOut",
              delay: mode === "load" ? 1.5 : 0.4,
              repeat: Infinity,
              repeatDelay: 6,
            }}
          />
        </g>
      )}
    </svg>
  );
}

function Piece({
  piece,
  index,
  fill,
  mode,
  reduce,
  progress,
  px,
  py,
}: {
  piece: MarkPiece;
  index: number;
  fill: string;
  mode: "load" | "scroll";
  reduce: boolean;
  progress: MotionValue<number>;
  px: MotionValue<number>;
  py: MotionValue<number>;
}) {
  const parallaxX = useTransform(px, (v) => v * piece.depth);
  const parallaxY = useTransform(py, (v) => v * piece.depth * 0.6);

  // Scroll mode: each piece flies in over its own slice of the scroll range.
  const start = index * 0.12;
  const end = Math.min(start + 0.55, 1);
  const local = useTransform(progress, [start, end], [0, 1], { clamp: true });
  const sx = useTransform(local, (t) => piece.from.x * (1 - t));
  const sy = useTransform(local, (t) => piece.from.y * (1 - t));
  const sOpacity = useTransform(local, [0, 0.35], [0, 1]);

  const isFold = piece.id === "fold";

  return (
    <motion.g style={reduce ? undefined : { x: parallaxX, y: parallaxY }}>
      {mode === "scroll" && !reduce ? (
        <motion.polygon points={piece.points} fill={fill} style={{ x: sx, y: sy, opacity: sOpacity }} />
      ) : (
        <motion.polygon
          points={piece.points}
          fill={fill}
          initial={reduce ? false : isFold ? { opacity: 0 } : { x: piece.from.x, y: piece.from.y, opacity: 0 }}
          animate={{ x: 0, y: 0, opacity: 1 }}
          transition={
            isFold
              ? { delay: 1.15, duration: 0.4 }
              : {
                  x: { type: "spring", stiffness: 70, damping: 14, delay: 0.25 + index * 0.16 },
                  y: { type: "spring", stiffness: 70, damping: 14, delay: 0.25 + index * 0.16 },
                  opacity: { duration: 0.35, delay: 0.25 + index * 0.16 },
                }
          }
        />
      )}
    </motion.g>
  );
}
