import { Activity, DatabaseBackup } from "lucide-react";
import { DataTable } from "../components/chrome/DataTable";
import { OperationalLog } from "../components/chrome/OperationalLog";
import { Panel } from "../components/ui/Panel";
import { useLocale } from "../lib/locale";

export function DataHeavySection() {
  const {
    strings: {
      sections: { dataHeavy },
    },
  } = useLocale();

  return (
    <section id="data-heavy" className="scroll-mt-40 space-y-4">
      <Panel
        id="data-heavy-header"
        eyebrow={dataHeavy.intro.eyebrow}
        title={dataHeavy.intro.title}
        meta={dataHeavy.intro.meta}
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.85fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{dataHeavy.intro.description}</p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="surface-archive px-4 py-4">
            <div className="flex items-center gap-2">
              <DatabaseBackup className="h-4 w-4 text-service-blue" aria-hidden="true" />
              <p className="mono-label text-text-secondary">{dataHeavy.intro.archiveMode.label}</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-primary">{dataHeavy.intro.archiveMode.text}</p>
          </div>
          <div className="surface-active px-4 py-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-signal-green" aria-hidden="true" />
              <p className="mono-label text-text-secondary">{dataHeavy.intro.logMode.label}</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-primary">{dataHeavy.intro.logMode.text}</p>
          </div>
        </div>
      </Panel>
      <div className="grid gap-4 2xl:grid-cols-[minmax(23rem,0.78fr)_minmax(0,1.22fr)]">
        <OperationalLog />
        <DataTable />
      </div>
    </section>
  );
}
