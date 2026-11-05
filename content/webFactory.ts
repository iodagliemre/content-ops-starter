/**
 * PAKET-P3-WEBFACTORY-DONUSUM G2. Kaynak: brief'in metni (Emre onaylı) + ICERIK-ENVANTERI. CTA'nın
 * sonundaki ok metin değil ikon (Hero CTA 2 ile aynı). Görseller P3-R1'de gerçek site ekranlarından
 * üretildi (docs/design/reference/webfactory-src-{1,2,3}.png): merkez Teknik Telsiz, sol src-2, sağ src-3.
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`; EN yeni çeviri (RAPOR-P5.md).
 */

export type WebFactoryContent = {
    eyebrow: string;
    heading: string;
    description: string;
    cta: string;
    /** PAKET-P7 G7: slider controls (new microcopy, RAPOR-P7.md). */
    prevLabel: string;
    nextLabel: string;
    /** Appended to the client name on the centre screen's link. */
    openSuffix: string;
};

/**
 * PAKET-P7 G7 (Emre kararı 05.11.2026): the three screens are now a slider — order = auto-play order
 * (1 → 2 → 3); the next one sits on the right. Client sites from content/work.ts (P4, Emre onaylı).
 */
export const webFactoryLinks = {
    href: 'https://web.doveify.io',
    screens: [
        { src: '/webfactory/screen-1.webp', name: 'Teknik Telsiz', href: 'https://tekniktelsiz.com.tr/' },
        { src: '/webfactory/screen-2.webp', name: 'Dr. Serap Korkmaz', href: 'https://drserapkorkmaz.com/' },
        { src: '/webfactory/screen-3.webp', name: 'Dry Clean Online', href: 'https://drycleanonline.com/' }
    ]
} as const;
