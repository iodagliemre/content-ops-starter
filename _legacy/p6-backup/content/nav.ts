/**
 * PAKET-P5-SEO-META-DIL G2. Nav metni (TR: content/site.ts `nav` alanından taşındı, aynen) + nav'daki
 * erişilebilirlik etiketleri. EN: "Contact" mevcut siteden, diğerleri yeni çeviri (RAPOR-P5).
 */
import type { Localized } from './locale';

export type NavContent = {
    /** Order matches the section ids in Nav.tsx. */
    primary: string[];
    cta: string;
    navLabel: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
};

export const navContent: Localized<NavContent> = {
    tr: {
        primary: ['Sistemler', 'Web Factory', 'Dijital Dönüşüm', 'Sahiplik', 'Çalışmalar'],
        cta: 'İletişim',
        navLabel: 'Ana menü',
        openMenu: 'Menüyü aç',
        closeMenu: 'Menüyü kapat',
        languageLabel: 'Dil'
    },
    en: {
        primary: ['Systems', 'Web Factory', 'Digital Transformation', 'Ownership', 'Work'],
        cta: 'Contact',
        navLabel: 'Main menu',
        openMenu: 'Open menu',
        closeMenu: 'Close menu',
        languageLabel: 'Language'
    }
};
