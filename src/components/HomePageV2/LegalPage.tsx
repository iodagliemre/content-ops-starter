import { Fragment, type ReactNode } from 'react';
import SubPage from './SubPage';
import { PRIVACY_PATH, type Locale } from '../../../content/locale';
import type { Dict } from '../../../content/dict';
import type { LegalPageContent } from '../../../content/legal';

/**
 * PAKET-P7 G2. /gizlilik/ and /en/privacy/: editorial template — H1 300 40px, H2 400 22px, body 400 16px
 * secondary, line-height 1.7, max-width 760. No motion. Blocks come straight from the legal text (TR, and its
 * unofficial EN translation; content/legal.ts); e-mail addresses become mailto links, the words stay as written.
 */
const EMAIL = /([\w.+-]+@[\w-]+\.[\w.]+)/g;

function linkify(line: string): ReactNode {
    const parts = line.split(EMAIL);
    if (parts.length === 1) return line;
    return parts.map((part, i) =>
        i % 2 === 1 ? (
            <a key={i} href={`mailto:${part}`} className="text-white underline decoration-v2-border underline-offset-4 transition-colors hover:text-v2-blue">
                {part}
            </a>
        ) : (
            part
        )
    );
}

export default function LegalPage({ locale, dict, content }: { locale: Locale; dict: Dict; content: LegalPageContent }) {
    const { document } = content;
    return (
        <SubPage locale={locale} dict={dict} paths={PRIVACY_PATH} meta={content.meta}>
            <article lang={locale} className="v2-legal mx-auto max-w-[760px] px-6 pb-24 pt-10 lg:pb-32 lg:pt-16">
                <h1 className="text-[32px] font-light leading-[1.15] text-white lg:text-[40px]">{document.title}</h1>
                <p className="mt-4 text-[14px] font-normal text-v2-text-secondary">{document.updated}</p>
                <span aria-hidden="true" className="mt-8 block h-px w-10 bg-v2-blue" />
                {document.blocks.map((block, index) => {
                    if (block.type === 'h2') {
                        return (
                            <h2 key={index} className="mt-14 text-[22px] font-normal leading-[1.35] text-white">
                                {block.lines[0]}
                            </h2>
                        );
                    }
                    if (block.type === 'h3') {
                        return (
                            <h3 key={index} className="mt-8 text-[17px] font-medium leading-[1.4] text-white">
                                {block.lines[0]}
                            </h3>
                        );
                    }
                    return (
                        <p key={index} className="mt-4 text-[16px] font-normal leading-[1.7] text-v2-text-secondary">
                            {block.lines.map((line, i) => (
                                <Fragment key={i}>
                                    {i > 0 && <br />}
                                    {linkify(line)}
                                </Fragment>
                            ))}
                        </p>
                    );
                })}
            </article>
        </SubPage>
    );
}
