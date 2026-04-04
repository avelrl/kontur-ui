import { operationalLog, toneLabelMap, type StatusTone } from "../../data/demo";
import { cn } from "../../lib/cn";
import { Panel } from "../ui/Panel";

const toneClassMap: Record<StatusTone, string> = {
  normal: "bg-text-muted",
  service: "bg-service-blue",
  success: "bg-signal-green",
  warning: "bg-signal-amber",
  danger: "bg-signal-red",
};

export function OperationalLog() {
  return (
    <Panel
      id="operational-log"
      eyebrow="Журнал событий"
      title="Оперативный журнал"
      meta="LOG / 05 записей"
      className="h-full"
      bodyClassName="p-0"
    >
      <ol className="divide-y divide-border-soft">
        {operationalLog.map((entry) => (
          <li key={`${entry.time}-${entry.channel}`} className="grid gap-3 px-4 py-4 md:px-5">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <span className={cn("status-lamp", toneClassMap[entry.tone])} aria-hidden="true" />
                <span className="mono-label text-text-primary">{entry.system}</span>
              </div>
              <span className="mono-label text-text-secondary">{entry.time}</span>
            </div>
            <p className="text-sm leading-6 text-text-primary">{entry.message}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
              <span className="status-chip">{entry.channel}</span>
              <span className="status-chip">{toneLabelMap[entry.tone]}</span>
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  );
}

