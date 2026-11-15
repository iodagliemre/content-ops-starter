// PAKET-P8 G3 3.3: Real Estate Office Panel intro page (EN). Translated from content/tr/cases/emlak-ofis-paneli.ts (RAPOR-P8).
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const emlakOfisPaneli: CaseContent = {
    slug: 'emlak-ofis-paneli',
    eyebrow: 'SYSTEM WE BUILT',
    name: 'Real Estate Office Panel',
    definition: 'Portfolio, client and appointment tracking for real estate offices with 1–10 agents — the same panel on phone and computer.',
    status: 'live',
    liveUrl: 'https://emlak.doveify.io/giris',
    image: sysImg('emlak-ofis-paneli', 'hero.webp', 1358, 905, 'Real Estate Office Panel — Today screen'),
    meta: {
        title: 'Real Estate Office Panel — Real Estate Software | Doveify',
        description: 'Real estate software: portfolio, client and appointment tracking for offices with 1–10 agents. Excel import, the same panel on phone and computer.',
        ogImage: '/og/emlak-ofis-paneli-en.png'
    },
    forWhom: {
        title: "Who it's for",
        body: 'Small and medium real estate offices; teams whose portfolio is in Excel, clients in WhatsApp and appointments in a notebook.'
    },
    problem: {
        title: 'The problem',
        items: [
            "The owner's number is in WhatsApp, the last meeting note in a notebook, the portfolio list in Excel.",
            'Viewing times get lost in between.',
            'At month end, records are opened one by one to answer "how many did we sell, how many did we rent?".'
        ]
    },
    built: {
        title: 'What it does',
        items: [
            { title: 'One-step Excel import', description: 'Existing portfolio and client list in a single file; faulty rows show up in the preview.' },
            { title: 'Portfolio with photos', description: 'Cover photo, owner, interested contacts, dated notes and the sale/rental record in the same entry.' },
            { title: 'Calendar and reminders', description: 'Calls, meetings, viewings; reminders while the panel is open.' },
            { title: 'Today screen', description: "Today's appointments, overdue items, sold/rented this month." },
            { title: 'One number, one contact card', description: 'The same person can be both owner and client; call or open WhatsApp from the card.' },
            { title: 'Office records kept apart', description: 'Other offices cannot see them.' }
        ]
    },
    screens: [
        sysImg('emlak-ofis-paneli', 'screen-1.webp', 1200, 800, "Today screen: the day's appointments, reminders, monthly sales and rentals"),
        sysImg('emlak-ofis-paneli', 'screen-2.webp', 1200, 800, 'Weekly calendar'),
        sysImg('emlak-ofis-paneli', 'screen-3.webp', 1200, 800, 'Mobile portfolio detail')
    ],
    tech: { title: 'Technology', items: ['React', 'TypeScript', 'Supabase', 'Excel import', 'PWA'] },
    faq: [
        {
            q: 'What does real estate office software do?',
            a: "It brings the portfolio, clients and appointments into one place. In the Real Estate Office Panel the owner, interested contacts, dated meeting notes and viewing appointments sit in the same record; the Today screen shows the day's work and the month's sales and rentals."
        },
        {
            q: 'Can I import my portfolio from Excel?',
            a: 'Yes. The existing portfolio and client list are imported with a single Excel file; the preview shows faulty rows and why, and the import is all or nothing. The demo uses a fixed template; in your own setup the template is adapted to your file.'
        },
        { q: 'Can it be used on a phone?', a: 'Yes. The panel opens in the browser, nothing to install; the same panel on phone and computer.' },
        { q: 'Can other offices see my records?', a: "No. Each office's data is kept separate, and this is tested at every layer of the system." },
        { q: 'Is there a demo?', a: 'Yes: emlak.doveify.io/giris. The demo opens with sample data, so you can try the panel right away.' }
    ],
    articles: ['excelden-sisteme-gecis', 'kendi-yaziliminizi-yaptirmadan-once'],
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
