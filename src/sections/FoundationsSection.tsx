import {
  foundationColors,
  spacingSteps,
  structuralTokens,
  surfaceLayers,
  typographySamples,
} from "../data/demo";
import { Panel } from "../components/ui/Panel";

export function FoundationsSection() {
  return (
    <section id="foundations" className="scroll-mt-40 space-y-4">
      <Panel
        id="foundations-intro"
        eyebrow="Theme foundations"
        title="Палитра, surface hierarchy и конструктивные токены"
        meta="TOKENS / SYSTEM"
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Foundations задают не только цвета, но и поведение поверхности: как различаются canvas, panel,
          elevated и field, как работают рамка, радиус, тень и spacing rhythm, и почему тёмная тема ощущается
          самостоятельной приборной версией, а не инверсией светлой.
        </p>
        <div className="rounded-control border border-border-soft bg-field px-4 py-4">
          <p className="mono-label text-text-secondary">Surface hierarchy</p>
          <div className="mt-3 space-y-3">
            {surfaceLayers.map((layer) => (
              <div key={layer.label} className="rounded-control border border-border-soft bg-elevated px-3 py-3">
                <p className="text-sm font-medium text-text-primary">{layer.label}</p>
                <p className="mt-1 mono-label text-text-secondary">{layer.token}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{layer.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.08fr)_minmax(24rem,0.92fr)]">
        <Panel
          id="palette"
          eyebrow="Палитра и роли"
          title="Семантические цвета"
          meta="LIGHT / DARK"
          bodyClassName="grid gap-3 md:grid-cols-2"
        >
          {foundationColors.map((color) => (
            <div key={color.name} className="rounded-control border border-border-soft bg-field p-4">
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
          eyebrow="Типографика"
          title="Роли текста и маркировок"
          meta="UI / MONO"
          bodyClassName="space-y-4"
        >
          {typographySamples.map((sample, index) => (
            <div key={sample.role} className="border-b border-border-soft pb-4 last:border-b-0 last:pb-0">
              <p className="mono-label text-text-secondary">{sample.role}</p>
              <p
                className={
                  index === 0
                    ? "mt-2 text-2xl font-semibold tracking-[0.01em] text-text-primary"
                    : index === 1
                      ? "mt-2 text-lg font-medium text-text-primary"
                      : index === 2
                        ? "mt-2 mono-label text-text-primary"
                        : index === 4
                          ? "mt-2 font-mono text-base text-text-primary"
                          : "mt-2 text-sm text-text-primary"
                }
              >
                {sample.sample}
              </p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{sample.note}</p>
            </div>
          ))}
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(22rem,0.9fr)_minmax(0,1.1fr)]">
        <Panel
          id="structure-tokens"
          eyebrow="Конструкция"
          title="Радиусы, бордеры, тени и spacing rhythm"
          meta="SHAPE / RHYTHM"
          bodyClassName="space-y-4"
        >
          <div className="space-y-3">
            {structuralTokens.map((token) => (
              <div key={token.label} className="rounded-control border border-border-soft bg-field px-4 py-3">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-text-primary">{token.label}</p>
                  <span className="mono-label text-text-secondary">{token.value}</span>
                </div>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{token.note}</p>
              </div>
            ))}
          </div>
          <div className="rounded-control border border-border-soft bg-field px-4 py-4">
            <p className="mono-label text-text-secondary">Spacing rhythm</p>
            <div className="mt-4 flex items-end gap-3">
              {spacingSteps.map((step) => (
                <div key={step} className="flex flex-1 flex-col items-center gap-2">
                  <div className="w-full rounded-t-control bg-service-blue/70" style={{ height: `${step * 1.6}px` }} />
                  <span className="mono-label text-text-secondary">{step}px</span>
                </div>
              ))}
            </div>
          </div>
        </Panel>

        <Panel
          id="surface-hierarchy"
          eyebrow="Поверхность"
          title="Иерархия слоёв"
          meta="CANVAS / PANEL / ELEVATED / FIELD"
          bodyClassName="space-y-4"
        >
          <div className="rounded-panel border border-border-strong bg-canvas p-4 shadow-panel">
            <div className="graphic-divider" />
            <div className="mt-4 rounded-panel border border-border-strong bg-panel p-4 shadow-panel inset-shadow-panel">
              <p className="mono-label text-text-secondary">Panel</p>
              <div className="mt-3 rounded-control border border-border-soft bg-elevated p-4">
                <p className="mono-label text-text-secondary">Elevated</p>
                <div className="mt-3 rounded-control border border-border-soft bg-field px-4 py-3">
                  <p className="mono-label text-text-secondary">Field</p>
                  <p className="mt-2 text-sm leading-6 text-text-primary">
                    Каждый слой отличается не только цветом, но и функцией: panel удерживает модуль, elevated
                    акцентирует служебную зону, field оформляет управляемый элемент или метку состояния.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
