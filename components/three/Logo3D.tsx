"use client";

/** CSS 3D animated Onclick logo — torus O + click dot */
export default function Logo3D({ size = 44 }: { size?: number }) {
  return (
    <div
      className="logo-3d-wrap shrink-0"
      style={{ width: size, height: size }}
      aria-hidden
    >
      <div className="logo-3d-scene">
        <div className="logo-3d-ring" />
        <div className="logo-3d-core" />
        <div className="logo-3d-arrow" />
      </div>
    </div>
  );
}
