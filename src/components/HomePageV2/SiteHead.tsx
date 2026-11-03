import Head from 'next/head';
import { LOCALES, LOCALE_PATH, SITE_URL, DEFAULT_LOCALE, type Locale } from '../../../content/locale';
import { metaContent, organization, THEME_COLOR } from '../../../content/meta';

/**
 * PAKET-P5-SEO-META-DIL G3. Everything in <head> for a V2 page: title, description, canonical,
 * hreflang alternates, Open Graph, Twitter card, theme-color, icons, manifest and JSON-LD.
 * `indexable={false}` (404) drops canonical/alternates/JSON-LD and adds noindex. Keys are prefixed:
 * next/head de-duplicates by `key`, and a bare `en`/`tr` key on both the hreflang link and the
 * og:locale:alternate meta made it drop one of them.
 */
export default function SiteHead({ locale, title, indexable = true }: { locale: Locale; title?: string; indexable?: boolean }) {
    const meta = metaContent[locale];
    const pageTitle = title ?? meta.title;
    const url = SITE_URL + LOCALE_PATH[locale];
    const ogImage = SITE_URL + meta.ogImage;
    const jsonLd = [
        {
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: organization.legalName,
            alternateName: organization.name,
            url: SITE_URL + '/',
            logo: SITE_URL + organization.logo,
            sameAs: organization.sameAs,
            contactPoint: { '@type': 'ContactPoint', contactType: 'sales', email: organization.email }
        },
        {
            '@context': 'https://schema.org',
            '@type': 'WebSite',
            name: organization.name,
            url: SITE_URL + '/',
            inLanguage: LOCALES
        }
    ];

    return (
        <Head>
            <title>{pageTitle}</title>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="description" content={meta.description} />
            <meta name="theme-color" content={THEME_COLOR} />
            <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
            <link rel="icon" href="/favicon-32.png" sizes="32x32" type="image/png" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
            {/* PAKET-P1-HERO-NAV G1: headline is weight 300 and is LCP-adjacent content;
                preload both subset files it actually needs (TR chars İ/Â live in latin-ext). */}
            <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin-300.woff2" crossOrigin="anonymous" />
            <link rel="preload" as="font" type="font/woff2" href="/fonts/inter-latin-ext-300.woff2" crossOrigin="anonymous" />
            {indexable ? (
                <>
                    <link rel="canonical" href={url} />
                    {LOCALES.map((l) => (
                        <link key={`alternate-${l}`} rel="alternate" hrefLang={l} href={SITE_URL + LOCALE_PATH[l]} />
                    ))}
                    <link rel="alternate" hrefLang="x-default" href={SITE_URL + LOCALE_PATH[DEFAULT_LOCALE]} />
                </>
            ) : (
                <meta name="robots" content="noindex" />
            )}
            <meta property="og:type" content="website" />
            <meta property="og:site_name" content="Doveify" />
            <meta property="og:title" content={pageTitle} />
            <meta property="og:description" content={meta.description} />
            <meta property="og:url" content={url} />
            <meta property="og:image" content={ogImage} />
            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:locale" content={meta.ogLocale} />
            {LOCALES.filter((l) => l !== locale).map((l) => (
                <meta key={`og-locale-${l}`} property="og:locale:alternate" content={metaContent[l].ogLocale} />
            ))}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:title" content={pageTitle} />
            <meta name="twitter:description" content={meta.description} />
            <meta name="twitter:image" content={ogImage} />
            {indexable && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />}
        </Head>
    );
}
