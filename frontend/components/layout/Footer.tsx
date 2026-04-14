import { site } from "@/content/site";
import Section from "@/components/ui/Section";
import { formatPhone } from "@/lib/utils";

export default function Footer() {
  return (
    <footer className="border-t border-black/5 pt-10 pb-24 md:pb-10">
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
	    {site.social.facebook && (
 <a
  href={site.social.facebook}
  target="_blank"
  rel="noopener noreferrer"
  className="mt-2 inline-block text-sm font-medium text-[hsl(var(--accent))] hover:underline"
>
  Visit our Facebook →
</a>)}
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-xs text-[hsl(var(--muted))]">
          <span>© {new Date().getFullYear()} {site.name}. All rights reserved.</span>
          <a
            href="https://www.apollosystems.tech/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 transition hover:text-[hsl(var(--text))]"
          >
            Powered by <span className="font-medium">Apollo Systems</span>
          </a>
        </div>
      </Section>
    </footer>
  );
}
