import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { formatPhone } from "@/lib/utils";
import GalleryPreview from "@/components/sections/GalleryPreview";


export default function HomePage() {
  return (
    <>
      <Section className="pt-12">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <p className="inline-flex rounded-full bg-black/5 px-3 py-1 text-xs text-[hsl(var(--muted))]">
              Soothing • Clean • Detailed
            </p>
            <h1 className="mt-4 text-4xl font-semibold tracking-tight sm:text-5xl">
              Later
            </h1>
            <p className="mt-4 text-base text-[hsl(var(--muted))]">
              below later
              {` `}{site.bookingNote}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button href="/contact">Book / Contact</Button>
              <Button href={`tel:${site.phone}`} variant="ghost">
                Call {formatPhone(site.phone)}
              </Button>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3 text-sm">
              <div className="rounded-2xl bg-[hsl(var(--card))] p-4 shadow-sm">
                <div className="font-semibold">Clean</div>
                <div className="text-[hsl(var(--muted))]">Sanitized tools</div>
              </div>
              <div className="rounded-2xl bg-[hsl(var(--card))] p-4 shadow-sm">
                <div className="font-semibold">Custom</div>
                <div className="text-[hsl(var(--muted))]">Your style</div>
              </div>
              <div className="rounded-2xl bg-[hsl(var(--card))] p-4 shadow-sm">
                <div className="font-semibold">Relax</div>
                <div className="text-[hsl(var(--muted))]">Soft vibe</div>
              </div>
            </div>
          </div>

          <GalleryPreview />
	  </div>
      </Section>

      <Section className="mt-16">
        <div className="rounded-3xl bg-[hsl(var(--card))] p-8 shadow-sm">
          <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
            <div>
              <h2 className="text-2xl font-semibold">Ready for your next set?</h2>
              <p className="mt-2 text-[hsl(var(--muted))]">
                Book custom hours or call now.
              </p>
            </div>
            <div className="flex gap-3">
              <Button href="/contact">Book</Button>
              <Button href={`tel:${site.phone}`} variant="ghost">Call</Button>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

