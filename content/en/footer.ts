// PAKET-P6 A1: EN sözlüğü (footer). Tip ve dilden bağımsız sabitler: content/footer.ts.
import type { FooterContent } from '../footer';
import { CONTACT_LINKS, COPYRIGHT, systemLinks } from '../footer';

export const footer: FooterContent = {
    tagline: "Your business's digital solution partner.",
    locations: 'Istanbul • London',
    columns: [
        { heading: 'Systems We Built', links: systemLinks('en') },
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
};
