# RAPOR-P2AR — PAKET-P2AR-CAROUSEL-DUZELTME

> Paket uygulandı ama rapor yazılmadan oturum kapandı. Bu rapor sonradan hazırlandı, ardından Emre'nin
> iki düzeltme listesi uygulanıp güncellendi. İlk oturumun ara ölçümleri kayıp; yalnız kod yorumlarında
> kalanlar aktarıldı. Git komutu çalıştırılmadı.
>
> Kanıt etiketleri: **[ölçüm]** prod build + `next start`, puppeteer ile son kodda ölçüldü ·
> **[kod]** kaynaktan okundu · **[ekran]** QA ekran görüntüsünden · **[LH]** Lighthouse JSON'undan ·
> **[hesap]** kod değerlerinden hesaplandı.

## Özet

- **Performans kapısı GEÇMEDİ.** Son kodda mobil medyan **88** (94, 88, 88), LCP 3425 ms, TBT 139 ms;
  hedef ≥95.
- **Ölçüm koşulu tam sağlanmadı:** koşum sırasında Chrome penceresi açıktı (PID 10480, 24 süreç) ve başka
  node süreçleri çalışıyordu. Ayrıntı §1'de.
- **Yavaş CPU tek başına açıklama değil.** Bu koşumlarda CPU kıyas değeri 1278–2455 ve uyarı yok, yine
  de 88 çıktı. Eski kod benzer CPU'da 92–93 veriyordu. Son değişikliklerin de etkisi olabilir; ayrıştırılmadı.
- **A7 kapandı:** görsel 480×200'ün tamamı görünüyor, 24 px taşıyor, CTA tıklanabilir.
- **A6 hedefe ulaşmadı:** görünür peek ölçülen **19,4 px**, hedef 28 px.
- **A4 hedefe ulaşmadı:** bölüm ölçülen **735,6 px**, hedef 640–700 px. Verilen değerlerin toplamı bu.

## Bu turda yapılanlar

| İş | Sonuç |
|---|---|
| A7 merkez görsel | ✅ `overflow: visible` + `contain: layout`; 480×200 tam görünür, taşma 24 px |
| A6 mobil peek | ⚠️ Değerler uygulandı, ölçülen 19,4 px (hedef 28) |
| A4 bölüm yüksekliği | ⚠️ Değerler uygulandı, ölçülen 735,6 px (hedef 640–700) |
| 5 ekran görüntüsü | ✅ Animasyonlar bitip 1,2 s beklendikten sonra çekildi, üzerine yazıldı |
| tsc / build / lint | ✅ Üçü de exit 0 |
| Mobil Lighthouse ×3 | ❌ Medyan 88; temiz ortam koşulu sağlanmadı |

**Talimattan farklı veya ek olanlar:**

- **Merkez kart metni küçüldü:** 200 px görsel 24 px taşınca üstü kartın 144. pikselinde başlıyor; metin ve CTA ise
  166. piksele iniyordu ve görsel CTA'yı kapatıyordu. Kart 560×320 ve görsel sabit kaldığı için üst boşluk 32'den 24'e
  indi, açıklamanın `max-w-[300px]` sınırı kalktı, açıklama tek satıra düştü. Dört üründe de CTA ile görsel arası 7 px.
- **Mobil rail'e `-mx-6` eklendi.** Talimatta yoktu, ama rail section padding'i içinde kaldığında komşu kart hiç görünmüyordu.
- **`contain-intrinsic-size` düzeltildi:** `#urunler` 840/745'ten 576/601'e indi. Değer içerik kutusuna uygulanıyor,
  padding üstüne biniyor; bölüm yüksekliği de değişti.
- `index.tsx` köküne `overflow-x-hidden` geri eklendi (talimat). Paketin "ihtiyaç kalmaması" hedefi böylece geçersiz.

## 1. Lighthouse sonuçları [LH]

Tüm koşumlar: mobil, `simulate` kısıtlama, Lighthouse 12.8.2, `http://localhost:3000/`. Süreler ms.
Medyan her sütunda ayrı hesaplandı, yani bir medyan satırı tek bir koşumu göstermez.

