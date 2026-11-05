/**
 * PAKET-P2-URUNLER-CAROUSEL G1. Kaynak: docs/content/ICERIK-ENVANTERI.md "V2 kart metinleri"
 * + brief'in kendi tablosu (metin uydurma yok). Bu dosya content/site.ts'in eski `products`
 * alanının yerine geçiyor (o alan artık kullanılmıyor — bkz. content/site.ts'teki not).
 *
 * Sıra CD kararıyla sabit: Broker's Brain ← CLINIC OS → OSGB Web → TurkISG AI, ilk aktif
 * Clinic OS (index 1). `external: true` olanlar target="_blank" rel="noopener" ile açılır.
 *
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`. TR aynen korundu. EN kart açıklamaları TR kart metninden
 * çevrildi (mevcut sitedeki uzun EN açıklamalar kart ölçüsüne sığmıyor) — liste RAPOR-P5.md'de.
 * P5 ek (Emre, 03.11.2026): Doveify SaaS satmaz; bunlar kuruma özel kurulan sistem örnekleri — sitede
 * "ürün" değil "sistem" (eyebrow, açıklama, kart CTA, ok etiketleri). Kimlikler (`#urunler`, `Product` tipi) aynı.
 */
import { CASE_PATH, type Locale } from './locale';

export type Product = {
    id: string;
    title: string;
    description: string;
    href: string;
    external: boolean;
    image: string;
};

export type ProductsContent = {
    section: { eyebrow: string; heading: string; description: string; cardCta: string };
    items: Product[];
    prevLabel: string;
    nextLabel: string;
};

// Clinic OS / Broker's Brain → kendi dilindeki vaka sayfası (P6 B1); OSGB Web / TurkISG AI harici kalır.
const LINKS: Record<string, { href: string | null; external: boolean; image: string }> = {
    'brokers-brain': { href: null, external: false, image: '/products/brokers-brain.webp' },
    'clinic-os': { href: null, external: false, image: '/products/clinic-os.webp' },
    'osgb-web': { href: 'https://osgb.doveify.io', external: true, image: '/products/osgb-web.webp' },
    'turkisg-ai': { href: 'https://turkisgai.doveify.io', external: true, image: '/products/turkisg-ai.webp' }
};

export const item = (locale: Locale, id: string, title: string, description: string): Product => {
    const link = LINKS[id];
    const href = link.href ?? CASE_PATH[locale][id as 'clinic-os' | 'brokers-brain'];
    return { id, title, description, href, external: link.external, image: link.image };
};
export const INITIAL_ACTIVE_INDEX = 1; // Clinic OS
