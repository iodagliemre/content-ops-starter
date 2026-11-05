/**
 * PAKET-P7 G2. Gizlilik sayfaları. TR metin `docs/legal/gizlilik-2026-09-04.md` dosyasından build sırasında
 * okunur ve yalnızca yapıya ayrılır — kelimeye dokunulmaz:
 *   satır 1 → H1, satır 2 ("Son Güncelleme: …") → tarih satırı,
 *   `1. …` – `12. …` ile başlayan satır → H2, `a) …` / `b) …` / `c) …` ile başlayan satır → H3,
 *   boş satırla ayrılan diğer satır grupları → paragraf (grup içindeki satırlar alt alta, <br>).
 * EN (P7 son): aynı metnin resmî olmayan çevirisi `docs/legal/gizlilik-2026-09-04.en.md`, aynı ayrıştırıcıyla.
 */

export type LegalBlock = { type: 'h2' | 'h3' | 'p'; lines: string[] };

export type LegalDocument = {
    title: string;
    updated: string;
    blocks: LegalBlock[];
};

export type LegalPageContent = {
    meta: { title: string; description: string; ogImage: string };
    document: LegalDocument;
};

const H2 = /^\d{1,2}\. \S/;
const H3 = /^[a-z]\) \S/;

/** Splits the TR privacy text into blocks. Every source line ends up in exactly one block, unchanged. */
export function parseLegalText(source: string): LegalDocument {
    const lines = source.replace(/^﻿/, '').split(/\r?\n/);
    const [title = '', updated = '', ...rest] = lines;
    const blocks: LegalBlock[] = [];
    let paragraph: string[] = [];
    const flush = () => {
        if (paragraph.length) blocks.push({ type: 'p', lines: paragraph });
        paragraph = [];
    };
    for (const raw of rest) {
        const line = raw.trimEnd();
        if (!line.trim()) {
            flush();
        } else if (H2.test(line)) {
            flush();
            blocks.push({ type: 'h2', lines: [line] });
        } else if (H3.test(line)) {
            flush();
            blocks.push({ type: 'h3', lines: [line] });
        } else {
            paragraph.push(line);
        }
    }
    flush();
    return { title: title.trim(), updated: updated.trim(), blocks };
}
