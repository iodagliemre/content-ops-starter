// PAKET-P7 G1: İletişim sayfası (TR). Başlık, alt metin, alanlar, listeler, KVKK onayı, buton ve başarı
// metni brief'ten aynen; hata/durum mikro metinleri yeni (RAPOR-P7.md).
import type { ContactContent } from '../contact';
import { contactChannels } from '../contact';
import { PRIVACY_PATH } from '../locale';

export const contact: ContactContent = {
    meta: {
        title: 'İletişim — Doveify',
        description: 'Yeni bir sistem, uygulama, yapay zekâ veya web sitesi için bize ulaşın.',
        ogImage: '/og/og-home.png'
    },
    heading: 'Projenizi konuşalım.',
    subline: 'Yeni bir sistem, uygulama, yapay zekâ veya web sitesi için bize ulaşın.',
    channelsLabel: 'İletişim kanalları',
    channels: contactChannels('tr', 'E-posta'),
    form: {
        name: 'Ad Soyad',
        phone: 'Telefon',
        email: 'E-posta',
        business: 'İşletme / Marka adı',
        sector: 'Sektör',
        sectors: ['Sağlık', 'Gayrimenkul', 'İSG/OSGB', 'Gıda & Restoran', 'Perakende', 'Üretim', 'Lojistik', 'Eğitim', 'Turizm', 'Hizmet', 'Diğer'],
        service: 'İstenen çalışma',
        services: [
            'Web sitesi',
            'Web / mobil uygulama',
            'İşletmeye özel yapay zekâ',
            'Otomasyon (n8n / WhatsApp)',
            'Kurumsal sistem (CRM/ERP benzeri)',
            'Danışmanlık',
            'Diğer'
        ],
        message: 'Projenizle ilgili kısaca bilgi',
        selectPlaceholder: 'Seçin',
        consent: {
            before: '',
            link: 'Gizlilik ve Kişisel Veriler Aydınlatma Metni',
            after: "'ni okudum, kabul ediyorum.",
            href: PRIVACY_PATH.tr
        },
        submit: 'TALEBİ GÖNDER →',
        sending: 'GÖNDERİLİYOR…',
        errors: {
            required: 'Bu alan zorunlu.',
            phone: 'Geçerli bir telefon numarası yazın.',
            email: 'Geçerli bir e-posta adresi yazın.',
            consent: 'Göndermek için aydınlatma metnini onaylayın.',
            generic: 'Talep gönderilemedi. Lütfen tekrar deneyin ya da',
            rateLimited: 'Kısa sürede çok fazla talep gönderildi. Lütfen biraz sonra tekrar deneyin ya da',
            whatsappLink: "WhatsApp'tan yazın."
        },
        success: 'Talebiniz alındı. En kısa sürede dönüş yapacağız.',
        successLink: 'WhatsApp: 0542 805 08 15'
    }
};
