// PAKET-P8 G3 3.6: TurkİSG AI intro page (EN). Translated from content/tr/cases/turkisg-ai.ts (RAPOR-P8).
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const turkisgAi: CaseContent = {
    slug: 'turkisg-ai',
    eyebrow: 'SYSTEM WE BUILT',
    name: 'TurkİSG AI',
    definition:
        'An occupational health and safety assistant trained on Turkish regulations: regulation Q&A, hazard analysis and corrective action reports from photos, practice exams, checklists.',
    status: 'live',
    liveUrl: 'https://turkisgai.doveify.io',
    extraLink: { label: 'TRY IT FREE →', href: 'https://app.turkisgai.doveify.io' },
    image: sysImg('turkisg-ai', 'hero.webp', 843, 562, 'TurkİSG AI — hazard analysis from a photo'),
    meta: {
        title: 'TurkİSG AI — OHS AI Assistant | Doveify',
        description: 'OHS AI assistant: regulation Q&A, hazard analysis and corrective action reports from photos, practice exams. Trained on Turkish OHS regulations.',
        ogImage: '/og/turkisg-ai-en.png'
    },
    forWhom: {
        title: "Who it's for",
        body: 'Occupational safety specialists, workplace doctors, OSGBs and candidates preparing for the certification exams.'
    },
    problem: {
        title: 'The problem',
        items: [
            'Regulations are scattered; finding the right article takes time.',
            'Writing a report from a site photo takes hours.',
            'There is no up-to-date question pool for exam preparation.'
        ]
    },
    built: {
        title: 'What it does',
        items: [
            { title: 'Regulation Q&A', description: 'Law No. 6331, regulations, ministry (ÇSGB) guides.' },
            { title: 'Hazard analysis and corrective action (DÖF) report from a photo' },
            { title: '2,700+ ÖSYM-style practice questions' },
            { title: 'Checklists' },
            { title: 'Cites its sources' }
        ]
    },
    screens: [
        sysImg('turkisg-ai', 'screen-1.webp', 844, 563, 'OHS assistant: a regulation question'),
        sysImg('turkisg-ai', 'screen-2.webp', 843, 562, 'Photo analysis: hazards found'),
        sysImg('turkisg-ai', 'screen-3.webp', 858, 572, 'Site inspection and checklists'),
        sysImg('turkisg-ai', 'screen-4.webp', 846, 564, 'Practice exam')
    ],
    stats: [
        { value: '91+', label: 'regulation documents' },
        { value: '89+', label: 'ministry guides' },
        { value: '2,700+', label: 'exam questions' },
        { value: '78+', label: 'checklists' }
    ],
    tech: { title: 'Technology', items: ['RAG', 'OpenAI', 'Supabase', 'React'] },
    faq: [
        {
            q: 'What does an OHS AI assistant do?',
            a: 'It answers regulation questions with sources, produces a hazard analysis and a corrective action report from a site photo, and offers practice exams and checklists. TurkİSG AI is an occupational health and safety assistant trained on Turkish regulations.'
        },
        {
            q: 'Which regulations does it know?',
            a: 'Law No. 6331, the related regulations and ministry (ÇSGB) guides: more than 91 regulation documents and more than 89 ministry guides.'
        },
        {
            q: 'How does photo analysis work?',
            a: 'You upload a photo taken on site; the assistant identifies the hazard, sets the risk level and prepares the corrective action report.'
        },
        {
            q: 'What format are the exam questions in?',
            a: 'ÖSYM-style practice questions; the pool has more than 2,700. You can take a classic practice exam or one on a specific topic.'
        },
        { q: 'Is there a dedicated setup for organisations?', a: "Yes. It is set up for the organisation, with the organisation's own data." }
    ],
    articles: ['isletmenin-kendi-yapay-zekasi', 'araclar-kiralanir-bilgi-kiralanmaz'],
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
