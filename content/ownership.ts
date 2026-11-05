/**
 * PAKET-P4-SAHIPLIK-FINAL G1 (CD #5). Metin brief'ten (ICERIK-ENVANTERI'nden çevrildi, Emre onaylı).
 * Ana ifade CD kararıyla EN. Karşılaştırma ikonsuz; satır sırası iki sütunda eşleşik.
 * PAKET-P5-SEO-META-DIL G1: Doveify satır 2 → "Veri egemenliği: tüm veri müşteride" (Emre, 03.11.2026).
 * G2: `{ tr, en }`. EN satırlar ve kapanış mevcut siteden ("SaaS vs Ownership"); satır 2 ve alt satır
 * yeni çeviri (RAPOR-P5.md).
 */

export type OwnershipContent = {
    eyebrow: string;
    statement: [string, string];
    subline: string;
    columns: [{ heading: string; rows: string[] }, { heading: string; rows: string[] }];
    closing: string;
};

export const STATEMENT: [string, string] = ['TOOLS ARE RENTED.', 'KNOWLEDGE SHOULD NOT BE.'];
