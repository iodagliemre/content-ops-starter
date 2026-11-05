import Link from 'next/link';
import ArrowRight from '../components/svgs/arrow-right';
import Nav from '../components/HomePageV2/Nav';
import SiteHead from '../components/HomePageV2/SiteHead';
import { LocaleProvider } from '../components/HomePageV2/locale';
import type { Dict } from '../../content/dict';

/**
 * PAKET-P5-SEO-META-DIL G3. V2-styled 404 (there was no custom 404 before; Next served its default).
 * TR only: a static 404 can't know which language the visitor came from.
 * PAKET-P6 B4: second link to the systems section; dictionary from getStaticProps (A1).
 */
const LINK_CLASS = 'group inline-flex h-12 items-center gap-2 text-[13px] font-medium uppercase tracking-[0.08em] text-v2-text-primary';

export default function NotFound({ dict }: { dict: Dict }) {
    return (
        <LocaleProvider locale="tr" dict={dict}>
            <SiteHead title="Sayfa bulunamadı — Doveify" indexable={false} />
            <div className="v2-root min-h-screen overflow-x-hidden bg-v2-bg-base text-v2-text-primary">
                <Nav />
                <main className="mx-auto max-w-7xl px-6 py-24 lg:py-32">
                    <h1 className="text-[32px] font-light leading-[1.15] text-white lg:text-[48px]">Sayfa bulunamadı.</h1>
                    <div className="mt-8 flex flex-col items-start gap-2 sm:flex-row sm:gap-8">
                        <Link href="/" className={LINK_CLASS}>
                            ANA SAYFAYA DÖN
                            <ArrowRight className="h-4 w-4 fill-current transition-transform group-hover:translate-x-1" />
                        </Link>
                        <Link href="/#urunler" className={LINK_CLASS}>
                            KURDUĞUMUZ SİSTEMLER
                            <ArrowRight className="h-4 w-4 fill-current transition-transform group-hover:translate-x-1" />
                        </Link>
                    </div>
                </main>
            </div>
        </LocaleProvider>
    );
}

export async function getStaticProps() {
    const { dict } = await import('../../content/tr');
    return { props: { v2: true, locale: 'tr', dict } };
}
