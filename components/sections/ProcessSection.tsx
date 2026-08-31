"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { PROCESS_STEPS } from "@/lib/constants";

export default function ProcessSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding relative z-10 bg-white/[0.02]" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 text-center">
          <p className="label-tag mb-4">How We Work</p>
          <h2 className="section-title">Our Process</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">
            Fast, Iterative & Result-Driven. We bridge the gap between vision and reality through an iterative Agile workflow.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROCESS_STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              className="process-card"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: i * 0.12 }}
            >
              <span className="process-num">{step.num} {"//"}</span>
              <h3 className="font-display text-lg font-semibold mt-4">{step.title}</h3>
              <p className="mt-2 text-sm text-muted leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
