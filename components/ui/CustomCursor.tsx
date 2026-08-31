"use client";

import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    document.documentElement.classList.add("cursor-ready");

    let mx = 0;
    let my = 0;
    let rx = 0;
    let ry = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
      }
    };

    const tick = () => {
      rx += (mx - rx) * 0.12;
      ry += (my - ry) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
      }
      if (labelRef.current) {
        labelRef.current.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -140%)`;
      }
      raf = requestAnimationFrame(tick);
    };

    const onEnter = () => document.body.classList.add("cursor-hovering");
    const onLeave = () => document.body.classList.remove("cursor-hovering");

    const bindInteractive = () => {
      document.querySelectorAll("a, button, [role='button'], input, textarea, select, .portfolio-card, .h-project").forEach((el) => {
        el.addEventListener("mouseenter", onEnter);
        el.addEventListener("mouseleave", onLeave);
      });
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(tick);
    bindInteractive();

    const observer = new MutationObserver(bindInteractive);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
      document.documentElement.classList.remove("cursor-ready");
      document.body.classList.remove("cursor-hovering");
    };
  }, []);

  return (
    <>
      <div ref={dotRef} id="cursor-dot" aria-hidden />
      <div ref={ringRef} id="cursor-ring" aria-hidden />
      <div ref={labelRef} id="cursor-view-label" aria-hidden>View →</div>
    </>
  );
}
