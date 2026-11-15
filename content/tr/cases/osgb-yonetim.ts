// PAKET-P8 G3 3.4: OSGB Yönetim tanıtım sayfası (TR). Metin brief'ten; "Ne yapar" açıklamaları osgb.doveify.io
// (15.11.2026) ile doğrulandı. Rakamlar Şirket Tanıtım PDF s.9. Ekranlar osgb.doveify.io ürün görselleri (demo firmalar).
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const osgbYonetim: CaseContent = {
    slug: 'osgb-yonetim',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: 'OSGB Yönetim',
    definition: "OSGB'ler için Excel'lerin yerine tek panel: firma, doküman, atama planlama, performans, memnuniyet anketi ve finans.",
    status: 'live',
    liveUrl: 'https://osgb.doveify.io',
    image: sysImg('osgb-yonetim', 'hero.webp', 1494, 996, 'OSGB Yönetim — Dashboard'),
    meta: {
        title: 'OSGB Yönetim — OSGB Yazılımı | Doveify',
        description: "OSGB yazılımı: firma, doküman, İSG Katip atama planlama, performans, anket ve finans tek panelde. Excel'lerin yerine OSGB yönetim programı.",
        ogImage: '/og/osgb-yonetim.png'
    },
    forWhom: {
        title: 'Kim için',
        body: "Ortak sağlık ve güvenlik birimleri; firma ve profesyonel atamalarını Excel'de yöneten ekipler."
    },
    problem: {
        title: 'Sorun',
        items: [
            'Firma, uzman ve hekim atamaları dağınık dosyalarda.',
            'İSG Katip planlaması elle yapılıyor.',
            'Doküman süresi dolan firmalar gözden kaçıyor.'
        ]
    },
    built: {
        title: 'Ne yapar',
        items: [
            { title: 'Firma yönetimi', description: 'Firmalar sicil, tehlike sınıfı ve atama bilgileriyle tek listede; filtre, arama, toplu işlem.' },
            { title: 'Doküman takibi ve süre uyarısı', description: 'Sınırsız doküman sütunu; tarihler renklenir: güncel, gecikmiş, bekliyor. Firma bazında tamamlanma oranı.' },
            { title: 'İSG Katip atama planlama', description: "Bakanlıktan indirilen Excel içe aktarılır, firmalar otomatik eşleşir; tehlike sınıfı ve sertifika sınıfı eşleşmesi kontrol edilir." },
            { title: 'Profesyonel iş yükü dağılımı', description: 'Hekim ve uzman atamaları takvimde; kapasite, aylık süre ve iş yükü tek görünümde.' },
            { title: 'Memnuniyet anketi', description: 'Tek tıkla e-postayla 5 soruluk anket; skor otomatik hesaplanır, performans değerlendirmesine yansır.' },
            { title: 'Finans / ticari takip', description: 'Sözleşme, fatura, ödeme takibi ve teklif oluşturma.' }
        ]
    },
    screens: [
        sysImg('osgb-yonetim', 'screen-1.webp', 1200, 800, 'İSG Katip atama planlama'),
        sysImg('osgb-yonetim', 'screen-2.webp', 1200, 800, 'Doküman takip: tarih bazlı renklendirme'),
        sysImg('osgb-yonetim', 'screen-3.webp', 1200, 800, 'Performans kriterleri yönetimi')
    ],
    stats: [
        { value: '12+', label: 'modül' },
        { value: 'Sınırsız', label: 'firma' },
        { value: '2.700+', label: "OSGB'lik pazar" }
    ],
    tech: { title: 'Teknoloji', items: ['React', 'TypeScript', 'Supabase', 'Resend'] },
    faq: [
        {
            q: 'OSGB yazılımı hangi işleri kapsar?',
            a: "Firma yönetimi, doküman takibi, İSG Katip uyumlu atama planlama, profesyonel takvimi, performans yönetimi, müşteri memnuniyet anketi ve fatura, sözleşme, teklif takibi. OSGB Yönetim bunları Excel'lerin yerine tek panelde toplar."
        },
        {
            q: 'İSG Katip ile uyumlu mu?',
            a: "Evet. Bakanlıktan indirilen İSG Katip Excel'i içe aktarılır, firmalar otomatik eşleştirilir; yeni, güncellenen ve silinen kayıtlar ayrı gösterilir. Atama planlamada tehlike sınıfı ve sertifika sınıfı eşleşmesi kontrol edilir."
        },
        {
            q: 'Kaç firma eklenebilir?',
            a: 'Sınırsız.'
        },
        {
            q: "Veriler OSGB'nin kendi altyapısında mı?",
            a: "Her OSGB'nin verisi ayrı tutulur. Kuruma özel kurulumda sistem OSGB'nin kendi logosu ve adresiyle kurulur; kod, veri ve altyapı OSGB'nin olur."
        },
        {
            q: "Mevcut Excel'lerimiz aktarılır mı?",
            a: "Evet. İSG Katip Excel'i tek adımda içe aktarılır; atama planlamada Excel ile toplu içe ve dışa aktarım, doküman takipte Excel'e aktarım vardır."
        }
    ],
    articles: ['excelden-sisteme-gecis', 'saas-mi-ozel-yazilim-mi'],
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
