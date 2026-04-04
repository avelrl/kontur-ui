import { startTransition, useEffect, useEffectEvent, useState } from "react";

export type ThemeMode = "light" | "dark" | "system";
export type ResolvedTheme = "light" | "dark";

export const THEME_STORAGE_KEY = "kontur-theme";
export const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

export function isThemeMode(value: string | null): value is ThemeMode {
  return value === "light" || value === "dark" || value === "system";
}

export function getSystemTheme(matchesDark: boolean): ResolvedTheme {
  return matchesDark ? "dark" : "light";
}

export function resolveTheme(mode: ThemeMode, matchesDark: boolean): ResolvedTheme {
  if (mode === "system") {
    return getSystemTheme(matchesDark);
  }

  return mode;
}

export function getThemeMedia(): MediaQueryList | null {
  if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
    return null;
  }

  return window.matchMedia(SYSTEM_THEME_QUERY);
}

export function readStoredTheme(): ThemeMode {
  if (typeof window === "undefined") {
    return "system";
  }

  try {
    const storedValue = window.localStorage.getItem(THEME_STORAGE_KEY);
    return isThemeMode(storedValue) ? storedValue : "system";
  } catch {
    return "system";
  }
}

export function persistThemeMode(mode: ThemeMode) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    if (mode === "system") {
      window.localStorage.removeItem(THEME_STORAGE_KEY);
      return;
    }

    window.localStorage.setItem(THEME_STORAGE_KEY, mode);
  } catch {}
}

export function applyThemeToRoot(
  root: HTMLElement,
  mode: ThemeMode,
  matchesDark: boolean,
): ResolvedTheme {
  const resolvedTheme = resolveTheme(mode, matchesDark);
  root.dataset.themeMode = mode;
  root.dataset.theme = resolvedTheme;
  root.style.colorScheme = resolvedTheme;
  return resolvedTheme;
}

export function applyThemeMode(mode: ThemeMode): ResolvedTheme {
  if (typeof document === "undefined") {
    return "light";
  }

  const media = getThemeMedia();
  return applyThemeToRoot(document.documentElement, mode, media?.matches ?? false);
}

export function useThemeMode() {
  const [mode, setModeState] = useState<ThemeMode>(() => readStoredTheme());
  const [resolvedTheme, setResolvedTheme] = useState<ResolvedTheme>(() => {
    if (typeof document === "undefined") {
      return "light";
    }

    const currentMode = readStoredTheme();
    return applyThemeMode(currentMode);
  });

  const syncTheme = useEffectEvent((nextMode: ThemeMode) => {
    const nextResolvedTheme = applyThemeMode(nextMode);
    startTransition(() => {
      setResolvedTheme(nextResolvedTheme);
    });
  });

  useEffect(() => {
    syncTheme(mode);

    const media = getThemeMedia();
    if (!media) {
      return;
    }

    const onThemeMediaChange = () => {
      if (mode === "system") {
        syncTheme(mode);
      }
    };

    media.addEventListener("change", onThemeMediaChange);
    return () => {
      media.removeEventListener("change", onThemeMediaChange);
    };
  }, [mode]);

  const setMode = (nextMode: ThemeMode) => {
    persistThemeMode(nextMode);
    setModeState(nextMode);
  };

  return { mode, resolvedTheme, setMode };
}
