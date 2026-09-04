import { useEffect, useState } from 'react';
import Image from 'next/image';
import classNames from 'classnames';

export type HeroHeadLayer = {
    desktopSrc: string;
    mobileSrc: string;
    alt?: string;
};

/**
 * Layered head image (PAKET-01 G3). `layers` takes N image pairs; today there's exactly one
 * (a placeholder crop — see RAPOR-P01.md), but adding more later needs no code change here:
 * each layer stacks absolutely in the same aspect-ratio'd box with its own stagger delay.
 */
export default function HeroHead({ layers }: { layers: HeroHeadLayer[] }) {
    const [settled, setSettled] = useState(false);

    useEffect(() => {
        if (typeof window === 'undefined') return;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            setSettled(true);
        }
    }, []);

    return (
        <div
            className="relative mx-auto aspect-[644/440] max-h-[42vh] w-auto lg:h-auto lg:max-h-none lg:w-full"
            style={{
                maskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 55%, transparent 100%)',
                WebkitMaskImage: 'radial-gradient(ellipse 72% 72% at 50% 50%, #000 55%, transparent 100%)'
            }}
        >
            {layers.map((layer, i) => (
                <div
                    key={i}
                    className={classNames('v2-hero-head-layer absolute inset-0', !settled && 'will-change-transform')}
                    style={{ animationDelay: `${900 + i * 120}ms` }}
                    onAnimationEnd={() => setSettled(true)}
                >
                    {/*
                      Only the mobile variant gets `priority` (Next always emits its preload
                      link regardless of the hidden/lg:block CSS below — there's no way to
                      scope that link to a media query). Mobile is the hard Performance Gate
                      requirement (G5), so it wins the eager-preload slot; desktop falls back
                      to native lazy-load, which a `display:none` image never actually starts
                      until it's shown — see RAPOR-P01.md for the "preloaded but not used"
                      console warning this replaces and why.
                    */}
                    <Image
                        src={layer.desktopSrc}
                        alt={layer.alt ?? ''}
                        fill
                        quality={65}
                        sizes="58vw"
                        className="hidden object-contain lg:block"
                    />
                    <Image
                        src={layer.mobileSrc}
                        alt={layer.alt ?? ''}
                        fill
                        priority
                        quality={65}
                        sizes="90vw"
                        className="block object-contain lg:hidden"
                    />
                </div>
            ))}
        </div>
    );
}
