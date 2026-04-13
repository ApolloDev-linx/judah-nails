import Button from "@/components/ui/Button";
import { site } from "@/content/site";

export default function MobileCTA() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden">
      {/* Subtle top shadow for depth */}
      <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent" />
      <div className="bg-[hsl(var(--bg))]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-3 px-4 py-3">
          <Button className="w-full py-2.5" href={`tel:${site.phone}`}>
            Call Now
          </Button>
          <Button className="w-full py-2.5" href="/contact" variant="outline">
            Book
          </Button>
        </div>
        {/* Safe area padding for notched phones */}
        <div className="h-[env(safe-area-inset-bottom)]" />
      </div>
    </div>
  );
}