### Son kod (FINAL)

| Koşum | CPU kıyas | Perf. | LCP | TBT | SI | CLS | FCP |
|---|---:|---:|---:|---:|---:|---:|---:|
| 1 | 2455 | 94 | 3129 | 19 | 1627 | 0 | 807 |
| 2 | 1278 | 88 | 3425 | 139 | 3331 | 0 | 1700 |
| 3 | 1299 | 88 | 3440 | 151 | 3179 | 0 | 1712 |
| **medyan** | **1299** | **88** | **3425** | **139** | **3179** | **0** | **1700** |

- **LCP elementi:** üç koşumda da hero kafa görseli (`div.v2-hero-head-layer > img.block`).
- **Ortam:** "başka chrome/node kapalıyken" koşulu sağlanmadı.
  - Koşum başında 24 `chrome` süreci vardı, koşum sonrasında ana süreç (PID 10480) ve penceresi hâlâ açıktı.
  - Sunucu dışında codex ve MCP node süreçleri de çalışıyordu; bunlar bana ait olmadığı için kapatılmadı.
  - Başka projenin (`bizim-osgb`) testi koşumdan önce bitmişti, tarayıcı önizleme sekmesi kapalıydı.
  - Lighthouse bu kez "yavaş CPU" uyarısı vermedi.

### Önceki setler

| Set | Kod durumu | CPU kıyas | Koşumlar | Medyan | LCP | TBT | SI |
|---|---|---:|---|---:|---:|---:|---:|
| P1-R taban | Ürünler yok | 1923–3306 | 94, 99, 95 | 95 | 2874 | 4 | 1524 |
| P2-A son (`P2A-gate2`) | P2-A | 629–685 | 85, 83, 84 | 84 | 3512 | 263 | 2784 |
| B123 | B1–B3 | 1361–2892 | 92, 93, 93 | 93 | 3104 | 20,5 | 1698 |
| B4 | + B4 | 1673–2981 | 88, 91, 93 | 91 | 3328 | 57 | 1681 |
| B4b | B4 tekrar | 880–1544 | 93, 93, 88 | 93 | 3142 | 62 | 1891 |
| FIX | + kayma, A1 | 741–869 | 83, 87, 87 | 87 | 3450 | 190 | 3295 |
| FIX2 | FIX tekrar | 703–799 | 96, 88, 87 | 88 | 3384 | 167 | 3314 |

B4 ve B4b aynı kod görünüyor (dosya tarihlerine göre). Tüm setlerin koşum koşum değerleri
`docs/perf/` altındaki JSON'larda.

### Okuma

- **Önceki yorumum eksikti.** FIX setlerindeki düşüşü "makine yavaştı" diye okumuştum. FINAL'in iki koşumu CPU 1278–1299
  ve uyarısız, yine de 88. Aynı CPU bandındaki eski kod (B123-3: 1361) 93 verdi. Yani yavaş CPU tek açıklama değil.
- **Fark SI'de:** FINAL-2 ve -3'te SI ≈3200, eski koddaki benzer koşumlarda çoğunlukla ≈1700.
- **Hipotez, kanıtlanmadı:** eski kodda sayfa Ürünler'e kaydığı için son kare hero değildi; SI son kareye göre hesaplandığından
  hero görselinin geç gelmesi skora daha az yansımış olabilir. Bu doğruysa eski 93'lerin bir kısmı kaymanın yan etkisi. Eski
  kodda da SI ≈3100 olan iki koşum (B4-1, B4b-3) var, yani resim net değil. Doğrulamak için eski ve yeni kodu aynı anda, temiz ortamda
  ölçmek gerekir.
- **P2-A'ya göre "kazanım 84 → 93" ifadem** farklı CPU'lardaki ölçümleri karşılaştırıyordu, geçerli değil. Son koddaki 88 de
  daha hızlı CPU'da alındı; net kod kazancının büyüklüğü belirsiz.
