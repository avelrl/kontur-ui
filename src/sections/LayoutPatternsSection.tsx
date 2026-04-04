import { useState } from "react";
import { BellRing, FileSearch, LayoutGrid, ShieldCheck, SlidersHorizontal, Users2, Waypoints } from "lucide-react";
import { archiveRows, layoutPatterns, passportFields, progressScales, systemStateCards, toneLabelMap } from "../data/demo";
import { Button } from "../components/ui/Button";
import { SegmentedControl } from "../components/ui/SegmentedControl";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";

export function LayoutPatternsSection() {
  const [systemMode, setSystemMode] = useState<"observer" | "service" | "reserve">("observer");

  return (
    <section id="layouts" className="scroll-mt-40 space-y-4">
      <Panel
        id="layout-patterns-intro"
        eyebrow="Layout patterns"
        title="Типовые экраны и секционные композиции"
        meta="DASHBOARD / ARCHIVE / SETTINGS"
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Layout patterns показывают, как один и тот же язык работает в разных сценариях: у dashboard приоритет
          у сводки и журнала, у archive/docs у реестра и паспорта документа, у settings/system у режимов,
          параметров и подтверждений.
        </p>
        <div className="rounded-control border border-border-soft bg-field px-4 py-4">
          <p className="mono-label text-text-secondary">Общий принцип</p>
          <p className="mt-3 text-sm leading-6 text-text-primary">
            Секции строятся как единая рабочая поверхность. Ни один экран не опирается на маркетинговый hero
            или россыпь floating cards.
          </p>
        </div>
      </Panel>

      <Panel
        id="layout-dashboard"
        eyebrow="Шаблон / 01"
        title={layoutPatterns[0]?.title ?? "Командный пункт"}
        meta="DASHBOARD / FULL SCREEN"
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-6 text-text-secondary">{layoutPatterns[0]?.description}</p>
        <div className="screen-shell">
          <div className="screen-toolbar">
            <div className="flex flex-wrap items-center gap-2">
              <span className="passport-tag">DASH / 01</span>
              <ToneBadge tone="success">Канал устойчив</ToneBadge>
              <ToneBadge tone="service">Служебный контур</ToneBadge>
            </div>
            <Button size="sm" leadingIcon={<BellRing className="h-4 w-4" />}>
              Уведомления
            </Button>
          </div>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <div className="space-y-4">
              <div className="grid gap-3 md:grid-cols-3">
                {progressScales.map((scale) => (
                  <div key={scale.label} className="screen-module">
                    <p className="mono-label text-text-secondary">{scale.label}</p>
                    <p className="mt-3 text-lg font-semibold text-text-primary">{scale.value}%</p>
                    <div className="mt-3 h-2 rounded-full bg-panel">
                      <div className="h-full rounded-full bg-service-blue" style={{ width: `${scale.value}%` }} />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-text-secondary">{scale.caption}</p>
                  </div>
                ))}
              </div>
              <div className="screen-module">
                <div className="flex items-center justify-between gap-3">
                  <p className="text-sm font-medium text-text-primary">Оперативный журнал смены</p>
                  <span className="passport-tag">LOG / LIVE</span>
                </div>
                <div className="mt-4 space-y-3">
                  {archiveRows.slice(0, 3).map((row) => (
                    <div key={row.code} className="screen-list-row">
                      <div>
                        <p className="text-sm font-medium text-text-primary">{row.title}</p>
                        <p className="mt-1 mono-label text-text-secondary">{row.code}</p>
                      </div>
                      <ToneBadge tone={row.tone}>{toneLabelMap[row.tone]}</ToneBadge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="space-y-4">
              {systemStateCards.map((card) => (
                <div key={card.title} className="screen-module">
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
        eyebrow="Шаблон / 02"
        title={layoutPatterns[1]?.title ?? "Архив / документы"}
        meta="ARCHIVE / DOCS / FULL SCREEN"
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-6 text-text-secondary">{layoutPatterns[1]?.description}</p>
        <div className="screen-shell">
          <div className="screen-toolbar">
            <div className="flex flex-wrap items-center gap-2">
              <span className="passport-tag">ARCH / 02</span>
              <ToneBadge tone="warning">Требует подтверждения</ToneBadge>
            </div>
            <Button size="sm" leadingIcon={<FileSearch className="h-4 w-4" />}>
              Открыть карточку
            </Button>
          </div>
          <div className="grid gap-4 xl:grid-cols-[14rem_minmax(0,1.2fr)_minmax(18rem,0.8fr)]">
            <aside className="screen-side-nav">
              <p className="mono-label text-text-secondary">Разделы архива</p>
              <div className="mt-3 space-y-2">
                {["Сводный реестр", "Карточки происхождения", "История редакций", "Сопроводительные листы"].map((item, index) => (
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
            <div className="screen-module">
              <div className="flex items-center justify-between gap-3">
                <p className="text-sm font-medium text-text-primary">Выбранные документы</p>
                <span className="passport-tag">RG / ACTIVE</span>
              </div>
              <div className="mt-4 overflow-x-auto">
                <table className="min-w-full border-collapse text-left">
                  <thead>
                    <tr className="border-b border-border-soft text-xs uppercase tracking-[0.2em] text-text-secondary">
                      <th className="px-0 py-2 font-mono font-normal">Код</th>
                      <th className="px-4 py-2 font-mono font-normal">Документ</th>
                      <th className="px-4 py-2 font-mono font-normal">Состояние</th>
                    </tr>
                  </thead>
                  <tbody>
                    {archiveRows.slice(0, 4).map((row) => (
                      <tr key={row.code} className="border-b border-border-soft">
                        <td className="px-0 py-3 font-mono text-sm text-text-primary">{row.code}</td>
                        <td className="px-4 py-3 text-sm leading-6 text-text-primary">{row.title}</td>
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
              <div className="screen-module">
                <p className="text-sm font-medium text-text-primary">Паспорт документа</p>
                <div className="mt-4 space-y-3">
                  {passportFields.slice(0, 4).map((field) => (
                    <div key={field.label} className="border-b border-border-soft pb-3 last:border-b-0 last:pb-0">
                      <p className="mono-label text-text-secondary">{field.label}</p>
                      <p className="mt-2 text-sm text-text-primary">{field.value}</p>
                    </div>
                  ))}
                </div>
              </div>
              <div className="screen-module">
                <p className="text-sm font-medium text-text-primary">История редакций</p>
                <div className="mt-4 space-y-2">
                  {["Редакция B1 подтверждена", "Сверка индексов завершена", "Резервный экземпляр создан"].map((item) => (
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
        eyebrow="Шаблон / 03"
        title={layoutPatterns[2]?.title ?? "Параметры системы"}
        meta="SETTINGS / SYSTEM / FULL SCREEN"
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-6 text-text-secondary">{layoutPatterns[2]?.description}</p>
        <div className="screen-shell">
          <div className="screen-toolbar">
            <SegmentedControl
              label="Режимы системного поста"
              value={systemMode}
              onChange={setSystemMode}
              options={[
                { value: "observer", label: "Наблюдение", note: "OBS" },
                { value: "service", label: "Служебный", note: "SRV" },
                { value: "reserve", label: "Резерв", note: "R-12" },
              ]}
            />
            <Button size="sm" leadingIcon={<ShieldCheck className="h-4 w-4" />}>
              Подтвердить параметры
            </Button>
          </div>
          <div className="grid gap-4 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)_minmax(18rem,0.8fr)]">
            <div className="screen-module">
              <div className="flex items-center gap-2">
                <Waypoints className="h-4 w-4 text-service-blue" aria-hidden="true" />
                <p className="text-sm font-medium text-text-primary">Каналы синхронизации</p>
              </div>
              <div className="mt-4 space-y-3">
                {["Основной канал устойчив", "Резерв подготовлен", "Архивный контур доступен"].map((item, index) => (
                  <label key={item} className="flex items-center justify-between rounded-control border border-border-soft bg-field px-3 py-3">
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
            <div className="screen-module">
              <div className="flex items-center gap-2">
                <SlidersHorizontal className="h-4 w-4 text-service-blue" aria-hidden="true" />
                <p className="text-sm font-medium text-text-primary">Параметры службы</p>
              </div>
              <div className="mt-4 grid gap-3">
                {[
                  ["Частота сверки", "Каждые 15 минут"],
                  ["Политика выпуска", "Только с подтверждением"],
                  ["Журнальный режим", "Полный архив действий"],
                ].map(([label, value]) => (
                  <div key={label} className="rounded-control border border-border-soft bg-field px-3 py-3">
                    <p className="mono-label text-text-secondary">{label}</p>
                    <p className="mt-2 text-sm text-text-primary">{value}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="space-y-4">
              <div className="screen-module">
                <div className="flex items-center gap-2">
                  <Users2 className="h-4 w-4 text-service-blue" aria-hidden="true" />
                  <p className="text-sm font-medium text-text-primary">Доступ</p>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  <ToneBadge tone="success">Редактор</ToneBadge>
                  <ToneBadge tone="service">Наблюдатель</ToneBadge>
                  <ToneBadge tone="warning">Требует подтверждения</ToneBadge>
                </div>
              </div>
              <div className="screen-module">
                <div className="flex items-center gap-2">
                  <LayoutGrid className="h-4 w-4 text-signal-amber" aria-hidden="true" />
                  <p className="text-sm font-medium text-text-primary">Служебные предупреждения</p>
                </div>
                <div className="mt-4 space-y-2">
                  <ToneBadge tone={systemMode === "reserve" ? "service" : "warning"}>
                    {systemMode === "reserve" ? "Резервный режим включён" : "Переход требует подтверждения"}
                  </ToneBadge>
                  <p className="text-sm leading-6 text-text-secondary">
                    Режим влияет на выпуск, историю действий и доступность ускоренной синхронизации.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Panel>
    </section>
  );
}
