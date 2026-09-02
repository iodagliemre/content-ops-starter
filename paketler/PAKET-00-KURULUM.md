# PAKET-00 — KURULUM

> Ön koşul: Emre mevcut repoda `v2` branch'ini açar, bu klasörü repo köküne kopyalar. `main`'e dokunulmaz.
> Kararlar: Stackbit çıkarılıyor ✅, Tailwind v4 ✅, logo = amblem + wordmark + heartbeat ✅, Framer Motion onaylı ✅. Dil: TR varsayılan (EN P5'te).

## Bağlam
`CLAUDE.md` oku. `PROJECT-STATE.md` oku. `docs/FAZ-PLANI.md` Faz 0 bölümünü oku.

## Görevler

### G0 — Repo envanteri (önce bu)
Repo: `D:/content-ops-starter-main` — Netlify/Stackbit content-ops starter.
- `package.json`: Next.js / React / Tailwind / Stackbit sürümleri
- Router tipi (`src/pages` mi `src/app` mı), route listesi
- `content/` modelleri ve hangi sayfaların içeriği oradan geliyor; `stackbit.config.ts` model listesi
- `src/components` listesi, hangileri Stackbit'e bağlı
- `public/` görsel envanteri (clinic-dashboard.png, brokerbrain-dashboard.png, sector-*.png, phase-*.png vb.)
- `netlify.toml` içeriği, `.nvmrc` Node sürümü
→ `docs/REPO-ENVANTERI.md`
- Envanter bitince G0.5'e geç.

### G0.5 — Stackbit sökümü + Tailwind v4
- `stackbit.config.ts`, `sources/`, Stackbit bağımlılıkları (`@stackbit/*`) kaldır; `content/` klasörünü `_legacy/content/` altına taşı (silme — alt sayfa metinleri oradan alınacak)
- Alt sayfalar (/clinic, /brokers-brain, /privacy, /signup) Stackbit modelinden geliyorsa: düz sayfa bileşenine dönüştür, metin bire bir. Bu adım büyükse RAPOR'da ayrı paket öner (P6'ya kaydır), önce homepage'e odaklan.
- Tailwind v3 → v4: `tailwind.config.js` + `postcss.config.js` kaldır, `@import "tailwindcss"` + `@theme`. Eski class'lar kırılırsa listele.
- Alt sayfalara (/clinic, /brokers-brain, /privacy, /signup) DOKUNMA.

### G1 — Homepage temizliği
- Mevcut `app/page.tsx` (veya `pages/index`) içeriğini `_legacy/` altına taşı (silme), yerine boş V2 homepage iskeleti: section placeholder'ları (hero, urunler, web-factory, donusum, sahiplik, calismalar, iletisim) id'leriyle
- Layout/nav/footer: mevcut yapı korunur, V2'de P1'de yenilenir
- Tailwind v4 token dosyası: `docs/brand/BRAND.md` renk placeholder'larını `app/globals.css` `@theme` altına koy. Değerler **ölçülecek**: `docs/design/reference/homepage-ref-v1.png` üzerinden zemin, mavi, metin gri, border renklerini örnekle; ölçülen hex'leri `docs/design/TOKENS.md`'ye yaz (kaynak koordinatla).

### G2 — Logo assetleri
- `docs/brand/logo-doveify-v2.png` → vektörize. Üç ayrı SVG: `logo-mark.svg` (amblem, koyu zemin), `logo-mark-light.svg`, `logo-wordmark.svg`. Otomatik trace sonucu kabul edilebilir; temiz path için ayrıca RAPOR'da "manuel vektör önerilir" notu düş.
- `heartbeat.svg`: referans görseldeki EKG çizgisi, tek path, `pathLength="1"`.
- Favicon seti + `apple-icon.png`.
- OG image 1200×630 (koyu zemin, logo + "Dijital Zekâ. Gerçek Etki.").

### G3 — İçerik
- `docs/content/ICERIK-ENVANTERI.md` → `content/site.ts` (typed). TR metinler görselden; EN metinler mevcut siteden. Boş alanlar `[BEKLEYEN-İÇERİK]`.
- Logo bandı için `content/work.ts` — logolar yok, placeholder text.

### G4 — Fontlar
- Geometrik sans (öneri: Inter veya Manrope, self-host, `next/font/local`), TR subset. Referansa en yakın seçenek RAPOR'da gerekçeli.

### G5 — Netlify
- Mevcut Netlify site ayarına göre `v2` branch deploy adımlarını RAPOR'a yaz (Emre panelde açar). `netlify.toml` yoksa oluştur, varsa dokunma.

## Kapı
`tsc --noEmit; echo "exit: $?"` → 0 · `npm run build; echo "exit: $?"` → 0 · `npm run lint; echo "exit: $?"` → 0
`RAPOR-P00.md` + `PROJECT-STATE.md` güncelle (Faz 0 → ✅, sonraki adım: Faz 1 P-GATE-1).

## Yapma
- Hero animasyonu yazma (Faz 1).
- Metin uydurma, metin önerme.
- `docs/design/approved/` altına dosya koyma.
