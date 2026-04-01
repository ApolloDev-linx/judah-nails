import Section from "@/components/ui/Section";
import { serviceCategories } from "@/content/services";

export default function ServicesPage() {
  return (
    <Section className="py-12">
      <h1 className="text-3xl font-semibold">Services & Pricing</h1>
      <p className="mt-2 text-[hsl(var(--muted))]">
  This is a preview of our services. For additional options or custom requests, feel free to call or reach out.
</p>
      <div className="mt-8 grid gap-6 md:grid-cols-2">
        {serviceCategories.map((cat) => (
          <div key={cat.title} className="rounded-3xl bg-[hsl(var(--card))] p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{cat.title}</h2>
            <div className="mt-4 space-y-3">
              {cat.items.map((item) => (
                <div key={item.name} className="flex items-baseline justify-between gap-4">
                  <div className="text-sm">{item.name}</div>
                  <div className="text-sm font-semibold">{item.price}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

