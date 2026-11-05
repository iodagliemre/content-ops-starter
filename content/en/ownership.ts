// PAKET-P6 A1: EN sözlüğü (ownership). Tip ve dilden bağımsız sabitler: content/ownership.ts.
import type { OwnershipContent } from '../ownership';
import { STATEMENT } from '../ownership';

export const ownership: OwnershipContent = {
    eyebrow: 'OWNERSHIP',
    statement: STATEMENT,
    subline: 'Real ownership in digital is the safeguard of your future.',
    columns: [
        {
            heading: 'SAAS',
            rows: [
                'Quick standard digitization',
                'Low initial cost, market test',
                'Small team, provider handles maintenance',
                'No deep customization need yet',
                'Short-term or seasonal'
            ]
        },
        {
            heading: 'DOVEIFY',
            rows: [
                'Full control in critical processes',
                'Data sovereignty: all data stays with the client',
                'Institutional memory in your own system',
                'Long-term investment, roadmap in your hands',
                'Industry-specific workflows beyond platform limits'
            ]
        }
    ],
    closing:
        'Doveify stands on the ownership side — because we believe businesses should not hand over strategic control of their most critical processes to another provider.'
};
