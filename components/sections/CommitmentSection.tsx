"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { WHY_US } from "@/lib/constants";

export default function CommitmentSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding relative z-10" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <p className="label-tag mb-4">We are Onclick</p>
            <h2 className="section-title">Our Commitment to Client Satisfaction</h2>
            <p className="mt-6 text-muted leading-relaxed">
              At Onclick Innovations, your success is our mission. Every project we undertake is driven by a deep understanding of your business goals, user needs, and market demands. From our Mohali, Punjab base, we build software, AI, and automation solutions that support growth, trust, and long-term value.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {WHY_US.map((item, i) => (
              <motion.div
                key={item}
                className="why-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.07 }}
              >
                <span className="text-cyan-400 text-xs font-mono">★</span>
                <span className="text-sm font-medium">{item}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
