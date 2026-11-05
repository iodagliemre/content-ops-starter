import ContactPage from '../../components/HomePageV2/ContactPage';
import type { Dict } from '../../../content/dict';
import type { ContactContent } from '../../../content/contact';

/** PAKET-P7 G1: contact page (en). Copy loaded server-side only (getStaticProps). */
export default function Page({ dict, content }: { dict: Dict; content: ContactContent }) {
    return <ContactPage locale="en" dict={dict} content={content} />;
}

export async function getStaticProps() {
    const [{ dict }, { contact }] = await Promise.all([import('../../../content/en'), import('../../../content/en/contact')]);
    return { props: { v2: true, locale: 'en', dict, content: contact } };
}
