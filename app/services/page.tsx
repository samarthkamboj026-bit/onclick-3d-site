import { Metadata } from "next";
import Hero from "@/components/sections/Hero";
import ServicesGrid from "@/components/sections/ServicesGrid";
import FAQ from "@/components/sections/FAQ";
import FinalCTA from "@/components/sections/FinalCTA";
import { PAGES } from "@/lib/content";

const page = PAGES.services;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function ServicesPage() {
  return (
    <>
      <Hero tag="Services" h1={page.h1} sub={page.heroSub} cta={page.cta} />
      <ServicesGrid />
      <FAQ items={page.faqs} />
      <FinalCTA />
    </>
  );
}
