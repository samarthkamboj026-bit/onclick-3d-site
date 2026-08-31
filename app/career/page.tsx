import { Metadata } from "next";
import PageTemplate from "@/components/sections/PageTemplate";
import { PAGES } from "@/lib/content";

const page = PAGES.career;

export const metadata: Metadata = {
  title: page.metaTitle,
  description: page.metaDescription,
};

export default function CareerPage() {
  return <PageTemplate page={page} tag="Careers" />;
}
