import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
import { LOCALE_STORAGE_KEY } from "../lib/locale";
import {
  THEME_STORAGE_KEY,
  applyThemeToRoot,
  readStoredTheme,
  resolveTheme,
  type ThemeMode,
} from "../lib/theme";

function installMatchMedia(initialMatches = false) {
  let matches = initialMatches;
  const listeners = new Set<(event: MediaQueryListEvent) => void>();

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: vi.fn().mockImplementation((query: string) => ({
      matches,
      media: query,
      onchange: null,
      addEventListener: (_event: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners.add(listener);
      },
      removeEventListener: (_event: string, listener: (event: MediaQueryListEvent) => void) => {
        listeners.delete(listener);
      },
      dispatchEvent: () => false,
    })),
  });

  return {
    setMatches(nextMatches: boolean) {
      matches = nextMatches;
      const event = { matches, media: "(prefers-color-scheme: dark)" } as MediaQueryListEvent;
      listeners.forEach((listener) => listener(event));
    },
  };
}

describe("theme helpers", () => {
  it("resolves system mode from media preference", () => {
    expect(resolveTheme("system", true)).toBe("dark");
    expect(resolveTheme("system", false)).toBe("light");
    expect(resolveTheme("dark", false)).toBe("dark");
  });

  it("falls back to system when localStorage has an invalid value", () => {
    window.localStorage.setItem(THEME_STORAGE_KEY, "invalid-mode");
    expect(readStoredTheme()).toBe("system");
  });

  it("applies the resolved theme to the root element", () => {
    const result = applyThemeToRoot(document.documentElement, "system", true);
    expect(result).toBe("dark");
    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(document.documentElement.dataset.themeMode).toBe("system");
    expect(document.documentElement.style.colorScheme).toBe("dark");
  });
});

describe("theme switcher", () => {
  it("stores selected locale and updates html lang", async () => {
    installMatchMedia(false);
    const user = userEvent.setup();

    render(<App />);

    expect(document.documentElement.lang).toBe("ru");
    expect(screen.getByText("Русский")).toBeInTheDocument();

    const englishButton = screen.getByRole("button", { name: "English" });
    await user.click(englishButton);

    expect(window.localStorage.getItem(LOCALE_STORAGE_KEY)).toBe("en");
    expect(document.documentElement.lang).toBe("en");
    expect(screen.getByRole("heading", { name: "Operational Log" })).toBeInTheDocument();
  });

  it("restores english locale from storage on first render", () => {
    installMatchMedia(false);
    window.localStorage.setItem(LOCALE_STORAGE_KEY, "en");

    render(<App />);

    expect(document.documentElement.lang).toBe("en");
    expect(screen.getByRole("heading", { name: "Contour Interface Theme" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pocket Participation Contour" })).toBeInTheDocument();
  });

  it("stores manual selection and reacts to system theme changes", async () => {
    const media = installMatchMedia(false);
    const user = userEvent.setup();

    render(<App />);

    const darkModeButton = screen.getByRole("button", { name: "Тёмная тема" });
    await user.click(darkModeButton);

    expect(document.documentElement.dataset.theme).toBe("dark");
    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBe("dark");

    const systemModeButton = screen.getByRole("button", { name: "Системная тема" });
    await user.click(systemModeButton);

    expect(window.localStorage.getItem(THEME_STORAGE_KEY)).toBeNull();
    expect(document.documentElement.dataset.themeMode).toBe("system");

    media.setMatches(true);
    expect(document.documentElement.dataset.theme).toBe("dark");
  });

  it("keeps the data table available as a primary pattern", () => {
    installMatchMedia(false);
    render(<App />);

    expect(screen.getByRole("table", { name: /архивный реестр/i })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Оперативный журнал" })).toBeInTheDocument();
  });

  it("keeps key navigation and registry surfaces stable in english", async () => {
    installMatchMedia(false);
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("button", { name: "English" }));

    expect(screen.getByRole("navigation", { name: "Primary bench sections" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Operational module registry" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "How to extend the theme and preserve its character" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Pocket Participation Contour" })).toBeInTheDocument();
  });

  it("switches component library tabs and toggles accordion items", async () => {
    installMatchMedia(false);
    const user = userEvent.setup();

    render(<App />);

    await user.click(screen.getByRole("tab", { name: /формы/i }));
    expect(screen.getByText("Сопроводительная запись")).toBeInTheDocument();
    const reserveSync = screen.getByRole("checkbox", { name: /поддерживать резервную синхронизацию/i });
    expect(reserveSync).toBeChecked();
    await user.click(reserveSync);
    expect(reserveSync).not.toBeChecked();

    const labelsAccordion = screen.getByRole("button", { name: /индексные подписи/i });
    await user.click(labelsAccordion);

    expect(labelsAccordion).toHaveAttribute("aria-expanded", "true");
    expect(screen.getByText(/каждый модуль получает короткую моноширинную подпись/i)).toBeInTheDocument();
  });

  it("renders reusable icon buttons, segmented controls and full layout screens", async () => {
    installMatchMedia(false);
    const user = userEvent.setup();

    render(<App />);

    expect(screen.getByRole("button", { name: "Открыть архивный модуль" })).toBeInTheDocument();

    const reserveMode = screen.getByRole("radio", { name: /резервный/i });
    await user.click(reserveMode);
    expect(reserveMode).toHaveAttribute("aria-checked", "true");

    expect(screen.getByRole("heading", { name: "Командный пункт" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Архив / документы" })).toBeInTheDocument();
    expect(screen.getByRole("heading", { name: "Параметры системы" })).toBeInTheDocument();
  });
});
