"use client";

import Hero from "./Hero";
import PageContentSections from "./PageContentSections";
import FinalCTA from "./FinalCTA";
import { PageContent } from "@/lib/content";

export default function PageTemplate({ page, tag }: { page: PageContent; tag?: string }) {
  return (
    <>
      <Hero
        tag={tag || "Onclick Innovations"}
        h1={page.h1}
        sub={page.heroSub}
        cta={page.cta}
        ctaSecondary={page.ctaSecondary}
        secondaryHref={page.slug === "openclaw" ? "#use-cases" : undefined}
      />
      <PageContentSections page={page} />
      <FinalCTA />
    </>
  );
}
