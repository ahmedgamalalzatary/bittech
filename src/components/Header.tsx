"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { localePath } from "@/lib/site";
import { useLocale } from "./LocaleProvider";
import { Wordmark } from "./Mark";
import { WhatsAppIcon } from "./icons";
import { RollText } from "./RollText";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const { locale, t, wa } = useLocale();
  const other = locale === "ar" ? "en" : "ar";
  const links = t.nav.links;

  useLenis(({ scroll, direction }) => {
    setScrolled(scroll > 12);
    setHidden(scroll > 400 && direction === 1 && !open);
  });

  return (
    <header className="site-header" data-scrolled={scrolled} data-hidden={hidden}>
      <div className="wrap header-inner">
        <a href="#top" className="header-brand" aria-label={t.nav.backToTop}>
          <Wordmark />
        </a>

        <nav className="header-nav" aria-label={t.nav.label}>
          {links.map((l) => (
            <a key={l.href} href={l.href} className="roll-host">
              <RollText>{l.label}</RollText>
            </a>
          ))}
          <a href={localePath[other]} hrefLang={other} lang={other} className="roll-host lang-switch">
            <RollText>{t.nav.switchLabel}</RollText>
          </a>
        </nav>

        <a className="btn btn-primary btn-small header-cta" href={wa} target="_blank" rel="noopener noreferrer">
          <WhatsAppIcon className="btn-icon" />
          <RollText>{t.nav.whatsappShort}</RollText>
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          <span className="sr-only">{open ? t.nav.closeMenu : t.nav.openMenu}</span>
          <span className="menu-bar" />
          <span className="menu-bar" />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            id="mobile-menu"
            className="mobile-menu"
            aria-label={t.nav.label}
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
                initial={{ opacity: 0, x: locale === "ar" ? 10 : -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i + 0.05 }}
              >
                {l.label}
              </motion.a>
            ))}
            <a href={localePath[other]} hrefLang={other} lang={other} onClick={() => setOpen(false)}>
              {t.nav.switchLabel}
            </a>
            <a className="btn btn-primary" href={wa} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="btn-icon" />
              <RollText>{t.whatsappCta}</RollText>
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
