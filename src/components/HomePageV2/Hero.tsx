import ArrowRight from '../svgs/arrow-right';
import Heartbeat from './Heartbeat';
import HeroHead from './HeroHead';
import { useDict } from './locale';

/**
 * PAKET-P1-HERO-NAV G3 (typography + hero heartbeat) on top of PAKET-01 G2's grid/structure.
 * Copy is content/{tr,en}/hero.ts (TR = the old content/site.ts hero, verbatim) — nothing invented here. Motion delays (1600/1800/2000/
 * 2100ms) unchanged from PAKET-01 G4, per this package's G5 instruction to keep them as-is.
 */
export default function Hero() {
    const { hero } = useDict();

    return (
        <section
            id="hero"
            className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-12 lg:gap-8 lg:py-0"
        >
            <div className="order-last flex flex-col items-start lg:order-none lg:col-span-5">
                <h1 className="font-light uppercase leading-[1.05] tracking-[0.02em] text-[40px] lg:text-[64px]">
                    <span className="v2-fade-up block" style={{ animationDelay: '1600ms' }}>
                        {hero.h1Line1}
                    </span>
                    <span className="v2-fade-up block text-v2-blue" style={{ animationDelay: '1650ms' }}>
                        {hero.h1Line2}
                    </span>
                </h1>

                <p
                    className="v2-fade-up mt-6 max-w-[440px] text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]"
                    style={{ animationDelay: '1800ms' }}
                >
                    {hero.subtitle}
                </p>

                <Heartbeat
                    className="v2-fade-up mt-8 h-8 w-[120px] text-v2-blue"
                    strokeWidth={1.5}
                    glow
                    delayMs={300}
                />

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="#urunler"
                        className="v2-fade-up inline-flex h-12 items-center justify-center rounded-lg bg-v2-blue px-6 text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
                        style={{ animationDelay: '2000ms' }}
                    >
                        {hero.ctaPrimary}
                    </a>
                    <a
                        href="#web-factory"
                        className="v2-fade-up group inline-flex h-12 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-v2-text-primary"
                        style={{ animationDelay: '2100ms' }}
                    >
                        {hero.ctaSecondary}
                        <ArrowRight className="h-4 w-4 fill-current transition-transform group-hover:translate-x-1" />
                    </a>
                </div>
            </div>

            <div className="order-first lg:order-none lg:col-span-7">
                <HeroHead
                    layers={[
                        {
                            desktopSrc: '/hero/head-placeholder.webp',
                            mobileSrc: '/hero/head-placeholder-mobile.webp',
                            alt: ''
                        }
                    ]}
                />
            </div>
        </section>
    );
}
