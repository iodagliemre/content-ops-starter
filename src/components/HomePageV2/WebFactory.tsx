import { useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent } from 'react';
import classNames from 'classnames';
import ArrowRight from '../svgs/arrow-right';
import ArrowButton from './ArrowButton';
import { useRevealOnce } from './useRevealOnce';
import { useDict } from './locale';
import { webFactoryLinks } from '../../../content/webFactory';

/**
 * PAKET-P3-WEBFACTORY-DONUSUM G2. Passage to web.doveify.io: one message, one CTA. Desktop: heading in
 * columns 1-3, collage in 4-9, description + CTA in 10-12. The collage reveals once (.v2-wf-collage).
 *
 * PAKET-P7 G7 (Emre kararı 05.11.2026, DESIGN-LOCK v0.6): the collage is a slider. The active screen sits
 * in the centre (450×300), the other two at the P3-R1 side positions (255×170 look: the same 450×300 box
 * scaled .567, so a move is one transform/opacity transition, .55s). Arrow buttons (Products style) under
 * the description, a click on a side screen brings it to the centre, the centre screen links to the
 * client's site (_blank). Auto-play: once the section is in view, 3.5s steps 1 → 2 → 3, one round, then
 * it stops; any arrow/side click cancels it for good; hover pauses it; none under reduced motion.
 * Mobile: a snap rail of the three screens (same behaviour as the Products rail), no auto-play.
 */
const SCREENS = webFactoryLinks.screens;
const COUNT = SCREENS.length;
// P3-R1 geometry: side screens 255×170 under the 450×300 centre, 205px out, rotateY ∓18°, translateZ -80.
const SIDE_TRANSLATE_X = 205;
const SIDE_SCALE = 255 / 450;
const AUTO_STEP_MS = 3500;

function slotStyle(offset: number): CSSProperties {
    if (offset === 0) return { transform: 'translate(-50%, -50%)', opacity: 1, zIndex: 10 };
    const side = offset === 1 ? 1 : -1;
    return {
        transform: `translate(-50%, -50%) translateX(${side * SIDE_TRANSLATE_X}px) translateZ(-80px) rotateY(${side * 18}deg) scale(${SIDE_SCALE})`,
        opacity: 0.85,
        zIndex: 0
    };
}

export default function WebFactory() {
    const { ref, isVisible } = useRevealOnce<HTMLElement>();
    const t = useDict().webFactory;
    const [active, setActive] = useState(0);
    const [autoDone, setAutoDone] = useState(false);
    const [paused, setPaused] = useState(false);
    const allowAuto = useRef(false);

    useEffect(() => {
        allowAuto.current =
            window.matchMedia('(min-width: 1024px)').matches && window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    }, []);

    // One round: 0 → 1 → 2, then stop. Restarted (fresh 3.5s) after a hover pause.
    useEffect(() => {
        if (!isVisible || autoDone || paused || !allowAuto.current) return;
        if (active >= COUNT - 1) {
            setAutoDone(true);
            return;
        }
        const timer = window.setTimeout(() => setActive((i) => i + 1), AUTO_STEP_MS);
        return () => window.clearTimeout(timer);
    }, [isVisible, autoDone, paused, active]);

    const goTo = useCallback((index: number) => {
        setAutoDone(true);
        setActive(((index % COUNT) + COUNT) % COUNT);
    }, []);

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
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{t.eyebrow}</p>
                <h2 className="mt-3 max-w-[380px] text-[28px] font-light leading-[1.2] text-white lg:w-[310px] lg:text-[34px]">{t.heading}</h2>
            </div>

            {/* Desktop slider */}
            <div
                className="v2-wf-collage relative hidden lg:col-span-6 lg:block lg:h-[300px]"
                style={{ perspective: '1200px' }}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
            >
                {SCREENS.map((screen, index) => {
                    const offset = (index - active + COUNT) % COUNT; // 0 centre, 1 right, 2 left
                    const slot = offset === 0 ? 0 : offset === 1 ? 1 : -1;
                    const isCenter = slot === 0;
                    return (
                        <a
                            key={screen.src}
                            href={screen.href}
                            target="_blank"
                            rel="noopener"
                            aria-label={isCenter ? screen.name + t.openSuffix : undefined}
                            aria-hidden={isCenter ? undefined : true}
                            tabIndex={isCenter ? undefined : -1}
                            onClick={
                                isCenter
                                    ? undefined
                                    : (event: MouseEvent) => {
                                          event.preventDefault();
                                          goTo(index);
                                      }
                            }
                            className={classNames('v2-wf-screen absolute left-1/2 top-1/2 h-[300px] w-[450px]', !isCenter && 'cursor-pointer')}
                            style={slotStyle(slot)}
                        >
                            <Screen src={screen.src} />
                        </a>
                    );
                })}
            </div>

            {/* Mobile rail */}
            <div className="v2-wf-collage -mx-6 mt-10 lg:hidden">
                <ul
                    className="flex snap-x snap-mandatory gap-4 overflow-x-auto px-6"
                    style={{ scrollbarWidth: 'none', overscrollBehaviorX: 'contain', scrollPaddingInline: 24 }}
                >
                    {SCREENS.map((screen) => (
                        <li key={screen.src} className="shrink-0 snap-center" style={{ width: 'calc(100vw - 88px)' }}>
                            <a href={screen.href} target="_blank" rel="noopener" aria-label={screen.name + t.openSuffix} className="block aspect-[3/2]">
                                <Screen src={screen.src} />
                            </a>
                        </li>
                    ))}
                    <li aria-hidden="true" className="shrink-0" style={{ width: 'calc(36px - 8px)' }} />
                </ul>
            </div>

            <div className="mt-10 lg:col-span-3 lg:mt-0">
                <p className="text-[14px] font-normal leading-[1.6] text-v2-text-secondary">{t.description}</p>
                <a
                    href={webFactoryLinks.href}
                    target="_blank"
                    rel="noopener"
                    className="group mt-4 inline-flex h-12 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-v2-blue"
                >
                    {t.cta}
                    <ArrowRight className="h-4 w-4 fill-current transition-transform group-hover:translate-x-1" />
                </a>
                <div className="mt-6 hidden items-center gap-3 lg:flex">
                    <ArrowButton direction="left" label={t.prevLabel} disabled={false} onClick={() => goTo(active - 1)} />
                    <ArrowButton direction="right" label={t.nextLabel} disabled={false} onClick={() => goTo(active + 1)} />
                </div>
            </div>
        </section>
    );
}

/** Screen frame: 1px border, radius 8, 6px browser strip on top. */
function Screen({ src }: { src: string }) {
    return (
        <span className="flex h-full w-full flex-col overflow-hidden rounded-lg border border-v2-border bg-v2-bg-base">
            <span aria-hidden="true" className="block h-1.5 shrink-0 border-b border-v2-border" />
            <span className="block min-h-0 flex-1">
                {/* eslint-disable-next-line @next/next/no-img-element -- small pre-sized lazy WebP in a fixed-size frame (P3-R1) */}
                <img src={src} alt="" loading="lazy" decoding="async" className="h-full w-full object-cover object-top" />
            </span>
        </span>
    );
}
