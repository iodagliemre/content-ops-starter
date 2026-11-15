/**
 * PAKET-P8 G5. Bilgi Bankası arayüz metinleri (yazılar content/{tr,en}/bilgi/*.md). Liste H1 ve eyebrow brief'ten;
 * meta ve küçük etiketler yeni (RAPOR-P8).
 */
import type { Localized } from './locale';

export type KbUi = {
    meta: { title: string; description: string; ogImage: string };
    eyebrow: string;
    title: string;
    readMin: (n: number) => string;
    relatedSystem: string;
    ownSoftware: { title: string; text: string };
    allArticles: string;
    dateLocale: string;
};

export const KB_UI: Localized<KbUi> = {
    tr: {
        meta: {
            title: 'Bilgi Bankası — Sahiplik, Sistemler, Yapay Zekâ | Doveify',
            description: 'Özel yazılım mı SaaS mı, kurumsal hafıza, işletmenin kendi yapay zekâsı, Excel’den sisteme geçiş: karar vermeden önce okunacak yazılar.',
            ogImage: '/og/bilgi-bankasi.png'
        },
        eyebrow: 'BİLGİ BANKASI',
        title: 'Sahiplik, sistemler ve işletmenin yapay zekâsı.',
        readMin: (n) => `${n} dk okuma`,
        relatedSystem: 'İlgili sistem',
        ownSoftware: { title: 'Kendi Yazılımınız', text: 'Kiralık araçlar yerine işletmenize ait sistem.' },
        allArticles: '← Bilgi Bankası',
        dateLocale: 'tr-TR'
    },
    en: {
        meta: {
            title: 'Knowledge Base — Ownership, Systems, AI | Doveify',
            description: 'SaaS or custom software, institutional memory, a business’s own AI, moving from Excel to a system: reading before you decide.',
            ogImage: '/og/bilgi-bankasi-en.png'
        },
        eyebrow: 'KNOWLEDGE BASE',
        title: "Ownership, systems and the business's own AI.",
        readMin: (n) => `${n} min read`,
        relatedSystem: 'Related system',
        ownSoftware: { title: 'Your Own Software', text: 'A system your business owns, instead of rented tools.' },
        allArticles: '← Knowledge Base',
        dateLocale: 'en-GB'
    }
};
