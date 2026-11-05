// PAKET-P6 B3: Clinic OS case page (EN). Translated from content/tr/cases/clinic-os.ts (list in RAPOR-P6.md).
import type { CaseContent } from '../../cases';
import { CAL_COM, CONTACT_FORM } from '../../finalCta';

export const clinicOs: CaseContent = {
    slug: 'clinic-os',
    eyebrow: 'SYSTEM WE BUILT',
    name: 'Clinic OS',
    definition: 'An integrated management system for healthcare organizations: appointments, patient records, billing and WhatsApp in one place.',
    image: { src: '/products/clinic-os.webp', width: 640, height: 270 },
    meta: {
        title: 'Clinic OS — System We Built | Doveify',
        description: 'An integrated management system for healthcare organizations: appointments, patient records, billing and WhatsApp in one place.',
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
    tech: { title: 'Technology', items: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Supabase', 'n8n', 'OpenAI GPT-4o-mini', 'WhatsApp Business Cloud API', 'Cloudflare'] },
    results: {
        title: 'What changed',
        items: [
            'Appointment reminders and confirmations run automatically on WhatsApp; less phone load on reception.',
            'Patient records, treatment templates and billing on one screen.',
            "Data stays on the clinic's own infrastructure; the system belongs to the clinic."
        ]
    },
    cta: {
        heading: "Let's build yours.",
        subline: "Let's design a system made for your business, together.",
        primary: { label: 'BOOK A MEETING', href: CAL_COM },
        secondary: CONTACT_FORM.en
    }
};
