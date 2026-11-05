import type { CSSProperties } from 'react';
import classNames from 'classnames';
import { useRevealOnce } from './useRevealOnce';
import { useDict } from './locale';

/**
 * PAKET-P4-SAHIPLIK-FINAL G1 (CD #5). Typography + contrast, no icons. Desktop: full-width statement,
 * then SaaS / Doveify in two 6-column halves with a 1px divider between them (inside the table, not
 * between sections). Mobile: the two lists stack. Reveal (main.css .v2-own-*): statement lines .15s
 * apart, then the comparison.
 */
export default function Ownership() {
    const { ref, isVisible } = useRevealOnce<HTMLElement>();
    const ownershipSection = useDict().ownership;
    const [saas, doveify] = ownershipSection.columns;

    return (
        <section
            id="sahiplik"
            ref={ref}
            className={classNames('v2-cv-sahiplik mx-auto max-w-7xl px-6 py-16 lg:py-24', isVisible && 'is-visible')}
        >
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{ownershipSection.eyebrow}</p>
            <h2 className="mt-4 text-[36px] font-light uppercase leading-[1.05] tracking-[0.02em] lg:text-[56px]">
                {ownershipSection.statement.map((line, index) => (
                    <span
                        key={line}
                        className={classNames('v2-own-line block', index === 0 ? 'text-white' : 'text-v2-blue')}
                        style={{ '--v2-i': index } as CSSProperties}
                    >
                        {line}
                    </span>
                ))}
            </h2>
            <p className="v2-own-line mt-6 max-w-[520px] text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]" style={{ '--v2-i': 2 } as CSSProperties}>
                {ownershipSection.subline}
            </p>

            <div className="v2-own-body mt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-0">
                    <Column heading={saas.heading} rows={saas.rows} tone="saas" />
                    <Column heading={doveify.heading} rows={doveify.rows} tone="doveify" />
                </div>
                <p className="mt-12 flex max-w-[720px] items-start gap-4 text-[18px] font-light leading-[1.6] text-v2-text-secondary">
                    <span aria-hidden="true" className="mt-[14px] h-px w-6 shrink-0 bg-v2-blue" />
                    {ownershipSection.closing}
                </p>
            </div>
        </section>
    );
}

function Column({ heading, rows, tone }: { heading: string; rows: readonly string[]; tone: 'saas' | 'doveify' }) {
    const isDoveify = tone === 'doveify';
    return (
        <div className={isDoveify ? 'lg:border-l lg:border-v2-border lg:pl-8' : 'lg:pr-8'}>
            <h3
                className={classNames(
                    'text-[12px] font-medium uppercase tracking-[0.12em]',
                    isDoveify ? 'text-v2-blue' : 'text-v2-text-secondary'
                )}
            >
                {heading}
            </h3>
            <ul className={classNames('mt-6 space-y-5 text-[16px] font-normal leading-[1.6]', isDoveify ? 'text-white' : 'text-v2-text-secondary')}>
                {rows.map((row) => (
                    <li key={row}>{row}</li>
                ))}
            </ul>
        </div>
    );
}
