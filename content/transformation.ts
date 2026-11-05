/**
 * PAKET-P3-WEBFACTORY-DONUSUM G3. TEK HAT DATA → AI → SYSTEMS → AUTONOMY (CD #4). Metin brief'ten,
 * Emre onaylı TR; aşama etiketleri CD kararıyla EN büyük harf. Sıra sabit.
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`. EN aşama başlık/açıklamaları ve alıntı mevcut siteden
 * (ICERIK-ENVANTERI "4 Faz"); eyebrow ve H2 yeni çeviri.
 */

export type TransformationStage = {
    label: string;
    title: string;
    description: string;
};

export type TransformationContent = {
    section: { eyebrow: string; heading: string; quote: string };
    stages: TransformationStage[];
};
