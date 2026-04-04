import { HeroSection } from "./sections/HeroSection";
import { FoundationsSection } from "./sections/FoundationsSection";
import { ComponentLibrarySection } from "./sections/ComponentLibrarySection";
import { DataHeavySection } from "./sections/DataHeavySection";
import { DataDisplayExpansionSection } from "./sections/DataDisplayExpansionSection";
import { SectionChromeSection } from "./sections/SectionChromeSection";
import { LayoutPatternsSection } from "./sections/LayoutPatternsSection";
import { MobileSuperappSection } from "./sections/MobileSuperappSection";
import { ThemeDocsSection } from "./sections/ThemeDocsSection";
import { TopStatusBar } from "./components/chrome/TopStatusBar";
import { LocaleProvider, useLocale } from "./lib/locale";
import { useThemeMode } from "./lib/theme";

function AppFrame() {
  const { mode, resolvedTheme, setMode } = useThemeMode();
  const { strings } = useLocale();

  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-elevated focus:px-4 focus:py-3 focus:text-text-primary"
      >
        {strings.skipToContent}
      </a>
      <TopStatusBar mode={mode} resolvedTheme={resolvedTheme} onModeChange={setMode} />
      <main className="worksurface mx-auto max-w-[1560px] px-3 py-4 md:px-6 md:py-6 lg:px-8">
        <div className="space-y-4">
          <HeroSection />
          <FoundationsSection />
          <ComponentLibrarySection />
          <DataHeavySection />
          <DataDisplayExpansionSection />
          <SectionChromeSection />
          <LayoutPatternsSection />
          <MobileSuperappSection />
          <ThemeDocsSection />
        </div>
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LocaleProvider>
      <AppFrame />
    </LocaleProvider>
  );
}
