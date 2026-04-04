import { BookText, Radar, Scale, SquareActivity } from "lucide-react";
import {
  analyticsCards,
  documentationModules,
  progressScales,
  registryRows,
  systemStateCards,
  type StatusTone,
} from "../data/demo";
import { MetricBars } from "../components/ui/MetricBars";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";
import { cn } from "../lib/cn";

const toneBgClassMap: Record<StatusTone, string> = {
  normal: "bg-text-muted",
  service: "bg-service-blue",
  success: "bg-signal-green",
  warning: "bg-signal-amber",
  danger: "bg-signal-red",
};

export function DataDisplayExpansionSection() {
  return (
    <section id="data-display" className="scroll-mt-40 space-y-4">
      <Panel
        id="data-display-intro"
        eyebrow="Data display expansion"
        title="Показатели, шкалы, state cards и документационные модули"
        meta="ANALYTICS / STATES / REGISTRY"
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.15fr)_minmax(18rem,0.85fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Data-display строится не как витрина KPI, а как система чтения состояния: аналитические блоки показывают
          динамику, шкалы фиксируют степень готовности, системные карточки удерживают статус контура, а реестры
          и таблицы показывают, что нужно делать дальше.
        </p>
        <div className="rounded-control border border-border-soft bg-field px-4 py-4">
          <p className="mono-label text-text-secondary">State patterns</p>
          <div className="mt-3 flex flex-wrap gap-2">
            <ToneBadge tone="success">Штатно</ToneBadge>
            <ToneBadge tone="service">Служебный контур</ToneBadge>
            <ToneBadge tone="warning">Требует подтверждения</ToneBadge>
            <ToneBadge tone="danger">Нарушение контура</ToneBadge>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]">
        <Panel
          id="analytics"
          eyebrow="Аналитические блоки"
          title="Измерения и динамика"
          meta="ANALYTICS / MINI-CHARTS"
          bodyClassName="grid gap-4 md:grid-cols-3"
        >
          {analyticsCards.map((card) => (
            <div key={card.label} className="rounded-control border border-border-soft bg-field p-4">
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
          eyebrow="Системные карточки состояния"
          title="Шкалы готовности и состояния"
          meta="SCALES / STATUS"
          bodyClassName="space-y-4"
        >
          <div className="space-y-3">
            {progressScales.map((scale) => (
              <div key={scale.label} className="rounded-control border border-border-soft bg-field p-4">
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
            {systemStateCards.map((card) => (
              <div key={card.title} className="rounded-control border border-border-soft bg-elevated p-4">
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
          eyebrow="Документационные модули"
          title="Служебные блоки объяснения"
          meta="DOCS / GUIDES"
          bodyClassName="space-y-4"
        >
          {documentationModules.map((module) => (
            <div key={module.title} className="rounded-control border border-border-soft bg-field p-4">
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
          eyebrow="Реестры и state patterns"
          title="Операционный реестр модулей"
          meta="REGISTRY / ACTIONS"
          bodyClassName="space-y-4 px-0 py-0"
        >
          <div className="flex items-center justify-between gap-3 border-b border-border-soft px-4 py-3 md:px-5">
            <div className="flex items-center gap-2">
              <SquareActivity className="h-4 w-4 text-service-blue" aria-hidden="true" />
              <p className="text-sm text-text-primary">В таблице у каждой строки есть состояние, канал и следующее действие.</p>
            </div>
            <div className="flex items-center gap-2 text-xs text-text-secondary">
              <Radar className="h-4 w-4 text-signal-green" aria-hidden="true" />
              <Scale className="h-4 w-4 text-signal-amber" aria-hidden="true" />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse text-left">
              <caption className="sr-only">Операционный реестр модулей</caption>
              <thead>
                <tr className="bg-field text-xs uppercase tracking-[0.24em] text-text-secondary">
                  <th className="px-4 py-3 font-mono font-normal md:px-5">Код</th>
                  <th className="px-4 py-3 font-mono font-normal">Модуль</th>
                  <th className="px-4 py-3 font-mono font-normal">Ответственный</th>
                  <th className="px-4 py-3 font-mono font-normal">Синхронизация</th>
                  <th className="px-4 py-3 font-mono font-normal">Состояние</th>
                  <th className="px-4 py-3 font-mono font-normal md:px-5">Следующее действие</th>
                </tr>
              </thead>
              <tbody>
                {registryRows.map((row) => (
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
