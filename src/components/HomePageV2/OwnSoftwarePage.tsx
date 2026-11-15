import type { ReactNode } from 'react';
import classNames from 'classnames';
import SubPage from './SubPage';
import FinalCta from './FinalCta';
import { CASE_PATH, CASE_SLUGS, OWN_SOFTWARE_PATH, SITE_URL, type Locale } from '../../../content/locale';
import { caseName } from '../../../content/cases';
import type { Dict } from '../../../content/dict';
import type { OwnSoftwareContent } from '../../../content/ownSoftware';
import type { RelatedLink } from '../../utils/case-props';

/**
 * PAKET-P8 G4. /kendi-yaziliminiz/ and /en/your-own-software/. Same building blocks as the homepage and the system
 * pages (eyebrow + light H1, editorial rows, the Ownership statement and comparison, FinalCta); no icons, no motion
 * beyond the hero's one-time fade. Links to all six system pages (G6 internal link network).
 * JSON-LD: Service + FAQPage.
 */
export default function OwnSoftwarePage({ locale, dict, content, related }: { locale: Locale; dict: Dict; content: OwnSoftwareContent; related: RelatedLink[] }) {
    const service = {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: content.title.replace(/\.$/, ''),
        serviceType: locale === 'tr' ? 'Özel yazılım geliştirme' : 'Custom software development',
        description: content.meta.description,
        url: SITE_URL + OWN_SOFTWARE_PATH[locale],
        inLanguage: locale,
        areaServed: ['TR', 'GB', 'AE', 'SA'],
        provider: { '@type': 'Organization', name: 'DOVEIFYIO AI SOLUTIONS LTD', url: SITE_URL + '/' }
    };
    const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        inLanguage: locale,
        mainEntity: content.faq.items.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } }))
    };
    const [saas, doveify] = content.comparison.columns;

    return (
        <SubPage locale={locale} dict={dict} paths={OWN_SOFTWARE_PATH} meta={content.meta} jsonLd={[service, faqPage]}>
            <section className="v2-fade-up mx-auto max-w-7xl px-6 pb-16 pt-10 lg:pb-24 lg:pt-16">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{content.eyebrow}</p>
                <h1 className="mt-4 max-w-[900px] text-[40px] font-light leading-[1.05] text-white lg:text-[64px]">{content.title}</h1>
                <p className="mt-6 max-w-[560px] text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]">{content.subline}</p>
                <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:items-center sm:gap-8">
                    <a
                        href={content.primary.href}
                        target="_blank"
                        rel="noopener"
                        className="inline-flex h-12 items-center justify-center rounded-lg bg-v2-blue px-6 text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
                    >
                        {content.primary.label}
                    </a>
                    <a href={content.secondary.href} className="inline-flex h-12 items-center text-[14px] font-medium text-v2-text-primary transition-colors hover:text-v2-blue">
                        {content.secondary.label}
                    </a>
                </div>
            </section>

            <Row title={content.problem.title}>
                <p className="max-w-[720px] text-[18px] font-normal leading-[1.6] text-v2-text-secondary">{content.problem.lead}</p>
                <dl className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
                    {content.problem.items.map((item) => (
                        <div key={item.label} className="border-t border-v2-border/50 pt-4">
                            <dt className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{item.label}</dt>
                            <dd className="mt-2 text-[20px] font-light leading-[1.4] text-white">{item.text}</dd>
                        </div>
                    ))}
                </dl>
            </Row>

            <section className="v2-cv-case mx-auto max-w-7xl px-6 py-12 lg:py-16">
                <p className="text-[36px] font-light uppercase leading-[1.05] tracking-[0.02em] lg:text-[56px]">
                    <span className="block text-white">{content.manifesto[0]}</span>
                    <span className="block text-v2-blue">{content.manifesto[1]}</span>
                </p>
            </section>

            <Row title={content.comparison.title}>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0">
                    {[saas, doveify].map((column, index) => (
                        <div key={column.heading} className={index === 1 ? 'sm:border-l sm:border-v2-border sm:pl-8' : 'sm:pr-8'}>
                            <h3 className={classNames('text-[12px] font-medium uppercase tracking-[0.12em]', index === 1 ? 'text-v2-blue' : 'text-v2-text-secondary')}>
                                {column.heading}
                            </h3>
                            <ul className={classNames('mt-6 space-y-5 text-[16px] font-normal leading-[1.6]', index === 1 ? 'text-white' : 'text-v2-text-secondary')}>
                                {column.rows.map((row) => (
                                    <li key={row}>{row}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </Row>

            <Row title={content.process.title}>
                <Steps steps={content.process.steps} />
            </Row>

            <Row title={content.numbers.title}>
                <dl className="grid grid-cols-2 gap-x-8 gap-y-8 sm:grid-cols-3">
                    {content.numbers.items.map((item) => (
                        <div key={item.label}>
                            <dt className="sr-only">{item.label}</dt>
                            <dd className="text-[40px] font-light leading-none text-white">{item.value}</dd>
                            <dd className="mt-2 text-[14px] font-normal leading-[1.5] text-v2-text-secondary">{item.label}</dd>
                        </div>
                    ))}
                </dl>
            </Row>

            <Row title={content.path.title}>
                <Steps steps={content.path.steps} />
            </Row>

            <Row title={content.systems.title}>
                <ul className="grid grid-cols-1 gap-x-8 sm:grid-cols-2">
                    {CASE_SLUGS.map((slug) => (
                        <li key={slug} className="border-t border-v2-border/50">
                            <a href={CASE_PATH[locale][slug]} className="flex min-h-14 items-center justify-between gap-4 text-[18px] font-normal text-white transition-colors hover:text-v2-blue">
                                {caseName(locale, slug)}
                                <span aria-hidden="true" className="text-v2-blue">
                                    →
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </Row>

            <Row title={content.faq.title}>
                <dl>
                    {content.faq.items.map((item) => (
                        <div key={item.q} className="border-v2-border/50 py-6 first:pt-0 last:pb-0 [&:not(:first-child)]:border-t">
                            <dt className="text-[18px] font-normal leading-[1.4] text-white">{item.q}</dt>
                            <dd className="mt-2 max-w-[720px] text-[16px] font-normal leading-[1.7] text-v2-text-secondary">{item.a}</dd>
                        </div>
                    ))}
                </dl>
            </Row>

            {related.length > 0 && (
                <Row title={content.related}>
                    <ul className="space-y-1">
                        {related.map((link) => (
                            <li key={link.href}>
                                <a href={link.href} className="inline-flex min-h-11 items-center text-[16px] font-normal text-v2-text-primary underline decoration-v2-border underline-offset-4 transition-colors hover:text-v2-blue">
                                    {link.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </Row>
            )}

            <FinalCta content={content.cta} />
        </SubPage>
    );
}

function Steps({ steps }: { steps: string[] }) {
    return (
        <ol className={classNames('grid grid-cols-1 gap-6', steps.length === 4 ? 'sm:grid-cols-4' : 'sm:grid-cols-3')}>
            {steps.map((step, index) => (
                <li key={step} className="border-t border-v2-border/50 pt-4">
                    <p className="text-[12px] font-medium text-v2-blue">{String(index + 1).padStart(2, '0')}</p>
                    <p className="mt-2 text-[18px] font-normal leading-[1.4] text-white">{step}</p>
                </li>
            ))}
        </ol>
    );
}

/** Editorial row, same as CasePage: heading in columns 1-4, content in 5-12; stacked on mobile. */
function Row({ title, children }: { title: string; children: ReactNode }) {
    return (
        <section className="v2-cv-case mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 py-12 lg:grid-cols-12 lg:gap-8 lg:py-16">
            <h2 className="text-[28px] font-light leading-[1.2] text-white lg:col-span-4 lg:text-[34px]">{title}</h2>
            <div className="min-w-0 lg:col-span-8">{children}</div>
        </section>
    );
}
