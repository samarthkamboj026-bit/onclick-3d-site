import { SITE, SERVICES } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-[#030712]/80 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-1">
          <p className="font-display text-xl font-bold">onclick<span className="text-gradient">.</span></p>
          <p className="mt-3 text-sm text-muted leading-relaxed">Where AI Innovation Meets Business Transformation.</p>
          <p className="mt-4 text-sm text-muted">{SITE.address}</p>
          <p className="mt-2 text-sm text-muted">{SITE.phone}</p>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">Services</p>
          <ul className="space-y-2">
            {SERVICES.slice(0, 5).map((s) => (
              <li key={s.slug}>
                <Link href={`/services/${s.slug}`} className="text-sm text-muted hover:text-white transition-colors">{s.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">Company</p>
          <ul className="space-y-2">
            {[
              { label: "About", href: "/about" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Technology", href: "/technology" },
              { label: "Careers", href: "/career" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted hover:text-white transition-colors">{l.label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="font-mono text-xs uppercase tracking-widest text-cyan-400 mb-4">Connect</p>
          <p className="text-sm text-muted">{SITE.email}</p>
          <p className="mt-4 text-xs text-muted/70">© {new Date().getFullYear()} Onclick Innovations Pvt. Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
