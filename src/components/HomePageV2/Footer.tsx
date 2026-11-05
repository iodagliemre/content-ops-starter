import BrandSignature from './BrandSignature';
import { useDict } from './locale';
import type { FooterLink } from '../../../content/footer';

/**
 * PAKET-P4-SAHIPLIK-FINAL G5. Desktop: brand in 4 columns, three link columns sharing the other 8.
 * Mobile: one column, 32px between groups. The top border is the one horizontal rule the brief
 * allows (footer separator).
 */
export default function Footer() {
    const footer = useDict().footer;
    return (
        <footer className="v2-footer border-t border-v2-border/40">
            <div className="mx-auto max-w-7xl px-6 pb-12 pt-16">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
                    <div className="lg:col-span-4">
                        <BrandSignature />
                        <p className="mt-6 text-[14px] font-normal text-v2-text-secondary">{footer.tagline}</p>
                        <p className="mt-1 text-[14px] font-normal text-v2-text-secondary">{footer.locations}</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:col-span-8 lg:grid-cols-3">
                        {footer.columns.map((column) => (
                            <div key={column.heading}>
                                <h2 className="text-[12px] font-medium uppercase tracking-[0.12em] text-white">{column.heading}</h2>
                                <ul className="mt-4 space-y-3">
                                    {column.links.map((link) => (
                                        <li key={link.href}>
                                            <FooterAnchor link={link} />
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-12 flex flex-col gap-3 text-[13px] font-normal text-v2-text-secondary sm:flex-row sm:items-center sm:justify-between">
                    <p>{footer.copyright}</p>
                    <a href={footer.privacy.href} className="transition-colors hover:text-white">
                        {footer.privacy.label}
                    </a>
                </div>
            </div>
        </footer>
    );
}

function FooterAnchor({ link }: { link: FooterLink }) {
    return (
        <a
            href={link.href}
            target={link.external ? '_blank' : undefined}
            rel={link.external ? 'noopener' : undefined}
            className="text-[14px] font-normal text-v2-text-secondary transition-colors hover:text-white"
        >
            {link.label}
        </a>
    );
}
