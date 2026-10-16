"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { whatsappLink } from "@/lib/site";
import { Wordmark } from "./Mark";
import { WhatsAppIcon } from "./icons";
import { RollText } from "./RollText";

const links = [
  { href: "#services", label: "What we build" },
  { href: "#work", label: "Our work" },
  { href: "#questions", label: "Questions" },
  { href: "#contact", label: "Contact" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);

  useLenis(({ scroll, direction }) => {
    setScrolled(scroll > 12);
    setHidden(scroll > 400 && direction === 1 && !open);
  });

  return (
    <header className="site-header" data-scrolled={scrolled} data-hidden={hidden}>
      <div className="wrap header-inner">
        <a href="#top" className="header-brand" aria-label="BitTech, back to top">
          <Wordmark />
        </a>

        <nav className="header-nav" aria-label="Main">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="roll-host">
              <RollText>{l.label}</RollText>
            </a>
          ))}
        </nav>

        <a className="btn btn-primary btn-small header-cta" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="btn-icon" />
          <RollText>WhatsApp us</RollText>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label="Main"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
          >
            {links.map((l, i) => (
              <motion.a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i + 0.05 }}
              >
                {l.label}
              </motion.a>
            ))}
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="btn-icon" />
              <RollText>Message us on WhatsApp</RollText>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
