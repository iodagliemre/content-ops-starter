/**
 * PAKET-P5-SEO-META-DIL G3. Sayfa başlığı, açıklama (≤155 karakter), OG görseli ve OG dil kodu.
 * TR title/description brief'ten; EN title brief'ten, EN description TR'nin karşılığı (yeni çeviri).
 * P5 ek: description "ürün" yerine "sistem" diliyle (TR metni Emre'den, aynen; 04.11.2026 ≤155'e kısaltıldı).
 */

export type MetaContent = {
    title: string;
    description: string;
    ogImage: string;
};
/** JSON-LD Organization alanları (G3). */
export const organization = {
    legalName: 'DOVEIFYIO AI SOLUTIONS LTD',
    name: 'Doveify',
    logo: '/favicon.svg',
    email: 'emre@doveify.io',
    sameAs: ['https://www.linkedin.com/company/doveify', 'https://instagram.com/doveify.io']
} as const;

/** `theme-color` / manifest rengi = `--color-v2-bg-base` (src/css/main.css). */
export const THEME_COLOR = '#050b14';
