"use client";

import dynamic from "next/dynamic";

const ImmersiveScene = dynamic(() => import("./ImmersiveScene"), { ssr: false, loading: () => null });

export default function SceneWrapper({ className }: { className?: string }) {
  return (
    <div className={className}>
      <ImmersiveScene />
    </div>
  );
}
