// PAKET-P6 B3: Broker's Brain vaka sayfası (TR). Kaynak: _legacy/content/pages/brokers-brain.md + ICERIK-ENVANTERI.
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const brokersBrain: CaseContent = {
    slug: 'brokers-brain',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: "Broker's Brain",
    definition: 'Gayrimenkul ofisleri için WhatsApp talep yönetimi: gelen talepleri toplar, yapay zekâyla nitelendirir, doğru danışmana yönlendirir.',
    status: 'live',
    liveUrl: 'https://brokerbrain.doveify.io', // PAKET-P8 G1
    image: { ...sysImg('brokers-brain', 'hero.webp', 1600, 1067, "Broker's Brain — talep paneli"), srcSet: '/products/brokers-brain.webp 1200w, /systems/brokers-brain/hero.webp 1600w' }, // PAKET-P8 G7
    meta: {
        title: 'Broker\'s Brain — Emlak CRM ve WhatsApp Otomasyonu | Doveify', // PAKET-P8 G2
        description: 'Emlak CRM: WhatsApp\'tan gelen talepleri toplar, yapay zekâyla nitelendirir, doğru danışmana yönlendirir. Gayrimenkul ofisleri için WhatsApp otomasyonu.',
        ogImage: '/og/brokers-brain.png'
    },
    forWhom: {
        title: 'Kim için',
        body: "WhatsApp'tan gelen talepleri elle yöneten küçük ve orta ölçekli gayrimenkul ofisleri (11–50 çalışan). Yavaş yanıt ve dağınık takip yüzünden fırsat kaçıran ekipler için kuruldu."
    },
    problem: {
        title: 'Sorun',
        items: [
            'Portal, WhatsApp ve web sitesinden gelen talepler farklı yerlerde dağınık.',
            "WhatsApp'a geç yanıt verildiği için fırsatlar kaçıyor.",
            'Takip elle yapılıyor; hangi talebin sıcak olduğu belli değil.'
        ]
    },
    built: {
        title: 'Ne kurduk',
        items: [
            { title: 'Talep toplama', description: 'Portal, WhatsApp ve web sitesinden gelen talepler tek yerde.' },
            { title: 'Yapay zekâ ile nitelendirme', description: 'Bütçe, konum ve zamanlamayı sorar; talebi sıcak, ılık ya da soğuk olarak puanlar.' },
            { title: 'Anında yönlendirme', description: 'Sıcak talepler tüm bağlamıyla doğru danışmana anında iletilir.' },
            { title: 'WhatsApp asistanı', description: 'Ofise göre yapılandırılmış yapay zekâ asistanı ve hazır konuşma akışları.' },
            { title: 'Canlı pano', description: 'Her talep ve konuşma tek ekranda izlenir.' },
            { title: 'Tam veri sahipliği', description: 'Veri ofisindir; istediği an dışa aktarılır.' }
        ]
    },
    screens: [
        sysImg('brokers-brain', 'screen-1.webp', 1200, 800, "Broker's Brain — canlı WhatsApp konuşmaları"),
        sysImg('brokers-brain', 'screen-2.webp', 1200, 800, "Broker's Brain — talep listesi ve durumlar"),
        sysImg('brokers-brain', 'screen-3.webp', 1200, 800, "Broker's Brain — danışman performansı"),
    ],
    tech: { title: 'Teknoloji', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Twilio WhatsApp API', 'Twilio Functions', 'OpenAI GPT-4o-mini + Whisper', 'Netlify'] },
    results: {
        title: 'Ne değişti',
        items: [
            "Gelen WhatsApp lead'leri otomatik sınıflanır ve portföyle eşleşir.",
            'Sesli mesajlar Whisper ile metne çevrilir, aynı akışta yanıtlanır.',
            'Takip gecikmesi dakikalara iner; ek personel gerekmez.'
        ]
    },
    // PAKET-P8 G3: SSS (FAQPage JSON-LD). Cevap kaynakları RAPOR-P8'de.
    faq: [
        {
            q: 'Emlak ofisi için CRM nedir?',
            a: 'Müşteri adaylarını, görüşmeleri ve takipleri tek yerde tutan sistemdir. Broker\'s Brain portallerden, WhatsApp\'tan ve web sitesinden gelen talepleri toplar, yapay zekâyla nitelendirir ve doğru danışmana yönlendirir.'
        },
        {
            q: 'WhatsApp\'tan gelen müşteriler nasıl kaydedilir?',
            a: 'Gelen mesaj otomatik olarak talep kaydına dönüşür. Yapay zekâ bütçe, konum ve zamanlamayı sorar; talebi sıcak, ılık veya soğuk olarak puanlar.'
        },
        {
            q: 'Sesli mesajlar okunur mu?',
            a: 'Evet. Sesli mesajlar Whisper ile yazıya çevrilir ve aynı akışta yanıtlanır.'
        },
        {
            q: 'Portföy eşleştirme nasıl çalışır?',
            a: 'Gelen WhatsApp talepleri otomatik sınıflandırılır; yapay zekânın topladığı bütçe, konum ve zamanlama bilgisi ofisin portföyüyle eşleştirilir.'
        },
        {
            q: 'Kaç danışman kullanabilir?',
            a: 'Sistem ofise özel kurulduğu için danışman yapısı ofise göre ayarlanır; sıcak talepler doğru danışmana bağlamıyla birlikte anında iletilir.'
        },
    ],
    articles: ['isletmenin-kendi-yapay-zekasi', 'saas-mi-ozel-yazilim-mi'],
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
