import { useId } from "react";
import { MARK_VIEWBOX, markPieces } from "./mark-shape";

export function MarkGradients({ id }: { id: string }) {
  return (
    <defs>
      <linearGradient id={`${id}-main`} gradientUnits="userSpaceOnUse" x1="131" y1="947" x2="556" y2="333">
        <stop offset="0" stopColor="#A87410" />
        <stop offset="0.55" stopColor="#E3A62A" />
        <stop offset="1" stopColor="#FFCD4A" />
      </linearGradient>
      <linearGradient id={`${id}-shade`} gradientUnits="userSpaceOnUse" x1="131" y1="900" x2="350" y2="760">
        <stop offset="0" stopColor="#9C6B0E" />
        <stop offset="1" stopColor="#D99D24" />
      </linearGradient>
      <linearGradient id={`${id}-fold`} gradientUnits="userSpaceOnUse" x1="462" y1="516" x2="540" y2="470">
        <stop offset="0" stopColor="#7E560A" />
        <stop offset="1" stopColor="#B98418" />
      </linearGradient>
    </defs>
  );
}

export function Mark({ className, title = "BitTech" }: { className?: string; title?: string }) {
  const id = useId().replace(/:/g, "");
  return (
    <svg
      viewBox={MARK_VIEWBOX}
      className={className}
      {...(title ? { role: "img", "aria-label": title } : { "aria-hidden": true })}
    >
      <MarkGradients id={id} />
      {markPieces.map((p) => (
        <polygon key={p.id} points={p.points} fill={`url(#${id}-${p.fill})`} />
      ))}
    </svg>
  );
}

export function Wordmark() {
  return (
    <span className="wordmark">
      <Mark className="wordmark-mark" title="" />
      <span className="wordmark-text">
        <span className="wordmark-bit">BIT</span>
        <span className="wordmark-tech">Technologies</span>
      </span>
    </span>
  );
}
