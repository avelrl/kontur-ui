export type StatusTone = "normal" | "service" | "success" | "warning" | "danger";

export type SummaryMetric = {
  label: string;
  value: string;
  note: string;
  tone: StatusTone;
};

export type PassportField = {
  label: string;
  value: string;
};

export type LogEntry = {
  time: string;
  channel: string;
  system: string;
  message: string;
  tone: StatusTone;
};

export type DocumentRow = {
  code: string;
  title: string;
  contour: string;
  sync: string;
  state: string;
  tone: StatusTone;
  updatedAt: string;
};

export type SectionNavItem = {
  href: string;
  label: string;
};

export type FoundationColor = {
  name: string;
  token: string;
  lightValue: string;
  darkValue: string;
  note: string;
};

export type TypographySample = {
  role: string;
  sample: string;
  note: string;
};

export type StructuralToken = {
  label: string;
  value: string;
  note: string;
};

export type SurfaceLayer = {
  label: string;
  token: string;
  description: string;
};

export type AnalyticsCard = {
  label: string;
  value: string;
  note: string;
  tone: StatusTone;
  bars: number[];
};

export type ProgressScale = {
  label: string;
  value: number;
  caption: string;
  tone: StatusTone;
};

export type SystemStateCard = {
  title: string;
  state: string;
  detail: string;
  meta: string;
  tone: StatusTone;
};

export type RegistryRow = {
  code: string;
  module: string;
  owner: string;
  sync: string;
  state: string;
  action: string;
  tone: StatusTone;
};

export type LayoutPattern = {
  title: string;
  description: string;
  zones: string[];
};

export type MobileScreen = {
  title: string;
  subtitle: string;
  modules: Array<{
    label: string;
    value: string;
    tone: StatusTone;
  }>;
  footer: string;
};

export const sectionNavItems: SectionNavItem[] = [
  { href: "#overview", label: "Вступление" },
  { href: "#foundations", label: "Основания" },
  { href: "#components", label: "Компоненты" },
  { href: "#data-heavy", label: "Контур данных" },
  { href: "#data-display", label: "Показатели" },
  { href: "#section-chrome", label: "Секционный chrome" },
  { href: "#layouts", label: "Шаблоны" },
  { href: "#mobile", label: "Мобильный контур" },
  { href: "#docs", label: "Документация" },
];

export const topStatusItems = [
  { label: "Режим работы", value: "Расширенный стенд" },
  { label: "Синхронизация", value: "Канал устойчив" },
  { label: "Версия интерфейса", value: "MK-2026.04 / B-1" },
] as const;

export const summaryMetrics: SummaryMetric[] = [
  {
    label: "Активный контур",
    value: "СЕВЕР-12",
    note: "Связь удерживается 19 ч 24 мин",
    tone: "service",
  },
  {
    label: "Состояние системы",
    value: "Штатный ход",
    note: "12 модулей в рабочем состоянии",
    tone: "success",
  },
  {
    label: "Архивный фонд",
    value: "1 284 единицы",
    note: "Требует подтверждения: 3",
    tone: "warning",
  },
];

export const operationalSummary = [
  "В foundations вынесены палитра, surface hierarchy, типографика, радиусы, тени и spacing rhythm.",
  "Библиотека компонентов дополнена формами, tabs, badges, alerts, состояниями и search/filter/command patterns.",
  "Дополнительные layout patterns, mobile preview и docs секция удерживают единую приборно-архивную грамматику.",
] as const;

export const passportFields: PassportField[] = [
  { label: "Индекс модуля", value: "КОНТУР-UI / М-17" },
  { label: "Версия сборки", value: "2026.04-B1" },
  { label: "Профиль среды", value: "Гражданская научно-культурная сеть" },
  { label: "Режим проверки", value: "Light / Dark / System" },
  { label: "Дата ревизии", value: "04.04.2026" },
  { label: "Ответственный пост", value: "Сектор интерфейсных систем" },
];

export const operationalLog: LogEntry[] = [
  {
    time: "08:12",
    channel: "SYNC-04",
    system: "Архивный шлюз",
    message: "Пакет метаданных принят, сверка контрольных сумм завершена.",
    tone: "success",
  },
  {
    time: "08:19",
    channel: "OPS-11",
    system: "Оперативный журнал",
    message: "Контур наблюдения переведён в режим спокойного сопровождения.",
    tone: "service",
  },
  {
    time: "08:37",
    channel: "ARCH-02",
    system: "Фонд документов",
    message: "Три карточки требуют подтверждения происхождения.",
    tone: "warning",
  },
  {
    time: "08:44",
    channel: "LINK-07",
    system: "Канал связи",
    message: "Стабильность сигнала снижалась кратковременно, резерв не задействован.",
    tone: "normal",
  },
  {
    time: "08:58",
    channel: "CTRL-03",
    system: "Служебный пост",
    message: "Отклонений, требующих аварийного перевода, не выявлено.",
    tone: "success",
  },
];

