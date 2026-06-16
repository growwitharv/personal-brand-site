import Link from "next/link";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import {
  blogPosts,
  caseStudies,
  expertise,
  siteConfig,
  stats,
  testimonials,
} from "@/lib/site-data";

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="section-padding relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-gold/10 via-transparent to-transparent" />
        <div className="container-narrow relative">
          <div className="max-w-3xl animate-fade-in">
            <p className="label mb-6">{siteConfig.title}</p>
            <h1 className="heading-xl text-white">
              Growth systems for brands that want to{" "}
              <span className="text-gradient">scale with clarity</span>
            </h1>
            <p className="mt-6 max-w-xl body-lg">{siteConfig.tagline}</p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Button href="/book-consultation">Book a Consultation</Button>
              <Button href="/case-studies" variant="secondary">
                View Case Studies
              </Button>
            </div>
          </div>

          <div className="mt-20 grid grid-cols-2 gap-8 border-t border-ink-800 pt-12 md:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-display text-3xl font-medium text-gold md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-ink-500">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="section-padding border-t border-ink-800/50 bg-ink-900/30">
        <div className="container-narrow">
          <SectionHeading
            label="Expertise"
            title="Where strategy meets execution"
            description="I work at the intersection of AI, go-to-market, sales, and performance marketing — building systems that compound."
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {expertise.map((item) => (
              <div key={item.title} className="card group">
                <span className="text-2xl text-gold">{item.icon}</span>
                <h3 className="mt-4 text-xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 body-md">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Preview */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              label="Results"
              title="Case studies"
              description="Real outcomes from brands I've helped scale."
            />
            <Button href="/case-studies" variant="ghost" className="shrink-0">
              View all →
            </Button>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {caseStudies.map((study) => (
              <Link
                key={study.slug}
                href={`/case-studies#${study.slug}`}
                className="card group block"
              >
                <div className="mb-6 flex h-48 items-center justify-center rounded-xl bg-gradient-to-br from-ink-800 to-ink-900">
                  <span className="font-display text-5xl text-gold/20">
                    {study.category.split(" · ")[0].charAt(0)}
                  </span>
                </div>
                <p className="label">{study.category}</p>
                <h3 className="mt-2 text-lg font-medium text-white group-hover:text-gold transition-colors">
                  {study.title}
                </h3>
                <p className="mt-2 text-sm text-gold">{study.result}</p>
                <p className="mt-3 body-md line-clamp-2">{study.excerpt}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="section-padding border-t border-ink-800/50">
        <div className="container-narrow">
          <SectionHeading
            label="Testimonials"
            title="What clients say"
            align="center"
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {testimonials.map((t, i) => (
              <blockquote key={i} className="card">
                <p className="body-md italic text-ink-300">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <footer className="mt-6 text-sm font-medium text-gold">
                  — {t.author}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Preview */}
      <section className="section-padding border-t border-ink-800/50 bg-ink-900/30">
        <div className="container-narrow">
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              label="Insights"
              title="From the blog"
              description="Frameworks and playbooks on AI, GTM, sales, and performance marketing."
            />
            <Button href="/blog" variant="ghost" className="shrink-0">
              Read all →
            </Button>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card group block"
              >
                <p className="label">{post.category}</p>
                <h3 className="mt-3 text-lg font-medium text-white group-hover:text-gold transition-colors">
                  {post.title}
                </h3>
                <p className="mt-3 body-md line-clamp-2">{post.excerpt}</p>
                <p className="mt-4 text-xs text-ink-500">
                  {new Date(post.date).toLocaleDateString("en-US", {
                    month: "long",
                    day: "numeric",
                    year: "numeric",
                  })}{" "}
                  · {post.readTime}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
