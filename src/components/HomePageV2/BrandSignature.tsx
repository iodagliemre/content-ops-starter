import Heartbeat from './Heartbeat';

/**
 * PAKET-P4-SAHIPLIK-FINAL G5. The nav's brand signature (mark + DOVEIFY wordmark + heartbeat, DESIGN-
 * LOCK NAV) as a component, same markup and sizes as Nav.tsx. Nav.tsx keeps its inline copy: it is
 * P1-locked and may only change link targets. In the footer the heartbeat is static (main.css).
 */
export default function BrandSignature() {
    return (
        <a href="#hero" className="flex shrink-0 items-center gap-1.5 lg:gap-2.5">
            {/* eslint-disable-next-line @next/next/no-img-element -- same mark file as Nav.tsx (gradient ids, see RAPOR-P01.md) */}
            <img src="/brand/logo-mark.svg" alt="" width={28} height={28} loading="lazy" className="h-7 w-7 shrink-0" />
            <span className="font-sans text-[15px] font-normal uppercase leading-none tracking-[0.22em] text-white">Doveify</span>
            <Heartbeat className="h-3.5 w-14 shrink-0 text-v2-blue" strokeWidth={1.5} />
        </a>
    );
}
