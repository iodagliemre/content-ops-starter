// PAKET-P6 B3: Broker's Brain vaka sayfası (TR). Kaynak: _legacy/content/pages/brokers-brain.md + ICERIK-ENVANTERI.
import type { CaseContent } from '../../cases';
import { EMRE_SONUC, EMRE_STACK } from '../../cases';
import { CAL_COM, EMAIL } from '../../finalCta';

export const brokersBrain: CaseContent = {
    slug: 'brokers-brain',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: "Broker's Brain",
    definition: 'Gayrimenkul ofisleri için WhatsApp talep yönetimi: gelen talepleri toplar, yapay zekâyla nitelendirir, doğru danışmana yönlendirir.',
    image: { src: '/products/brokers-brain.webp', width: 640, height: 270 },
    meta: {
        title: "Broker's Brain — Kurduğumuz Sistem | Doveify",
        description: 'Gayrimenkul ofisleri için WhatsApp talep yönetimi: talepleri toplar, yapay zekâyla nitelendirir, doğru danışmana yönlendirir.',
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
    tech: { title: 'Teknoloji', items: ['WhatsApp Business API', EMRE_STACK] },
    results: {
        title: 'Sonuç',
        items: ['Talep toplama, nitelendirme ve yönlendirme tek akışta birleşti.', `${EMRE_SONUC} — yanıt süresindeki değişim`, `${EMRE_SONUC} — kurulum süresi`]
    },
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'İLETİŞİME GEÇ', href: CAL_COM },
        secondary: EMAIL
    }
};
