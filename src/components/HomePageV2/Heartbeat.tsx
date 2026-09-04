/**
 * Inline (not <img>) on purpose: PAKET-01 G4 animates this path's stroke-dasharray draw-on
 * effect via CSS (see .v2-heartbeat-path in src/css/main.css) — an <img>-loaded SVG can't be
 * reached by host-page CSS. No gradient defs here, so two inline instances (nav + hero
 * divider) never collide on ids, unlike public/brand/logo-mark.svg (see RAPOR-P01.md).
 */
export default function Heartbeat({
    className,
    delayMs = 300
}: {
    className?: string;
    delayMs?: number;
}) {
    return (
        <svg viewBox="0 0 240 40" fill="none" className={className} aria-hidden="true">
            <path
                className="v2-heartbeat-path"
                style={{ animationDelay: `${delayMs}ms` }}
                pathLength={1}
                d="M0,20 H60 L72,8 L84,32 L96,20 H120 L128,14 L136,26 L144,20 H240"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
