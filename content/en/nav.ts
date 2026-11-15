// PAKET-P6 A1: EN sözlüğü (nav). Tip ve dilden bağımsız sabitler: content/nav.ts.
import type { NavContent } from '../nav';

export const nav: NavContent = {
    primary: ['Systems', 'Web Factory', 'Digital Transformation', 'Ownership', 'Work'],
    cta: 'Book a Meeting',
    kb: 'Knowledge', // P8 ek: kısa etiket (Emre 15.11.2026) — 'Knowledge Base' 1280'de sığmıyordu; sayfa adı aynı
    contact: 'Contact',
    navLabel: 'Main menu',
    openMenu: 'Open menu',
    closeMenu: 'Close menu',
    languageLabel: 'Language'
};
