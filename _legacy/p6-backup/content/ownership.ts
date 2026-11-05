/**
 * PAKET-P4-SAHIPLIK-FINAL G1 (CD #5). Metin brief'ten (ICERIK-ENVANTERI'nden çevrildi, Emre onaylı).
 * Ana ifade CD kararıyla EN. Karşılaştırma ikonsuz; satır sırası iki sütunda eşleşik.
 * PAKET-P5-SEO-META-DIL G1: Doveify satır 2 → "Veri egemenliği: tüm veri müşteride" (Emre, 03.11.2026).
 * G2: `{ tr, en }`. EN satırlar ve kapanış mevcut siteden ("SaaS vs Ownership"); satır 2 ve alt satır
 * yeni çeviri (RAPOR-P5.md).
 */
import type { Localized } from './locale';

type OwnershipContent = {
    eyebrow: string;
    statement: [string, string];
    subline: string;
    columns: [{ heading: string; rows: string[] }, { heading: string; rows: string[] }];
    closing: string;
};

const STATEMENT: [string, string] = ['TOOLS ARE RENTED.', 'KNOWLEDGE SHOULD NOT BE.'];

export const ownershipContent: Localized<OwnershipContent> = {
    tr: {
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
    },
    en: {
        eyebrow: 'OWNERSHIP',
        statement: STATEMENT,
        subline: 'Real ownership in digital is the safeguard of your future.',
        columns: [
            {
                heading: 'SAAS',
                rows: [
                    'Quick standard digitization',
                    'Low initial cost, market test',
                    'Small team, provider handles maintenance',
                    'No deep customization need yet',
                    'Short-term or seasonal'
                ]
            },
            {
                heading: 'DOVEIFY',
                rows: [
                    'Full control in critical processes',
                    'Data sovereignty: all data stays with the client',
                    'Institutional memory in your own system',
                    'Long-term investment, roadmap in your hands',
                    'Industry-specific workflows beyond platform limits'
                ]
            }
        ],
        closing:
            'Doveify stands on the ownership side — because we believe businesses should not hand over strategic control of their most critical processes to another provider.'
    }
};
