// PAKET-P6 A1: EN sözlüğü (footer). Tip ve dilden bağımsız sabitler: content/footer.ts.
import type { FooterContent } from '../footer';
import { CONTACT_LINKS, COPYRIGHT, systemLinks } from '../footer';
import { CONTACT_PATH, PRIVACY_PATH } from '../locale';

export const footer: FooterContent = {
    tagline: "Your business's digital solution partner.",
    locations: 'Istanbul • London',
    columns: [
        { heading: 'Systems We Built', links: systemLinks('en') },
        {
            heading: 'DOVEIFY', // brand name: not 'Doveify', or Turkish uppercase renders it 'DOVEİFY'
            links: [
                { label: 'Web Factory', href: 'https://web.doveify.io', external: true },
                { label: 'Digital Transformation', href: '/en/#donusum' },
                { label: 'Ownership', href: '/en/#sahiplik' },
                { label: 'Work', href: '/en/#calismalar' }
            ]
        },
        { heading: 'Contact', links: [{ label: 'Contact form', href: CONTACT_PATH.en }, ...CONTACT_LINKS] } // P7 G3
    ],
    copyright: COPYRIGHT,
    privacy: { label: 'Privacy Policy', href: PRIVACY_PATH.en } // P7 G2
};
