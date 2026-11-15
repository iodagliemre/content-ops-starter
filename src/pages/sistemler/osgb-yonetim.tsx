import CasePage from '../../components/HomePageV2/CasePage';
import { caseProps, type RelatedLink } from '../../utils/case-props';
import type { Dict } from '../../../content/dict';
import type { CaseContent } from '../../../content/cases';

/** PAKET-P8 G1/G2: osgb-yonetim tanıtım sayfası (tr). Copy loaded server-side only (getStaticProps). */
export default function Page({ dict, content, related }: { dict: Dict; content: CaseContent; related: RelatedLink[] }) {
    return <CasePage locale="tr" dict={dict} content={content} related={related} />;
}

export const getStaticProps = () => caseProps('tr', 'osgb-yonetim');
