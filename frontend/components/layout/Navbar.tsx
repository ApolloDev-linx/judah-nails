import Link from "next/link";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";

export default function Navbar() {
  return (
    <div className="sticky top-0 z-50 border-b border-black/5 bg-[hsl(var(--bg))]/80 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-xl bg-black/10" aria-hidden />
          <div className="leading-tight">
            <div className="text-sm font-semibold">{site.name}</div>
            <div className="text-xs text-[hsl(var(--muted))]">Soothing • Clean • Detailed</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex">
          <Link className="hover:opacity-80" href="/services">Services</Link>
          <Link className="hover:opacity-80" href="/gallery">Gallery</Link>
          <Link className="hover:opacity-80" href="/about">About</Link>
          <Link className="hover:opacity-80" href="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-2">
          <Button href="/contact" className="hidden sm:inline-flex">Book / Contact</Button>
          <Button href={`tel:${site.phone}`} variant="ghost">Call</Button>
        </div>
      </div>
    </div>
  );
}

