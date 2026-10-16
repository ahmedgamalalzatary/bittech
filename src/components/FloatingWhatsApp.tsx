"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "./LocaleProvider";
import { WhatsAppIcon } from "./icons";

export function FloatingWhatsApp() {
  const [show, setShow] = useState(false);
  const { t, wa } = useLocale();

  useLenis(({ scroll, limit }) => {
    // Appears after the hero, steps aside at the contact section which has its own big button.
    setShow(scroll > window.innerHeight * 0.8 && scroll < limit - window.innerHeight * 0.9);
  });

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          className="fab"
          href={wa}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.fab}
          initial={{ scale: 0, rotate: -30 }}
          animate={{ scale: 1, rotate: 0 }}
          exit={{ scale: 0, rotate: 30 }}
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 22 }}
        >
          <WhatsAppIcon className="fab-icon" />
        </motion.a>
      )}
    </AnimatePresence>
  );
}
