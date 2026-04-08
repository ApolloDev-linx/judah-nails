import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { formatPhone } from "@/lib/utils";

export default function ContactPage() {
  return (
    <Section className="py-12">
      <h1 className="text-3xl font-semibold">Contact</h1>

      <p className="mt-2 text-[hsl(var(--muted))]">
        Book your next appointment or reach out with any questions — we’re happy to help.
      </p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">

        {/* CALL BOX */}
        <div className="rounded-3xl bg-[hsl(var(--card))] p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Call Us</h2>

          <p className="mt-2 text-[hsl(var(--muted))]">
            Speak directly with us to book your appointment or ask any questions.
          </p>

          <p className="mt-2 text-sm text-[hsl(var(--muted))]">
            You can also call us anytime if you have questions about our services.
          </p>

          <p className="mt-3 text-base font-semibold">
            {formatPhone(site.phone)}
          </p>

          <div className="mt-4 flex gap-3">
  <Button href={`tel:${site.phone}`} className="w-full">
    Call Now
  </Button>

  <Button
    href="sms:2563209600"
    variant="ghost"
    className="w-full"
  >
    Text Us
  </Button>
</div>
</div>
<div>
  <h2 className="text-2xl font-semibold tracking-tight">
    Book Your Appointment
  </h2>

  <div className="mt-6 w-full h-[700px]">
    <iframe
      src="https://calendly.com/judahnails"
      className="w-full h-full rounded-lg border border-[var(--gold)]"
    />
  </div>
</div>

        {/* CONTACT FORM (FUTURE USE) */}{/*
        <div className="rounded-3xl bg-[hsl(var(--card))] p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Request Booking</h2>

          <p className="mt-2 text-[hsl(var(--muted))]">
            Prefer messaging? Send a request and we’ll get back to you soon.
          </p>

          <div className="mt-4 grid gap-3">
            <input
              className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm"
              placeholder="Your Name"
            />

            <input
              className="w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm"
              placeholder="Phone or Email"
            />

            <textarea
              className="min-h-28 w-full rounded-xl border border-black/10 bg-white/70 px-3 py-2 text-sm"
              placeholder="What would you like to book?"
            />

            <Button>
              Send Request (Coming Soon)
            </Button>
          </div>
        </div> 
*/}
      </div> 
    </Section>
  );
}

