import type { StatusTone } from "../../data/demo";

export const statusBadgeToneClassMap: Record<StatusTone, string> = {
  normal: "border-border-soft bg-field text-text-secondary",
  service: "border-border-soft bg-elevated text-service-blue",
  success: "border-border-soft bg-elevated text-signal-green",
  warning: "border-border-soft bg-elevated text-signal-amber",
  danger: "border-border-soft bg-elevated text-signal-red",
};

export const statusLampToneClassMap: Record<StatusTone, string> = {
  normal: "bg-text-muted",
  service: "bg-service-blue",
  success: "bg-signal-green",
  warning: "bg-signal-amber",
  danger: "bg-signal-red",
};
