import { HeroSection } from "./sections/HeroSection";
import { DataHeavySection } from "./sections/DataHeavySection";
import { TopStatusBar } from "./components/chrome/TopStatusBar";
import { useThemeMode } from "./lib/theme";

export default function App() {
  const { mode, resolvedTheme, setMode } = useThemeMode();

  return (
    <div className="min-h-screen bg-canvas text-text-primary">
      <a
        href="#overview"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-control focus:bg-elevated focus:px-4 focus:py-3 focus:text-text-primary"
      >
        Перейти к основному содержимому
      </a>
      <TopStatusBar mode={mode} resolvedTheme={resolvedTheme} onModeChange={setMode} />
      <main className="worksurface mx-auto max-w-[1560px] px-3 py-4 md:px-6 md:py-6 lg:px-8">
        <div className="space-y-4">
          <HeroSection />
          <DataHeavySection />
        </div>
      </main>
    </div>
  );
}

