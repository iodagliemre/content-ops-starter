import type { CSSProperties } from 'react';
import classNames from 'classnames';
import ArrowRight from '../svgs/arrow-right';
import { useDict } from './locale';
import type { Product } from '../../../content/products';

/**
 * PAKET-P2AR-CAROUSEL-DUZELTME A1-A3, A7 (desktop ≥1024). Pure CSS 3D transform, no JS
 * carousel library. Real geometry (post-measurement, see RAPOR-P2AR.md) — the brief's proposal
 * values are a starting point; `slotStyle()` below holds whatever value actually kept every
 * card's rendered edge inside the 24px scene padding at 1280px.
 *
 * Each card's position is computed from `offset = index - activeIndex`: 0 = center, ±1 =
 * visible side, everything else = the hidden "4th card" slot (rotated further out, opacity 0,
 * aria-hidden, pointer-events none). Side-card click re-centers; center card's own CTA is the
 * only link that navigates. A single CSS `transition` on transform/opacity (see .v2-product-card
 * in main.css) means repeated clicks mid-animation just retarget smoothly — no manual queueing.
 */
export default function ProductStageDesktop({
    activeIndex,
    onSelect,
    interactive
}: {
    activeIndex: number;
    onSelect: (index: number) => void;
    /**
     * B3: false for SSR + the first client render (matches, so no hydration mismatch) — that
     * pass renders side cards with no role/tabIndex/onClick/onKeyDown at all, cheaper to hydrate
     * than the real thing. Products.tsx flips this to true (a normal post-hydration update, not
     * a rehydration) only once `matchMedia('(min-width:1024px)')` confirms desktop — on mobile
     * it never flips, so the never-visible (`hidden lg:block`) scene stays in its cheaper form.
     * See RAPOR-P2AR.md "B3".
     */
    interactive: boolean;
}) {
    const { items: products } = useDict().products;
    return (
        <div className="relative mt-16 hidden lg:block">
            {/* A7: no paint clipping here, the center card's image overflows the scene's card area.
                Horizontal overflow is handled by overflow-x-hidden on the page root (index.tsx). */}
            <div
                className="relative h-[400px]"
                style={{ perspective: '1400px', perspectiveOrigin: '50% 40%', overflow: 'visible', contain: 'layout' }}
            >
                {products.map((product, index) => (
                    <Card
                        key={product.id}
                        product={product}
                        offset={index - activeIndex}
                        onSelect={() => onSelect(index)}
                        interactive={interactive}
                    />
                ))}
            </div>
            {/* A3: ground reflection removed — replaced with a single decorative glow div, no image. */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-full h-[120px]"
                style={{ background: 'radial-gradient(ellipse 60% 100% at 50% 0%, rgba(47,123,255,.10), transparent 70%)' }}
            />
        </div>
    );
}

// A1: brief's proposal (395px) overflowed the 24px scene padding at 1280px (measured: left card
// to x=-67, right card to x=1332, against a 24-1256 target) — reduced until the real rendered
// bounding box cleared both edges. See RAPOR-P2AR.md "A1" for the measurement history.
const SIDE_TRANSLATE_X = 310;
const HIDDEN_TRANSLATE_X = 760;
// A1: a side card's inner ~132px sits under the center card at 1280px, so its content stays in the
// outer part of the card: 32px padding + 260px content + 16px clear of the center card's edge.
const SIDE_CONTENT_WIDTH = 260;
const CTA_CLASS =
    'mt-4 inline-flex h-9 items-center rounded-full border border-v2-border px-4 text-[12px] font-medium uppercase tracking-[0.08em] text-white';

function slotStyle(offset: number): CSSProperties {
    if (offset === 0) {
        return { transform: 'translate(-50%, -50%) translateZ(0)', opacity: 1, zIndex: 30 };
    }
    if (offset === -1) {
        return {
            transform: `translate(-50%, -50%) rotateY(30deg) translateX(-${SIDE_TRANSLATE_X}px) translateZ(-200px)`,
            opacity: 0.9,
            zIndex: 20
        };
    }
    if (offset === 1) {
        return {
            transform: `translate(-50%, -50%) rotateY(-30deg) translateX(${SIDE_TRANSLATE_X}px) translateZ(-200px)`,
            opacity: 0.9,
            zIndex: 20
        };
    }
    const farLeft = offset < -1;
    return {
        transform: `translate(-50%, -50%) rotateY(${farLeft ? 30 : -30}deg) translateX(${farLeft ? -HIDDEN_TRANSLATE_X : HIDDEN_TRANSLATE_X}px) translateZ(-400px)`,
        opacity: 0,
        zIndex: 10
    };
}

function Card({
    product,
    offset,
    onSelect,
    interactive
}: {
    product: Product;
    offset: number;
    onSelect: () => void;
    interactive: boolean;
}) {
    const { section: productsSection } = useDict().products;
    const isCenter = offset === 0;
    const isSidePosition = Math.abs(offset) === 1;
    const isSide = isSidePosition && interactive;
    const isHidden = !isCenter && !isSidePosition;
    const style = slotStyle(offset);

    // isHidden slot (translateX ±900px, opacity 0) is never seen — skip its inner content
    // (text/CTA/image) entirely rather than rendering and laying it out off-canvas.
    if (isHidden) {
        return (
            <div
                className="v2-product-card absolute left-1/2 top-1/2"
                style={{ width: 440, height: 280, ...style, visibility: 'hidden', pointerEvents: 'none' }}
                aria-hidden="true"
            />
        );
    }

    return (
        <div
            className="v2-product-card absolute left-1/2 top-1/2"
            style={{
                width: isCenter ? 560 : 440,
                height: isCenter ? 320 : 280,
                ...style,
                visibility: 'visible',
                pointerEvents: 'auto'
            }}
        >
            <div
                role={isSide ? 'button' : undefined}
                tabIndex={isSide ? 0 : -1}
                onClick={isSide ? onSelect : undefined}
                onKeyDown={
                    isSide
                        ? (e) => {
                              if (e.key === 'Enter' || e.key === ' ') {
                                  e.preventDefault();
                                  onSelect();
                              }
                          }
                        : undefined
                }
                className={classNames(
                    'relative h-full w-full rounded-xl',
                    isCenter ? 'overflow-visible' : 'overflow-hidden'
                )}
                style={{
                    background: isCenter ? 'rgba(12,18,36,.92)' : 'rgba(14,22,44,.85)',
                    border: `1px solid ${isCenter ? 'rgba(90,130,255,.45)' : 'rgba(90,130,255,.28)'}`,
                    boxShadow: isCenter
                        ? 'inset 0 1px 0 rgba(255,255,255,.06), 0 0 40px rgba(47,123,255,.12)'
                        : 'inset 0 1px 0 rgba(255,255,255,.06)',
                    cursor: isSide ? 'pointer' : undefined
                }}
            >
                {/* B4: darkening via an overlay instead of `filter: brightness()` — filter
                    forces its own compositing pass on top of the card's existing 3D transform,
                    an overlay div is just paint. */}
                {isSidePosition && (
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 rounded-xl"
                        style={{ background: 'rgba(0,0,0,.1)' }}
                    />
                )}
                <div
                    className={isCenter ? 'px-8 pt-6 text-center' : 'pt-8 text-left'}
                    style={
                        isCenter
                            ? undefined
                            : offset < 0
                              ? { width: SIDE_CONTENT_WIDTH, marginLeft: 32 }
                              : { width: SIDE_CONTENT_WIDTH, marginLeft: 'auto', marginRight: 32 }
                    }
                >
                    <h3
                        className={
                            isCenter
                                ? 'text-[26px] font-light uppercase tracking-[0.04em] text-white'
                                : 'text-[22px] font-light uppercase tracking-[0.04em] text-white'
                        }
                    >
                        {product.title}
                    </h3>
                    <p
                        className={classNames(
                            'mt-2 text-[14px] font-normal leading-normal text-v2-text-secondary',
                            !isCenter && 'max-w-[300px]'
                        )}
                    >
                        {product.description}
                    </p>
                    {isCenter ? (
                        <a
                            href={product.href}
                            target={product.external ? '_blank' : undefined}
                            rel={product.external ? 'noopener' : undefined}
                            className={classNames(CTA_CLASS, 'transition-colors hover:border-v2-blue')}
                        >
                            {productsSection.cardCta}
                            <ArrowRight className="ml-2 h-3 w-3 fill-current" />
                        </a>
                    ) : (
                        // Visual only: clicking a side card re-centers it, so a link here would be
                        // nested inside role="button" and compete with that action.
                        <span aria-hidden="true" className={CTA_CLASS}>
                            {productsSection.cardCta}
                            <ArrowRight className="ml-2 h-3 w-3 fill-current" />
                        </span>
                    )}
                </div>
                {isCenter && (
                    // A7: image overflows the card's bottom edge by 24px (card is `overflow-visible`
                    // above), so its top sits 144px below the card's top edge. The center card's
                    // text is kept above that line: pt-6 and a single-line description. -25 because
                    // `bottom` is measured from inside the card's 1px border.
                    <div
                        className="absolute left-1/2 overflow-hidden rounded-lg"
                        style={{
                            bottom: -25,
                            transform: 'translateX(-50%)',
                            width: 480,
                            height: 200,
                            boxShadow: '0 20px 40px rgba(0,0,0,.5)'
                        }}
                    >
                        {/* eslint-disable-next-line @next/next/no-img-element -- tiny placeholder, see ProductRailMobile.tsx header comment */}
                        <img src={product.image} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
                    </div>
                )}
            </div>
        </div>
    );
}
