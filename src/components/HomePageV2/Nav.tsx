import { useState } from 'react';
import MenuIcon from '../svgs/menu';
import CloseIcon from '../svgs/close';
import Heartbeat from './Heartbeat';
import { site } from '../../../content/site';

/**
 * PAKET-01 G1. Fixed h-20 (matches Hero's `min-h-[calc(100vh-5rem)]`, CLS-safe).
 * Anchor hrefs (#urunler etc.) are structural, not content — labels come from content/site.ts
 * verbatim (nav.primary + nav.cta), matching each to a homepage section id 1:1.
 */
const SECTION_IDS = ['urunler', 'web-factory', 'donusum', 'sahiplik', 'calismalar'] as const;

export default function Nav() {
    const [open, setOpen] = useState(false);
    const links = site.nav.primary.map((label, i) => ({ label, href: `#${SECTION_IDS[i]}` }));

    return (
        <header className="relative z-50 h-20 border-b border-v2-border">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                <a href="#hero" className="v2-fade-in flex shrink-0 items-center gap-3">
                    <img src="/brand/logo-mark.svg" alt="" width={32} height={32} className="h-8 w-8" />
                    <img src="/brand/logo-wordmark.svg" alt="Doveify" width={120} height={16} className="h-4 w-auto" />
                    <Heartbeat className="h-4 w-16 text-v2-text-secondary" delayMs={300} />
                </a>

                <nav className="hidden items-center gap-8 lg:flex" aria-label="Ana menü">
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-sm text-v2-text-secondary transition-colors hover:text-v2-text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="#iletisim"
                        className="rounded-full border border-v2-border px-5 py-2 text-sm text-v2-text-primary transition-colors hover:border-v2-blue"
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
                <div className="fixed inset-x-0 top-20 bottom-0 z-40 flex flex-col gap-1 overflow-y-auto bg-v2-bg-base px-6 py-8 lg:hidden">
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
                        href="#iletisim"
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
