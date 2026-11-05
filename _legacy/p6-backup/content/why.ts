/**
 * PAKET-P4-SAHIPLIK-FINAL G2 (CD #6). Metin brief'ten (ICERIK-ENVANTERI'nden çevrildi, Emre onaylı).
 * PAKET-P5-SEO-META-DIL G1: madde 1 ve 4 veri egemenliği vurgusuyla güncellendi (Emre, 03.11.2026).
 * G2: `{ tr, en }`. EN madde başlıkları mevcut siteden; açıklamalar TR'den çevrildi, çünkü mevcut sitenin
 * EN açıklamaları onaylı TR metinle aynı anlamı taşımıyor (RAPOR-P5.md).
 */
import type { Localized } from './locale';

type WhyContent = {
    eyebrow: string;
    figure: string;
    figureLabel: string;
    items: Array<{ title: string; description: string }>;
};

export const whyContent: Localized<WhyContent> = {
    tr: {
        eyebrow: 'NEDEN DOVEIFY',
        figure: '100%',
        figureLabel: 'OWNERSHIP',
        items: [
            { title: '%100 Sahiplik', description: 'Kod, veri ve altyapı sizin mülkünüzdür; kiralamazsınız. Tüm veri müşteride kalır.' },
            { title: 'Uzun Vadeli Değer', description: 'Abonelik değil yatırım; sistem büyüdükçe değeri artar.' },
            { title: 'Sektöre Özel Çözümler', description: 'Genel platform değil, iş akışınıza göre kurulmuş sistemler.' },
            {
                title: 'Veri Egemenliği',
                description: 'Tüm veriniz kendi altyapınızda, kendi mülkünüzde; üçüncü taraf erişimi yok, kontrol her zaman sizde.'
            },
            { title: 'Uzun Vadeli Çözüm Ortaklığı', description: 'Teslimle bitmez; birlikte büyütürüz.' }
        ]
    },
    en: {
        eyebrow: 'WHY DOVEIFY',
        figure: '100%',
        figureLabel: 'OWNERSHIP',
        items: [
            { title: '100% Ownership', description: 'Code, data and infrastructure are your property; you never rent them. All data stays with the client.' },
            { title: 'Long-Term Value', description: 'An investment, not a subscription; the system gains value as it grows.' },
            { title: 'Industry-Specific Solutions', description: 'Not a generic platform, but systems built around your workflows.' },
            {
                title: 'Data Sovereignty',
                description: 'All your data on your own infrastructure, as your own property; no third-party access, control always yours.'
            },
            { title: 'Long-Term Solution Partnership', description: "It doesn't end at delivery; we grow it together." }
        ]
    }
};
