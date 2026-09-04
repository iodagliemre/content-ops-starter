/**
 * Inline (not <img>) on purpose: stroke-dasharray draw-on effect is CSS-driven (see
 * .v2-heartbeat-path in src/css/main.css) — an <img>-loaded SVG can't be reached by
 * host-page CSS. No gradient defs here, so two inline instances (nav + hero divider) never
 * collide on ids, unlike public/brand/logo-mark.svg (see RAPOR-P01.md).
 * `vector-effect="non-scaling-stroke"` keeps the stroke crisp at any display size (PAKET-
 * P1-HERO-NAV F2/F4 — nav ~56px vs hero 120px use the same viewBox, only strokeWidth as a
 * design knob would otherwise scale oddly).
 */
export default function Heartbeat({
    className,
    delayMs = 300,
    strokeWidth = 1.5,
    glow = false
}: {
    className?: string;
    delayMs?: number;
    strokeWidth?: number;
    glow?: boolean;
}) {
    return (
        <svg
            viewBox="0 0 240 40"
            fill="none"
            className={className}
            style={glow ? { filter: 'drop-shadow(0 0 6px rgba(47,123,255,.55))' } : undefined}
            aria-hidden="true"
        >
            <path
                className="v2-heartbeat-path"
                style={{ animationDelay: `${delayMs}ms` }}
                pathLength={1}
                vectorEffect="non-scaling-stroke"
                d="M0,20 H60 L72,8 L84,32 L96,20 H120 L128,14 L136,26 L144,20 H240"
                stroke="currentColor"
                strokeWidth={strokeWidth}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
}
