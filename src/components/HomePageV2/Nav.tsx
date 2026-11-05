import { useState } from 'react';
import MenuIcon from '../svgs/menu';
import CloseIcon from '../svgs/close';
import Heartbeat from './Heartbeat';
import LangSwitch from './LangSwitch';
import { useDict, useLocale } from './locale';
import { CONTACT_PATH, LOCALE_PATH } from '../../../content/locale';

/**
 * PAKET-P1-HERO-NAV G2 (was PAKET-01 G1). h-16 mobile / h-20 desktop, no border — nav sits on
 * the same bg-v2-bg-base as hero (F1). Brand signature is one flex row: mark <img> (gradient-id
 * reasons, see RAPOR-P01.md), wordmark as real text (not <img> — needs the self-hosted Inter
 * font, which an <img>-loaded SVG can't reach), heartbeat inline SVG right after it (F2).
 *
 * PAKET-P2-URUNLER-CAROUSEL G0: the one authorized exception to the P1 LOCK LIST (DESIGN-LOCK
 * v0.2) — the "İletişim" pill now links out to cal.com (Karar #8) instead of anchor-scrolling
 * to the still-placeholder #iletisim section. Composition/size/style untouched.
 *
 * PAKET-P5-SEO-META-DIL G2: copy from the page's dictionary (content/{tr,en}/nav.ts); section links are prefixed with the
 * locale's path (`/#urunler`, `/en/#urunler`) so they also work from the 404 page — on the homepage
 * itself that is still a same-page jump. The TR | EN switch sits 24px left of the İletişim pill and
 * below the links in the mobile overlay; nothing else in the nav moved.
 *
 * PAKET-P7 G3/G4 (Emre kararı 05.11.2026, DESIGN-LOCK v0.6): pill text → "Toplantı Talep Et" (still cal.com),
 * padding 22px; a sixth text link "İletişim" → contact page; brand signature larger (mark 36 / wordmark 17 /
 * heartbeat 64, gap 12; mobile 32 / 15 / 48, gap 8). Nav height 80/64 unchanged.
 * Six links + the longer pill + the larger brand need ~1175px (EN, measured) — they do not fit at 1024 even
 * with 24px gaps, so the full nav starts at 1180px (gap 24, 32 from 1280 as before) and 1024–1179 uses the
 * menu button (RAPOR-P7, bekleyen karar).
 */
const SECTION_IDS = ['urunler', 'web-factory', 'donusum', 'sahiplik', 'calismalar'] as const;
const CAL_COM_URL = 'https://cal.com/emre-dagli-ffwxpr/doveify-demo';

export default function Nav() {
    const [open, setOpen] = useState(false);
    const locale = useLocale();
    const t = useDict().nav;
    const base = LOCALE_PATH[locale];
    const links = [
        ...t.primary.map((label, i) => ({ label, href: `${base}#${SECTION_IDS[i]}` })),
        { label: t.contact, href: CONTACT_PATH[locale] }
    ];

    return (
        <header className="relative z-50 h-16 bg-v2-bg-base lg:h-20">
            <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-6">
                <a href={`${base}#hero`} className="v2-fade-in flex shrink-0 items-center gap-2 lg:gap-3">
                    <img src="/brand/logo-mark.svg" alt="" width={36} height={36} className="h-8 w-8 shrink-0 lg:h-9 lg:w-9" />
                    {/* lang="en": with <html lang="tr"> CSS uppercase would turn the brand into "DOVEİFY" (P5). */}
                    <span lang="en" className="font-sans text-[15px] font-normal uppercase leading-none tracking-[0.22em] text-white lg:text-[17px]">
                        Doveify
                    </span>
                    <Heartbeat className="h-3 w-12 shrink-0 text-v2-blue lg:h-4 lg:w-16" strokeWidth={1.5} delayMs={300} />
                </a>

                <nav className="hidden items-center gap-6 min-[1180px]:flex xl:gap-8" aria-label={t.navLabel}>
                    {links.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="whitespace-nowrap text-[15px] font-normal text-v2-text-secondary transition-colors hover:text-v2-text-primary"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex items-center gap-6">
                        <LangSwitch />
                        <a
                            href={CAL_COM_URL}
                            target="_blank"
                            rel="noopener"
                            className="flex h-10 items-center whitespace-nowrap rounded-full border border-v2-border px-[22px] text-[15px] font-normal text-v2-text-primary transition-colors hover:border-v2-blue"
                        >
                            {t.cta}
                        </a>
                    </div>
                </nav>

                <button
                    type="button"
                    aria-label={open ? t.closeMenu : t.openMenu}
                    aria-expanded={open}
                    onClick={() => setOpen((v) => !v)}
                    className="flex h-10 w-10 items-center justify-center text-v2-text-primary min-[1180px]:hidden"
                >
                    {open ? <CloseIcon className="h-6 w-6 fill-current" /> : <MenuIcon className="h-6 w-6 fill-current" />}
                </button>
            </div>

            {open && (
                <div className="fixed inset-x-0 top-16 bottom-0 z-40 flex flex-col gap-1 overflow-y-auto bg-v2-bg-base px-6 py-8 lg:top-20 min-[1180px]:hidden">
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
                    <LangSwitch className="mt-6" />
                    <a
                        href={CAL_COM_URL}
                        target="_blank"
                        rel="noopener"
                        onClick={() => setOpen(false)}
                        className="mt-6 rounded-full border border-v2-border px-5 py-3 text-center text-lg text-v2-text-primary"
                    >
                        {t.cta}
                    </a>
                </div>
            )}
        </header>
    );
}
