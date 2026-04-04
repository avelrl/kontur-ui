import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import App from "../App";
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
});

