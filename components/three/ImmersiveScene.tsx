"use client";

import { useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import { useMouse } from "@/components/providers/MouseProvider";
import OnclickMark3D from "./OnclickMark3D";

const TUNNEL_DEPTH = 420;

function Particles({ count = 1400 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null);
  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 80;
      arr[i * 3 + 1] = (Math.random() - 0.5) * 50;
      arr[i * 3 + 2] = -Math.random() * TUNNEL_DEPTH;
    }
    return arr;
  }, [count]);

  useFrame(({ clock }) => {
    if (!ref.current) return;
    ref.current.rotation.y = clock.elapsedTime * 0.02;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.08}
        color="#67e8f9"
        transparent
        opacity={0.55}
        sizeAttenuation
        depthWrite={false}
      />
    </points>
  );
}

function WireRings() {
  const group = useRef<THREE.Group>(null);
  useFrame(() => {
    if (!group.current) return;
    group.current.children.forEach((child, i) => {
      child.rotation.z += 0.002 + i * 0.0008;
      child.rotation.x += 0.001 * (i % 2 === 0 ? 1 : -1);
    });
  });
  return (
    <group ref={group}>
      {[4.2, 6.5, 9, 12].map((r, i) => (
        <mesh key={i} rotation={[Math.PI / 2 + i * 0.12, i * 0.2, 0]}>
          <torusGeometry args={[r, 0.015, 8, 128]} />
          <meshBasicMaterial
            color={i % 2 === 0 ? "#06b6d4" : "#8b5cf6"}
            transparent
            opacity={0.22 - i * 0.03}
          />
        </mesh>
      ))}
    </group>
  );
}

function WireCore() {
  const ref = useRef<THREE.Mesh>(null);
  useFrame(() => {
    if (!ref.current) return;
    ref.current.rotation.x += 0.003;
    ref.current.rotation.y += 0.005;
  });
  return (
    <mesh ref={ref} scale={2.4}>
      <icosahedronGeometry args={[1, 1]} />
      <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.18} />
    </mesh>
  );
}

function ScrollDrivenWorld() {
  const { camera, scene } = useThree();
  const { mouse, scrollProgress, scrollVelocity } = useMouse();
  const logoRef = useRef<THREE.Group>(null);
  const mouseLerp = useRef({ x: 0, y: 0 });
  const progressLerp = useRef(0);
  const velLerp = useRef(0);
  const fogColors = useMemo(
    () => [
      new THREE.Color("#030712"),
      new THREE.Color("#06101f"),
      new THREE.Color("#0a0620"),
      new THREE.Color("#041018"),
    ],
    []
  );

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    mouseLerp.current.x += (mouse.x - mouseLerp.current.x) * 0.06;
    mouseLerp.current.y += (mouse.y - mouseLerp.current.y) * 0.06;
    progressLerp.current += (scrollProgress - progressLerp.current) * 0.08;
    velLerp.current += (scrollVelocity - velLerp.current) * 0.12;

    const progress = progressLerp.current;
    const mx = mouseLerp.current.x;
    const my = mouseLerp.current.y;
    const vel = velLerp.current;

    // Camera tunnel — WebTactics pattern
    const targetZ = 18 - progress * TUNNEL_DEPTH;
    camera.position.z += (targetZ - camera.position.z) * 0.1;
    camera.position.x = mx * 2.0;
    camera.position.y = my * 1.6;

    const baseFov = 38;
    const targetFov = baseFov + Math.min(Math.abs(vel) * 0.12, 18);
    const perspective = camera as THREE.PerspectiveCamera;
    perspective.fov += (targetFov - perspective.fov) * 0.1;
    perspective.updateProjectionMatrix();

    const absVel = Math.abs(vel);
    const shake = absVel > 12 ? (Math.random() - 0.5) * Math.min(absVel * 0.0008, 0.04) : 0;
    const tunnelRoll = Math.sin(progress * Math.PI * 3) * 0.03;
    camera.rotation.z = shake + tunnelRoll;
    camera.rotation.x = my * 0.04;

    if (scene.fog && "color" in scene.fog) {
      const idx = Math.min(Math.floor(progress * fogColors.length), fogColors.length - 1);
      const next = Math.min(idx + 1, fogColors.length - 1);
      const ft = progress * fogColors.length - idx;
      (scene.fog as THREE.FogExp2).color.lerpColors(fogColors[idx], fogColors[next], ft);
    }

    if (logoRef.current) {
      let lX = 0;
      let lY = Math.sin(t * 0.6) * 0.3;
      if (progress > 0.02) {
        lX = Math.sin(progress * Math.PI * 5) * 7;
        lY = Math.cos(progress * Math.PI * 3) * 3 + Math.sin(t * 0.6) * 0.4;
      }
      const lZ = camera.position.z - 22;
      logoRef.current.position.x += (lX + mx * 1.5 - logoRef.current.position.x) * 0.05;
      logoRef.current.position.y += (lY + my * 1.5 - logoRef.current.position.y) * 0.05;
      logoRef.current.position.z += (lZ - logoRef.current.position.z) * 0.08;
      logoRef.current.rotation.y = Math.sin(t * 0.5) * 0.3 + mx * 0.25 + progress * Math.PI * 1.2;
      logoRef.current.rotation.x = my * 0.25 + Math.sin(progress * Math.PI * 2) * 0.35;
      logoRef.current.rotation.z = Math.cos(t * 0.3) * 0.1;
    }
  });

  return (
    <>
      <fogExp2 attach="fog" args={["#030712", 0.012]} />
      <color attach="background" args={["#030712"]} />
      <ambientLight intensity={0.35} />
      <pointLight position={[8, 6, 4]} intensity={1.4} color="#06b6d4" />
      <pointLight position={[-8, -4, 2]} intensity={0.9} color="#8b5cf6" />
      <pointLight position={[0, 4, -10]} intensity={0.7} color="#f97316" />

      <group ref={logoRef} position={[0, 0, -4]}>
        <Float speed={1.4} rotationIntensity={0.15} floatIntensity={0.4}>
          <OnclickMark3D />
        </Float>
        <WireCore />
        <WireRings />
      </group>

      <Particles count={900} />
    </>
  );
}

export default function ImmersiveScene() {
  return (
    <Canvas
      className="!absolute inset-0 w-full h-full"
      dpr={[1, 1.75]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      camera={{ position: [0, 0, 18], fov: 38, near: 0.1, far: 800 }}
    >
      <ScrollDrivenWorld />
    </Canvas>
  );
}
