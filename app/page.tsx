import ImmersiveHero from "@/components/sections/ImmersiveHero";
import MarqueeStrip from "@/components/sections/MarqueeStrip";
import ImpactSection from "@/components/sections/ImpactSection";
import ServicesShowcase from "@/components/sections/ServicesShowcase";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import CommitmentSection from "@/components/sections/CommitmentSection";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <ImmersiveHero />
      <MarqueeStrip />
      <ImpactSection />
      <ServicesShowcase />
      <ProcessSection />
      <PortfolioShowcase />
      <CommitmentSection />
      <FAQ />
      <FinalCTA />
    </>
  );
}
