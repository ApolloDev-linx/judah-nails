"use client";

import { useEffect, useRef, useState } from "react";
import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

/* ── tiny hook: triggers when element scrolls into view ── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.unobserve(el); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, visible };
}

/* ── inline SVG icons (clean line style) ── */
const icons = {
  seedling: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
      <path d="M12 22V12" />
      <path d="M12 12C12 8 9 5 5 5c0 4.5 3 7 7 7Z" />
      <path d="M12 12c0-4 3-7 7-7-0 4.5-3 7-7 7Z" />
    </svg>
  ),
  door: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
      <rect x="6" y="3" width="12" height="18" rx="1" />
      <circle cx="15" cy="12" r="1" fill="currentColor" stroke="none" />
    </svg>
  ),
  heart: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
      <path d="M12 20S4 14 4 8.5C4 5.4 6.4 3 9.5 3c1.7 0 2.5.8 2.5.8S13.8 3 15.5 3C18.6 3 20 5.4 20 8.5 20 14 12 20 12 20Z" />
    </svg>
  ),
  spark: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
      <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
    </svg>
  ),
  award: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
      <circle cx="12" cy="9" r="6" />
      <path d="M8.5 14.5L7 22l5-3 5 3-1.5-7.5" />
    </svg>
  ),
  hands: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 md:h-5 md:w-5">
      <path d="M18 11V6a2 2 0 0 0-4 0v5" />
      <path d="M14 10V4a2 2 0 0 0-4 0v6" />
      <path d="M10 10.5V6a2 2 0 0 0-4 0v8a8 8 0 0 0 16 0v-4a2 2 0 0 0-4 0" />
    </svg>
  ),
};

/* ── story beats ── */
const story = [
  {
    icon: icons.seedling,
    heading: "The Beginning",
    body: "I am a nail technician who began my journey with many challenges. In the beginning, working with acrylic was not easy for me — there were many moments of frustration, and even tears, while trying to learn and improve.",
  },
  {
    icon: icons.door,
    heading: "Knocking on Doors",
    body: "I worked for someone else for five years while carrying a dream in my heart: to one day have my own salon. Along the way, I knocked on many doors and heard many \"no's.\"",
  },
  {
    icon: icons.heart,
    heading: "Trusting the Process",
    body: "In my frustration, I turned to God and prayed that if this dream was truly meant for me, He would open the right door. I stopped forcing things and chose to trust the process…",
  },
  {
    icon: icons.spark,
    heading: "Everything Changed",
    body: "And that's when everything changed. The opportunity came unexpectedly, and everything began to flow in a way I can only describe as a blessing.",
  },
  {
    icon: icons.award,
    heading: "Where We Are Today",
    body: "Today, after four years, Judah Nails has grown into one of the top salons in the area, earning the \"Best of 2026\" award from BusinessRate — built on persistence, faith, and a commitment to quality.",
  },
  {
    icon: icons.hands,
    heading: "Join the Journey",
    body: "Now, we are looking for passionate and committed individuals who want to grow and be part of this journey.",
  },
];

/* ── animated story card ── */
function StoryCard({ item, index }: { item: (typeof story)[number]; index: number }) {
  const { ref, visible } = useInView(0.2);

  return (
    <div
      ref={ref}
      className="relative pl-12 md:pl-16"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${index * 0.08}s, transform 0.6s ease ${index * 0.08}s`,
      }}
    >
      {/* timeline dot */}
      <div className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))] md:h-10 md:w-10">
        {item.icon}
      </div>

      {/* connector line */}
      {index < story.length - 1 && (
        <div className="absolute left-[15px] top-10 h-[calc(100%+8px)] w-px bg-[hsl(var(--accent))]/20 md:left-[19px]" />
      )}

      <h3 className="text-lg font-semibold tracking-tight">{item.heading}</h3>
      <p className="mt-2 leading-relaxed text-[hsl(var(--muted))]">{item.body}</p>
    </div>
  );
}

/* ── page ── */
export default function AboutPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const [heroVisible, setHeroVisible] = useState(false);

  useEffect(() => {
    // trigger hero animation on mount
    const t = setTimeout(() => setHeroVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  return (
    <>
      {/* ── hero banner ── */}
      <Section className="pt-16 pb-10">
        <div
          ref={heroRef}
          style={{
            opacity: heroVisible ? 1 : 0,
            transform: heroVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
          }}
        >
          <p className="inline-flex rounded-full bg-[hsl(var(--accent))]/10 px-3 py-1 text-xs font-medium text-[hsl(var(--accent))]">
            Our Story
          </p>

          <h1 className="mt-4 max-w-xl text-4xl font-semibold tracking-tight sm:text-5xl">
            Built on faith,{" "}
            <span className="text-[hsl(var(--accent))]">persistence</span>, and
            love for the craft.
          </h1>

          <p className="mt-4 max-w-lg text-base text-[hsl(var(--muted))]">
            Judah Nails didn't happen overnight. Here's the journey from
            frustration and closed doors to becoming one of the area's top salons.
          </p>
        </div>
      </Section>

      {/* ── timeline story ── */}
      <Section className="pb-16">
        <div className="grid gap-10 md:gap-12">
          {story.map((item, i) => (
            <StoryCard key={item.heading} item={item} index={i} />
          ))}
        </div>

        {/* ── CTA card ── */}
        <div
          className="mt-16 rounded-3xl bg-[hsl(var(--card))] p-8 shadow-sm"
          style={{ animationDelay: "0.4s" }}
        >
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Want to be part of our story?</h2>
              <p className="mt-2 text-[hsl(var(--muted))]">
                Whether you're looking for beautiful nails or a place to grow your
                career — we'd love to hear from you.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact">Get in Touch</Button>
              <Button href="/services" variant="ghost">
                View Services
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
