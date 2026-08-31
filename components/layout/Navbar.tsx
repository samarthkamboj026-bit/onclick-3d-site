"use client";

import { useState, useEffect, useRef } from "react";
import { Menu, X } from "lucide-react";
import Button from "@/components/ui/Button";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { LOGO_SRC } from "@/lib/logoAsset";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScroll = useRef(0);

  useEffect(() => {
    const handler = () => {
      const y = window.scrollY;
      setScrolled(y > 40);
      setHidden(y > lastScroll.current && y > 200);
      lastScroll.current = y;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "glass-nav py-3" : "py-5 bg-transparent",
        hidden ? "-translate-y-full" : "translate-y-0"
      )}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-[5vw] flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2.5 group shrink-0" aria-label="Onclick Innovations home">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={LOGO_SRC}
            alt="Onclick Innovations"
            width={200}
            height={72}
            className="h-9 md:h-11 w-auto object-contain drop-shadow-[0_0_12px_rgba(6,182,212,0.35)]"
          />
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="nav-link text-xs uppercase tracking-[0.2em] text-muted hover:text-white transition-colors relative pb-1"
            >
              {link.label}
            </Link>
          ))}
          <Button href="/contact" glow size="sm">Get a Quote</Button>
        </div>

        <button className="md:hidden text-white min-w-[44px] min-h-[44px] flex items-center justify-center" onClick={() => setOpen(!open)} aria-label="Toggle menu">
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {open && (
        <div className="md:hidden glass mx-4 mt-2 rounded-xl p-4 space-y-3">
          {NAV_LINKS.map((link) => (
            <Link key={link.href} href={link.href} className="block text-sm uppercase tracking-wider text-muted hover:text-white py-2" onClick={() => setOpen(false)}>
              {link.label}
            </Link>
          ))}
          <Button href="/contact" glow className="w-full">Get a Quote</Button>
        </div>
      )}
    </header>
  );
}
