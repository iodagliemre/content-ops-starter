import { useEffect, useRef, useState } from 'react';
import { onIdle } from './onIdle';

/**
 * PAKET-P3-WEBFACTORY-DONUSUM. One-shot "entered the viewport" flag for a section's reveal, same
 * pattern as Products.tsx (P2 is locked, so that file keeps its own copy): the observer starts at
 * idle time and disconnects after the first intersection.
 */
export function useRevealOnce<T extends HTMLElement>(threshold = 0.2) {
    const ref = useRef<T>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;
        let observer: IntersectionObserver | null = null;
        const cancelIdle = onIdle(() => {
            observer = new IntersectionObserver(
                ([entry]) => {
                    if (entry.isIntersecting) {
                        setIsVisible(true);
                        observer?.disconnect();
                    }
                },
                { threshold }
            );
            observer.observe(el);
        });
        return () => {
            cancelIdle();
            observer?.disconnect();
        };
    }, [threshold]);

    return { ref, isVisible };
}
