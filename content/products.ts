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
import type { Localized } from './locale';

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

const LINKS = {
    'brokers-brain': { href: '/brokers-brain/', external: false, image: '/products/brokers-brain.webp' },
    'clinic-os': { href: '/clinic/', external: false, image: '/products/clinic-os.webp' },
    'osgb-web': { href: 'https://osgb.doveify.io', external: true, image: '/products/osgb-web.webp' },
    'turkisg-ai': { href: 'https://turkisgai.doveify.io', external: true, image: '/products/turkisg-ai.webp' }
} as const;

const item = (id: keyof typeof LINKS, title: string, description: string): Product => ({ id, title, description, ...LINKS[id] });

export const productsContent: Localized<ProductsContent> = {
    tr: {
        section: {
            eyebrow: 'KURDUĞUMUZ SİSTEMLER',
            heading: 'İşinizi geleceğe taşıyan dijital sistemler.',
            description: 'Sektöre özel kurduğumuz sistemler: her biri bir işletme için sıfırdan tasarlandı, sahipliği onda.',
            cardCta: 'SİSTEMİ İNCELE'
        },
        items: [
            item('brokers-brain', "BROKER'S BRAIN", 'Gayrimenkul profesyonelleri için akıllı takip ve analiz platformu.'),
            item('clinic-os', 'CLINIC OS', 'Sağlık kurumları için bütünleşik yönetim sistemi.'),
            item('osgb-web', 'OSGB WEB', 'İş sağlığı ve güvenliği süreçlerinizi dijitalleştiren platform.'),
            // TR metin Emre onaylı (05.09.2026) — V2 için ayrı bir metin yoktu, brief'in G1
            // önerisi onaylanarak kesinleşti.
            item('turkisg-ai', 'TURKISG AI', 'İSG profesyonelleri için yapay zekâ asistanı.')
        ],
        prevLabel: 'Önceki sistem',
        nextLabel: 'Sonraki sistem'
    },
    en: {
        section: {
            eyebrow: 'SYSTEMS WE BUILT',
            heading: 'Digital systems that move your business forward.',
            description: 'Industry-specific systems we built: each one designed from scratch for a single business, and owned by it.',
            cardCta: 'VIEW SYSTEM'
        },
        items: [
            item('brokers-brain', "BROKER'S BRAIN", 'Smart tracking and analytics platform for real estate professionals.'),
            item('clinic-os', 'CLINIC OS', 'Integrated management system for healthcare organizations.'),
            item('osgb-web', 'OSGB WEB', 'The platform that digitizes your occupational health and safety work.'),
            item('turkisg-ai', 'TURKISG AI', 'AI assistant for occupational health and safety professionals.')
        ],
        prevLabel: 'Previous system',
        nextLabel: 'Next system'
    }
};

export const INITIAL_ACTIVE_INDEX = 1; // Clinic OS
