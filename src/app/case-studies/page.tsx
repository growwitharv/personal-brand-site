import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { caseStudies, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Case Studies",
  description: `See how ${siteConfig.name} has helped brands scale with AI, GTM, and performance marketing.`,
};

export default function CaseStudiesPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <SectionHeading
            label="Case Studies"
            title="Results that speak for themselves"
            description="A selection of engagements where strategy, AI, and performance marketing came together to drive measurable growth."
          />

          <div className="mt-16 space-y-12">
            {caseStudies.map((study, index) => (
              <article
                key={study.slug}
                id={study.slug}
                className="card scroll-mt-28"
              >
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
                  <div className="flex h-64 items-center justify-center rounded-xl bg-gradient-to-br from-ink-800 to-ink-900 lg:h-auto">
                    <span className="font-display text-8xl text-gold/10">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <p className="label">{study.category}</p>
                    <h2 className="heading-md mt-3 text-white">
                      {study.title}
                    </h2>
                    <p className="mt-2 text-sm text-ink-500">
                      {study.client}
                    </p>
                    <p className="mt-4 font-display text-2xl text-gold">
                      {study.result}
                    </p>
                    <p className="mt-4 body-md">{study.excerpt}</p>
                    <div className="mt-6">
                      <Button href="/book-consultation" variant="secondary">
                        Discuss a similar project
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Have a project in mind?"
        description="Let's talk about how we can apply these same principles to your brand."
      />
    </>
  );
}
