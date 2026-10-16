"use client";

import { useEffect, useId, useRef, type PointerEvent as ReactPointerEvent, type RefObject } from "react";
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
  const hovering = useRef(false);
  const reduce = useReducedMotion() ?? false;

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const px = useSpring(pointerX, { stiffness: 60, damping: 18 });
  const py = useSpring(pointerY, { stiffness: 60, damping: 18 });

  // 3D tilt while a pointer or finger is on the mark: it turns away from the pointer.
  const tiltX = useMotionValue(0);
  const tiltY = useMotionValue(0);
  const rotateX = useSpring(tiltX, { stiffness: 140, damping: 14 });
  const rotateY = useSpring(tiltY, { stiffness: 140, damping: 14 });
  const lift = useSpring(1, { stiffness: 200, damping: 18 });

  // A soft light that slides over the gold, following the pointer.
  const glareX = useMotionValue(340);
  const glareY = useMotionValue(640);
  const gx = useSpring(glareX, { stiffness: 160, damping: 22 });
  const gy = useSpring(glareY, { stiffness: 160, damping: 22 });
  const glareOpacity = useSpring(0, { stiffness: 120, damping: 20 });

  useEffect(() => {
    if (reduce) return;
    const onMove = (e: PointerEvent) => {
      if (hovering.current) return;
      pointerX.set((e.clientX / window.innerWidth) * 2 - 1);
      pointerY.set((e.clientY / window.innerHeight) * 2 - 1);
    };
    window.addEventListener("pointermove", onMove);
    return () => window.removeEventListener("pointermove", onMove);
  }, [reduce, pointerX, pointerY]);

  const { scrollYProgress } = useScroll({ target: ref as unknown as RefObject<HTMLElement>, offset: ["start end", "center 0.55"] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24 });

  const track = (e: ReactPointerEvent<HTMLDivElement>) => {
    if (reduce) return;
    const box = e.currentTarget.getBoundingClientRect();
    const rx = Math.min(1, Math.max(0, (e.clientX - box.left) / box.width));
    const ry = Math.min(1, Math.max(0, (e.clientY - box.top) / box.height));
    const nx = rx * 2 - 1;
    const ny = ry * 2 - 1;
    hovering.current = true;
    tiltY.set(-nx * 24);
    tiltX.set(ny * 18);
    lift.set(1.05);
    // Pieces are pushed further away from the pointer while the mark is being handled.
    pointerX.set(nx * 1.6);
    pointerY.set(ny * 1.6);
    glareX.set(125 + rx * 437);
    glareY.set(328 + ry * 624);
    glareOpacity.set(0.55);
  };

  const release = () => {
    hovering.current = false;
    tiltX.set(0);
    tiltY.set(0);
    lift.set(1);
    pointerX.set(0);
    pointerY.set(0);
    glareOpacity.set(0);
  };

  return (
    <motion.div
      className={`mark-tilt ${className ?? ""}`}
      style={reduce ? undefined : { rotateX, rotateY, scale: lift, transformPerspective: 900 }}
      onPointerEnter={track}
      onPointerMove={track}
      onPointerDown={track}
      onPointerLeave={release}
      onPointerCancel={release}
      onPointerUp={(e) => e.pointerType !== "mouse" && release()}
    >
      <svg ref={ref} viewBox={MARK_VIEWBOX} aria-hidden="true" overflow="visible">
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
        <radialGradient id={`${id}-glare`}>
          <stop offset="0" stopColor="#fff" stopOpacity="0.9" />
          <stop offset="1" stopColor="#fff" stopOpacity="0" />
        </radialGradient>

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
            <motion.circle r="210" cx={gx} cy={gy} fill={`url(#${id}-glare)`} style={{ opacity: glareOpacity }} />
          </g>
        )}
      </svg>
    </motion.div>
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
  // Pieces drift away from the pointer, as if pushed by it.
  const parallaxX = useTransform(px, (v) => -v * piece.depth);
  const parallaxY = useTransform(py, (v) => -v * piece.depth * 0.6);

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
