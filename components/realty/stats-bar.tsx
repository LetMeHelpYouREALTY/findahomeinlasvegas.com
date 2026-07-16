import type { LucideIcon } from "lucide-react";
import { TrendingUp, Home, Clock, BarChart2 } from "lucide-react";

export interface RealtyStat {
  icon?: LucideIcon;
  value: string;
  label: string;
  note?: string;
}

const DEFAULT_ICONS: LucideIcon[] = [TrendingUp, Home, Clock, BarChart2];

export function RealtyStatsBar({
  title = "Las Vegas Market Snapshot",
  stats,
}: {
  title?: string;
  stats: RealtyStat[];
}) {
  return (
    <section aria-label={title} className="w-full border-b border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
        <p className="mb-6 text-xs font-semibold uppercase tracking-widest text-muted-foreground">
          {title}
        </p>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon ?? DEFAULT_ICONS[index % DEFAULT_ICONS.length];
            return (
              <div
                key={stat.label}
                className="flex flex-col gap-1 rounded-lg border border-border bg-card p-4 transition-colors hover:border-primary/40"
              >
                <div className="flex items-center gap-1.5 text-primary">
                  <Icon className="h-4 w-4" aria-hidden="true" />
                  <span className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                    {stat.label}
                  </span>
                </div>
                <p className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  {stat.value}
                </p>
                {stat.note && (
                  <p className="text-xs text-muted-foreground">{stat.note}</p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
