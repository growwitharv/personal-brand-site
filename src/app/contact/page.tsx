import type { Metadata } from "next";
import { ContactForm, ContactInfo } from "@/components/ContactForm";
import { siteConfig } from "@/lib/site-data";

export const metadata: Metadata = {
  title: "Contact",
  description: `Get in touch with ${siteConfig.name}.`,
};

export default function ContactPage() {
  return (
    <section className="section-padding">
      <div className="container-narrow">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-20">
          <ContactInfo />
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
