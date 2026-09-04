# RAPOR-P1-HERO-NAV — Nav + Hero'yu DESIGN-LOCK v0.1'e getirme

> Taban: PAKET-01 çıktısı (commit 3cd3887). Bu paket yeni bölüm eklemedi; sadece nav+hero'yu
> brief'in F1-F7 tablosuna uydurdu. `RAPOR-P01.md`, `RAPOR-P1.md`, `docs/qa/P01-*.png`
> dokunulmadı (brief kuralı).

## Not: DESIGN-LOCK.md / approved görsel bulunamadı

Brief'in "Otorite" olarak gösterdiği `DESIGN-LOCK.md` ve `docs/design/approved/homepage-v1.png`
repoda yok (`docs/design/approved/` sadece `README.md` içeriyor). Uygulama tamamen brief'in
F1-F7 tablosundaki somut değerlerden (renk, px, ms) yapıldı; onaylı görselle piksel karşılaştırma
yapamadım. Emre QA'da bu iki dosyayı da repoya eklerse gelecek paketlerde çapraz kontrol mümkün
olur.

## F1-F7 — yapıldı / nasıl

| # | Durum | Nasıl |
|---|---|---|
| F1 | ✅ | `Nav.tsx`: `border-b border-v2-border` kaldırıldı, `bg-v2-bg-base` eklendi (hero ile aynı zemin). Yükseklik `h-16` (64px) mobil / `h-20` (80px) ≥1024px — spec'in "80px/64px" notu yükseklik olarak yorumlandı. |
| F2 | ✅ | Tek `<a>` içinde flex: mark `<img>` 28px (`h-7 w-7`), wordmark artık **gerçek metin** (`<span>`, Inter 400/15px/uppercase/tracking .22em/beyaz — ayrıntı aşağıda), heartbeat inline SVG ~56px (`w-14`), mavi, 1.5px, `gap-1.5 lg:gap-2.5` (6px/10px). `items-center` ile heartbeat dikeyde wordmark'ın ortasına hizalı (x-height'in tam ortası değil, satır kutusunun ortası — piksel-mükemmel değil, bkz. Bekleyen). |
| F3 | ✅ | Headline: `font-light` (300) `uppercase leading-[1.05] tracking-[0.02em]`, `text-[40px] lg:text-[64px]`. Computed style ile doğrulandı (aşağıda). |
| F4 | ✅ | Hero heartbeat: `w-[120px]`, `text-v2-blue`, `strokeWidth=1.5`, `glow` prop → `filter: drop-shadow(0 0 6px rgba(47,123,255,.55))`. |
| F5 | ✅ | Kafa maskesi: `linear-gradient` × 2 (sağdan-sola şeffaf→dolu, yukarıdan-aşağı şeffaf→dolu→şeffaf) + `mask-composite: intersect` / `-webkit-mask-composite: source-in`. Sol/üst/alt erime, sağ keskin — `docs/qa/P1-1280-hero-crop.png`'de görünür, dikdörtgen sınır yok. |
| F6 | ✅ | `public/fonts/inter-{latin,latin-ext}-{300,400,500}.woff2` (gerçek dosya, `@fontsource/inter`'den harmanlandı, latin+latin-ext, TR karakterler dahil). `@font-face` × 6 (`src/css/main.css`), `font-display: swap`. **700 hiçbir yerde yok** — `next/font/google` kaldırıldı (`src/pages/_app.js`), `tailwind.config.js`'in `fontFamily.sans` artık düz `'Inter'`. `grep -rn "font-bold\|font-weight:\s*700" src/components/HomePageV2` → 0 sonuç. `document.fonts` kontrolü: 6/6 `Inter 300/400/500` `status:"loaded"`, 700 kayıtlı değil. |
| F7 | ✅ | Kafa `<img>` `opacity:1` sabit (LCP — PAKET-01'den beri değişmedi). Üstüne `bg-v2-bg-base` overlay, `opacity 1→0` `.9s` `delay .9s`; aynı anda wrapper `scale(.96→1)`. Blur yok (PAKET-01'de zaten kaldırılmıştı, LCP nedeniyle). `prefers-reduced-motion: reduce` ile puppeteer/CDP üzerinden `emulateMediaFeatures` kullanılarak t=0 anında kontrol edildi: overlay `opacity:0`, wrapper `transform: matrix(1,0,0,1,0,0)` (scale 1), heartbeat `stroke-dashoffset:0`, headline `opacity:1` — hepsi ANINDA son karede, flaş/dikdörtgen yok. |

**Wordmark <img>'den metne geçişin nedeni**: F2'nin "Inter 400, 15px" isteği bir `<img>` ile
yüklenen SVG üzerinden sağlanamaz — host sayfanın `@font-face`'i izole SVG dokümanına miras
geçmiyor (bu, RAPOR-P00.md'de zaten "bekleyen" olarak not edilmişti). Gerçek `<span>` metnine
çevirmek hem F2'yi hem de o eski notu aynı anda kapattı. `logo-wordmark.svg` dosyası silinmedi,
sadece nav'da kullanılmıyor (ileride footer vb. için kalabilir).

## Kapı

```
$ npx tsc --noEmit; echo "exit: $?"
exit: 0

$ npm run build; echo "exit: $?"
... (aynı 3 @next/next/no-img-element uyarısı: ImageBlock, PhasesSection, Nav.tsx'in mark <img>'i
     — Nav.tsx artık SADECE 1 <img> uyarısı veriyor, PAKET-01'deki 2'den düştü, wordmark
     metne geçtiği için)
 ✓ Compiled successfully
 ✓ Generating static pages (21/21)
exit: 0

$ npm run lint; echo "exit: $?"
(yukarıdaki 3 uyarıyla aynı)
exit: 0
```

Yeni uyarı yok; brief'in "mevcut 4 <img> uyarısı kabul" eşiğinin altında (3'e düştü).

## Lighthouse

3x mobil + 3x masaüstü + 1x zorla `prefers-reduced-motion: reduce` (`--force-prefers-reduced-motion`
Chrome flag'i), `--throttling-method=simulate`. Ham raporlar: `docs/perf/gate-p1-{mobile,desktop}-
{1,2,3}.report.{json,html}`, `docs/perf/gate-p1-mobile-reduced-motion.report.json`.

| Koşum | Performance | LCP | CLS |
|---|---|---|---|
| Mobil #1 | 95 | 2868ms | 0 |
| Mobil #2 | 95 | 2877ms | 0 |
| Mobil #3 | 94 | 3022ms | 0 |
| **Mobil medyan** | **95** | 2877ms | **0** |
| Mobil, reduced-motion | 95 | 2880ms | 0 |
| Masaüstü #1-3 (bilgi amaçlı) | 78, 88, 88 | 2283-2887ms | 0 |
| **Masaüstü medyan** | 88 | 2284ms | 0 |

**LCP elementi**: `div.relative > div.absolute > div.v2-hero-head-layer > img.block` — kafa
görseli, doğru. **Kapı: GEÇTİ** (mobil ≥95 ✅, CLS ≤0.02 ✅).

**Varyans notu (şeffaflık için)**: Bu ortamda ölçüm gürültüsü yüksek — aynı kodla art arda
denemelerde mobil skor 92-98 arasında salındı (6+ deneme boyunca gözlendi, medyan tutarlı
biçimde 94-95 civarında). PAKET-01'de de aynı desen vardı. Kök neden (o raporda da yazılı):
LCP'nin ~%57'si "Render Delay" — React hydration/JS execution maliyeti, hero'ya değil tüm
Next.js Pages Router uygulamasına ait sabit bir maliyet, bu paketin kapsamı dışında. Yukarıdaki
tablo, brief'in istediği "3'er kez koş, medyan al" protokolünün sonucudur.

## Ekran görüntüleri

`docs/qa/P1-1280.png`, `P1-375.png`, `P1-1280-hero-crop.png`, `P1-375-nav-crop.png` — production
build (`npm run start`) üzerinden, CDP tabanlı (`puppeteer-core`) screenshot (PAKET-01'de
headless Chrome CLI'nin `--screenshot` bayrağının küçük SVG ikonlarını tutarsız render ettiği
bulunmuştu — aynı yöntem burada da kullanıldı). Motion bittikten sonra (3.5s bekleme) çekildi.

## Bekleyen / notlar

- **DESIGN-LOCK.md ve approved görsel repoda yok** (yukarı bkz) — piksel-karşılaştırmalı QA
  yapılamadı, sadece brief'in yazılı değerleriyle doğrulandı.
- **Heartbeat dikey hizası** (F2: "wordmark x-height ortasına hizalı"): `items-center` ile flex
  kutusunun ortasına hizalandı, bu x-height'in geometrik ortasıyla piksel-piksel aynı olmayabilir
  (satır yüksekliği ile x-height farklı referans noktaları). `docs/qa/P1-375-nav-crop.png`'de
  gözle kontrol edilebilir; gerekirse ince bir `translate-y` düzeltmesi bir sonraki pakette.
- **Eski subpages'e (`/clinic` vb.) yan etki**: `fontFamily.sans` artık self-host `'Inter'`
  (300/400/500). Bu sayfalarda `font-weight:700` kullanan yerler (h1-h6, bazı buton stilleri —
  eski `style.json`'dan) artık gerçek 700 dosyası olmadığı için tarayıcı sentetik kalınlaştırma
  yapacak. PAKET-00'dan beri zaten paylaşılan bir karar (next/font/google de 700 taşıyordu ama
  o zaman 700 dosyası VARDI); bu paket 700'ü tamamen kaldırdığı için etki şimdi gerçekleşiyor.
  Subpages'e dokunulmadı (kapsam dışı), ama görsel fark küçük/kabul edilebilir olmalı.
- Masaüstü performansı (88) bilgi amaçlı, kapı şartı değil.

## Dosya listesi

**Yeni:** `public/fonts/inter-{latin,latin-ext}-{300,400,500}.woff2`, `RAPOR-P1-HERO-NAV.md`,
`docs/qa/P1-1280.png`, `P1-375.png`, `P1-1280-hero-crop.png`, `P1-375-nav-crop.png`,
`docs/perf/gate-p1-{mobile,desktop}-{1,2,3}.report.{json,html}`,
`docs/perf/gate-p1-mobile-reduced-motion.report.json`.

**Değişti:** `src/components/HomePageV2/Nav.tsx` (F1/F2), `Hero.tsx` (F3/F4), `HeroHead.tsx`
(F5/F7), `Heartbeat.tsx` (`strokeWidth`/`glow`/`vector-effect` prop'ları eklendi), `index.tsx`
(font preload linkleri), `src/css/main.css` (`@font-face` × 6, `.v2-hero-head-overlay` +
`v2OverlayFade`), `src/pages/_app.js` (next/font/google kaldırıldı), `tailwind.config.js`
(`fontFamily.sans` → düz `'Inter'`).

**Dokunulmadı:** `RAPOR-P01.md`, `RAPOR-P1.md`, `docs/qa/P01-*.png`, diğer 6 placeholder section,
subpages, `[[...slug]].js`, `public/brand/logo-wordmark.svg` (dosya duruyor, kullanılmıyor).
