import { Button } from "./Button";

type CTASectionProps = {
  title?: string;
  description?: string;
};

export function CTASection({
  title = "Ready to grow?",
  description = "Book a free strategy consultation. We'll map your biggest growth opportunities — no pitch, just clarity.",
}: CTASectionProps) {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="relative overflow-hidden rounded-3xl border border-ink-800 bg-gradient-to-br from-ink-900 via-ink-900 to-ink-950 px-8 py-16 text-center md:px-16 md:py-20">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold/5 via-transparent to-transparent" />
          <div className="relative">
            <p className="label mb-4">Let&apos;s talk</p>
            <h2 className="heading-lg mx-auto max-w-xl text-white">{title}</h2>
            <p className="mx-auto mt-4 max-w-lg body-md">{description}</p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button href="/book-consultation">Book Consultation</Button>
              <Button href="/contact" variant="secondary">
                Get in Touch
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
