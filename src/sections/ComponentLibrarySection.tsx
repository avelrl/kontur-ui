import { useState } from "react";
import {
  Archive,
  BellRing,
  CircleAlert,
  Command,
  Filter,
  FolderSearch,
  LoaderCircle,
  RotateCcw,
  Search,
  SendHorizonal,
  SlidersHorizontal,
  TriangleAlert,
} from "lucide-react";
import { Accordion } from "../components/ui/Accordion";
import { Button } from "../components/ui/Button";
import { IconButton } from "../components/ui/IconButton";
import { SegmentedControl, type SegmentedOption } from "../components/ui/SegmentedControl";
import { Tabs } from "../components/ui/Tabs";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";
import { useLocale } from "../lib/locale";

const controlClassName =
  "w-full rounded-control border border-border-soft bg-field px-3 py-2.5 text-sm text-text-primary shadow-panel inset-shadow-panel transition-colors duration-150 placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel";

const checkboxClassName =
  "h-4 w-4 rounded-[4px] border-border-strong bg-field text-service-blue focus-visible:ring-service-blue";

export function ComponentLibrarySection() {
  const [segmentMode, setSegmentMode] = useState<"primary" | "reserve" | "archive">("primary");
  const [registryFilter, setRegistryFilter] = useState<"registry" | "log" | "passport">("registry");

  const {
    locale,
    strings: {
      common,
      sections: { components },
    },
  } = useLocale();

  const tabItems = [
    {
      id: components.tabs.controls.id,
      label: components.tabs.controls.label,
      meta: components.tabs.controls.meta,
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" leadingIcon={<SendHorizonal className="h-4 w-4" />}>
              {components.tabs.controls.buttons.primary}
            </Button>
            <Button variant="secondary" leadingIcon={<SlidersHorizontal className="h-4 w-4" />}>
              {components.tabs.controls.buttons.secondary}
            </Button>
            <Button variant="ghost" leadingIcon={<BellRing className="h-4 w-4" />}>
              {components.tabs.controls.buttons.ghost}
            </Button>
            <Button variant="danger" leadingIcon={<TriangleAlert className="h-4 w-4" />}>
              {components.tabs.controls.buttons.danger}
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <IconButton icon={<Archive className="h-4 w-4" />} label={components.tabs.controls.iconButtons.archive} />
            <IconButton icon={<Filter className="h-4 w-4" />} label={components.tabs.controls.iconButtons.filters} />
            <IconButton icon={<RotateCcw className="h-4 w-4" />} label={components.tabs.controls.iconButtons.reset} />
            <IconButton
              icon={<TriangleAlert className="h-4 w-4" />}
              label={components.tabs.controls.iconButtons.isolate}
              variant="danger"
            />
          </div>
          <SegmentedControl
            label={components.tabs.controls.segmentedLabel}
            value={segmentMode}
            onChange={setSegmentMode}
            options={components.tabs.controls.segmentedOptions as Array<SegmentedOption<"primary" | "reserve" | "archive">>}
          />
          <div className="flex flex-wrap gap-2">
            <ToneBadge tone="service">{common.toneLabels.service}</ToneBadge>
            <ToneBadge tone="success">{common.toneLabels.success}</ToneBadge>
            <ToneBadge tone="warning">{common.toneLabels.warning}</ToneBadge>
            <ToneBadge tone="danger">{common.toneLabels.danger}</ToneBadge>
          </div>
        </div>
      ),
    },
    {
      id: components.tabs.forms.id,
      label: components.tabs.forms.label,
      meta: components.tabs.forms.meta,
      content: (
        <form className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="mono-label text-text-secondary">{components.tabs.forms.documentIndex}</span>
            <input
              key={`document-index-${locale}`}
              className={controlClassName}
              defaultValue={components.tabs.forms.documentIndexValue}
            />
          </label>
          <label className="space-y-2">
            <span className="mono-label text-text-secondary">{components.tabs.forms.processingMode}</span>
            <select key={`processing-mode-${locale}`} className={controlClassName} defaultValue="planned">
              {components.tabs.forms.modeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </label>
          <label className="space-y-2 md:col-span-2">
            <span className="mono-label text-text-secondary">{components.tabs.forms.noteLabel}</span>
            <textarea
              key={`note-value-${locale}`}
              className={`${controlClassName} min-h-28 resize-y`}
              defaultValue={components.tabs.forms.noteValue}
            />
          </label>
          <label className="flex items-center gap-3 text-sm text-text-primary">
            <input className={checkboxClassName} defaultChecked type="checkbox" />
            {components.tabs.forms.notifyArchive}
          </label>
          <label className="surface-field flex items-center justify-between px-3 py-2.5 text-sm text-text-primary">
            <span>{components.tabs.forms.keepReserveSync}</span>
            <span className="inline-flex h-6 w-11 items-center rounded-full border border-border-strong bg-elevated px-1">
              <span className="h-4 w-4 rounded-full bg-service-blue" />
            </span>
          </label>
        </form>
      ),
    },
    {
      id: components.tabs.states.id,
      label: components.tabs.states.label,
      meta: components.tabs.states.meta,
      content: (
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="surface-elevated p-4">
            <ToneBadge tone="service">{components.tabs.states.service.badge}</ToneBadge>
            <p className="mt-3 text-sm leading-6 text-text-primary">{components.tabs.states.service.text}</p>
          </div>
          <div className="surface-elevated p-4">
            <ToneBadge tone="warning">{components.tabs.states.empty.badge}</ToneBadge>
            <p className="mt-3 text-sm leading-6 text-text-primary">{components.tabs.states.empty.text}</p>
          </div>
          <div className="surface-elevated p-4">
            <ToneBadge tone="danger">{components.tabs.states.error.badge}</ToneBadge>
            <p className="mt-3 text-sm leading-6 text-text-primary">{components.tabs.states.error.text}</p>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="components" className="scroll-mt-40 space-y-4">
      <Panel
        id="components-intro"
        eyebrow={components.intro.eyebrow}
        title={components.intro.title}
        meta={components.intro.meta}
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{components.intro.description}</p>
        <div className="surface-field px-4 py-4">
          <p className="mono-label text-text-secondary">{components.intro.patternsTitle}</p>
          <div className="mt-3 grid gap-3">
            <label className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
              <input
                key={`intro-search-${locale}`}
                className={`${controlClassName} pl-10`}
                defaultValue={components.intro.searchValue}
                aria-label={components.intro.searchAriaLabel}
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <ToneBadge tone="service">{components.intro.toneBadges[0]}</ToneBadge>
              <ToneBadge tone="success">{components.intro.toneBadges[1]}</ToneBadge>
              <ToneBadge tone="warning">{components.intro.toneBadges[2]}</ToneBadge>
            </div>
            <div className="surface-active flex items-center justify-between px-3 py-3">
              <div className="flex items-center gap-3">
                <Command className="h-4 w-4 text-service-blue" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{components.intro.commandTitle}</p>
                  <p className="text-xs text-text-secondary">{components.intro.commandNote}</p>
                </div>
              </div>
              <span className="passport-tag">Ctrl + K</span>
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
        <Panel
          id="component-tabs"
          eyebrow={components.libraryPanel.eyebrow}
          title={components.libraryPanel.title}
          meta={components.libraryPanel.meta}
          className="h-full"
        >
          <Tabs items={tabItems} ariaLabel={components.tabs.ariaLabel} />
        </Panel>

        <Panel
          id="accordion-alerts"
          eyebrow={components.accordion.eyebrow}
          title={components.accordion.title}
          meta={components.accordion.meta}
          className="h-full"
          bodyClassName="space-y-4"
        >
          <Accordion items={components.accordion.items} defaultItemId="modes" />
          <div className="space-y-3">
            <div className="surface-elevated p-4">
              <div className="flex items-start gap-3">
                <CircleAlert className="mt-1 h-4 w-4 text-service-blue" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{components.accordion.alerts[0]?.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{components.accordion.alerts[0]?.text}</p>
                </div>
              </div>
            </div>
            <div className="surface-elevated p-4">
              <div className="flex items-start gap-3">
                <TriangleAlert className="mt-1 h-4 w-4 text-signal-amber" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-text-primary">{components.accordion.alerts[1]?.title}</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">{components.accordion.alerts[1]?.text}</p>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1.15fr)]">
        <Panel
          id="state-patterns"
          eyebrow={components.statePatterns.eyebrow}
          title={components.statePatterns.title}
          meta={components.statePatterns.meta}
          bodyClassName="grid gap-3"
        >
          <div className="surface-field p-4">
            <div className="flex items-start gap-3">
              <FolderSearch className="mt-1 h-4 w-4 text-service-blue" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text-primary">{components.statePatterns.emptyTitle}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{components.statePatterns.emptyText}</p>
              </div>
            </div>
          </div>
          <div className="surface-field p-4">
            <div className="flex items-start gap-3">
              <LoaderCircle
                className="mt-1 h-4 w-4 animate-spin text-service-blue motion-reduce:animate-none"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-medium text-text-primary">{components.statePatterns.loadingTitle}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{components.statePatterns.loadingText}</p>
                <div className="loading-strip mt-3" />
              </div>
            </div>
          </div>
          <div className="surface-field p-4">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-1 h-4 w-4 text-signal-red" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text-primary">{components.statePatterns.errorTitle}</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">{components.statePatterns.errorText}</p>
              </div>
            </div>
          </div>
        </Panel>

        <Panel
          id="search-filter-patterns"
          eyebrow={components.searchPatterns.eyebrow}
          title={components.searchPatterns.title}
          meta={components.searchPatterns.meta}
          bodyClassName="space-y-4"
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
            <div className="space-y-3">
              <label className="space-y-2">
                <span className="mono-label text-text-secondary">{components.searchPatterns.searchLabel}</span>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
                  <input
                    key={`registry-search-${locale}`}
                    className={`${controlClassName} pl-10`}
                    defaultValue={components.searchPatterns.searchValue}
                  />
                </div>
              </label>
              <SegmentedControl
                label={components.searchPatterns.sourceLabel}
                value={registryFilter}
                onChange={setRegistryFilter}
                options={
                  components.searchPatterns.sourceOptions as Array<SegmentedOption<"registry" | "log" | "passport">>
                }
              />
            </div>
            <div className="surface-active px-4 py-4">
              <p className="mono-label text-text-secondary">{components.searchPatterns.quickActionsTitle}</p>
              <div className="mt-3 space-y-2">
                {components.searchPatterns.quickActions.map((action) => (
                  <button
                    key={action.id}
                    type="button"
                    className="surface-field flex w-full items-center justify-between px-3 py-2 text-left text-sm text-text-primary"
                  >
                    <span>{action.label}</span>
                    <span className="passport-tag">{action.code}</span>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
