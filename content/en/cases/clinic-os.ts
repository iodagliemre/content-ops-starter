// PAKET-P6 B3: Clinic OS case page (EN). Translated from content/tr/cases/clinic-os.ts (list in RAPOR-P6.md).
import type { CaseContent } from '../../cases';
import { sysImg } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const clinicOs: CaseContent = {
    slug: 'clinic-os',
    eyebrow: 'SYSTEM WE BUILT',
    name: 'Clinic OS',
    definition: 'An integrated management system for healthcare organizations: appointments, patient records, billing and WhatsApp in one place.',
    status: 'live',
    liveUrl: 'https://clinic.doveify.io', // PAKET-P8 G1
    image: sysImg('clinic-os', 'hero.webp', 1596, 1064, 'Clinic OS management panel on a laptop screen'), // PAKET-P8 G7
    meta: {
        title: 'Clinic OS — Clinic Management Software | Doveify', // PAKET-P8 G2
        description: 'Clinic management software: appointments, patient records, billing and WhatsApp in one place. A clinic booking system on the clinic\'s own infrastructure.',
        ogImage: '/og/clinic-os-en.png'
    },
    forWhom: {
        title: "Who it's for",
        body: 'Clinics and healthcare organizations that work by appointment. Built for teams that manage appointments, patient files and invoices in separate tools or spreadsheets, and talk to most patients on WhatsApp.'
    },
    problem: {
        title: 'The problem',
        items: [
            'Appointments, patient records and invoices are scattered across tools and spreadsheets.',
            "Without reminders, patients miss appointments and the calendar has gaps.",
            'Questions arriving on WhatsApp go unanswered after hours and requests get lost.'
        ]
    },
    built: {
        title: 'What we built',
        items: [
            { title: 'Smart appointments', description: 'Calendar management and automatic reminders, all in one calendar.' },
            { title: 'Patient records', description: 'Digital patient files, treatment history and notes in one place.' },
            { title: 'Billing and payments', description: 'Invoicing, payment tracking and a view of revenue.' },
            { title: 'WhatsApp automation', description: 'Appointment reminders and confirmations go out on WhatsApp automatically.' },
            { title: 'AI assistant', description: 'Answers patient questions around the clock, books appointments, sorts requests.' },
            { title: 'One screen', description: 'Appointments, patients and revenue in the same view.' },
            // PAKET-P7 G6: translated from the three TR items (RAPOR-P7).
            { title: 'Clinic-specific dynamic AI assistant', description: 'Working hours, treatments, appointments.' },
            { title: 'Bring-your-own WhatsApp API', description: "The client's own number and token." },
            { title: 'Multi-tenant Postgres (Supabase)' }
        ]
    },
    screens: [
        sysImg('clinic-os', 'screen-1.webp', 1200, 800, 'Clinic OS — dashboard: appointments, patients and revenue'),
        sysImg('clinic-os', 'screen-2.webp', 1200, 800, 'Clinic OS — weekly appointment calendar'),
    ],
    tech: { title: 'Technology', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'n8n', 'OpenAI GPT-4o-mini', 'WhatsApp Business Cloud API', 'Cloudflare'] },
    results: {
        title: 'What changed',
        items: [
            'Appointment reminders and confirmations run automatically on WhatsApp; less phone load on reception.',
            'Patient records, treatment templates and billing on one screen.',
            "Data stays on the clinic's own infrastructure; the system belongs to the clinic."
        ]
    },
    // PAKET-P8 G3: SSS (FAQPage JSON-LD). Cevap kaynakları RAPOR-P8'de.
    faq: [
        {
            q: 'What is clinic management software?',
            a: 'Software that brings appointments, patient records, billing and patient communication into one system. Clinic OS puts them on a single screen; appointment reminders and confirmations go out automatically on WhatsApp.'
        },
        {
            q: 'Which clinics is Clinic OS for?',
            a: 'Clinics and healthcare organizations that work by appointment, especially teams that talk to most patients on WhatsApp. The AI assistant is set up for each clinic\'s opening hours and treatments.'
        },
        {
            q: 'Can patients book on WhatsApp?',
            a: 'Yes. The AI assistant answers WhatsApp questions at any hour and books appointments. The clinic uses its own WhatsApp number.'
        },
        {
            q: 'Where is our data kept?',
            a: 'On the clinic\'s own infrastructure. The system is installed for the clinic; the code, the data and the infrastructure belong to the clinic.'
        },
        {
            q: 'Can we bring over our existing patient records?',
            a: 'Before setup we look at the format of your current records together (Excel, or an export from the program you use); the import is planned as part of the setup.'
        },
    ],
    articles: ['araclar-kiralanir-bilgi-kiralanmaz', 'isletmenin-kendi-yapay-zekasi'],
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
