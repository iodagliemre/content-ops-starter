// PAKET-P6 B3: Clinic OS vaka sayfası (TR). Kaynak: _legacy/content/pages/clinic.md + ICERIK-ENVANTERI.
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const clinicOs: CaseContent = {
    slug: 'clinic-os',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: 'Clinic OS',
    definition: 'Sağlık kurumları için bütünleşik yönetim sistemi: randevu, hasta kaydı, faturalama ve WhatsApp iletişimi tek yerde.',
    status: 'live',
    liveUrl: 'https://clinic.doveify.io', // PAKET-P8 G1
    image: sysImg('clinic-os', 'hero.webp', 1596, 1064, 'Clinic OS yönetim paneli, dizüstü bilgisayar ekranında'), // PAKET-P8 G7
    meta: {
        title: 'Clinic OS — Klinik Yönetim Yazılımı | Doveify', // PAKET-P8 G2
        description: 'Klinik yönetim yazılımı: randevu, hasta kaydı, faturalama ve WhatsApp iletişimi tek yerde. Klinik randevu programı, kliniğin kendi altyapısında.',
        ogImage: '/og/clinic-os.png'
    },
    forWhom: {
        title: 'Kim için',
        body: 'Randevuyla çalışan klinikler ve sağlık kurumları. Randevuyu, hasta dosyasını ve faturayı ayrı araçlarda ya da tablolarda yöneten; hasta iletişiminin büyük kısmı WhatsApp üzerinden yürüyen ekipler için kuruldu.'
    },
    problem: {
        title: 'Sorun',
        items: [
            'Randevu, hasta kaydı ve fatura ayrı araçlarda ve tablolarda dağınık.',
            'Hatırlatma yapılamadığı için randevuya gelinmiyor, takvimde boşluk kalıyor.',
            "WhatsApp'tan gelen sorular mesai dışında yanıtsız kalıyor, talepler kayboluyor."
        ]
    },
    built: {
        title: 'Ne kurduk',
        items: [
            { title: 'Akıllı randevu', description: 'Takvim yönetimi ve otomatik hatırlatmalar; randevular tek takvimde.' },
            { title: 'Hasta kayıtları', description: 'Dijital hasta dosyası, tedavi geçmişi ve notlar tek yerde.' },
            { title: 'Faturalama ve tahsilat', description: 'Fatura oluşturma, ödeme takibi ve gelir görünümü.' },
            { title: 'WhatsApp otomasyonu', description: 'Randevu hatırlatma ve onayları WhatsApp üzerinden otomatik gider.' },
            { title: 'Yapay zekâ asistanı', description: 'Hasta sorularını günün her saatinde yanıtlar, randevu alır, talepleri ayırır.' },
            { title: 'Tek ekran', description: 'Randevu, hasta ve gelir aynı görünümde.' },
            // PAKET-P7 G6: Emre'nin üç maddesi; parantez içi açıklama alt satıra alındı (RAPOR-P7).
            { title: 'Klinik bazlı dinamik AI asistan', description: 'Çalışma saatleri, tedaviler, randevu.' },
            { title: 'Bring-your-own WhatsApp API', description: "Müşterinin kendi numarası ve token'ı." },
            { title: 'Multi-tenant Postgres (Supabase)' }
        ]
    },
    screens: [
        sysImg('clinic-os', 'screen-1.webp', 1200, 800, 'Clinic OS — Dashboard: günün randevuları, hasta ve gelir'),
        sysImg('clinic-os', 'screen-2.webp', 1200, 800, 'Clinic OS — haftalık randevu takvimi'),
    ],
    tech: { title: 'Teknoloji', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'n8n', 'OpenAI GPT-4o-mini', 'WhatsApp Business Cloud API', 'Cloudflare'] },
    results: {
        title: 'Ne değişti',
        items: [
            "Randevu hatırlatma ve onayları WhatsApp'ta otomatik; resepsiyonun telefon yükü düşer.",
            'Hasta kaydı, tedavi şablonu ve faturalama tek ekranda.',
            'Veri kliniğin kendi altyapısında; sistem kliniğe ait.'
        ]
    },
    // PAKET-P8 G3: SSS (FAQPage JSON-LD). Cevap kaynakları RAPOR-P8'de.
    faq: [
        {
            q: 'Klinik yönetim yazılımı nedir?',
            a: 'Randevu, hasta kaydı, faturalama ve hasta iletişimini tek sistemde toplayan yazılımdır. Clinic OS bunları tek ekranda birleştirir; randevu hatırlatma ve onayları WhatsApp üzerinden otomatik gider.'
        },
        {
            q: 'Clinic OS hangi klinikler için uygun?',
            a: 'Randevuyla çalışan klinikler ve sağlık kurumları için; özellikle hasta iletişiminin büyük kısmı WhatsApp\'tan yürüyen ekipler için kuruldu. Yapay zekâ asistanı her kliniğin çalışma saatlerine ve tedavilerine göre ayarlanır.'
        },
        {
            q: 'Hastalar WhatsApp\'tan randevu alabilir mi?',
            a: 'Evet. Yapay zekâ asistanı WhatsApp\'tan gelen soruları günün her saatinde yanıtlar ve randevu alır. Klinik kendi WhatsApp numarasını kullanır.'
        },
        {
            q: 'Verilerimiz nerede tutulur?',
            a: 'Kliniğin kendi altyapısında. Sistem kliniğe kurulur; kod, veri ve altyapı kliniğe aittir.'
        },
        {
            q: 'Mevcut hasta kayıtlarımızı aktarabilir miyiz?',
            a: 'Kurulumdan önce mevcut kayıtlarınızın biçimine (Excel ya da kullandığınız programın dışa aktarımı) birlikte bakılır; aktarım kurulum kapsamında planlanır.'
        },
    ],
    articles: ['araclar-kiralanir-bilgi-kiralanmaz', 'isletmenin-kendi-yapay-zekasi'],
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
