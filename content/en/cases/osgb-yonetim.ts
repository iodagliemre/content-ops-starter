// PAKET-P8 G3 3.4: OSGB Management intro page (EN). Translated from content/tr/cases/osgb-yonetim.ts (RAPOR-P8).
// OSGB = Turkish joint occupational health and safety unit; kept as a name, explained in the definition.
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const osgbYonetim: CaseContent = {
    slug: 'osgb-yonetim',
    eyebrow: 'SYSTEM WE BUILT',
    name: 'OSGB Management',
    definition:
        'One panel instead of spreadsheets for OSGBs (occupational health and safety service providers): companies, documents, assignment planning, performance, satisfaction surveys and finance.',
    status: 'live',
    liveUrl: 'https://osgb.doveify.io',
    image: sysImg('osgb-yonetim', 'hero.webp', 1494, 996, 'OSGB Management — dashboard'),
    meta: {
        title: 'OSGB Management — OHS Service Provider Software | Doveify',
        description: 'OSGB software: companies, documents, İSG Katip assignment planning, performance, surveys and finance in one panel instead of spreadsheets.',
        ogImage: '/og/osgb-yonetim-en.png'
    },
    forWhom: {
        title: "Who it's for",
        body: 'Joint occupational health and safety units (OSGBs); teams that manage client companies and professional assignments in Excel.'
    },
    problem: {
        title: 'The problem',
        items: [
            'Company, specialist and doctor assignments are spread across files.',
            'İSG Katip planning is done by hand.',
            'Companies whose documents have expired slip through.'
        ]
    },
    built: {
        title: 'What it does',
        items: [
            { title: 'Company management', description: 'Companies in one list with registry, hazard class and assignment details; filter, search, bulk actions.' },
            { title: 'Document tracking and expiry alerts', description: 'Unlimited document columns; dates are coloured: current, overdue, pending. Completion rate per company.' },
            { title: 'İSG Katip assignment planning', description: "The ministry's Excel is imported and companies are matched automatically; hazard class and certificate class are checked." },
            { title: 'Professional workload', description: 'Doctor and specialist assignments on a calendar; capacity, monthly minutes and workload in one view.' },
            { title: 'Satisfaction survey', description: 'A 5-question survey by e-mail in one click; the score is calculated and feeds the performance review.' },
            { title: 'Finance / commercial tracking', description: 'Contracts, invoices, payment tracking and quotes.' }
        ]
    },
    screens: [
        sysImg('osgb-yonetim', 'screen-1.webp', 1200, 800, 'İSG Katip assignment planning'),
        sysImg('osgb-yonetim', 'screen-2.webp', 1200, 800, 'Document tracking with date-based colours'),
        sysImg('osgb-yonetim', 'screen-3.webp', 1200, 800, 'Performance criteria')
    ],
    stats: [
        { value: '12+', label: 'modules' },
        { value: 'Unlimited', label: 'companies' },
        { value: '2,700+', label: 'OSGBs in the market' }
    ],
    tech: { title: 'Technology', items: ['React', 'TypeScript', 'Supabase', 'Resend'] },
    faq: [
        {
            q: 'What does OSGB software cover?',
            a: 'Company management, document tracking, İSG Katip-compatible assignment planning, a professionals calendar, performance management, customer satisfaction surveys and invoice, contract and quote tracking. OSGB Management brings them into one panel instead of spreadsheets.'
        },
        {
            q: 'Does it work with İSG Katip?',
            a: "Yes. The İSG Katip Excel downloaded from the ministry is imported and companies are matched automatically; new, updated and deleted records are shown separately. Assignment planning checks hazard class against certificate class."
        },
        { q: 'How many companies can be added?', a: 'Unlimited.' },
        {
            q: "Is the data on the OSGB's own infrastructure?",
            a: "Each OSGB's data is kept separate. In a dedicated setup the system is installed under the OSGB's own logo and address; the code, the data and the infrastructure belong to the OSGB."
        },
        {
            q: 'Can our existing spreadsheets be imported?',
            a: 'Yes. The İSG Katip Excel is imported in one step; assignment planning has bulk Excel import and export, and document tracking exports to Excel.'
        }
    ],
    articles: ['excelden-sisteme-gecis', 'saas-mi-ozel-yazilim-mi'],
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
