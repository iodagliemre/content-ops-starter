import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import SiteHead from './SiteHead';
import WhatsAppButton from './WhatsAppButton';
import { LocaleProvider } from './locale';
import type { Locale, Localized } from '../../../content/locale';
import type { Dict } from '../../../content/dict';

/**
 * PAKET-P7 G1/G2. Shell for the contact and privacy pages: same Nav / Footer / WhatsApp button as the
 * homepage and case pages, page-specific <head> (title, description, OG image, canonical + hreflang from
 * `paths`).
 */
export default function SubPage({
    locale,
    dict,
    paths,
    meta,
    children
}: {
    locale: Locale;
    dict: Dict;
    paths: Localized<string>;
    meta: { title: string; description: string; ogImage?: string };
    children: ReactNode;
}) {
    return (
        <LocaleProvider locale={locale} dict={dict} paths={paths}>
            <SiteHead title={meta.title} description={meta.description} ogImage={meta.ogImage} />
            <div className="v2-root min-h-screen overflow-x-hidden bg-v2-bg-base text-v2-text-primary">
                <Nav />
                <main>{children}</main>
                <Footer />
                <WhatsAppButton />
            </div>
        </LocaleProvider>
    );
}
