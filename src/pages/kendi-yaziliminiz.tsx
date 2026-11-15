import OwnSoftwarePage from '../components/HomePageV2/OwnSoftwarePage';
import { listArticles } from '../utils/bilgi';
import type { RelatedLink } from '../utils/case-props';
import { kbArticlePath } from '../../content/locale';
import type { Dict } from '../../content/dict';
import type { OwnSoftwareContent } from '../../content/ownSoftware';

/** PAKET-P8 G4: Kendi Yazılımınız (tr). Related reading = Bilgi Bankası articles tagged `system: kendi-yaziliminiz`. */
export default function Page({ dict, content, related }: { dict: Dict; content: OwnSoftwareContent; related: RelatedLink[] }) {
    return <OwnSoftwarePage locale="tr" dict={dict} content={content} related={related} />;
}

export async function getStaticProps() {
    const [{ dict }, { ownSoftware }] = await Promise.all([import('../../content/tr'), import('../../content/tr/ownSoftware')]);
    const related = listArticles('tr')
        .filter((a) => a.system === 'kendi-yaziliminiz')
        .map((a) => ({ title: a.title, href: kbArticlePath('tr', a.slug) }));
    return { props: { v2: true, locale: 'tr', dict, content: ownSoftware, related } };
}
