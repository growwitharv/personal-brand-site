import type { Metadata } from "next";
import Link from "next/link";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { blogPosts, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights on AI, GTM, sales, and performance marketing by ${siteConfig.name}.`,
};

export default function BlogPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Blog"
            title="Insights & frameworks"
            description="Practical playbooks on AI, go-to-market strategy, sales systems, and performance marketing."
          />

          <div className="mt-16 space-y-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group flex flex-col gap-4 md:flex-row md:items-center md:justify-between"
              >
                <div className="flex-1">
                  <p className="label">{post.category}</p>
                  <h2 className="mt-2 text-xl font-medium text-white group-hover:text-gold transition-colors md:text-2xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 body-md">{post.excerpt}</p>
                </div>
                <div className="shrink-0 text-right">
                  <p className="text-sm text-ink-500">
                    {new Date(post.date).toLocaleDateString("en-US", {
                      month: "short",
                      day: "numeric",
                      year: "numeric",
                    })}
                  </p>
                  <p className="mt-1 text-xs text-ink-600">{post.readTime}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
