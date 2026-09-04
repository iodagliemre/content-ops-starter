import '../css/main.css';
import Script from 'next/script';

// PAKET-P1-HERO-NAV G1: next/font/google replaced with real self-hosted woff2 files
// (@font-face rules in src/css/main.css, weights 300/400/500 only — no 700, see brief F6).
// Previously used next/font/google (see RAPOR-P00.md G4) as a stopgap before real font
// files existed in the repo.

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Script src="/js/i18n.js" strategy="afterInteractive" />
        </>
    );
}
