"use client";

import { useEffect, useRef, useState } from "react";

export default function StatCounter({
  value,
  prefix = "",
  suffix = "",
  label,
}: {
  value: number;
  prefix?: string;
  suffix?: string;
  label?: string;
}) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1500;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            setCount(Math.floor(progress * value * 10) / 10);
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [value]);

  const display = (
    <span ref={ref}>
      {prefix}{count % 1 === 0 ? Math.floor(count) : count.toFixed(1)}{suffix}
    </span>
  );

  if (!label) return display;

  return (
    <div className="text-center">
      <p className="font-display text-4xl md:text-5xl font-bold text-gradient">{display}</p>
      <p className="mt-2 text-sm text-muted">{label}</p>
    </div>
  );
}
