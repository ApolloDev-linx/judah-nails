import { site } from "@/content/site";
import Section from "@/components/ui/Section";
import { formatPhone } from "@/lib/utils";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 pb-28 pt-10 md:pb-10">
      <Section>
        <div className="grid gap-8 md:grid-cols-3 md:gap-6">
          {/* Brand */}
          <div>
            <div className="text-base font-semibold">{site.name}</div>
            <p className="mt-2 max-w-xs text-sm leading-relaxed text-[hsl(var(--muted))]">
              Simple, clean, detailed nail care — with a calm, soothing vibe.
            </p>

            {/* Social links — shown as compact icons on mobile, text on desktop */}
            {site.social.facebook && (
              <a
                href={site.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit our Facebook page"
                className="mt-4 inline-flex items-center gap-2 rounded-lg border border-black/10 px-3 py-2 text-sm font-medium text-[hsl(var(--accent))] transition hover:border-[hsl(var(--accent))]/30 hover:bg-[hsl(var(--accent))]/5"
              >
                {/* Facebook SVG icon */}
                <svg
                  className="h-4 w-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                </svg>
                <span className="hidden sm:inline">Facebook</span>
              </a>
            )}
          </div>

          {/* Divider — mobile only */}
          <div className="h-px bg-black/5 md:hidden" />

          {/* Hours */}
          <div>
            <div className="text-sm font-semibold">Hours</div>
            <p className="mt-2 text-sm leading-relaxed text-[hsl(var(--muted))]">
              {site.hours}
            </p>
          </div>

          {/* Divider — mobile only */}
          <div className="h-px bg-black/5 md:hidden" />

          {/* Contact */}
          <div>
            <div className="text-sm font-semibold">Contact</div>
            <div className="mt-2 space-y-1">
              <a
                href={`tel:${site.phone}`}
                className="block text-sm text-[hsl(var(--muted))] transition hover:text-[hsl(var(--accent))]"
              >
                {formatPhone(site.phone)}
              </a>
              <a
                href={`sms:${site.phone}`}
                className="block text-sm text-[hsl(var(--muted))] transition hover:text-[hsl(var(--accent))]"
              >
                Text us
              </a>
              <p className="text-sm text-[hsl(var(--muted))]">
                {site.addressLine1}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-black/5 pt-6 sm:flex-row">
          <div className="text-xs text-[hsl(var(--muted))]">
            &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
          </div>

          {/* Quick nav links in footer */}
          <nav className="flex gap-4 text-xs text-[hsl(var(--muted))]">
            <Link href="/services" className="transition hover:text-[hsl(var(--text))]">
              Services
            </Link>
            <Link href="/gallery" className="transition hover:text-[hsl(var(--text))]">
              Gallery
            </Link>
            <Link href="/contact" className="transition hover:text-[hsl(var(--text))]">
              Contact
            </Link>
          </nav>
        </div>
      </Section>
    </footer>
  );
}

