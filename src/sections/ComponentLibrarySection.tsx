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
import { SegmentedControl } from "../components/ui/SegmentedControl";
import { Tabs } from "../components/ui/Tabs";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";

const controlClassName =
  "w-full rounded-control border border-border-soft bg-field px-3 py-2.5 text-sm text-text-primary shadow-panel inset-shadow-panel transition-colors duration-150 placeholder:text-text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-service-blue focus-visible:ring-offset-2 focus-visible:ring-offset-panel";

const checkboxClassName =
  "h-4 w-4 rounded-[4px] border-border-strong bg-field text-service-blue focus-visible:ring-service-blue";

export function ComponentLibrarySection() {
  const [segmentMode, setSegmentMode] = useState<"primary" | "reserve" | "archive">("primary");
  const [registryFilter, setRegistryFilter] = useState<"registry" | "log" | "passport">("registry");

  const tabItems = [
    {
      id: "controls",
      label: "Управление",
      meta: "BUTTONS / ICONS / SEGMENTS",
      content: (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-3">
            <Button variant="primary" leadingIcon={<SendHorizonal className="h-4 w-4" />}>
              Подтвердить выпуск
            </Button>
            <Button variant="secondary" leadingIcon={<SlidersHorizontal className="h-4 w-4" />}>
              Настроить режим
            </Button>
            <Button variant="ghost" leadingIcon={<BellRing className="h-4 w-4" />}>
              Поставить на наблюдение
            </Button>
            <Button variant="danger" leadingIcon={<TriangleAlert className="h-4 w-4" />}>
              Изолировать контур
            </Button>
          </div>
          <div className="flex flex-wrap gap-3">
            <IconButton icon={<Archive className="h-4 w-4" />} label="Открыть архивный модуль" />
            <IconButton icon={<Filter className="h-4 w-4" />} label="Открыть фильтры" />
            <IconButton icon={<RotateCcw className="h-4 w-4" />} label="Сбросить текущий режим" />
            <IconButton icon={<TriangleAlert className="h-4 w-4" />} label="Изолировать контур" variant="danger" />
          </div>
          <SegmentedControl
            label="Режимы работы"
            value={segmentMode}
            onChange={setSegmentMode}
            options={[
              { value: "primary", label: "Основной", note: "MAIN" },
              { value: "reserve", label: "Резервный", note: "R-12" },
              { value: "archive", label: "Архивный", note: "ARC" },
            ]}
          />
          <div className="flex flex-wrap gap-2">
            <ToneBadge tone="service">Служебный контур</ToneBadge>
            <ToneBadge tone="success">Штатно</ToneBadge>
            <ToneBadge tone="warning">Требует подтверждения</ToneBadge>
            <ToneBadge tone="danger">Нарушение контура</ToneBadge>
          </div>
        </div>
      ),
    },
    {
      id: "forms",
      label: "Формы",
      meta: "INPUT / SELECT / TEXTAREA",
      content: (
        <form className="grid gap-4 md:grid-cols-2">
          <label className="space-y-2">
            <span className="mono-label text-text-secondary">Индекс документа</span>
            <input className={controlClassName} defaultValue="АР-171-04" />
          </label>
          <label className="space-y-2">
            <span className="mono-label text-text-secondary">Режим обработки</span>
            <select className={controlClassName} defaultValue="planned">
              <option value="planned">Плановый контур</option>
              <option value="service">Служебная проверка</option>
              <option value="reserve">Резервный режим</option>
            </select>
          </label>
          <label className="space-y-2 md:col-span-2">
            <span className="mono-label text-text-secondary">Сопроводительная запись</span>
            <textarea
              className={`${controlClassName} min-h-28 resize-y`}
              defaultValue="Документ переведён в рабочий реестр. Подтверждение происхождения ожидается от фондового поста."
            />
          </label>
          <label className="flex items-center gap-3 text-sm text-text-primary">
            <input className={checkboxClassName} defaultChecked type="checkbox" />
            Уведомить архивный пост о смене статуса
          </label>
          <label className="flex items-center justify-between rounded-control border border-border-soft bg-field px-3 py-2.5 text-sm text-text-primary">
            <span>Поддерживать резервную синхронизацию</span>
            <span className="inline-flex h-6 w-11 items-center rounded-full border border-border-strong bg-elevated px-1">
              <span className="h-4 w-4 rounded-full bg-service-blue" />
            </span>
          </label>
        </form>
      ),
    },
    {
      id: "states",
      label: "Состояния",
      meta: "ALERT / EMPTY / ERROR",
      content: (
        <div className="grid gap-4 lg:grid-cols-3">
          <div className="rounded-control border border-border-soft bg-elevated p-4">
            <ToneBadge tone="service">Служебное сообщение</ToneBadge>
            <p className="mt-3 text-sm leading-6 text-text-primary">Контур сохраняет историю действий даже в режиме паузы.</p>
          </div>
          <div className="rounded-control border border-border-soft bg-elevated p-4">
            <ToneBadge tone="warning">Пустое состояние</ToneBadge>
            <p className="mt-3 text-sm leading-6 text-text-primary">Для выбранного фильтра пока нет журналов с подтверждённым происхождением.</p>
          </div>
          <div className="rounded-control border border-border-soft bg-elevated p-4">
            <ToneBadge tone="danger">Ошибка</ToneBadge>
            <p className="mt-3 text-sm leading-6 text-text-primary">Канал резерва недоступен. Для выпуска требуется ручное подтверждение.</p>
          </div>
        </div>
      ),
    },
  ];

  const accordionItems = [
    {
      id: "modes",
      label: "Режимы доступа",
      meta: "ACCESS / CONTROL",
      content: "Основной, резервный и архивный режимы должны отличаться состоянием и маркировкой, а не декоративным цветом.",
    },
    {
      id: "labels",
      label: "Индексные подписи",
      meta: "LABELS / PASSPORT",
      content: "Каждый модуль получает короткую моноширинную подпись, ревизию и контур, чтобы сканирование шло по структуре, а не по декору.",
    },
    {
      id: "alerts",
      label: "Служебные предупреждения",
      meta: "ALERT / RULES",
      content: "Предупреждение должно содержать причину, текущий статус и предлагаемое действие, а не только цветовой сигнал.",
    },
  ];

  return (
    <section id="components" className="scroll-mt-40 space-y-4">
      <Panel
        id="components-intro"
        eyebrow="Core components"
        title="Библиотека управления, форм и состояний"
        meta="COMPONENTS / LIBRARY"
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Компоненты собраны как рабочие элементы прибора: кнопки и формы не должны выглядеть маркетингово,
          search/filter/command patterns работают как операционные инструменты, а empty/loading/error states
          выражаются языком службы, а не consumer-приложения.
        </p>
        <div className="rounded-control border border-border-soft bg-field px-4 py-4">
          <p className="mono-label text-text-secondary">Паттерны поиска и команд</p>
          <div className="mt-3 grid gap-3">
            <label className="relative">
              <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
              <input
                className={`${controlClassName} pl-10`}
                defaultValue="поиск по архиву, журналам и паспорту модуля"
                aria-label="Поиск по архиву"
              />
            </label>
            <div className="flex flex-wrap gap-2">
              <ToneBadge tone="service">Архив</ToneBadge>
              <ToneBadge tone="success">Подтверждено</ToneBadge>
              <ToneBadge tone="warning">Требует проверки</ToneBadge>
            </div>
            <div className="flex items-center justify-between rounded-control border border-border-soft bg-elevated px-3 py-3">
              <div className="flex items-center gap-3">
                <Command className="h-4 w-4 text-service-blue" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Командная строка</p>
                  <p className="text-xs text-text-secondary">Открывает быстрые действия и фильтры.</p>
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
          eyebrow="Компонентные паттерны"
          title="Управление, формы и state blocks"
          meta="BUTTONS / FORMS / STATES"
          className="h-full"
        >
          <Tabs items={tabItems} />
        </Panel>

        <Panel
          id="accordion-alerts"
          eyebrow="Accordions и alerts"
          title="Служебные развороты и сигналы"
          meta="ACCORDION / ALERTS"
          className="h-full"
          bodyClassName="space-y-4"
        >
          <Accordion items={accordionItems} defaultItemId="modes" />
          <div className="space-y-3">
            <div className="rounded-control border border-border-soft bg-elevated p-4">
              <div className="flex items-start gap-3">
                <CircleAlert className="mt-1 h-4 w-4 text-service-blue" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Служебное сообщение</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">Контур доступен для работы, журнал действий активен.</p>
                </div>
              </div>
            </div>
            <div className="rounded-control border border-border-soft bg-elevated p-4">
              <div className="flex items-start gap-3">
                <TriangleAlert className="mt-1 h-4 w-4 text-signal-amber" aria-hidden="true" />
                <div>
                  <p className="text-sm font-medium text-text-primary">Требует подтверждения</p>
                  <p className="mt-2 text-sm leading-6 text-text-secondary">Изменения в реестре не выпускаются автоматически без ручной отметки.</p>
                </div>
              </div>
            </div>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1.15fr)]">
        <Panel
          id="state-patterns"
          eyebrow="Empty / loading / error"
          title="Состояния секций"
          meta="STATE / MODULE"
          bodyClassName="grid gap-3"
        >
          <div className="rounded-control border border-border-soft bg-field p-4">
            <div className="flex items-start gap-3">
              <FolderSearch className="mt-1 h-4 w-4 text-service-blue" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text-primary">Пустое состояние</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">Записей по текущему фильтру нет. Можно расширить контур поиска или снять ограничения.</p>
              </div>
            </div>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <div className="flex items-start gap-3">
              <LoaderCircle className="mt-1 h-4 w-4 animate-spin text-service-blue motion-reduce:animate-none" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text-primary">Состояние загрузки</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">Выполняется сверка индексов и актуализация последних журналов.</p>
                <div className="loading-strip mt-3" />
              </div>
            </div>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <div className="flex items-start gap-3">
              <TriangleAlert className="mt-1 h-4 w-4 text-signal-red" aria-hidden="true" />
              <div>
                <p className="text-sm font-medium text-text-primary">Состояние ошибки</p>
                <p className="mt-2 text-sm leading-6 text-text-secondary">Контур не может подтвердить происхождение записи. Необходим резервный канал или ручная ревизия.</p>
              </div>
            </div>
          </div>
        </Panel>

        <Panel
          id="search-filter-patterns"
          eyebrow="Search / filter / command"
          title="Поиск, фильтры и оперативные команды"
          meta="PATTERNS / OPERATIONS"
          bodyClassName="space-y-4"
        >
          <div className="grid gap-4 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.9fr)]">
            <div className="space-y-3">
              <label className="space-y-2">
                <span className="mono-label text-text-secondary">Поиск по реестру</span>
                <div className="relative">
                  <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-text-secondary" />
                  <input className={`${controlClassName} pl-10`} defaultValue="паспорта, журналы, архивные карточки" />
                </div>
              </label>
              <SegmentedControl
                label="Источник поиска"
                value={registryFilter}
                onChange={setRegistryFilter}
                options={[
                  { value: "registry", label: "Реестр", note: "RG" },
                  { value: "log", label: "Журналы", note: "LOG" },
                  { value: "passport", label: "Паспорта", note: "PASS" },
                ]}
              />
            </div>
            <div className="rounded-control border border-border-soft bg-field px-4 py-4">
              <p className="mono-label text-text-secondary">Быстрые действия</p>
              <div className="mt-3 space-y-2">
                <button type="button" className="flex w-full items-center justify-between rounded-control border border-border-soft px-3 py-2 text-left text-sm text-text-primary">
                  <span>Открыть журнал последней смены</span>
                  <span className="passport-tag">J-04</span>
                </button>
                <button type="button" className="flex w-full items-center justify-between rounded-control border border-border-soft px-3 py-2 text-left text-sm text-text-primary">
                  <span>Проверить канал резервного контура</span>
                  <span className="passport-tag">R-12</span>
                </button>
                <button type="button" className="flex w-full items-center justify-between rounded-control border border-border-soft px-3 py-2 text-left text-sm text-text-primary">
                  <span>Открыть паспорт текущего модуля</span>
                  <span className="passport-tag">P-17</span>
                </button>
              </div>
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
