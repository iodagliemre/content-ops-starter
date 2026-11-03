/**
 * PAKET-P4-SAHIPLIK-FINAL G5. Metin ve linkler brief'ten (Emre onaylı). Ünvan brief'teki haliyle
 * "DOVEIFYIO AI SOLUTIONS LTD." (content/site.ts'teki iki varyantlı not bununla kapandı).
 */

export type FooterLink = { label: string; href: string; external?: boolean };

export const footerContent = {
    tagline: 'Dijital çözüm ortağınız.',
    locations: 'İstanbul • London',
    columns: [
        {
            heading: 'Ürünler',
            links: [
                { label: 'Clinic OS', href: '/clinic/' },
                { label: "Broker's Brain", href: '/brokers-brain/' },
                { label: 'OSGB Web', href: 'https://osgb.doveify.io', external: true },
                { label: 'TurkISG AI', href: 'https://turkisgai.doveify.io', external: true }
            ]
        },
        {
            heading: 'Doveify',
            links: [
                { label: 'Web Factory', href: 'https://web.doveify.io', external: true },
                { label: 'Dijital Dönüşüm', href: '#donusum' },
                { label: 'Sahiplik', href: '#sahiplik' },
                { label: 'Çalışmalar', href: '#calismalar' }
            ]
        },
        {
            heading: 'İletişim',
            links: [
                { label: 'emre@doveify.io', href: 'mailto:emre@doveify.io' },
                { label: '+90 542 805 08 15', href: 'tel:+905428050815' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/company/doveify', external: true },
                { label: 'Instagram', href: 'https://instagram.com/doveify.io', external: true }
            ]
        }
    ] as Array<{ heading: string; links: FooterLink[] }>,
    copyright: '© 2026 DOVEIFYIO AI SOLUTIONS LTD.',
    privacy: { label: 'Gizlilik Politikası', href: '/privacy/' }
};
