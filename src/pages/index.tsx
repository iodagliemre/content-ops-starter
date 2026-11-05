import HomePageV2 from '../components/HomePageV2';
import type { Dict } from '../../content/dict';

/**
 * PAKET-P6 B1: TR homepage as a real index route (was a special case inside the optional catch-all).
 * getStaticProps passes only the TR dictionary, so the EN copy never reaches this page's bundle (A1).
 */
export default function Home({ dict }: { dict: Dict }) {
    return <HomePageV2 locale="tr" dict={dict} />;
}

export async function getStaticProps() {
    const { dict } = await import('../../content/tr');
    // `v2` tells _app.js to skip the legacy i18n.js; `locale` sets <html lang> (_document.js).
    return { props: { v2: true, locale: 'tr', dict } };
}
