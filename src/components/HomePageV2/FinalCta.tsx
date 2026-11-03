import classNames from 'classnames';
import Heartbeat from './Heartbeat';
import { useRevealOnce } from './useRevealOnce';
import { finalCtaSection } from '../../../content/finalCta';

/**
 * PAKET-P4-SAHIPLIK-FINAL G4. Centered block, no decoration other than a large hero-style heartbeat
 * that draws once when the section enters the viewport (main.css: #iletisim .v2-heartbeat-path).
 * Heartbeat.tsx is P1-locked, so the "draw on reveal" timing lives in CSS, not in a new prop.
 */
export default function FinalCta() {
    const { ref, isVisible } = useRevealOnce<HTMLElement>();
    const { primary, secondary } = finalCtaSection;

    return (
        <section
            id="iletisim"
            ref={ref}
            className={classNames('v2-cv-iletisim mx-auto max-w-[640px] px-6 py-20 text-center lg:py-32', isVisible && 'is-visible')}
        >
            <Heartbeat className="mx-auto mb-8 h-10 w-[240px] text-v2-blue opacity-35" strokeWidth={1.5} glow delayMs={0} />
            <h2 className="text-[32px] font-light leading-[1.15] text-white lg:text-[48px]">{finalCtaSection.heading}</h2>
            <p className="mt-4 text-[16px] font-normal leading-[1.6] text-v2-text-secondary lg:text-[18px]">{finalCtaSection.subline}</p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-8">
                <a
                    href={primary.href}
                    target="_blank"
                    rel="noopener"
                    className="inline-flex h-12 items-center justify-center rounded-lg bg-v2-blue px-6 text-[13px] font-medium uppercase tracking-[0.08em] text-white transition-opacity hover:opacity-90"
                >
                    {primary.label}
                </a>
                <a
                    href={secondary.href}
                    className="inline-flex h-12 items-center text-[14px] font-medium text-v2-text-primary transition-colors hover:text-v2-blue"
                >
                    {secondary.label}
                </a>
            </div>
        </section>
    );
}
