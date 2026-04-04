import { PassportBlock } from "../components/chrome/PassportBlock";
import { Panel } from "../components/ui/Panel";
import { StatusLamp } from "../components/ui/StatusLamp";
import { useLocale } from "../lib/locale";

export function HeroSection() {
  const {
    strings: {
      common,
      sections: { hero },
    },
  } = useLocale();

  return (
    <section id="overview" className="scroll-mt-40 grid gap-4 xl:grid-cols-[minmax(0,1.4fr)_minmax(24rem,0.9fr)]">
      <Panel
        id="overview-panel"
        eyebrow={hero.panel.eyebrow}
        title={hero.panel.title}
        meta={hero.panel.meta}
        bodyClassName="space-y-5"
      >
        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.5fr)_minmax(18rem,0.85fr)]">
          <div className="space-y-5">
            <p className="max-w-3xl text-base leading-7 text-text-primary md:text-lg md:leading-8">{hero.description}</p>
            <div className="grid gap-3 md:grid-cols-3">
              {hero.summaryMetrics.map((metric) => (
                <div key={metric.id} className="surface-field px-4 py-4">
                  <div className="flex items-center justify-between gap-3">
                    <p className="mono-label text-text-secondary">{metric.label}</p>
                    <StatusLamp tone={metric.tone} />
                  </div>
                  <p className="mt-3 text-lg font-semibold text-text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{metric.note}</p>
                  <p className="mt-3 mono-label text-text-secondary">{common.toneLabels[metric.tone]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-elevated px-4 py-4">
            <div className="flex items-center gap-3">
              <StatusLamp tone="warning" />
              <div>
                <p className="kicker">{hero.operationalSummary.kicker}</p>
                <p className="text-sm leading-6 text-text-primary">{hero.operationalSummary.text}</p>
              </div>
            </div>
            <ul className="mt-4 space-y-3">
              {hero.operationalSummary.items.map((item, index) => {
                return (
                  <li key={item.id} className="flex items-start gap-3 border-t border-border-soft pt-3 first:border-t-0 first:pt-0">
                    <span className="passport-tag mt-0.5 min-w-[3rem] justify-center">{`0${index + 1}`}</span>
                    <p className="text-sm leading-6 text-text-secondary">{item.text}</p>
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
