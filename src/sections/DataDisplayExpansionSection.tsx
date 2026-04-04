import { BookText, Radar, Scale, SquareActivity } from "lucide-react";
import type { StatusTone } from "../data/demo";
import { MetricBars } from "../components/ui/MetricBars";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";
import { cn } from "../lib/cn";
import { useLocale } from "../lib/locale";

const toneBgClassMap: Record<StatusTone, string> = {
  normal: "bg-text-muted",
  service: "bg-service-blue",
  success: "bg-signal-green",
  warning: "bg-signal-amber",
  danger: "bg-signal-red",
};

export function DataDisplayExpansionSection() {
  const {
    strings: {
      common,
      sections: { dataDisplay },
    },
  } = useLocale();

  return (
    <section id="data-display" className="scroll-mt-40 space-y-4">
      <Panel
        id="data-display-intro"
        eyebrow={dataDisplay.intro.eyebrow}
        title={dataDisplay.intro.title}
        meta={dataDisplay.intro.meta}
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(19rem,0.88fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{dataDisplay.intro.description}</p>
        <div className="grid gap-3">
          <div className="surface-field px-4 py-4">
            <p className="mono-label text-text-secondary">{dataDisplay.intro.patternsTitle}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <ToneBadge tone="success">{common.toneLabels.success}</ToneBadge>
              <ToneBadge tone="service">{common.toneLabels.service}</ToneBadge>
              <ToneBadge tone="warning">{common.toneLabels.warning}</ToneBadge>
              <ToneBadge tone="danger">{common.toneLabels.danger}</ToneBadge>
            </div>
          </div>
          <div className="surface-inset px-4 py-4">
            <p className="mono-label text-text-secondary">{dataDisplay.intro.registryNoteTitle}</p>
            <div className="mt-3 space-y-2.5">
              {dataDisplay.intro.registryNoteLines.map((line) => (
                <p key={line} className="text-sm leading-6 text-text-secondary">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
        <Panel
          id="analytics"
          eyebrow={dataDisplay.analytics.eyebrow}
          title={dataDisplay.analytics.title}
          meta={dataDisplay.analytics.meta}
          bodyClassName="grid gap-4 md:grid-cols-3"
        >
          {dataDisplay.analytics.cards.map((card) => (
            <div key={card.id} className="surface-field p-4">
              <p className="mono-label text-text-secondary">{card.label}</p>
              <p className="mt-3 text-2xl font-semibold text-text-primary">{card.value}</p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{card.note}</p>
              <div className="mt-4">
                <MetricBars values={card.bars} tone={card.tone} />
              </div>
            </div>
          ))}
        </Panel>

        <Panel
          id="system-cards"
          eyebrow={dataDisplay.systemCards.eyebrow}
          title={dataDisplay.systemCards.title}
          meta={dataDisplay.systemCards.meta}
          bodyClassName="space-y-4"
        >
          <div className="space-y-3">
            {dataDisplay.systemCards.scales.map((scale) => (
              <div key={scale.id} className="surface-field p-4">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-text-primary">{scale.label}</p>
                  <span className="mono-label text-text-secondary">{scale.value}%</span>
                </div>
                <div className="mt-3 h-2 rounded-full bg-panel">
                  <div
                    className={cn("h-full rounded-full", toneBgClassMap[scale.tone])}
                    style={{ width: `${scale.value}%` }}
                    aria-hidden="true"
                  />
                </div>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{scale.caption}</p>
              </div>
            ))}
          </div>

          <div className="grid gap-3">
            {dataDisplay.systemCards.cards.map((card) => (
              <div key={card.id} className="surface-elevated p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-sm font-medium text-text-primary">{card.title}</p>
                    <p className="mt-1 mono-label text-text-secondary">{card.meta}</p>
                  </div>
                  <ToneBadge tone={card.tone}>{card.state}</ToneBadge>
                </div>
                <p className="mt-3 text-sm leading-6 text-text-secondary">{card.detail}</p>
              </div>
            ))}
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(20rem,0.84fr)_minmax(0,1.16fr)]">
        <Panel
          id="docs-modules"
          eyebrow={dataDisplay.docsModules.eyebrow}
          title={dataDisplay.docsModules.title}
          meta={dataDisplay.docsModules.meta}
          bodyClassName="space-y-4"
        >
          {dataDisplay.docsModules.modules.map((module) => (
            <div key={module.id} className="surface-field p-4">
              <div className="flex items-center gap-2">
                <BookText className="h-4 w-4 text-service-blue" aria-hidden="true" />
                <p className="text-sm font-medium text-text-primary">{module.title}</p>
              </div>
              <div className="mt-3 space-y-2">
                {module.lines.map((line) => (
                  <p key={line} className="text-sm leading-6 text-text-secondary">
                    {line}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </Panel>

        <Panel
          id="registry-state-table"
          eyebrow={dataDisplay.registryTable.eyebrow}
          title={dataDisplay.registryTable.title}
          meta={dataDisplay.registryTable.meta}
          bodyClassName="space-y-4 px-0 py-0"
          footer={
            <div className="grid gap-4 xl:grid-cols-[minmax(18rem,0.9fr)_minmax(0,1.1fr)]">
              <div className="surface-field px-4 py-4">
                <p className="mono-label text-text-secondary">{dataDisplay.registryTable.stateKeyTitle}</p>
                <div className="mt-3 space-y-3">
                  {dataDisplay.registryTable.stateKeyItems.map((item) => (
                    <div key={item.id} className="rounded-control border border-border-soft bg-canvas px-3 py-3">
                      <ToneBadge tone={item.tone} className="px-2.5 py-1.5 text-[0.68rem]">
                        {item.label}
                      </ToneBadge>
                      <p className="mt-2 text-sm leading-6 text-text-secondary">{item.text}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="surface-inset px-4 py-4">
                <p className="mono-label text-text-secondary">{dataDisplay.registryTable.serviceMemoTitle}</p>
                <div className="mt-3 space-y-2.5">
                  {dataDisplay.registryTable.serviceMemoLines.map((line) => (
                    <p key={line} className="text-sm leading-6 text-text-secondary">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <div className="flex items-center justify-between gap-3 border-b border-border-soft px-4 py-3 md:px-5">
            <div className="flex items-center gap-2">
              <SquareActivity className="h-4 w-4 text-service-blue" aria-hidden="true" />
              <p className="text-sm text-text-primary">{dataDisplay.registryTable.introText}</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Radar className="h-4 w-4 text-signal-green" aria-hidden="true" />
              <Scale className="h-4 w-4 text-signal-amber" aria-hidden="true" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <caption className="sr-only">{dataDisplay.registryTable.caption}</caption>
              <thead>
                <tr className="bg-field text-xs uppercase tracking-[0.24em] text-text-secondary">
                  <th className="px-4 py-3 font-mono font-normal md:px-5">{dataDisplay.registryTable.columns.code}</th>
                  <th className="px-4 py-3 font-mono font-normal">{dataDisplay.registryTable.columns.module}</th>
                  <th className="px-4 py-3 font-mono font-normal">{dataDisplay.registryTable.columns.owner}</th>
                  <th className="px-4 py-3 font-mono font-normal">{dataDisplay.registryTable.columns.sync}</th>
                  <th className="px-4 py-3 font-mono font-normal">{dataDisplay.registryTable.columns.state}</th>
                  <th className="px-4 py-3 font-mono font-normal md:px-5">{dataDisplay.registryTable.columns.action}</th>
                </tr>
              </thead>
              <tbody>
                {dataDisplay.registryTable.rows.map((row) => (
                  <tr key={row.code} className="border-t border-border-soft">
                    <td className="px-4 py-4 font-mono text-sm text-text-primary md:px-5">{row.code}</td>
                    <td className="px-4 py-4 text-sm font-medium text-text-primary">{row.module}</td>
                    <td className="px-4 py-4 text-sm leading-6 text-text-secondary">{row.owner}</td>
                    <td className="px-4 py-4 text-sm leading-6 text-text-secondary">{row.sync}</td>
                    <td className="px-4 py-4">
                      <ToneBadge tone={row.tone}>{row.state}</ToneBadge>
                    </td>
                    <td className="px-4 py-4 text-sm leading-6 text-text-secondary md:px-5">{row.action}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Panel>
      </div>
    </section>
  );
}
