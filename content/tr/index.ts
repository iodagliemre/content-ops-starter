// PAKET-P6 A1: TR sözlüğü — yalnızca getStaticProps içinde import edilir (sunucu tarafı).
import type { Dict } from '../dict';
import { nav } from './nav';
import { hero } from './hero';
import { products } from './products';
import { webFactory } from './webFactory';
import { transformation } from './transformation';
import { ownership } from './ownership';
import { why } from './why';
import { work } from './work';
import { finalCta } from './finalCta';
import { footer } from './footer';
import { meta } from './meta';

export const dict: Dict = { nav, hero, products, webFactory, transformation, ownership, why, work, finalCta, footer, meta };