export const archiveRows: DocumentRow[] = [
  {
    code: "АР-171-04",
    title: "Каталог подвижных мастерских по северному контуру",
    contour: "Фонд / Культура",
    sync: "Канал устойчив",
    state: "Актуален",
    tone: "success",
    updatedAt: "04.04.2026 08:10",
  },
  {
    code: "НИИ-204-12",
    title: "Паспорт стенда визуальной связи, редакция 12",
    contour: "НИИ / Интерфейсы",
    sync: "Идёт сверка",
    state: "Требует подтверждения",
    tone: "warning",
    updatedAt: "04.04.2026 08:21",
  },
  {
    code: "КР-055-77",
    title: "Журнал распределения задач по кружковому модулю",
    contour: "Кооперация / Проекты",
    sync: "Канал устойчив",
    state: "Актуален",
    tone: "service",
    updatedAt: "04.04.2026 08:26",
  },
  {
    code: "ЛБ-302-05",
    title: "Сводка показаний лабораторного интерфейсного поста",
    contour: "Лаборатория / Данные",
    sync: "Резервный ход",
    state: "Проверяется",
    tone: "warning",
    updatedAt: "04.04.2026 08:31",
  },
  {
    code: "СВ-090-19",
    title: "Справочник устойчивых каналов гражданской сети",
    contour: "Связь / Система",
    sync: "Канал устойчив",
    state: "Актуален",
    tone: "success",
    updatedAt: "04.04.2026 08:34",
  },
  {
    code: "ЭК-147-03",
    title: "Экземпляр маршрутов локального архива, ведомость 03",
    contour: "Архив / Резерв",
    sync: "Нет ответа",
    state: "Требует разбирательства",
    tone: "danger",
    updatedAt: "04.04.2026 08:42",
  },
];

export const foundationColors: FoundationColor[] = [
  {
    name: "Canvas",
    token: "--sys-bg-canvas / bg-canvas",
    lightValue: "#E8E3D8",
    darkValue: "#1C1F22",
    note: "Главная рабочая плоскость. Не белая и не чёрная, а материальная.",
  },
  {
    name: "Panel",
    token: "--sys-bg-panel / bg-panel",
    lightValue: "#D7CFC1",
    darkValue: "#262B2F",
    note: "Секционные панели и крупные модули.",
  },
  {
    name: "Elevated",
    token: "--sys-bg-elevated / bg-elevated",
    lightValue: "#F2EDE4",
    darkValue: "#30373D",
    note: "Подчёркнутые площадки, alert-блоки, контролируемые акценты.",
  },
  {
    name: "Text Primary",
    token: "--sys-text-primary / text-text-primary",
    lightValue: "#2F3438",
    darkValue: "#E3DBCF",
    note: "Основной текст интерфейса.",
  },
  {
    name: "Service Blue",
    token: "--sys-service-blue / text-service-blue",
    lightValue: "#72849A",
    darkValue: "#8A9DB4",
    note: "Служебные метки, контурные ориентиры и навигация.",
  },
  {
    name: "Signal Amber",
    token: "--sys-signal-amber / text-signal-amber",
    lightValue: "#C89A3D",
    darkValue: "#D2A54F",
    note: "Требует подтверждения, внимание, смена режима.",
  },
  {
    name: "Signal Green",
    token: "--sys-signal-green / text-signal-green",
    lightValue: "#728B68",
    darkValue: "#809A76",
    note: "Штатный ход, устойчивый контур, подтверждённая запись.",
  },
  {
    name: "Signal Red",
    token: "--sys-signal-red / text-signal-red",
    lightValue: "#B54834",
    darkValue: "#C45D49",
    note: "Нарушение контура или блокирующее расхождение.",
  },
];

