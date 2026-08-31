import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import PortfolioShowcase from "@/components/sections/PortfolioShowcase";
import FinalCTA from "@/components/sections/FinalCTA";
import { PAGES } from "@/lib/content";

const page = PAGES.portfolio;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function PortfolioPage() {
  return (
    <>
      <Hero
        tag="Portfolio"
        h1={page.h1}
        sub={page.heroSub}
        cta={page.cta}
        ctaHref="/contact"
      />
      <PortfolioShowcase />
      <FinalCTA />
    </>
  );
}
