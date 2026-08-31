"use client";

import { cn } from "@/lib/utils";
import { ReactNode } from "react";

export default function GlassCard({
  children,
  className,
  hover = false,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cn(
        "glass rounded-2xl p-6 transition-all duration-300",
        hover && "hover:border-cyan-500/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/10",
        className
      )}
    >
      {children}
    </div>
  );
}
