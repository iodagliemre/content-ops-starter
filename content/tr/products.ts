// PAKET-P6 A1: TR sözlüğü (products). Tip ve dilden bağımsız sabitler: content/products.ts.
import type { ProductsContent } from '../products';
import { item } from '../products';

export const products: ProductsContent = {
    section: {
        eyebrow: 'KURDUĞUMUZ SİSTEMLER',
        heading: 'İşinizi geleceğe taşıyan dijital sistemler.',
        description: 'Sektöre özel kurduğumuz sistemler: her biri bir işletme için sıfırdan tasarlandı, sahipliği onda.',
        cardCta: 'SİSTEMİ İNCELE'
    },
    items: [
        item('tr', 'brokers-brain', "BROKER'S BRAIN", 'Gayrimenkul profesyonelleri için akıllı takip ve analiz platformu.'),
        item('tr', 'clinic-os', 'CLINIC OS', 'Sağlık kurumları için bütünleşik yönetim sistemi.'),
        item('tr', 'osgb-web', 'OSGB WEB', 'İş sağlığı ve güvenliği süreçlerinizi dijitalleştiren platform.'),
        // TR metin Emre onaylı (05.09.2026) — V2 için ayrı bir metin yoktu, brief'in G1
        // önerisi onaylanarak kesinleşti.
        item('tr', 'turkisg-ai', 'TURKISG AI', 'İSG profesyonelleri için yapay zekâ asistanı.')
    ],
    prevLabel: 'Önceki sistem',
    nextLabel: 'Sonraki sistem'
};
