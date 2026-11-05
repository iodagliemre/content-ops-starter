// PAKET-P6 A1: EN sözlüğü (products). Tip ve dilden bağımsız sabitler: content/products.ts.
import type { ProductsContent } from '../products';
import { item } from '../products';

export const products: ProductsContent = {
    section: {
        eyebrow: 'SYSTEMS WE BUILT',
        heading: 'Digital systems that move your business forward.',
        description: 'Industry-specific systems we built: each one designed from scratch for a single business, and owned by it.',
        cardCta: 'VIEW SYSTEM'
    },
    items: [
        item('en', 'brokers-brain', "BROKER'S BRAIN", 'Smart tracking and analytics platform for real estate professionals.'),
        item('en', 'clinic-os', 'CLINIC OS', 'Integrated management system for healthcare organizations.'),
        item('en', 'osgb-web', 'OSGB WEB', 'The platform that digitizes your occupational health and safety work.'),
        item('en', 'turkisg-ai', 'TURKISG AI', 'AI assistant for occupational health and safety professionals.')
    ],
    prevLabel: 'Previous system',
    nextLabel: 'Next system'
};
