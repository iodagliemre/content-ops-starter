import LegalPage from '../components/HomePageV2/LegalPage';
import type { Dict } from '../../content/dict';
import type { LegalPageContent } from '../../content/legal';

/**
 * PAKET-P7 G2: Gizlilik ve Kişisel Veriler Aydınlatma Metni (tr). The text is read at build time from
 * docs/legal/gizlilik-2026-09-04.md (Emre's file, unchanged) and only split into headings/paragraphs.
 */
export default function Page({ dict, content }: { dict: Dict; content: LegalPageContent }) {
    return <LegalPage locale="tr" dict={dict} content={content} />;
}

export async function getStaticProps() {
    const [{ dict }, { parseLegalText }, { readFileSync }, path] = await Promise.all([
        import('../../content/tr'),
        import('../../content/legal'),
        import('fs'),
        import('path')
    ]);
    const source = readFileSync(path.join(process.cwd(), 'docs/legal/gizlilik-2026-09-04.md'), 'utf8');
    const document = parseLegalText(source);
    const content: LegalPageContent = {
        meta: {
            title: `${document.title} — Doveify`,
            description: `Doveify ${document.title}. ${document.updated}.`,
            ogImage: '/og/og-home.png'
        },
        document
    };
    return { props: { v2: true, locale: 'tr', dict, content } };
}