export const typographySamples: TypographySample[] = [
  {
    role: "Заголовок раздела",
    sample: "Архивно-диспетчерский контур",
    note: "Спокойный, плотный, без рекламной интонации.",
  },
  {
    role: "Подзаголовок",
    sample: "Сводный реестр устойчивых каналов",
    note: "Используется для содержательных блоков и навигационных модулей.",
  },
  {
    role: "Служебная подпись",
    sample: "Параметры модуля",
    note: "Мелкая моноширинная маркировка разделов и карточек.",
  },
  {
    role: "Микротекст",
    sample: "Требует подтверждения происхождения",
    note: "Вторичный текст для пояснений и статусов.",
  },
  {
    role: "Табличная цифра",
    sample: "04.04.2026 08:42",
    note: "Моноширинный формат для временных и индексных данных.",
  },
];

export const structuralTokens: StructuralToken[] = [
  {
    label: "Радиус панели",
    value: "8px",
    note: "Малый, системный, без consumer-мягкости.",
  },
  {
    label: "Радиус контроля",
    value: "6px",
    note: "Кнопки, поля, chips, мелкие контейнеры.",
  },
  {
    label: "Бордер сильный",
    value: "1px / border-strong",
    note: "Формирует конструкцию, а не декоративную обводку.",
  },
  {
    label: "Тень панели",
    value: "shadow-panel",
    note: "Поддерживает глубину, но не заменяет рамку.",
  },
  {
    label: "Spacing rhythm",
    value: "8 / 12 / 16 / 24 / 32",
    note: "Ритм строится на модульном шаге без случайных зазоров.",
  },
];

export const spacingSteps = [8, 12, 16, 24, 32] as const;

export const surfaceLayers: SurfaceLayer[] = [
  {
    label: "Canvas",
    token: "bg-canvas",
    description: "Общая рабочая поверхность и фон композиции.",
  },
  {
    label: "Panel",
    token: "bg-panel",
    description: "Секционный контейнер с главной информацией.",
  },
  {
    label: "Elevated",
    token: "bg-elevated",
    description: "Локально выделенная площадка без glass-эффекта.",
  },
  {
    label: "Field",
    token: "bg-field",
    description: "Контролы, подтабличные маркировки, state chips.",
  },
];

export const analyticsCards: AnalyticsCard[] = [
  {
    label: "Нагрузка архива",
    value: "73%",
    note: "Плотность обращений за последние 12 часов.",
    tone: "service",
    bars: [36, 44, 40, 62, 54, 68, 73],
  },
  {
    label: "Согласование записей",
    value: "91%",
    note: "Подтверждённые экземпляры без возврата в сверку.",
    tone: "success",
    bars: [58, 64, 72, 68, 88, 91, 84],
  },
  {
    label: "Неполный контур",
    value: "03 ед.",
    note: "Карточки без подтверждённого происхождения.",
    tone: "warning",
    bars: [12, 22, 8, 26, 16, 18, 28],
  },
];

export const progressScales: ProgressScale[] = [
  {
    label: "Переход на новую картотеку",
    value: 68,
    caption: "Проверены 408 из 600 записей",
    tone: "service",
  },
  {
    label: "Согласование кружкового реестра",
    value: 84,
    caption: "Осталось 12 журналов к подтверждению",
    tone: "success",
  },
  {
    label: "Разбор резервного контура",
    value: 37,
    caption: "Есть записи без устойчивого канала",
    tone: "warning",
  },
];

export const systemStateCards: SystemStateCard[] = [
  {
    title: "Контур связи",
    state: "Канал устойчив",
    detail: "Основная линия и резерв синхронизированы.",
    meta: "LINK / 07",
    tone: "success",
  },
  {
    title: "Архивная верификация",
    state: "Требует подтверждения",
    detail: "Три позиции ожидают ручного происхождения.",
    meta: "ARCH / 02",
    tone: "warning",
  },
  {
    title: "Служебный пост",
    state: "Наблюдение",
    detail: "Аварийных признаков не обнаружено.",
    meta: "CTRL / 03",
    tone: "normal",
  },
];

export const registryRows: RegistryRow[] = [
  {
    code: "RG-14",
    module: "Сводный архив кружков",
    owner: "Фонд культуры",
    sync: "Канал устойчив",
    state: "Готов к публикации",
    action: "Подтвердить выпуск",
    tone: "success",
  },
  {
    code: "RG-21",
    module: "Журнал испытаний экранного контура",
    owner: "Сектор интерфейсов",
    sync: "Идёт сверка",
    state: "Требует ручной проверки",
    action: "Назначить ревизора",
    tone: "warning",
  },
  {
    code: "RG-37",
    module: "Реестр проектных мастерских",
    owner: "Кооперативный отдел",
    sync: "Резервный ход",
    state: "Наблюдение",
    action: "Уточнить маршрут",
    tone: "service",
  },
  {
    code: "RG-52",
    module: "Справочник вечерних лабораторий",
    owner: "Городской контур",
    sync: "Нет ответа",
    state: "Нарушение контура",
    action: "Перевести на резерв",
    tone: "danger",
  },
];

