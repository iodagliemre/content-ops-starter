// PAKET-P6 B3: Broker's Brain case page (EN). Translated from content/tr/cases/brokers-brain.ts; several lines
// come from the old English page (_legacy/content/pages/brokers-brain.md) — list in RAPOR-P6.md.
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const brokersBrain: CaseContent = {
    slug: 'brokers-brain',
    eyebrow: 'SYSTEM WE BUILT',
    name: "Broker's Brain",
    definition: 'WhatsApp lead management for real estate agencies: collects incoming leads, qualifies them with AI, routes them to the right broker.',
    status: 'live',
    liveUrl: 'https://brokerbrain.doveify.io', // PAKET-P8 G1
    image: { ...sysImg('brokers-brain', 'hero.webp', 1600, 1067, "Broker's Brain — lead dashboard"), srcSet: '/products/brokers-brain.webp 1200w, /systems/brokers-brain/hero.webp 1600w' }, // PAKET-P8 G7
    meta: {
        title: 'Broker\'s Brain — Real Estate WhatsApp CRM | Doveify', // PAKET-P8 G2
        description: 'Real estate CRM: collects WhatsApp leads, qualifies them with AI and routes them to the right broker. WhatsApp automation for real estate agencies.',
        ogImage: '/og/brokers-brain-en.png'
    },
    forWhom: {
        title: "Who it's for",
        body: 'Small to medium real estate agencies (11–50 employees) that handle WhatsApp leads manually. Built for teams that lose deals to slow responses and scattered follow-ups.'
    },
    problem: {
        title: 'The problem',
        items: [
            'Leads from portals, WhatsApp and the website are scattered across places.',
            'Slow WhatsApp responses mean lost deals.',
            "Follow-up is manual; nobody can tell which lead is hot."
        ]
    },
    built: {
        title: 'What we built',
        items: [
            { title: 'Lead capture', description: 'Leads from portals, WhatsApp and the website, all in one place.' },
            { title: 'AI qualification', description: 'Asks budget, location and timeline; scores each lead hot, warm or cold.' },
            { title: 'Instant routing', description: 'Hot leads go to the right broker instantly, with full context.' },
            { title: 'WhatsApp assistant', description: 'An AI assistant configured for the agency, with ready-made conversation flows.' },
            { title: 'Live dashboard', description: 'Every lead and conversation tracked in one place.' },
            { title: 'Full data ownership', description: 'The data belongs to the agency; export everything anytime.' }
        ]
    },
    screens: [
        sysImg('brokers-brain', 'screen-1.webp', 1200, 800, "Broker's Brain — live WhatsApp conversations"),
        sysImg('brokers-brain', 'screen-2.webp', 1200, 800, "Broker's Brain — lead list and statuses"),
        sysImg('brokers-brain', 'screen-3.webp', 1200, 800, "Broker's Brain — broker performance"),
    ],
    tech: { title: 'Technology', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Twilio WhatsApp API', 'Twilio Functions', 'OpenAI GPT-4o-mini + Whisper', 'Netlify'] },
    results: {
        title: 'What changed',
        items: [
            'Incoming WhatsApp leads are classified automatically and matched with the portfolio.',
            'Voice messages are transcribed with Whisper and answered in the same flow.',
            'Follow-up delay drops to minutes; no extra staff needed.'
        ]
    },
    // PAKET-P8 G3: SSS (FAQPage JSON-LD). Cevap kaynakları RAPOR-P8'de.
    faq: [
        {
            q: 'What is a CRM for a real estate agency?',
            a: 'A system that keeps leads, conversations and follow-ups in one place. Broker\'s Brain collects leads from portals, WhatsApp and the website, qualifies them with AI and routes them to the right broker.'
        },
        {
            q: 'How are WhatsApp leads recorded?',
            a: 'An incoming message becomes a lead record automatically. The AI asks about budget, location and timeline, and scores the lead hot, warm or cold.'
        },
        {
            q: 'Are voice messages understood?',
            a: 'Yes. Voice messages are transcribed with Whisper and answered in the same flow.'
        },
        {
            q: 'How does portfolio matching work?',
            a: 'Incoming WhatsApp leads are classified automatically; the budget, location and timeline the AI collects are matched with the agency\'s portfolio.'
        },
        {
            q: 'How many brokers can use it?',
            a: 'The system is built for each agency, so the broker setup follows the agency; hot leads reach the right broker instantly, with full context.'
        },
    ],
    articles: ['isletmenin-kendi-yapay-zekasi', 'saas-mi-ozel-yazilim-mi'],
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
