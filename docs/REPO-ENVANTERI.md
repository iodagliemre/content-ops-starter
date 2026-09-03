# REPO ENVANTERİ — content-ops-starter (V2 öncesi durum)

> PAKET-00 / G0. Repo: `D:/content-ops-starter-main`, branch `v2`. Ölçüm tarihi: 03.09.2026.

## Sürümler (package.json)

| Paket | Sürüm (PAKET-00 öncesi) |
|---|---|
| next | 14.2.15 |
| react / react-dom | 18.3.1 |
| tailwindcss | 3.4.3 (→ v4'e geçirildi, bkz. G0.5) |
| @stackbit/cms-git | 1.0.32 (kaldırıldı) |
| @stackbit/types | 2.1.10 (bekliyor — bkz. "Sökülemeyenler") |
| @netlify/next-runtime | 5.0.0-alpha.25 |
| typescript | 5.6.2 |

`.nvmrc` → `v18`. Ortamda çalışan Node: **v22.14.0**. Next 14.2.15 Node ≥18.17 ister, 22 ile de
çalışıyor ama `.nvmrc` güncel değil — Faz 0 kapsamı dışında, not düşüldü.

`npm run lint` scripti YOKTU — bu paket ekledi (`next lint` + `.eslintrc.json`, `eslint` +
`eslint-config-next` devDependency olarak eklendi).

## Router tipi

**Pages Router** (`src/pages/`), App Router değil. Route listesi (PAKET-00 öncesi):

- `src/pages/[[...slug]].js` — optional catch-all, TÜM sayfaları `content/pages/**/*.{md,json}`
  üzerinden `getStaticPaths`/`getStaticProps` ile üretiyor (Stackbit content-ops mimarisi).
  Ürettiği rotalar: `/` (index.md), `/clinic/`, `/brokers-brain/`, `/privacy/`, `/signup/`,
  `/pricing/`, `/careers/`, `/blog`, `/blog/*` (10 yazı).
- `src/pages/_app.js` — global CSS + (bu paketle) self-host Inter.
- `src/pages/api/reindex.js` — Algolia arama reindex endpoint'i (content/'a bağımlı, V2
  kapsamında kullanılmıyor, dokunulmadı).

**PAKET-00 ile değişen tek şey:** `src/pages/index.tsx` eklendi (literal route, `/` için
`[[...slug]].js`'den önce eşleşir). `content/pages/index.md` bu yüzden `_legacy/content/pages/`
altına taşındı (aksi halde Next.js "aynı path için optional catch-all + literal route" çakışması
verir). Diğer tüm rotalar (`/clinic`, `/brokers-brain`, `/privacy`, `/signup`, blog, pricing,
careers) **hiç dokunulmadı**, eskisi gibi `[[...slug]].js` üzerinden çalışıyor.

## content/ modelleri ve Stackbit bağımlılığı

- `content/pages/*.md`, `content/data/*.json` — sayfa/parça verisi (frontmatter + markdown).
- `sources/local/models/*.ts` (46 dosya) — Stackbit `Model` tip tanımları. `local-content.ts`
  bunları SADECE referans-alan çözümleme için okuyor (`field.type === 'reference'`); Stackbit
  görsel editörüyle bağı yok, salt veri şeması. **Bu paket bunu SİLMEDİ** — bkz. aşağıdaki
  "Sökülemeyenler" bölümü ve RAPOR-P00.md'deki olay kaydı.
- `stackbit.config.ts` — Stackbit CMS-git bağlayıcısı + visual editor config. **Silindi**,
  hiçbir kod ona bağımlı değildi (doğrulandı: `grep -r "sources/local/models"` → sadece
  `local-content.ts` ve `stackbit.config.ts`).
- `src/components/**` (Header, Footer, GenericSection, FeaturedItemsSection, CarouselSection,
  vb.) — model-adı → bileşen eşlemesiyle (`components-registry.ts`) render ediliyor. Stackbit'e
  DEĞİL, kendi `content/` şemasına bağımlı; `data-sb-*` attribute'ları sadece Stackbit visual
  editor açıkken dolduruluyor (`enableAnnotations`), yoksa no-op. **Dokunulmadı.**

## public/ görsel envanteri (öne çıkanlar)

`clinic-*.png` (9), `brokerbrain-*.png` (5), `sector-*.png` (4), `phase-*.png` (4),
`doveify-dashboard.png`, `logo.png`, `logo-dark.svg`, `logo-white.svg`, `favicon.svg`,
`main-hero.svg/.jpg`, `avatar*.svg` (6), placeholder video/görseller. Bunlar mevcut EN site +
alt sayfalar için kullanılıyor, V2 homepage'e taşınmayacak (V2 kendi `public/brand/` setini
kullanıyor, bkz. RAPOR-P00.md G2).

## netlify.toml / .env-example

```
[build]
  command = "npm run build"
  publish = ".next"
```

Minimal, doğru. **Dokunulmadı** (G5 kuralı: "yoksa oluştur, varsa dokunma"). `.env-example`
sadece Algolia anahtarları (`NEXT_PUBLIC_ALGOLIA_*`) — V2 kapsamı dışında.

## Sökülemeyenler / bilinçli olarak dokunulmayanlar (bu paket)

- `sources/local/models/*.ts` + `@stackbit/types` paketi: `/clinic`, `/brokers-brain`,
  `/privacy`, `/signup` render zincirinin parçası, kaldırılamadı (Emre talimatı, bkz. RAPOR-P00.md).
- `tailwind.config.js`: v4'e geçişte tamamen silinmedi, `@config` direktifiyle (Tailwind v4'ün
  resmi geriye-uyumluluk yolu) yaşatıldı — eski `bg-light-fg-dark` gibi bileşik renk sınıfları ve
  özel plugin (buton/başlık stilleri) subpages için hâlâ gerekli.
- `src/utils/indexer/*`, `src/pages/api/reindex.js`, Algolia bağımlılıkları: Stackbit'e değil
  content/'a bağımlı arama özelliği, V2 kapsamı dışı, dokunulmadı.
