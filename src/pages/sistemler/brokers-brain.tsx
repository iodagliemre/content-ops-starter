import CasePage from '../../components/HomePageV2/CasePage';
import type { Dict } from '../../../content/dict';
import type { CaseContent } from '../../../content/cases';

/** PAKET-P6 B1: Broker's Brain vaka sayfası (tr). Copy loaded server-side only (getStaticProps). */
export default function Page({ dict, content }: { dict: Dict; content: CaseContent }) {
    return <CasePage locale="tr" dict={dict} content={content} />;
}

export async function getStaticProps() {
    const [{ dict }, { brokersBrain }] = await Promise.all([import('../../../content/tr'), import('../../../content/tr/cases/brokers-brain')]);
    return { props: { v2: true, locale: 'tr', dict, content: brokersBrain } };
}
