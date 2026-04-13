"use client";

import { useState, useEffect, useCallback } from "react";
import Section from "@/components/ui/Section";
import Image from "next/image";

const images = [
  "/images/gallery/gal1.jpg",
  "/images/gallery/gal2.jpg",
  "/images/gallery/gal3.jpg",
  "/images/gallery/gal4.jpg",
  "/images/gallery/gal5.jpg",
  "/images/gallery/gal6.jpg",
];

/* ── Grid slot definitions ── */
const slots = [
  "col-span-2 row-span-2 md:col-span-2 md:row-span-2", // hero (now works on mobile too)
  "",
  "",
  "md:col-span-1 md:row-span-2", // tall
  "",
  "",
];

export default function GalleryPage() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 60);
    return () => clearTimeout(t);
  }, []);

  const goPrev = useCallback(
    () =>
      setLightbox((i) =>
        i !== null ? (i - 1 + images.length) % images.length : null
      ),
    []
  );

  const goNext = useCallback(
    () =>
      setLightbox((i) =>
        i !== null ? (i + 1) % images.length : null
      ),
    []
  );

  useEffect(() => {
    if (lightbox === null) return;

    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handler);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handler);
    };
  }, [lightbox, goPrev, goNext]);

  return (
    <>
      {/* Animations */}
      <style jsx global>{`
        @keyframes gallery-rise {
          from {
            opacity: 0;
            transform: translateY(28px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        @keyframes lb-fade {
          from { opacity: 0; }
          to   { opacity: 1; }
        }
        @keyframes lb-zoom {
          from { opacity: 0; transform: scale(0.92); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <Section className="py-12">
        {/* Header */}
        <div className="max-w-xl">
          <p className="inline-flex rounded-full bg-black/5 px-3 py-1 text-xs text-[hsl(var(--muted))]">
            Our work speaks for itself
          </p>

          <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Gallery
          </h1>

          <p className="mt-3 text-[hsl(var(--muted))] leading-relaxed">
            A peek at some of our favorite sets — every detail done with care.
            Tap any photo to see it up close.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-10 grid grid-cols-2 gap-3 auto-rows-[160px] md:grid-cols-3 md:auto-rows-[240px] md:gap-4">
          {images.map((src, i) => (
            <button
              key={src}
              type="button"
              onClick={() => setLightbox(i)}
              className={`group relative overflow-hidden rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[hsl(var(--ring))] ${slots[i] ?? ""}`}
              style={{
                animation: loaded
                  ? `gallery-rise 0.6s cubic-bezier(.22,1,.36,1) ${i * 0.08}s both`
                  : "none",
                opacity: loaded ? undefined : 0,
              }}
              aria-label={`View photo ${i + 1}`}
            >
              <Image
                src={src}
                alt={`Nail art ${i + 1}`}
                fill
                sizes="(max-width:768px) 50vw, 33vw"
                className="object-cover transition-transform duration-500 ease-out will-change-transform group-hover:scale-[1.06]"
                priority={i < 2}
              />

              {/* hover overlay */}
              <span className="pointer-events-none absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/10" />

              {/* icon */}
              <span className="pointer-events-none absolute bottom-3 right-3 flex h-8 w-8 items-center justify-center rounded-full bg-white/80 text-[hsl(var(--text))] opacity-0 shadow backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 3 21 3 21 9" />
                  <line x1="14" y1="10" x2="21" y2="3" />
                </svg>
              </span>
            </button>
          ))}
        </div>

        {/* footer text */}
        <p className="mt-6 text-center text-xs text-[hsl(var(--muted))]">
          {images.length} photos · Updated regularly
        </p>
      </Section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          style={{ animation: "lb-fade 0.2s ease both" }}
        >
          <div
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={() => setLightbox(null)}
          />

          <div
            className="relative z-10 mx-4 max-h-[85vh] max-w-3xl overflow-hidden rounded-2xl shadow-2xl"
            style={{ animation: "lb-zoom 0.25s ease both" }}
          >
            <Image
              src={images[lightbox]}
              alt={`Nail art ${lightbox + 1}`}
              width={1200}
              height={1200}
              className="block h-auto max-h-[85vh] w-full object-contain"
              priority
            />

            <button
              onClick={() => setLightbox(null)}
              className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
            >
              ✕
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goPrev();
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
            >
              ‹
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goNext();
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-black/40 text-white backdrop-blur hover:bg-black/60"
            >
              ›
            </button>

            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/40 px-3 py-1 text-xs text-white backdrop-blur">
              {lightbox + 1} / {images.length}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
