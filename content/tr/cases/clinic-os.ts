// PAKET-P6 B3: Clinic OS vaka sayfası (TR). Kaynak: _legacy/content/pages/clinic.md + ICERIK-ENVANTERI.
import type { CaseContent } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const clinicOs: CaseContent = {
    slug: 'clinic-os',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: 'Clinic OS',
    definition: 'Sağlık kurumları için bütünleşik yönetim sistemi: randevu, hasta kaydı, faturalama ve WhatsApp iletişimi tek yerde.',
    image: { src: '/products/clinic-os.webp', width: 640, height: 270 },
    meta: {
        title: 'Clinic OS — Kurduğumuz Sistem | Doveify',
        description: 'Sağlık kurumları için bütünleşik yönetim sistemi: randevu, hasta kaydı, faturalama ve WhatsApp iletişimi tek yerde.',
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
    tech: { title: 'Teknoloji', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'n8n', 'OpenAI GPT-4o-mini', 'WhatsApp Business Cloud API', 'Cloudflare'] },
    results: {
        title: 'Ne değişti',
        items: [
            "Randevu hatırlatma ve onayları WhatsApp'ta otomatik; resepsiyonun telefon yükü düşer.",
            'Hasta kaydı, tedavi şablonu ve faturalama tek ekranda.',
            'Veri kliniğin kendi altyapısında; sistem kliniğe ait.'
        ]
    },
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
