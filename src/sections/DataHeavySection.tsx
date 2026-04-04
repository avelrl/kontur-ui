import { Activity, DatabaseBackup } from "lucide-react";
import { DataTable } from "../components/chrome/DataTable";
import { OperationalLog } from "../components/chrome/OperationalLog";
import { Panel } from "../components/ui/Panel";

export function DataHeavySection() {
  return (
    <section id="data-heavy" className="space-y-4">
      <Panel
        id="data-heavy-header"
        eyebrow="Контур данных"
        title="Архивно-диспетчерский рабочий участок"
        meta="SECTION / DATA-HEAVY"
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.85fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Секция намеренно плотная: здесь интерфейс не «продаёт опыт», а удерживает состояние, источник записи,
          состояние канала и признак подтверждения без лишнего воздуха и мягкой витринности.
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-control border border-border-soft bg-field px-4 py-4">
            <div className="flex items-center gap-2">
              <DatabaseBackup className="h-4 w-4 text-service-blue" aria-hidden="true" />
              <p className="mono-label text-text-secondary">Архивный режим</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-primary">Реестр работает как первичный носитель структуры и навигации.</p>
          </div>
          <div className="rounded-control border border-border-soft bg-field px-4 py-4">
            <div className="flex items-center gap-2">
              <Activity className="h-4 w-4 text-signal-green" aria-hidden="true" />
              <p className="mono-label text-text-secondary">Журнальный режим</p>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-primary">События выводятся как запись служебной истории, а не как декоративный feed.</p>
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

