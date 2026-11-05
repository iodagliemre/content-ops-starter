/**
 * PAKET-P5-SEO-META-DIL G2. Hero metni. TR content/site.ts `hero` alanından aynen taşındı; EN brief'ten.
 */
import type { Localized } from './locale';

export type HeroContent = {
    h1Line1: string;
    h1Line2: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
};

export const heroContent: Localized<HeroContent> = {
    tr: {
        h1Line1: 'DİJİTAL ZEKÂ.',
        h1Line2: 'GERÇEK ETKİ.',
        subtitle: 'Doveify, işletmelerin dijital geleceğini tasarlar, geliştirir ve büyütür.',
        ctaPrimary: 'SİSTEMLERİ KEŞFET',
        ctaSecondary: "WEB FACTORY'Yİ İNCELE"
    },
    en: {
        h1Line1: 'DIGITAL INTELLIGENCE.',
        h1Line2: 'REAL IMPACT.',
        subtitle: 'Doveify designs, builds and grows the digital future of businesses.',
        ctaPrimary: 'EXPLORE OUR SYSTEMS',
        ctaSecondary: 'SEE WEB FACTORY'
    }
};