- Kalan açık LCP'de: 3425 ms, tabanda 2874 ms. Baskın faz Render Delay (FINAL-2 ve -3'te ≈2960 ms).

### B adımları ve hedef

| Adım | Durum | Sonuç |
|---|---|---|
| B0 taban | **Kanıt yok** | `P2AR-B0*` raporu bulunmuyor |
| B1 + B2 + B3 | Uygulandı | Medyan 93 |
| B4 | Uygulandı | Medyan 91, tekrar 93 |
| Kayma + görsel düzeltmeler | Uygulandı | Medyan 88 |

**≥95 hiçbir adımda medyan olarak tutturulmadı.**

## 2. Uygulama durumu

### A — Görsel

| Madde | Durum | Gerçekleşen / sapma |
|---|---|---|
| A1 Yan kartlar sahnede | **Tam** (sapmalar) | Metin sola dayalı (onaylı görsele göre), CTA görsel `span`. `contain: paint` yerine `contain: layout` |
| A2 Okunurluk | **Tam** (sapma) | `brightness(.9)` yerine B4 gereği `rgba(0,0,0,.1)` overlay |
| A3 Yansıma kaldır | **Tam** (küçük sapma) | Tek glow div; genişlik 1280 değil 1232 |
| A4 Başlık + boşluk | **Hedef tutmadı** | Bölüm 735,6 px (aşağıda) |
| A5 Section çizgileri | **Tam** | Placeholder'larda `border-*` yok |
| A6 Mobil | **Hedef tutmadı** | Görünür peek 19,4 px (aşağıda) |
| A7 Merkez görsel | **Tam** (sapma) | Tam görünür; metin alanı daraltıldı (aşağıda) |

**A7 — ölçüm @1280 [ölçüm], dört üründe de aynı:**

| Ölçü | Değer |
|---|---|
| Sahne | `overflow: visible`, `contain: layout` |
| Kart | 560×320, x=360–920 |
| Görsel | 480×200, kırpılmıyor [ekran] |
| Kart altından taşma | 24 px |
| Görsel üstü (kart üstünden) | 144 px |
| CTA altı (kart üstünden) | 137 px |
| CTA → görsel boşluğu | 7 px |
| Açıklama | 1 satır, merkez x=640 (kart merkezi 640) |
| CTA tıklanabilir | Evet (görsel üstünü kapatmıyor) |

**A6 — ölçüm @375 [ölçüm]:**

| Ölçü | Değer |
|---|---|
| Kart genişliği | `calc(100vw - 88px)` = 287 px |
| Gap | 16 px |
| Rail padding-inline | 24 px |
| Scroll-padding-inline | 24 px |
| Snap | `snap-center`; aktif kart x=44–331 (ortalı) |
| Rail | x=0–375 (`-mx-6` ile) |
| **Görünür komşu payı** | **19,4 px** (sol ve sağ eşit), hedef 28 |

