/**
 * V2 homepage content, typed. Kaynak: docs/content/ICERIK-ENVANTERI.md (metin uydurma yok —
 * bu dosyadaki her alan o envanterden bire bir taşındı). Boş/karara bağlı alanlar
 * [BEKLEYEN-İÇERİK] ile işaretli; PROJECT-STATE.md "Bekleyen Kararlar" ile çapraz kontrol et.
 *
 * NOT: Bu dosya src/pages/index.tsx tarafından henüz tüketilmiyor (P00 = iskelet + veri hazırlığı).
 * P1-P4 bu veriyi gerçek bölümlere bağlayacak.
 */

export const site = {
    meta: {
        title: 'Doveify',
        description: '[BEKLEYEN-İÇERİK] — TR meta açıklama onaylanmadı (mevcut EN: "AI-powered, fully customized automation systems that you own...")',
        ogImage: '/og-image.jpg'
    },

    // P5: nav ve hero artık content/nav.ts ve content/hero.ts'ten okunuyor; bu iki alan yalnız kayıt için.
    nav: {
        primary: ['Sistemler', 'Web Factory', 'Dijital Dönüşüm', 'Sahiplik', 'Çalışmalar'],
        cta: 'İletişim'
    },

    hero: {
        h1Line1: 'DİJİTAL ZEKÂ.',
        h1Line2: 'GERÇEK ETKİ.',
        subtitle: 'Doveify, işletmelerin dijital geleceğini tasarlar, geliştirir ve büyütür.',
        ctaPrimary: 'SİSTEMLERİ KEŞFET',
        ctaSecondary: "WEB FACTORY'Yİ İNCELE"
    },

    // PAKET-P2-URUNLER-CAROUSEL: bu alanın yerini content/products.ts aldı (gerçek carousel
    // verisi + artık BEKLEYEN-İÇERİK olmayan açıklama metni + 4. ürün TurkISG AI orada).
    // Burada sadece tarihsel referans için bırakıldı, hiçbir bileşen bunu tüketmiyor.

    // PAKET-P3-WEBFACTORY-DONUSUM: gerçek veri content/webFactory.ts'te, hiçbir bileşen bunu tüketmiyor.
    webFactory: {
        eyebrow: 'WEB FACTORY',
        heading: 'Markanızı dijitalde zirveye taşıyoruz.',
        description: 'Strateji, tasarım ve yazılımı bir araya getirerek yüksek performanslı web deneyimleri sunuyoruz.',
        cta: "WEB FACTORY'Yİ KEŞFET"
    },

    // Karar #4 kapandı: tek hat DATA → AI → SYSTEMS → AUTONOMY (PAKET-P3-WEBFACTORY-DONUSUM). Gerçek
    // veri content/transformation.ts'te; aşağıdaki 4 kartlı eski taslağı hiçbir bileşen tüketmiyor.
    digitalTransformation: {
        eyebrow: 'DİJİTAL DÖNÜŞÜM',
        heading: 'Dönüşüm bir tercih değil, rekabet avantajıdır.',
        pending: 'BEKLEYEN KARAR #4 — bu bölümün hangi versiyonla gideceği netleşmeden final metin yazılmayacak',
        cards: [
            { title: 'Strateji & Danışmanlık', description: 'Doğru yol haritası ile etkin dönüşüm.' },
            { title: 'Süreç & Otomasyon', description: 'Operasyonlarınızı optimize edin, zaman kazanın.' },
            { title: 'Veri & Analitik', description: 'Verinizi anlamaya dönüştürün, doğru kararlar alın.' },
            { title: 'Teknoloji & Entegrasyon', description: 'Sistemlerinizi entegre ederek verimliliği artırın.' }
        ]
    },

    // Bekleyen karar #5: CD metni "TOOLS ARE RENTED..." + SaaS karşılaştırma vs. referans görsel
    // 3 ikonlu kart + yan kart. Aşağıda GÖRSEL esas alındı (Emre onayına kadar).
    ownership: {
        eyebrow: 'SAHİPLİK',
        heading: 'Dijitalde gerçek sahiplik, geleceğin güvencesi.',
        pending: 'BEKLEYEN KARAR #5 — CD metniyle çelişiyor, final versiyon Emre onayı bekliyor',
        cards: [
            { title: 'Alan Adı', description: 'Markanıza ait alan adı sizin mülkünüzdür.' },
            { title: 'Altyapı', description: 'Güvenli, ölçeklenebilir ve size özel altyapılar.' },
            { title: 'Veri Sahipliği', description: 'Veriniz sizin, kontrol her zaman sizde.' }
        ],
        sideCard: {
            text: 'Dijital varlığınızın tam kontrolü sizde olsun.',
            cta: 'DAHA FAZLA BİLGİ'
        }
    },

    work: {
        eyebrow: 'ÇALIŞMALAR',
        heading: 'Gerçek sonuçlar, gerçek hikayeler.',
        cta: 'TÜM ÇALIŞMALARI GÖR',
        logos: '[BEKLEYEN-İÇERİK] — memarts, teknikradyo, DELTA OSGB, BİNNUR, akort, ERA ROSE: logo dosyaları yok, Emre\'den istenecek (bkz. content/work.ts)'
    },

    finalCta: {
        heading: 'Fikrini gerçeğe dönüştürelim.',
        subtitle: 'Projenizi konuşalım, birlikte büyütelim.',
        cta: 'İLETİŞİME GEÇ'
    },

    // Mevcut sitedeki iletişim bilgileri (EN sitede aynen var); TR çevirisi onaylanana kadar
    // ham veri olarak taşındı.
    contact: {
        heading: 'Meet Your Digital Architect',
        people: [
            { name: 'Emre Dağlı', email: 'emre@doveify.io', phone: '+90 542 805 08 15' },
            { name: 'Elif Dağlı', email: 'elifdagli@doveify.io', phone: '+90 535 258 45 78' }
        ],
        emailNote: '[BEKLEYEN-İÇERİK] — elifoflaz@doveify.io ve hello@doveify.com (.com uzantısı doğrulanacak)',
        linkedin: 'https://linkedin.com/company/doveify',
        instagram: '@doveify.io'
    },

    footer: {
        legalName: '[BEKLEYEN-İÇERİK] — "DOVEIFYIO AI SOLUTIONS LTD" (künye) vs "DOVEIFY AI SOLUTIONS LTD." (site), Emre doğrulayacak',
        tagline: "Your business's digital solution partner",
        locations: 'Istanbul • London',
        copyright: '© 2026 Doveify AI Solutions Ltd.'
    }
} as const;

export type SiteContent = typeof site;
