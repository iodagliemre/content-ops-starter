/**
 * PAKET-P4-SAHIPLIK-FINAL G2 (CD #6). Metin brief'ten (ICERIK-ENVANTERI'nden çevrildi, Emre onaylı).
 * PAKET-P5-SEO-META-DIL G1: madde 1 ve 4 veri egemenliği vurgusuyla güncellendi (Emre, 03.11.2026).
 * G2: `{ tr, en }`. EN madde başlıkları mevcut siteden; açıklamalar TR'den çevrildi, çünkü mevcut sitenin
 * EN açıklamaları onaylı TR metinle aynı anlamı taşımıyor (RAPOR-P5.md).
 */

export type WhyContent = {
    eyebrow: string;
    figure: string;
    figureLabel: string;
    items: Array<{ title: string; description: string }>;
};