Düzende 28 px yer var (44 − 16), ama pasif kartın `scale(.94)` değeri kenarı 8,6 px içeri çekiyor. 28 px için ya kart genişliği
`calc(100vw - 104px)` olmalı (375'te ≈28 px [hesap]) ya da pasif ölçek kalkmalı. İkisi de kilitli ölçüyü değiştirdiği için
uygulanmadı. Bkz. "Bekleyen kararlar".

**A4 — ölçüm @1280 [ölçüm]:**

| Parça | px |
|---|---:|
| Üst padding | 96 |
| Başlık satırı | 111,6 |
| Başlık → sahne | 64 |
| Sahne | 400 |
| Alt padding | 64 |
| **Bölüm toplamı** | **735,6** |
| Parlama (akış dışı) | 120 |

Verilen değerlerle 640–700 mümkün değil: parlama akışa hiç eklenmese bile toplam 735,6; akışa girseydi 855,6 olurdu.
Hedefe en az 36 px kısmak gerekir, örneğin üst padding 96'dan 60'a. Karar bekliyor.

Parlama section altından 56 px dışarı uzanıyor; `content-visibility` bu kısmı section sınırında kırpar [hesap]. Gradient orada çok
soluk, görüntüde belirgin bir kenar görünmüyor [ekran].

**A1 — yan kart:** kart konumları x=42–477 ve x=803–1238 [ölçüm]. Metin önceki ölçümde x=79–332 ve x=934–1162, merkez kartla
çakışmıyor. Kart ve metin genişlikleri bu turda değişmedi.

### Gerçekleşen ölçüler [kod]

**Masaüstü** (`perspective: 1400px`, `perspective-origin: 50% 40%`, sahne 400px):

| | Merkez | Yan sol | Yan sağ | Gizli |
|---|---|---|---|---|
| Kart px | 560×320 | 440×280 | 440×280 | 440×280 (içerik yok) |
| rotateY | 0 | +30° | −30° | ±30° (sol +, sağ −) |
| translateX | 0 | −310 | +310 | ∓760 |
| translateZ | 0 | −200 | −200 | −400 |
| opacity | 1 | .9 | .9 | 0 (`visibility: hidden`) |
| Karartma | yok | overlay `rgba(0,0,0,.1)` | aynı | — |
| Zemin | `rgba(12,18,36,.92)` | `rgba(14,22,44,.85)` | aynı | — |
| Kenarlık | `rgba(90,130,255,.45)` | `rgba(90,130,255,.28)` | aynı | — |
| İçerik | üst boşluk 24, tek satır açıklama | 260 px, kenardan 32 | 260 px, kenardan 32 | — |
| z-index | 30 | 20 | 20 | 10 |

Brief'te gizli slot için `rotateY` yazmıyor, kodda ±30° var. Merkez kartta `0 0 40px rgba(47,123,255,.12)` glow bulunuyor.

**Mobil:** kart 287 px @375, gap/kenar/spacer 16/24/28, aktif 1 / `scale(1)`, pasif .75 / `scale(.94)`, min. yükseklik 380, görsel
140 px `object-contain`, alt boşluk 24. Bölüm yüksekliği 744,7 px.

### B — Performans

| Madde | Durum | Not |
|---|---|---|
| B1 `next/dynamic` kaldır | **Tam** | Normal import |
| B2 `content-visibility` | **Tam, bir değer şüpheli** | `#urunler` 576/601 (içerik kutusu). Placeholder 892/1092 hâlâ ölçüm hatası gibi: 700+192 ve 900+192; gerçek yükseklik ≈240 px [hesap] |
| B3 Efektler boşta | **Tam** (sapma) | Masaüstü sahne mobilde DOM'dan çıkmıyor, handler'sız hydrate oluyor |
| B4 `scrollend` | **Tam** | Tek passive listener; yoksa IO yedeği |
| B4 `filter` kaldır | **Tam** (sapma) | Overlay `::after` değil ayrı div; `.v2-product-card` transition'ında etkisiz `filter` kalmış |

## 3. Doğrulama

Son kod değişikliğinden sonra çalıştırıldı:

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

3 `@next/next/no-img-element` uyarısı var (`ImageBlock:27`, `Nav.tsx:28`, `PhasesSection:64`); önceden var olan uyarılar, yeni uyarı yok.

### Yatay scrollbar [ölçüm]

| Viewport | Durum | scrollWidth | clientWidth | Eşit mi |
|---|---|---:|---:|---|
| 1280 | Yükleme | 1280 | 1280 | ✅ |
| 1280 | Ürünler görünürken | 1280 | 1280 | ✅ |
| 1280 | Broker's Brain, OSGB Web, TurkISG AI seçili | 1280 | 1280 | ✅ |
| 375 | Yükleme | 375 | 375 | ✅ |
| 375 | Ürünler görünürken | 375 | 375 | ✅ |

### Mobil kayma [ölçüm]

| Kontrol @375 | Sonuç |
|---|---|
| Yükleme sonrası `window.scrollY` | 0 |
| Rail `scrollLeft` | 283, aktif kart ortalı |
| Ok tuşu ile sonraki kart | `scrollLeft` 586, `scrollY` değişmedi |

`P2AR-FINAL-2` son karesinde hero görünüyor. [LH]

## 4. Kapı

| Koşul | Sonuç |
|---|---|
| tsc / build / lint 0, yeni uyarı yok | ✅ |
| Mobil ×3 medyan ≥95 | ❌ **88** |
| CLS ≤0,02 | ✅ 0 (18 koşum) |
| LCP = kafa | ✅ 18 koşum |
| Yatay scrollbar yok (1280 / 375) | ✅ Ölçüldü (kök `overflow-x-hidden` var) |
| P1 dosyaları dokunulmadı | ✅ `Hero.tsx` ve `Nav.tsx` bu pakette değişmedi |
| `_legacy/` dokunulmadı | ⚠️ `shoot-tmp3.js` Emre'nin isteğiyle eklendi; mevcut dosyalar değişmedi |

**Sonuç: kapı GEÇMEDİ** (performans).

## Açık sorunlar

1. **A6:** görünür peek 19,4 px, hedef 28.
2. **A4:** bölüm 735,6 px, hedef 640–700.
3. **B2:** placeholder `contain-intrinsic-size` değerleri ölçüm hatası gibi duruyor.
4. **Eski yorumlar:** `ProductRailMobile.tsx` başlığı (.6, IO), `ProductStageDesktop.tsx` gizli slot yorumu (±900).
5. **`docs/design/P2A-OLCU-ONERISI.md` güncel değil:** hâlâ P2-A değerleri; güncel ölçüler bu raporda.
6. **B0 taban ölçümü** kanıtlanamıyor.

## Ekran görüntüleri

Beşi de son kodla, prod build'den çekildi: `docs/qa/P2AR-1280.png`, `P2AR-1280-carousel-crop.png`, `P2AR-1280-state-brokers.png`,
`P2AR-375.png`, `P2AR-375-carousel-crop.png`.

`state-brokers`'ta sol tarafın boş olması beklenen durum: ilk kart seçili ve sonsuz döngü yok.

## Bekleyen kararlar

1. **Performans:** medyan 88 kabul mü, basitleştirme mi? (Paket B4: Delivery Lead + CD) Önce Chrome tamamen kapalıyken tekrar ölçmek
   sonucu daha güvenilir kılar.
2. **A6:** 19,4 px kabul mü, 28 px için kart genişliği `calc(100vw - 104px)` mi, pasif ölçek kaldırılsın mı?
3. **A4:** 735,6 px kabul mü, yoksa padding 36 px kısılsın mı?

## Dosya listesi

**Bu turda değişti:** `src/components/HomePageV2/ProductStageDesktop.tsx`, `ProductRailMobile.tsx`, `Products.tsx`, `index.tsx`,
`src/css/main.css`, `RAPOR-P2AR.md`, `PROJECT-STATE.md`, `docs/qa/P2AR-*.png` (5 dosya).

**Bu turda eklendi:** `docs/perf/P2AR-FINAL-{1,2,3}.report.json`.

**Önceki tur:** `.gitignore` (`tsconfig.tsbuildinfo`), `.claude/launch.json` (`doveify-v2-prod`), `shoot-tmp3.js` → `_legacy/`,
`docs/perf/P2AR-FIX-{1,2,3}.report.json`, `docs/perf/P2AR-FIX2-{1,2,3}.report.json`.

**P2AR'ın ilk değişiklikleri (commit'lenmedi):** `onIdle.ts` (yeni), `docs/perf/P2AR-{B123,B4,B4b}-{1,2,3}.report.json`,
`paketler/PAKET-P2AR-CAROUSEL-DUZELTME.md`.

Framer Motion: P2AR dosyalarında kullanılmıyor.

**Paket adı (branch/commit için):** P2AR. Commit önerisi: `feat(urunler): P2AR carousel gorsel ve performans duzeltmesi`.
