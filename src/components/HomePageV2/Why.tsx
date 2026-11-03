import type { CSSProperties } from 'react';
import classNames from 'classnames';
import { useRevealOnce } from './useRevealOnce';
import { useLocale } from './locale';
import { whyContent } from '../../../content/why';

/**
 * PAKET-P4-SAHIPLIK-FINAL G2 (CD #6). Large typography + an editorial list, no cards or grid tiles.
 * Desktop: figure in columns 1-5 (not sticky), list in 6-12. Hairlines between list items are list
 * dividers, not section dividers. Reveal (main.css .v2-why-*): figure first, then items .1s apart.
 */
export default function Why() {
    const { ref, isVisible } = useRevealOnce<HTMLElement>();
    const whySection = whyContent[useLocale()];

    return (
        <section
            id="why"
            ref={ref}
            className={classNames(
                'v2-cv-why mx-auto grid max-w-7xl grid-cols-1 px-6 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24',
                isVisible && 'is-visible'
            )}
        >
            <div className="v2-why-figure lg:col-span-5">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{whySection.eyebrow}</p>
                <h2 className="mt-6 font-light">
                    <span className="block text-[80px] leading-[0.9] text-white lg:text-[120px]">{whySection.figure}</span>
                    <span className="mt-3 block text-[28px] uppercase leading-[1.1] tracking-[0.08em] text-v2-blue lg:text-[40px]">
                        {whySection.figureLabel}
                    </span>
                </h2>
            </div>

            <ol className="mt-12 lg:col-span-7 lg:mt-0">
                {whySection.items.map((item, index) => (
                    <li
                        key={item.title}
                        className="v2-why-item border-v2-border/50 py-4 first:pt-0 last:pb-0 [&:not(:first-child)]:border-t"
                        style={{ '--v2-i': index } as CSSProperties}
                    >
                        <p className="text-[12px] font-medium text-v2-blue">{String(index + 1).padStart(2, '0')}</p>
                        <h3 className="mt-2 text-[20px] font-normal leading-[1.3] text-white">{item.title}</h3>
                        <p className="mt-2 max-w-[440px] text-[15px] font-normal leading-[1.6] text-v2-text-secondary">{item.description}</p>
                    </li>
                ))}
            </ol>
        </section>
    );
}
