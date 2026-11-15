import type { ReactNode } from 'react';
import Nav from './Nav';
import Footer from './Footer';
import FinalCta from './FinalCta';
import WhatsAppButton from './WhatsAppButton';
import SiteHead from './SiteHead';
import { LocaleProvider } from './locale';
import { CASE_PATH, OWN_SOFTWARE_PATH, SITE_URL, contactForWork, type Locale } from '../../../content/locale';
import type { Dict } from '../../../content/dict';
import { CASE_UI, type CaseContent, type CaseImage } from '../../../content/cases';
import type { RelatedLink } from '../../utils/case-props';

/**
 * PAKET-P6 B2 → PAKET-P8 G2. System intro page ("kurduğumuz sistem"): same Nav / Footer / FinalCta as the
 * homepage, no new visual language. Order (brief G2): hero (eyebrow + CANLI/PROTOTİP, H1, one-line definition,
 * SİSTEMİ İNCELE → live app + BENZERİNİ İSTEYİN → contact form, screen in the 3:2 browser frame) → Kim için →
 * Sorun → Ne yapar → Ekranlar (horizontal rail, snap) → Rakamlar (only when sourced) → Teknoloji → [Ne değişti,
 * Clinic OS / Broker's Brain only] → Sahiplik kutusu → SSS → İlgili okumalar → Final CTA.
 * Motion: the hero fades up once (.v2-fade-up); everything else is static. No icons.
 * JSON-LD: SoftwareApplication + FAQPage.
 */
const FRAME = 'flex aspect-[3/2] w-full flex-col overflow-hidden rounded-lg border border-v2-border bg-v2-bg-base';

