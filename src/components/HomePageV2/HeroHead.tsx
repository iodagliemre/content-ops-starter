import { useEffect, useState } from 'react';
import Head from 'next/head';
import Image, { getImageProps } from 'next/image';
import classNames from 'classnames';

export type HeroHeadLayer = {
    desktopSrc: string;
    mobileSrc: string;
    alt?: string;
};

/**
 * PAKET-P1-HERO-NAV F5 + F7 (on top of PAKET-01 G3's layer-stack structure).
 *
 * F5 — mask: two intersected linear-gradients (soft fade left/top/bottom, crisp right edge)
 * instead of P01's single radial-gradient, so no rectangle edge reads on any side but the
 * right. Applied to the OUTER per-layer wrapper so it also covers the overlay below (F5's own
 * note: otherwise the overlay's rectangle would show through while it fades).
 * PAKET-P1R-KAFA-MASKE (CD Karar 01 revizyonu, 05.09.2026): horizontal start 38%→46%,
 * vertical fade 14/86%→20/80% — wider/softer fade so no container edge reads, especially
 * top-left. See RAPOR-P1R-KAFA-MASKE.md.
 *
 * F7 — overlay-fade motion replaces P01's scale-only reveal: the image is opacity:1 from the
 * first frame (required for LCP — see RAPOR-P01.md's opacity finding, still true here), and a
 * bg-v2-bg-base overlay sitting on top fades 1→0 while the wrapper scales .96→1. Both animate
 * on the wrapper's `onAnimationEnd`, which then drops both `will-change` hints together.
 *
 * PAKET-P6 A3: the desktop variant gets its own preload, scoped to `(min-width: 1024px)` so phones never
 * fetch it (Next's `priority` preload can't take a media query, which is why only mobile uses it).
 * Same srcset/sizes as the <Image> below, so the browser reuses the preloaded response. No visual change.
 */
export default function HeroHead({ layers }: { layers: HeroHeadLayer[] }) {
    const [settled, setSettled] = useState(false);
    const desktop = layers[0] ? getImageProps({ src: layers[0].desktopSrc, alt: '', fill: true, quality: 65, sizes: '58vw' }).props : null;

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setSettled(true);
        }
    }, []);

    return (
        <>
            {desktop && (
                <Head>
                    <link
                        key="hero-desktop-preload"
                        rel="preload"
                        as="image"
                        imageSrcSet={desktop.srcSet}
                        imageSizes={desktop.sizes}
                        media="(min-width: 1024px)"
                        {...{ fetchpriority: 'high' }}
                    />
                </Head>
            )}
            <div className="relative mx-auto aspect-[644/440] max-h-[42vh] w-auto lg:h-auto lg:max-h-none lg:w-full">
                {layers.map((layer, i) => (
                    <div
                        key={i}
                        className="absolute inset-0"
                        style={{
                            maskImage:
                                'linear-gradient(to right, transparent 0%, #000 46%, #000 100%), linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)',
                            maskComposite: 'intersect',
                            WebkitMaskImage:
                                'linear-gradient(to right, transparent 0%, #000 46%, #000 100%), linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)',
                            WebkitMaskComposite: 'source-in'
                        }}
                    >
                        <div
                            className={classNames('v2-hero-head-layer absolute inset-0', !settled && 'will-change-transform')}
                            style={{ animationDelay: `${900 + i * 120}ms` }}
                            onAnimationEnd={() => setSettled(true)}
                        >
                            {/*
                          Only the mobile variant gets `priority` (Next always emits its preload
                          link regardless of the hidden/lg:block CSS below — there's no way to
                          scope that link to a media query). Mobile is the hard Performance Gate
                          requirement, so it wins the eager-preload slot; desktop falls back to
                          native lazy-load, which a `display:none` image never actually starts
                          until it's shown — see RAPOR-P01.md.
                        */}
                            <Image src={layer.desktopSrc} alt={layer.alt ?? ''} fill quality={65} sizes="58vw" className="hidden object-contain lg:block" />
                            <Image
                                src={layer.mobileSrc}
                                alt={layer.alt ?? ''}
                                fill
                                priority
                                quality={65}
                                sizes="90vw"
                                className="block object-contain lg:hidden"
                            />
                            <div
                                aria-hidden="true"
                                className={classNames(
                                    'v2-hero-head-overlay pointer-events-none absolute inset-0 bg-v2-bg-base',
                                    !settled && '[will-change:opacity]'
                                )}
                                style={{ animationDelay: `${900 + i * 120}ms` }}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
