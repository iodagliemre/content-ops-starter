# RAPOR-P3 — PAKET-P3-WEBFACTORY-DONUSUM

> Taban: commit `2c3e038` (doğrulandı). Web Factory ve Dijital Dönüşüm bölümleri yapıldı, G0–G4 ve ev işi uygulandı.
> Git komutu çalıştırılmadı. Paket burada duruyor, sıradaki adım CD görsel onayı.
>
> Ölçümler son kodda, prod build + `next start` ile alındı.

## Özet

- **Kapı geçti.** tsc/build/lint exit 0, yeni uyarı yok; yatay scrollbar yok; CLS 0; LCP = kafa; mobil medyan **89** (eşik 88).
- **Skor kararsız:** üç koşum 79, 89, 98. Eşik yalnız 1 puan farkla geçildi, "gerileme yok" kesin bir sonuç değil.
- **LOCK ile kod arasındaki uyuşmazlık — düzeltildi 03.11.2026:** LOCK v0.3 yan kart için `translateX ∓395px` diyordu, kod ve CD'nin gördüğü sürüm **∓310**. LOCK ∓310 olarak güncellendi, kod değişmedi.

## G0 — DESIGN-LOCK v0.3

- Sürüm satırı `v0.3 — 03.11.2026. Kilitli: NAV, HERO, ÜRÜNLER.` oldu.
- ÜRÜNLER bölümü brief'teki metinle aynen eklendi; sonraki başlıktan "ÜRÜNLER /" çıkarıldı.
- Uyuşmazlıklar (ikisi de **düzeltildi 03.11.2026**):
  - `translateX ∓395px` kodla uyuşmuyordu; kodda `SIDE_TRANSLATE_X = 310`. 395, 24–1256 sınırını aşıyordu (P2AR). LOCK ∓310 oldu.
  - Referans olarak verilen `docs/qa/P2AR-1280.png` ve `P2AR-375.png` yalnız hero'yu gösteriyordu. LOCK artık `P2AR-1280-carousel-crop.png` ve `P2AR-375-carousel-crop.png` karelerini gösteriyor.

## G1 — Link hedefleri

- Nav ve hero bağlantıları zaten istenen hedeflerdeydi; ölçümle doğrulandı. **`Nav.tsx` ve `Hero.tsx` değişmedi.**
- `scroll-margin-top` 80/64 px, P2 dosyalarına dokunmamak için `main.css`'te id seçicileriyle eklendi.

Çapa inişi (bölümün üst kenarının ekran üstüne uzaklığı, px):

| Hedef | 1280 | 375 | Not |
|---|---:|---:|---|
| `#urunler` | 68 | 52 | P2'nin reveal başlangıcındaki 12 px kayması; P2 kilitli olduğu için bırakıldı |
| `#web-factory` | 80 | 64 | ✓ |
| `#donusum` | 80 | 64 | ✓ |
| `#sahiplik` | 80 | 64 | ✓ |
| `#why` | 80 | 64 | ✓ |
| `#calismalar` | 320 | 184 | Sayfa sonuna ulaşılıyor; P4 içeriğiyle çözülür |
| `#iletisim` | 560 | 448 | Aynı sebep |

Not: kodda nav `relative`, sayfayla birlikte kayıyor (brief "sabit nav" diyor). Bu yüzden `scroll-margin` iniş sırasında 80/64 px'lik ek boşluk bırakıyor.

## G2 — Web Factory

Dosyalar: `WebFactory.tsx`, `content/webFactory.ts`, `public/webfactory/screen-{1,2,3}.webp`.

| Ölçü @1280 | Gerçekleşen |
|---|---|
| Kolonlar | Başlık x=24–308, kolaj x=340–940, açıklama x=972–1256 |
| H2 | Inter 300, 34 px, 2 satır |
| Section padding | 96 / 96 |
| Perspective | 1200 px |
| Merkez ekran | 360×240, x=460–820, tarayıcı şeridi 6 px, radius 8 |
| Yan ekranlar | 300×200, `rotateY ∓18°`, `translateZ −80`, opacity .85 |
| Yan ekranların ekrandaki kutusu | x=348–604 ve x=676–932 |
| Bölüm yüksekliği | 452 px |

