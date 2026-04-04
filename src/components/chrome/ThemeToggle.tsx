import { MonitorCog, MoonStar, SunMedium } from "lucide-react";
import { cn } from "../../lib/cn";
import type { ResolvedTheme, ThemeMode } from "../../lib/theme";

type ThemeToggleProps = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onModeChange: (mode: ThemeMode) => void;
};

const themeOptions: Array<{
  label: string;
  value: ThemeMode;
  icon: typeof SunMedium;
}> = [
  { label: "Светлая", value: "light", icon: SunMedium },
  { label: "Тёмная", value: "dark", icon: MoonStar },
  { label: "Системная", value: "system", icon: MonitorCog },
];

export function ThemeToggle({ mode, resolvedTheme, onModeChange }: ThemeToggleProps) {
  return (
    <div className="flex flex-col gap-2" aria-label="Управление темой">
      <div className="flex items-center justify-between gap-4">
        <span className="kicker">Режим отображения</span>
        <span className="mono-label text-text-secondary">Активно: {resolvedTheme}</span>
      </div>
      <div
        role="group"
        aria-label="Переключатель темы"
        className="inline-flex rounded-control border border-border-strong bg-field p-1 inset-shadow-panel"
      >
        {themeOptions.map(({ label, value, icon: Icon }) => {
          const isActive = mode === value;

          return (
            <button
              key={value}
              type="button"
              aria-pressed={isActive}
              aria-label={`${label} тема`}
              className={cn(
                "inline-flex min-w-[7.4rem] items-center justify-center gap-2 rounded-[calc(var(--sys-radius-control)-2px)] px-3 py-2 text-sm font-medium transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
                isActive
                  ? "bg-elevated text-text-primary shadow-panel"
                  : "text-text-secondary hover:bg-highlight hover:text-text-primary",
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

