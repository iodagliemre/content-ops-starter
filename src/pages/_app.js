import '../css/main.css';
import Script from 'next/script';
import { Inter } from 'next/font/google';

// Self-hosted (next/font downloads + serves from our own domain, no runtime Google
// Fonts request). latin-ext covers Turkish characters (İ ı Ş ş Ğ ğ Ü ü Ö ö Ç ç Â â).
// See docs/RAPOR-P00.md (G4) for why next/font/google was chosen over next/font/local.
const inter = Inter({
    subsets: ['latin', 'latin-ext'],
    weight: ['400', '500', '700'],
    variable: '--font-inter',
    display: 'swap'
});

export default function MyApp({ Component, pageProps }) {
    return (
        <div className={inter.variable}>
            <Component {...pageProps} />
            <Script src="/js/i18n.js" strategy="afterInteractive" />
        </div>
    );
}
