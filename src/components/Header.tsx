"use client";

import Link from "next/link";
import { useState } from "react";
import { navLinks, siteConfig } from "@/lib/site-data";
import { Button } from "./Button";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 w-full border-b border-ink-800/50 bg-ink-950/80 backdrop-blur-xl">
      <div className="container-wide flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex flex-col">
          <span className="font-display text-lg font-medium tracking-tight text-white transition-colors group-hover:text-gold md:text-xl">
            {siteConfig.name}
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-ink-400 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/book-consultation">Book Consultation</Button>
        </div>

        <button
          type="button"
          className="flex flex-col gap-1.5 lg:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-white transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-ink-800 bg-ink-950 lg:hidden">
          <nav className="container-wide flex flex-col gap-4 py-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-lg text-ink-300 hover:text-white"
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button href="/book-consultation" className="mt-2 w-full">
              Book Consultation
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
