"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { formatPhone } from "@/lib/utils";
import { reviews } from "@/content/reviews";
import { serviceCategories } from "@/content/services";
import GalleryPreview from "@/components/sections/GalleryPreview";

/* ── scroll-in hook ── */
function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setVisible(true);
          obs.unobserve(el);
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ── fade wrapper ── */
function FadeIn({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const { ref, visible } = useInView(0.1);
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}

/* ── feature pills ── */
const features = [
  {
    label: "Clean",
    desc: "Sanitized tools, every time",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    label: "Custom",
    desc: "Tailored to your style",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
  },
  {
    label: "Relax",
    desc: "Calm, soothing vibe",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
        <path d="M12 22c-4 0-8-2-8-8 0-4 4-6 4-12h8c0 6 4 8 4 12 0 6-4 8-8 8Z" />
        <path d="M12 22v-4" />
      </svg>
    ),
  },
];

/* ── pick a few popular services to preview ── */
const popularServices = serviceCategories
  .flatMap((cat) =>
    cat.items.map((item) => ({ ...item, category: cat.title }))
  )
  .filter((s) =>
    [
      "Full set (gel polish)",
      "Judah Pedicure",
      "Volcano Pedicure",
      "Gel polish",
      "Hawaiian Style",
    ].includes(s.name)
  );

/* ── reviews auto-scroll ── */
function ReviewsCarousel() {
  const [active, setActive] = useState(0);
  const { ref, visible } = useInView(0.15);

  useEffect(() => {
    const id = setInterval(
      () => setActive((i) => (i + 1) % reviews.length),
      4500
    );
    return () => clearInterval(id);
  }, []);

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.6s ease, transform 0.6s ease",
      }}
    >
      <div className="relative overflow-hidden rounded-3xl bg-[hsl(var(--card))] p-8 shadow-sm md:p-10">
        {/* quote icon */}
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="mb-4 h-8 w-8 text-[hsl(var(--accent))]/20"
        >
          <path d="M11 7H7a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H6a1 1 0 1 0 0 2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4H6a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a1 1 0 1 0 0-2Zm10 0h-4a4 4 0 0 0-4 4v1a3 3 0 0 0 3 3h1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2h-1a1 1 0 1 0 0 2h1a4 4 0 0 0 4-4v-1a4 4 0 0 0-4-4h-1a1 1 0 0 1-1-1v-1a2 2 0 0 1 2-2h4a1 1 0 1 0 0-2Z" />
        </svg>

        {/* review text */}
        <div className="relative min-h-[80px]">
          {reviews.map((r, i) => (
            <div
              key={i}
              className="absolute inset-0 flex flex-col justify-center transition-opacity duration-500"
              style={{ opacity: i === active ? 1 : 0 }}
            >
              <p className="text-lg font-medium leading-relaxed md:text-xl">
                "{r.quote}"
              </p>
              <p className="mt-3 text-sm text-[hsl(var(--muted))]">
                — {r.name}
                {r.meta && (
                  <span className="ml-1 text-xs">· {r.meta}</span>
                )}
              </p>
            </div>
          ))}
        </div>

        {/* dots */}
        <div className="mt-6 flex gap-2">
          {reviews.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Review ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-6 bg-[hsl(var(--accent))]"
                  : "w-2 bg-black/10 hover:bg-black/20"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/* ── page ── */
export default function HomePage() {
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ══════════ HERO ══════════ */}
      <Section className="pt-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* text side */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0)" : "translateY(24px)",
              transition: "opacity 0.7s ease, transform 0.7s ease",
            }}
          >
            <p className="inline-flex rounded-full bg-[hsl(var(--accent))]/10 px-3 py-1 text-xs font-medium text-[hsl(var(--accent))]">
              Soothing · Clean · Detailed
            </p>

            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Beautiful nails,{" "}
              <span className="text-[hsl(var(--accent))]">done with care.</span>
            </h1>

            <p className="mt-4 text-base text-[hsl(var(--muted))]">
              Relax, refresh, and leave feeling confident. We specialize in
              clean, detailed work tailored to your style.{" "}
              {site.bookingNote}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Book / Contact</Button>
              <Button href={`tel:${site.phone}`} variant="ghost">
                Call {formatPhone(site.phone)}
              </Button>
              <Button href="sms:2563209600" variant="ghost">
                Text Us
              </Button>
            </div>
          </div>

          {/* gallery side */}
          <div
            style={{
              opacity: heroVisible ? 1 : 0,
              transform: heroVisible ? "translateY(0) scale(1)" : "translateY(16px) scale(0.98)",
              transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
            }}
          >
            <GalleryPreview />
          </div>
        </div>
      </Section>

      {/* ══════════ FEATURES ══════════ */}
      <Section className="mt-16">
        <div className="grid gap-4 sm:grid-cols-3">
          {features.map((f, i) => (
            <FadeIn key={f.label} delay={i * 0.08}>
              <div className="flex items-start gap-4 rounded-2xl bg-[hsl(var(--card))] p-5 shadow-sm">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
                  {f.icon}
                </span>
                <div>
                  <div className="font-semibold">{f.label}</div>
                  <div className="mt-0.5 text-sm text-[hsl(var(--muted))]">
                    {f.desc}
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* ══════════ POPULAR SERVICES PREVIEW ══════════ */}
      <Section className="mt-20">
        <FadeIn>
          <p className="inline-flex rounded-full bg-[hsl(var(--accent))]/10 px-3 py-1 text-xs font-medium text-[hsl(var(--accent))]">
            Popular
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            Most-requested services
          </h2>
          <p className="mt-2 text-[hsl(var(--muted))]">
            A quick look at what our clients love most.
          </p>
        </FadeIn>

        <div className="mt-8 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
          {popularServices.map((s, i) => (
            <FadeIn key={s.name} delay={i * 0.06}>
              <div className="flex items-center justify-between rounded-2xl bg-[hsl(var(--card))] px-5 py-4 shadow-sm">
                <div>
                  <div className="text-sm font-semibold">{s.name}</div>
                  <div className="mt-0.5 text-xs text-[hsl(var(--muted))]">
                    {s.category}
                  </div>
                </div>
                <div className="text-sm font-semibold text-[hsl(var(--accent))]">
                  {s.price}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.2} className="mt-6">
          <Button href="/services" variant="ghost">
            View all services →
          </Button>
        </FadeIn>
      </Section>

      {/* ══════════ REVIEWS ══════════ */}
      <Section className="mt-20">
        <FadeIn>
          <p className="inline-flex rounded-full bg-[hsl(var(--accent))]/10 px-3 py-1 text-xs font-medium text-[hsl(var(--accent))]">
            Reviews
          </p>
          <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
            What our clients say
          </h2>
        </FadeIn>

        <div className="mt-8">
          <ReviewsCarousel />
        </div>
      </Section>

      {/* ══════════ BOTTOM CTA ══════════ */}
      <Section className="mt-20 mb-4">
        <FadeIn>
          <div className="rounded-3xl bg-[hsl(var(--card))] p-8 shadow-sm">
            <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
              <div>
                <h2 className="text-2xl font-semibold">
                  Ready for your next set?
                </h2>
                <p className="mt-2 text-[hsl(var(--muted))]">
                  Book custom hours or call now — we'd love to see you.
                </p>
              </div>
              <div className="flex gap-3">
                <Button href="/contact">Book</Button>
                <Button href={`tel:${site.phone}`} variant="ghost">
                  Call
                </Button>
              </div>
            </div>
          </div>
        </FadeIn>
      </Section>
    </>
  );
}
