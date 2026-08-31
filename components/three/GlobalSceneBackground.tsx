"use client";

import dynamic from "next/dynamic";

const SceneWrapper = dynamic(() => import("./SceneWrapper"), { ssr: false, loading: () => null });

export default function GlobalSceneBackground() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none" aria-hidden>
      <div className="absolute inset-0 bg-[#030712]" />
      <div className="absolute inset-0">
        <SceneWrapper className="w-full h-full" />
      </div>
      {/* Soft vignette so text stays readable — scene stays fully visible */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/25 via-transparent to-[#030712]/75" />
    </div>
  );
}
