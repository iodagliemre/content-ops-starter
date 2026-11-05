// PAKET-P7 G1: Contact page (EN). Translated from content/tr/contact.ts (list in RAPOR-P7.md).
import type { ContactContent } from '../contact';
import { contactChannels } from '../contact';
import { PRIVACY_PATH } from '../locale';

export const contact: ContactContent = {
    meta: {
        title: 'Contact — Doveify',
        description: 'Get in touch about a new system, app, AI or website.',
        ogImage: '/og/og-home-en.png'
    },
    heading: "Let's talk about your project.",
    subline: 'Get in touch about a new system, app, AI or website.',
    channelsLabel: 'Contact channels',
    channels: contactChannels('en', 'Email'),
    form: {
        name: 'Full name',
        phone: 'Phone',
        email: 'Email',
        business: 'Business / brand name',
        sector: 'Industry',
        sectors: ['Healthcare', 'Real estate', 'OHS / OSGB', 'Food & Restaurant', 'Retail', 'Manufacturing', 'Logistics', 'Education', 'Tourism', 'Services', 'Other'],
        service: 'What you need',
        services: [
            'Website',
            'Web / mobile app',
            'Custom AI for your business',
            'Automation (n8n / WhatsApp)',
            'Business system (CRM/ERP-like)',
            'Consulting',
            'Other'
        ],
        message: 'A few words about your project',
        selectPlaceholder: 'Select',
        consent: { before: 'I have read and accept the ', link: 'Privacy and Personal Data Information Notice', after: '.', href: PRIVACY_PATH.en },
        submit: 'SEND REQUEST →',
        sending: 'SENDING…',
        errors: {
            required: 'This field is required.',
            phone: 'Please enter a valid phone number.',
            email: 'Please enter a valid email address.',
            consent: 'Please accept the information notice to send.',
            generic: 'Your request could not be sent. Please try again or',
            rateLimited: 'Too many requests in a short time. Please try again later or',
            whatsappLink: 'message us on WhatsApp.'
        },
        success: "Your request has been received. We'll get back to you shortly.",
        successLink: 'WhatsApp: +90 542 805 08 15',
        honeypot: 'Leave this field empty'
    }
};
