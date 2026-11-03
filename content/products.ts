/**
 * PAKET-P2-URUNLER-CAROUSEL G1. Kaynak: docs/content/ICERIK-ENVANTERI.md "V2 kart metinleri"
 * + brief'in kendi tablosu (metin uydurma yok). Bu dosya content/site.ts'in eski `products`
 * alanının yerine geçiyor (o alan artık kullanılmıyor — bkz. content/site.ts'teki not).
 *
 * Sıra CD kararıyla sabit: Broker's Brain ← CLINIC OS → OSGB Web → TurkISG AI, ilk aktif
 * Clinic OS (index 1). `external: true` olanlar target="_blank" rel="noopener" ile açılır.
 */

export const productsSection = {
    eyebrow: 'ÜRÜNLERİMİZ',
    heading: 'İşinizi geleceğe taşıyan dijital sistemler.',
    description: 'Sektörünüze özel geliştirdiğimiz yazılımlar ile operasyonlarınızı dijitalleştiriyor, verimliliğinizi artırıyoruz.',
    cardCta: 'DETAYLARI GÖR'
} as const;

export type Product = {
    id: string;
    title: string;
    description: string;
    href: string;
    external: boolean;
    image: string;
};

export const products: Product[] = [
    {
        id: 'brokers-brain',
        title: "BROKER'S BRAIN",
        description: 'Gayrimenkul profesyonelleri için akıllı takip ve analiz platformu.',
        href: '/brokers-brain/',
        external: false,
        image: '/products/brokers-brain.webp'
    },
    {
        id: 'clinic-os',
        title: 'CLINIC OS',
        description: 'Sağlık kurumları için bütünleşik yönetim sistemi.',
        href: '/clinic/',
        external: false,
        image: '/products/clinic-os.webp'
    },
    {
        id: 'osgb-web',
        title: 'OSGB WEB',
        description: 'İş sağlığı ve güvenliği süreçlerinizi dijitalleştiren platform.',
        href: 'https://osgb.doveify.io',
        external: true,
        image: '/products/osgb-web.webp'
    },
    {
        id: 'turkisg-ai',
        title: 'TURKISG AI',
        description: 'İSG profesyonelleri için yapay zekâ asistanı.',
        href: 'https://turkisgai.doveify.io',
        external: true,
        image: '/products/turkisg-ai.webp'
        // TR metin Emre onaylı (05.09.2026) — V2 için ayrı bir metin yoktu, brief'in G1
        // önerisi onaylanarak kesinleşti.
    }
];

export const INITIAL_ACTIVE_INDEX = 1; // Clinic OS
