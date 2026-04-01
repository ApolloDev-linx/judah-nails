"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const images = [
  "/images/gallery/gal1.jpg",
  "/images/gallery/gal2.jpg",
  "/images/gallery/gal3.jpg",
  "/images/gallery/gal4.jpg",
  "/images/gallery/gal5.jpg",
  "/images/gallery/gal6.jpg",
];

export default function GalleryPreview() {
  const [index, setIndex] = useState(0);

  const prev = () =>
    setIndex((i) => (i - 1 + images.length) % images.length);
  const next = () => setIndex((i) => (i + 1) % images.length);

  // Auto-advance every 3 seconds
  useEffect(() => {
    const id = setInterval(next, 3000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="grid gap-4">
      {/* Slider */}
      <div className="relative aspect-square overflow-hidden rounded-2xl">
        {images.map((src, i) => (
          <Image
            key={src}
            src={src}
            alt={`Gallery preview ${i + 1}`}
            fill
            className={`object-cover transition-opacity duration-700 ${
              i === index ? "opacity-100" : "opacity-0"
            }`}
            priority={i === 0}
          />
        ))}

        {/* Arrows */}
        <button
          type="button"
          onClick={prev}
          aria-label="Previous image"
          className="absolute left-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur hover:bg-black/50"
        >
          ‹
        </button>
        <button
          type="button"
          onClick={next}
          aria-label="Next image"
          className="absolute right-3 top-1/2 -translate-y-1/2 rounded-full bg-black/40 px-3 py-2 text-white backdrop-blur hover:bg-black/50"
        >
          ›
        </button>

        {/* Dots */}
        <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              type="button"
              onClick={() => setIndex(i)}
              aria-label={`Go to image ${i + 1}`}
              className={`h-2.5 w-2.5 rounded-full transition ${
                i === index ? "bg-white" : "bg-white/50 hover:bg-white/70"
              }`}
            />
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="flex items-center justify-between">
        <Link
          href="/gallery"
          className="inline-block text-sm font-medium text-[hsl(var(--accent))]"
        >
          View full gallery →
        </Link>

        <div className="text-xs text-[hsl(var(--muted))]">
          {index + 1} / {images.length}
        </div>
      </div>
    </div>
  );
}

