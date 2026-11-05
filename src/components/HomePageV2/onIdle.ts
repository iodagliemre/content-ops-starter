/**
 * PAKET-P2AR-CAROUSEL-DUZELTME B3. `requestIdleCallback` isn't in TS's default DOM lib types
 * (and Safari doesn't implement it at all) — `setTimeout(fn, 200)` is both the type-safe and the
 * cross-browser fallback, not just a defensive extra.
 * PAKET-P6 A2: `timeout: 800` — idle work still runs within 800ms on a busy main thread.
 */
export function onIdle(callback: () => void): () => void {
    const w = window as Window & {
        requestIdleCallback?: (cb: () => void, options?: { timeout: number }) => number;
        cancelIdleCallback?: (handle: number) => void;
    };

    if (typeof w.requestIdleCallback === 'function') {
        const handle = w.requestIdleCallback(callback, { timeout: 800 });
        return () => w.cancelIdleCallback?.(handle);
    }

    const timeout = window.setTimeout(callback, 200);
    return () => window.clearTimeout(timeout);
}
