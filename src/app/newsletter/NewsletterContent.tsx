"use client";

import { useState } from "react";
import { CTASection } from "@/components/CTASection";
import { SectionHeading } from "@/components/SectionHeading";

export default function NewsletterContent() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.includes("@")) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setEmail("");
  }

  return (
    <>
      <section className="section-padding">
        <div className="container-narrow max-w-2xl">
          <SectionHeading
            label="Newsletter"
            title="Growth insights, weekly"
            description="Join founders and marketers who get practical frameworks on AI, GTM, sales, and performance marketing — no fluff, no spam."
            align="center"
          />

          <form onSubmit={handleSubmit} className="mt-12">
            <div className="flex flex-col gap-4 sm:flex-row">
              <input
                type="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setStatus("idle");
                }}
                placeholder="you@company.com"
                required
                className="flex-1 rounded-full border border-ink-700 bg-ink-900 px-6 py-3 text-white placeholder:text-ink-500 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              />
              <button
                type="submit"
                className="rounded-full bg-gold px-8 py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-light"
              >
                Subscribe
              </button>
            </div>
            {status === "success" && (
              <p className="mt-4 text-center text-sm text-green-400">
                You&apos;re in! Check your inbox to confirm.
              </p>
            )}
            {status === "error" && (
              <p className="mt-4 text-center text-sm text-red-400">
                Please enter a valid email address.
              </p>
            )}
            <p className="mt-4 text-center text-xs text-ink-600">
              One email per week. Unsubscribe anytime.
            </p>
          </form>

          <div className="mt-20 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "AI Playbooks",
                text: "Practical ways to integrate AI into your GTM and ops.",
              },
              {
                title: "GTM Frameworks",
                text: "Positioning, launch, and scaling strategies that work.",
              },
              {
                title: "Performance Tips",
                text: "Creative testing, budget allocation, and ROAS optimization.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-ink-800 p-6 text-center"
              >
                <h3 className="font-medium text-white">{item.title}</h3>
                <p className="mt-2 text-sm text-ink-400">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection
        title="Prefer a 1-on-1 conversation?"
        description="Book a consultation for personalized growth advice."
      />
    </>
  );
}
