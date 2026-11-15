import { KbArticlePage } from '../../components/HomePageV2/KbPages';
import { articleSlugs, getArticle, type Article } from '../../utils/bilgi';
import type { Dict } from '../../../content/dict';

/** PAKET-P8 G5: Bilgi Bankası article (tr). A new .md in content/tr/bilgi/ becomes a page on the next build. */
export default function Page({ dict, article, hasOther }: { dict: Dict; article: Article; hasOther: boolean }) {
    return <KbArticlePage locale="tr" dict={dict} article={article} hasOther={hasOther} />;
}

export function getStaticPaths() {
    return { paths: articleSlugs('tr').map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const { dict } = await import('../../../content/tr');
    const article = getArticle('tr', params.slug);
    if (!article) return { notFound: true };
    const hasOther = articleSlugs('en').includes(params.slug);
    return { props: { v2: true, locale: 'tr', dict, article, hasOther } };
}
