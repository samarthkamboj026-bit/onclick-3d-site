"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Accordion({
  items,
}: {
  items: { q: string; a: string }[];
}) {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="glass rounded-xl overflow-hidden">
          <button
            className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-white/5 transition-colors"
            onClick={() => setOpen(open === i ? null : i)}
          >
            <span className="font-medium pr-4">{item.q}</span>
            <ChevronDown
              size={18}
              className={cn("text-cyan-400 shrink-0 transition-transform", open === i && "rotate-180")}
            />
          </button>
          {open === i && (
            <div className="px-6 pb-4 text-muted leading-relaxed">{item.a}</div>
          )}
        </div>
      ))}
    </div>
  );
}
