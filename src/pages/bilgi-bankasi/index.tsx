import { KbListPage } from '../../components/HomePageV2/KbPages';
import { listArticles, type ArticleMeta } from '../../utils/bilgi';
import type { Dict } from '../../../content/dict';

/** PAKET-P8 G5: Bilgi Bankası list (tr). Every .md in content/tr/bilgi/ is listed, newest first. */
export default function Page({ dict, articles }: { dict: Dict; articles: ArticleMeta[] }) {
    return <KbListPage locale="tr" dict={dict} articles={articles} />;
}

export async function getStaticProps() {
    const { dict } = await import('../../../content/tr');
    return { props: { v2: true, locale: 'tr', dict, articles: listArticles('tr') } };
}
