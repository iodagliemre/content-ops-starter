// PAKET-P6 B3: Clinic OS vaka sayfası (TR). Kaynak: _legacy/content/pages/clinic.md + ICERIK-ENVANTERI.
import type { CaseContent } from '../../cases';
import { EMRE_SONUC, EMRE_STACK } from '../../cases';
import { CAL_COM, EMAIL } from '../../finalCta';

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
            { title: 'Tek ekran', description: 'Randevu, hasta ve gelir aynı görünümde.' }
        ]
    },
    tech: { title: 'Teknoloji', items: ['WhatsApp Business API', EMRE_STACK] },
    results: {
        title: 'Sonuç',
        items: ['Randevu, hasta kaydı ve tahsilat tek sistemde toplandı.', `${EMRE_SONUC} — gelinmeyen randevu oranındaki değişim`, `${EMRE_SONUC} — kurulum süresi`]
    },
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'İLETİŞİME GEÇ', href: CAL_COM },
        secondary: EMAIL
    }
};
