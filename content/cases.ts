/**
 * PAKET-P6 B2/B3. Vaka sayfası (kurduğumuz sistem) içerik tipi. Metinler content/tr/cases/*.ts ve
 * content/en/cases/*.ts'te; kaynak: eski /clinic ve /brokers-brain sayfaları (_legacy/content/pages/) +
 * ICERIK-ENVANTERI. "Fiyat / deneme / kayıt" ifadeleri çıkarıldı, "ürün" yerine "sistem".
 * PAKET-P7 G6: P6 placeholder'ları Emre'nin stack ve "Ne değişti" bilgisiyle kapatıldı; sabitler kaldırıldı.
 *
 * PAKET-P8 G2: tanıtım sayfası şablonu. Yeni alanlar: canlı uygulama linki (hero CTA 1), durum etiketi,
 * gerçek ekranlar, rakamlar (yalnızca kaynağı olan sistemde), SSS (FAQPage JSON-LD) ve ilgili Bilgi
 * Bankası yazıları (iç link ağı, G6). Sahiplik kutusu ve bölüm başlıkları her sayfada aynı: CASE_UI.
 */
import type { CaseSlug, Locale, Localized } from './locale';
import type { FinalCtaContent } from './finalCta';

export type CaseImage = { src: string; width: number; height: number; srcSet?: string; alt?: string };

export type CaseContent = {
    slug: CaseSlug;
    eyebrow: string;
    name: string;
    definition: string;
    /** PAKET-P8: CANLI / PROTOTİP etiketi (hero, eyebrow yanında). */
    status: 'live' | 'prototype';
    /** PAKET-P8 G2: hero CTA 1 `SİSTEMİ İNCELE →` (yeni sekme). */
    liveUrl: string;
    /** PAKET-P8 3.6: TurkİSG AI'nin ek text linki (`ÜCRETSİZ DENE →`). */
    extraLink?: { label: string; href: string };
    /** Hero, 3:2. PAKET-P7 G5 / P8 G7: public/systems/<slug>/hero.webp. */
    image: CaseImage;
    meta: { title: string; description: string; ogImage: string };
    forWhom: { title: string; body: string };
    problem: { title: string; items: string[] };
    built: { title: string; items: Array<{ title: string; description?: string }> };
    /** PAKET-P8 G2 #5: 2–4 gerçek ekran (3:2, 1200px). */
    screens: CaseImage[];
    /** PAKET-P8 G2 #6: yalnızca kaynağı olan sistemde (Şirket Tanıtım PDF). */
    stats?: Array<{ value: string; label: string }>;
    tech: { title: string; items: string[] };
    /** P7 "Ne değişti" (Clinic OS, Broker's Brain): korunuyor, teknolojinin altında. */
    results?: { title: string; items: string[] };
    faq: Array<{ q: string; a: string }>;
    /** PAKET-P8 G6: ilgili Bilgi Bankası yazıları (slug). */
    articles: string[];
    cta: FinalCtaContent;
};

export type CaseUi = {
    status: Record<CaseContent['status'], string>;
    live: string;
    similar: string;
    screens: string;
    stats: string;
    ownership: { title: string; body: string };
    faq: string;
    related: string;
    ownSoftware: string;
    systemsLabel: string;
};

/** Sahiplik kutusu metni Emlak broşüründen (brief G2 #8); EN çeviri. */
export const CASE_UI: Localized<CaseUi> = {
    tr: {
        status: { live: 'CANLI', prototype: 'PROTOTİP' },
        live: 'SİSTEMİ İNCELE →',
        similar: 'BENZERİNİ İSTEYİN →',
        screens: 'Ekranlar',
        stats: 'Rakamlar',
        ownership: { title: 'Kiralamayın, sahip olun.', body: 'Sistem kendi logonuz ve kendi adresinizle işletmenize kurulur. Kod, veri ve altyapı sizindir.' },
        faq: 'Sık sorulan sorular',
        related: 'İlgili okumalar',
        ownSoftware: 'Kendi yazılımınızı yaptırın →',
        systemsLabel: 'Kurduğumuz sistemler'
    },
    en: {
        status: { live: 'LIVE', prototype: 'PROTOTYPE' },
        live: 'VIEW THE SYSTEM →',
        similar: 'ASK FOR ONE LIKE IT →',
        screens: 'Screens',
        stats: 'In numbers',
        ownership: { title: "Don't rent. Own.", body: 'The system is installed for your business under your own logo and your own address. The code, the data and the infrastructure are yours.' },
        faq: 'Frequently asked questions',
        related: 'Related reading',
        ownSoftware: 'Get your own software built →',
        systemsLabel: 'Systems we built'
    }
};

/** Kart ve footer'daki kısa ad (sayfa H1'i ile aynı). */
export const CASE_NAMES: Record<CaseSlug, string> = {
    'clinic-os': 'Clinic OS',
    'brokers-brain': "Broker's Brain",
    'emlak-ofis-paneli': 'Emlak Ofis Paneli',
    'osgb-yonetim': 'OSGB Yönetim',
    'kuru-temizleme': 'Kuru Temizleme Paneli',
    'turkisg-ai': 'TurkİSG AI'
};
export const CASE_NAMES_EN: Record<CaseSlug, string> = {
    ...CASE_NAMES,
    'emlak-ofis-paneli': 'Real Estate Office Panel',
    'osgb-yonetim': 'OSGB Management',
    'kuru-temizleme': 'Dry Cleaning Panel'
};
export const caseName = (locale: Locale, slug: CaseSlug) => (locale === 'tr' ? CASE_NAMES : CASE_NAMES_EN)[slug];

/** public/systems/<slug>/ dosyaları (scripts: RAPOR-P8 "Görseller"). */
export const sysImg = (slug: CaseSlug, file: string, width: number, height: number, alt = ''): CaseImage => ({
    src: `/systems/${slug}/${file}`,
    width,
    height,
    alt
});
