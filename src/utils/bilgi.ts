/**
 * PAKET-P8 G5. Bilgi Bankası: content/{tr,en}/bilgi/*.md. Server-side only (getStaticProps / getStaticPaths).
 *
 * Frontmatter is read line by line (`key: value`), not with YAML: the source titles and descriptions contain
 * `: ` ("…kiralanmaz: kurumsal hafıza…"), which YAML rejects unless quoted, and the files are copied verbatim
 * (brief: "metin değiştirilmez"). Emre adds an article by dropping a file with the same six fields
 * (title, description, date, slug, system, readMin); it is published on the next build. The body's first
 * `# H1` is not rendered (the page prints the title as its own H1).
 */
import * as fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import type { Locale } from '../../content/locale';

export type ArticleMeta = {
    slug: string;
    title: string;
    description: string;
    date: string;
    system: string;
    readMin: number;
    /** <title>: `title | Doveify` when it fits in 60 characters, else the title alone, else the part up to the first
     * `:` / `?` + ` | Doveify` (the article title itself is never edited). */
    metaTitle: string;
    /** OG image path (public/og/bilgi/<slug>{,-en}.png, else the Bilgi Bankası default). */
    ogImage: string;
};

export type Article = ArticleMeta & { html: string };

const dir = (locale: Locale) => path.join(process.cwd(), 'content', locale, 'bilgi');

function parse(raw: string): { attrs: Record<string, string>; body: string } {
    const text = raw.replace(/\r\n/g, '\n');
    const match = /^---\n([\s\S]*?)\n---\n?/.exec(text);
    if (!match) return { attrs: {}, body: text };
    const attrs: Record<string, string> = {};
    for (const line of match[1].split('\n')) {
        const i = line.indexOf(': ');
        if (i > 0) attrs[line.slice(0, i).trim()] = line.slice(i + 2).trim();
    }
    return { attrs, body: text.slice(match[0].length) };
}

function ogFor(locale: Locale, slug: string): string {
    const file = `/og/bilgi/${slug}${locale === 'en' ? '-en' : ''}.png`;
    return fs.existsSync(path.join(process.cwd(), 'public', file)) ? file : `/og/bilgi-bankasi${locale === 'en' ? '-en' : ''}.png`;
}

const SUFFIX = ' | Doveify';
export function metaTitleFor(title: string): string {
    if ((title + SUFFIX).length <= 60) return title + SUFFIX;
    if (title.length <= 60) return title;
    const cut = /^(.+?)(:|\?)\s/.exec(title);
    const head = cut ? (cut[2] === '?' ? cut[1] + '?' : cut[1]) : title.slice(0, 50).replace(/\s+\S*$/, '');
    return (head + SUFFIX).length <= 60 ? head + SUFFIX : head.slice(0, 60);
}

function toMeta(locale: Locale, attrs: Record<string, string>, file: string): ArticleMeta {
    const slug = attrs.slug || path.basename(file, '.md');
    const title = attrs.title ?? slug;
    return {
        slug,
        title,
        metaTitle: metaTitleFor(title),
        description: attrs.description ?? '',
        date: attrs.date ?? '',
        system: attrs.system ?? '',
        readMin: Number(attrs.readMin) || 0,
        ogImage: ogFor(locale, slug)
    };
}

function files(locale: Locale): string[] {
    const d = dir(locale);
    return fs.existsSync(d) ? fs.readdirSync(d).filter((f) => f.endsWith('.md')) : [];
}

/** All articles, newest first (then by title). */
export function listArticles(locale: Locale): ArticleMeta[] {
    return files(locale)
        .map((f) => toMeta(locale, parse(fs.readFileSync(path.join(dir(locale), f), 'utf8')).attrs, f))
        .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title, locale));
}

export function getArticle(locale: Locale, slug: string): Article | null {
    const file = files(locale).find((f) => toMeta(locale, parse(fs.readFileSync(path.join(dir(locale), f), 'utf8')).attrs, f).slug === slug);
    if (!file) return null;
    const { attrs, body } = parse(fs.readFileSync(path.join(dir(locale), file), 'utf8'));
    const withoutH1 = body.replace(/^\s*# .*\n/, '');
    return { ...toMeta(locale, attrs, file), html: marked.parse(withoutH1, { async: false }) as string };
}

/** Article slugs that exist in this language (getStaticPaths). */
export const articleSlugs = (locale: Locale) => listArticles(locale).map((a) => a.slug);
