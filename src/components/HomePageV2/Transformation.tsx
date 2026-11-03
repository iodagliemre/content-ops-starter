import type { CSSProperties } from 'react';
import classNames from 'classnames';
import { useRevealOnce } from './useRevealOnce';
import { transformationSection, transformationStages } from '../../../content/transformation';

/**
 * PAKET-P3-WEBFACTORY-DONUSUM G3. One line, four stages (CD #4): no cards, no icons. Horizontal on
 * desktop, vertical on mobile, from the same DOM; geometry and the one-shot reveal live in main.css
 * (.v2-tx-*). `--v2-i` is each stage's position, which main.css turns into its reveal delay.
 */
export default function Transformation() {
    const { ref, isVisible } = useRevealOnce<HTMLElement>();

    return (
        <section
            id="donusum"
            ref={ref}
            className={classNames(
                'v2-cv-donusum mx-auto grid max-w-7xl grid-cols-1 px-6 py-16 lg:grid-cols-12 lg:gap-8 lg:py-24',
                isVisible && 'is-visible'
            )}
        >
            <div className="lg:col-span-4">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{transformationSection.eyebrow}</p>
                <h2 className="mt-3 max-w-[380px] text-[28px] font-light leading-[1.2] text-white lg:w-[412px] lg:max-w-none lg:text-[34px]">
                    {transformationSection.heading}
                </h2>
            </div>

            <div className="mt-10 lg:col-span-8 lg:mt-0">
                <ol className="v2-tx-track relative">
                    <li aria-hidden="true" className="v2-tx-line" />
                    {transformationStages.map((stage, index) => (
                        <li key={stage.label} className="v2-tx-stage relative" style={{ '--v2-i': index } as CSSProperties}>
                            <span aria-hidden="true" className="v2-tx-node" />
                            <div className="v2-tx-text">
                                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-v2-blue">{stage.label}</p>
                                <h3 className="mt-2 text-[16px] font-normal leading-[1.3] text-white lg:min-h-[42px]">{stage.title}</h3>
                                <p className="mt-2 text-[13px] font-normal leading-[1.5] text-v2-text-secondary lg:max-w-[200px]">
                                    {stage.description}
                                </p>
                            </div>
                        </li>
                    ))}
                </ol>

                <p className="v2-tx-quote mt-12 flex items-start gap-4 text-[20px] font-light leading-[1.4] text-v2-text-secondary">
                    <span aria-hidden="true" className="mt-[14px] h-px w-6 shrink-0 bg-v2-blue" />
                    {transformationSection.quote}
                </p>
            </div>
        </section>
    );
}
