/**
 * PAKET-P5-SEO-META-DIL G2. TR ana dil (`/`), EN ikinci dil (`/en/`). i18n kütüphanesi yok: her içerik
 * dosyası `{ tr, en }` sözlüğü export eder, bileşenler `useLocale()` ile seçer.
 */

export type Locale = 'tr' | 'en';

export const LOCALES: Locale[] = ['tr', 'en'];
export const DEFAULT_LOCALE: Locale = 'tr';

export type Localized<T> = Record<Locale, T>;

/** Site kök URL'si ve her dilin yolu (next.config `trailingSlash: true` → `/en/`). */
export const SITE_URL = 'https://doveify.io';
export const LOCALE_PATH: Localized<string> = { tr: '/', en: '/en/' };

/** Open Graph dil kodu (dilden bağımsız sabit; P6'da meta sözlüğünden buraya alındı). */
export const OG_LOCALE: Localized<string> = { tr: 'tr_TR', en: 'en_GB' };

/** PAKET-P6 B1: vaka sayfaları (kurduğumuz sistemler) ve dillere göre yolları. */
/** PAKET-P7 G1/G2: contact and privacy pages. */
export const CONTACT_PATH: Localized<string> = { tr: '/iletisim/', en: '/en/contact/' };
export const PRIVACY_PATH: Localized<string> = { tr: '/gizlilik/', en: '/en/privacy/' };

/**
 * PAKET-P8 G1: six systems, in Emre's order (homepage carousel, footer, sitemap). Each has an intro page;
 * the live app is linked from that page's hero, never from the card.
 */
export type CaseSlug = 'clinic-os' | 'brokers-brain' | 'emlak-ofis-paneli' | 'osgb-yonetim' | 'kuru-temizleme' | 'turkisg-ai';
export const CASE_SLUGS: CaseSlug[] = ['clinic-os', 'brokers-brain', 'emlak-ofis-paneli', 'osgb-yonetim', 'kuru-temizleme', 'turkisg-ai'];
const EN_CASE_SLUG: Record<CaseSlug, string> = {
    'clinic-os': 'clinic-os',
    'brokers-brain': 'brokers-brain',
    'emlak-ofis-paneli': 'real-estate-office-panel',
    'osgb-yonetim': 'osgb-management',
    'kuru-temizleme': 'dry-cleaning-panel',
    'turkisg-ai': 'turkisg-ai'
};
export const CASE_PATH: Localized<Record<CaseSlug, string>> = {
    tr: Object.fromEntries(CASE_SLUGS.map((s) => [s, `/sistemler/${s}/`])) as Record<CaseSlug, string>,
    en: Object.fromEntries(CASE_SLUGS.map((s) => [s, `/en/systems/${EN_CASE_SLUG[s]}/`])) as Record<CaseSlug, string>
};

/** PAKET-P8 G4: "yazılım yaptırma" solution page (not in the nav; footer + homepage text link). */
export const OWN_SOFTWARE_PATH: Localized<string> = { tr: '/kendi-yaziliminiz/', en: '/en/your-own-software/' };

/** PAKET-P8 G5: Bilgi Bankası list and article URLs (article slugs are the same in both languages). */
export const KB_PATH: Localized<string> = { tr: '/bilgi-bankasi/', en: '/en/knowledge-base/' };
export const kbArticlePath = (locale: Locale, slug: string) => `${KB_PATH[locale]}${slug}/`;

/** Contact page with the "istenen çalışma" preselected for a system (`?calisma=<slug>`). */
export const contactForWork = (locale: Locale, slug: string) => `${CONTACT_PATH[locale]}?calisma=${slug}`;
