"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useLocale } from "./LocaleProvider";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  const { t } = useLocale();
  const faqs = t.faq.items;

  return (
    <section id="questions" className="faq" aria-labelledby="faq-title">
      <div className="wrap faq-inner">
        <h2 id="faq-title" className="section-title">
          {t.faq.title}
        </h2>
        <div className="faq-list">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={f.q} className="faq-item" data-open={isOpen}>
                <h3>
                  <button
                    type="button"
                    className="faq-q"
                    aria-expanded={isOpen}
                    aria-controls={`faq-a-${i}`}
                    id={`faq-q-${i}`}
                    onClick={() => setOpen(isOpen ? null : i)}
                  >
                    <span>{f.q}</span>
                    <span className="faq-icon" aria-hidden="true" />
                  </button>
                </h3>
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      id={`faq-a-${i}`}
                      role="region"
                      aria-labelledby={`faq-q-${i}`}
                      className="faq-a"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    >
                      <p>{f.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
