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
export type CaseSlug = 'clinic-os' | 'brokers-brain';
export const CASE_SLUGS: CaseSlug[] = ['clinic-os', 'brokers-brain'];
export const CASE_PATH: Localized<Record<CaseSlug, string>> = {
    tr: { 'clinic-os': '/sistemler/clinic-os/', 'brokers-brain': '/sistemler/brokers-brain/' },
    en: { 'clinic-os': '/en/systems/clinic-os/', 'brokers-brain': '/en/systems/brokers-brain/' }
};
