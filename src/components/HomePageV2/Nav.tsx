import { useState } from 'react';
import MenuIcon from '../svgs/menu';
import CloseIcon from '../svgs/close';
import Heartbeat from './Heartbeat';
import { site } from '../../../content/site';

/**
 * PAKET-P1-HERO-NAV G2 (was PAKET-01 G1). h-16 mobile / h-20 desktop, no border — nav sits on
 * the same bg-v2-bg-base as hero (F1). Brand signature is one flex row: mark <img> (gradient-id
 * reasons, see RAPOR-P01.md), wordmark as real text (not <img> — needs the self-hosted Inter
 * font, which an <img>-loaded SVG can't reach), heartbeat inline SVG right after it (F2).
 *
 * PAKET-P2-URUNLER-CAROUSEL G0: the one authorized exception to the P1 LOCK LIST (DESIGN-LOCK
 * v0.2) — the "İletişim" pill now links out to cal.com (Karar #8) instead of anchor-scrolling
 * to the still-placeholder #iletisim section. Composition/size/style untouched.
 */
const SECTION_IDS = ['urunler', 'web-factory', 'donusum', 'sahiplik', 'calismalar'] as const;
const CAL_COM_URL = 'https://cal.com/emre-dagli-ffwxpr/doveify-demo';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const links = site.nav.primary.map((label, i) => ({ label, href: `#${SECTION_IDS[i]}` }));

    return (
        <header className="relative z-50 h-16 bg-v2-bg-base lg:h-20">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                <a href="#hero" className="v2-fade-in flex shrink-0 items-center gap-1.5 lg:gap-2.5">
                    <img src="/brand/logo-mark.svg" alt="" width={28} height={28} className="h-7 w-7 shrink-0" />
                    <span className="font-sans text-[15px] font-normal uppercase leading-none tracking-[0.22em] text-white">
                        Doveify
                    </span>
                    <Heartbeat className="h-3.5 w-14 shrink-0 text-v2-blue" strokeWidth={1.5} delayMs={300} />
                </a>

                <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[15px] font-normal text-v2-text-secondary transition-colors hover:text-v2-text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={CAL_COM_URL}
                        target="_blank"
                        rel="noopener"
                        className="flex h-10 items-center rounded-full border border-v2-border px-5 text-[15px] font-normal text-v2-text-primary transition-colors hover:border-v2-blue"
                    >
                        {site.nav.cta}
                    </a>
                </nav>

                <button
                    type="button"
                    aria-label={open ? 'Menüyü kapat' : 'Menüyü aç'}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center text-v2-text-primary lg:hidden"
                >
                    {open ? <CloseIcon className="h-6 w-6 fill-current" /> : <MenuIcon className="h-6 w-6 fill-current" />}
                </button>
            </div>

            {open && (
                <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-1 overflow-y-auto bg-v2-bg-base px-6 py-8 lg:hidden">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setOpen(false)}
                            className="border-b border-v2-border py-4 text-lg text-v2-text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href={CAL_COM_URL}
                        target="_blank"
                        rel="noopener"
                        onClick={() => setOpen(false)}
                        className="mt-6 rounded-full border border-v2-border px-5 py-3 text-center text-lg text-v2-text-primary"
                    >
                        {site.nav.cta}
                    </a>
                </div>
            )}
        </header>
    );
}
