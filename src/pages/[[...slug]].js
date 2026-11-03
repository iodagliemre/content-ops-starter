import React from 'react';
import Head from 'next/head';
import { allContent } from '../utils/local-content';
import { getComponent } from '../components/components-registry';
import { resolveStaticProps } from '../utils/static-props-resolvers';
import { resolveStaticPaths } from '../utils/static-paths-resolvers';
import { seoGenerateTitle, seoGenerateMetaTags, seoGenerateMetaDescription } from '../utils/seo-utils';
import HomePageV2 from '../components/HomePageV2';

// V2 homepage is rendered here, not as its own pages/index.* file — Next.js forbids a
// literal index route coexisting with this optional catch-all at the same specificity.
// See RAPOR-P00.md for why. content/pages/index.md was moved to _legacy/, so '/' no
// longer exists in the Stackbit-style content data; we inject it below instead.
function Page(props) {
    if (props.isHomeV2) {
        return <HomePageV2 locale={props.locale} />;
    }
    const { page, site } = props;
    const { modelName } = page.__metadata;
    if (!modelName) {
        throw new Error(`page has no type, page '${props.path}'`);
    }
    const PageLayout = getComponent(modelName);
    if (!PageLayout) {
        throw new Error(`no page layout matching the page model: ${modelName}`);
    }
    const title = seoGenerateTitle(page, site);
    const metaTags = seoGenerateMetaTags(page, site);
    const metaDescription = seoGenerateMetaDescription(page, site);
    return (
        <>
            <Head>
                <title>{title}</title>
                {metaDescription && <meta name="description" content={metaDescription} />}
                {metaTags.map((metaTag) => {
                    if (metaTag.format === 'property') {
                        // OpenGraph meta tags (og:*) should be have the format <meta property="og:…" content="…">
                        return <meta key={metaTag.property} property={metaTag.property} content={metaTag.content} />;
                    }
                    return <meta key={metaTag.property} name={metaTag.property} content={metaTag.content} />;
                })}
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                {site.favicon && <link rel="icon" href={site.favicon} />}
            </Head>
            <PageLayout page={page} site={site} />
        </>
    );
}

export function getStaticPaths() {
    const data = allContent();
    const paths = resolveStaticPaths(data);
    if (!paths.includes('/')) {
        paths.push('/');
    }
    // PAKET-P5-SEO-META-DIL G2: EN homepage, same component with locale 'en'.
    paths.push('/en');
    return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
    const urlPath = '/' + (params.slug || []).join('/');
    // `v2` tells _app.js this is a V2 page (no legacy i18n.js); `locale` also sets <html lang> (_document.js).
    if (urlPath === '/') {
        return { props: { isHomeV2: true, v2: true, locale: 'tr' } };
    }
    if (urlPath === '/en') {
        return { props: { isHomeV2: true, v2: true, locale: 'en' } };
    }
    const data = allContent();
    const props = await resolveStaticProps(urlPath, data);
    return { props };
}

export default Page;
