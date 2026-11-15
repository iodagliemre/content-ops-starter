import { KbListPage } from '../../../components/HomePageV2/KbPages';
import { listArticles, type ArticleMeta } from '../../../utils/bilgi';
import type { Dict } from '../../../../content/dict';

/** PAKET-P8 G5: Bilgi Bankası list (en). Every .md in content/en/bilgi/ is listed, newest first. */
export default function Page({ dict, articles }: { dict: Dict; articles: ArticleMeta[] }) {
    return <KbListPage locale="en" dict={dict} articles={articles} />;
}

export async function getStaticProps() {
    const { dict } = await import('../../../../content/en');
    return { props: { v2: true, locale: 'en', dict, articles: listArticles('en') } };
}
