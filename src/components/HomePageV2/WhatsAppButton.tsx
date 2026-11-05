import { useEffect, useState } from 'react';
import classNames from 'classnames';
import WhatsApp from '../svgs/whatsapp';
import { useDict, useLocale } from './locale';
import { whatsappHref } from '../../../content/contact';

/**
 * PAKET-P7 G3 (Emre #7). Floating WhatsApp link on every V2 page: bottom-right circle, 56px desktop / 48px
 * mobile (bottom/right 16px on mobile, 24px desktop), bg-base + 1px blue border, monochrome white icon 24px,
 * a soft blue glow. Hidden over the hero: fades in once the page has scrolled `showAfter` px (400 by default)
 * and out again above it. While hidden it is `visibility: hidden`, so it is neither focusable nor announced.
 * Reduced motion: no fade (main.css .v2-wa-button). One passive scroll listener, read in rAF.
 */
export default function WhatsAppButton({ showAfter = 400 }: { showAfter?: number }) {
    const locale = useLocale();
    const { whatsapp } = useDict();
    const [visible, setVisible] = useState(showAfter <= 0);

    useEffect(() => {
        if (showAfter <= 0) return;
        let frame = 0;
        const update = () => {
            frame = 0;
            setVisible(window.scrollY > showAfter);
        };
        const onScroll = () => {
            if (!frame) frame = window.requestAnimationFrame(update);
        };
        update();
        window.addEventListener('scroll', onScroll, { passive: true });
        return () => {
            window.removeEventListener('scroll', onScroll);
            if (frame) window.cancelAnimationFrame(frame);
        };
    }, [showAfter]);

    return (
        <a
            href={whatsappHref(locale)}
            target="_blank"
            rel="noopener"
            aria-label={whatsapp.label}
            className={classNames(
                'v2-wa-button fixed bottom-4 right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full border border-v2-blue bg-v2-bg-base text-white lg:bottom-6 lg:right-6 lg:h-14 lg:w-14',
                visible && 'is-visible'
            )}
        >
            <WhatsApp className="h-6 w-6 fill-current" />
        </a>
    );
}
