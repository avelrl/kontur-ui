import { Panel } from "../components/ui/Panel";
import { useLocale } from "../lib/locale";

const tokenSnippet = `:root {\n  --sys-bg-panel: ...;\n}\n\n[data-theme="dark"] {\n  --sys-bg-panel: ...;\n}\n\n@theme inline {\n  --color-panel: var(--sys-bg-panel);\n}`;

export function ThemeDocsSection() {
  const {
    strings: {
      sections: { docs },
    },
  } = useLocale();

  return (
    <section id="docs" className="scroll-mt-40 space-y-4">
      <Panel
        id="docs-intro"
        eyebrow={docs.intro.eyebrow}
        title={docs.intro.title}
        meta={docs.intro.meta}
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.08fr)_minmax(20rem,0.92fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{docs.intro.description}</p>
        <div className="grid gap-3">
          <div className="surface-field px-4 py-4">
            <p className="mono-label text-text-secondary">{docs.intro.noteTitle}</p>
            <p className="mt-3 text-sm leading-6 text-text-primary">{docs.intro.noteText}</p>
          </div>
          <div className="surface-inset px-4 py-4">
            <p className="mono-label text-text-secondary">{docs.intro.checklistTitle}</p>
            <div className="mt-3 space-y-2.5">
              {docs.intro.checklistItems.map((item) => (
                <p key={item} className="text-sm leading-6 text-text-secondary">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
        <Panel
          id="token-flow"
          eyebrow={docs.tokenFlow.eyebrow}
          title={docs.tokenFlow.title}
          meta={docs.tokenFlow.meta}
          bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.05fr)_minmax(18rem,0.95fr)]"
        >
          <div className="space-y-4">
            <ol className="space-y-3 text-sm leading-6 text-text-secondary">
              {docs.tokenFlow.steps.map((step, index) => (
                <li key={step}>
                  {index + 1}. {step}
                </li>
              ))}
            </ol>
            <pre className="code-block">
              <code>{tokenSnippet}</code>
            </pre>
          </div>
          <div className="surface-inset px-4 py-4">
            <p className="mono-label text-text-secondary">{docs.tokenFlow.verificationTitle}</p>
            <div className="mt-3 space-y-2.5">
              {docs.tokenFlow.verificationItems.map((item) => (
                <p key={item} className="text-sm leading-6 text-text-secondary">
                  {item}
                </p>
              ))}
            </div>
          </div>
        </Panel>

        <Panel
          id="component-rules"
          eyebrow={docs.componentRules.eyebrow}
          title={docs.componentRules.title}
          meta={docs.componentRules.meta}
          bodyClassName="space-y-3"
        >
          {docs.componentRules.steps.map((step) => (
            <div key={step.id} className="surface-field p-4">
              <p className="text-sm font-medium text-text-primary">{step.title}</p>
              <p className="mt-2 text-sm leading-6 text-text-secondary">{step.text}</p>
            </div>
          ))}
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Panel
          id="iconography-rules"
          eyebrow={docs.iconography.eyebrow}
          title={docs.iconography.title}
          meta={docs.iconography.meta}
          bodyClassName="space-y-3"
        >
          {docs.iconography.items.map((rule) => (
            <div key={rule} className="surface-field px-4 py-3">
              <p className="text-sm leading-6 text-text-secondary">{rule}</p>
            </div>
          ))}
        </Panel>

        <Panel
          id="content-tone-rules"
          eyebrow={docs.tone.eyebrow}
          title={docs.tone.title}
          meta={docs.tone.meta}
          bodyClassName="space-y-4"
        >
          <div className="space-y-3">
            {docs.tone.items.map((rule) => (
              <div key={rule} className="surface-field px-4 py-3">
                <p className="text-sm leading-6 text-text-secondary">{rule}</p>
              </div>
            ))}
          </div>
          <div className="surface-elevated p-4">
            <p className="mono-label text-text-secondary">{docs.tone.badTitle}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {docs.tone.badExamples.map((item) => (
                <span key={item} className="passport-tag">
                  {item}
                </span>
              ))}
            </div>
          </div>
        </Panel>
      </div>
    </section>
  );
}
