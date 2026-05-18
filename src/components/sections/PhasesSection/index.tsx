import * as React from 'react';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';
import TitleBlock from '../../blocks/TitleBlock';

const DEFAULT_ICONS = [
    '/images/abstract-feature1.svg',
    '/images/abstract-feature2.svg',
    '/images/abstract-feature3.svg',
    '/images/icon1.svg'
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
                                className="relative flex flex-col lg:pt-8"
                                {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })}
                            >
                                {index < items.length - 1 && (
                                    <span
                                        className="absolute left-1/2 top-5 hidden h-px w-full bg-light/20 lg:block"
                                        aria-hidden="true"
                                    />
                                )}
                                <div className="relative z-[1] flex h-full flex-col rounded-xl border border-light/15 bg-light/5 p-6 transition hover:border-primary/40 hover:bg-light/[0.07]">
                                    <div className="mb-4 flex items-center gap-3">
                                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-light/20 bg-light/10">
                                            <img
                                                src={item.icon || DEFAULT_ICONS[index % DEFAULT_ICONS.length]}
                                                alt=""
                                                className="h-6 w-6"
                                                aria-hidden="true"
                                                {...(enableAnnotations && { 'data-sb-field-path': '.icon' })}
                                            />
                                        </span>
                                        {item.tagline && (
                                            <span
                                                className="text-xs font-semibold uppercase tracking-wider text-primary"
                                                {...(enableAnnotations && { 'data-sb-field-path': '.tagline' })}
                                            >
                                                {item.tagline}
                                            </span>
                                        )}
                                    </div>
                                    {item.title && (
                                        <h3 className="h4 text-light" {...(enableAnnotations && { 'data-sb-field-path': '.title' })}>
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
                            </li>
                        ))}
                    </ol>
                )}

                {quote && (
                    <blockquote
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
