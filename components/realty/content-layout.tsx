import { RealtyAgentCard } from "@/components/realty/agent-card";
import { realtySiteConfig } from "@/lib/realty/site-config";

export function RealtyContentLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section aria-label="Article" className="w-full border-b border-border bg-background">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <div className="flex flex-col gap-10 lg:flex-row lg:gap-14">
          <article className="min-w-0 flex-1">{children}</article>

          <aside className="w-full shrink-0 lg:w-72 xl:w-80">
            <div className="lg:sticky lg:top-24">
              <RealtyAgentCard />
              <div className="mt-4 rounded-lg border border-border bg-card p-4 text-center">
                <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Licensed in Nevada
                </p>
                <p className="mt-1 text-xs text-muted-foreground">
                  NV Lic. #{realtySiteConfig.licenseNumber} · Brokered by{" "}
                  {realtySiteConfig.brokerage}
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
