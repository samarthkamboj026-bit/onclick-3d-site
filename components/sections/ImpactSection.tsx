"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STATS } from "@/lib/constants";
import StatCounter from "@/components/ui/StatCounter";

export default function ImpactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="section-padding relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <p className="label-tag mb-4">Our Impact</p>
            <h2 className="section-title">
              Crafting Digital
              <br />
              <span className="text-gradient">Realities</span>
            </h2>
            <p className="mt-6 text-muted leading-relaxed max-w-md">
              Future-Ready AI & Software Solutions for Modern Businesses. From AI automation to enterprise software, we create intelligent digital systems tailored for real-world business success.
            </p>
            <p className="mt-4 text-sm text-muted/80 italic max-w-md">
              &ldquo;To put it simply — we turn complex business challenges into scalable digital products, from advanced AI integrations to custom enterprise architectures.&rdquo;
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                className="stat-card"
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-gradient">
                  {inView ? (
                    <StatCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
                  ) : (
                    `0${stat.suffix || ""}`
                  )}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
