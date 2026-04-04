import type { ReactNode } from "react";
import type { StatusTone } from "../../data/demo";
import { cn } from "../../lib/cn";
import { StatusLamp } from "./StatusLamp";
import { statusBadgeToneClassMap } from "./statusTone";

type ToneBadgeProps = {
  tone: StatusTone;
  children: ReactNode;
  className?: string;
};

export function ToneBadge({ tone, className, children }: ToneBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 rounded-control border px-3 py-2 font-mono text-[0.72rem] leading-none tracking-[0.12em] uppercase shadow-panel inset-shadow-panel",
        statusBadgeToneClassMap[tone],
        className,
      )}
    >
      <StatusLamp tone={tone} />
      {children}
    </span>
  );
}
