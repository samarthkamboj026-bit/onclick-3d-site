"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const handler = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
    };
    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <>
      <div className="scroll-progress-bar" style={{ width: `${progress}%` }} aria-hidden />
      <div className="letterbox letterbox-top" aria-hidden />
      <div className="letterbox letterbox-bottom" aria-hidden />
    </>
  );
}
