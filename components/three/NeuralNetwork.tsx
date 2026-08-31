"use client";

import { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial, Sphere, Line } from "@react-three/drei";
import * as THREE from "three";

function Node({ position, color, size = 0.15 }: { position: [number, number, number]; color: string; size?: number }) {
  const ref = useRef<THREE.Mesh>(null);
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = state.clock.elapsedTime * 0.3;
      ref.current.rotation.y = state.clock.elapsedTime * 0.2;
    }
  });
  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <Sphere ref={ref} args={[size, 32, 32]} position={position}>
        <MeshDistortMaterial color={color} distort={0.3} speed={2} roughness={0.2} metalness={0.8} />
      </Sphere>
    </Float>
  );
}

function Connection({ start, end, color }: { start: THREE.Vector3; end: THREE.Vector3; color: string }) {
  return (
    <Line
      points={[start.toArray(), end.toArray()]}
      color={color}
      transparent
      opacity={0.25}
      lineWidth={1}
    />
  );
}

export default function NeuralNetwork() {
  const groupRef = useRef<THREE.Group>(null);

  const nodes = useMemo(() => {
    const positions: [number, number, number][] = [];
    for (let i = 0; i < 24; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 2.5 + Math.random() * 2;
      positions.push([
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.sin(phi) * Math.sin(theta),
        r * Math.cos(phi),
      ]);
    }
    return positions;
  }, []);

  const colors = ["#06b6d4", "#8b5cf6", "#f97316", "#22d3ee"];

  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = state.clock.elapsedTime * 0.08;
      groupRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.05) * 0.1;
    }
  });

  const nodeVectors = nodes.map((p) => new THREE.Vector3(...p));

  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#06b6d4" />
      <pointLight position={[-10, -5, 5]} intensity={0.6} color="#8b5cf6" />
      <group ref={groupRef}>
        {nodes.map((pos, i) => (
          <Node key={i} position={pos} color={colors[i % colors.length]} size={0.08 + Math.random() * 0.1} />
        ))}
        {nodeVectors.slice(0, 12).map((start, i) => {
          const end = nodeVectors[(i + 3) % nodeVectors.length];
          return <Connection key={i} start={start} end={end} color={colors[i % colors.length]} />;
        })}
        <Node position={[0, 0, 0]} color="#06b6d4" size={0.35} />
      </group>
    </>
  );
}
