/**
 * PAKET-P4-SAHIPLIK-FINAL G4. Metin brief'ten (Emre onaylı). CTA 1 nav'daki İletişim pili ile aynı
 * cal.com demo linki.
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`; EN yeni çeviri.
 */
import { CONTACT_PATH } from './locale';

export type FinalCtaContent = {
    heading: string;
    subline: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
};

export const CAL_COM = 'https://cal.com/emre-dagli-ffwxpr/doveify-demo';
export const EMAIL = { label: 'emre@doveify.io', href: 'mailto:emre@doveify.io' };

/** PAKET-P7 G3: CTA 2 is now a text link to the contact page (the e-mail link moved there). */
export const CONTACT_FORM = {
    tr: { label: 'İLETİŞİM FORMU →', href: CONTACT_PATH.tr },
    en: { label: 'CONTACT FORM →', href: CONTACT_PATH.en }
};
