import { useEffect, useRef, useState } from 'react';
import classNames from 'classnames';
import ChevronLeft from '../svgs/chevron-left';
import ChevronRight from '../svgs/chevron-right';
import ProductStageDesktop from './ProductStageDesktop';
import ProductRailMobile from './ProductRailMobile';
import { onIdle } from './onIdle';
import { useLocale } from './locale';
import { productsContent, INITIAL_ACTIVE_INDEX } from '../../../content/products';

/**
 * PAKET-P2-URUNLER-CAROUSEL G2 + G5. Section header (eyebrow/H2/description/arrows) + shared
 * `activeIndex` state for the desktop 3D stage; the mobile rail manages its own active state
 * independently (only one of the two is ever visible, per breakpoint).
 *
 * "Section görünüme girince tek seferlik fadeUp" (G5): unlike hero's fixed-delay entrance
 * (visible on page load), this section is below the fold, so its one-shot reveal is triggered
 * by IntersectionObserver the first time it scrolls into view, not a hardcoded animation-delay.
 * See .v2-reveal in main.css for the reduced-motion-safe pattern this reuses.
 */
export default function Products() {
    const { section: productsSection, items: products, prevLabel, nextLabel } = productsContent[useLocale()];
    const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);
    // B3: starts false so SSR and the first client render match exactly (no hydration
    // mismatch) — ProductStageDesktop renders its cheap non-interactive form until this flips,
    // which only happens post-hydration, deferred to idle time, and only when matchMedia
    // confirms desktop. On mobile it's `hidden lg:block` regardless, so staying non-interactive
    // there costs nothing visually and saves the interactive scene's hydration work.
    const [isDesktopInteractive, setIsDesktopInteractive] = useState(false);

    useEffect(() => {
        const mql = window.matchMedia('(min-width: 1024px)');
        const update = () => setIsDesktopInteractive(mql.matches);
        const cancelIdle = onIdle(() => {
            update();
            mql.addEventListener('change', update);
        });
        return () => {
            cancelIdle();
            mql.removeEventListener('change', update);
        };
    }, []);

    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;
        let observer: IntersectionObserver | null = null;
        const cancelIdle = onIdle(() => {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer?.disconnect();
                    }
                },
                { threshold: 0.2 }
            );
            observer.observe(el);
        });
        return () => {
            cancelIdle();
            observer?.disconnect();
        };
    }, []);

    const atStart = activeIndex === 0;
    const atEnd = activeIndex === products.length - 1;

    return (
        <section
            id="urunler"
            ref={sectionRef}
            // A4: padding 96/64 on desktop. The 120px glow is absolutely positioned below
            // ProductStageDesktop, so it doesn't add to the section's height. Mobile has no glow
            // and keeps a plain 48px.
            className={classNames(
                'v2-reveal v2-cv-products mx-auto max-w-7xl px-6 pb-12 lg:pb-16',
                isVisible && 'is-visible'
            )}
            style={{ paddingTop: 96 }}
        >
            <div className="lg:flex lg:items-end lg:justify-between lg:gap-8">
                <div>
                    <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{productsSection.eyebrow}</p>
                    <h2 className="mt-3 max-w-[380px] text-[28px] font-light leading-[1.2] text-white lg:max-w-[440px] lg:text-[34px]">
                        {productsSection.heading}
                    </h2>
                </div>
                <p className="mt-4 max-w-[360px] text-[15px] font-normal text-v2-text-secondary lg:mt-0">
                    {productsSection.description}
                </p>
                <div className="mt-6 hidden shrink-0 items-center gap-3 lg:flex">
                    <ArrowButton direction="left" label={prevLabel} disabled={atStart} onClick={() => setActiveIndex((i) => i - 1)} />
                    <ArrowButton direction="right" label={nextLabel} disabled={atEnd} onClick={() => setActiveIndex((i) => i + 1)} />
                </div>
            </div>

            <ProductStageDesktop
                activeIndex={isDesktopInteractive ? activeIndex : INITIAL_ACTIVE_INDEX}
                onSelect={setActiveIndex}
                interactive={isDesktopInteractive}
            />
            <ProductRailMobile />
        </section>
    );
}

function ArrowButton({
    direction,
    label,
    disabled,
    onClick
}: {
    direction: 'left' | 'right';
    label: string;
    disabled: boolean;
    onClick: () => void;
}) {
    const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
    return (
        <button
            type="button"
            aria-label={label}
            aria-disabled={disabled}
            disabled={disabled}
            onClick={onClick}
            className={classNames(
                'flex h-9 w-9 items-center justify-center rounded-full border border-v2-border transition-colors',
                disabled ? 'opacity-35' : 'hover:border-white'
            )}
        >
            <Icon className="h-3.5 w-3.5 fill-current text-white" />
        </button>
    );
}
