import { CASE_STUDIES } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";

export default function CaseStudies() {
  return (
    <section className="section-padding relative z-10" id="portfolio">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-violet-400 mb-3">Portfolio</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">Production Deployments</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">Real platforms built for measurable impact across AI, SaaS, healthcare, and logistics.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CASE_STUDIES.map((c) => (
            <GlassCard key={c.name} hover>
              <p className="font-mono text-[10px] uppercase tracking-widest text-orange-400">{c.category}</p>
              <h3 className="font-display text-xl font-semibold mt-2">{c.name}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{c.desc}</p>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/portfolio" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
            Full case studies →
          </Link>
        </div>
      </div>
    </section>
  );
}
