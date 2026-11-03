import type { CSSProperties } from 'react';
import classNames from 'classnames';
import ArrowRight from '../svgs/arrow-right';
import { useRevealOnce } from './useRevealOnce';
import { workSection, workLogos } from '../../../content/work';

/**
 * PAKET-P4-SAHIPLIK-FINAL G3 (CD #7). Logo band, no horizontal scroll at any width. One DOM for both
 * layouts: desktop places the CTA top-right next to the heading with the logo row below; mobile
 * orders heading -> 2-column logo matrix -> CTA. Logos are monochrome via .v2-logo (main.css) and
 * never return to brand colour (CD). Each logo links to the client's site.
 */
export default function Work() {
    const { ref, isVisible } = useRevealOnce<HTMLElement>();

    return (
        <section
            id="calismalar"
            ref={ref}
            className={classNames(
                'v2-cv-calismalar mx-auto grid max-w-7xl grid-cols-1 px-6 py-16 lg:grid-cols-[1fr_auto] lg:py-24',
                isVisible && 'is-visible'
            )}
        >
            <div className="order-1 lg:col-start-1 lg:row-start-1">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{workSection.eyebrow}</p>
                <h2 className="mt-3 max-w-[380px] text-[28px] font-light leading-[1.2] text-white lg:text-[34px]">{workSection.heading}</h2>
            </div>

            <a
                href={workSection.href}
                target="_blank"
                rel="noopener"
                className="group order-3 mt-10 inline-flex h-12 items-center gap-2 justify-self-start text-[13px] font-medium uppercase tracking-[0.08em] text-v2-blue lg:col-start-2 lg:row-start-1 lg:mt-0 lg:self-end"
            >
                {workSection.cta}
                <ArrowRight className="h-4 w-4 fill-current transition-transform group-hover:translate-x-1" />
            </a>

            <ul className="order-2 mt-10 grid grid-cols-2 items-center justify-items-center gap-x-6 gap-y-8 lg:col-span-2 lg:row-start-2 lg:mt-12 lg:flex lg:justify-between">
                {workLogos.map((logo, index) => (
                    <li key={logo.name} className="v2-work-logo flex items-center" style={{ '--v2-i': index } as CSSProperties}>
                        <a href={logo.href} target="_blank" rel="noopener" className="v2-logo inline-flex">
                            {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized logo files (≤12KB), see content/work.ts */}
                            <img
                                src={logo.src}
                                alt={logo.name}
                                width={logo.width}
                                height={logo.height}
                                loading="lazy"
                                decoding="async"
                                className={classNames('w-auto max-w-[140px] object-contain', logo.tall ? 'h-8' : 'h-7')}
                            />
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}
