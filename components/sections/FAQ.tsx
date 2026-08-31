import { HOME_FAQS } from "@/lib/constants";
import Accordion from "@/components/ui/Accordion";

export default function FAQ({ items = HOME_FAQS }: { items?: { q: string; a: string }[] }) {
  return (
    <section className="section-padding relative z-10" id="faqs">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-10">
          <p className="label-tag mb-3">Questions</p>
          <h2 className="section-title text-3xl md:text-4xl">FAQ</h2>
          <p className="mt-3 text-sm text-muted">We have answers.</p>
        </div>
        <Accordion items={items} />
      </div>
    </section>
  );
}
