/**
 * PAKET-P4-SAHIPLIK-FINAL G5. Metin ve linkler brief'ten (Emre onaylı). Ünvan brief'teki haliyle
 * "DOVEIFYIO AI SOLUTIONS LTD." (content/site.ts'teki iki varyantlı not bununla kapandı).
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`. EN tagline, "Istanbul • London" ve "Privacy Policy" mevcut
 * siteden; kolon başlıkları ve bölüm linkleri yeni çeviri.
 */
import { CASE_PATH, CASE_SLUGS, type Locale } from './locale';
import { caseName } from './cases';

export type FooterLink = { label: string; href: string; external?: boolean };

export type FooterContent = {
    tagline: string;
    locations: string;
    columns: Array<{ heading: string; links: FooterLink[] }>;
    copyright: string;
    privacy: { label: string; href: string };
};

/** PAKET-P8 G1: six systems, each to its intro page (Emre's order). */
export const systemLinks = (locale: Locale): FooterLink[] => CASE_SLUGS.map((slug) => ({ label: caseName(locale, slug), href: CASE_PATH[locale][slug] }));

export const CONTACT_LINKS: FooterLink[] = [
    { label: 'emre@doveify.io', href: 'mailto:emre@doveify.io' },
    { label: '+90 542 805 08 15', href: 'tel:+905428050815' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/doveify', external: true },
    { label: 'Instagram', href: 'https://instagram.com/doveify.io', external: true }
];

export const COPYRIGHT = '© 2026 DOVEIFYIO AI SOLUTIONS LTD.';
