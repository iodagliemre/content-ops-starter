# Doveify Site V2

doveify.io'nun yeniden tasarımı. Next.js 14 (pages router) + Tailwind v4, statik üretim, Netlify. Çalışma `v2` branch'inde; `main` canlı site.

## Çalıştırma

```bash
nvm use            # Node 22 (.nvmrc)
npm ci
npm run dev        # geliştirme, http://localhost:3000
npm run build && npm run start   # prod build, ölçüm ve QA bununla yapılır
npx tsc --noEmit && npm run lint # her paket sonunda zorunlu (CLAUDE.md)
```

Lighthouse ölçümü: prod build + `next start`, Chrome kapalı, **adaptör takılı**. Pil modunda CPU kısılır, CPU kıyas değeri 1200'ün
altında kalır ve skor 10 puan kadar düşer (RAPOR-P6.md). Raporlar yalnız `.json`, `docs/perf/`.

## Yapı

| Yol | Ne |
|---|---|
| `src/pages/index.tsx`, `src/pages/en/index.tsx` | Homepage TR / EN (`HomePageV2`) |
| `src/pages/sistemler/*.tsx`, `src/pages/en/systems/*.tsx` | Vaka sayfaları (`CasePage`) |
| `src/pages/404.tsx` | V2 404 |
| `src/pages/[...slug].js` | Eski Stackbit içeriğinden kalanlar: blog + `/privacy` |
| `src/components/HomePageV2/` | Bütün V2 bileşenleri (nav, hero, bölümler, footer, `SiteHead`, `CasePage`) |
| `content/tr/`, `content/en/` | Dil sözlükleri; sayfa `getStaticProps` ile yalnız kendi dilini alır, bileşenler `useDict()` ile okur |
| `content/*.ts` | Tipler ve dilden bağımsız sabitler (linkler, görseller, yollar) |
| `content/pages/`, `content/data/`, `sources/` | Stackbit içerik zinciri (yalnız blog + privacy için) |
| `src/css/main.css` | Tailwind + V2 token'ları + bölüm motion'ları (P-paket başlıklarıyla) |
| `next.config.js` | `trailingSlash: true`, eski yollar için 301'ler |
| `_legacy/` | Silinmeyen eski dosyalar (Stackbit sayfaları, bileşenler, deneme perf setleri); build'e girmez |

## Belgeler

| Dosya | Rolü |
|---|---|
| `CLAUDE.md` | Uygulama kuralları (Claude Code için); dokunulmaz |
| `DESIGN-LOCK.md` | Kilitli tasarım kararları; değişiklik yalnız Emre + CD onayıyla, sürüm artırılarak |
| `PROJECT-STATE.md` | Tek gerçek durum kaynağı; her paket sonunda üzerine yazılır |
| `paketler/PAKET-*.md` | Delivery Lead brief'leri |
| `RAPOR-P*.md` | Her paketin raporu: yapılan, ölçülen, yapılmayan, bekleyen karar |
| `docs/design/approved/` | Görsel otorite (CD onaylı) |
| `docs/qa/`, `docs/perf/` | Ekran görüntüleri ve Lighthouse raporları |

## Paket geçmişi

P00 kurulum · P01 hero performance gate · P1/P1R nav + hero (LOCK v0.2) · P2A/P2AR Ürünler carousel (LOCK v0.3) ·
P3/P3-R1 Web Factory + Dijital Dönüşüm (LOCK v0.4) · P4 Sahiplik, Why, Çalışmalar, Final CTA, footer · P5 SEO/meta/OG + TR/EN ·
P6 performans, vaka sayfaları, temizlik (LOCK v0.5). Ayrıntı: ilgili `RAPOR-P*.md`.

Git işlemleri (branch, commit, push) Emre'nindir.
