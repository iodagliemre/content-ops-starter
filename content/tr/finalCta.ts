// PAKET-P6 A1: TR sözlüğü (finalCta). Tip ve dilden bağımsız sabitler: content/finalCta.ts.
import type { FinalCtaContent } from '../finalCta';
import { CAL_COM, EMAIL } from '../finalCta';

export const finalCta: FinalCtaContent = {
    heading: 'Fikrini gerçeğe dönüştürelim.',
    subline: 'Projenizi konuşalım, birlikte büyütelim.',
    primary: { label: 'İLETİŞİME GEÇ', href: CAL_COM },
    secondary: EMAIL
};
