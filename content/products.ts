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
import { CASE_PATH, type CaseSlug, type Locale } from './locale';

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

// PAKET-P8 G1: six cards, every card CTA goes to the system's own intro page (no external link on a card;
// the live app is linked from the intro page). Order (Emre): Clinic OS → Broker's Brain → Emlak Ofis Paneli →
// OSGB Yönetim → Kuru Temizleme → TurkİSG AI. First state: Clinic OS in the centre (index 0, left arrow disabled).
const IMAGES: Record<CaseSlug, string> = {
    'clinic-os': '/products/clinic-os.webp',
    'brokers-brain': '/products/brokers-brain.webp',
    'emlak-ofis-paneli': '/products/emlak-ofis-paneli.webp',
    'osgb-yonetim': '/products/osgb-web.webp',
    'kuru-temizleme': '/products/kuru-temizleme.webp',
    'turkisg-ai': '/products/turkisg-ai.webp'
};

export const item = (locale: Locale, id: CaseSlug, title: string, description: string): Product => ({
    id,
    title,
    description,
    href: CASE_PATH[locale][id],
    external: false,
    image: IMAGES[id]
});
export const INITIAL_ACTIVE_INDEX = 0; // Clinic OS (P8 G1)