export const documentationModules = [
  {
    title: "Токены темы",
    lines: [
      "semantic vars → runtime themes → @theme inline",
      "Компоненты используют только семантические utility tokens.",
      "Raw hex допускаются только в слое определения переменных.",
    ],
  },
  {
    title: "Секционный chrome",
    lines: [
      "Секционные шапки строятся из index label, title и meta-подписи.",
      "Паспортные ярлыки и графические делители работают как навигационные опоры.",
      "Мелкая моноширинная маркировка должна усиливать сканирование, а не шум.",
    ],
  },
] as const;

export const layoutPatterns: LayoutPattern[] = [
  {
    title: "Командный пункт",
    description: "Статусная строка, сводка, журналы и показатели собираются в единую оперативную поверхность.",
    zones: ["Строка состояния", "Сводка", "Журнал", "Системные карточки"],
  },
  {
    title: "Архив / документы",
    description: "Приоритет у реестра, паспорта документа, боковой навигации и блока происхождения записи.",
    zones: ["Архивный реестр", "Паспорт", "Маркировки", "История редакций"],
  },
  {
    title: "Параметры системы",
    description: "Режимы работы, права доступа, каналы синхронизации и служебные подтверждения.",
    zones: ["Режимы", "Каналы", "Доступ", "Служебные предупреждения"],
  },
];

export const mobileScreens: MobileScreen[] = [
  {
    title: "Обзор дня",
    subtitle: "Карманный терминал участия",
    modules: [
      { label: "Сводка дня", value: "04 события", tone: "service" },
      { label: "Канал связи", value: "Устойчив", tone: "success" },
      { label: "Требует ответа", value: "02 темы", tone: "warning" },
    ],
    footer: "Следующий блок: лаборатория городской картографии.",
  },
  {
    title: "Проект / лаборатория",
    subtitle: "Совместная работа",
    modules: [
      { label: "Активная мастерская", value: "Экранный контур", tone: "service" },
      { label: "Собрано материалов", value: "17 листов", tone: "success" },
      { label: "Ожидает сверки", value: "03 позиции", tone: "warning" },
    ],
    footer: "Доступны заметки, журнал испытаний и общий паспорт проекта.",
  },
  {
    title: "Круг / обсуждение",
    subtitle: "Люди рядом по теме",
    modules: [
      { label: "Ближайший круг", value: "Типографика города", tone: "service" },
      { label: "Подтверждено участников", value: "12", tone: "success" },
      { label: "Новые сообщения", value: "05", tone: "warning" },
    ],
    footer: "Канал открыт до 21:00, требуется подтверждение присутствия.",
  },
];

export const iconographyRules = [
  "Использовать простые stroke-иконки с инженерным характером и читаемым силуэтом.",
  "Не смешивать outline и filled-иконки в одном модуле без функциональной причины.",
  "Избегать мультяшных, брендовых и эмоционально-перегруженных символов.",
  "Иконка должна ускорять сканирование статуса или действия, а не украшать блок.",
];

export const contentToneRules = [
  "Писать служебно-спокойно, как для системы длительного пользования.",
  "Использовать формулировки уровня «Состояние системы», «Требует подтверждения», «Канал устойчив».",
  "Не использовать marketing copy, startup slogans и productivity buzzwords.",
  "Каждый заголовок должен обозначать модуль, контур, документ или действие, а не обещание.",
];

export const badToneExamples = [
  "Boost your workflow",
  "Beautiful experience",
  "Streamline your tasks",
  "Next-generation productivity",
];

export const chromeGrammarExamples = [
  "Секционная шапка: index label + title + meta",
  "Паспортный ярлык: код модуля, ревизия, режим работы",
  "Служебная маркировка: краткая моноширинная подпись возле состояния",
  "Графический делитель: тонкая линия чертежа с опорной меткой",
];

export const toneLabelMap: Record<StatusTone, string> = {
  normal: "Наблюдение",
  service: "Служебный контур",
  success: "Штатно",
  warning: "Требует подтверждения",
  danger: "Нарушение контура",
};
