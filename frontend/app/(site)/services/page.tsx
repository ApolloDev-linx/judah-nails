"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { serviceCategories } from "@/content/services";
import { site } from "@/content/site";

/* ── popular items (exact name matches from services.ts) ── */
const POPULAR = new Set([
  "Full set (gel polish)",
  "Judah Pedicure",
  "Volcano Pedicure",
  "Gel polish",
  "Hawaiian Style",
]);

/* ── category icons (clean line SVGs) ── */
const categoryIcons: Record<string, React.ReactNode> = {
  Acrylic: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M12 2C12 2 8 6 8 12s2 8 4 10c2-2 4-4 4-10S12 2 12 2Z" />
    </svg>
  ),
  Pedicure: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M7 21h10" />
      <path d="M12 3v18" />
      <circle cx="12" cy="8" r="5" />
    </svg>
  ),
  "Manicure & Color Change": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 3v18" />
      <path d="M12 3c3 3 4.5 6 4.5 9s-1.5 6-4.5 9" />
    </svg>
  ),
  Extras: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M12 5v14M5 12h14" />
    </svg>
  ),
  "Eye Lashes Extensions": (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4">
      <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7S2 12 2 12Z" />
      <circle cx="12" cy="12" r="3" />
    </svg>
  ),
};

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

/* ── accordion category card ── */
function CategoryCard({
  title,
  items,
  index,
  defaultOpen,
}: {
  title: string;
  items: { name: string; price: string }[];
  index: number;
  defaultOpen: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const { ref, visible } = useInView(0.1);
  const contentRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState<number | undefined>(defaultOpen ? undefined : 0);

  useEffect(() => {
    if (!contentRef.current) return;
    if (open) {
      setHeight(contentRef.current.scrollHeight);
      const t = setTimeout(() => setHeight(undefined), 350);
      return () => clearTimeout(t);
    } else {
      setHeight(contentRef.current.scrollHeight);
      requestAnimationFrame(() => setHeight(0));
    }
  }, [open]);

  const icon = categoryIcons[title];

  return (
    <div
      ref={ref}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: `opacity 0.5s ease ${index * 0.07}s, transform 0.5s ease ${index * 0.07}s`,
      }}
      className="rounded-3xl bg-[hsl(var(--card))] shadow-sm overflow-hidden"
    >
      {/* header — click to toggle */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-3 px-6 py-5 text-left transition hover:bg-black/[0.02]"
      >
        <div className="flex items-center gap-3">
          {icon && (
            <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
              {icon}
            </span>
          )}
          <div>
            <h2 className="text-lg font-semibold">{title}</h2>
            <p className="text-xs text-[hsl(var(--muted))]">
              {items.length} service{items.length > 1 ? "s" : ""}
            </p>
          </div>
        </div>

        {/* chevron */}
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-[hsl(var(--muted))] transition-transform duration-300"
          style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {/* collapsible body */}
      <div
        ref={contentRef}
        style={{
          height: height !== undefined ? `${height}px` : "auto",
          overflow: "hidden",
          transition: "height 0.35s ease",
        }}
      >
        <div className="border-t border-black/5 px-6 pb-5 pt-4">
          <div className="space-y-3">
            {items.map((item) => {
              const isPopular = POPULAR.has(item.name);
              return (
                <div
                  key={item.name}
                  className="flex items-center justify-between gap-4"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-sm">{item.name}</span>
                    {isPopular && (
                      <span className="inline-flex items-center rounded-full bg-[hsl(var(--accent))]/10 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[hsl(var(--accent))]">
                        Popular
                      </span>
                    )}
                  </div>
                  <span className="whitespace-nowrap text-sm font-semibold">
                    {item.price}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ── page ── */
export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState("All");
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const tabs = ["All", ...serviceCategories.map((c) => c.title)];

  const filtered =
    activeTab === "All"
      ? serviceCategories
      : serviceCategories.filter((c) => c.title === activeTab);

  return (
    <>
      {/* ── hero ── */}
      <Section className="pt-12 pb-2">
        <div
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="inline-flex rounded-full bg-[hsl(var(--accent))]/10 px-3 py-1 text-xs font-medium text-[hsl(var(--accent))]">
            Services & Pricing
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            What we offer
          </h1>
          <p className="mt-2 max-w-lg text-[hsl(var(--muted))]">
            This is a preview of our services. For additional options or custom
            requests, feel free to call or reach out.
          </p>
        </div>
      </Section>

      {/* ── tabs ── */}
      <Section className="pt-6 pb-2">
        <div
          className="flex gap-2 overflow-x-auto pb-2 scrollbar-none"
          style={{
            opacity: heroVisible ? 1 : 0,
            transition: "opacity 0.5s ease 0.2s",
          }}
        >
          {tabs.map((tab) => {
            const active = tab === activeTab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium transition ${
                  active
                    ? "bg-[hsl(var(--accent))] text-white shadow-sm"
                    : "bg-black/5 text-[hsl(var(--muted))] hover:bg-black/10"
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>
      </Section>

      {/* ── cards ── */}
      <Section className="pt-6 pb-16">
        <div className="grid gap-4 md:grid-cols-2">
          {filtered.map((cat, i) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              items={cat.items}
              index={i}
              defaultOpen={filtered.length <= 2}
            />
          ))}
        </div>

        {/* ── bottom CTA ── */}
        <div className="mt-12 rounded-3xl bg-[hsl(var(--card))] p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Don't see what you need?</h2>
              <p className="mt-2 text-[hsl(var(--muted))]">
                We handle custom requests too — just call or message us.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact">Book / Contact</Button>
              <Button href={`tel:${site.phone}`} variant="ghost">
                Call Us
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
