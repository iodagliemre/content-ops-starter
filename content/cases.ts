/**
 * PAKET-P6 B2/B3. Vaka sayfası (kurduğumuz sistem) içerik tipi. Metinler content/tr/cases/*.ts ve
 * content/en/cases/*.ts'te; kaynak: eski /clinic ve /brokers-brain sayfaları (_legacy/content/pages/) +
 * ICERIK-ENVANTERI. "Fiyat / deneme / kayıt" ifadeleri çıkarıldı, "ürün" yerine "sistem".
 * `[EMRE-SONUÇ]` ve `[EMRE-STACK]` işaretli placeholder: Emre doğrulayana kadar sayfada görünür kalır.
 */
import type { CaseSlug } from './locale';
import type { FinalCtaContent } from './finalCta';

export type CaseContent = {
    slug: CaseSlug;
    eyebrow: string;
    name: string;
    definition: string;
    image: { src: string; width: number; height: number };
    meta: { title: string; description: string; ogImage: string };
    forWhom: { title: string; body: string };
    problem: { title: string; items: string[] };
    built: { title: string; items: Array<{ title: string; description: string }> };
    tech: { title: string; items: string[] };
    results: { title: string; items: string[] };
    cta: FinalCtaContent;
};

/** Placeholder'lar: sayfada aynen görünür, RAPOR-P6.md'de listelenir. */
export const EMRE_SONUC = '[EMRE-SONUÇ]';
export const EMRE_STACK = '[EMRE-STACK]';
