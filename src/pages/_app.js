import '../css/main.css';
import Script from 'next/script';

export default function MyApp({ Component, pageProps }) {
    return (
        <>
            <Component {...pageProps} />
            <Script src="/js/i18n.js" strategy="afterInteractive" />
        </>
    );
}
