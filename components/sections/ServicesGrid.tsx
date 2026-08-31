import { SERVICES } from "@/lib/constants";
import GlassCard from "@/components/ui/GlassCard";
import Link from "next/link";
import {
  Code2, Brain, Cpu, Bot, Workflow, Globe, Smartphone, Palette, Database, Lightbulb,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Code2, Brain, Cpu, Bot, Workflow, Globe, Smartphone, Palette, Database, Lightbulb,
};

export default function ServicesGrid({ limit }: { limit?: number }) {
  const items = limit ? SERVICES.slice(0, limit) : SERVICES;

  return (
    <section className="section-padding relative z-10" id="services">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-3">Capabilities</p>
          <h2 className="font-display text-3xl md:text-4xl font-bold">End-to-End Engineering Services</h2>
          <p className="mt-4 text-muted max-w-2xl mx-auto">
            From autonomous AI agents to cloud-native platforms — modular, scalable capabilities for high-growth enterprises.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {items.map((s) => {
            const Icon = ICONS[s.icon] || Code2;
            return (
              <Link key={s.slug} href={`/services/${s.slug}`}>
                <GlassCard hover className="h-full">
                  <Icon className="text-cyan-400 mb-3" size={24} />
                  <h3 className="font-display font-semibold text-base">{s.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{s.desc}</p>
                </GlassCard>
              </Link>
            );
          })}
        </div>
        <div className="text-center mt-8">
          <Link href="/services" className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
