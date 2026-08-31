import Button from "@/components/ui/Button";

export default function FinalCTA({
  title = "Ready to Start Your Project?",
  sub = "Our experts are ready to help you build something amazing. Share your project details and receive a transparent, detailed estimate tailored to your needs.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="section-padding relative z-10">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="glass rounded-3xl p-10 md:p-16 glow-cyan">
          <p className="label-tag mb-4">Initiate</p>
          <h2 className="section-title text-3xl md:text-4xl">{title}</h2>
          <p className="mt-4 text-muted max-w-xl mx-auto">{sub}</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Button href="/contact" glow size="lg">Get a Quote</Button>
            <Button href="/portfolio" variant="secondary" size="lg">See Our Work</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
