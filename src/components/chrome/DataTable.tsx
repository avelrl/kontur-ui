import { Archive, CircleAlert } from "lucide-react";
import { useLocale } from "../../lib/locale";
import { Panel } from "../ui/Panel";
import { ToneBadge } from "../ui/ToneBadge";

export function DataTable() {
  const {
    strings: {
      sections: { dataHeavy },
    },
  } = useLocale();

  return (
    <Panel
      id="archive-table"
      eyebrow={dataHeavy.table.eyebrow}
      title={dataHeavy.table.title}
      meta={dataHeavy.table.meta}
      className="h-full"
      bodyClassName="space-y-4 px-0 py-0"
    >
      <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border-soft px-4 py-3 md:px-5">
        <div className="flex items-center gap-3">
          <Archive className="h-4 w-4 text-service-blue" aria-hidden="true" />
          <p className="text-sm text-text-primary">{dataHeavy.table.introText}</p>
        </div>
        <div className="surface-archive flex items-center gap-2 px-3 py-2 text-xs text-text-secondary">
          <CircleAlert className="h-4 w-4 text-signal-amber" aria-hidden="true" />
          <span>{dataHeavy.table.warningText}</span>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-left">
          <caption className="sr-only">{dataHeavy.table.caption}</caption>
          <thead>
            <tr className="bg-field text-xs uppercase tracking-[0.24em] text-text-secondary">
              <th className="px-4 py-3 font-mono font-normal md:px-5">{dataHeavy.table.columns.code}</th>
              <th className="px-4 py-3 font-mono font-normal">{dataHeavy.table.columns.title}</th>
              <th className="px-4 py-3 font-mono font-normal">{dataHeavy.table.columns.contour}</th>
              <th className="px-4 py-3 font-mono font-normal">{dataHeavy.table.columns.sync}</th>
              <th className="px-4 py-3 font-mono font-normal">{dataHeavy.table.columns.state}</th>
              <th className="px-4 py-3 font-mono font-normal md:px-5">{dataHeavy.table.columns.updatedAt}</th>
            </tr>
          </thead>
          <tbody>
            {dataHeavy.table.rows.map((row) => (
              <tr key={row.code} className="border-t border-border-soft align-top">
                <td className="px-4 py-4 font-mono text-sm text-text-primary md:px-5">{row.code}</td>
                <td className="px-4 py-4">
                  <p className="text-sm font-medium leading-6 text-text-primary">{row.title}</p>
                </td>
                <td className="px-4 py-4 text-sm leading-6 text-text-secondary">{row.contour}</td>
                <td className="px-4 py-4 text-sm leading-6 text-text-secondary">{row.sync}</td>
                <td className="px-4 py-4">
                  <ToneBadge tone={row.tone}>{row.state}</ToneBadge>
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
