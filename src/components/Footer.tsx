import Link from "next/link";
import { navLinks, siteConfig } from "@/lib/site-data";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-ink-800 bg-ink-950">
      <div className="container-wide section-padding pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          <div className="lg:col-span-2">
            <Link href="/" className="font-display text-2xl font-medium text-white">
              {siteConfig.name}
            </Link>
            <p className="mt-4 max-w-md body-md">{siteConfig.tagline}</p>
            <p className="mt-4 text-sm text-ink-500">
              {siteConfig.agency.role} at{" "}
              <a
                href={siteConfig.agency.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gold hover:underline"
              >
                {siteConfig.agency.name}
              </a>
            </p>
          </div>

          <div>
            <h3 className="label mb-4">Navigate</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-ink-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/book-consultation"
                  className="text-sm text-gold transition-colors hover:text-gold-light"
                >
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="label mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-sm text-ink-400 transition-colors hover:text-white"
                >
                  {siteConfig.email}
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-400 transition-colors hover:text-white"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.social.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-ink-400 transition-colors hover:text-white"
                >
                  Instagram 
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-ink-800 pt-8 md:flex-row">
          <p className="text-sm text-ink-500">
            © {year} {siteConfig.name}. All rights reserved.
          </p>
          <p className="text-sm text-ink-600">
            Built for growth. Designed with intention.
          </p>
        </div>
      </div>
    </footer>
  );
}
