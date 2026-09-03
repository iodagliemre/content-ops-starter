import Head from 'next/head';

/**
 * V2 homepage skeleton (PAKET-00 / G1).
 * Placeholder only — section content, nav and footer are rebuilt for real in P1-P4.
 *
 * Rendered from src/pages/[[...slug]].js when urlPath === '/' (see that file's Page()
 * function). Not its own page file: Next.js forbids a literal `pages/index.*` route
 * coexisting with an optional catch-all (`[[...slug]]`) at the same specificity — see
 * RAPOR-P00.md for the full story. This component-in-the-catch-all approach avoids that
 * conflict entirely while keeping /clinic, /brokers-brain, /privacy, /signup untouched.
 */

const SECTIONS: Array<{ id: string; label: string }> = [
    { id: 'hero', label: 'Hero' },
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
                <header className="border-b border-v2-border px-6 py-4">
                    <div className="mx-auto flex max-w-7xl items-center justify-between">
                        <span className="text-lg font-semibold tracking-wide">DOVEIFY</span>
                        <span className="text-sm text-v2-text-secondary">[BEKLEYEN-İÇERİK] Nav — P1&apos;de</span>
                    </div>
                </header>
                <main>
                    {SECTIONS.map((section) => (
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
