// PAKET-P6 B3: Broker's Brain vaka sayfası (TR). Kaynak: _legacy/content/pages/brokers-brain.md + ICERIK-ENVANTERI.
import type { CaseContent } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const brokersBrain: CaseContent = {
    slug: 'brokers-brain',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: "Broker's Brain",
    definition: 'Gayrimenkul ofisleri için WhatsApp talep yönetimi: gelen talepleri toplar, yapay zekâyla nitelendirir, doğru danışmana yönlendirir.',
    image: { src: '/products/brokers-brain.webp', width: 1200, height: 800, srcSet: '/products/brokers-brain.webp 1200w, /products/brokers-brain-1600.webp 1600w' }, // P7 G5
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
    tech: { title: 'Teknoloji', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Twilio WhatsApp API', 'Twilio Functions', 'OpenAI GPT-4o-mini + Whisper', 'Netlify'] },
    results: {
        title: 'Ne değişti',
        items: [
            "Gelen WhatsApp lead'leri otomatik sınıflanır ve portföyle eşleşir.",
            'Sesli mesajlar Whisper ile metne çevrilir, aynı akışta yanıtlanır.',
            'Takip gecikmesi dakikalara iner; ek personel gerekmez.'
        ]
    },
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
