"use client";

import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function Hero({
  tag,
  h1,
  sub,
  cta,
  ctaSecondary,
  ctaHref = "/contact",
  secondaryHref,
}: {
  tag?: string;
  h1: string;
  sub: string;
  cta: string;
  ctaSecondary?: string;
  ctaHref?: string;
  secondaryHref?: string;
}) {
  return (
    <section className="relative min-h-[90svh] flex items-center overflow-hidden">
      <div className="relative max-w-7xl mx-auto px-6 pt-28 pb-20 w-full z-10">
        <div className="max-w-3xl">
          {tag && (
            <motion.p
              className="font-mono text-xs sm:text-sm text-cyan-400 mb-4 tracking-[0.2em] uppercase"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {tag}
            </motion.p>
          )}
          <motion.h1
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-[1.05] tracking-tight"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
          >
            {h1}
          </motion.h1>
          <motion.p
            className="mt-5 text-base sm:text-lg text-muted max-w-2xl leading-relaxed"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            {sub}
          </motion.p>
          <motion.div
            className="mt-8 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.32 }}
          >
            <Button href={ctaHref} glow size="lg">{cta}</Button>
            {ctaSecondary && (
              <Button href={secondaryHref || "/services"} variant="secondary" size="lg">{ctaSecondary}</Button>
            )}
          </motion.div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#030712] to-transparent pointer-events-none z-10" />
    </section>
  );
}
