// PAKET-P8 G3 3.5: Dry Cleaning Panel intro page (EN). Translated from content/tr/cases/kuru-temizleme.ts (RAPOR-P8).
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const kuruTemizleme: CaseContent = {
    slug: 'kuru-temizleme',
    eyebrow: 'SYSTEM WE BUILT',
    name: 'Dry Cleaning Panel',
    definition: 'Order, customer, payment and report management for dry cleaners — one panel that works on the phone.',
    status: 'prototype',
    liveUrl: 'https://kurutemizleme-proto.netlify.app/',
    image: sysImg('kuru-temizleme', 'hero.webp', 1328, 885, 'Dry Cleaning Panel — reports screen'),
    meta: {
        title: 'Dry Cleaning Panel — Dry Cleaning Software | Doveify',
        description: 'Dry cleaning software: orders, customers, payments and reports in one panel. A dry cleaning and laundry system, built for each business.',
        ogImage: '/og/kuru-temizleme-en.png'
    },
    forWhom: {
        title: "Who it's for",
        body: 'Single-branch dry cleaners and laundries that work with a receipt book and WhatsApp.'
    },
    problem: {
        title: 'The problem',
        items: ['Order slips are on paper, delivery dates in your head.', 'Nobody knows who owes how much.', "Month-end revenue and the most frequent jobs can't be seen."]
    },
    built: {
        title: 'What it does',
        items: [
            { title: 'Order intake and status tracking', description: 'Washing, to be delivered, in service, delivered; search by order number or barcode.' },
            { title: 'Customer card', description: 'Search by name, phone or customer number; customer types, regions and balance.' },
            { title: 'Payments and debt tracking', description: 'Cash, card and bank transfer; open receivables and customers in debt.' },
            { title: 'Daily / monthly reports', description: 'Revenue, orders and items; by day, category, product, customer type and staff.' },
            { title: 'Products and price matrix', description: 'Product definitions and prices by customer type.' }
        ]
    },
    screens: [
        sysImg('kuru-temizleme', 'screen-1.webp', 1200, 800, 'Orders: status tabs and barcode search'),
        sysImg('kuru-temizleme', 'screen-2.webp', 1200, 800, 'Customers (names and phone numbers hidden)'),
        sysImg('kuru-temizleme', 'screen-3.webp', 1200, 800, 'Reports: revenue, payments, receivables'),
        sysImg('kuru-temizleme', 'screen-4.webp', 1200, 800, 'Products and price matrix')
    ],
    tech: { title: 'Technology', items: ['React', 'TypeScript', 'Supabase', 'PWA'] },
    faq: [
        {
            q: 'Does a dry cleaner need software?',
            a: "If order slips are on paper and debts are kept in your head, yes. Dry cleaning software keeps orders, delivery status, payments and the month-end report in one place; who owes how much and the month's revenue are on one screen."
        },
        {
            q: 'Is the customer told about the order status?',
            a: 'The panel tracks every order’s status (washing, to be delivered, in service, delivered). Customer notifications are included in the business’s own setup.'
        },
        { q: 'Can it handle more than one branch?', a: 'The prototype was built for a single branch. A multi-branch structure is designed in the business’s own setup.' },
        { q: 'Does it work on a tablet or phone?', a: 'Yes. The panel opens in the browser; the same panel on phone, tablet and computer.' },
        { q: 'Can it follow our own receipt layout?', a: 'Yes. The system is built for each business; the product list, prices and receipt layout follow the business’s own way of working.' }
    ],
    articles: ['kendi-yaziliminizi-yaptirmadan-once', 'excelden-sisteme-gecis'],
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
