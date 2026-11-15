import SubPage from './SubPage';
import FinalCta from './FinalCta';
import { CASE_PATH, CASE_SLUGS, KB_PATH, OWN_SOFTWARE_PATH, SITE_URL, kbArticlePath, type CaseSlug, type Locale } from '../../../content/locale';
import { caseName } from '../../../content/cases';
import { KB_UI } from '../../../content/kb';
import { organization } from '../../../content/meta';
import type { Dict } from '../../../content/dict';
import type { Article, ArticleMeta } from '../../utils/bilgi';

/**
 * PAKET-P8 G5. Bilgi Bankası list (/bilgi-bankasi/, /en/knowledge-base/) and article pages. V2 nav + footer via
 * SubPage. Article = LegalPage editorial typography (max-width 760, H2 22px, body 16px / 1.7) with a sticky
 * "İlgili sistem" box on the right (desktop; below the text on mobile) and the Final CTA. No motion.
 * JSON-LD: Article. OG: public/og/bilgi/<slug>.png (scripts/og.py), else the Bilgi Bankası image.
 */
const isCase = (s: string): s is CaseSlug => (CASE_SLUGS as string[]).includes(s);

function systemLink(locale: Locale, system: string) {
    if (isCase(system)) return { title: caseName(locale, system), href: CASE_PATH[locale][system] };
    return { title: KB_UI[locale].ownSoftware.title, href: OWN_SOFTWARE_PATH[locale] };
}

function formatDate(locale: Locale, iso: string) {
    if (!iso) return '';
    return new Intl.DateTimeFormat(KB_UI[locale].dateLocale, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(`${iso}T00:00:00Z`));
}

function MetaLine({ locale, article }: { locale: Locale; article: ArticleMeta }) {
    return (
        <p className="text-[13px] font-normal text-v2-text-secondary">
            <time dateTime={article.date}>{formatDate(locale, article.date)}</time>
            {article.readMin > 0 && <> · {KB_UI[locale].readMin(article.readMin)}</>}
            {article.system && <> · <span className="text-v2-blue">{systemLink(locale, article.system).title}</span></>}
        </p>
    );
}

export function KbListPage({ locale, dict, articles }: { locale: Locale; dict: Dict; articles: ArticleMeta[] }) {
    const ui = KB_UI[locale];
    return (
        <SubPage locale={locale} dict={dict} paths={KB_PATH} meta={ui.meta}>
            <section className="mx-auto max-w-7xl px-6 pb-24 pt-10 lg:pb-32 lg:pt-16">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{ui.eyebrow}</p>
                <h1 className="mt-4 max-w-[820px] text-[36px] font-light leading-[1.1] text-white lg:text-[56px]">{ui.title}</h1>
                <ul className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:mt-16 lg:gap-6">
                    {articles.map((article) => (
                        <li key={article.slug}>
                            <a
                                href={kbArticlePath(locale, article.slug)}
                                className="flex h-full flex-col rounded-xl border border-v2-border p-6 transition-colors hover:border-v2-blue lg:p-8"
                            >
                                <MetaLine locale={locale} article={article} />
                                <h2 className="mt-4 text-[22px] font-light leading-[1.3] text-white">{article.title}</h2>
                                <p className="mt-3 text-[15px] font-normal leading-[1.6] text-v2-text-secondary">{article.description}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </SubPage>
    );
}

export function KbArticlePage({ locale, dict, article, hasOther }: { locale: Locale; dict: Dict; article: Article; hasOther: boolean }) {
    const ui = KB_UI[locale];
    const path = kbArticlePath(locale, article.slug);
    // hreflang only when the other language has the same article (EN copies are optional for new articles).
    const paths = hasOther ? { tr: kbArticlePath('tr', article.slug), en: kbArticlePath('en', article.slug) } : { tr: path, en: path };
    const system = systemLink(locale, article.system);
    const own = { title: ui.ownSoftware.title, href: OWN_SOFTWARE_PATH[locale] };
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.date,
        inLanguage: locale,
        mainEntityOfPage: SITE_URL + path,
        image: SITE_URL + article.ogImage,
        author: { '@type': 'Organization', name: organization.name, url: SITE_URL + '/' },
        publisher: { '@type': 'Organization', name: organization.legalName, logo: { '@type': 'ImageObject', url: SITE_URL + organization.logo } }
    };
    const others = [system, ...(system.href === own.href ? [] : [own])];

    return (
        <SubPage locale={locale} dict={dict} paths={paths} meta={{ title: article.metaTitle, description: article.description, ogImage: article.ogImage }} jsonLd={[jsonLd]}>
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-16 pt-10 lg:grid-cols-12 lg:gap-8 lg:pb-24 lg:pt-16">
                <article lang={locale} className="v2-legal min-w-0 lg:col-span-8">
                    <a href={KB_PATH[locale]} className="inline-flex min-h-11 items-center text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue transition-colors hover:text-white">
                        {ui.allArticles}
                    </a>
                    <h1 className="mt-2 max-w-[760px] text-[32px] font-light leading-[1.15] text-white lg:text-[40px]">{article.title}</h1>
                    <div className="mt-4">
                        <MetaLine locale={locale} article={article} />
                    </div>
                    <span aria-hidden="true" className="mt-8 block h-px w-10 bg-v2-blue" />
                    <div className="v2-prose max-w-[760px]" dangerouslySetInnerHTML={{ __html: article.html }} />
                </article>
                <aside className="lg:col-span-4">
                    <div className="rounded-xl border border-v2-border p-6 lg:sticky lg:top-28">
                        <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{ui.relatedSystem}</p>
                        <ul className="mt-4 space-y-1">
                            {others.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="flex min-h-11 items-center justify-between gap-4 text-[18px] font-normal text-white transition-colors hover:text-v2-blue">
                                        {link.title}
                                        <span aria-hidden="true" className="text-v2-blue">
                                            →
                                        </span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </aside>
            </div>
            <FinalCta />
        </SubPage>
    );
}
