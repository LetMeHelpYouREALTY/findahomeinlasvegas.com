import Image from "next/image";
import { Phone, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { realtySiteConfig } from "@/lib/realty/site-config";

export function RealtyHero({
  eyebrow = `${realtySiteConfig.city}, ${realtySiteConfig.state} — ${realtySiteConfig.region}`,
  headline,
  subhead,
  primaryCtaLabel = "View Current Listings",
  primaryCtaHref = "#listings",
  imageSrc,
  imageAlt,
}: {
  eyebrow?: string;
  headline: string;
  subhead: string;
  primaryCtaLabel?: string;
  primaryCtaHref?: string;
  /** Unique full-bleed hero image for this page (required). */
  imageSrc: string;
  imageAlt: string;
}) {
  return (
    <section
      className="relative w-full overflow-hidden bg-background"
      aria-label="Hero"
    >
      {/* Full-bleed hero image plane */}
      <div className="absolute inset-0">
        <Image
          src={imageSrc}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Dark gradient so brand + headline stay readable on any photo */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/35"
        />
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-black/20"
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28 lg:py-32">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/30 px-3 py-1.5 text-xs font-medium text-white/90 backdrop-blur-sm">
          <MapPin className="h-3 w-3 text-primary" aria-hidden="true" />
          {eyebrow}
        </div>

        <h1 className="max-w-3xl text-balance text-4xl font-bold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
          {headline}
        </h1>

        <p className="mt-4 max-w-2xl text-pretty text-base leading-relaxed text-white/85 sm:text-lg">
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
            className="gap-2 border-white/40 bg-black/20 text-white backdrop-blur-sm hover:bg-white/10 hover:text-white"
          >
            <Phone className="h-4 w-4" aria-hidden="true" />
            Call {realtySiteConfig.phoneDisplay}
          </Button>
        </div>
      </div>
    </section>
  );
}
