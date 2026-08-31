"use client";

import { useMemo, useRef } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

/** Geometric 3D brand mark — cursor + click burst (not the header wordmark). */
export default function OnclickMark3D() {
  const group = useRef<THREE.Group>(null);

  const cursorGeo = useMemo(() => {
    const shape = new THREE.Shape();
    // Stylized pointer (Onclick cursor mark)
    shape.moveTo(0, 1.6);
    shape.lineTo(0.15, 0.15);
    shape.lineTo(0.55, 0.55);
    shape.lineTo(1.35, -1.35);
    shape.lineTo(0.35, -0.35);
    shape.lineTo(0.05, -0.75);
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.35,
      bevelEnabled: true,
      bevelThickness: 0.06,
      bevelSize: 0.05,
      bevelSegments: 3,
      curveSegments: 8,
    });
    geo.center();
    return geo;
  }, []);

  const burstGeo = useMemo(() => {
    const shape = new THREE.Shape();
    const spikes = 8;
    for (let i = 0; i < spikes * 2; i++) {
      const a = (i / (spikes * 2)) * Math.PI * 2 - Math.PI / 2;
      const r = i % 2 === 0 ? 0.55 : 0.22;
      const x = Math.cos(a) * r;
      const y = Math.sin(a) * r;
      if (i === 0) shape.moveTo(x, y);
      else shape.lineTo(x, y);
    }
    shape.closePath();
    const geo = new THREE.ExtrudeGeometry(shape, {
      depth: 0.18,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 2,
    });
    geo.center();
    return geo;
  }, []);

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    group.current.rotation.y = Math.sin(t * 0.45) * 0.25;
    group.current.rotation.x = Math.cos(t * 0.35) * 0.12;
  });

  return (
    <group ref={group} scale={1.35}>
      {/* Soft glass plate behind mark */}
      <mesh position={[0, 0, -0.35]} rotation={[0, 0, 0]}>
        <circleGeometry args={[1.55, 48]} />
        <meshStandardMaterial
          color="#0a1628"
          transparent
          opacity={0.35}
          metalness={0.6}
          roughness={0.25}
          emissive="#06b6d4"
          emissiveIntensity={0.15}
        />
      </mesh>

      {/* Orbit ring */}
      <mesh rotation={[Math.PI / 2.2, Math.PI / 8, 0]}>
        <torusGeometry args={[1.35, 0.035, 16, 96]} />
        <meshStandardMaterial
          color="#06b6d4"
          emissive="#06b6d4"
          emissiveIntensity={1.4}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>
      <mesh rotation={[Math.PI / 2.6, -Math.PI / 10, 0.4]}>
        <torusGeometry args={[1.55, 0.02, 12, 80]} />
        <meshStandardMaterial
          color="#8b5cf6"
          emissive="#8b5cf6"
          emissiveIntensity={1.1}
          metalness={0.7}
          roughness={0.25}
          transparent
          opacity={0.85}
        />
      </mesh>

      {/* Cursor body */}
      <mesh geometry={cursorGeo} position={[-0.15, 0.05, 0.1]} rotation={[0, 0, -0.35]}>
        <meshStandardMaterial
          color="#e2f5fa"
          emissive="#06b6d4"
          emissiveIntensity={0.55}
          metalness={0.85}
          roughness={0.18}
        />
      </mesh>

      {/* Click burst */}
      <mesh geometry={burstGeo} position={[0.55, 0.55, 0.25]}>
        <meshStandardMaterial
          color="#ffffff"
          emissive="#c084fc"
          emissiveIntensity={2.2}
          metalness={0.4}
          roughness={0.15}
        />
      </mesh>
      <mesh position={[0.55, 0.55, 0.35]}>
        <sphereGeometry args={[0.12, 24, 24]} />
        <meshStandardMaterial
          color="#fff"
          emissive="#22d3ee"
          emissiveIntensity={2.8}
          toneMapped={false}
        />
      </mesh>

      {/* Circuit node dots */}
      {[
        [-1.05, 0.35, 0],
        [-0.95, -0.25, 0.05],
        [-0.7, 0.7, -0.05],
      ].map((p, i) => (
        <mesh key={i} position={p as [number, number, number]}>
          <sphereGeometry args={[0.06, 16, 16]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#22d3ee"
            emissiveIntensity={1.8}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}
