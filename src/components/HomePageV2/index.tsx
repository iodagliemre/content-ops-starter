import Head from 'next/head';
import Nav from './Nav';
import Hero from './Hero';

/**
 * V2 homepage. Rendered from src/pages/[[...slug]].js when urlPath === '/' (see that file's
 * Page() function) — not its own page file, see RAPOR-P00.md "Olay kaydı #3" for why.
 *
 * PAKET-01: nav + hero are real now. The other 6 sections stay placeholder (out of scope for
 * this package — "hero dışı section'lara dokunma", paketler/PAKET-01-HERO-GATE.md).
 */

const PLACEHOLDER_SECTIONS: Array<{ id: string; label: string }> = [
    { id: 'urunler', label: 'Ürünlerimiz' },
    { id: 'web-factory', label: 'Web Factory' },
    { id: 'donusum', label: 'Dijital Dönüşüm' },
    { id: 'sahiplik', label: 'Sahiplik' },
    { id: 'calismalar', label: 'Çalışmalar' },
    { id: 'iletisim', label: 'İletişim' }
];

export default function HomePageV2() {
    return (
        <>
            <Head>
                <title>Doveify</title>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/icon.svg" type="image/svg+xml" />
                <link rel="icon" href="/favicon.ico" sizes="any" />
                <link rel="apple-touch-icon" href="/apple-icon.png" />
                {/* og:description / diğer meta etiketleri P5'te (SEO paketi) eklenecek */}
                <meta property="og:title" content="Doveify" />
                <meta property="og:image" content="/og-image.jpg" />
            </Head>
            <div className="min-h-screen bg-v2-bg-base text-v2-text-primary">
                <Nav />
                <main>
                    <Hero />
                    {PLACEHOLDER_SECTIONS.map((section) => (
                        <section
                            key={section.id}
                            id={section.id}
                            className="mx-auto max-w-7xl border-b border-v2-border px-6 py-24"
                        >
                            <p className="text-xs uppercase tracking-widest text-v2-text-secondary">{section.label}</p>
                            <p className="mt-2 text-v2-text-secondary">
                                [BEKLEYEN-İÇERİK] — bu bölüm sonraki paketlerde doldurulacak.
                            </p>
                        </section>
                    ))}
                </main>
                <footer className="px-6 py-10 text-sm text-v2-text-secondary">
                    [BEKLEYEN-İÇERİK] Footer — P1&apos;de
                </footer>
            </div>
        </>
    );
}
