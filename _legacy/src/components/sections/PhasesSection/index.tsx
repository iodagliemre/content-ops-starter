import * as React from 'react';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';
import TitleBlock from '../../blocks/TitleBlock';

const DEFAULT_PHASE_IMAGES = [
    '/images/phase-1.png',
    '/images/phase-2.png',
    '/images/phase-3.png',
    '/images/phase-4.png'
];

export default function PhasesSection(props) {
    const { elementId, title, subtitle, items = [], quote, styles = {}, enableAnnotations } = props;
    const padding = styles?.self?.padding ?? ['py-20', 'px-4'];

    return (
        <section
            id={elementId}
            className={classNames('sb-component', 'sb-component-phases-section', 'sb-phases-section', padding)}
            {...getDataAttrs(props)}
        >
            <div className="mx-auto max-w-7xl">
                {(title || subtitle) && (
                    <div className="mx-auto max-w-3xl text-center">
                        {title && (
                            <TitleBlock
                                {...title}
                                className="h2"
                                {...(enableAnnotations && { 'data-sb-field-path': '.title' })}
                            />
                        )}
                        {subtitle && (
                            <p
                                className={classNames('mt-4 text-lg text-light/80 sm:text-xl', { 'mt-6': title?.text })}
                                {...(enableAnnotations && { 'data-sb-field-path': '.subtitle' })}
                            >
                                {subtitle}
                            </p>
                        )}
                    </div>
                )}

                {items.length > 0 && (
                    <ol
                        className={classNames('mt-14 grid gap-6 lg:grid-cols-4 lg:gap-5', { 'mt-16': title?.text || subtitle })}
                        {...(enableAnnotations && { 'data-sb-field-path': '.items' })}
                    >
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="relative flex flex-col"
                                {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })}
                            >
                                {index < items.length - 1 && (
                                    <span
                                        className="absolute left-1/2 top-[calc(50%-0.5rem)] hidden h-px w-full bg-light/20 lg:block"
                                        aria-hidden="true"
                                    />
                                )}
                                <div className="group relative z-[1] flex h-full flex-col overflow-hidden rounded-xl border border-light/15 bg-light/5 transition hover:border-primary/40 hover:bg-light/[0.07]">
                                    <div className="relative aspect-square w-full overflow-hidden rounded-xl">
                                        <img
                                            src={item.image || DEFAULT_PHASE_IMAGES[index % DEFAULT_PHASE_IMAGES.length]}
                                            alt={item.title || ''}
                                            className="h-full w-full object-cover rounded-xl border border-white/10 opacity-90 transition-opacity duration-200 group-hover:opacity-100"
                                            {...(enableAnnotations && { 'data-sb-field-path': '.image' })}
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-6">
                                        {item.tagline && (
                                            <span
                                                className="text-xs font-semibold uppercase tracking-wider text-primary"
                                                {...(enableAnnotations && { 'data-sb-field-path': '.tagline' })}
                                            >
                                                {item.tagline}
                                            </span>
                                        )}
                                        {item.title && (
                                            <h3
                                                className={classNames('h4 text-light', { 'mt-2': item.tagline })}
                                                {...(enableAnnotations && { 'data-sb-field-path': '.title' })}
                                            >
                                                {item.title}
                                            </h3>
                                        )}
                                        {item.text && (
                                            <p
                                                className="mt-3 text-sm leading-relaxed text-light/75"
                                                {...(enableAnnotations && { 'data-sb-field-path': '.text' })}
                                            >
                                                {item.text}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ol>
                )}

                {quote && (
                    <blockquote
                        data-i18n
                        className="mx-auto mt-14 max-w-3xl rounded-xl border border-primary/30 bg-primary/10 px-6 py-5 text-center text-lg font-medium italic leading-relaxed text-light sm:text-xl"
                        {...(enableAnnotations && { 'data-sb-field-path': '.quote' })}
                    >
                        {quote}
                    </blockquote>
                )}
            </div>
        </section>
    );
}
