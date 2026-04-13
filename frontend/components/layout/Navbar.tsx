"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { formatPhone } from "@/lib/utils";
import Image from "next/image";

const navLinks = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const [menuHeight, setMenuHeight] = useState(0);

  /* track scroll position */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* measure menu height */
  useEffect(() => {
    if (!menuRef.current) return;
    setMenuHeight(open ? menuRef.current.scrollHeight : 0);
  }, [open]);

  /* close mobile menu on route change */
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div
      className="sticky top-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled
          ? "hsl(var(--bg) / 0.92)"
          : "hsl(var(--bg) / 0.4)",
        backdropFilter: scrolled ? "blur(12px)" : "blur(4px)",
        borderBottom: scrolled
          ? "1px solid rgba(0,0,0,0.08)"
          : "1px solid transparent",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.04)" : "none",
      }}
    >
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* ── logo ── */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/images/brand/logo1.png"
            alt={`${site.name} logo`}
            width={36}
            height={36}
            className="h-9 w-9 rounded-xl object-cover"
          />
          <div className="leading-tight">
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-[hsl(var(--muted))]">
              Soothing · Clean · Detailed
            </div>
          </div>
        </Link>

        {/* ── desktop nav ── */}
        <nav className="hidden items-center gap-1 text-sm md:flex">
          {navLinks.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className="relative px-3 py-2 rounded-lg transition hover:bg-black/5"
              >
                <span
                  className={
                    active
                      ? "text-[hsl(var(--text))] font-medium"
                      : "text-[hsl(var(--muted))]"
                  }
                >
                  {l.label}
                </span>
                {/* active dot */}
                <span
                  className="absolute bottom-0.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-[hsl(var(--accent))] transition-all duration-300"
                  style={{
                    opacity: active ? 1 : 0,
                    transform: active
                      ? "translateX(-50%) scale(1)"
                      : "translateX(-50%) scale(0)",
                  }}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-2">
          {/* Desktop CTA */}
          <Button href="/contact" className="hidden sm:inline-flex">
            Book / Contact
          </Button>

          {/* ── animated hamburger ── */}
          <button
            className="relative flex h-9 w-9 items-center justify-center rounded-xl hover:bg-black/5 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <div className="flex w-[18px] flex-col items-center gap-[5px]">
              <span
                className="block h-[1.5px] w-full rounded-full bg-[hsl(var(--text))] transition-all duration-300 origin-center"
                style={{
                  transform: open
                    ? "translateY(3.25px) rotate(45deg)"
                    : "translateY(0) rotate(0)",
                }}
              />
              <span
                className="block h-[1.5px] w-full rounded-full bg-[hsl(var(--text))] transition-all duration-300"
                style={{
                  opacity: open ? 0 : 1,
                  transform: open ? "scaleX(0)" : "scaleX(1)",
                }}
              />
              <span
                className="block h-[1.5px] w-full rounded-full bg-[hsl(var(--text))] transition-all duration-300 origin-center"
                style={{
                  transform: open
                    ? "translateY(-3.25px) rotate(-45deg)"
                    : "translateY(0) rotate(0)",
                }}
              />
            </div>
          </button>

          {/* Call button */}
          <Button href={`tel:${site.phone}`} variant="ghost">
            Call
          </Button>
        </div>
      </div>

      {/* ── mobile dropdown ── */}
      <div
        className="overflow-hidden md:hidden"
        style={{
          height: `${menuHeight}px`,
          opacity: open ? 1 : 0,
          transition: "height 0.35s ease, opacity 0.3s ease",
        }}
      >
        <div ref={menuRef}>
          <div className="mx-auto max-w-6xl px-4 pb-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl border border-black/10 bg-[hsl(var(--card))] p-3 shadow-sm">
              <div className="grid gap-1">
                {navLinks.map((l, i) => {
                  const active = pathname === l.href;
                  return (
                    <Link
                      key={l.href}
                      href={l.href}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2.5 text-sm transition ${
                        active
                          ? "bg-[hsl(var(--accent))]/10 font-medium"
                          : "hover:bg-black/5"
                      }`}
                      style={{
                        opacity: open ? 1 : 0,
                        transform: open
                          ? "translateY(0)"
                          : "translateY(-8px)",
                        transition: `opacity 0.3s ease ${0.05 + i * 0.04}s, transform 0.3s ease ${0.05 + i * 0.04}s`,
                      }}
                      onClick={() => setOpen(false)}
                    >
                      {active && (
                        <span className="h-1.5 w-1.5 rounded-full bg-[hsl(var(--accent))]" />
                      )}
                      {l.label}
                    </Link>
                  );
                })}
              </div>

              <div
                className="mt-3 grid gap-2"
                style={{
                  opacity: open ? 1 : 0,
                  transform: open ? "translateY(0)" : "translateY(-8px)",
                  transition:
                    "opacity 0.3s ease 0.25s, transform 0.3s ease 0.25s",
                }}
              >
                <Button href="/contact" className="w-full">
                  Book / Contact
                </Button>
                <Button
                  href={`tel:${site.phone}`}
                  variant="ghost"
                  className="w-full"
                >
                  Call {formatPhone(site.phone)}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
