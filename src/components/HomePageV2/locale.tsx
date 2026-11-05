import { createContext, useContext, type ReactNode } from 'react';
import { DEFAULT_LOCALE, LOCALE_PATH, type Locale, type Localized } from '../../../content/locale';
import type { Dict } from '../../../content/dict';

/**
 * PAKET-P5-SEO-META-DIL G2. The page's language, set once by the page from its route (`/` = tr,
 * `/en/` = en). No i18n library.
 *
 * PAKET-P6 A1: the provider also carries the page's dictionary (`useDict()`), which the page passes in
 * from getStaticProps — so the client bundle no longer contains both languages' copy. `paths` is the
 * page's URL in each language (homepage by default; case pages pass their own) for hreflang and the
 * TR | EN switch.
 */
type LocaleValue = { locale: Locale; dict: Dict | null; paths: Localized<string> };

const LocaleContext = createContext<LocaleValue>({ locale: DEFAULT_LOCALE, dict: null, paths: LOCALE_PATH });

export function LocaleProvider({
    locale,
    dict,
    paths = LOCALE_PATH,
    children
}: {
    locale: Locale;
    dict: Dict;
    paths?: Localized<string>;
    children: ReactNode;
}) {
    return <LocaleContext.Provider value={{ locale, dict, paths }}>{children}</LocaleContext.Provider>;
}

export function useLocale(): Locale {
    return useContext(LocaleContext).locale;
}

export function useDict(): Dict {
    const { dict } = useContext(LocaleContext);
    if (!dict) throw new Error('useDict() outside LocaleProvider');
    return dict;
}

export function usePaths(): Localized<string> {
    return useContext(LocaleContext).paths;
}
