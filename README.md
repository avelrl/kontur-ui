# Контур UI

Первый этап демонстрационного проекта на `Vite + React + TypeScript + Tailwind CSS v4`.

Сейчас в репозитории реализован обязательный первый этап:

- semantic theme tokens для light/dark
- `light / dark / system` переключение без заметного theme flash
- верхняя статусная строка
- базовый `Panel`
- `PassportBlock`
- `OperationalLog`
- `DataTable`
- первый экран и один data-heavy section

## Запуск

```bash
npm install
npm run dev
```

Проверка текущего этапа:

```bash
npm run test
npm run build
```

## Где менять токены

Все токены текущей темы лежат в [src/styles/app.css](/Users/avel/Projects/kontur-ui/src/styles/app.css):

- `:root` содержит light semantic variables
- `[data-theme="dark"]` содержит dark overrides
- `@theme inline` маппит `--sys-*` в Tailwind v4 utility tokens `--color-*`, `--radius-*`, `--shadow-*`, `--font-*`

Компоненты используют только семантические utility-классы вроде `bg-panel`, `text-text-primary`, `border-border-strong`, `shadow-panel`, `rounded-panel`.

## Архитектура текущего этапа

- [src/lib/theme.ts](/Users/avel/Projects/kontur-ui/src/lib/theme.ts) содержит runtime-логику темы и storage/media helpers.
- [src/data/demo.ts](/Users/avel/Projects/kontur-ui/src/data/demo.ts) хранит служебный copy и demo data текущего этапа.
- [src/components/ui/Panel.tsx](/Users/avel/Projects/kontur-ui/src/components/ui/Panel.tsx) задаёт базовый модульный контейнер.
- [src/components/chrome/TopStatusBar.tsx](/Users/avel/Projects/kontur-ui/src/components/chrome/TopStatusBar.tsx), [src/components/chrome/PassportBlock.tsx](/Users/avel/Projects/kontur-ui/src/components/chrome/PassportBlock.tsx), [src/components/chrome/OperationalLog.tsx](/Users/avel/Projects/kontur-ui/src/components/chrome/OperationalLog.tsx), [src/components/chrome/DataTable.tsx](/Users/avel/Projects/kontur-ui/src/components/chrome/DataTable.tsx) формируют первичный язык системы.

## Как добавлять новые компоненты в стиле темы

1. Добавить недостающий semantic token в [src/styles/app.css](/Users/avel/Projects/kontur-ui/src/styles/app.css) сначала в light и dark runtime-переменные.
2. При необходимости промаппить его в `@theme inline`, если он нужен как Tailwind utility token.
3. Собрать новый компонент поверх `Panel` или рядом с ним, не используя raw hex и декоративные тени.
4. Проверять, что компонент читаетcя как часть архивно-приборной среды: через рамку, плотную сетку, статусный язык и служебную типографику.

## Что входит во второй этап

- foundations-секция: палитра, роли цветов, типографика, радиусы, бордеры, тени и spacing rhythm
- расширенная библиотека компонентов: кнопки, формы, tabs, badges, indicators, accordions, alerts
- расширение data-display: аналитические блоки, шкалы, системные карточки состояния и документационные модули
- дополнительные layout patterns: dashboard, archive/docs, settings/system
- mobile superapp preview
- секция с документацией по теме и правилами расширения
