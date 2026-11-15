/**
 * PAKET-P8 G2. getStaticProps for the six system pages (TR /sistemler/<slug>/, EN /en/systems/<en-slug>/).
 * Server-side only: loads the page's language dictionary, the system's copy and the titles of its related
 * Bilgi Bankası articles (internal link network, G6).
 */
import type { CaseSlug, Locale } from '../../content/locale';
import { kbArticlePath } from '../../content/locale';
import type { CaseContent } from '../../content/cases';
import { listArticles } from './bilgi';

export type RelatedLink = { title: string; href: string };

const EXPORT_NAME: Record<CaseSlug, string> = {
    'clinic-os': 'clinicOs',
    'brokers-brain': 'brokersBrain',
    'emlak-ofis-paneli': 'emlakOfisPaneli',
    'osgb-yonetim': 'osgbYonetim',
    'kuru-temizleme': 'kuruTemizleme',
    'turkisg-ai': 'turkisgAi'
};

export async function caseProps(locale: Locale, slug: CaseSlug) {
    const [{ dict }, mod] = await Promise.all([
        locale === 'tr' ? import('../../content/tr') : import('../../content/en'),
        locale === 'tr' ? import(`../../content/tr/cases/${slug}`) : import(`../../content/en/cases/${slug}`)
    ]);
    const content = mod[EXPORT_NAME[slug]] as CaseContent;
    const articles = listArticles(locale);
    const related: RelatedLink[] = content.articles
        .map((s) => articles.find((a) => a.slug === s))
        .filter(Boolean)
        .map((a) => ({ title: a.title, href: kbArticlePath(locale, a.slug) }));
    return { props: { v2: true, locale, dict, content, related } };
}
