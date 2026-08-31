import { PageContent } from "@/lib/content";
import GlassCard from "@/components/ui/GlassCard";
import FAQ from "./FAQ";

export default function PageContentSections({ page }: { page: PageContent }) {
  return (
    <>
      {page.sections.map((section, i) => (
        <section key={i} className="section-padding relative z-10">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="font-display text-2xl md:text-3xl font-bold mb-6">{section.title}</h2>
            {section.body && <p className="text-muted leading-relaxed mb-6">{section.body}</p>}
            {section.items && (
              <div className="grid sm:grid-cols-2 gap-4">
                {section.items.map((item, j) => (
                  <GlassCard key={j} hover>
                    <h3 className="font-display font-semibold">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted leading-relaxed">{item.desc}</p>
                  </GlassCard>
                ))}
              </div>
            )}
            {section.list && (
              <ul className="space-y-2">
                {section.list.map((item, j) => (
                  <li key={j} className="flex items-start gap-3 text-muted">
                    <span className="text-cyan-400 mt-1">▸</span>
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}
      {page.faqs && page.faqs.length > 0 && <FAQ items={page.faqs} />}
    </>
  );
}
