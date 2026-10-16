import type { CSSProperties } from "react";

// Hover effect: each letter slides up and out while a copy rolls in from below, one after another.
// The parent needs the `roll-host` class; hovering or focusing it triggers the roll.
export function RollText({ children }: { children: string }) {
  const chars = Array.from(children);
  const row = (copy: boolean) => (
    <span className={copy ? "roll-row roll-copy" : "roll-row"} aria-hidden="true">
      {chars.map((c, i) => (
        <span key={i} className="roll-char" style={{ "--i": i } as CSSProperties}>
          {c === " " ? " " : c}
        </span>
      ))}
    </span>
  );

  return (
    <span className="roll">
      <span className="sr-only">{children}</span>
      {row(false)}
      {row(true)}
    </span>
  );
}
