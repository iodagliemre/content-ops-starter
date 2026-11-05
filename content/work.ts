/**
 * PAKET-P4-SAHIPLIK-FINAL G3 (CD #7). Logo bandı: 6 gerçek proje (Emre, 03.11.2026). Kaynak logolar
 * docs/design/reference/logos/; işlenmiş halleri public/logos/ (64px yükseklik WebP, SVG olduğu gibi).
 * width/height = dosyanın kendi boyutu (CLS için en-boy oranı); gösterim yüksekliği CSS'te.
 */

export type WorkContent = { eyebrow: string; heading: string; cta: string };

/** PAKET-P5-SEO-META-DIL G2: `{ tr, en }`; EN yeni çeviri. Logolar ve linkler dilden bağımsız. */
export const WORK_HREF = 'https://web.doveify.io';

export type WorkLogo = {
    name: string;
    href: string;
    src: string;
    width: number;
    height: number;
    /** Teknik Telsiz's mark is nearly square, so it displays at 32px instead of 28px. */
    tall?: boolean;
};

export const workLogos: WorkLogo[] = [
    { name: 'Dr. Serap Korkmaz', href: 'https://drserapkorkmaz.com/', src: '/logos/dr-serap-korkmaz.svg', width: 1944, height: 888 },
    { name: 'Dry Clean Online', href: 'https://drycleanonline.com/', src: '/logos/dry-clean-online.webp', width: 183, height: 64 },
    { name: 'Bizim OSGB', href: 'https://bizimosgb.netlify.app/', src: '/logos/bizim-osgb.webp', width: 318, height: 64 },
    { name: 'Ömer Mutfak', href: 'https://omermutfak.com/', src: '/logos/omer-mutfak.webp', width: 200, height: 64 },
    { name: 'Teknik Telsiz', href: 'https://tekniktelsiz.com.tr/', src: '/logos/teknik-telsiz.webp', width: 98, height: 64, tall: true },
    { name: 'Ottomè Döner', href: 'https://ottome.com.tr/', src: '/logos/ottome-doner.webp', width: 195, height: 64 }
];
