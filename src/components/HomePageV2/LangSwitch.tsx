import { Fragment } from 'react';
import classNames from 'classnames';
import { useLocale } from './locale';
import { LOCALES, LOCALE_PATH } from '../../../content/locale';
import { navContent } from '../../../content/nav';

/**
 * PAKET-P5-SEO-META-DIL G2. `TR | EN`: 500 12px uppercase .12em, active white, inactive secondary, a
 * 1px × 12px divider between them. Plain links to `/` and `/en/` (each language is its own static page).
 */
export default function LangSwitch({ className }: { className?: string }) {
    const locale = useLocale();

    return (
        <div
            role="group"
            aria-label={navContent[locale].languageLabel}
            className={classNames('flex items-center gap-3 text-[12px] font-medium uppercase leading-none tracking-[0.12em]', className)}
        >
            {LOCALES.map((l, index) => (
                <Fragment key={l}>
                    {index > 0 && <span aria-hidden="true" className="h-3 w-px bg-v2-border" />}
                    <a
                        href={LOCALE_PATH[l]}
                        hrefLang={l}
                        lang={l}
                        aria-current={l === locale ? 'page' : undefined}
                        className={l === locale ? 'text-white' : 'text-v2-text-secondary transition-colors hover:text-white'}
                    >
                        {l.toUpperCase()}
                    </a>
                </Fragment>
            ))}
        </div>
    );
}
