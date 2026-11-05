// PAKET-P6 A1: EN sözlüğü (transformation). Tip ve dilden bağımsız sabitler: content/transformation.ts.
import type { TransformationContent } from '../transformation';

export const transformation: TransformationContent = {
    section: {
        eyebrow: 'DIGITAL TRANSFORMATION',
        heading: "Transformation isn't a choice; it's a competitive edge.",
        quote: 'Businesses that cannot measure cannot manage; businesses that cannot manage cannot compete.'
    },
    stages: [
        {
            label: 'DATA',
            title: 'Algorithm Evolution',
            description: 'AI algorithms evolve, big data is processed, predictive and analytical capabilities grow.'
        },
        {
            label: 'AI',
            title: 'Adapting AI Tools to Systems',
            description: 'AI agent systems emerge, company-specific solutions are developed, process-based automations go live.'
        },
        {
            label: 'SYSTEMS',
            title: 'Hardware & AI Integration',
            description: 'IoT and smart sensors come online, real-time data flows are established, digital and physical worlds integrate.'
        },
        {
            label: 'AUTONOMY',
            title: 'Autonomous & Connected Systems',
            description: 'Systems communicate with each other, operations are managed autonomously, strategy-aligned outcomes are produced.'
        }
    ]
};
