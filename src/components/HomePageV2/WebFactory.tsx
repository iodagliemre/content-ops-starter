import type { CSSProperties } from 'react';
import classNames from 'classnames';
import ArrowRight from '../svgs/arrow-right';
import { useRevealOnce } from './useRevealOnce';
import { useDict } from './locale';
import { webFactoryLinks } from '../../../content/webFactory';

/**
 * PAKET-P3-WEBFACTORY-DONUSUM G2. Passage to web.doveify.io, not a product showcase: one message,
 * one CTA. Desktop: heading in columns 1-3, collage in 4-9, description + CTA in 10-12. Mobile: same
 * DOM order, center screen only, no 3D. The collage reveals once (.v2-wf-collage in main.css).
 *
 * Plain lazy `<img>` for the same reason as ProductRailMobile.tsx: small pre-sized WebPs (P3-R1: real
 * site captures, 2x) in fixed-size boxes, below the fold. Side screens are display:none on mobile, so
 * they aren't fetched there. `object-top` keeps each site's nav in view when the frame crops.
 */
// P3-R1: side screens 255×170 sit under the 450×300 center screen; 205px keeps their outer edges
// inside the collage's 600px column.
const SIDE_TRANSLATE_X = 205;

export default function WebFactory() {
    const { ref, isVisible } = useRevealOnce<HTMLElement>();
    const webFactorySection = { ...useDict().webFactory, ...webFactoryLinks };
    const { screens } = webFactorySection;

    return (
        <section
            id="web-factory"
            ref={ref}
            className={classNames(
                'v2-cv-webfactory mx-auto grid max-w-7xl grid-cols-1 px-6 py-16 lg:grid-cols-12 lg:items-center lg:gap-8 lg:py-24',
                isVisible && 'is-visible'
            )}
        >
            <div className="lg:col-span-3">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{webFactorySection.eyebrow}</p>
                <h2 className="mt-3 max-w-[380px] text-[28px] font-light leading-[1.2] text-white lg:w-[310px] lg:text-[34px]">
                    {webFactorySection.heading}
                </h2>
            </div>

            <div
                className="v2-wf-collage relative mt-10 lg:col-span-6 lg:mt-0 lg:h-[300px]"
                style={{ perspective: '1200px' }}
            >
                <Screen
                    src={screens.left}
                    className="absolute left-1/2 top-1/2 hidden h-[170px] w-[255px] lg:block"
                    style={{
                        transform: `translate(-50%, -50%) translateX(-${SIDE_TRANSLATE_X}px) translateZ(-80px) rotateY(-18deg)`,
                        opacity: 0.85
                    }}
                />
                <Screen
                    src={screens.right}
                    className="absolute left-1/2 top-1/2 hidden h-[170px] w-[255px] lg:block"
                    style={{
                        transform: `translate(-50%, -50%) translateX(${SIDE_TRANSLATE_X}px) translateZ(-80px) rotateY(18deg)`,
                        opacity: 0.85
                    }}
                />
                <Screen
                    src={screens.center}
                    className="relative z-10 aspect-[3/2] w-full lg:absolute lg:left-1/2 lg:top-1/2 lg:h-[300px] lg:w-[450px] lg:-translate-x-1/2 lg:-translate-y-1/2 lg:aspect-auto"
                />
            </div>

            <div className="mt-10 lg:col-span-3 lg:mt-0">
                <p className="text-[14px] font-normal leading-[1.6] text-v2-text-secondary">{webFactorySection.description}</p>
                <a
                    href={webFactorySection.href}
                    target="_blank"
                    rel="noopener"
                    className="group mt-4 inline-flex h-12 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-v2-blue"
                >
                    {webFactorySection.cta}
                    <ArrowRight className="h-4 w-4 fill-current transition-transform group-hover:translate-x-1" />
                </a>
            </div>
        </section>
    );
}

/** Screen frame: 1px border, radius 8, 6px browser strip on top. */
function Screen({ src, className, style }: { src: string; className: string; style?: CSSProperties }) {
    return (
        <div
            className={classNames('flex flex-col overflow-hidden rounded-lg border border-v2-border bg-v2-bg-base', className)}
            style={style}
        >
            <div aria-hidden="true" className="h-1.5 shrink-0 border-b border-v2-border" />
            <div className="min-h-0 flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element -- pre-sized WebP, see file header comment */}
                <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
            </div>
        </div>
    );
}
