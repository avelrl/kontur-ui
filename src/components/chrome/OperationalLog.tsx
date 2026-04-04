import { operationalLog, toneLabelMap } from "../../data/demo";
import { Panel } from "../ui/Panel";
import { ToneBadge } from "../ui/ToneBadge";

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
              <span className="mono-label text-text-primary">{entry.system}</span>
              <span className="mono-label text-text-secondary">{entry.time}</span>
            </div>
            <p className="text-sm leading-6 text-text-primary">{entry.message}</p>
            <div className="flex flex-wrap items-center gap-2 text-xs text-text-secondary">
              <span className="status-chip">{entry.channel}</span>
              <ToneBadge tone={entry.tone} className="px-2.5 py-1.5 text-[0.68rem]">
                {toneLabelMap[entry.tone]}
              </ToneBadge>
            </div>
          </li>
        ))}
      </ol>
    </Panel>
  );
}
