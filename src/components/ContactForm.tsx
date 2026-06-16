"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site-data";

export function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      setStatus("error");
      return;
    }
    setStatus("success");
    setForm({ name: "", email: "", company: "", message: "" });
  }

  return (
    <form onSubmit={handleSubmit} className="card space-y-6">
      <div>
        <label htmlFor="name" className="mb-2 block text-sm text-ink-400">
          Name *
        </label>
        <input
          id="name"
          type="text"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          required
          className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="email" className="mb-2 block text-sm text-ink-400">
          Email *
        </label>
        <input
          id="email"
          type="email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm text-ink-400">
          Company
        </label>
        <input
          id="company"
          type="text"
          value={form.company}
          onChange={(e) => setForm({ ...form, company: e.target.value })}
          className="w-full rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-ink-400">
          Message *
        </label>
        <textarea
          id="message"
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          required
          className="w-full resize-none rounded-xl border border-ink-700 bg-ink-950 px-4 py-3 text-white focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
        />
      </div>

      {status === "success" && (
        <p className="text-sm text-green-400">
          Message sent! I&apos;ll get back to you soon.
        </p>
      )}
      {status === "error" && (
        <p className="text-sm text-red-400">
          Please fill in all required fields.
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-gold py-3 text-sm font-medium text-ink-950 transition-colors hover:bg-gold-light"
      >
        Send Message
      </button>
    </form>
  );
}

export function ContactInfo() {
  return (
    <div>
      <p className="label mb-4">Contact</p>
      <h1 className="heading-xl text-white">Get in touch</h1>
      <p className="mt-6 body-lg">
        Have a question, partnership idea, or just want to say hello? Send a
        message — I read every one.
      </p>

      <div className="mt-12 space-y-6">
        <div>
          <p className="label mb-2">Email</p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="text-lg text-gold hover:underline"
          >
            {siteConfig.email}
          </a>
        </div>
        <div>
          <p className="label mb-2">Agency</p>
          <a
            href={siteConfig.agency.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-lg text-ink-300 hover:text-white"
          >
            {siteConfig.agency.name} →
          </a>
        </div>
        <div>
          <p className="label mb-2">Social</p>
          <div className="flex gap-4">
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-white"
            >
              LinkedIn
            </a>
            <a
              href={siteConfig.social.twitter}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-400 hover:text-white"
            >
              Twitter / X
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
