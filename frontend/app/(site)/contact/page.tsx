import Section from "@/components/ui/Section";
import Button from "@/components/ui/Button";
import { site } from "@/content/site";
import { formatPhone } from "@/lib/utils";

export default function ContactPage() {
  return (
    <Section className="py-12">
      {/* Page header */}
      <div className="max-w-xl">
        <p className="inline-flex rounded-full bg-black/5 px-3 py-1 text-xs text-[hsl(var(--muted))]">
          We'd love to hear from you
        </p>
        <h1 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
          Book Your Visit
        </h1>
        <p className="mt-3 text-[hsl(var(--muted))] leading-relaxed">
          Ready for your next set? Schedule online below, or reach out directly
          — we're happy to help with questions, custom requests, or walk-in
          availability.
        </p>
      </div>

      {/* Quick-action cards */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">
        {/* Call */}
        <a
          href={`tel:${site.phone}`}
          className="group rounded-2xl bg-[hsl(var(--card))] p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="text-sm font-semibold">Call Us</div>
          <div className="mt-1 text-sm text-[hsl(var(--muted))]">
            {formatPhone(site.phone)}
          </div>
        </a>

        {/* Text */}
        <a
          href={`sms:${site.phone}`}
          className="group rounded-2xl bg-[hsl(var(--card))] p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>
          <div className="text-sm font-semibold">Text Us</div>
          <div className="mt-1 text-sm text-[hsl(var(--muted))]">
            Quick questions welcome
          </div>
        </a>

        {/* Location */}
        <a
          href={`https://maps.google.com/?q=${encodeURIComponent(site.addressLine1)}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-2xl bg-[hsl(var(--card))] p-5 shadow-sm transition hover:shadow-md"
        >
          <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(var(--accent))]/10 text-[hsl(var(--accent))]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
          </div>
          <div className="text-sm font-semibold">Visit Us</div>
          <div className="mt-1 text-sm text-[hsl(var(--muted))]">
            Get directions
          </div>
        </a>
      </div>

      {/* Main content: Calendly + info sidebar */}
      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_320px]">
        {/* Calendly embed */}
        <div>
          <h2 className="text-xl font-semibold tracking-tight">
            Schedule Online
          </h2>
          <p className="mt-2 text-sm text-[hsl(var(--muted))]">
            Pick a date and time that works for you.
          </p>
          <div className="mt-4 h-[650px] overflow-hidden rounded-2xl border border-black/10 bg-white">
            <iframe
              src="https://calendly.com/judahnails"
              className="h-full w-full"
              title="Book an appointment"
            />
          </div>
        </div>

        {/* Sidebar info */}
        <div className="flex flex-col gap-5">
          {/* Hours card */}
          <div className="rounded-2xl bg-[hsl(var(--card))] p-5 shadow-sm">
            <h3 className="text-sm font-semibold">Hours</h3>
            <p className="mt-2 text-sm text-[hsl(var(--muted))] leading-relaxed">
              {site.hours}
            </p>
          </div>

          {/* Address card */}
          <div className="rounded-2xl bg-[hsl(var(--card))] p-5 shadow-sm">
            <h3 className="text-sm font-semibold">Address</h3>
            <p className="mt-2 text-sm text-[hsl(var(--muted))] leading-relaxed">
              {site.addressLine1}
            </p>
            <a
              href={`https://maps.google.com/?q=${encodeURIComponent(site.addressLine1)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm font-medium text-[hsl(var(--accent))]"
            >
              Open in Maps →
            </a>
          </div>

          {/* Connect card */}
          <div className="rounded-2xl bg-[hsl(var(--card))] p-5 shadow-sm">
            <h3 className="text-sm font-semibold">Connect</h3>
            <div className="mt-3 grid gap-2">
              <Button href={`tel:${site.phone}`} className="w-full">
                Call {formatPhone(site.phone)}
              </Button>
              <Button href={`sms:${site.phone}`} variant="ghost" className="w-full">
                Send a Text
              </Button>
              {site.social.facebook && (
                <a
                  href={site.social.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-center text-sm font-medium text-[hsl(var(--accent))] hover:underline"
                >
                  Facebook →
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
