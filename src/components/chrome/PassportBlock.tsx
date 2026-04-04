import { Fingerprint, ShieldCheck } from "lucide-react";
import { useLocale } from "../../lib/locale";
import { Panel } from "../ui/Panel";

export function PassportBlock() {
  const {
    strings: {
      sections: { hero },
    },
  } = useLocale();

  return (
    <Panel
      id="passport"
      eyebrow={hero.passport.eyebrow}
      title={hero.passport.title}
      meta={hero.passport.meta}
      className="h-full"
      bodyClassName="space-y-5"
    >
      <div className="surface-active grid gap-3 px-4 py-4 md:grid-cols-[1fr_auto]">
        <div>
          <p className="mono-label text-text-secondary">{hero.passport.statusLabel}</p>
          <p className="mt-2 flex items-center gap-2 text-sm font-medium text-text-primary">
            <ShieldCheck className="h-4 w-4 text-signal-green" aria-hidden="true" />
            {hero.passport.statusValue}
          </p>
        </div>
        <div className="surface-elevated flex items-start gap-2 px-3 py-2">
          <Fingerprint className="mt-0.5 h-4 w-4 text-service-blue" aria-hidden="true" />
          <div>
            <p className="mono-label text-text-secondary">{hero.passport.controlCodeLabel}</p>
            <p className="mt-1 font-mono text-sm text-text-primary">UX-SYS-17A6</p>
          </div>
        </div>
      </div>
      <dl className="grid gap-3 sm:grid-cols-2">
        {hero.passport.fields.map((field) => (
          <div key={field.id} className="border-b border-border-soft pb-3 last:border-b-0">
            <dt className="mono-label text-text-secondary">{field.label}</dt>
            <dd className="mt-1 text-sm leading-6 text-text-primary">{field.value}</dd>
          </div>
        ))}
      </dl>
    </Panel>
  );
}
