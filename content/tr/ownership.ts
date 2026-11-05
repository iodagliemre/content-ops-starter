// PAKET-P6 A1: TR sözlüğü (ownership). Tip ve dilden bağımsız sabitler: content/ownership.ts.
import type { OwnershipContent } from '../ownership';
import { STATEMENT } from '../ownership';

export const ownership: OwnershipContent = {
    eyebrow: 'SAHİPLİK',
    statement: STATEMENT,
    subline: 'Dijitalde gerçek sahiplik, geleceğin güvencesi.',
    columns: [
        {
            heading: 'SAAS',
            rows: [
                'Hızlı standart dijitalleşme',
                'Düşük başlangıç maliyeti, pazar testi',
                'Bakım sağlayıcıda, küçük ekip',
                'Derin özelleştirme ihtiyacı yok',
                'Kısa vadeli veya sezonluk'
            ]
        },
        {
            heading: 'DOVEIFY',
            rows: [
                'Kritik süreçlerde tam kontrol',
                'Veri egemenliği: tüm veri müşteride',
                'Kurumsal hafıza kendi sisteminizde',
                'Uzun vadeli yatırım, yol haritası sizde',
                'Platform sınırlarını aşan sektörel iş akışları'
            ]
        }
    ],
    closing:
        'Doveify sahiplik tarafındadır — çünkü işletmelerin en kritik süreçlerinin stratejik kontrolünü başka bir sağlayıcıya devretmemesi gerektiğine inanıyoruz.'
};
