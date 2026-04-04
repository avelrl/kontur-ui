import { badToneExamples, contentToneRules, iconographyRules } from "../data/demo";
import { Panel } from "../components/ui/Panel";

const tokenSnippet = `:root {\n  --sys-bg-panel: ...;\n}\n\n[data-theme="dark"] {\n  --sys-bg-panel: ...;\n}\n\n@theme inline {\n  --color-panel: var(--sys-bg-panel);\n}`;

export function ThemeDocsSection() {
  return (
    <section id="docs" className="scroll-mt-40 space-y-4">
      <Panel
        id="docs-intro"
        eyebrow="Theme docs"
        title="Как расширять тему и сохранять её характер"
        meta="DOCS / RULES"
        bodyClassName="grid gap-4 lg:grid-cols-[minmax(0,1.12fr)_minmax(20rem,0.88fr)]"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Документация темы фиксирует не только технический поток токенов, но и правила иконографии, секционного
          chrome и tone of voice. Расширение допустимо только через semantic tokens и компоненты, которые продолжают
          служебно-спокойный, инженерный характер системы.
        </p>
        <div className="rounded-control border border-border-soft bg-field px-4 py-4">
          <p className="mono-label text-text-secondary">Короткая памятка</p>
          <p className="mt-3 text-sm leading-6 text-text-primary">
            Сначала token, потом mapping, потом компонент. Не наоборот. Никаких raw hex, брендовых акцентов и
            рекламных слоганов внутри UI.
          </p>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.9fr)]">
        <Panel
          id="token-flow"
          eyebrow="Поток токенов"
          title="Как добавить новый semantic token"
          meta="TOKENS / FLOW"
          bodyClassName="space-y-4"
        >
          <ol className="space-y-3 text-sm leading-6 text-text-secondary">
            <li>1. Добавить `--sys-*` переменную в `:root` и соответствующий dark override.</li>
            <li>2. Промаппить её в `@theme inline`, если нужен utility token.</li>
            <li>3. Подключать новый токен только через семантический class name в компоненте.</li>
            <li>4. Проверить light и dark как две самостоятельные версии одной системы.</li>
          </ol>
          <pre className="code-block">
            <code>{tokenSnippet}</code>
          </pre>
        </Panel>

        <Panel
          id="component-rules"
          eyebrow="Компоненты"
          title="Как добавлять новый модуль"
          meta="COMPONENT / RULES"
          bodyClassName="space-y-3"
        >
          <div className="rounded-control border border-border-soft bg-field p-4">
            <p className="text-sm font-medium text-text-primary">Шаг 1</p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">Определить роль модуля: статус, реестр, ввод, предупреждение, паспорт.</p>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <p className="text-sm font-medium text-text-primary">Шаг 2</p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">Собрать его из panel, border, service labels и плотного spacing rhythm.</p>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <p className="text-sm font-medium text-text-primary">Шаг 3</p>
            <p className="mt-2 text-sm leading-6 text-text-secondary">Проверить, что блок не стал похож на SaaS-card, fintech widget или consumer-sheet.</p>
          </div>
        </Panel>
      </div>

      <div className="grid gap-4 xl:grid-cols-2">
        <Panel
          id="iconography-rules"
          eyebrow="Iconography rules"
          title="Правила иконографии"
          meta="ICONS / LANGUAGE"
          bodyClassName="space-y-3"
        >
          {iconographyRules.map((rule) => (
            <div key={rule} className="rounded-control border border-border-soft bg-field px-4 py-3">
              <p className="text-sm leading-6 text-text-secondary">{rule}</p>
            </div>
          ))}
        </Panel>

        <Panel
          id="content-tone-rules"
          eyebrow="Content tone rules"
          title="Правила тона текста"
          meta="COPY / SERVICE"
          bodyClassName="space-y-4"
        >
          <div className="space-y-3">
            {contentToneRules.map((rule) => (
              <div key={rule} className="rounded-control border border-border-soft bg-field px-4 py-3">
                <p className="text-sm leading-6 text-text-secondary">{rule}</p>
              </div>
            ))}
          </div>
          <div className="rounded-control border border-border-soft bg-elevated p-4">
            <p className="mono-label text-text-secondary">Недопустимые формулы</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {badToneExamples.map((item) => (
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
