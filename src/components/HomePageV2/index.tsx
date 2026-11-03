import SiteHead from './SiteHead';
import { LocaleProvider } from './locale';
import type { Locale } from '../../../content/locale';
import Nav from './Nav';
import Hero from './Hero';
import Products from './Products';
import WebFactory from './WebFactory';
import Transformation from './Transformation';
import Ownership from './Ownership';
import Why from './Why';
import Work from './Work';
import FinalCta from './FinalCta';
import Footer from './Footer';

/**
 * V2 homepage. Rendered from src/pages/[[...slug]].js when urlPath === '/' (see that file's
 * Page() function) — not its own page file, see RAPOR-P00.md "Olay kaydı #3" for why.
 *
 * PAKET-01 built nav + hero; PAKET-P1-HERO-NAV brought them to DESIGN-LOCK v0.1;
 * PAKET-P2-URUNLER-CAROUSEL (P2-A) built the real Ürünler section; PAKET-P2AR-CAROUSEL-DUZELTME
 * fixed its visuals + performance; PAKET-P3-WEBFACTORY-DONUSUM built Web Factory + Dijital Dönüşüm;
 * PAKET-P4-SAHIPLIK-FINAL built Sahiplik, Why Doveify, Çalışmalar, Final CTA and the footer. No
 * placeholder sections remain. PAKET-P5-SEO-META-DIL: `locale` comes from the route (`/` tr, `/en/` en,
 * see [[...slug]].js); <head> lives in SiteHead.tsx.
 *
 * B1 (P2AR): `Products` is a normal static import again, not `next/dynamic`. P2-A's dynamic
 * split was meant to help — instead its own chunk fetch/eval competed with the hero's LCP image
 * for network+CPU during the exact window Lighthouse measures, for a below-fold component that's
 * already in the static HTML either way (`ssr: true` was always the default). See RAPOR-P2AR.md.
 */

export default function HomePageV2({ locale = 'tr' }: { locale?: Locale }) {
    return (
        <LocaleProvider locale={locale}>
            <SiteHead locale={locale} />
            <div className="v2-root min-h-screen overflow-x-hidden bg-v2-bg-base text-v2-text-primary">
                <Nav />
                <main>
                    <Hero />
                    <Products />
                    <WebFactory />
                    <Transformation />
                    <Ownership />
                    <Why />
                    <Work />
                    <FinalCta />
                </main>
                <Footer />
            </div>
        </LocaleProvider>
    );
}
