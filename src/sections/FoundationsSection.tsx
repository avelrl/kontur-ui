import { Panel } from "../components/ui/Panel";
import { useLocale } from "../lib/locale";

export function FoundationsSection() {
  const {
    strings: {
      sections: { foundations },
    },
  } = useLocale();

  return (
    <section id="foundations" className="scroll-mt-40 space-y-4">
      <Panel
        id="foundations-intro"
        eyebrow={foundations.intro.eyebrow}
        title={foundations.intro.title}
        meta={foundations.intro.meta}
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.14fr)_minmax(19rem,0.86fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{foundations.intro.description}</p>
        <div className="grid gap-3">
          <div className="surface-field px-4 py-4">
            <p className="mono-label text-text-secondary">{foundations.intro.sideTitle}</p>
            <div className="mt-3 space-y-3">
              {foundations.intro.surfaceLayers.map((layer) => (
                <div key={layer.id} className="surface-elevated px-3 py-3">
                  <p className="text-sm font-medium text-text-primary">{layer.label}</p>
                  <p className="mt-1 mono-label text-text-secondary">{layer.token}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{layer.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-inset px-4 py-4">
            <p className="mono-label text-text-secondary">{foundations.intro.calibrationTitle}</p>
            <div className="mt-3 space-y-2.5">
              {foundations.intro.calibrationItems.map((item) => (
                <p key={item} className="text-sm leading-6 text-text-secondary">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)]">
        <Panel
          id="palette"
          eyebrow={foundations.palette.eyebrow}
          title={foundations.palette.title}
          meta={foundations.palette.meta}
          bodyClassName="grid gap-3 md:grid-cols-2"
        >
          {foundations.palette.colors.map((color) => (
            <div key={color.id} className="surface-field p-4">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium text-text-primary">{color.name}</p>
                  <p className="mt-1 mono-label text-text-secondary">{color.token}</p>
                </div>
                <div className="flex gap-2">
                  <span
                    className="h-8 w-8 rounded-control border border-border-soft"
                    style={{ backgroundColor: color.lightValue }}
                    aria-label={`${color.name} light`}
                  />
                  <span
                    className="h-8 w-8 rounded-control border border-border-soft"
                    style={{ backgroundColor: color.darkValue }}
                    aria-label={`${color.name} dark`}
                  />
                </div>
              </div>
              <div className="mt-3 flex items-center gap-3 text-xs text-text-secondary">
                <span className="mono-label">{color.lightValue}</span>
                <span className="mono-label">{color.darkValue}</span>
              </div>
              <p className="mt-3 text-sm leading-6 text-text-secondary">{color.note}</p>
            </div>
          ))}
        </Panel>

        <Panel
          id="typography"
          eyebrow={foundations.typography.eyebrow}
          title={foundations.typography.title}
          meta={foundations.typography.meta}
          bodyClassName="space-y-4"
        >
          {foundations.typography.samples.map((sample, index) => (
            <div key={sample.id} className="border-b border-border-soft pb-4 last:border-b-0 last:pb-0">
              <p className="mono-label text-text-secondary">{sample.role}</p>
              <p
                className={
                  index === 0
                    ? "mt-2 text-[1.7rem] font-semibold tracking-[0.015em] text-text-primary"
                    : index === 1
                      ? "mt-2 text-lg font-semibold text-text-primary"
                      : index === 2
                        ? "mt-2 mono-label text-text-primary"
                        : index === 4
                          ? "mt-2 font-mono text-base text-text-primary"
                          : "mt-2 text-sm leading-7 text-text-primary"
                }
              >
                {sample.sample}
              </p>
              <p className="mt-2 text-sm leading-7 text-text-secondary">{sample.note}</p>
            </div>
          ))}
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(22rem,0.9fr)_minmax(0,1.1fr)]">
        <Panel
          id="structure-tokens"
          eyebrow={foundations.structure.eyebrow}
          title={foundations.structure.title}
          meta={foundations.structure.meta}
          bodyClassName="space-y-4"
        >
          <div className="space-y-3">
            {foundations.structure.tokens.map((token) => (
              <div key={token.id} className="surface-field px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-text-primary">{token.label}</p>
                  <span className="mono-label text-text-secondary">{token.value}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{token.note}</p>
              </div>
            ))}
          </div>
          <div className="surface-field px-4 py-4">
            <p className="mono-label text-text-secondary">{foundations.structure.spacingLabel}</p>
            <div className="mt-4 flex items-end gap-3">
              {foundations.structure.spacingSteps.map((step) => (
                <div key={step} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-control bg-service-blue/70" style={{ height: `${step * 1.6}px` }} />
                  <span className="mono-label text-text-secondary">{step}px</span>
                </div>
              ))}
            </div>
          </div>
          <div className="surface-inset px-4 py-4">
            <p className="mono-label text-text-secondary">{foundations.structure.layerNoteTitle}</p>
            <div className="mt-3 space-y-2.5">
              {foundations.structure.layerNoteItems.map((item) => (
                <p key={item} className="text-sm leading-6 text-text-secondary">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Panel>

        <Panel
          id="surface-hierarchy"
          eyebrow={foundations.hierarchy.eyebrow}
          title={foundations.hierarchy.title}
          meta={foundations.hierarchy.meta}
          bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.04fr)_minmax(18rem,0.96fr)]"
        >
          <div className="rounded-panel border border-border-strong bg-canvas p-4 shadow-panel">
            <div className="graphic-divider" />
            <div className="mt-4 rounded-panel border border-border-strong bg-panel p-4 shadow-panel inset-shadow-panel">
              <p className="mono-label text-text-secondary">{foundations.hierarchy.panelLabel}</p>
              <div className="surface-elevated mt-3 p-4">
                <p className="mono-label text-text-secondary">{foundations.hierarchy.elevatedLabel}</p>
                <div className="surface-field mt-3 px-4 py-3">
                  <p className="mono-label text-text-secondary">{foundations.hierarchy.fieldLabel}</p>
                  <p className="mt-2 text-sm leading-6 text-text-primary">{foundations.hierarchy.description}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="surface-inset px-4 py-4">
            <p className="mono-label text-text-secondary">{foundations.hierarchy.notesTitle}</p>
            <div className="mt-3 space-y-2.5">
              {foundations.hierarchy.notes.map((item) => (
                <p key={item} className="text-sm leading-6 text-text-secondary">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
