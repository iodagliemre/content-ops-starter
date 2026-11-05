/**
 * PAKET-P7 G1/G3. İletişim sayfası + WhatsApp yüzen buton. Numaralar, e-posta, Instagram ve WhatsApp
 * mesaj metni brief'ten (Emre). Form etiketleri, sektör ve çalışma listeleri brief'ten aynen; hata/durum
 * mikro metinleri ve EN çeviriler yeni (RAPOR-P7.md'de listeli).
 */
import type { Locale } from './locale';

export const WHATSAPP_NUMBER = '905428050815';
/** Brief: `https://wa.me/905428050815?text=Merhaba, Doveify hakkında bilgi almak istiyorum.` */
export const WHATSAPP_MESSAGE: Record<Locale, string> = {
    tr: 'Merhaba, Doveify hakkında bilgi almak istiyorum.',
    en: "Hello, I'd like to learn more about Doveify."
};
export const whatsappHref = (locale: Locale) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE[locale])}`;

export type ContactChannelKind = 'whatsapp' | 'email' | 'instagram';
export type ContactChannel = { id: string; kind: ContactChannelKind; label: string; value: string; href: string; external: boolean };

export const contactChannels = (locale: Locale, emailLabel: string): ContactChannel[] => [
    { id: 'whatsapp', kind: 'whatsapp', label: 'WhatsApp', value: '0542 805 08 15', href: whatsappHref(locale), external: true },
    { id: 'whatsapp-2', kind: 'whatsapp', label: 'WhatsApp', value: '0553 770 65 50', href: 'https://wa.me/905537706550', external: true },
    { id: 'email', kind: 'email', label: emailLabel, value: 'emre@doveify.io', href: 'mailto:emre@doveify.io', external: false },
    { id: 'instagram', kind: 'instagram', label: 'Instagram', value: '@doveify.io', href: 'https://instagram.com/doveify.io', external: true }
];

/** Floating button copy; lives in the page dictionary because the button is on every V2 page. */
export type WhatsAppButtonContent = { label: string };

export type ContactFormContent = {
    name: string;
    phone: string;
    email: string;
    business: string;
    sector: string;
    sectors: string[];
    service: string;
    services: string[];
    message: string;
    selectPlaceholder: string;
    consent: { before: string; link: string; after: string; href: string };
    submit: string;
    sending: string;
    errors: { required: string; phone: string; email: string; consent: string; generic: string; rateLimited: string; whatsappLink: string };
    success: string;
    successLink: string;
};

export type ContactContent = {
    meta: { title: string; description: string; ogImage: string };
    heading: string;
    subline: string;
    channelsLabel: string;
    channels: ContactChannel[];
    form: ContactFormContent;
};

/** Form name and honeypot field shared by the form and the API route. */
export const CONTACT_FORM_NAME = 'contact';
// P7 Resend fix: was 'company_website' — Chrome autofill matched "company" and filled the trap. Keep this name
// free of autofill keywords (name, company, organisation, email, phone, url, website, address…).
export const HONEYPOT_FIELD = 'dv_hp_7f3';
