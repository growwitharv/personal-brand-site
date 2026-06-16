import type { Metadata } from "next";
import { Button } from "@/components/Button";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Book Consultation",
  description: `Book a free strategy consultation with ${siteConfig.name}.`,
};

const benefits = [
  "Audit your current GTM, sales, and marketing systems",
  "Identify your highest-leverage growth opportunities",
  "Get a tailored roadmap — whether we work together or not",
  "No pitch. No pressure. Just clarity.",
];

export default function BookConsultationPage() {
  return (
    <>
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
            <div>
              <p className="label mb-4">Book Consultation</p>
              <h1 className="heading-xl text-white">
                Let&apos;s map your{" "}
                <span className="text-gradient">growth path</span>
              </h1>
              <p className="mt-6 body-lg">
                A 30-minute strategy call to understand where you are, where
                you want to go, and the fastest path to get there.
              </p>

              <ul className="mt-10 space-y-4">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex gap-3 body-md">
                    <span className="mt-1 text-gold">✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>

              <p className="mt-10 text-sm text-ink-500">
                Prefer email?{" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-gold hover:underline"
                >
                  {siteConfig.email}
                </a>
              </p>
            </div>

            <div className="card">
              <h2 className="text-xl font-medium text-white">
                Pick a time that works
              </h2>
              <p className="mt-3 body-md">
                Choose a slot below. You&apos;ll receive a calendar invite with
                a video call link.
              </p>

              {/* Replace calendlyUrl in src/lib/site-data.ts with your Calendly link */}
              <div className="mt-8 flex min-h-[400px] flex-col items-center justify-center rounded-xl border border-dashed border-ink-700 bg-ink-950 p-8 text-center">
                <p className="body-md">
                  Embed your Calendly widget here, or link to your booking
                  page.
                </p>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <Button href={siteConfig.calendlyUrl} external>
                    Open Calendly →
                  </Button>
                  <Button href="/contact" variant="secondary">
                    Contact instead
                  </Button>
                </div>
              </div>

              <p className="mt-6 text-xs text-ink-600">
                Tip: Add your Calendly embed code in this file, or update{" "}
                <code className="text-ink-400">calendlyUrl</code> in{" "}
                <code className="text-ink-400">src/lib/site-data.ts</code>
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