| Ölçü @375 | Gerçekleşen |
|---|---|
| Sıra | eyebrow → H2 (28 px, 2 satır) → merkez ekran → açıklama → CTA |
| Merkez ekran | 327×204 (16:10), yanlar gizli |
| Section padding | 64 / 64 |
| Bölüm yüksekliği | 618,3 px |

- **CTA:** `https://web.doveify.io`, `target=_blank`, `rel=noopener`, mavi metin bağlantısı. Sondaki ok metin değil, hero CTA 2 ile aynı ikon.
- **Reveal:** kolaj `opacity 0→1 + translateY 16→0`, .6s, bir kez.
- **Benim seçimim:** yan ekran `translateX ∓180 px` (brief vermiyordu; kolaj 4–9 kolonlarının içinde kalıyor).
- **Görseller:** `screen-1` 9,0 KB (onaylı görselden kırpım, büyütüldüğü için bulanık; placeholder), `screen-2` 1,1 KB, `screen-3` 1,0 KB (koyu zemin + ince grid). Üçü de ≤40 KB.

## G3 — Dijital Dönüşüm

Dosyalar: `Transformation.tsx`, `content/transformation.ts`, `useRevealOnce.ts`, `main.css` (`.v2-tx-*`). Kart ve ikon yok.

| Ölçü @1280 | Gerçekleşen |
|---|---|
| H2 | 34 px, 2 satır, x=24–420 |
| Hat | 1,5 px, `--color-v2-border`, x=455,3–1097,3 (642 px), sağda %10 solma |
| Düğüm merkezleri | x=455,3 / 658 / 860,7 / 1063,3 (aralık 202,7) |
| Düğüm | 20 px halka, 10 px dolu, `drop-shadow 0 0 6px rgba(47,123,255,.45)` |
| Son düğüm → hat sonu | 24 px |
| Etiket / başlık / açıklama | 12 px 500 `.12em` / 16 px 400 / 13 px 400 |
| Açıklama genişliği | 187 px (sınır 200; aradaki boşluk için hücrede 16 px sağ padding) |
| Alıntı | 20 px 300, 24 px mavi çizgi |
| Section padding / yükseklik | 96 / 96, 462 px |

| Ölçü @375 | Gerçekleşen |
|---|---|
| Dikey hat | İçerik alanından x=20 (ekranda x=44), 1,5 px |
| Metin | İçerik alanından 44 px (ekranda x=68) |
| Bloklar arası | 32 px |
| Section padding / yükseklik | 64 / 64, 926,9 px |

**Reveal (bir kez):**

| Öğe | Başlangıç | Süre |
|---|---|---:|
| Hat (`scaleX` / mobilde `scaleY`) | 0 s | .9 s |
| Düğümler | 0 / .15 / .3 / .45 s | .4 s |
| Metinler | Düğümden .1 s sonra | .6 s |
| Alıntı | 1,2 s | .6 s |
| **Toplam** | | **1,8 s** |

