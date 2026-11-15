// PAKET-P8 G4: Kendi Yazılımınız (TR). Tip ve kaynak notu: content/ownSoftware.ts.
import type { OwnSoftwareContent } from '../ownSoftware';
import { CAL_COM, CONTACT_FORM } from '../finalCta';
import { contactForWork } from '../locale';

export const ownSoftware: OwnSoftwareContent = {
    meta: {
        title: 'Kendi Yazılımınızı Yaptırın — Özel Yazılım | Doveify',
        description: 'Yazılım yaptırma: kiralık araçlar yerine işletmenize ait sistem. İşletmeye özel yazılım geliştirme; kod, veri ve altyapı sizin.',
        ogImage: '/og/kendi-yaziliminiz.png'
    },
    eyebrow: 'KENDİ YAZILIMINIZ',
    title: 'Kendi yazılımınızı yaptırın.',
    subline: 'Kiralık araçlar yerine işletmenize ait sistem.',
    primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
    secondary: { label: CONTACT_FORM.tr.label, href: contactForWork('tr', 'kendi-yaziliminiz') },
    problem: {
        title: 'Kritik süreçler kiralık araçlarda',
        lead: 'İşletmeler en kritik süreçlerini kiraladıkları SaaS araçlarına teslim ediyor.',
        items: [
            { label: 'Veri', text: 'Başkasının sunucusunda.' },
            { label: 'Kurumsal hafıza', text: 'Başkasının ürününde.' },
            { label: 'Kontrol', text: 'Başkasının elinde.' }
        ]
    },
    manifesto: ['ARAÇLAR KİRALANIR.', 'BİLGİ KİRALANMAZ.'],
    comparison: {
        title: 'SaaS vs Doveify',
        columns: [
            { heading: 'SAAS — KİRALAMAK', rows: ['Hızlı, standart dijitalleşme', 'Düşük başlangıç maliyeti', 'Sınırlı özelleştirme', 'Kısa vadeli kullanım'] },
            { heading: 'DOVEIFY — SAHİP OLMAK', rows: ['Kritik süreçlerde tam kontrol', 'Veri egemenliği', 'Hafıza ve yol haritası şirkette kalır', 'Uzun vadeli yatırım'] }
        ]
    },
    process: { title: 'Nasıl çalışıyoruz', steps: ['Keşif görüşmesi', 'Kapsam ve teklif', 'Kurulum ve eğitim', 'Bakım ve geliştirme'] },
    numbers: {
        title: 'Rakamlarla Doveify',
        items: [
            { value: '6', label: 'kurduğumuz sistem' },
            { value: '6+', label: 'marka için teslim edilmiş proje' },
            { value: '3', label: 'pazar: Türkiye, Birleşik Krallık, Körfez' },
            { value: '%100', label: 'sahiplik' },
            { value: '15', label: 'yıl sektör deneyimi' }
        ]
    },
    path: { title: 'Adım adım', steps: ['Önce site', 'Sonra otomasyon', 'Sonra işletmenin verisini öğrenen AI'] },
    systems: { title: 'Kurduğumuz sistemler' },
    faq: {
        title: 'Sık sorulan sorular',
        items: [
            {
                q: 'Yazılım yaptırmak ne kadar sürer?',
                a: 'Kurulum haftalar sürer, günler değil. Süre kapsama bağlıdır; ilk çalışan sürümün ne zaman görüleceği ve haftalık ilerlemenin nasıl paylaşılacağı baştan takvime bağlanır.'
            },
            {
                q: 'Kaynak kod bize mi ait?',
                a: 'Evet. Kod, veri ve altyapı sizindir; sistem kendi logonuz ve kendi adresinizle çalışır. Sağlayıcı yarın yok olsa sistem çalışmaya devam eder.'
            },
            {
                q: 'Hazır program yerine neden özel yazılım?',
                a: 'Süreç sizi rakipten ayırıyorsa, veri egemenliği zorunluysa ya da kurumsal hafızanın kendi sisteminizde kalması gerekiyorsa. Özel yazılımda program iş akışına uyar ve veri kendi altyapınızda kalır. Süreç standartsa hazır yazılım doğru araç olabilir.'
            },
            {
                q: 'Bakım nasıl olur?',
                a: 'Ödeme bir kez yapılır; sonrası bakım ve geliştirmedir, kira değil. Bakımın kapsamı baştan netleşir. Bakım için ortak seçersiniz, mahkûm olmazsınız.'
            },
            {
                q: 'Küçük işletme için mantıklı mı?',
                a: 'Evet, eğer süreç kritikse. Tek şubeli kuru temizlemeci, 5 danışmanlı emlak ofisi, 2 hekimli klinik — hepsi için kurduğumuz sistemler var. Ölçek değil, sürecin önemi belirler.'
            }
        ]
    },
    related: 'İlgili okumalar',
    cta: {
        heading: 'Fikrini gerçeğe dönüştürelim.',
        subline: 'Projenizi konuşalım, birlikte büyütelim.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
