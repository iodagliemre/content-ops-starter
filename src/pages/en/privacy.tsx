import LegalPage from '../../components/HomePageV2/LegalPage';
import type { Dict } from '../../../content/dict';
import type { LegalPageContent } from '../../../content/legal';

/**
 * PAKET-P7 G2 + P7 son: Privacy and Personal Data Information Notice (en) — unofficial English translation of
 * docs/legal/gizlilik-2026-09-04.md (docs/legal/gizlilik-2026-09-04.en.md; first line states that the Turkish
 * version prevails). Same parser and template as /gizlilik/. The former Stackbit text is in
 * _legacy/content/legal/privacy-en.md.
 */
export default function Page({ dict, content }: { dict: Dict; content: LegalPageContent }) {
    return <LegalPage locale="en" dict={dict} content={content} />;
}

export async function getStaticProps() {
    const [{ dict }, { parseLegalText }, { readFileSync }, path] = await Promise.all([
        import('../../../content/en'),
        import('../../../content/legal'),
        import('fs'),
        import('path')
    ]);
    const source = readFileSync(path.join(process.cwd(), 'docs/legal/gizlilik-2026-09-04.en.md'), 'utf8');
    const document = parseLegalText(source);
    const content: LegalPageContent = {
        meta: {
            title: `${document.title} — Doveify`,
            description: `Doveify ${document.title} (unofficial English translation). ${document.updated}.`,
            ogImage: '/og/og-home-en.png'
        },
        document
    };
    return { props: { v2: true, locale: 'en', dict, content } };
}
