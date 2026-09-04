import ArrowRight from '../svgs/arrow-right';
import Heartbeat from './Heartbeat';
import HeroHead from './HeroHead';
import { site } from '../../../content/site';

/**
 * PAKET-01 G2. Grid: text 5/12 (left, desktop), head 7/12 (right). Mobile: head first
 * (shrunk, see HeroHead's max-h-[42vh]), text below — via order-first/order-last, reset to
 * source order (text left) at lg. Copy is content/site.ts verbatim, nothing invented here.
 */
export default function Hero() {
    const { hero } = site;

    return (
        <section
            id="hero"
            className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-6 py-12 lg:min-h-[calc(100vh-5rem)] lg:grid-cols-12 lg:gap-8 lg:py-0"
        >
            <div className="order-last flex flex-col items-start lg:order-none lg:col-span-5">
                <h1 className="text-4xl font-semibold leading-tight sm:text-5xl">
                    <span className="v2-fade-up block" style={{ animationDelay: '1600ms' }}>
                        {hero.h1Line1}
                    </span>
                    <span className="v2-fade-up block text-v2-blue" style={{ animationDelay: '1650ms' }}>
                        {hero.h1Line2}
                    </span>
                </h1>

                <p
                    className="v2-fade-up mt-6 max-w-md text-base text-v2-text-secondary"
                    style={{ animationDelay: '1800ms' }}
                >
                    {hero.subtitle}
                </p>

                <Heartbeat className="v2-fade-up mt-8 h-5 w-32 text-v2-text-secondary" delayMs={300} />

                <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
                    <a
                        href="#urunler"
                        className="v2-fade-up inline-flex items-center justify-center rounded-lg bg-v2-blue px-6 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
                        style={{ animationDelay: '2000ms' }}
                    >
                        {hero.ctaPrimary}
                    </a>
                    <a
                        href="#web-factory"
                        className="v2-fade-up inline-flex items-center justify-center gap-2 text-sm font-medium text-v2-text-primary"
                        style={{ animationDelay: '2100ms' }}
                    >
                        {hero.ctaSecondary}
                        <ArrowRight className="h-4 w-4 fill-current" />
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
