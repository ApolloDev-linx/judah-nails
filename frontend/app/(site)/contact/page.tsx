import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { formatPhone } from "@/lib/utils";

export default function ContactPage() {
  return (
    <Section className="py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>
      <p className="mt-2 text-[hsl(var(--muted))]">
        Call or send a message to request an appointment.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="rounded-3xl bg-[hsl(var(--card))] p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Call</h2>
          <p className="mt-2 text-[hsl(var(--muted))]">{formatPhone(site.phone)}</p>
          <div className="mt-4">
            <Button href={`tel:${site.phone}`}>Call Now</Button>
          </div>
        </div>

        <div className="rounded-3xl bg-[hsl(var(--card))] p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Request Booking</h2>
          <p className="mt-2 text-[hsl(var(--muted))]">
            Flask API.
          </p>
          <div className="mt-4 grid gap-3">
            <input className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm" placeholder="Name" />
            <input className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm" placeholder="Phone or Email" />
            <textarea className="min-h-28 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm" placeholder="Message" />
            <Button>Send</Button>
          </div>
        </div>
      </div>
    </Section>
  );
}

