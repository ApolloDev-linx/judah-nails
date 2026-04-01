import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";

export default function AboutPage() {
  return (
    <Section className="py-12">
      <h1 className="text-3xl font-semibold">About Judah Nails</h1>

      <div className="mt-6 max-w-2xl space-y-4 text-[hsl(var(--muted))] leading-relaxed">
        <p>
          I am a nail technician who began my journey with many challenges.
          In the beginning, working with acrylic was not easy for me — there were
          many moments of frustration, and even tears, while trying to learn and improve.
        </p>

        <p>
          I worked for someone else for five years while carrying a dream in my heart:
          to one day have my own salon. Along the way, I knocked on many doors and
          heard many “no’s.”
        </p>

        <p>
          In my frustration, I turned to God and prayed that if this dream was truly
          meant for me, He would open the right door. I stopped forcing things and
          chose to trust the process…
        </p>

        <p>
          And that’s when everything changed.
        </p>

        <p>
          The opportunity came unexpectedly, and everything began to flow in a way
          I can only describe as a blessing.
        </p>

        <p>
          Today, after four years, Judah Nails has grown into one of the top salons in the area, earning the “Best of 2026” award from BusinessRate — built on persistence, faith, and a commitment to quality.
        </p>

        <p>
          Now, we are looking for passionate and committed individuals who want to
          grow and be part of this journey.
        </p>
      </div>

      <div className="mt-8">
        <Button href="/contact">
          Join Us / Get in Touch
        </Button>
      </div>
    </Section>
  );
}
