import type { CSSProperties } from "react";
import type { StatusTone } from "../../data/demo";
import { cn } from "../../lib/cn";

type MetricBarsProps = {
  values: number[];
  tone: StatusTone;
};

const toneClassMap: Record<StatusTone, string> = {
  normal: "bg-text-muted",
  service: "bg-service-blue",
  success: "bg-signal-green",
  warning: "bg-signal-amber",
  danger: "bg-signal-red",
};

export function MetricBars({ values, tone }: MetricBarsProps) {
  return (
    <div className="flex h-16 items-end gap-1.5" aria-hidden="true">
      {values.map((value, index) => (
        <span
          key={`${tone}-${index}`}
          className={cn("min-w-0 flex-1 rounded-t-[2px] opacity-80", toneClassMap[tone])}
          style={{ height: `${Math.max(value, 10)}%` } as CSSProperties}
        />
      ))}
    </div>
  );
}
