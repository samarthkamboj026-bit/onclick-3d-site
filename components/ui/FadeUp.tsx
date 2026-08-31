"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export default function FadeUp({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add("in-view"), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.12, rootMargin: "-40px" }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} className={cn("fade-up", className)}>
      {children}
    </div>
  );
}
