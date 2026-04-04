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

export const topStatusItems = [
  { label: "Режим работы", value: "Испытательный стенд" },
  { label: "Синхронизация", value: "Канал устойчив" },
  { label: "Версия интерфейса", value: "MK-2026.04 / A-3" },
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
    note: "7 модулей в рабочем состоянии",
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
  "Сетка интерфейса переведена в приборный режим без декоративных витрин.",
  "Статусная строка, паспорт модуля и журнал событий приняты как первичные паттерны.",
  "Светлая и тёмная версии сведены как две самостоятельные поверхности одной системы.",
] as const;

export const passportFields: PassportField[] = [
  { label: "Индекс модуля", value: "КОНТУР-UI / М-17" },
  { label: "Версия сборки", value: "2026.04-P1" },
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

export const toneLabelMap: Record<StatusTone, string> = {
  normal: "Наблюдение",
  service: "Служебный контур",
  success: "Штатно",
  warning: "Требует подтверждения",
  danger: "Нарушение контура",
};

