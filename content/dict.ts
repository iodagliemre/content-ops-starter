/**
 * PAKET-P6 A1. Bir dilin bütün homepage sözlüğü. Sayfalar bunu `getStaticProps` ile yalnızca kendi
 * dili için alır (content/tr/index.ts veya content/en/index.ts) ve bileşenlere `useDict()` ile verir;
 * böylece tarayıcı paketine iki dilin metni de girmez.
 */
import type { NavContent } from './nav';
import type { HeroContent } from './hero';
import type { ProductsContent } from './products';
import type { WebFactoryContent } from './webFactory';
import type { TransformationContent } from './transformation';
import type { OwnershipContent } from './ownership';
import type { WhyContent } from './why';
import type { WorkContent } from './work';
import type { FinalCtaContent } from './finalCta';
import type { FooterContent } from './footer';
import type { MetaContent } from './meta';
import type { WhatsAppButtonContent } from './contact';

export type Dict = {
    nav: NavContent;
    hero: HeroContent;
    products: ProductsContent;
    webFactory: WebFactoryContent;
    transformation: TransformationContent;
    ownership: OwnershipContent;
    why: WhyContent;
    work: WorkContent;
    finalCta: FinalCtaContent;
    footer: FooterContent;
    meta: MetaContent;
    /** PAKET-P7 G3: floating WhatsApp button (every V2 page). */
    whatsapp: WhatsAppButtonContent;
};
