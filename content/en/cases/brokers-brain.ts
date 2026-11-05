// PAKET-P6 B3: Broker's Brain case page (EN). Translated from content/tr/cases/brokers-brain.ts; several lines
// come from the old English page (_legacy/content/pages/brokers-brain.md) — list in RAPOR-P6.md.
import type { CaseContent } from '../../cases';
import { EMRE_SONUC, EMRE_STACK } from '../../cases';
import { CAL_COM, EMAIL } from '../../finalCta';

export const brokersBrain: CaseContent = {
    slug: 'brokers-brain',
    eyebrow: 'SYSTEM WE BUILT',
    name: "Broker's Brain",
    definition: 'WhatsApp lead management for real estate agencies: collects incoming leads, qualifies them with AI, routes them to the right broker.',
    image: { src: '/products/brokers-brain.webp', width: 640, height: 270 },
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
    tech: { title: 'Technology', items: ['WhatsApp Business API', EMRE_STACK] },
    results: {
        title: 'Outcome',
        items: ['Lead capture, qualification and routing now run as one flow.', `${EMRE_SONUC} — change in response time`, `${EMRE_SONUC} — time to set up`]
    },
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'GET IN TOUCH', href: CAL_COM },
        secondary: EMAIL
    }
};
