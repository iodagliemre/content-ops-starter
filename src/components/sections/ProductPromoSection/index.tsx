import * as React from 'react';
import classNames from 'classnames';

import { getDataAttrs } from '../../../utils/get-data-attrs';
import TitleBlock from '../../blocks/TitleBlock';
import { Action } from '../../atoms';

const DEFAULT_ICONS = ['/images/icon1.svg', '/images/icon2.svg', '/images/icon3.svg'];

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
                                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-light/20">
                                    <img
                                        src={item.icon || DEFAULT_ICONS[index % DEFAULT_ICONS.length]}
                                        alt=""
                                        className="h-7 w-7"
                                        aria-hidden="true"
                                        {...(enableAnnotations && { 'data-sb-field-path': '.icon' })}
                                    />
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
