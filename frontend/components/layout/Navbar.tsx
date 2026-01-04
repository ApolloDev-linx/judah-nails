"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import Image from "next/image";
const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
const [open,setOpen] = useState(false);	
  return (
    <div className="sticky top-0 z-50 border-b border-black/5 bg-[hsl(var(--bg))]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <Image
	  src="/images/brand/logo1.png"
	  alt={`${site.name} logo`}
	  width={36}
	  height={36}
	  className="h-9 w-9 rounded-x1 object-cover"
	  />
          <div className="leading-tight">
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-[hsl(var(--muted))]">Soothing • Clean • Detailed</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {navLinks.map((l) => (
            <Link key={l.href} className="hover:opacity-80" href={l.href}>
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Button href="/contact" className="hidden sm:inline-flex">
            Book / Contact
          </Button>

          {/* Mobile hamburger */}
          <button
            className="inline-flex items-center justify-center rounded-xl px-3 py-2 text-sm hover:bg-black/5 md:hidden"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {/* simple hamburger / X */}
            <span className="font-semibold">{open ? "✕" : "☰"}</span>
          </button>

          {/* Call button (works on all sizes) */}
          <Button href={`tel:${site.phone}`} variant="ghost">
            Call
          </Button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden">
          <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 bg-[hsl(var(--card))] p-3 shadow-sm">
              <div className="grid gap-1">
                {navLinks.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="rounded-xl px-3 py-2 text-sm hover:bg-black/5"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
              </div>

              <div className="mt-3 grid gap-2">
                <Button href="/contact" className="w-full">
                  Book / Contact
                </Button>
                <Button href={`tel:${site.phone}`} variant="ghost" className="w-full">
                  Call {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
