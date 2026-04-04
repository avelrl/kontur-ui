import type { StatusTone } from "../../data/demo";

export const statusBadgeToneClassMap: Record<StatusTone, string> = {
  normal: "border-border-soft bg-field text-text-secondary",
  service: "border-border-strong bg-active-module text-service-blue",
  success: "border-border-strong bg-active-module text-signal-green",
  warning: "border-border-strong bg-archive-block text-signal-amber",
  danger: "border-border-strong bg-archive-block text-signal-red",
};

export const statusLampToneClassMap: Record<StatusTone, string> = {
  normal: "bg-text-muted",
  service: "bg-service-blue",
  success: "bg-signal-green",
  warning: "bg-signal-amber",
  danger: "bg-signal-red",
};
