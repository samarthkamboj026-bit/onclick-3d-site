import { Metadata } from "next";
import PageTemplate from "@/components/sections/PageTemplate";
import { PAGES } from "@/lib/content";

const page = PAGES.about;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function AboutPage() {
  return <PageTemplate page={page} tag="About Us" />;
}
