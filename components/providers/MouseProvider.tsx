"use client";

import { createContext, useContext, useState, useEffect, useRef, ReactNode } from "react";

type MouseContextType = {
  mouse: { x: number; y: number };
  scrollProgress: number;
  scrollVelocity: number;
};

const MouseContext = createContext<MouseContextType>({
  mouse: { x: 0, y: 0 },
  scrollProgress: 0,
  scrollVelocity: 0,
});

export function MouseProvider({ children }: { children: ReactNode }) {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scrollProgress, setScrollProgress] = useState(0);
  const [scrollVelocity, setScrollVelocity] = useState(0);
  const lastScroll = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      });
    };

    const applyScroll = (scrollY: number) => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(h > 0 ? Math.max(0, Math.min(scrollY / h, 1)) : 0);
      setScrollVelocity(scrollY - lastScroll.current);
      lastScroll.current = scrollY;
    };

    const onScroll = () => applyScroll(window.scrollY);

    const onLenis = (e: Event) => {
      const detail = (e as CustomEvent<{ scroll: number }>).detail;
      if (detail && typeof detail.scroll === "number") applyScroll(detail.scroll);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("joxy:lenis-scroll", onLenis as EventListener);
    onScroll();

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("joxy:lenis-scroll", onLenis as EventListener);
    };
  }, []);

  return (
    <MouseContext.Provider value={{ mouse, scrollProgress, scrollVelocity }}>
      {children}
    </MouseContext.Provider>
  );
}

export function useMouse() {
  return useContext(MouseContext);
}
