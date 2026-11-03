/**
 * PAKET-P4-SAHIPLIK-FINAL G4. Metin brief'ten (Emre onaylı). CTA 1 nav'daki İletişim pili ile aynı
 * cal.com demo linki.
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`; EN yeni çeviri.
 */
import type { Localized } from './locale';

type FinalCtaContent = {
    heading: string;
    subline: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
};

const CAL_COM = 'https://cal.com/emre-dagli-ffwxpr/doveify-demo';
const EMAIL = { label: 'emre@doveify.io', href: 'mailto:emre@doveify.io' };

export const finalCtaContent: Localized<FinalCtaContent> = {
    tr: {
        heading: 'Fikrini gerçeğe dönüştürelim.',
        subline: 'Projenizi konuşalım, birlikte büyütelim.',
        primary: { label: 'İLETİŞİME GEÇ', href: CAL_COM },
        secondary: EMAIL
    },
    en: {
        heading: "Let's turn your idea into reality.",
        subline: "Let's talk about your project and grow it together.",
        primary: { label: 'GET IN TOUCH', href: CAL_COM },
        secondary: EMAIL
    }
};
