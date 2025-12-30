import Button from "@/components/ui/Button";
import { site } from "@/content/site";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 border-t border-black/10 bg-[hsl(var(--bg))]/90 backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
        <Button className="w-full" href={`tel:${site.phone}`}>Call Now</Button>
        <Button className="w-full" href="/contact" variant="ghost">Book</Button>
      </div>
    </div>
  );
}

