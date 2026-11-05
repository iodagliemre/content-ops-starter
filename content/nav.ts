/**
 * PAKET-P5-SEO-META-DIL G2. Nav metni (TR: content/site.ts `nav` alanından taşındı, aynen) + nav'daki
 * erişilebilirlik etiketleri. EN: "Contact" mevcut siteden, diğerleri yeni çeviri (RAPOR-P5).
 */

export type NavContent = {
    /** Order matches the section ids in Nav.tsx. */
    primary: string[];
    cta: string;
    navLabel: string;
    openMenu: string;
    closeMenu: string;
    languageLabel: string;
};
