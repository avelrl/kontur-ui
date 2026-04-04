import { MonitorCog, MoonStar, SunMedium } from "lucide-react";
import { cn } from "../../lib/cn";
import type { ResolvedTheme, ThemeMode } from "../../lib/theme";

type ThemeToggleProps = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onModeChange: (mode: ThemeMode) => void;
  title: string;
  activeLabel: string;
  groupAriaLabel: string;
  resolvedThemeLabels: Record<ResolvedTheme, string>;
  options: Array<{
    value: ThemeMode;
    label: string;
    buttonLabel: string;
  }>;
};

const themeIconMap: Record<ThemeMode, typeof SunMedium> = {
  light: SunMedium,
  dark: MoonStar,
  system: MonitorCog,
};

export function ThemeToggle({
  mode,
  resolvedTheme,
  onModeChange,
  title,
  activeLabel,
  groupAriaLabel,
  resolvedThemeLabels,
  options,
}: ThemeToggleProps) {
  const activeOption = options.find((option) => option.value === mode);

  return (
    <div className="chrome-control-shell flex min-w-[16rem] flex-col gap-3" aria-label={title}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="kicker">{title}</span>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="passport-tag border-border-strong bg-elevated text-text-primary">
              {resolvedThemeLabels[resolvedTheme]}
            </span>
            <span className="mono-label text-text-secondary">
              {activeLabel}: {resolvedThemeLabels[resolvedTheme]}
            </span>
          </div>
        </div>
        <span className="status-chip">{activeOption?.label}</span>
      </div>
      <div
        role="group"
        aria-label={groupAriaLabel}
        className="control-group inline-flex p-1"
      >
        {options.map(({ label, value, buttonLabel }) => {
          const isActive = mode === value;
          const Icon = themeIconMap[value];

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              aria-label={buttonLabel}
              className={cn(
                "inline-flex min-w-[4.9rem] items-center justify-center gap-2 rounded-[calc(var(--sys-radius-control)-2px)] border px-3 py-2 text-sm font-medium transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
                isActive
                  ? "control-active"
                  : "border-transparent text-text-secondary hover:bg-highlight hover:text-text-primary",
              )}
              onClick={() => onModeChange(value)}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
