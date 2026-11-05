// PAKET-P6 A1: TR sözlüğü (footer). Tip ve dilden bağımsız sabitler: content/footer.ts.
import type { FooterContent } from '../footer';
import { CONTACT_LINKS, COPYRIGHT, systemLinks } from '../footer';

export const footer: FooterContent = {
    tagline: 'Dijital çözüm ortağınız.',
    locations: 'İstanbul • London',
    columns: [
        { heading: 'Kurduğumuz Sistemler', links: systemLinks('tr') },
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
};
