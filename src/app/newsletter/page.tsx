import type { Metadata } from "next";
import NewsletterContent from "./NewsletterContent";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Newsletter",
  description: `Subscribe to ${siteConfig.name}'s newsletter for weekly insights on AI, GTM, and growth.`,
};

export default function NewsletterPage() {
  return <NewsletterContent />;
}
