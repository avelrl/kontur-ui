import { RadioTower, ScrollText } from "lucide-react";
import { sectionNavItems, topStatusItems } from "../../data/demo";
import type { ResolvedTheme, ThemeMode } from "../../lib/theme";
import { ThemeToggle } from "./ThemeToggle";

type TopStatusBarProps = {
  mode: ThemeMode;
  resolvedTheme: ResolvedTheme;
  onModeChange: (mode: ThemeMode) => void;
};

export function TopStatusBar({ mode, resolvedTheme, onModeChange }: TopStatusBarProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border-strong bg-panel shadow-panel">
      <div className="mx-auto flex max-w-[1560px] flex-col gap-4 px-3 py-3 md:px-6 lg:px-8 xl:flex-row xl:items-start xl:justify-between">
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            <div className="flex items-center gap-3">
              <span className="status-lamp bg-signal-green" aria-hidden="true" />
              <div>
                <p className="kicker">Контур интерфейса</p>
                <p className="text-base font-semibold text-text-primary">Контур / Рабочий стенд</p>
              </div>
            </div>
            <nav aria-label="Основные разделы стенда">
              <ul className="flex flex-wrap items-center gap-2 text-sm text-text-secondary">
                {sectionNavItems.map((item, index) => (
                  <li key={item.href}>
                    <a className="status-chip" href={item.href}>
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
          <dl className="grid gap-2 md:grid-cols-3">
            {topStatusItems.map((item) => (
              <div key={item.label} className="status-block">
                <dt className="mono-label text-text-secondary">{item.label}</dt>
                <dd className="mt-1 text-sm font-medium text-text-primary">{item.value}</dd>
              </div>
            ))}
          </dl>
        </div>
        <ThemeToggle mode={mode} resolvedTheme={resolvedTheme} onModeChange={onModeChange} />
      </div>
    </header>
  );
}
