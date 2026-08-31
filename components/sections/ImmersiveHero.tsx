"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Button from "@/components/ui/Button";
import { REVIEW_COUNT, REVIEW_RATING, SITE } from "@/lib/constants";

const WORDS = ["INNOVATION", "TRANSFORMATION", "AUTOMATION", "GROWTH"];

export default function ImmersiveHero() {
  const [wordIdx, setWordIdx] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = WORDS[wordIdx];
    const timeout = setTimeout(
      () => {
        if (!deleting) {
          if (display.length < word.length) {
            setDisplay(word.slice(0, display.length + 1));
          } else {
            setTimeout(() => setDeleting(true), 1800);
          }
        } else {
          if (display.length > 0) {
            setDisplay(display.slice(0, -1));
          } else {
            setDeleting(false);
            setWordIdx((i) => (i + 1) % WORDS.length);
          }
        }
      },
      deleting ? 45 : 75
    );
    return () => clearTimeout(timeout);
  }, [display, deleting, wordIdx]);

  return (
    <section className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden pointer-events-none">
      {/* Center Est. label — clear of headline columns */}
      <div className="hero-center-label in-view" aria-hidden>
        <span className="hero-cl-line" />
        <span>Est. {SITE.founded}</span>
        <span className="hero-cl-line" />
      </div>

      <div className="relative w-full z-10 px-6 md:px-[6vw] pt-[22vh] pb-[8vh]">
        <div className="hero-bottom max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-10 lg:gap-16 xl:gap-24 items-end">
          {/* Left — headline with reserved typing space */}
          <div className="hero-left min-w-0 pr-0 lg:pr-8">
            <motion.p
              className="text-xs md:text-sm text-muted mb-5 md:mb-7 tracking-[0.28em] uppercase font-semibold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.1 }}
            >
              We are Onclick
            </motion.p>

            <motion.h1
              className="font-display font-bold uppercase tracking-[-0.02em] text-white"
              style={{
                fontSize: "clamp(2.4rem, 6.2vw, 6.4rem)",
                lineHeight: 1.05,
              }}
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.8 }}
            >
              <span className="block mb-1 md:mb-2">Where AI</span>
              <span
                className="block text-gradient min-h-[1.15em] whitespace-nowrap overflow-visible"
                aria-live="polite"
              >
                {display}
                <span className="cursor-blink">|</span>
              </span>
              <span className="block mt-1 md:mt-2">Meets Business</span>
            </motion.h1>
          </div>

          {/* Right — copy + CTAs, spaced clear of left headline */}
          <div className="hero-right flex flex-col gap-7 md:gap-9 pointer-events-auto lg:pl-6 lg:border-l lg:border-white/10 lg:max-w-md lg:justify-self-end">
            <motion.p
              className="text-muted tracking-[0.12em] uppercase text-xs md:text-sm leading-[1.85]"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Intelligent digital solutions that enhance productivity, automate workflows, and accelerate enterprise growth.
            </motion.p>

            <motion.div
              className="flex flex-wrap items-center gap-3 md:gap-4"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Button href="/contact" glow size="lg">Get a Quote</Button>
              <Button href="/about" variant="secondary" size="lg">Know More</Button>
            </motion.div>

            <motion.div
              className="flex items-center gap-3 text-sm text-muted"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <span className="text-2xl font-display font-bold text-white">{REVIEW_RATING}</span>
              <span>
                From <strong className="text-white">{REVIEW_COUNT}</strong> reviews
              </span>
            </motion.div>

            <motion.div
              className="hero-scroll-hint mt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <span className="scroll-line" aria-hidden />
              <span>Scroll to explore</span>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
