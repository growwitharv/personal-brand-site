import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";
import { expertise, siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — ${siteConfig.title}`,
};

export default function AboutPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="label mb-4">About</p>
              <h1 className="heading-xl text-white">
                Building growth systems that{" "}
                <span className="text-gradient">actually work</span>
              </h1>
            </div>
            <div className="space-y-6 body-lg">
              <p>
                I&apos;m {siteConfig.name}, {siteConfig.title.toLowerCase()} and{" "}
                {siteConfig.agency.role} of{" "}
                <a
                  href={siteConfig.agency.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold hover:underline"
                >
                  {siteConfig.agency.name}
                </a>
                , a creative agency blending human insight with AI intelligence.
              </p>
              <p>
                Over the past decade, I&apos;ve helped brands across SaaS, D2C,
                and agency verticals build go-to-market strategies, scale
                performance marketing, and integrate AI into their growth
                engines.
              </p>
              <p>
                My approach is simple: strategy first, systems second, scale
                third. No vanity metrics. No fluff. Just measurable growth.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-ink-800/50">
        <div className="container-narrow">
          <SectionHeading
            label="Philosophy"
            title="How I work"
            description="Every engagement follows the same principles — clarity, accountability, and compounding results."
          />
          <div className="mt-16 grid gap-8 md:grid-cols-3">
            {[
              {
                step: "01",
                title: "Diagnose",
                text: "We audit your current GTM, sales, and marketing systems to find the highest-leverage gaps.",
              },
              {
                step: "02",
                title: "Design",
                text: "I build a tailored roadmap — positioning, channels, AI workflows, and KPIs aligned to your goals.",
              },
              {
                step: "03",
                title: "Deploy",
                text: "We execute together. I stay hands-on until the system runs and your team owns it.",
              },
            ].map((item) => (
              <div key={item.step} className="card">
                <span className="font-display text-4xl text-gold/30">
                  {item.step}
                </span>
                <h3 className="mt-4 text-xl font-medium text-white">
                  {item.title}
                </h3>
                <p className="mt-3 body-md">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-ink-800/50 bg-ink-900/30">
        <div className="container-narrow">
          <SectionHeading
            label="Expertise"
            title="What I bring to the table"
          />
          <div className="mt-16 grid gap-6 md:grid-cols-2">
            {expertise.map((item) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-xl border border-ink-800 p-6"
              >
                <span className="text-xl text-gold">{item.icon}</span>
                <div>
                  <h3 className="font-medium text-white">{item.title}</h3>
                  <p className="mt-2 body-md">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding border-t border-ink-800/50">
        <div className="container-narrow text-center">
          <h2 className="heading-md text-white">
            Let&apos;s see if we&apos;re a fit
          </h2>
          <p className="mx-auto mt-4 max-w-lg body-md">
            I take on a limited number of advisory and consulting engagements
            each quarter. Book a call to explore working together.
          </p>
          <div className="mt-8">
            <Button href="/book-consultation">Book Consultation</Button>
          </div>
        </div>
      </section>

      <CTASection
        title="Want to go deeper?"
        description="Subscribe to the newsletter for weekly insights on AI, GTM, and growth."
      />
    </>
  );
}
