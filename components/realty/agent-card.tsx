import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { realtySiteConfig } from "@/lib/realty/site-config";

export function RealtyAgentCard() {
  const initials = realtySiteConfig.agentName
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <Card className="border-border bg-card shadow-none">
      <CardHeader className="pb-0">
        <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full border-2 border-primary/40 bg-muted text-3xl font-bold text-primary">
          {initials}
        </div>
        <div className="mt-3 text-center">
          <p className="text-base font-semibold text-foreground">
            {realtySiteConfig.agentName}
          </p>
          <p className="mt-0.5 text-xs leading-snug text-muted-foreground">
            {realtySiteConfig.agentTitle}
          </p>
        </div>
      </CardHeader>

      <CardContent className="mt-4 flex flex-col gap-3">
        <Separator />
        <a
          href={`tel:${realtySiteConfig.phoneHref}`}
          className="flex items-center gap-2 text-sm text-foreground transition-colors hover:text-primary"
        >
          <Phone className="h-4 w-4 shrink-0 text-primary" aria-hidden="true" />
          {realtySiteConfig.phoneDisplay}
        </a>
        <Button
          render={<a href={`tel:${realtySiteConfig.phoneHref}`} />}
          className="mt-1 w-full bg-primary font-semibold text-primary-foreground hover:bg-primary/90"
        >
          Call {realtySiteConfig.agentName.split(" ")[0]}
        </Button>
        <p className="text-center text-xs text-muted-foreground">
          Free consultation · No obligation
        </p>
      </CardContent>
    </Card>
  );
}
