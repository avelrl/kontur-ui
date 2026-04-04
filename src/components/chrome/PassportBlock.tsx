import { Fingerprint, ShieldCheck } from "lucide-react";
import { passportFields } from "../../data/demo";
import { Panel } from "../ui/Panel";

export function PassportBlock() {
  return (
    <Panel
      id="passport"
      eyebrow="Паспорт изделия"
      title="Параметры модуля"
      meta="CARD / М-17"
      className="h-full"
      bodyClassName="space-y-5"
    >
      <div className="grid gap-3 rounded-control border border-border-soft bg-field px-4 py-4 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mono-label text-text-secondary">Статус допуска</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-medium text-text-primary">
            <ShieldCheck className="h-4 w-4 text-signal-green" aria-hidden="true" />
            Канал устойчив, контур цел
          </p>
        </div>
        <div className="flex items-start gap-2 rounded-control border border-border-strong bg-elevated px-3 py-2">
          <Fingerprint className="mt-0.5 h-4 w-4 text-service-blue" aria-hidden="true" />
          <div>
            <p className="mono-label text-text-secondary">Контрольный код</p>
            <p className="mt-1 font-mono text-sm text-text-primary">UX-SYS-17A6</p>
          </div>
        </div>
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        {passportFields.map((field) => (
          <div key={field.label} className="border-b border-border-soft pb-3 last:border-b-0">
            <dt className="mono-label text-text-secondary">{field.label}</dt>
            <dd className="mt-1 text-sm leading-6 text-text-primary">{field.value}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}

