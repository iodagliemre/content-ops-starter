import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import FinalCta from './FinalCta';
import SiteHead from './SiteHead';
import { LocaleProvider } from './locale';
import { CASE_PATH, SITE_URL, type Locale } from '../../../content/locale';
import type { Dict } from '../../../content/dict';
import type { CaseContent } from '../../../content/cases';

/**
 * PAKET-P6 B2. Case page ("kurduğumuz sistem") template: same Nav / Footer / FinalCta as the homepage,
 * no new visual language. Sections: small hero (eyebrow, H1, one-line definition, system image in the
 * Web Factory screen frame) → Kim için → Sorun → Ne kurduk → Teknoloji → Sonuç → closing CTA → footer.
 * Motion: the hero fades up once (.v2-fade-up); everything else is static. No icons.
 * Copy comes from content/{tr,en}/cases/*.ts via the page's getStaticProps.
 */
export default function CasePage({ locale, dict, content }: { locale: Locale; dict: Dict; content: CaseContent }) {
    const paths = { tr: CASE_PATH.tr[content.slug], en: CASE_PATH.en[content.slug] };
    const creativeWork = {
        '@context': 'https://schema.org',
        '@type': 'CreativeWork',
        name: content.name,
        description: content.meta.description,
        url: SITE_URL + paths[locale],
        inLanguage: locale,
        image: SITE_URL + content.meta.ogImage,
        creator: { '@type': 'Organization', name: 'DOVEIFYIO AI SOLUTIONS LTD', url: SITE_URL + '/' }
    };

    return (
        <LocaleProvider locale={locale} dict={dict} paths={paths}>
            <SiteHead title={content.meta.title} description={content.meta.description} ogImage={content.meta.ogImage} extraJsonLd={[creativeWork]} />
            <div className="v2-root min-h-screen overflow-x-hidden bg-v2-bg-base text-v2-text-primary">
                <Nav />
                <main>
                    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-24 lg:pt-16">
                        <div className="v2-fade-up lg:col-span-6">
                            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{content.eyebrow}</p>
                            <h1 className="mt-4 text-[36px] font-light leading-[1.05] text-white lg:text-[56px]">{content.name}</h1>
                            <p className="mt-6 max-w-[520px] text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]">
                                {content.definition}
                            </p>
                        </div>
                        <div className="v2-fade-up lg:col-span-6" style={{ animationDelay: '150ms' }}>
                            <div className="flex aspect-[3/2] w-full flex-col overflow-hidden rounded-lg border border-v2-border bg-v2-bg-base">
                                <div aria-hidden="true" className="h-1.5 shrink-0 border-b border-v2-border" />
                                <div className="min-h-0 flex-1">
                                    {/* eslint-disable-next-line @next/next/no-img-element -- same pre-sized placeholder as the homepage card */}
                                    <img
                                        src={content.image.src}
                                        alt=""
                                        width={content.image.width}
                                        height={content.image.height}
                                        fetchPriority="high"
                                        decoding="async"
                                        className="h-full w-full object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    </section>

                    <CaseRow title={content.forWhom.title}>
                        <p className="max-w-[720px] text-[18px] font-normal leading-[1.6] text-v2-text-secondary">{content.forWhom.body}</p>
                    </CaseRow>

                    <CaseRow title={content.problem.title}>
                        <ol>
                            {content.problem.items.map((item, index) => (
                                <li key={item} className="border-v2-border/50 py-4 first:pt-0 last:pb-0 [&:not(:first-child)]:border-t">
                                    <p className="text-[12px] font-medium text-v2-blue">{String(index + 1).padStart(2, '0')}</p>
                                    <p className="mt-2 text-[18px] font-normal leading-[1.5] text-white">{item}</p>
                                </li>
                            ))}
                        </ol>
                    </CaseRow>

                    <CaseRow title={content.built.title}>
                        <ul className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2">
                            {content.built.items.map((item) => (
                                <li key={item.title}>
                                    <h3 className="text-[20px] font-normal leading-[1.3] text-white">{item.title}</h3>
                                    <p className="mt-2 text-[15px] font-normal leading-[1.6] text-v2-text-secondary">{item.description}</p>
                                </li>
                            ))}
                        </ul>
                    </CaseRow>

                    <CaseRow title={content.tech.title}>
                        <ul className="flex flex-wrap gap-2">
                            {content.tech.items.map((item) => (
                                <li
                                    key={item}
                                    className="inline-flex h-9 items-center rounded-full border border-v2-border px-4 text-[13px] font-medium text-v2-text-secondary"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CaseRow>

                    <CaseRow title={content.results.title}>
                        <ul className="space-y-4">
                            {content.results.items.map((item) => (
                                <li key={item} className="flex items-start gap-4 text-[20px] font-light leading-[1.4] text-white">
                                    <span aria-hidden="true" className="mt-[14px] h-px w-6 shrink-0 bg-v2-blue" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CaseRow>

                    <FinalCta content={content.cta} />
                </main>
                <Footer />
            </div>
        </LocaleProvider>
    );
}

/** One editorial row: heading in columns 1-4, content in 5-12; stacked on mobile. */
function CaseRow({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="v2-cv-case mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
            <h2 className="text-[28px] font-light leading-[1.2] text-white lg:col-span-4 lg:text-[34px]">{title}</h2>
            <div className="lg:col-span-8">{children}</div>
        </section>
    );
}
