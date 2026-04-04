import { cn } from "../../lib/cn";
import type { Locale } from "../../data/locale";

type LocaleToggleProps = {
  locale: Locale;
  onLocaleChange: (locale: Locale) => void;
  title: string;
  activeLabel: string;
  groupAriaLabel: string;
  rootLangLabel: string;
  storageLabel: string;
  storageValue: string;
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
  rootLangLabel,
  storageLabel,
  storageValue,
  options,
}: LocaleToggleProps) {
  const activeOption = options.find((option) => option.value === locale);

  return (
    <div className="chrome-control-shell flex min-w-[14rem] flex-col gap-3" aria-label={title}>
      <div className="flex items-start justify-between gap-4">
        <div>
          <span className="kicker">{title}</span>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <span className="passport-tag border-border-strong bg-active-module text-text-primary">RU / EN</span>
            <span className="mono-label text-text-secondary">
              {activeLabel}: {activeOption?.fullLabel}
            </span>
          </div>
        </div>
        <span className="status-chip">{activeOption?.label}</span>
      </div>
      <div
        role="group"
        aria-label={groupAriaLabel}
        className="control-group grid grid-cols-2 p-1"
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
      <dl className="grid gap-2 sm:grid-cols-2">
        <div className="chrome-meta-tile">
          <dt className="mono-label text-text-secondary">{rootLangLabel}</dt>
          <dd className="mt-2 font-mono text-sm text-text-primary">{locale}</dd>
        </div>
        <div className="chrome-meta-tile">
          <dt className="mono-label text-text-secondary">{storageLabel}</dt>
          <dd className="mt-2 font-mono text-sm text-text-primary">{storageValue}</dd>
        </div>
      </dl>
    </div>
  );
}
