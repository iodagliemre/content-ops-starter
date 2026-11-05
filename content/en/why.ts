// PAKET-P6 A1: EN sözlüğü (why). Tip ve dilden bağımsız sabitler: content/why.ts.
import type { WhyContent } from '../why';

export const why: WhyContent = {
    eyebrow: 'WHY DOVEIFY',
    figure: '100%',
    figureLabel: 'OWNERSHIP',
    items: [
        { title: '100% Ownership', description: 'Code, data and infrastructure are your property; you never rent them. All data stays with the client.' },
        { title: 'Long-Term Value', description: 'An investment, not a subscription; the system gains value as it grows.' },
        { title: 'Industry-Specific Solutions', description: 'Not a generic platform, but systems built around your workflows.' },
        {
            title: 'Data Sovereignty',
            description: 'All your data on your own infrastructure, as your own property; no third-party access, control always yours.'
        },
        { title: 'Long-Term Solution Partnership', description: "It doesn't end at delivery; we grow it together." }
    ]
};
