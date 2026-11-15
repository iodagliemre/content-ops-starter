/**
 * PAKET-P8 G4. "Yazılım yaptırma" çözüm sayfası (/kendi-yaziliminiz/, EN /en/your-own-software/). Metin brief'ten ve
 * Şirket Tanıtım PDF'ten (s.2 problem, s.3 manifesto, s.4 SaaS vs Doveify, s.6 rakamlar, s.11 üç adım). SSS cevapları
 * Bilgi Bankası yazılarından (Emre metinleri) alıntı/özet — kaynaklar RAPOR-P8'de. Nav'a girmez.
 */
import type { FinalCtaContent } from './finalCta';

export type OwnSoftwareContent = {
    meta: { title: string; description: string; ogImage: string };
    eyebrow: string;
    title: string;
    subline: string;
    primary: { label: string; href: string };
    secondary: { label: string; href: string };
    problem: { title: string; lead: string; items: Array<{ label: string; text: string }> };
    manifesto: [string, string];
    comparison: { title: string; columns: [{ heading: string; rows: string[] }, { heading: string; rows: string[] }] };
    process: { title: string; steps: string[] };
    numbers: { title: string; items: Array<{ value: string; label: string }> };
    path: { title: string; steps: string[] };
    systems: { title: string };
    faq: { title: string; items: Array<{ q: string; a: string }> };
    related: string;
    cta: FinalCtaContent;
};
