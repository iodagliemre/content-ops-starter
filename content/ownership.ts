/**
 * PAKET-P4-SAHIPLIK-FINAL G1 (CD #5). Metin brief'ten (ICERIK-ENVANTERI'nden çevrildi, Emre onaylı).
 * Ana ifade CD kararıyla EN. Karşılaştırma ikonsuz; satır sırası iki sütunda eşleşik.
 */

export const ownershipSection = {
    eyebrow: 'SAHİPLİK',
    statement: ['TOOLS ARE RENTED.', 'KNOWLEDGE SHOULD NOT BE.'],
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
                'Regülasyon ağır, veri egemenliği zorunlu',
                'Kurumsal hafıza kendi sisteminizde',
                'Uzun vadeli yatırım, yol haritası sizde',
                'Platform sınırlarını aşan sektörel iş akışları'
            ]
        }
    ],
    closing:
        'Doveify sahiplik tarafındadır — çünkü işletmelerin en kritik süreçlerinin stratejik kontrolünü başka bir sağlayıcıya devretmemesi gerektiğine inanıyoruz.'
} as const;
