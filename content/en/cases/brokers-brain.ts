// PAKET-P6 B3: Broker's Brain case page (EN). Translated from content/tr/cases/brokers-brain.ts; several lines
// come from the old English page (_legacy/content/pages/brokers-brain.md) — list in RAPOR-P6.md.
import type { CaseContent } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const brokersBrain: CaseContent = {
    slug: 'brokers-brain',
    eyebrow: 'SYSTEM WE BUILT',
    name: "Broker's Brain",
    definition: 'WhatsApp lead management for real estate agencies: collects incoming leads, qualifies them with AI, routes them to the right broker.',
    image: { src: '/products/brokers-brain.webp', width: 1200, height: 800, srcSet: '/products/brokers-brain.webp 1200w, /products/brokers-brain-1600.webp 1600w' }, // P7 G5
    meta: {
        title: "Broker's Brain — System We Built | Doveify",
        description: 'WhatsApp lead management for real estate agencies: collects leads, qualifies them with AI, routes them to the right broker.',
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
    tech: { title: 'Technology', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'Twilio WhatsApp API', 'Twilio Functions', 'OpenAI GPT-4o-mini + Whisper', 'Netlify'] },
    results: {
        title: 'What changed',
        items: [
            'Incoming WhatsApp leads are classified automatically and matched with the portfolio.',
            'Voice messages are transcribed with Whisper and answered in the same flow.',
            'Follow-up delay drops to minutes; no extra staff needed.'
        ]
    },
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
