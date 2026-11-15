// PAKET-P8 G3 3.3: Emlak Ofis Paneli tanıtım sayfası (TR). Metin brief'ten; "Ne yapar" açıklamaları ve SSS cevapları
// Emlak broşürü + Kullanım Kılavuzu'ndan (docs/kaynak/). Ekranlar: broşür ve kılavuz s.6 (RAPOR-P8 "Görseller").
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const emlakOfisPaneli: CaseContent = {
    slug: 'emlak-ofis-paneli',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: 'Emlak Ofis Paneli',
    definition: '1–10 danışmanlı emlak ofisleri için portföy, müşteri ve randevu takibi — telefonda ve bilgisayarda aynı panel.',
    status: 'live',
    liveUrl: 'https://emlak.doveify.io/giris',
    image: sysImg('emlak-ofis-paneli', 'hero.webp', 1358, 905, 'Emlak Ofis Paneli — Bugün ekranı'),
    meta: {
        title: 'Emlak Ofis Paneli — Emlak Yazılımı | Doveify',
        description: 'Emlak yazılımı: 1–10 danışmanlı ofisler için portföy, müşteri ve randevu takibi. Excel aktarımlı emlak ofis programı, telefonda ve bilgisayarda.',
        ogImage: '/og/emlak-ofis-paneli.png'
    },
    forWhom: {
        title: 'Kim için',
        body: "Küçük ve orta emlak ofisleri; portföyü Excel'de, müşterisi WhatsApp'ta, randevusu defterde olan ekipler."
    },
    problem: {
        title: 'Sorun',
        items: [
            "Mülk sahibinin numarası WhatsApp'ta, son görüşmenin notu defterde, portföy listesi Excel'de.",
            'Yer gösterme saati arada kaynıyor.',
            'Ay sonunda "kaç mülk sattık, kaçını kiraladık" için kayıtlar tek tek açılıyor.'
        ]
    },
    built: {
        title: 'Ne yapar',
        items: [
            { title: "Excel'den tek seferde aktarım", description: 'Mevcut portföy ve müşteri listesi tek dosyayla; önizlemede hatalı satırlar görünür.' },
            { title: 'Fotoğraflı portföy', description: 'Kapak fotoğrafı, mülk sahibi, ilgilenen kişiler, tarihli notlar, satış/kiralama kaydı aynı kayıtta.' },
            { title: 'Takvim ve hatırlatma', description: 'Arama, görüşme, yer gösterme; panel açıkken hatırlatır.' },
            { title: 'Bugün ekranı', description: 'Günün randevuları, gecikenler, bu ay satılan/kiralanan.' },
            { title: 'Bir numara, bir kişi kartı', description: 'Aynı kişi hem mülk sahibi hem müşteri olabilir; karttan ara / WhatsApp aç.' },
            { title: 'Ofis kayıtları ayrı', description: 'Diğer ofisler göremez.' }
        ]
    },
    screens: [
        sysImg('emlak-ofis-paneli', 'screen-1.webp', 1200, 800, 'Bugün ekranı: günün randevuları, hatırlatmalar, aylık satış ve kiralama'),
        sysImg('emlak-ofis-paneli', 'screen-2.webp', 1200, 800, 'Haftalık takvim'),
        sysImg('emlak-ofis-paneli', 'screen-3.webp', 1200, 800, 'Mobil portföy detayı')
    ],
    tech: { title: 'Teknoloji', items: ['React', 'TypeScript', 'Supabase', 'Excel içe aktarma', 'PWA'] },
    faq: [
        {
            q: 'Emlak ofisi yazılımı ne işe yarar?',
            a: 'Portföyü, müşterileri ve randevuları tek yerde toplar. Emlak Ofis Paneli\'nde mülk sahibi, ilgilenen kişiler, tarihli görüşme notları ve yer gösterme randevuları aynı kayıtta durur; Bugün ekranı günün işini ve ayın satış/kiralama sayılarını gösterir.'
        },
        {
            q: "Excel'deki portföyümü aktarabilir miyim?",
            a: 'Evet. Mevcut portföy ve müşteri listesi tek Excel dosyasıyla aktarılır; önizlemede hatalı satırlar ve nedenleri görünür, aktarım ya tamamen yapılır ya hiç. Demo sabit bir şablonla çalışır; size özel kurulumda şablon kendi dosyanıza göre uyarlanır.'
        },
        {
            q: 'Telefondan kullanılır mı?',
            a: 'Evet. Panel tarayıcıdan açılır, kurulum gerekmez; telefonda ve bilgisayarda aynı panel.'
        },
        {
            q: 'Diğer ofisler kayıtlarımı görür mü?',
            a: 'Hayır. Her ofisin verisi ayrıdır ve bu, sistemin her katmanında test edilmiştir.'
        },
        {
            q: 'Demo var mı?',
            a: 'Evet: emlak.doveify.io/giris. Demo örnek verilerle dolu açılır; paneli hemen deneyebilirsiniz.'
        }
    ],
    articles: ['excelden-sisteme-gecis', 'kendi-yaziliminizi-yaptirmadan-once'],
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
