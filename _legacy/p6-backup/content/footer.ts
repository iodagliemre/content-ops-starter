/**
 * PAKET-P4-SAHIPLIK-FINAL G5. Metin ve linkler brief'ten (Emre onaylı). Ünvan brief'teki haliyle
 * "DOVEIFYIO AI SOLUTIONS LTD." (content/site.ts'teki iki varyantlı not bununla kapandı).
 * PAKET-P5-SEO-META-DIL G2: `{ tr, en }`. EN tagline, "Istanbul • London" ve "Privacy Policy" mevcut
 * siteden; kolon başlıkları ve bölüm linkleri yeni çeviri.
 */
import type { Localized } from './locale';

export type FooterLink = { label: string; href: string; external?: boolean };

type FooterContent = {
    tagline: string;
    locations: string;
    columns: Array<{ heading: string; links: FooterLink[] }>;
    copyright: string;
    privacy: { label: string; href: string };
};

const SYSTEM_LINKS: FooterLink[] = [
    { label: 'Clinic OS', href: '/clinic/' },
    { label: "Broker's Brain", href: '/brokers-brain/' },
    { label: 'OSGB Web', href: 'https://osgb.doveify.io', external: true },
    { label: 'TurkISG AI', href: 'https://turkisgai.doveify.io', external: true }
];

const CONTACT_LINKS: FooterLink[] = [
    { label: 'emre@doveify.io', href: 'mailto:emre@doveify.io' },
    { label: '+90 542 805 08 15', href: 'tel:+905428050815' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/company/doveify', external: true },
    { label: 'Instagram', href: 'https://instagram.com/doveify.io', external: true }
];

const COPYRIGHT = '© 2026 DOVEIFYIO AI SOLUTIONS LTD.';

export const footerContent: Localized<FooterContent> = {
    tr: {
        tagline: 'Dijital çözüm ortağınız.',
        locations: 'İstanbul • London',
        columns: [
            { heading: 'Kurduğumuz Sistemler', links: SYSTEM_LINKS },
            {
                heading: 'DOVEIFY', // brand name: not 'Doveify', or Turkish uppercase renders it 'DOVEİFY'
                links: [
                    { label: 'Web Factory', href: 'https://web.doveify.io', external: true },
                    { label: 'Dijital Dönüşüm', href: '#donusum' },
                    { label: 'Sahiplik', href: '#sahiplik' },
                    { label: 'Çalışmalar', href: '#calismalar' }
                ]
            },
            { heading: 'İletişim', links: CONTACT_LINKS }
        ],
        copyright: COPYRIGHT,
        privacy: { label: 'Gizlilik Politikası', href: '/privacy/' }
    },
    en: {
        tagline: "Your business's digital solution partner.",
        locations: 'Istanbul • London',
        columns: [
            { heading: 'Systems We Built', links: SYSTEM_LINKS },
            {
                heading: 'DOVEIFY', // brand name: not 'Doveify', or Turkish uppercase renders it 'DOVEİFY'
                links: [
                    { label: 'Web Factory', href: 'https://web.doveify.io', external: true },
                    { label: 'Digital Transformation', href: '#donusum' },
                    { label: 'Ownership', href: '#sahiplik' },
                    { label: 'Work', href: '#calismalar' }
                ]
            },
            { heading: 'Contact', links: CONTACT_LINKS }
        ],
        copyright: COPYRIGHT,
        privacy: { label: 'Privacy Policy', href: '/privacy/' }
    }
};
