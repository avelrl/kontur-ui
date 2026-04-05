import { useLocale } from "../lib/locale";
import { StatusLamp } from "../components/ui/StatusLamp";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";

export function MobileSuperappSection() {
  const {
    strings: {
      sections: { mobile },
    },
  } = useLocale();

  return (
    <section id="mobile" className="scroll-mt-40 space-y-4">
      <Panel
        id="mobile-intro"
        eyebrow={mobile.intro.eyebrow}
        title={mobile.intro.title}
        meta={mobile.intro.meta}
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(20rem,0.95fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{mobile.intro.description}</p>
        <div className="surface-field px-4 py-4">
          <p className="mono-label text-text-secondary">{mobile.intro.directionTitle}</p>
          <p className="mt-3 text-sm leading-6 text-text-primary">{mobile.intro.directionText}</p>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-3">
        {mobile.screens.map((screen) => (
          <Panel
            key={screen.id}
            id={`mobile-${screen.id}`}
            eyebrow={screen.subtitle}
            title={screen.title}
            meta={mobile.panelMeta}
            bodyClassName="flex justify-center"
          >
            <div className="phone-frame">
              <div className="phone-inner-frame">
                <div className="phone-topline">
                  <StatusLamp tone="success" />
                  <span className="mono-label text-text-secondary">{mobile.frame.stableChannel}</span>
                  <span className="mono-label text-text-secondary">{mobile.frame.time}</span>
                </div>
                <div className="phone-system-band">
                  <span className="mono-label text-text-secondary">{mobile.panelMeta}</span>
                  <span className="mono-label text-text-secondary">{screen.subtitle}</span>
                </div>
                <div className="phone-status-rack">
                  <span className="passport-tag">{mobile.frame.controlLabel}</span>
                  <span className="passport-tag">{mobile.frame.dockLabel}</span>
                </div>
                <div className="phone-content mt-3">
                  <div className="phone-module phone-module-head">
                    <p className="text-sm font-medium text-text-primary">{screen.title}</p>
                    <p className="mt-2 text-sm leading-6 text-text-secondary">{screen.subtitle}</p>
                  </div>
                  <div className="phone-module-list">
                    {screen.modules.map((module) => (
                      <div key={module.id} className="phone-module">
                        <div className="flex flex-wrap items-start justify-between gap-2">
                          <p className="min-w-0 flex-1 mono-label text-text-secondary">{module.label}</p>
                          <ToneBadge
                            tone={module.tone}
                            className="max-w-full shrink-0 px-2.5 py-1.5 text-[0.63rem] leading-[1.05] whitespace-nowrap"
                          >
                            {mobile.badgeLabels[module.tone]}
                          </ToneBadge>
                        </div>
                        <p className="mt-2.5 text-base font-semibold text-text-primary">{module.value}</p>
                      </div>
                    ))}
                  </div>
                  <div className="phone-module phone-module-note">
                    <p className="text-sm leading-6 text-text-secondary">{screen.footer}</p>
                  </div>
                </div>
                <div className="phone-dock mt-3">
                  <span className="phone-dock-indicator" />
                </div>
              </div>
            </div>
          </Panel>
        ))}
      </div>
    </section>
  );
}
