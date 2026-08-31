"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { CASE_STUDIES } from "@/lib/constants";
import FadeUp from "@/components/ui/FadeUp";

export default function PortfolioShowcase() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    let raf = 0;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const rect = wrapper.getBoundingClientRect();
        const wrapperTop = -rect.top;
        const scrollable = wrapper.offsetHeight - window.innerHeight;
        if (scrollable <= 0) return;

        const progress = Math.max(0, Math.min(1, wrapperTop / scrollable));
        const maxTranslate = Math.max(0, track.scrollWidth - window.innerWidth * 0.55);
        track.style.transform = `translate3d(${-progress * maxTranslate}px, 0, 0)`;

        const cards = track.querySelectorAll(".h-project");
        const idx = Math.min(
          CASE_STUDIES.length - 1,
          Math.floor(progress * (CASE_STUDIES.length - 0.01))
        );
        setActiveIdx(idx);
        cards.forEach((card, i) => {
          const el = card as HTMLElement;
          const dist = Math.abs(i - progress * (CASE_STUDIES.length - 1));
          const scale = 1 - Math.min(0.12, dist * 0.06);
          el.style.transform = `scale(${scale})`;
          el.style.opacity = String(1 - Math.min(0.35, dist * 0.15));
        });
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    onScroll();
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="work-wrapper" id="portfolio">
      <div className="work-sticky">
        <FadeUp className="work-header">
          <p className="label-tag mb-4">Selected Archives</p>
          <h2 className="section-title">Our Portfolio</h2>
          <p className="mt-4 text-muted max-w-md text-sm tracking-wide uppercase">
            Scroll to explore · Click to expand
          </p>
          <p className="work-counter mt-4 font-mono text-xs text-cyan-400/80 tracking-widest">
            {String(activeIdx + 1).padStart(2, "0")} / {String(CASE_STUDIES.length).padStart(2, "0")}
          </p>
        </FadeUp>

        <div ref={trackRef} className="work-track">
          {CASE_STUDIES.map((project, i) => (
            <Link
              key={project.name}
              href={project.url.startsWith("http") ? project.url : project.url}
              target={project.url.startsWith("http") ? "_blank" : undefined}
              rel={project.url.startsWith("http") ? "noopener noreferrer" : undefined}
              className="h-project group"
              style={{
                backgroundImage: `linear-gradient(145deg, rgba(6,182,212,${0.1 + i * 0.025}) 0%, rgba(139,92,246,0.14) 45%, rgba(3,7,18,0.96) 100%)`,
              }}
            >
              <div className="h-project-overlay" />
              <span className="h-num">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="h-title">{project.name}</h3>
              <p className="h-cat">{project.category}</p>
              <p className="h-desc">{project.desc}</p>
            </Link>
          ))}
        </div>

        <p className="work-swipe-hint md:hidden">Swipe to explore →</p>
      </div>
    </div>
  );
}
