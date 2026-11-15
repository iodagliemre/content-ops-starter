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
        // PAKET-P8 G1: Emre'nin sırası. Mevcut 4 kart metni aynı (OSGB WEB → OSGB YÖNETİM: sistemin adı); iki yeni kartın
        // tek satırlık açıklaması tanıtım sayfası tanımından kısaltıldı (RAPOR-P8).
        item('tr', 'clinic-os', 'CLINIC OS', 'Sağlık kurumları için bütünleşik yönetim sistemi.'),
        item('tr', 'brokers-brain', "BROKER'S BRAIN", 'Gayrimenkul profesyonelleri için akıllı takip ve analiz platformu.'),
        item('tr', 'emlak-ofis-paneli', 'EMLAK OFİS PANELİ', 'Emlak ofisleri için portföy, müşteri ve randevu takibi.'),
        item('tr', 'osgb-yonetim', 'OSGB YÖNETİM', 'İş sağlığı ve güvenliği süreçlerinizi dijitalleştiren platform.'),
        item('tr', 'kuru-temizleme', 'KURU TEMİZLEME', 'Kuru temizleme için sipariş, müşteri ve tahsilat yönetimi.'),
        // TR metin Emre onaylı (05.09.2026).
        item('tr', 'turkisg-ai', 'TURKISG AI', 'İSG profesyonelleri için yapay zekâ asistanı.')
    ],
    prevLabel: 'Önceki sistem',
    nextLabel: 'Sonraki sistem'
};
