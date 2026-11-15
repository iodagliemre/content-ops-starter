// PAKET-P8 G4: Your Own Software (EN). Translated from content/tr/ownSoftware.ts; manifesto = homepage EN statement.
import type { OwnSoftwareContent } from '../ownSoftware';
import { CAL_COM, CONTACT_FORM } from '../finalCta';
import { contactForWork } from '../locale';
import { STATEMENT } from '../ownership';

export const ownSoftware: OwnSoftwareContent = {
    meta: {
        title: 'Get Your Own Software Built — Custom Software | Doveify',
        description: 'Custom software development: a system your business owns instead of rented tools. The code, the data and the infrastructure are yours.',
        ogImage: '/og/kendi-yaziliminiz-en.png'
    },
    eyebrow: 'YOUR OWN SOFTWARE',
    title: 'Get your own software built.',
    subline: 'A system your business owns, instead of rented tools.',
    primary: { label: 'BOOK A MEETING', href: CAL_COM },
    secondary: { label: CONTACT_FORM.en.label, href: contactForWork('en', 'kendi-yaziliminiz') },
    problem: {
        title: 'Critical processes run on rented tools',
        lead: 'Businesses hand their most critical processes to SaaS tools they rent.',
        items: [
            { label: 'Data', text: "On someone else's server." },
            { label: 'Institutional memory', text: "In someone else's product." },
            { label: 'Control', text: "In someone else's hands." }
        ]
    },
    manifesto: STATEMENT,
    comparison: {
        title: 'SaaS vs Doveify',
        columns: [
            { heading: 'SAAS — RENTING', rows: ['Fast, standard digitalisation', 'Low starting cost', 'Limited customisation', 'Short-term use'] },
            { heading: 'DOVEIFY — OWNING', rows: ['Full control of critical processes', 'Data sovereignty', 'Memory and roadmap stay in the company', 'Long-term investment'] }
        ]
    },
    process: { title: 'How we work', steps: ['Discovery call', 'Scope and quote', 'Setup and training', 'Maintenance and development'] },
    numbers: {
        title: 'Doveify in numbers',
        items: [
            { value: '6', label: 'systems we built' },
            { value: '6+', label: 'projects delivered for brands' },
            { value: '3', label: 'markets: Türkiye, United Kingdom, Gulf' },
            { value: '100%', label: 'ownership' },
            { value: '15', label: 'years of industry experience' }
        ]
    },
    path: { title: 'Step by step', steps: ['First the website', 'Then automation', "Then an AI that learns the business's data"] },
    systems: { title: 'Systems we built' },
    faq: {
        title: 'Frequently asked questions',
        items: [
            {
                q: 'How long does it take to have software built?',
                a: 'Setup takes weeks, not days. It depends on the scope; when you see the first working version and how weekly progress is shared are put on a schedule from the start.'
            },
            {
                q: 'Do we own the source code?',
                a: 'Yes. The code, the data and the infrastructure are yours; the system runs under your own logo and your own address. If the provider disappeared tomorrow, the system would keep running.'
            },
            {
                q: 'Why custom software instead of a ready-made program?',
                a: 'When the process is what sets you apart, when data sovereignty is a must, or when institutional memory has to stay in your own system. With custom software the program fits the workflow and the data stays on your own infrastructure. For a standard process, ready-made software can be the right tool.'
            },
            {
                q: 'How does maintenance work?',
                a: 'You pay once; after that it is maintenance and development, not rent. The scope of maintenance is agreed at the start. You choose a partner for maintenance; you are not bound to one.'
            },
            {
                q: 'Does it make sense for a small business?',
                a: 'Yes, if the process is critical. A single-branch dry cleaner, a real estate office with 5 agents, a clinic with 2 doctors — we have built systems for all of them. It is not the scale that decides, but how important the process is.'
            }
        ]
    },
    related: 'Related reading',
    cta: {
        heading: "Let's turn your idea into reality.",
        subline: "Let's talk about your project and grow it together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
