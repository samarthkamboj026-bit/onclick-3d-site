import { Metadata } from "next";
import { notFound } from "next/navigation";
import PageTemplate from "@/components/sections/PageTemplate";
import { PAGES, getAllServiceSlugs } from "@/lib/content";

type Props = { params: { slug: string } };

export function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }));
}

export function generateMetadata({ params }: Props): Metadata {
  const page = PAGES[params.slug];
  if (!page) return {};
  return { title: page.metaTitle, description: page.metaDescription };
}

export default function ServicePage({ params }: Props) {
  const page = PAGES[params.slug];
  if (!page) notFound();
  return <PageTemplate page={page} tag={page.slug === "openclaw" ? "OpenCLAW AI" : "Services"} />;
}
