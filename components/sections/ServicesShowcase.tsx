"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { SERVICES } from "@/lib/constants";
import {
  Code2, Brain, Cpu, Bot, Workflow, Globe, Smartphone, Palette, Database, Lightbulb,
  type LucideIcon,
} from "lucide-react";

const ICONS: Record<string, LucideIcon> = {
  Code2, Brain, Cpu, Bot, Workflow, Globe, Smartphone, Palette, Database, Lightbulb,
};

export default function ServicesShowcase() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding relative z-10" id="services" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <p className="label-tag mb-4">Capabilities</p>
          <h2 className="section-title">Our Services</h2>
          <p className="mt-4 text-muted max-w-xl">
            Explore our professional software, AI, automation, web, and mobile app services designed to help businesses build and scale digital products.
          </p>
        </div>

        <div className="space-y-0 divide-y divide-white/5">
          {SERVICES.map((service, i) => {
            const Icon = ICONS[service.icon] || Code2;
            const num = String(i + 1).padStart(2, "0");
            return (
              <motion.div
                key={service.slug}
                initial={{ opacity: 0, x: -20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: i * 0.06 }}
              >
                <Link href={`/services/${service.slug}`} className="service-row group">
                  <span className="service-num">{num} {"//"}</span>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1">
                      <Icon className="text-cyan-400 shrink-0 group-hover:scale-110 transition-transform" size={20} />
                      <h3 className="font-display text-xl md:text-2xl font-semibold group-hover:text-cyan-400 transition-colors">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-sm text-muted leading-relaxed pl-8">{service.desc}</p>
                    <div className="flex gap-2 mt-2 pl-8">
                      {service.tags.map((tag) => (
                        <span key={tag} className="tag-pill">{tag}</span>
                      ))}
                    </div>
                  </div>
                  <span className="service-arrow hidden md:block">→</span>
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link href="/services" className="inline-flex items-center gap-2 text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors">
            View all services →
          </Link>
        </div>
      </div>
    </section>
  );
}