export default function CasePage({ locale, dict, content, related }: { locale: Locale; dict: Dict; content: CaseContent; related: RelatedLink[] }) {
    const ui = CASE_UI[locale];
    const paths = { tr: CASE_PATH.tr[content.slug], en: CASE_PATH.en[content.slug] };
    const url = SITE_URL + paths[locale];
    const software = {
        '@context': 'https://schema.org',
        '@type': 'SoftwareApplication',
        name: content.name,
        description: content.meta.description,
        url,
        inLanguage: locale,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        image: SITE_URL + content.image.src,
        screenshot: content.screens.map((s) => SITE_URL + s.src),
        creator: { '@type': 'Organization', name: 'DOVEIFYIO AI SOLUTIONS LTD', url: SITE_URL + '/' }
    };
    const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: locale,
        mainEntity: content.faq.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
    };

    return (
        <LocaleProvider locale={locale} dict={dict} paths={paths}>
            <SiteHead title={content.meta.title} description={content.meta.description} ogImage={content.meta.ogImage} extraJsonLd={[software, faqPage]} />
            <div className="v2-root min-h-screen overflow-x-hidden bg-v2-bg-base text-v2-text-primary">
                <Nav />
                <main>
                    <section className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 pb-16 pt-10 lg:grid-cols-12 lg:items-center lg:gap-8 lg:pb-24 lg:pt-16">
                        <div className="v2-fade-up lg:col-span-6">
                            <p className="flex flex-wrap items-center gap-3 text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">
                                {content.eyebrow}
                                <span className="inline-flex h-6 items-center rounded-full border border-v2-border px-2.5 text-[11px] tracking-[0.1em] text-v2-text-secondary">
                                    {ui.status[content.status]}
                                </span>
                            </p>
                            <h1 className="mt-4 text-[36px] font-light leading-[1.05] text-white lg:text-[56px]">{content.name}</h1>
                            <p className="mt-6 max-w-[520px] text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]">{content.definition}</p>
                            <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-8">
                                <a
                                    href={content.liveUrl}
                                    target="_blank"
                                    rel="noopener"
                                    className="inline-flex h-12 items-center justify-center rounded-lg bg-v2-blue px-6 text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
                                >
                                    {ui.live}
                                </a>
                                <a
                                    href={contactForWork(locale, content.slug)}
                                    className="inline-flex h-12 items-center text-[13px] font-medium uppercase tracking-[0.08em] text-v2-text-primary transition-colors hover:text-v2-blue"
                                >
                                    {ui.similar}
                                </a>
                                {content.extraLink && (
                                    <a
                                        href={content.extraLink.href}
                                        target="_blank"
                                        rel="noopener"
                                        className="inline-flex h-12 items-center text-[13px] font-medium uppercase tracking-[0.08em] text-v2-blue transition-colors hover:text-white"
                                    >
                                        {content.extraLink.label}
                                    </a>
                                )}
                            </div>
                        </div>
                        <div className="v2-fade-up lg:col-span-6" style={{ animationDelay: '150ms' }}>
                            {/* PAKET-P7 G5: 3:2 frame with border + browser strip, 640px max (Web Factory screen style). */}
                            <div className={`ml-auto max-w-[640px] ${FRAME}`}>
                                <div aria-hidden="true" className="h-1.5 shrink-0 border-b border-v2-border" />
                                <div className="min-h-0 flex-1">
                                    <Screen image={content.image} sizes="(min-width: 1024px) 640px, 100vw" priority />
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
                                    {item.description && <p className="mt-2 text-[15px] font-normal leading-[1.6] text-v2-text-secondary">{item.description}</p>}
                                </li>
                            ))}
                        </ul>
                    </CaseRow>

                    <CaseRow title={ui.screens}>
                        {/* G2 #5: horizontal rail, native scroll-snap (mobile swipe), no JS. Focusable so the keyboard can scroll it. */}
                        <ul
                            tabIndex={0}
                            aria-label={`${content.name} — ${ui.screens}`}
                            className="v2-screen-rail -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto px-6 pb-4 focus:outline-none focus-visible:ring-1 focus-visible:ring-v2-blue lg:mx-0 lg:px-0"
                            style={{ scrollPaddingInline: 24 }}
                        >
                            {content.screens.map((screen) => (
                                <li key={screen.src} className="w-[85%] shrink-0 snap-start sm:w-[480px]">
                                    <div className={FRAME}>
                                        <div aria-hidden="true" className="h-1.5 shrink-0 border-b border-v2-border" />
                                        <div className="min-h-0 flex-1">
                                            <Screen image={screen} sizes="(min-width: 640px) 480px, 85vw" />
                                        </div>
                                    </div>
                                    {screen.alt && <p className="mt-3 text-[13px] font-normal text-v2-text-secondary">{screen.alt}</p>}
                                </li>
                            ))}
                        </ul>
                    </CaseRow>

                    {content.stats && (
                        <CaseRow title={ui.stats}>
                            <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-4">
                                {content.stats.map((stat) => (
                                    <div key={stat.label}>
                                        <dt className="sr-only">{stat.label}</dt>
                                        <dd className="text-[40px] font-light leading-none text-white">{stat.value}</dd>
                                        <dd className="mt-2 text-[14px] font-normal text-v2-text-secondary">{stat.label}</dd>
                                    </div>
                                ))}
                            </dl>
                        </CaseRow>
                    )}

                    <CaseRow title={content.tech.title}>
                        <ul className="flex flex-wrap gap-2">
                            {content.tech.items.map((item) => (
                                <li key={item} className="inline-flex h-9 items-center rounded-full border border-v2-border px-4 text-[13px] font-medium text-v2-text-secondary">
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </CaseRow>

                    {content.results && (
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
                    )}

                    <section className="v2-cv-case mx-auto max-w-7xl px-6 py-12 lg:py-16">
                        <div className="rounded-xl border border-v2-border px-6 py-10 lg:px-12 lg:py-14">
                            <h2 className="text-[28px] font-light leading-[1.2] text-white lg:text-[40px]">{ui.ownership.title}</h2>
                            <p className="mt-4 max-w-[640px] text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]">{ui.ownership.body}</p>
                        </div>
                    </section>

                    <CaseRow title={ui.faq}>
                        <dl>
                            {content.faq.map((item) => (
                                <div key={item.q} className="border-v2-border/50 py-6 first:pt-0 last:pb-0 [&:not(:first-child)]:border-t">
                                    <dt className="text-[18px] font-normal leading-[1.4] text-white">{item.q}</dt>
                                    <dd className="mt-2 max-w-[720px] text-[16px] font-normal leading-[1.7] text-v2-text-secondary">{item.a}</dd>
                                </div>
                            ))}
                        </dl>
                    </CaseRow>

                    <CaseRow title={ui.related}>
                        <ul className="space-y-1">
                            {[...related, { title: ui.ownSoftware, href: OWN_SOFTWARE_PATH[locale] }].map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} className="inline-flex min-h-11 items-center text-[16px] font-normal text-v2-text-primary underline decoration-v2-border underline-offset-4 transition-colors hover:text-v2-blue">
                                        {link.title}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </CaseRow>

                    <FinalCta content={content.cta} />
                </main>
                <Footer />
                <WhatsAppButton />
            </div>
        </LocaleProvider>
    );
}

/** Pre-sized screen inside a 3:2 frame (object-cover, top aligned). */
function Screen({ image, sizes, priority = false }: { image: CaseImage; sizes: string; priority?: boolean }) {
    return (
        // eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP (public/systems/), same pattern as the homepage cards
        <img
            src={image.src}
            srcSet={image.srcSet}
            sizes={image.srcSet ? sizes : undefined}
            alt={image.alt ?? ''}
            width={image.width}
            height={image.height}
            loading={priority ? undefined : 'lazy'}
            fetchPriority={priority ? 'high' : undefined}
            decoding="async"
            className="h-full w-full object-cover object-top"
        />
    );
}

/** One editorial row: heading in columns 1-4, content in 5-12; stacked on mobile. */
function CaseRow({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="v2-cv-case mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
            <h2 className="text-[28px] font-light leading-[1.2] text-white lg:col-span-4 lg:text-[34px]">{title}</h2>
            <div className="min-w-0 lg:col-span-8">{children}</div>
        </section>
    );
}
