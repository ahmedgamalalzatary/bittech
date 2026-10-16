import type { CSSProperties } from "react";

// Hover effect: each letter (or Arabic word) slides up and out while a copy rolls in from below, one after another.
// The parent needs the `roll-host` class; hovering or focusing it triggers the roll.
const ARABIC = /[؀-ۿ]/;

export function RollText({ children }: { children: string }) {
  // Arabic letters join to their neighbours, so Arabic rolls word by word instead of letter by letter.
  const arabic = ARABIC.test(children);
  const chars = arabic ? children.split(/( )/).filter(Boolean) : Array.from(children);
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
    // The row has its own direction so Latin letters keep their order inside right-to-left pages.
    <span className="roll" dir={arabic ? "rtl" : "ltr"}>
      <span className="sr-only">{children}</span>
      {row(false)}
      {row(true)}
    </span>
  );
}
