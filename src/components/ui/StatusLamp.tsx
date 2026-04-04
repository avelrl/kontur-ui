import type { StatusTone } from "../../data/demo";
import { cn } from "../../lib/cn";
import { statusLampToneClassMap } from "./statusTone";

type StatusLampProps = {
  tone: StatusTone;
  className?: string;
};

export function StatusLamp({ tone, className }: StatusLampProps) {
  return <span className={cn("status-lamp", statusLampToneClassMap[tone], className)} aria-hidden="true" />;
}
