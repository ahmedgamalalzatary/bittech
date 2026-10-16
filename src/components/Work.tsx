"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { useLocale } from "./LocaleProvider";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const { t, rtl } = useLocale();
  const projects = t.work.projects;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);
        gsap.set(".work-viewport", { overflowX: "clip" });

        // Vertical scroll drives the row of projects sideways while the section is pinned.
        // In Arabic the row starts on the right and moves the other way.
        const slide = gsap.to(el, {
          x: () => (rtl ? distance() : -distance()),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
          },
        });

        gsap.utils.toArray<HTMLElement>(".project").forEach((card) => {
          const frame = card.querySelector(".project-frame");
          const img = card.querySelector(".project-img");
          const box = card.getBoundingClientRect();
          const inFirstScreen = rtl ? box.right > window.innerWidth * 0.1 : box.left < window.innerWidth * 0.9;
          // Where a card enters and leaves the screen, mirrored for right-to-left.
          const [edge, enter, leave] = rtl ? ["right", "left", "right"] : ["left", "right", "left"];

          // The frame opens along the logo's isometric diagonal as it slides into view.
          gsap.fromTo(
            frame,
            { "--reveal": 0 },
            {
              "--reveal": 1,
              ease: "power2.out",
              scrollTrigger: inFirstScreen
                ? { trigger: root.current, start: "top 85%", end: "top 10%", scrub: 0.6 }
                : {
                    trigger: card,
                    containerAnimation: slide,
                    start: rtl ? "right 0%" : "left 100%",
                    end: rtl ? "right 55%" : "left 45%",
                    scrub: 0.6,
                  },
            },
          );

          // Screenshots drift inside their frames for depth.
          gsap.fromTo(
            img,
            { xPercent: rtl ? 6 : -6 },
            {
              xPercent: rtl ? -6 : 6,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                containerAnimation: slide,
                start: `${edge} ${enter}`,
                end: `${leave === "left" ? "right" : "left"} ${leave}`,
                scrub: true,
              },
            },
          );
        });

        gsap.from(".work-intro > *", {
          y: 30,
          opacity: 0,
          duration: 1,
          stagger: 0.08,
          ease: "expo.out",
          scrollTrigger: { trigger: root.current, start: "top 70%" },
        });

        return () => gsap.set(".work-viewport", { clearProps: "overflowX" });
      });
    },
    { scope: root, dependencies: [rtl] },
  );

  return (
    <section ref={root} id="work" className="work" aria-labelledby="work-title">
      <div className="work-viewport">
        <div ref={track} className="work-track">
          <div className="work-intro">
            <h2 id="work-title" className="section-title">
              {t.work.title}
            </h2>
            <p className="section-lead">{t.work.lead}</p>
          </div>

          {projects.map((p, i) => (
            <article key={p.name} className={`project ${i === 0 ? "project-wide" : ""}`}>
              <div className="project-frame">
                <Image
                  className="project-img"
                  src={p.image.src}
                  width={p.image.width}
                  height={p.image.height}
                  alt={`${p.name}: ${p.kind}`}
                  sizes={i === 0 ? "(min-width: 900px) 60vw, 90vw" : "(min-width: 900px) 30vw, 80vw"}
                />
              </div>
              <div className="project-text">
                <h3 className="project-name">{p.name}</h3>
                <p className="project-kind">{p.kind}</p>
                <p className="project-desc">{p.text}</p>
                <ul className="tags" aria-label={t.work.madeLabel}>
                  {p.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                {p.url && (
                  <a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">
                    {t.work.visit} {p.url.replace("https://", "")}
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
