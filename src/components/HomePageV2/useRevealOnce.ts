import { useEffect, useRef, useState } from 'react';
import { onIdle } from './onIdle';

/**
 * PAKET-P3-WEBFACTORY-DONUSUM. One-shot "entered the viewport" flag for a section's reveal: observing
 * starts at idle time and stops after the first intersection.
 *
 * PAKET-P6 A2: every section shares one IntersectionObserver (threshold .2, the value all sections
 * used) instead of creating its own; Products.tsx uses this hook too now.
 */
const callbacks = new Map<Element, () => void>();
let shared: IntersectionObserver | null = null;

function sharedObserver(): IntersectionObserver {
    if (!shared) {
        shared = new IntersectionObserver(
            (entries) => {
                for (const entry of entries) {
                    if (!entry.isIntersecting) continue;
                    const done = callbacks.get(entry.target);
                    if (!done) continue;
                    callbacks.delete(entry.target);
                    shared?.unobserve(entry.target);
                    done();
                }
            },
            { threshold: 0.2 }
        );
    }
    return shared;
}

export function useRevealOnce<T extends HTMLElement>() {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        const cancelIdle = onIdle(() => {
            callbacks.set(el, () => setIsVisible(true));
            sharedObserver().observe(el);
        });
        return () => {
            cancelIdle();
            callbacks.delete(el);
            shared?.unobserve(el);
        };
    }, []);

    return { ref, isVisible };
}
