import { INDUSTRIES } from "@/lib/constants";

export default function MarqueeStrip() {
  const items = [...INDUSTRIES, ...INDUSTRIES];

  return (
    <section className="relative z-10 py-4 border-y border-white/5 overflow-hidden bg-black/20 backdrop-blur-sm">
      <div className="marquee-track">
        {items.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="mx-8 text-cyan-400/40">◆</span>
          </span>
        ))}
      </div>
    </section>
  );
}
