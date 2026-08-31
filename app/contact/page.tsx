import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PageContentSections from "@/components/sections/PageContentSections";
import FinalCTA from "@/components/sections/FinalCTA";
import GlassCard from "@/components/ui/GlassCard";
import Button from "@/components/ui/Button";
import { PAGES } from "@/lib/content";
import { SITE } from "@/lib/constants";

const page = PAGES.contact;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ContactPage() {
  return (
    <>
      <Hero tag="Contact" h1={page.h1} sub={page.heroSub} cta={page.cta} ctaHref="#form" />
      <section className="section-padding relative z-10" id="form">
        <div className="max-w-5xl mx-auto px-6 grid lg:grid-cols-2 gap-10">
          <GlassCard>
            <h2 className="font-display text-xl font-bold mb-6">Project Inquiry</h2>
            <form className="space-y-4">
              {[
                { label: "Full Name", type: "text", placeholder: "e.g., Sarah Jenkins" },
                { label: "Corporate Email", type: "email", placeholder: "e.g., sjenkins@enterprise.com" },
                { label: "Phone / WhatsApp", type: "tel", placeholder: "+1 (555) 019-2834" },
                { label: "Company Name", type: "text", placeholder: "e.g., NextGen Logistics Inc." },
              ].map((f) => (
                <div key={f.label}>
                  <label className="block text-sm text-muted mb-1">{f.label}</label>
                  <input
                    type={f.type}
                    placeholder={f.placeholder}
                    className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent border border-white/10 focus:border-cyan-500/50 outline-none transition-colors"
                  />
                </div>
              ))}
              <div>
                <label className="block text-sm text-muted mb-1">Project Objective</label>
                <select className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent border border-white/10 focus:border-cyan-500/50 outline-none">
                  <option>Custom Enterprise Software Development</option>
                  <option>AI / Machine Learning Solution</option>
                  <option>Cloud Architecture Modernization</option>
                  <option>Mobile Application Engineering</option>
                  <option>Dedicated Engineering Team</option>
                </select>
              </div>
              <div>
                <label className="block text-sm text-muted mb-1">Project Scope & Requirements</label>
                <textarea
                  rows={4}
                  placeholder="Outline your goals, integrations, and constraints..."
                  className="w-full glass rounded-xl px-4 py-3 text-sm bg-transparent border border-white/10 focus:border-cyan-500/50 outline-none resize-none"
                />
              </div>
              <Button glow className="w-full">Request Technical Discovery Call →</Button>
            </form>
          </GlassCard>

          <div className="space-y-6">
            <GlassCard>
              <h3 className="font-display font-semibold mb-3">Corporate Headquarters</h3>
              <p className="text-sm text-muted leading-relaxed">{SITE.address}</p>
              <p className="mt-3 text-sm text-muted">Phone: {SITE.phone}</p>
              <p className="text-sm text-muted">Email: {SITE.email}</p>
            </GlassCard>
            <GlassCard>
              <h3 className="font-display font-semibold mb-3">Operating Hours</h3>
              <p className="text-sm text-muted">Monday – Friday: 9:30 AM – 6:30 PM IST</p>
              <p className="mt-2 text-sm text-muted">North America overlap: 7:30 PM – 11:30 PM IST</p>
            </GlassCard>
          </div>
        </div>
      </section>
      <PageContentSections page={{ ...page, sections: page.sections.slice(1) }} />
      <FinalCTA />
    </>
  );
}
