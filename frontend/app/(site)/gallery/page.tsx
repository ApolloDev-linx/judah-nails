import Section from "@/components/ui/Section";

export default function GalleryPage() {
  return (
    <Section className="py-12">
      <h1 className="text-3xl font-semibold">Gallery</h1>
      <p className="mt-2 text-[hsl(var(--muted))]">
        Reminder Drop images into <code className="rounded bg-black/5 px-1">public/images/gallery</code>
      </p>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className="aspect-square rounded-2xl bg-black/10" />
        ))}
      </div>
    </Section>
  );
}

