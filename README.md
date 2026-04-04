# Контур UI

Демонстрационный проект на `Vite + React + TypeScript + Tailwind CSS v4` с полной темой `Контур`.

Сейчас в репозитории реализованы:

- semantic theme tokens для light/dark
- `light / dark / system` переключение без заметного theme flash
- верхняя статусная строка и навигация по секциям
- системная статусная грамматика:
  - `StatusLamp` как вторичный приборный сигнал
  - `ToneBadge` как основной читаемый статус для журналов, таблиц и реестров
- foundations-секция: палитра, surface hierarchy, типографика, радиусы, бордеры, тени, spacing rhythm
- расширенная библиотека компонентов: кнопки, формы, tabs, badges, indicators, alerts, empty/loading/error states, search/filter/command patterns
- data-display секции: журналы, реестры, аналитические блоки, шкалы, системные карточки состояния и документационные модули
- grammar of section chrome: секционные шапки, индексные подписи, паспортные ярлыки, служебные маркировки, графические делители
- layout patterns: dashboard, archive/docs, settings/system
- mobile superapp preview
- секция документации по теме с iconography rules и content tone rules

## Запуск

```bash
npm install
npm run dev
```

Проверка:

```bash
npm run test
npm run build
```

## Где менять токены

Все токены темы лежат в `src/styles/app.css`:

- `:root` содержит light semantic variables
- `[data-theme="dark"]` содержит dark overrides
- `@theme inline` маппит `--sys-*` в Tailwind v4 utility tokens `--color-*`, `--radius-*`, `--shadow-*`, `--font-*`

Компоненты используют только семантические utility-классы вроде `bg-panel`, `text-text-primary`, `border-border-strong`, `shadow-panel`, `rounded-panel`.

## Архитектура

- `src/lib/theme.ts` содержит runtime-логику темы и storage/media helpers.
- `src/data/demo.ts` хранит служебный copy, foundations data, registry patterns, mobile preview и documentation rules.
- `src/components/ui/Panel.tsx` задаёт базовый модульный контейнер и теперь прокидывает `id` в корневой DOM-элемент для якорной навигации и element-level screenshots.
- `src/components/ui/Button.tsx`, `src/components/ui/IconButton.tsx`, `src/components/ui/SegmentedControl.tsx`, `src/components/ui/Tabs.tsx`, `src/components/ui/Accordion.tsx`, `src/components/ui/ToneBadge.tsx`, `src/components/ui/StatusLamp.tsx` закрывают основные интерактивные и статусные паттерны.
- `src/components/chrome/TopStatusBar.tsx`, `src/components/chrome/PassportBlock.tsx`, `src/components/chrome/OperationalLog.tsx`, `src/components/chrome/DataTable.tsx` формируют первичный язык системы.
- `src/sections/` содержит полный demo flow: foundations, components, data display, section chrome, полноразмерные layout screens, mobile preview и docs.

## Как добавлять новые компоненты в стиле темы

1. Добавить недостающий semantic token в `src/styles/app.css` сначала в light и dark runtime-переменные.
2. При необходимости промаппить его в `@theme inline`, если он нужен как Tailwind utility token.
3. Собрать новый компонент поверх `Panel` или рядом с ним, не используя raw hex и декоративные тени.
4. Проверять, что компонент читается как часть архивно-приборной среды: через рамку, плотную сетку, статусный язык и служебную типографику.
5. Если добавляется новый модульный паттерн, зафиксировать его grammar: section header, passport tags, state markers, divider logic.

## Статусная система

- `src/components/ui/StatusLamp.tsx` использовать только как вторичный сигнал рядом с уже понятным текстом: в summary, top status bar, compact device-like indicators.
- `src/components/ui/ToneBadge.tsx` использовать там, где статус должен читаться автономно: в журналах, таблицах, реестрах, списках действий и settings-блоках.
- Не смешивать `StatusLamp` и `ToneBadge` как взаимозаменяемые паттерны внутри одного контекста данных.

## Проверка

- `npm test`
- `npm run build`
- browser smoke использовался для проверки theme toggle, tabs, accordion, segmented control и якорной навигации

## Документация по теме

- token flow, iconography rules и content tone rules собраны в `src/sections/ThemeDocsSection.tsx`
- правила визуальной грамматики секций собраны в `src/sections/SectionChromeSection.tsx`
