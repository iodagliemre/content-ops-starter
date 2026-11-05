import Heartbeat from './Heartbeat';
import { useLocale } from './locale';
import { LOCALE_PATH } from '../../../content/locale';

/**
 * PAKET-P4-SAHIPLIK-FINAL G5. The nav's brand signature (mark + DOVEIFY wordmark + heartbeat, DESIGN-
 * LOCK NAV) as a component, same markup and sizes as Nav.tsx. Nav.tsx keeps its inline copy (fade-in +
 * heartbeat draw delay). In the footer the heartbeat is static (main.css).
 * `lang="en"` on the wordmark: under <html lang="tr"> CSS uppercase would render "DOVEİFY".
 * PAKET-P7 G4: same larger sizes as the nav (36 / 17 / 64, gap 12; mobile 32 / 15 / 48, gap 8). The link
 * goes to the homepage hero of the page's language, so it also works on the contact/privacy/case pages.
 */
export default function BrandSignature() {
    const locale = useLocale();
    return (
        <a href={`${LOCALE_PATH[locale]}#hero`} className="flex shrink-0 items-center gap-2 lg:gap-3">
            {/* eslint-disable-next-line @next/next/no-img-element -- same mark file as Nav.tsx (gradient ids, see RAPOR-P01.md) */}
            <img src="/brand/logo-mark.svg" alt="" width={36} height={36} loading="lazy" className="h-8 w-8 shrink-0 lg:h-9 lg:w-9" />
            <span lang="en" className="font-sans text-[15px] font-normal uppercase leading-none tracking-[0.22em] text-white lg:text-[17px]">
                Doveify
            </span>
            <Heartbeat className="h-3 w-12 shrink-0 text-v2-blue lg:h-4 lg:w-16" strokeWidth={1.5} />
        </a>
    );
}
