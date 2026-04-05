import { RadioTower, ScrollText } from "lucide-react";
import type { Locale } from "../../data/locale";
import { useLocale } from "../../lib/locale";
import type { ResolvedTheme, ThemeMode } from "../../lib/theme";
import { LocaleToggle } from "./LocaleToggle";
import { ThemeToggle } from "./ThemeToggle";

type TopStatusBarProps = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onModeChange: (mode: ThemeMode) => void;
};

export function TopStatusBar({ mode, resolvedTheme: _resolvedTheme, onModeChange }: TopStatusBarProps) {
  const { locale, setLocale, strings } = useLocale();
  const { topBar } = strings;

  return (
    <header className="sticky top-0 z-30 border-b border-border-strong bg-panel/96 shadow-panel backdrop-blur-[12px]">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-3 px-3 py-3 md:px-6 lg:px-8">
        <div className="flex flex-col gap-3 2xl:flex-row 2xl:items-start 2xl:justify-between">
          <div className="flex min-w-0 flex-col gap-3">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
              <div className="rounded-panel border border-border-strong bg-active-module px-4 py-3 shadow-panel inset-shadow-panel">
                <div className="flex items-center gap-3">
                  <span className="status-lamp bg-signal-green" aria-hidden="true" />
                  <div>
                    <p className="kicker">{topBar.productKicker}</p>
                    <p className="text-base font-semibold text-text-primary">{topBar.productTitle}</p>
                  </div>
                </div>
              </div>
              <nav aria-label={topBar.navAriaLabel} className="min-w-0 flex-1">
                <ul className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                  {topBar.sectionNavItems.map((item, index) => (
                    <li key={item.href}>
                      <a className="section-nav-chip" href={item.href}>
                        {index < 2 ? (
                          index === 0 ? (
                            <ScrollText className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <RadioTower className="h-4 w-4" aria-hidden="true" />
                          )
                        ) : null}
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
            <dl className="grid gap-2 lg:grid-cols-3">
              {topBar.statusItems.map((item) => (
                <div key={item.id} className="status-block">
                  <dt className="mono-label text-text-secondary">{item.label}</dt>
                  <dd className="mt-1.5 text-sm font-medium text-text-primary">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="grid gap-3 xl:grid-cols-[minmax(14rem,0.92fr)_minmax(16rem,1.08fr)] 2xl:min-w-[33rem]">
            <LocaleToggle
              locale={locale}
              onLocaleChange={setLocale}
              title={topBar.localeToggle.title}
              activeLabel={topBar.localeToggle.activeLabel}
              groupAriaLabel={topBar.localeToggle.groupAriaLabel}
              options={topBar.localeToggle.options as Array<{ value: Locale; label: string; fullLabel: string }>}
            />
            <ThemeToggle
              mode={mode}
              onModeChange={onModeChange}
              title={topBar.themeToggle.title}
              activeLabel={topBar.themeToggle.activeLabel}
              groupAriaLabel={topBar.themeToggle.groupAriaLabel}
              options={topBar.themeToggle.options as Array<{ value: ThemeMode; label: string; buttonLabel: string }>}
            />
          </div>
        </div>
      </div>
    </header>
  );
}
