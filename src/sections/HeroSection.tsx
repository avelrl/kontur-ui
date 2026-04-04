import { Layers3, RadioTower, ScrollText } from "lucide-react";
import { operationalSummary, summaryMetrics, toneLabelMap } from "../data/demo";
import { PassportBlock } from "../components/chrome/PassportBlock";
import { Panel } from "../components/ui/Panel";
import { StatusLamp } from "../components/ui/StatusLamp";

export function HeroSection() {
  return (
    <section id="overview" className="scroll-mt-40 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(24rem,0.9fr)]">
      <Panel
        id="overview-panel"
        eyebrow="Визуальная система / Контур"
        title="Тема интерфейса «Контур»"
        meta="MAIN / SURFACE"
        bodyClassName="space-y-6"
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)]">
          <div className="space-y-5">
            <p className="max-w-3xl text-base leading-7 text-text-primary md:text-lg">
              Цифровая среда строится как взрослая рабочая поверхность: без лендинговой витрины, без мягких
              SaaS-карточек, с приоритетом журналов, паспортов модулей, архивных таблиц и служебных контуров.
            </p>
            <div className="grid gap-3 md:grid-cols-3">
              {summaryMetrics.map((metric) => (
                <div key={metric.label} className="rounded-control border border-border-soft bg-field px-4 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="mono-label text-text-secondary">{metric.label}</p>
                    <StatusLamp tone={metric.tone} />
                  </div>
                  <p className="mt-3 text-lg font-semibold text-text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{metric.note}</p>
                  <p className="mt-3 mono-label text-text-secondary">{toneLabelMap[metric.tone]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-control border border-border-soft bg-elevated p-4">
            <div className="flex items-center gap-3">
              <StatusLamp tone="warning" />
              <div>
                <p className="kicker">Оперативная сводка</p>
                <p className="text-sm leading-6 text-text-primary">Текущий стенд фиксирует первичный приборный язык темы.</p>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {operationalSummary.map((item, index) => {
                const Icon = index === 0 ? Layers3 : index === 1 ? ScrollText : RadioTower;

                return (
                  <li key={item} className="flex items-start gap-3 border-t border-border-soft pt-3 first:border-t-0 first:pt-0">
                    <Icon className="mt-1 h-4 w-4 text-service-blue" aria-hidden="true" />
                    <p className="text-sm leading-6 text-text-secondary">{item}</p>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </Panel>
      <PassportBlock />
    </section>
  );
}
