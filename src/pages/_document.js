import { Html, Head, Main, NextScript } from 'next/document';

// PAKET-P5-SEO-META-DIL G2: <html lang> from the page's `locale` prop (V2 pages: 'tr' or 'en').
// Pages without one (the legacy Stackbit pages) keep rendering without a lang attribute, as before.
export default function Document(props) {
    const locale = props.__NEXT_DATA__?.props?.pageProps?.locale;
    return (
        <Html lang={locale}>
            <Head />
            <body>
                <Main />
                <NextScript />
            </body>
        </Html>
    );
}
