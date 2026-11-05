import * as React from 'react';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';
import TitleBlock from '../../blocks/TitleBlock';
import { Action } from '../../atoms';

const iconProps = {
    width: 24,
    height: 24,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    className: 'h-6 w-6 shrink-0 text-light',
    'aria-hidden': true
};

function IconLegislation() {
    return (
        <svg {...iconProps}>
            <path d="M12 7v14" />
            <path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" />
        </svg>
    );
}

function IconCamera() {
    return (
        <svg {...iconProps}>
            <path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z" />
            <circle cx="12" cy="13" r="3" />
        </svg>
    );
}

function IconExam() {
    return (
        <svg {...iconProps}>
            <path d="M22 10v6" />
            <path d="M2 10l10-5 10 5-10 5z" />
            <path d="M6 12v5c0 1.5 2 3 6 3s6-1.5 6-3v-5" />
        </svg>
    );
}

const PROMO_FEATURE_ICONS = [IconLegislation, IconCamera, IconExam];

export default function ProductPromoSection(props) {
    const { elementId, title, subtitle, items = [], actions = [], styles = {}, enableAnnotations } = props;
    const padding = styles?.self?.padding ?? ['py-20', 'px-4'];

    return (
        <section
            id={elementId}
            className={classNames('sb-component', 'sb-component-product-promo-section', 'sb-turkisg-promo', padding)}
            {...getDataAttrs(props)}
        >
            <div className="mx-auto max-w-7xl text-center">
                {title && (
                    <TitleBlock
                        {...title}
                        className="h2"
                        {...(enableAnnotations && { 'data-sb-field-path': '.title' })}
                    />
                )}
                {subtitle && (
                    <p
                        className={classNames('mx-auto mt-4 max-w-3xl text-lg text-light/90 sm:text-xl', {
                            'mt-6': title?.text
                        })}
                        {...(enableAnnotations && { 'data-sb-field-path': '.subtitle' })}
                    >
                        {subtitle}
                    </p>
                )}
                {items.length > 0 && (
                    <ul
                        className={classNames('mt-12 grid gap-6 text-left sm:grid-cols-2 lg:grid-cols-3', {
                            'mt-14': title?.text || subtitle
                        })}
                        {...(enableAnnotations && { 'data-sb-field-path': '.items' })}
                    >
                        {items.map((item, index) => (
                            <li
                                key={index}
                                className="flex flex-col rounded-xl border border-light/20 bg-light/10 p-6 backdrop-blur-sm transition hover:border-light/40 hover:bg-light/15"
                                {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })}
                            >
                                <div
                                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light/20"
                                    {...(enableAnnotations && { 'data-sb-field-path': '.icon' })}
                                >
                                    {React.createElement(PROMO_FEATURE_ICONS[index % PROMO_FEATURE_ICONS.length])}
                                </div>
                                {item.title && (
                                    <h3 className="h4 text-light" {...(enableAnnotations && { 'data-sb-field-path': '.title' })}>
                                        {item.title}
                                    </h3>
                                )}
                                {item.text && (
                                    <p className="mt-2 text-sm leading-relaxed text-light/80" {...(enableAnnotations && { 'data-sb-field-path': '.text' })}>
                                        {item.text}
                                    </p>
                                )}
                            </li>
                        ))}
                    </ul>
                )}
                {actions.length > 0 && (
                    <div
                        className={classNames('mt-10 flex flex-wrap items-center justify-center gap-4', {
                            'mt-12': items.length > 0
                        })}
                        {...(enableAnnotations && { 'data-sb-field-path': '.actions' })}
                    >
                        {actions.map((action, index) => (
                            <Action
                                key={index}
                                {...action}
                                className="lg:whitespace-nowrap"
                                {...(enableAnnotations && { 'data-sb-field-path': `.${index}` })}
                            />
                        ))}
                    </div>
                )}
            </div>
        </section>
    );
}
