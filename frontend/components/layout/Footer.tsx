import { site } from "@/content/site";
import Section from "@/components/ui/Section";
import { formatPhone } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 py-10">
      <Section>
        <div className="grid gap-6 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold">{site.name}</div>
            <p className="mt-2 text-sm text-[hsl(var(--muted))]">
              Simple, clean, detailed nail care — with a calm, soothing vibe.
            </p>
          </div>

          <div>
            <div className="text-sm font-semibold">Hours</div>
            <p className="mt-2 text-sm text-[hsl(var(--muted))]">{site.hours}</p>
          </div>

          <div>
            <div className="text-sm font-semibold">Contact</div>
            <p className="mt-2 text-sm text-[hsl(var(--muted))]">{formatPhone(site.phone)}</p>
            <p className="text-sm text-[hsl(var(--muted))]">{site.addressLine1}</p>
          </div>
        </div>

        <div className="mt-8 text-xs text-[hsl(var(--muted))]">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </Section>
    </footer>
  );
}

