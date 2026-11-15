// PAKET-P8 G3 3.6: TurkİSG AI tanıtım sayfası (TR). Metin brief'ten; rakamlar Şirket Tanıtım PDF s.10 ve
// turkisgai.doveify.io. Ekranlar turkisgai.doveify.io ürün görselleri (hesap e-postası kapatıldı).
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const turkisgAi: CaseContent = {
    slug: 'turkisg-ai',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: 'TurkİSG AI',
    definition: 'Türk mevzuatıyla eğitilmiş İSG asistanı: mevzuat soru-cevap, fotoğraftan tehlike analizi ve DÖF raporu, deneme sınavları, kontrol listeleri.',
    status: 'live',
    liveUrl: 'https://turkisgai.doveify.io',
    extraLink: { label: 'ÜCRETSİZ DENE →', href: 'https://app.turkisgai.doveify.io' },
    image: sysImg('turkisg-ai', 'hero.webp', 843, 562, 'TurkİSG AI — fotoğraftan tehlike analizi'),
    meta: {
        title: 'TurkİSG AI — İSG Yapay Zekâ Asistanı | Doveify',
        description: 'İSG yapay zekâ asistanı: mevzuat soru-cevap, fotoğraftan tehlike analizi ve DÖF raporu, deneme sınavları. Türk mevzuatıyla eğitilmiş İSG yazılımı.',
        ogImage: '/og/turkisg-ai.png'
    },
    forWhom: {
        title: 'Kim için',
        body: "İSG uzmanları, işyeri hekimleri, OSGB'ler, sınava hazırlanan adaylar."
    },
    problem: {
        title: 'Sorun',
        items: [
            'Mevzuat dağınık; doğru maddeyi bulmak zaman alıyor.',
            'Saha fotoğrafından rapor yazmak saatler sürüyor.',
            'Sınav hazırlığı için güncel soru havuzu yok.'
        ]
    },
    built: {
        title: 'Ne yapar',
        items: [
            { title: 'Mevzuat soru-cevap', description: '6331, yönetmelikler, ÇSGB rehberleri.' },
            { title: 'Fotoğraftan tehlike analizi ve DÖF raporu' },
            { title: '2.700+ ÖSYM tarzı deneme sorusu' },
            { title: 'Kontrol listeleri' },
            { title: 'Kaynak gösterir' }
        ]
    },
    screens: [
        sysImg('turkisg-ai', 'screen-1.webp', 844, 563, 'İSG Asistan: mevzuat sorusu'),
        sysImg('turkisg-ai', 'screen-2.webp', 843, 562, 'Fotoğraf analizi: tespit edilen tehlikeler'),
        sysImg('turkisg-ai', 'screen-3.webp', 858, 572, 'Saha gözetimi ve kontrol listeleri'),
        sysImg('turkisg-ai', 'screen-4.webp', 846, 564, 'Deneme sınavı')
    ],
    stats: [
        { value: '91+', label: 'mevzuat belgesi' },
        { value: '89+', label: 'ÇSGB rehberi' },
        { value: '2.700+', label: 'sınav sorusu' },
        { value: '78+', label: 'kontrol listesi' }
    ],
    tech: { title: 'Teknoloji', items: ['RAG', 'OpenAI', 'Supabase', 'React'] },
    faq: [
        {
            q: 'İSG yapay zekâ asistanı ne yapar?',
            a: 'Mevzuat sorularını kaynak göstererek yanıtlar, saha fotoğrafından tehlike analizi ve DÖF raporu çıkarır, deneme sınavları ve kontrol listeleri sunar. TurkİSG AI, Türk mevzuatıyla eğitilmiş bir İSG asistanıdır.'
        },
        {
            q: 'Hangi mevzuatı biliyor?',
            a: "6331 sayılı Kanun, ilgili yönetmelikler ve ÇSGB rehberleri: 91'den fazla mevzuat belgesi ve 89'dan fazla ÇSGB rehberi."
        },
        {
            q: 'Fotoğraf analizi nasıl çalışır?',
            a: 'Sahadan çekilen fotoğraf yüklenir; asistan tehlikeyi tespit eder, risk seviyesini belirler ve DÖF raporunu hazırlar.'
        },
        {
            q: 'Sınav soruları hangi formatta?',
            a: "ÖSYM tarzı deneme soruları; havuzda 2.700'den fazla soru var. Klasik deneme ya da konuya özel sınav seçilebilir."
        },
        {
            q: 'Kurumlar için özel kurulum var mı?',
            a: 'Evet. Kuruma özel, kurumun kendi verisiyle kurulur.'
        }
    ],
    articles: ['isletmenin-kendi-yapay-zekasi', 'araclar-kiralanir-bilgi-kiralanmaz'],
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
