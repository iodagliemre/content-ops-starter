import { createContext, useContext, type ReactNode } from 'react';
import { DEFAULT_LOCALE, type Locale } from '../../../content/locale';

/**
 * PAKET-P5-SEO-META-DIL G2. The page's language, set once by HomePageV2 (or the 404 page) from the
 * route (`/` = tr, `/en/` = en). Components read it with `useLocale()` and pick from the `{ tr, en }`
 * dictionaries in content/. No i18n library.
 */
const LocaleContext = createContext<Locale>(DEFAULT_LOCALE);

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
    return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
    return useContext(LocaleContext);
}
