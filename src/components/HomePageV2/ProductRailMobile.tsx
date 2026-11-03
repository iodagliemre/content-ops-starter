import { useEffect, useRef, useState } from 'react';
import ArrowRight from '../svgs/arrow-right';
import { onIdle } from './onIdle';
import { useLocale } from './locale';
import { productsContent, INITIAL_ACTIVE_INDEX } from '../../../content/products';

/**
 * PAKET-P2-URUNLER-CAROUSEL G4 (mobile <1024). No 3D — horizontal scroll-snap, user-controlled
 * (swipe is the primary method). "Active" (scale 1 / opacity 1 vs .94 / .6) is purely visual,
 * driven by IntersectionObserver watching each card's intersection ratio — no scroll-jacking,
 * no auto-advance. Arrow keys move focus + scroll one card when a card is focused (G4's
 * keyboard requirement).
 *
 * Plain `<img loading="lazy">` here, not `next/image`: all 4 cards mount unconditionally (the
 * rail needs every card in the DOM for native scroll-snap), so that's 4 next/image component
 * instances doing their full init/effect work on every page load regardless of viewport —
 * measurably worse hydration cost for images this small (2-6KB placeholders) that don't need
 * next/image's resize/format pipeline. Native `loading="lazy"` still defers the byte fetch.
 * See RAPOR-P2A.md for the before/after Lighthouse numbers this was measured against.
 */
export default function ProductRailMobile() {
    const { section: productsSection, items: products } = productsContent[useLocale()];
    const railRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([]);
    const [activeIndex, setActiveIndex] = useState(INITIAL_ACTIVE_INDEX);

    // B4: `scrollend` (single passive listener, fires once per swipe) instead of an
    // IntersectionObserver watching 4 elements continuously through every intermediate scroll
    // position — same "closest card to center" result, less work while scrolling. Falls back to
    // the IntersectionObserver approach on browsers without `scrollend` (Safari < 18.2).
    useEffect(() => {
        const rail = railRef.current;
        if (!rail) return;
        const computeActive = () => {
            const railRect = rail.getBoundingClientRect();
            const railCenter = railRect.left + railRect.width / 2;
            let best = { dist: Infinity, index: -1 };
            cardRefs.current.forEach((el, index) => {
                if (!el) return;
                const r = el.getBoundingClientRect();
                const dist = Math.abs(r.left + r.width / 2 - railCenter);
                if (dist < best.dist) best = { dist, index };
            });
            if (best.index !== -1) setActiveIndex(best.index);
        };

        if (!('onscrollend' in window)) {
            let observer: IntersectionObserver | null = null;
            const cancelIdle = onIdle(() => {
                observer = new IntersectionObserver(
                    (entries) => {
                        let best = { ratio: 0, index: -1 };
                        for (const entry of entries) {
                            const index = Number((entry.target as HTMLElement).dataset.index);
                            if (entry.intersectionRatio > best.ratio) {
                                best = { ratio: entry.intersectionRatio, index };
                            }
                        }
                        if (best.index !== -1) setActiveIndex(best.index);
                    },
                    { root: rail, threshold: 0.6 }
                );
                cardRefs.current.forEach((el) => el && observer!.observe(el));
            });
            return () => {
                cancelIdle();
                observer?.disconnect();
            };
        }

        const cancelIdle = onIdle(() => {
            rail.addEventListener('scrollend', computeActive, { passive: true });
        });
        return () => {
            cancelIdle();
            rail.removeEventListener('scrollend', computeActive);
        };
    }, []);

    // Scrolls the rail only. `scrollIntoView` would also scroll the window vertically to bring the
    // card into view — on page load that pulled mobile users past the hero (RAPOR-P2AR.md).
    const centerCard = (index: number, behavior: ScrollBehavior) => {
        const rail = railRef.current;
        const card = cardRefs.current[index];
        if (!rail || !card) return;
        const railRect = rail.getBoundingClientRect();
        const cardRect = card.getBoundingClientRect();
        const delta = cardRect.left + cardRect.width / 2 - (railRect.left + railRect.width / 2);
        rail.scrollTo({ left: rail.scrollLeft + delta, behavior });
    };

    useEffect(() => {
        const cancelIdle = onIdle(() => centerCard(INITIAL_ACTIVE_INDEX, 'auto'));
        return cancelIdle;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const scrollToIndex = (index: number) => {
        centerCard(Math.max(0, Math.min(products.length - 1, index)), 'smooth');
    };

    return (
        // A6: -mx-6 cancels the section's px-6 so the rail spans the full viewport. Inside that
        // padding it was clipped 24px short on each side, which hid the neighboring cards' peek.
        <div className="-mx-6 mt-10 lg:hidden">
            <div
                ref={railRef}
                className="v2-product-rail flex snap-x snap-mandatory gap-4 overflow-x-auto px-6"
                style={{ scrollbarWidth: 'none', overscrollBehaviorX: 'contain', scrollPaddingInline: 24 }}
            >
                {products.map((product, index) => (
                    <div
                        key={product.id}
                        ref={(el) => {
                            cardRefs.current[index] = el;
                        }}
                        data-index={index}
                        tabIndex={0}
                        onKeyDown={(e) => {
                            if (e.key === 'ArrowRight') {
                                e.preventDefault();
                                scrollToIndex(index + 1);
                            } else if (e.key === 'ArrowLeft') {
                                e.preventDefault();
                                scrollToIndex(index - 1);
                            }
                        }}
                        className="v2-product-card-mobile min-h-[380px] shrink-0 snap-center overflow-hidden rounded-xl border border-v2-border"
                        style={{
                            width: 'calc(100vw - 88px)',
                            background: 'rgba(10,16,32,.7)',
                            opacity: index === activeIndex ? 1 : 0.75,
                            transform: index === activeIndex ? 'scale(1)' : 'scale(.94)'
                        }}
                    >
                        <div className="px-6 pt-7">
                            <h3 className="text-[22px] font-light uppercase tracking-[0.04em] text-white">{product.title}</h3>
                            <p className="mt-2 text-[14px] font-normal leading-normal text-v2-text-secondary">{product.description}</p>
                            <a
                                href={product.href}
                                target={product.external ? '_blank' : undefined}
                                rel={product.external ? 'noopener' : undefined}
                                className="mt-4 inline-flex h-9 items-center rounded-full border border-v2-border px-4 text-[12px] font-medium uppercase tracking-[0.08em] text-white"
                            >
                                {productsSection.cardCta}
                                <ArrowRight className="ml-2 h-3 w-3 fill-current" />
                            </a>
                        </div>
                        {/* A6: object-contain (not cover) — placeholders aren't all the same
                            aspect ratio, contain avoids cropping any of them. mb-6 (24px) keeps
                            it off the card's own bottom edge instead of flush. */}
                        <div className="relative mx-6 mt-4 mb-6 h-[140px]">
                            {/* eslint-disable-next-line @next/next/no-img-element -- tiny placeholder, see file header comment */}
                            <img src={product.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-contain" />
                        </div>
                    </div>
                ))}
                {/* trailing spacer so the last card can reach center */}
                <div className="shrink-0" style={{ width: 'calc(36px - 8px)' }} aria-hidden="true" />
            </div>
        </div>
    );
}
