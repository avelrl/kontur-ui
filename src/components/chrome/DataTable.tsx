import { Archive, ArrowUpRight, CircleAlert } from "lucide-react";
import { archiveRows, toneLabelMap, type StatusTone } from "../../data/demo";
import { cn } from "../../lib/cn";
import { Panel } from "../ui/Panel";

const toneClassMap: Record<StatusTone, string> = {
  normal: "bg-text-muted",
  service: "bg-service-blue",
  success: "bg-signal-green",
  warning: "bg-signal-amber",
  danger: "bg-signal-red",
};

export function DataTable() {
  return (
    <Panel
      id="archive-table"
      eyebrow="Архив документов"
      title="Сводный реестр"
      meta="ARCH / 06 карточек"
      className="h-full"
      bodyClassName="space-y-4 px-0 py-0"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-soft px-4 py-3 md:px-5">
        <div className="flex items-center gap-3">
          <Archive className="h-4 w-4 text-service-blue" aria-hidden="true" />
          <p className="text-sm text-text-primary">
            В таблице показаны основные архивные и рабочие единицы, влияющие на характер интерфейса.
          </p>
        </div>
        <div className="flex items-center gap-2 rounded-control border border-border-soft bg-field px-3 py-2 text-xs text-text-secondary">
          <CircleAlert className="h-4 w-4 text-signal-amber" aria-hidden="true" />
          <span>Три записи нуждаются в дополнительной сверке.</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <caption className="sr-only">Архивный реестр активных документов</caption>
          <thead>
            <tr className="bg-field text-xs uppercase tracking-[0.24em] text-text-secondary">
              <th className="px-4 py-3 font-mono font-normal md:px-5">Индекс</th>
              <th className="px-4 py-3 font-mono font-normal">Наименование</th>
              <th className="px-4 py-3 font-mono font-normal">Контур</th>
              <th className="px-4 py-3 font-mono font-normal">Синхронизация</th>
              <th className="px-4 py-3 font-mono font-normal">Состояние</th>
              <th className="px-4 py-3 font-mono font-normal md:px-5">Обновлено</th>
            </tr>
          </thead>
          <tbody>
            {archiveRows.map((row) => (
              <tr key={row.code} className="border-t border-border-soft align-top">
                <td className="px-4 py-4 font-mono text-sm text-text-primary md:px-5">{row.code}</td>
                <td className="px-4 py-4">
                  <div className="flex items-start gap-3">
                    <span className={cn("status-lamp mt-1", toneClassMap[row.tone])} aria-hidden="true" />
                    <div className="space-y-1">
                      <p className="text-sm font-medium leading-6 text-text-primary">{row.title}</p>
                      <p className="mono-label text-text-secondary">{toneLabelMap[row.tone]}</p>
                    </div>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm leading-6 text-text-secondary">{row.contour}</td>
                <td className="px-4 py-4 text-sm leading-6 text-text-secondary">{row.sync}</td>
                <td className="px-4 py-4">
                  <span className="inline-flex items-center gap-2 rounded-control border border-border-soft bg-elevated px-3 py-2 text-xs text-text-primary">
                    <ArrowUpRight className="h-4 w-4 text-service-blue" aria-hidden="true" />
                    {row.state}
                  </span>
                </td>
                <td className="px-4 py-4 font-mono text-sm text-text-secondary md:px-5">{row.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Panel>
  );
}

