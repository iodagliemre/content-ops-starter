import OwnSoftwarePage from '../../components/HomePageV2/OwnSoftwarePage';
import { listArticles } from '../../utils/bilgi';
import type { RelatedLink } from '../../utils/case-props';
import { kbArticlePath } from '../../../content/locale';
import type { Dict } from '../../../content/dict';
import type { OwnSoftwareContent } from '../../../content/ownSoftware';

/** PAKET-P8 G4: Your Own Software (en). Related reading = Bilgi Bankası articles tagged `system: kendi-yaziliminiz`. */
export default function Page({ dict, content, related }: { dict: Dict; content: OwnSoftwareContent; related: RelatedLink[] }) {
    return <OwnSoftwarePage locale="en" dict={dict} content={content} related={related} />;
}

export async function getStaticProps() {
    const [{ dict }, { ownSoftware }] = await Promise.all([import('../../../content/en'), import('../../../content/en/ownSoftware')]);
    const related = listArticles('en')
        .filter((a) => a.system === 'kendi-yaziliminiz')
        .map((a) => ({ title: a.title, href: kbArticlePath('en', a.slug) }));
    return { props: { v2: true, locale: 'en', dict, content: ownSoftware, related } };
}
