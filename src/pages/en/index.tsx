import HomePageV2 from '../../components/HomePageV2';
import type { Dict } from '../../../content/dict';

/** PAKET-P6 B1: EN homepage (`/en/`); only the EN dictionary is passed (A1). */
export default function HomeEn({ dict }: { dict: Dict }) {
    return <HomePageV2 locale="en" dict={dict} />;
}

export async function getStaticProps() {
    const { dict } = await import('../../../content/en');
    return { props: { v2: true, locale: 'en', dict } };
}
