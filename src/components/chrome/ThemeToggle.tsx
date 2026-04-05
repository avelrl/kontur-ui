import { MonitorCog, MoonStar, SunMedium } from "lucide-react";
import { cn } from "../../lib/cn";
import type { ThemeMode } from "../../lib/theme";

type ThemeToggleProps = {
  mode: ThemeMode;
  onModeChange: (mode: ThemeMode) => void;
  title: string;
  activeLabel: string;
  groupAriaLabel: string;
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
  onModeChange,
  title,
  activeLabel,
  groupAriaLabel,
  options,
}: ThemeToggleProps) {
  const activeOption = options.find((option) => option.value === mode);

  return (
    <div className="chrome-control-shell flex min-w-[15rem] flex-col gap-2.5" aria-label={title}>
      <div className="space-y-1.5">
        <span className="kicker">{title}</span>
        <p className="text-sm leading-6 text-text-secondary">
          {activeLabel}: <span className="font-medium text-text-primary">{activeOption?.label}</span>
        </p>
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
                "inline-flex min-w-[4.8rem] items-center justify-center gap-1.5 rounded-[calc(var(--sys-radius-control)-2px)] border px-3 py-2.5 text-[0.82rem] font-medium transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
                isActive
                  ? "control-active"
                  : "border-transparent text-text-secondary hover:bg-highlight hover:text-text-primary",
              )}
              onClick={() => onModeChange(value)}
            >
              <Icon className="h-[1.05rem] w-[1.05rem] shrink-0" aria-hidden="true" />
              <span>{label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
