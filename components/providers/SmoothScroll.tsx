"use client";

import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expose for scene / other listeners (WebTactics pattern)
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf: number;
    const rafLoop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(rafLoop);
    };
    raf = requestAnimationFrame(rafLoop);

    let lastScroll = 0;
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      window.dispatchEvent(
        new CustomEvent("joxy:lenis-scroll", { detail: { scroll } })
      );
      const vel = Math.abs(scroll - lastScroll);
      lastScroll = scroll;
      if (vel > 80) {
        document.body.classList.add("fast-scroll");
      } else {
        document.body.classList.remove("fast-scroll");
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      delete (window as unknown as { __lenis?: Lenis }).__lenis;
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