- Bölümden uzaklaşıp dönünce animasyon yeniden oynamıyor (375 ve 1280'de test edildi).
- `prefers-reduced-motion`: reveal öncesinde bile son kare (ölçüldü).

**Brief'ten farklı veya benim kararım:**

- H2 `lg:w-[412px]`: 4. kolon 389 px ve başlık orada 3 satıra düşüyordu. Metin 396 px, kolonu 7 px aşıyor, hatla çakışmıyor (x=445).
- `max-width: 200px` yalnız masaüstünde. Mobilde açıklama 283 px genişliğe yayılıyor; 200 px'te sağda boşuna boşluk kalıyordu.
- Masaüstünde alıntı sağ kolonda, hatla aynı hizada; brief yerini belirtmiyordu.

## G4 — Placeholder'lar

Kalanlar `#sahiplik`, `#why`, `#calismalar`, `#iletisim`; `[BEKLEYEN-İÇERİK]` duruyor, çizgi yok.

**Ek düzeltme:** placeholder `contain-intrinsic-size` 892/1092'den gerçek içerik yüksekliği olan 48/72'ye indi. Eski değer ölçüm hatasıydı (RAPOR-P2AR açık sorun #3); sayfayı olduğundan çok uzun gösteriyor ve çapa inişlerini bozuyordu.

## Ev işi

- `.gitignore`'a `docs/perf/_diag*` ve `docs/perf/*-FIX*` eklendi. `tsconfig.tsbuildinfo` zaten vardı.
- `docs/design/P2A-OLCU-ONERISI.md` → `_legacy/docs/` taşındı.

## Doğrulama

Son kod değişikliğinden sonra:

```
$ npx tsc --noEmit
exit: 0

$ npm run build
 ✓ Compiled successfully
 ✓ Generating static pages (21/21)
exit: 0

$ npm run lint
exit: 0
```

3 `no-img-element` uyarısı önceden vardı (`ImageBlock:27`, `Nav.tsx:28`, `PhasesSection:64`); yeni uyarı yok. Sayfa JS'i 14,5 → 15,6 kB, First Load 94,4 → 95,5 kB.

**Yatay scrollbar:** yüklemede ve bölümlere kaydırdıktan sonra `scrollWidth === clientWidth` (1280 = 1280, 375 = 375).

**Mobilde sayfa kayması:** yükleme sonrası `scrollY` 0.

## Lighthouse

Mobil, `simulate`, Lighthouse 12.8.2. Süreler ms. Dosyalar: `docs/perf/P3-{1,2,3}.report.json`.

| Koşum | Skor | LCP | TBT | SI | CLS | CPU kıyas |
|---|---:|---:|---:|---:|---:|---:|
| P3-1 | 79 | 3505 | 424 | 3362 | 0 | 1192 |
| P3-2 | 89 | 3474 | 100 | 3102 | 0 | 1007 |
| P3-3 | 98 | 2277 | 59 | 1256 | 0 | 1712 |
| **Medyan** | **89** | **3474** | **100** | **3102** | **0** | |

| Kıyas | Koşumlar | Medyan | LCP | TBT | SI | CLS | CPU kıyas |
|---|---|---:|---:|---:|---:|---:|---:|
| P2 (`P2AR-FINAL`) | 94, 88, 88 | 88 | 3425 | 139 | 3179 | 0 | 1278–2455 |
| P3 | 79, 89, 98 | 89 | 3474 | 100 | 3102 | 0 | 1007–1712 |

- **LCP elementi:** üç koşumda da hero kafa görseli.
- **Yorum:** gerileme görülmüyor ama koşumlar arası fark (19 puan) iki set arasındaki farktan çok büyük. P3-1'de ana iş parçacığı yükü 3347 ms ile diğerlerinin iki katı; tek seferlik bir sıçrama, sebebi araştırılmadı. Bu sayılar P3'ün iyileştirme yaptığını göstermez.
- **Ortam:** koşum sırasında 30 `chrome` ve 7 `node` süreci çalışıyordu, kapatılmadı. Bu paket temiz ortam şartı koymuyor.

## Kapı

| Koşul | Sonuç |
|---|---|
| tsc / build / lint 0, yeni uyarı yok | ✅ |
| Yatay scrollbar yok | ✅ Ölçüldü |
| CLS ≤0,02 | ✅ 0 |
| LCP = kafa | ✅ |
| Mobil medyan ≥88 | ✅ 89 |
| P1/P2 bileşenleri dokunulmadı | ✅ `Nav`, `Hero`, `HeroHead`, `Products`, `ProductStageDesktop`, `ProductRailMobile`, `onIdle` değişmedi |
| Ortak dosyalar | ⚠️ `index.tsx` ve `main.css` değişti (yeni bölümler). `main.css`'te P1/P2'den yalnız placeholder `contain-intrinsic-size` değeri değişti |
| `_legacy/` dokunulmadı | ⚠️ Mevcut dosyalar değişmedi; ev işi gereği `_legacy/docs/P2A-OLCU-ONERISI.md` eklendi |

**Sonuç: kapı GEÇTİ.**

## Çıktılar

`docs/qa/P3-1280.png`, `P3-1280-webfactory.png`, `P3-1280-donusum.png`, `P3-375.png`, `P3-375-donusum.png`. Reveal'lar bittikten ≥2,5 s sonra çekildi.

`P3-1280.png` tek karede bozuk çıktığı için üç bölüm ayrı çekilip birleştirildi.

## Bekleyen kararlar

1. ✅ **LOCK `translateX ∓395px` — düzeltildi 03.11.2026:** LOCK, kod ve CD'nin gördüğü sürümle eşleşecek şekilde ∓310 oldu.
2. ✅ **LOCK referans kareleri — düzeltildi 03.11.2026:** LOCK artık `P2AR-1280-carousel-crop.png` ve `P2AR-375-carousel-crop.png` karelerini gösteriyor.

## Yapılmayanlar

- Performans iyileştirmesi yapılmadı; ≥95 hedefi PERF paketine ertelendi.
- `DOVEIFY-DESIGN-SKILL.md` repoda yok (`CLAUDE.md` adını veriyor). Motion değerleri brief'ten ve `CLAUDE.md`'den alındı.

## P3-R1 — CD revizyonu (yalnız Web Factory)

Yalnız Web Factory değişti; başka bölüme dokunulmadı (Dijital Dönüşüm yüksekliği 462 / 926,9 px, değişmedi). Bu bölüm,
yukarıdaki G2 tablosunun kolaj ve görsel satırlarının yerini alıyor.

| # | İstek | Gerçekleşen |
|---|---|---|
| 1 | Merkez ekran 360→450 px (3:2), kolaj merkezi aynı, 24–1256 içinde | 450×300; ekranda x=415–865, merkez x=640 (önceden de 640) ✅ |
| 2 | Arka (yan) ekran genişliği %15 az, simetrik | 300×200 → 255×170 (3:2). Ekranda x=343,3–559 ve 721–936,7; merkeze uzaklık iki yanda 296,7 px ✅ |
| 3 | Gerçek ekran görselleri | Aşağıdaki tablo ✅ |
| 4 | Mobil merkez ekran içerik alanının %100'ü, oran korunur | 327×218 (3:2), yanlar gizli ve indirilmiyor ✅ |

**Görseller** (`docs/design/reference/webfactory-src-{1,2,3}.png` → `public/webfactory/screen-{1,2,3}.webp`):

| Dosya | Kaynak | Konum | Boyut | KB |
|---|---|---|---|---:|
| `screen-1.webp` | src-1 (Teknik Telsiz) | Merkez | 900×600 | 48,4 |
| `screen-2.webp` | src-2 | Sol | 600×400 | 15,7 |
| `screen-3.webp` | src-3 | Sağ | 600×400 | 28,2 |

- **Kırpım:** kaynaklar ≈1900×912 (2,1:1). Tam genişlikte 3:2 kırpıma yükseklik yetmiyor, en fazla 1368×912 alınabiliyor.
  Üstten (nav dahil) **1356×904**, içeriğe göre ortalanmış (x=272–1628) bir kırpım alındı. Logo ve nav'ın iki ucu kırpımın
  içinde; sayfanın en sol ve sağ kenarı dışarıda kalıyor. src-1'in alt kenarındaki açık renkli çizgiyi dışarıda bırakmak için
  904 px.
- **İşleme:** LANCZOS ile küçültme, hafif keskinleştirme (UnsharpMask r=1, %60), WebP kalite 80. Üçü de ≤90 KB.
- **Çerçeve:** ekranlar 3:2 ama çerçevede 6 px tarayıcı şeridi var, bu yüzden görsel alanı 448×292 (merkez). `object-top` ile
  kırpılan kısım alttan gidiyor, sitelerin nav'ı her zaman görünüyor.
- **Benim kararım:** yan ekran `translateX ∓205 px` (önceden ∓180). Bu değer, küçülen yan ekranların dış kenarını kolaj
  kolonunun (x=340–940) içinde tutuyor; merkez ekranın iki yanında ≈72 px görünüyorlar.
- **Bölüm yüksekliği:** 1280'de 452 → 492 px, 375'te 618,3 → 632 px. `contain-intrinsic-size` 300 / 504 olarak güncellendi
  (ölçülen içerik yüksekliği).

**Doğrulama:**

- tsc / build / lint exit 0; 3 eski `no-img-element` uyarısı, yeni uyarı yok.
- Yatay taşma yok: yüklemede ve bölüme kaydırınca 1280 = 1280, 375 = 375. Mobilde `scrollY` 0.

**Lighthouse** (mobil, `simulate`, 12.8.2; `docs/perf/P3R1-{1,2,3}.report.json`):

| Koşum | Skor | LCP | TBT | SI | CLS | CPU kıyas |
|---|---:|---:|---:|---:|---:|---:|
| P3R1-1 | 72 | 2051 | 1811 | 1867 | 0 | 808 |
| P3R1-2 | 95 | 2025 | 241 | 1758 | 0 | 941 |
| P3R1-3 | 96 | 2091 | 173 | 2358 | 0 | 832 |
| **Medyan** | **95** | **2051** | **241** | **1867** | **0** | |

- **LCP elementi:** üç koşumda da hero kafa görseli.
- **Bu medyan bir iyileşme göstermez.** Üç koşumda da Lighthouse "yavaş CPU" uyarısı verdi (CPU kıyas değeri 808–941).
  P3R1-1'de TBT 1811 ms ile tek seferlik bir sıçrama var. LCP, P3'ün iki koşumunda ≈3,5 s iken burada üçünde de ≈2,0–2,1 s;
  bu fark, ölçüm boyunca görülen iki LCP kümesinden hızlı olana denk geliyor ve bu değişiklikle açıklanamıyor.
- Ölçüm sırasında 36 `chrome` ve 7 `node` süreci açıktı.

**Kapı:** tsc/build/lint 0 ✅ · yatay taşma yok ✅ · mobil medyan 95 ≥88 ✅ · CLS 0 ✅ · LCP = kafa ✅ → **GEÇTİ.**

**Ekran görüntüleri:** `docs/qa/P3R-1280-webfactory.png`, `docs/qa/P3R-375-webfactory.png`. Reveal'lar bittikten sonra çekildi.

**Değişen dosyalar:** `src/components/HomePageV2/WebFactory.tsx`, `content/webFactory.ts` (yorum),
`src/css/main.css` (yalnız `.v2-cv-webfactory` değerleri), `public/webfactory/screen-{1,2,3}.webp`. Eklenen:
`docs/perf/P3R1-{1,2,3}.report.json`, `docs/qa/P3R-1280-webfactory.png`, `docs/qa/P3R-375-webfactory.png`.

## Dosya listesi

**Yeni:** `src/components/HomePageV2/WebFactory.tsx`, `Transformation.tsx`, `useRevealOnce.ts`, `content/webFactory.ts`, `content/transformation.ts`, `public/webfactory/screen-{1,2,3}.webp`, `paketler/PAKET-P3-WEBFACTORY-DONUSUM.md`, `docs/perf/P3-{1,2,3}.report.json`, `docs/qa/P3-*.png` (5 dosya), `RAPOR-P3.md`.

**Değişti:** `DESIGN-LOCK.md`, `src/components/HomePageV2/index.tsx`, `src/css/main.css`, `content/site.ts` (yalnız yorumlar), `.gitignore`, `PROJECT-STATE.md`.

**Taşındı:** `docs/design/P2A-OLCU-ONERISI.md` → `_legacy/docs/`.

Framer Motion: kullanılmadı, tüm reveal'lar CSS.

**Paket adı (branch/commit için):** P3. Commit önerisi: `feat(p3): web factory ve dijital donusum bolumleri, LOCK v0.3`.
