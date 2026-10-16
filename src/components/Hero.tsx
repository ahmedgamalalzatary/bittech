"use client";

import { useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";
import { whatsappLink } from "@/lib/site";
import { AnimatedMark } from "./AnimatedMark";
import { WhatsAppIcon } from "./icons";
import { RollText } from "./RollText";

gsap.registerPlugin(SplitText, useGSAP);

export function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        const split = SplitText.create(".hero-title", { type: "words,lines", mask: "lines", autoSplit: true });
        const tl = gsap.timeline({ defaults: { ease: "expo.out" } });
        tl.from(split.words, { yPercent: 115, rotate: 4, duration: 1.1, stagger: 0.06 }, 0.1)
          .from(".hero-sub", { y: 20, opacity: 0, duration: 0.9 }, 0.55)
          .from(".hero-actions > *", { y: 16, opacity: 0, duration: 0.8, stagger: 0.08 }, 0.7)
          .from(".hero-note", { opacity: 0, duration: 0.8 }, 0.95)
          .from(".hero-floor", { opacity: 0, scale: 0.9, duration: 1.4 }, 0);
        return () => split.revert();
      });
    },
    { scope: root },
  );

  return (
    <section ref={root} className="hero" aria-labelledby="hero-title">
      <div className="hero-inner wrap">
        <div className="hero-copy">
          <h1 id="hero-title" className="hero-title">
            You have
            <br /> the idea.
            <br /> We build
            <br /> the software.
          </h1>
          <p className="hero-sub">
            BitTech is a software house in Fayoum, Egypt. We design and build websites, mobile apps, desktop programs,
            online stores and AI tools, then keep them running after launch.
          </p>
          <div className="hero-actions">
            <a className="btn btn-primary" href={whatsappLink()} target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon className="btn-icon" />
              <RollText>Message us on WhatsApp</RollText>
            </a>
            <a className="btn btn-ghost" href="#services">
              <RollText>See what we build</RollText>
            </a>
          </div>
          <p className="hero-note">Send your idea in a message or a voice note. We reply with questions, a plan and a price.</p>
        </div>

        <div className="hero-visual" aria-hidden="true">
          <svg className="hero-floor" viewBox="-300 -173 600 346">
            <defs>
              <pattern id="iso-dots" width="34.64" height="20" patternUnits="userSpaceOnUse">
                <circle cx="0" cy="0" r="1.6" />
                <circle cx="17.32" cy="10" r="1.6" />
                <circle cx="34.64" cy="0" r="1.6" />
                <circle cx="0" cy="20" r="1.6" />
                <circle cx="34.64" cy="20" r="1.6" />
              </pattern>
              <radialGradient id="floor-fade">
                <stop offset="0.35" stopColor="#fff" />
                <stop offset="1" stopColor="#000" />
              </radialGradient>
              <mask id="floor-mask">
                <rect x="-300" y="-173" width="600" height="346" fill="url(#floor-fade)" />
              </mask>
            </defs>
            <path d="M0,-173 300,0 0,173 -300,0Z" fill="url(#iso-dots)" mask="url(#floor-mask)" />
          </svg>
          <AnimatedMark className="hero-mark" mode="load" />
          <span className="bit bit-1" />
          <span className="bit bit-2" />
          <span className="bit bit-3" />
        </div>
      </div>
    </section>
  );
}
