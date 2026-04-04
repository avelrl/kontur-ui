import { cn } from "../../lib/cn";
import type { Locale } from "../../data/locale";

type LocaleToggleProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  title: string;
  activeLabel: string;
  groupAriaLabel: string;
  options: Array<{
    value: Locale;
    label: string;
    fullLabel: string;
  }>;
};

export function LocaleToggle({
  locale,
  onLocaleChange,
  title,
  activeLabel,
  groupAriaLabel,
  options,
}: LocaleToggleProps) {
  const activeOption = options.find((option) => option.value === locale);

  return (
    <div className="flex min-w-[10.5rem] flex-col gap-2" aria-label={title}>
      <div className="flex items-center justify-between gap-4">
        <span className="kicker">{title}</span>
        <span className="mono-label text-text-secondary">
          {activeLabel}: {activeOption?.label}
        </span>
      </div>
      <div
        role="group"
        aria-label={groupAriaLabel}
        className="control-group inline-flex p-1"
      >
        {options.map((option) => {
          const isActive = option.value === locale;

          return (
            <button
              key={option.value}
              type="button"
              aria-pressed={isActive}
              aria-label={option.fullLabel}
              className={cn(
                "inline-flex min-w-[4.25rem] items-center justify-center rounded-[calc(var(--sys-radius-control)-2px)] border px-3 py-2 font-mono text-[0.76rem] leading-none tracking-[0.14em] uppercase transition-colors duration-150",
                "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel",
                isActive
                  ? "control-active"
                  : "border-transparent text-text-secondary hover:bg-highlight hover:text-text-primary",
              )}
              onClick={() => onLocaleChange(option.value)}
            >
              {option.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}
