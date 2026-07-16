import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { realtySiteConfig } from "@/lib/realty/site-config";

export function RealtyHero({
  eyebrow = `${realtySiteConfig.city}, ${realtySiteConfig.state} — ${realtySiteConfig.region}`,
  headline,
  subhead,
  primaryCtaLabel = "View Current Listings",
  primaryCtaHref = "#listings",
}: {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
}) {
  return (
    <section className="relative w-full overflow-hidden bg-background" aria-label="Hero">
      <div className="relative mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:py-28">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-muted-foreground">
          <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
          {eyebrow}
        </div>

        <h1 className="text-balance text-4xl font-bold leading-tight tracking-tight text-foreground sm:text-5xl">
          {headline}
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
          {subhead}
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Button
            render={<a href={primaryCtaHref} />}
            size="lg"
            className="gap-2 bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
          >
            {primaryCtaLabel}
          </Button>
          <Button
            render={<a href={`tel:${realtySiteConfig.phoneHref}`} />}
            variant="outline"
            size="lg"
            className="gap-2 border-border text-foreground hover:bg-secondary"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {realtySiteConfig.phoneDisplay}
          </Button>
        </div>
      </div>
      <div className="h-px w-full bg-border" aria-hidden="true" />
    </section>
  );
}
