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
  return (
    <div className="grid gap-4">
      <div className="grid grid-cols-3 gap-3">
        {images.map((src) => (
          <div key={src} className="aspect-square overflow-hidden rounded-2xl">
            <Image
              src={src}
              alt="Gallery preview image"
              width={400}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>
        ))}
      </div>

      <Link
        href="/gallery"
        className="inline-block text-sm font-medium text-[hsl(var(--accent))]"
      >
        View full gallery →
      </Link>
    </div>
  );
}

