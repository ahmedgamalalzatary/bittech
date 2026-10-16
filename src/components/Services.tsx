"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useLenis } from "lenis/react";
import { services } from "@/lib/site";
import { BlockStage } from "./BlockStage";
import { scenes } from "./blocks";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const sceneList = services.map((s) => scenes[s.id]);
const last = services.length - 1;

export function Services() {
  const section = useRef<HTMLElement>(null);
  const position = useRef(0);
  const trigger = useRef<ScrollTrigger | null>(null);
  const [active, setActive] = useState(0);
  const reduce = useReducedMotion() ?? false;
  const lenis = useLenis();

  useGSAP(
    () => {
      trigger.current = ScrollTrigger.create({
        trigger: section.current,
        start: "top top",
        end: () => `+=${window.innerHeight * 0.85 * last}`,
        pin: true,
        anticipatePin: 1,
        onUpdate: (self) => {
          const pos = self.progress * last;
          position.current = pos;
          setActive(Math.min(last, Math.floor(pos + 0.5)));
          gsap.set(".svc-progress-fill", { scaleX: self.progress });
        },
      });
    },
    { scope: section },
  );

  // On narrow screens the tab row scrolls sideways; keep the active tab in view.
  useEffect(() => {
    const row = section.current?.querySelector<HTMLElement>(".svc-tabs");
    const tab = row?.querySelector<HTMLElement>('[aria-selected="true"]');
    if (!row || !tab || row.scrollWidth <= row.clientWidth) return;
    row.scrollTo({ left: tab.offsetLeft - (row.clientWidth - tab.offsetWidth) / 2, behavior: reduce ? "auto" : "smooth" });
  }, [active, reduce]);

  const goTo = (i: number) => {
    const st = trigger.current;
    if (!st) return;
    const y = st.start + (st.end - st.start) * (i / last);
    if (lenis) lenis.scrollTo(y, { duration: 1.4 });
    else window.scrollTo({ top: y, behavior: reduce ? "auto" : "smooth" });
  };

  const svc = services[active];

  return (
    <section ref={section} id="services" className="svc" aria-labelledby="svc-title">
      <div className="svc-inner wrap">
        <div className="svc-copy">
          <h2 id="svc-title" className="svc-title">
            What we build
          </h2>

          <ul className="svc-tabs" role="tablist" aria-label="Services">
            {services.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  role="tab"
                  aria-selected={i === active}
                  className="svc-tab"
                  onClick={() => goTo(i)}
                >
                  {i === active && (
                    <motion.span layoutId="svc-tab-bg" className="svc-tab-bg" transition={{ type: "spring", stiffness: 380, damping: 32 }} />
                  )}
                  <span className="svc-tab-label">{s.name}</span>
                </button>
              </li>
            ))}
          </ul>

          <div className="svc-detail" role="tabpanel" aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={svc.id}
                initial={reduce ? { opacity: 0 } : { opacity: 0, y: 24, filter: "blur(6px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={reduce ? { opacity: 0 } : { opacity: 0, y: -16, filter: "blur(6px)" }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              >
                <h3 className="svc-name">{svc.name}</h3>
                <p className="svc-line">{svc.line}</p>
                <ul className="svc-examples">
                  {svc.examples.map((e) => (
                    <li key={e}>{e}</li>
                  ))}
                </ul>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="svc-progress" aria-hidden="true">
            <span className="svc-progress-fill" />
          </div>
        </div>

        <div className="svc-stage">
          <BlockStage
            scenes={sceneList}
            position={position}
            reduceMotion={reduce}
            className="stage"
            label={`Illustration: ${svc.name}`}
          />
          <p className="svc-hint">Keep scrolling. The blocks rebuild into each thing we make.</p>
        </div>
      </div>
    </section>
  );
}
