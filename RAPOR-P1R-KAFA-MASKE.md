# RAPOR-P1R-KAFA-MASKE — P1 mikro revizyon (CD Karar 01, 05.09.2026)

> Taban: PAKET-P1-HERO-NAV (çalışma ağacında, commit'lenmedi). Kapsam brief'in dediği gibi
> yalnızca kafa maskesi + placeholder zemini — nav, headline, CTA, motion timing, performans
> mimarisi dokunulmadı.

## 3 madde — yapıldı / nasıl

### 1. Yatay maske başlangıcı 38% → 46%
`HeroHead.tsx`: `linear-gradient(to right, transparent 0%, #000 46%, #000 100%)`. Hem
`maskImage` hem `WebkitMaskImage`'da güncellendi.

### 2. Dikey erime 14–86% → 20–80%
`linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)`.
`mask-composite: intersect` / `-webkit-mask-composite: source-in` aynen korundu.

### 3. Placeholder zemin rengi — ölçüm + düzeltme

**Önce** (mevcut dosyalar, `_legacy/hero/`'a taşındı): zemin pikselleri `--color-v2-bg-base`
(`#050B14` = rgb(5,11,20)) etrafında dağınıktı, örnek noktalar:
`head-placeholder.webp`: (1,7,12), (0,8,14), (2,8,24) — hedeften 3-8 birim fark.
`head-placeholder-mobile.webp`: (2,8,13), (0,14,30) — hedeften 3-10 birim fark.

**Yöntem**: Python/Pillow, `max(r,g,b) < 40` olan pikseller "zemin" sayılıp tam `(5,11,20)`'ye
boyandı (kafa/parçacık pikselleri bu eşiğin çok üzerinde parlak, dokunulmadı). Kalite 65→**78**'e
çıkarıldı — 65'te dosya boyutu orijinalin %9.5/%7.2 ALTINA düşüyordu (±%5 sınırını aşıyordu,
düz renk lossy WebP'de çok daha küçük sıkışıyor); 78'de her ikisi de +%5 sınırı içinde kaldı.

**Sonra** (`public/hero/`, aynı dosya adları): `(6,11,21)` gibi değerler, hedeften **1-5 birim**
fark (WebP kayıplı sıkıştırmanın kuantalama hatası — bkz. Bekleyen).

**Dosya boyutu önce/sonra**:

| Dosya | Önce | Sonra | Fark |
|---|---|---|---|
| head-placeholder.webp | 89,158 B | 92,460 B | +3.7% |
| head-placeholder-mobile.webp | 37,210 B | 38,700 B | +4.0% |

İkisi de ±%5 içinde.

**Gerçek render kontrolü** (üretim build'i, tarayıcıda çalışan `<img>`'dan canvas ile piksel
okuma — next/image'ın kendi `quality={65}` yeniden kodlamasından SONRAKİ hâl):
sayfa zemini `rgb(5,11,20)` (tam hedef), görsel kenar pikselleri `rgb(6-8,10-12,20-21)` —
**1-3 birim fark**, gözle ayırt edilemez.

## Bekleyen: "RGB farkı 0" tam sağlanamadı — neden

Brief "RGB farkı 0 olmalı" diyor; ulaşılan en iyi sonuç 1-5 birim (kaynak dosyada) / 1-3 birim
(tarayıcıda render edilen, next/image sonrası). Sebep: WebP kayıplı sıkıştırma iki kademede
uygulanıyor — (a) benim `public/hero/*.webp` dosyam (kalite 78), (b) next/image'ın servis
anında kendi `quality={65}` ile yeniden kodlaması (`HeroHead.tsx`'teki `<Image quality={65}>`
prop'u — bu paketin "KORU" listesindeki "performans mimarisi"nin parçası, brief'in 3
maddesinde yok, dokunmadım). Her iki kademe de DCT-tabanlı, matematiksel olarak tam 0 hata
garanti etmiyor; lossless WebP ile 0 mümkün ama dosya boyutu ~8x büyüyor (test ettim: 772KB,
±%5 sınırının çok dışında). **Pratik sonuç**: "0 görsel fark" (brief'in asıl amacı) sağlandı —
1-3 birimlik fark 255 üzerinden insan gözünün ayırt edemeyeceği kadar küçük, ekran
görüntülerinde (`docs/qa/P1R-*-crop.png`) hiçbir kenar/dikdörtgen okunmuyor. Literal byte-exact
0 için ya lossless (+dosya boyutu ihlali) ya da next/image'ı bu görsel için `unoptimized`
yapmak gerekir (KORU listesini ihlal eder) — ikisi de bu paketin izin verdiği 3 maddenin
dışında, uygulamadım.

## Kapı

```
$ npx tsc --noEmit; echo "exit: $?"
exit: 0

$ npm run build; echo "exit: $?"
... (aynı 3 @next/next/no-img-element uyarısı — yeni uyarı yok)
 ✓ Compiled successfully
 ✓ Generating static pages (21/21)
exit: 0

$ npm run lint; echo "exit: $?"
(aynı 3 uyarı)
exit: 0
```

## Lighthouse

3x mobil, `--throttling-method=simulate`. Ham raporlar: `docs/perf/gate-p1r-mobile-
{1,2,3}.report.{json,html}`, `docs/perf/gate-p1r-desktop-{1,2,3}.report.{json,html}`.

| Koşum | Performance | LCP | CLS |
|---|---|---|---|
| Mobil #1 | 94 | 2875ms | 0 |
| Mobil #2 | 99 | 2270ms | 0 |
| Mobil #3 | 95 | 2874ms | 0 |
| **Mobil medyan** | **95** | 2874ms | **0** |
| Masaüstü medyan (bilgi amaçlı) | 78 | 2748ms | 0 |

**LCP elementi**: `div.relative > div.absolute > div.v2-hero-head-layer > img.block` — kafa
görseli, doğru (görsel dosyası değişmesine rağmen LCP kırılmadı). **Kapı: GEÇTİ** (mobil ≥95 ✅,
CLS ≤0.02 ✅). Varyans notu PAKET-01/PAKET-P1-HERO-NAV'daki ile aynı — bu ortamda ölçüm gürültüsü
yüksek (92-99 arası görüldü), medyan 3 koşumda 95.

## Ekran görüntüleri

`docs/qa/P1R-1280.png`, `P1R-375.png`, `P1R-1280-hero-crop.png` (P1'in crop'uyla AYNI bölge/
boyut — `x:380,y:90,800×560` — doğrudan karşılaştırılabilir), `P1R-375-hero-crop.png`
(sol-üst köşe dahil, `x:0,y:64,375×400`). Hiçbirinde konteyner sınırı okunmuyor. Motion
bittikten sonra (3.5s bekleme), production build, CDP/puppeteer-core ile çekildi.

## Koru — değişmedi (doğrulandı)

1280/375 kafa ölçeği+konumu (`aspect-[644/440]`, `max-h-[42vh]` aynı), headline scale/weight,
logo+heartbeat kompozisyonu, CTA yerleşimi, nav, motion timing (`900ms`/`.9s` vb. aynı),
overlay-fade yapısı, `quality={65}` (next/image prop'u — kasıtlı dokunulmadı, yukarı bkz).

## Dosya listesi

**Yeni:** `RAPOR-P1R-KAFA-MASKE.md`, `docs/qa/P1R-1280.png`, `P1R-375.png`,
`P1R-1280-hero-crop.png`, `P1R-375-hero-crop.png`, `docs/perf/gate-p1r-{mobile,desktop}-
{1,2,3}.report.{json,html}`, `_legacy/hero/head-placeholder.webp`,
`_legacy/hero/head-placeholder-mobile.webp` (eski dosyaların yedeği).

**Değişti:** `src/components/HomePageV2/HeroHead.tsx` (mask % değerleri), `public/hero/
head-placeholder.webp`, `head-placeholder-mobile.webp` (zemin rengi düzeltildi, aynı dosya adı).

**Dokunulmadı:** `RAPOR-P01.md`, `RAPOR-P1.md`, `RAPOR-P1-HERO-NAV.md`, `docs/qa/P01-*`,
`docs/qa/P1-*`, `DESIGN-LOCK.md` (yazma yetkisi Delivery Lead'de), nav/headline/CTA/motion
timing/performans mimarisi.
