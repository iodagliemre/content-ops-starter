/**
 * PAKET-P3-WEBFACTORY-DONUSUM G2. Kaynak: brief'in metni (Emre onaylı) + ICERIK-ENVANTERI. CTA'nın
 * sonundaki ok metin değil ikon (Hero CTA 2 ile aynı). Görseller P3-R1'de gerçek site ekranlarından
 * üretildi (docs/design/reference/webfactory-src-{1,2,3}.png): merkez Teknik Telsiz, sol src-2, sağ src-3.
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`; EN yeni çeviri (RAPOR-P5.md).
 */

export type WebFactoryContent = { eyebrow: string; heading: string; description: string; cta: string };
export const webFactoryLinks = {
    href: 'https://web.doveify.io',
    screens: {
        center: '/webfactory/screen-1.webp',
        left: '/webfactory/screen-2.webp',
        right: '/webfactory/screen-3.webp'
    }
} as const;
