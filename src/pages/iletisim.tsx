import ContactPage from '../components/HomePageV2/ContactPage';
import type { Dict } from '../../content/dict';
import type { ContactContent } from '../../content/contact';

/** PAKET-P7 G1: İletişim sayfası (tr). Copy loaded server-side only (getStaticProps). */
export default function Page({ dict, content }: { dict: Dict; content: ContactContent }) {
    return <ContactPage locale="tr" dict={dict} content={content} />;
}

export async function getStaticProps() {
    const [{ dict }, { contact }] = await Promise.all([import('../../content/tr'), import('../../content/tr/contact')]);
    return { props: { v2: true, locale: 'tr', dict, content: contact } };
}
