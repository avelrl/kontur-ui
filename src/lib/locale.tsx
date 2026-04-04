import {
  createContext,
  startTransition,
  useContext,
  useEffect,
  useEffectEvent,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { localeDictionaries, type Locale, type LocaleDictionary } from "../data/locale";

type LocaleContextValue = {
  locale: Locale;
  setLocale: (locale: Locale) => void;
  strings: LocaleDictionary;
};

const LOCALE_STORAGE_KEY = "kontur-locale";

const LocaleContext = createContext<LocaleContextValue | null>(null);

function isLocale(value: string | null): value is Locale {
  return value === "ru" || value === "en";
}

function readStoredLocale(): Locale {
  if (typeof window === "undefined") {
    return "ru";
  }

  try {
    const storedValue = window.localStorage.getItem(LOCALE_STORAGE_KEY);
    return isLocale(storedValue) ? storedValue : "ru";
  } catch {
    return "ru";
  }
}

function persistLocale(locale: Locale) {
  if (typeof window === "undefined") {
    return;
  }

  try {
    window.localStorage.setItem(LOCALE_STORAGE_KEY, locale);
  } catch {}
}

function applyLocaleToRoot(locale: Locale) {
  if (typeof document === "undefined") {
    return;
  }

  document.documentElement.lang = locale;
}

export function LocaleProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>(() => {
    const initialLocale = readStoredLocale();
    applyLocaleToRoot(initialLocale);
    return initialLocale;
  });

  const syncLocale = useEffectEvent((nextLocale: Locale) => {
    applyLocaleToRoot(nextLocale);
  });

  useEffect(() => {
    syncLocale(locale);
  }, [locale, syncLocale]);

  const setLocale = (nextLocale: Locale) => {
    persistLocale(nextLocale);
    startTransition(() => {
      setLocaleState(nextLocale);
    });
  };

  const value = useMemo<LocaleContextValue>(
    () => ({
      locale,
      setLocale,
      strings: localeDictionaries[locale],
    }),
    [locale],
  );

  return <LocaleContext.Provider value={value}>{children}</LocaleContext.Provider>;
}

export function useLocale() {
  const context = useContext(LocaleContext);

  if (!context) {
    throw new Error("useLocale must be used within LocaleProvider.");
  }

  return context;
}

export { LOCALE_STORAGE_KEY };
