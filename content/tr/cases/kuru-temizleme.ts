// PAKET-P8 G3 3.5: Kuru Temizleme Paneli tanıtım sayfası (TR). Metin brief'ten; "Ne yapar" maddeleri Emre'nin verdiği
// prototip ekranlarıyla (Siparişler, Müşteriler, Raporlar, Ürünler — 15.11.2026) doğrulandı: brief'teki "PWA" maddesi
// ekranlarda doğrulanamadığı için çıkarıldı, ekranlarda görülen "Ürün ve fiyat matrisi" eklendi (RAPOR-P8).
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const kuruTemizleme: CaseContent = {
    slug: 'kuru-temizleme',
    eyebrow: 'KURDUĞUMUZ SİSTEM',
    name: 'Kuru Temizleme Paneli',
    definition: 'Kuru temizleme işletmeleri için sipariş, müşteri, tahsilat ve rapor yönetimi — telefonda çalışan tek panel.',
    status: 'prototype',
    liveUrl: 'https://kurutemizleme-proto.netlify.app/',
    image: sysImg('kuru-temizleme', 'hero.webp', 1328, 885, 'Kuru Temizleme Paneli — Raporlar ekranı'),
    meta: {
        title: 'Kuru Temizleme Paneli — Kuru Temizleme Yazılımı | Doveify',
        description: 'Kuru temizleme yazılımı: sipariş, müşteri, tahsilat ve rapor yönetimi tek panelde. Kuru temizleme ve çamaşırhane programı, işletmeye özel kurulum.',
        ogImage: '/og/kuru-temizleme.png'
    },
    forWhom: {
        title: 'Kim için',
        body: "Tek şube kuru temizleme / çamaşırhane; fiş defteri ve WhatsApp'la çalışan işletmeler."
    },
    problem: {
        title: 'Sorun',
        items: ['Sipariş fişleri kâğıtta, teslim tarihi akılda.', 'Kimin ne kadar borcu var belli değil.', 'Ay sonu ciro ve en çok yapılan iş görünmüyor.']
    },
    built: {
        title: 'Ne yapar',
        items: [
            { title: 'Sipariş alma ve durum takibi', description: 'Yıkamada, teslim edilecek, serviste, teslim edildi; sipariş numarası ya da barkodla arama.' },
            { title: 'Müşteri kartı', description: 'Ad, telefon veya müşteri numarasıyla arama; müşteri türleri, bölgeler ve bakiye.' },
            { title: 'Tahsilat ve borç takibi', description: 'Nakit, kart ve havale tahsilatı; açık alacak ve borçlu müşteriler.' },
            { title: 'Günlük / aylık rapor', description: 'Ciro, sipariş ve parça sayısı; gün, kategori, ürün, müşteri türü ve personele göre.' },
            { title: 'Ürün ve fiyat matrisi', description: 'Ürün tanımları ve müşteri türüne göre fiyatlar.' }
        ]
    },
    screens: [
        sysImg('kuru-temizleme', 'screen-1.webp', 1200, 800, 'Siparişler: durum sekmeleri ve barkodla arama'),
        sysImg('kuru-temizleme', 'screen-2.webp', 1200, 800, 'Müşteriler (müşteri adları ve telefonlar gizlendi)'),
        sysImg('kuru-temizleme', 'screen-3.webp', 1200, 800, 'Raporlar: ciro, tahsilat, açık alacak'),
        sysImg('kuru-temizleme', 'screen-4.webp', 1200, 800, 'Ürünler ve fiyat matrisi')
    ],
    tech: { title: 'Teknoloji', items: ['React', 'TypeScript', 'Supabase', 'PWA'] },
    faq: [
        {
            q: 'Kuru temizleme için yazılım gerekli mi?',
            a: 'Sipariş fişleri kâğıtta ve borçlar akılda tutuluyorsa evet. Kuru temizleme yazılımı siparişi, teslim durumunu, tahsilatı ve ay sonu raporunu tek yerde tutar; kimin ne kadar borcu olduğu ve ayın cirosu tek ekranda görünür.'
        },
        {
            q: 'Sipariş durumu müşteriye bildirilir mi?',
            a: 'Panelde her siparişin durumu (yıkamada, teslim edilecek, serviste, teslim edildi) izlenir. Müşteriye bildirim akışı işletmeye özel kurulumda kapsama alınır.'
        },
        {
            q: 'Birden fazla şube olur mu?',
            a: 'Prototip tek şube için kuruldu. Çok şubeli yapı, işletmeye özel kurulumda tasarlanır.'
        },
        {
            q: 'Tablet/telefonda çalışır mı?',
            a: 'Evet. Panel tarayıcıdan açılır; telefon, tablet ve bilgisayarda aynı panel.'
        },
        {
            q: 'Kendi fiş düzenimize uyarlanır mı?',
            a: 'Evet. Sistem işletmeye özel kurulur; ürün listesi, fiyatlar ve fiş düzeni işletmenin kendi düzenine göre ayarlanır.'
        }
    ],
    articles: ['kendi-yaziliminizi-yaptirmadan-once', 'excelden-sisteme-gecis'],
    cta: {
        heading: 'Benzerini sizin için kuralım.',
        subline: 'İşletmenize özel sistemi birlikte tasarlayalım.',
        primary: { label: 'TOPLANTI TALEP ET', href: CAL_COM },
        secondary: CONTACT_FORM.tr
    }
};
