import { KbArticlePage } from '../../../components/HomePageV2/KbPages';
import { articleSlugs, getArticle, type Article } from '../../../utils/bilgi';
import type { Dict } from '../../../../content/dict';

/** PAKET-P8 G5: Bilgi Bankası article (en). A new .md in content/en/bilgi/ becomes a page on the next build. */
export default function Page({ dict, article, hasOther }: { dict: Dict; article: Article; hasOther: boolean }) {
    return <KbArticlePage locale="en" dict={dict} article={article} hasOther={hasOther} />;
}

export function getStaticPaths() {
    return { paths: articleSlugs('en').map((slug) => ({ params: { slug } })), fallback: false };
}

export async function getStaticProps({ params }: { params: { slug: string } }) {
    const { dict } = await import('../../../../content/en');
    const article = getArticle('en', params.slug);
    if (!article) return { notFound: true };
    const hasOther = articleSlugs('tr').includes(params.slug);
    return { props: { v2: true, locale: 'en', dict, article, hasOther } };
}
