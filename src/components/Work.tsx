"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { projects, whatsappLink } from "@/lib/site";
import { RollText } from "./RollText";
import { WhatsAppIcon } from "./icons";

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function Work() {
  const root = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const el = track.current!;
        const distance = () => Math.max(0, el.scrollWidth - window.innerWidth);
        gsap.set(".work-viewport", { overflowX: "clip" });

        // Vertical scroll drives the row of projects sideways while the section is pinned.
        const slide = gsap.to(el, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: () => `+=${distance()}`,
            pin: true,
            scrub: 0.8,
            invalidateOnRefresh: true,
            onUpdate: (self) => gsap.set(".work-progress-fill", { scaleX: self.progress }),
          },
        });

        gsap.utils.toArray<HTMLElement>(".project").forEach((card) => {
          const frame = card.querySelector(".project-frame");
          const img = card.querySelector(".project-img");
          const inFirstScreen = card.offsetLeft < window.innerWidth * 0.9;

          // The frame opens along the logo's isometric diagonal as it slides into view.
          gsap.fromTo(
            frame,
            { "--reveal": 0 },
            {
              "--reveal": 1,
              ease: "power2.out",
              scrollTrigger: inFirstScreen
                ? { trigger: root.current, start: "top 85%", end: "top 10%", scrub: 0.6 }
                : { trigger: card, containerAnimation: slide, start: "left 100%", end: "left 45%", scrub: 0.6 },
            },
          );

          // Screenshots drift inside their frames for depth.
          if (img)
            gsap.fromTo(
            img,
            { xPercent: -6 },
            {
              xPercent: 6,
              ease: "none",
              scrollTrigger: { trigger: card, containerAnimation: slide, start: "left right", end: "right left", scrub: true },
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
    { scope: root },
  );

  return (
    <section ref={root} id="work" className="work" aria-labelledby="work-title">
      <div className="work-viewport">
        <div ref={track} className="work-track">
          <div className="work-intro">
            <h2 id="work-title" className="section-title">
              Things we&apos;ve built
            </h2>
            <p className="section-lead">Real projects for real businesses. Each one started as a message.</p>
            <div className="work-progress" aria-hidden="true">
              <span className="work-progress-fill" />
            </div>
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
                <ul className="tags" aria-label="What we made">
                  {p.tags.map((t) => (
                    <li key={t}>{t}</li>
                  ))}
                </ul>
                {p.url && (
                  <a className="text-link" href={p.url} target="_blank" rel="noopener noreferrer">
                    Visit {p.url.replace("https://", "")}
                  </a>
                )}
              </div>
            </article>
          ))}

          <div className="project project-next">
            <div className="project-frame project-frame-empty">
              <p className="next-title">Your project could be next.</p>
              <p className="next-text">Tell us what you have in mind. A sketch or a voice note is enough to start.</p>
              <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
                <WhatsAppIcon className="btn-icon" />
                <RollText>Start on WhatsApp</RollText>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
