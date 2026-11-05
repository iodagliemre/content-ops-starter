/**
 * PAKET-P6 B2/B3. Vaka sayfası (kurduğumuz sistem) içerik tipi. Metinler content/tr/cases/*.ts ve
 * content/en/cases/*.ts'te; kaynak: eski /clinic ve /brokers-brain sayfaları (_legacy/content/pages/) +
 * ICERIK-ENVANTERI. "Fiyat / deneme / kayıt" ifadeleri çıkarıldı, "ürün" yerine "sistem".
 * PAKET-P7 G6: P6 placeholder'ları Emre'nin stack ve "Ne değişti" bilgisiyle kapatıldı; sabitler kaldırıldı.
 */
import type { CaseSlug } from './locale';
import type { FinalCtaContent } from './finalCta';

export type CaseContent = {
    slug: CaseSlug;
    eyebrow: string;
    name: string;
    definition: string;
    /** PAKET-P7 G5: real screen, 3:2 (Clinic OS keeps the approved dashboard crop, Emre 05.11.2026). */
    image: { src: string; width: number; height: number; srcSet?: string };
    meta: { title: string; description: string; ogImage: string };
    forWhom: { title: string; body: string };
    problem: { title: string; items: string[] };
    built: { title: string; items: Array<{ title: string; description?: string }> };
    tech: { title: string; items: string[] };
    results: { title: string; items: string[] };
    cta: FinalCtaContent;
};
