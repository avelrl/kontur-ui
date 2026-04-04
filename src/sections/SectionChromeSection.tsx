import { chromeGrammarExamples } from "../data/demo";
import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";

export function SectionChromeSection() {
  return (
    <section id="section-chrome" className="scroll-mt-40 space-y-4">
      <Panel
        id="section-chrome-intro"
        eyebrow="Grammar of section chrome"
        title="Секционные шапки, паспортные ярлыки и графические делители"
        meta="CHROME / MARKINGS"
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base">
          Секционный chrome отвечает за то, как система читается между блоками: index labels, meta-подписи,
          паспортные ярлыки, графические делители и мелкие служебные маркировки создают устойчивую грамматику
          интерфейса и не дают странице распасться на случайные карточки.
        </p>
        <div className="grid gap-4 xl:grid-cols-3">
          <div className="rounded-control border border-border-soft bg-field p-4">
            <span className="index-label">SECTION / 05</span>
            <div className="graphic-divider mt-3" />
            <h3 className="mt-4 text-lg font-semibold text-text-primary">Секционная шапка</h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">
              Содержит индекс, заголовок, meta и короткую служебную расшифровку.
            </p>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <p className="mono-label text-text-secondary">Паспортные ярлыки</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="passport-tag">MOD / 17</span>
              <span className="passport-tag">REV / B1</span>
              <span className="passport-tag">LINK / 07</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-secondary">Используются как опоры для индексации и навигации.</p>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <p className="mono-label text-text-secondary">Служебные маркировки</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <ToneBadge tone="service">Служебный контур</ToneBadge>
              <ToneBadge tone="warning">Требует подтверждения</ToneBadge>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-secondary">Маркировка всегда уточняет статус, а не заменяет его.</p>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1.15fr)]">
        <Panel
          id="chrome-rules"
          eyebrow="Правила грамматики"
          title="Что повторяется от секции к секции"
          meta="RULES / SYSTEM"
          bodyClassName="space-y-3"
        >
          {chromeGrammarExamples.map((item, index) => (
            <div key={item} className="rounded-control border border-border-soft bg-field px-4 py-3">
              <p className="mono-label text-text-secondary">0{index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-text-primary">{item}</p>
            </div>
          ))}
        </Panel>

        <Panel
          id="graphic-dividers"
          eyebrow="Графические делители"
          title="Линии чертежа и индексные подписи"
          meta="DIVIDERS / INDEX"
          bodyClassName="space-y-4"
        >
          <div className="rounded-control border border-border-soft bg-field p-4">
            <span className="index-label">DIVIDER / A</span>
            <div className="graphic-divider mt-3" />
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              Основной делитель используется между крупными секциями и сопровождается индексной подписью.
            </p>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <span className="index-label">DIVIDER / B</span>
            <div className="graphic-divider mt-3 before:bg-signal-amber" />
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              Янтарная опорная метка выделяет раздел, где требуется ручное внимание или подтверждение.
            </p>
          </div>
          <div className="rounded-control border border-border-soft bg-field p-4">
            <span className="index-label">DIVIDER / C</span>
            <div className="graphic-divider mt-3 before:bg-signal-green" />
            <p className="mt-4 text-sm leading-6 text-text-secondary">
              Зелёная метка подходит для подтверждённых контуров и итоговых модулей состояния.
            </p>
          </div>
        </Panel>
      </div>
    </section>
  );
}
