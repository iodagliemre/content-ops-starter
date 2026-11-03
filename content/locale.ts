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
