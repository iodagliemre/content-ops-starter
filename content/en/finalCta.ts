// PAKET-P6 A1: EN sözlüğü (finalCta). Tip ve dilden bağımsız sabitler: content/finalCta.ts.
import type { FinalCtaContent } from '../finalCta';
import { CAL_COM, CONTACT_FORM } from '../finalCta';

export const finalCta: FinalCtaContent = {
    heading: "Let's turn your idea into reality.",
    subline: "Let's talk about your project and grow it together.",
    primary: { label: 'BOOK A MEETING', href: CAL_COM },
    secondary: CONTACT_FORM.en
};
