import { mobileScreens, toneLabelMap } from "../data/demo";
import { StatusLamp } from "../components/ui/StatusLamp";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";

export function MobileSuperappSection() {
  return (
    <section id="mobile" className="scroll-mt-40 space-y-4">
      <Panel
        id="mobile-intro"
        eyebrow="Mobile superapp preview"
        title="Карманный контур участия"
        meta="MOBILE / PREVIEW"
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Мобильная версия не превращается в банкинг или маркетплейс. Это карманный терминал участия в проектах,
          кругах и мастерских, где важны обзор дня, лабораторный модуль и обсуждение по теме рядом.
        </p>
        <div className="rounded-control border border-border-soft bg-field px-4 py-4">
          <p className="mono-label text-text-secondary">Направление</p>
          <p className="mt-3 text-sm leading-6 text-text-primary">
            Наука, творчество, самореализация, кружки, мастерские и совместная работа без платежной риторики.
          </p>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-3">
        {mobileScreens.map((screen) => (
          <Panel
            key={screen.title}
            id={`mobile-${screen.title}`}
            eyebrow={screen.subtitle}
            title={screen.title}
            meta="PHONE / MODULE"
            className="h-full"
            bodyClassName="flex justify-center"
          >
            <div className="phone-frame">
              <div className="phone-topline">
                <StatusLamp tone="success" />
                <span className="mono-label text-text-secondary">Канал устойчив</span>
                <span className="mono-label text-text-secondary">17:40</span>
              </div>
              <div className="space-y-4">
                <div className="rounded-control border border-border-soft bg-elevated p-3">
                  <p className="text-sm font-medium text-text-primary">{screen.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{screen.subtitle}</p>
                </div>
                <div className="space-y-3">
                  {screen.modules.map((module) => (
                    <div key={module.label} className="rounded-control border border-border-soft bg-field p-3">
                      <div className="flex items-center justify-between gap-3">
                        <p className="mono-label text-text-secondary">{module.label}</p>
                        <ToneBadge tone={module.tone} className="px-2.5 py-1.5 text-[0.68rem]">
                          {toneLabelMap[module.tone]}
                        </ToneBadge>
                      </div>
                      <p className="mt-3 text-base font-medium text-text-primary">{module.value}</p>
                    </div>
                  ))}
                </div>
                <div className="rounded-control border border-border-soft bg-field p-3">
                  <p className="text-sm leading-6 text-text-secondary">{screen.footer}</p>
                </div>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
