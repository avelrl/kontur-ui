import { ToneBadge } from "../components/ui/ToneBadge";
import { Panel } from "../components/ui/Panel";
import { useLocale } from "../lib/locale";

export function SectionChromeSection() {
  const {
    strings: {
      common,
      sections: { sectionChrome },
    },
  } = useLocale();

  return (
    <section id="section-chrome" className="scroll-mt-40 space-y-4">
      <Panel
        id="section-chrome-intro"
        eyebrow={sectionChrome.intro.eyebrow}
        title={sectionChrome.intro.title}
        meta={sectionChrome.intro.meta}
        bodyClassName="space-y-4"
      >
        <p className="text-sm leading-7 text-text-primary md:text-base md:leading-8">{sectionChrome.intro.description}</p>
        <div className="grid gap-4 xl:grid-cols-3">
          <div className="surface-field p-4">
            <span className="index-label">SECTION / 05</span>
            <div className="graphic-divider mt-3" />
            <h3 className="mt-4 text-lg font-semibold text-text-primary">{sectionChrome.intro.cards.section.title}</h3>
            <p className="mt-2 text-sm leading-6 text-text-secondary">{sectionChrome.intro.cards.section.text}</p>
          </div>
          <div className="surface-field p-4">
            <p className="mono-label text-text-secondary">{sectionChrome.intro.cards.passport.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <span className="passport-tag">MOD / 17</span>
              <span className="passport-tag">REV / B1</span>
              <span className="passport-tag">LINK / 07</span>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{sectionChrome.intro.cards.passport.text}</p>
          </div>
          <div className="surface-field p-4">
            <p className="mono-label text-text-secondary">{sectionChrome.intro.cards.service.title}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              <ToneBadge tone="service">{common.toneLabels.service}</ToneBadge>
              <ToneBadge tone="warning">{common.toneLabels.warning}</ToneBadge>
            </div>
            <p className="mt-3 text-sm leading-6 text-text-secondary">{sectionChrome.intro.cards.service.text}</p>
          </div>
        </div>
      </Panel>

      <div className="grid gap-4 xl:grid-cols-[minmax(20rem,0.85fr)_minmax(0,1.15fr)]">
        <Panel
          id="chrome-rules"
          eyebrow={sectionChrome.rules.eyebrow}
          title={sectionChrome.rules.title}
          meta={sectionChrome.rules.meta}
          bodyClassName="space-y-3"
        >
          {sectionChrome.rules.items.map((item, index) => (
            <div key={item} className="surface-field px-4 py-3">
              <p className="mono-label text-text-secondary">0{index + 1}</p>
              <p className="mt-2 text-sm leading-6 text-text-primary">{item}</p>
            </div>
          ))}
        </Panel>

        <Panel
          id="graphic-dividers"
          eyebrow={sectionChrome.dividers.eyebrow}
          title={sectionChrome.dividers.title}
          meta={sectionChrome.dividers.meta}
          bodyClassName="space-y-4"
        >
          {sectionChrome.dividers.items.map((item, index) => (
            <div key={item.id} className="surface-field p-4">
              <span className="index-label">{item.label}</span>
              <div
                className={`graphic-divider mt-3 ${index === 1 ? "before:bg-signal-amber" : index === 2 ? "before:bg-signal-green" : ""}`}
              />
              <p className="mt-4 text-sm leading-6 text-text-secondary">{item.text}</p>
            </div>
          ))}
        </Panel>
      </div>
    </section>
  );
}
