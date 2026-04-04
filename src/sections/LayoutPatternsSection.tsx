import { useState } from "react";
import { BellRing, FileSearch, LayoutGrid, ShieldCheck, SlidersHorizontal, Users2, Waypoints } from "lucide-react";
import { Button } from "../components/ui/Button";
import { SegmentedControl, type SegmentedOption } from "../components/ui/SegmentedControl";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";
import { useLocale } from "../lib/locale";

export function LayoutPatternsSection() {
  const [systemMode, setSystemMode] = useState<"observer" | "service" | "reserve">("observer");

  const {
    strings: {
      common,
      sections: { dataDisplay, hero, layouts },
    },
  } = useLocale();

  return (
    <section id="layouts" className="scroll-mt-40 space-y-4">
      <Panel
        id="layout-patterns-intro"
        eyebrow={layouts.intro.eyebrow}
        title={layouts.intro.title}
        meta={layouts.intro.meta}
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{layouts.intro.description}</p>
        <div className="surface-field px-4 py-4">
          <p className="mono-label text-text-secondary">{layouts.intro.principleTitle}</p>
          <p className="mt-3 text-sm leading-6 text-text-primary">{layouts.intro.principleText}</p>
        </div>
      </Panel>

      <Panel
        id="layout-dashboard"
        eyebrow={layouts.dashboard.eyebrow}
        title={layouts.dashboard.title}
        meta={layouts.dashboard.meta}
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-6 text-text-secondary">{layouts.dashboard.description}</p>
        <div className="screen-shell screen-shell-dashboard">
          <div className="screen-toolbar">
            <div className="flex flex-wrap items-center gap-2">
              <span className="passport-tag">DASH / 01</span>
              <ToneBadge tone="success">{layouts.dashboard.tags[0]}</ToneBadge>
              <ToneBadge tone="service">{layouts.dashboard.tags[1]}</ToneBadge>
            </div>
            <Button size="sm" leadingIcon={<BellRing className="h-4 w-4" />}>
              {layouts.dashboard.notify}
            </Button>
          </div>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <div className="space-y-4">
              <div className="grid gap-3 md:grid-cols-3">
                {dataDisplay.systemCards.scales.map((scale) => (
                  <div key={scale.id} className="screen-module screen-module-active">
                    <p className="mono-label text-text-secondary">{scale.label}</p>
                    <p className="mt-3 text-lg font-semibold text-text-primary">{scale.value}%</p>
                    <div className="mt-3 h-2 rounded-full bg-panel">
                      <div className="h-full rounded-full bg-service-blue" style={{ width: `${scale.value}%` }} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{scale.caption}</p>
                  </div>
                ))}
              </div>
              <div className="screen-module screen-module-active">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-text-primary">{layouts.dashboard.liveLogTitle}</p>
                  <span className="passport-tag">LOG / LIVE</span>
                </div>
                <div className="mt-4 space-y-3">
                  {layouts.dashboard.liveRows.map((row) => (
                    <div key={row.code} className="screen-list-row">
                      <div>
                        <p className="text-sm font-medium text-text-primary">{row.title}</p>
                        <p className="mt-1 mono-label text-text-secondary">{row.code}</p>
                      </div>
                      <ToneBadge tone={row.tone}>{common.toneLabels[row.tone]}</ToneBadge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {dataDisplay.systemCards.cards.map((card) => (
                <div key={card.id} className="screen-module screen-module-active">
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
          </div>
        </div>
      </Panel>

      <Panel
        id="layout-archive"
        eyebrow={layouts.archive.eyebrow}
        title={layouts.archive.title}
        meta={layouts.archive.meta}
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-6 text-text-secondary">{layouts.archive.description}</p>
        <div className="screen-shell screen-shell-archive">
          <div className="screen-toolbar">
            <div className="flex flex-wrap items-center gap-2">
              <span className="passport-tag">ARCH / 02</span>
              <ToneBadge tone="warning">{common.toneLabels.warning}</ToneBadge>
            </div>
            <Button size="sm" leadingIcon={<FileSearch className="h-4 w-4" />}>
              {layouts.archive.openCard}
            </Button>
          </div>
          <div className="grid gap-4 xl:grid-cols-[14rem_minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <aside className="screen-side-nav">
              <p className="mono-label text-text-secondary">{layouts.archive.sideTitle}</p>
              <div className="mt-3 space-y-2">
                {layouts.archive.sideItems.map((item, index) => (
                  <button
                    key={item}
                    type="button"
                    className={`screen-side-nav-item ${index === 0 ? "screen-side-nav-item-active" : ""}`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </aside>
            <div className="screen-module screen-module-archive">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-text-primary">{layouts.archive.tableTitle}</p>
                <span className="passport-tag">RG / ACTIVE</span>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border-soft text-xs uppercase tracking-[0.2em] text-text-secondary">
                      <th className="px-0 py-2 font-mono font-normal">{layouts.archive.tableColumns.code}</th>
                      <th className="px-4 py-2 font-mono font-normal">{layouts.archive.tableColumns.document}</th>
                      <th className="px-4 py-2 font-mono font-normal">{layouts.archive.tableColumns.state}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {dataDisplay.registryTable.rows.slice(0, 4).map((row) => (
                      <tr key={row.code} className="border-b border-border-soft">
                        <td className="px-0 py-3 font-mono text-sm text-text-primary">{row.code}</td>
                        <td className="px-4 py-3 text-sm leading-6 text-text-primary">{row.module}</td>
                        <td className="px-4 py-3">
                          <ToneBadge tone={row.tone}>{row.state}</ToneBadge>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
            <div className="space-y-4">
              <div className="screen-module screen-module-archive">
                <p className="text-sm font-medium text-text-primary">{layouts.archive.passportTitle}</p>
                <div className="mt-4 space-y-3">
                  {hero.passport.fields.slice(0, 4).map((field) => (
                    <div key={field.id} className="border-b border-border-soft pb-3 last:border-b-0 last:pb-0">
                      <p className="mono-label text-text-secondary">{field.label}</p>
                      <p className="mt-2 text-sm text-text-primary">{field.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="screen-module screen-module-archive">
                <p className="text-sm font-medium text-text-primary">{layouts.archive.historyTitle}</p>
                <div className="mt-4 space-y-2">
                  {layouts.archive.historyItems.map((item) => (
                    <div key={item} className="screen-list-row">
                      <span className="mono-label text-text-secondary">04.04</span>
                      <p className="text-sm text-text-primary">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>

      <Panel
        id="layout-settings"
        eyebrow={layouts.settings.eyebrow}
        title={layouts.settings.title}
        meta={layouts.settings.meta}
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-6 text-text-secondary">{layouts.settings.description}</p>
        <div className="screen-shell screen-shell-settings">
          <div className="screen-toolbar">
            <SegmentedControl
              label={layouts.settings.segmentedLabel}
              value={systemMode}
              onChange={setSystemMode}
              options={layouts.settings.segmentedOptions as Array<SegmentedOption<"observer" | "service" | "reserve">>}
            />
            <Button size="sm" leadingIcon={<ShieldCheck className="h-4 w-4" />}>
              {layouts.settings.confirm}
            </Button>
          </div>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(18rem,0.8fr)]">
            <div className="screen-module screen-module-active">
              <div className="flex items-center gap-2">
                <Waypoints className="h-4 w-4 text-service-blue" aria-hidden="true" />
                <p className="text-sm font-medium text-text-primary">{layouts.settings.channelsTitle}</p>
              </div>
              <div className="mt-4 space-y-3">
                {layouts.settings.channelItems.map((item, index) => (
                  <label key={item} className="surface-field flex items-center justify-between px-3 py-3">
                    <span className="text-sm text-text-primary">{item}</span>
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded-[4px] border-border-strong bg-field text-service-blue"
                      defaultChecked={index !== 2}
                    />
                  </label>
                ))}
              </div>
            </div>
            <div className="screen-module screen-module-active">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-service-blue" aria-hidden="true" />
                <p className="text-sm font-medium text-text-primary">{layouts.settings.serviceTitle}</p>
              </div>
              <div className="mt-4 grid gap-3">
                {layouts.settings.serviceItems.map(([label, value]) => (
                  <div key={label} className="surface-field px-3 py-3">
                    <p className="mono-label text-text-secondary">{label}</p>
                    <p className="mt-2 text-sm text-text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="screen-module screen-module-active">
                <div className="flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-service-blue" aria-hidden="true" />
                  <p className="text-sm font-medium text-text-primary">{layouts.settings.accessTitle}</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToneBadge tone="success">{layouts.settings.accessBadges[0]}</ToneBadge>
                  <ToneBadge tone="service">{layouts.settings.accessBadges[1]}</ToneBadge>
                  <ToneBadge tone="warning">{layouts.settings.accessBadges[2]}</ToneBadge>
                </div>
              </div>
              <div className="screen-module screen-module-warning">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4 text-signal-amber" aria-hidden="true" />
                  <p className="text-sm font-medium text-text-primary">{layouts.settings.warningTitle}</p>
                </div>
                <div className="mt-4 space-y-2">
                  <ToneBadge tone={systemMode === "reserve" ? "service" : "warning"}>
                    {systemMode === "reserve"
                      ? layouts.settings.reserveEnabled
                      : layouts.settings.transitionRequiresConfirmation}
                  </ToneBadge>
                  <p className="text-sm leading-6 text-text-secondary">{layouts.settings.warningText}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </section>
  );
}
