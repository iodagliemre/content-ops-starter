# RAPOR-P4 — PAKET-P4-SAHIPLIK-FINAL

> Taban: commit `1fb90fd` (doğrulandı). Sahiplik, Why Doveify, Çalışmalar, Final CTA ve footer yapıldı; homepage içerik olarak
> tamamlandı. Git komutu çalıştırılmadı. Paket burada duruyor, sıradaki adım CD onayı.
>
> Ölçümler son kodda, prod build + `next start` ile alındı.

## Özet

- **Görsel kapı geçti, performans kapısı sayısal olarak GEÇMEDİ.** tsc/build/lint 0, yeni uyarı yok, yatay scrollbar yok, CLS 0,
  LCP = kafa. Mobil medyan **86**, eşik 88 (iki ayrı set: 86 ve 86).
- **Düşüş P4'ten kaynaklanmıyor; bunu kontrollü ölçümle gösterdim.** P4 bölümleri geçici olarak kapatılıp aynı oturumda ölçülen
  taban (P3 durumu) medyan **84** verdi, P4'ten de düşük. Makine bu oturumda yavaştı.
- Placeholder kalmadı; section sırası brief'teki son haliyle aynı.

## G0 — DESIGN-LOCK v0.4

- Sürüm satırı `v0.4 — 03.11.2026. Kilitli: NAV, HERO, ÜRÜNLER, WEB FACTORY, DİJİTAL DÖNÜŞÜM.` oldu.
- WEB FACTORY ve DİJİTAL DÖNÜŞÜM bölümleri brief'teki metinle aynen eklendi.
- Kalan bölümlerin başlığı `## SAHİPLİK / WHY DOVEIFY / ÇALIŞMALAR / FİNAL CTA / FOOTER — CD-REVİZE-BEKLİYOR (P4)` oldu.

## G1 — Sahiplik (`#sahiplik`)

Dosyalar: `Ownership.tsx`, `content/ownership.ts`. İkon yok.

| Ölçü | 1280 | 375 |
|---|---|---|
| Ana ifade | 56 px 300, uppercase, `.02em`, lh 1.05; her satır 1 satır | 36 px; her satır 2 satıra kırılıyor |
| Satır renkleri | 1. satır beyaz, 2. satır mavi | aynı |
| Alt satır | 18 px 400, secondary, 520 px | 16 px, 327 px |
| Alt satır → karşılaştırma | 64 px | 64 px |
| Sütunlar | x=24–640 (SAAS) ve x=640–1256 (DOVEIFY), arada 1 px dikey çizgi | Alt alta, aralarında 32 px, çizgi yok |
| Sütun başlığı | 12 px 500, `.12em`; SAAS secondary, DOVEIFY mavi | aynı |
| Satırlar | 16 px 400, lh 1.6, satır arası 20 px; SaaS secondary, Doveify beyaz; hepsi tek satır | aynı |
| Kapanış | 300 18 px secondary, 48 px üstte, 720 px, 24 px mavi çizgi | 327 px |
| Section | 812,3 px (padding 96/96) | 1197,9 px (64/64) |

**Reveal:** ana ifade satırları .15s kademeli fadeUp (alt satır da 3. kademede), karşılaştırma ve kapanış birlikte .6s.

## G2 — Why Doveify (`#why`)

Dosyalar: `Why.tsx`, `content/why.ts`. Kart ve grid yok, sticky değil.

| Ölçü | 1280 | 375 |
|---|---|---|
| `100%` | 120 px 300 beyaz, lh .9 | 80 px |
| `OWNERSHIP` | 40 px 300 mavi, uppercase, `.08em` | 28 px |
| Kolonlar | Sol x=24–519 (1–5), liste x=551–1256 (6–12) | Liste altta |
| Madde | No `01`–`05` 12 px 500 mavi; başlık 20 px 400 beyaz; açıklama 15 px 400 secondary, en fazla 440 px | aynı |
| Ayırıcı | Maddeler arasında 1 px, `--color-v2-border` %50 opaklık | aynı |
| Section | 744 px (96/96) | 980,8 px (64/64) |

**Reveal:** sol blok fadeUp .6s; maddeler .1s kademeli.

**Benim yorumum:** "maddeler arası 32 px" ifadesini çizgiyle birlikte toplam 32 px olarak uyguladım: 16 px + 1 px çizgi + 16 px. Daha
ferah bir liste için çizginin iki yanına 32'şer px verilebilir; CD'nin görüşü sorulabilir.

## G3 — Çalışmalar (`#calismalar`)

Dosyalar: `Work.tsx`, `content/work.ts` (eski, kullanılmayan 6 isimli liste brief'teki 6 gerçek projeyle değiştirildi).

**Logo işleme** (`docs/design/reference/logos/` → `public/logos/`; kaynaklara dokunulmadı):

| Dosya | Kaynak | Çıktı | Boyut | İşlem |
|---|---|---|---:|---|
| `dr-serap-korkmaz.svg` | SVG, viewBox 1944×888 | olduğu gibi | 8,2 KB | kopyalandı |
| `dry-clean-online.webp` | 206×72 | 183×64 | 9,3 KB | 64 px'e küçültme |
| `bizim-osgb.webp` | 179×36 | 318×64 | 12,0 KB (12.288 B) | **büyütme** |
| `omer-mutfak.webp` | 128×41 | 200×64 | 3,3 KB | **büyütme** |
| `ottome-doner.webp` | 384×127 | 195×64 | 8,6 KB | şeffaf kenar kırpıldı, küçültme |
| `teknik-telsiz.webp` | 242×161 RGB, beyaz zemin | 98×64 | 2,7 KB | beyaz → alfa, kenar kırpıldı, **beyaza boyandı** |

- **Teknik Telsiz beyaza boyandı (brief'te yok):** logo tek renk ve siyah. CD'nin `grayscale(1) brightness(1.7)` filtresi siyahı siyah
  bırakıyor, koyu zeminde logo görünmez oluyordu. İşlenmiş kopya beyaz yapıldı, alfa korundu.
- **İki logo büyütüldü:** Bizim OSGB (36 px) ve Ömer Mutfak (41 px) kaynakları 64 px'in altında. Bu ikisi 2× ekranda hafif yumuşak görünebilir;
  daha büyük kaynak gelirse yeniden üretilmeli.
- Bütün raster çıktılar ≤12 KB.

**Ölçümler:**

| Ölçü | 1280 | 375 |
|---|---|---|
| H2 | 34 px 300, 2 satır | 28 px, 2 satır |
| CTA | Sağda, H2 satırının altına hizalı (x=1060–1256) → `https://web.doveify.io`, `_blank` | Logolardan sonra |
| Logolar | Tek satır, `space-between`, x=24–1256, H2 bloğundan 48 px aşağıda | 2 sütun × 3 satır, satır arası 32 px, sütun arası 24 px, hücre ortalı |
| Logo yüksekliği | 28 px (Teknik Telsiz 32 px) | aynı |
| Logo genişlikleri | 61 / 80 / 139 / 88 / 49 / 85 px (en fazla 140) | aynı |
| Görünüm | `grayscale(1) brightness(1.7)`, opaklık .55; hover/focus .85; marka rengine dönmüyor | aynı |
| Section | 383,6 px | 505,2 px |

- Her logo `alt` olarak marka adını taşıyor ve müşteri sitesine gidiyor (`_blank`, `rel=noopener`).
- **Reveal:** logolar .08s kademeli fade. Animasyon `<li>` üzerinde, böylece bağlantının .55 opaklığı bozulmuyor.

## G4 — Final CTA (`#iletisim`)

Dosyalar: `FinalCta.tsx`, `content/finalCta.ts`.

| Ölçü | 1280 | 375 |
|---|---|---|
| Blok | Ortalı, en fazla 640 px | 327 px |
| Padding | 128 / 128 | 80 / 80 |
| Heartbeat | 240×40, mavi, opaklık .35, glow; H2'nin 32 px üstünde | aynı |
| H2 | 48 px 300 beyaz | 32 px |
| Alt satır | 18 px 400 secondary | 16 px |
| CTA 1 | Dolu mavi `İLETİŞİME GEÇ` → cal.com, `_blank` | aynı |
| CTA 2 | `emre@doveify.io` → `mailto:` | aynı |
| Section | 571,2 px | 499,2 px |

- **Heartbeat bir kez çiziliyor, bölüm görünüme girdiğinde.** Çizim sayfa yüklenirken değil, görünür olunca başlıyor; yükte başlasaydı kullanıcı
  hiç görmezdi. `Heartbeat.tsx` P1 kilitli olduğu için zamanlama `main.css`'te.
- **Benim yorumlarım:**
  - "padding 128/80" ve "48/32 px" ifadelerini masaüstü/mobil olarak okudum.
  - CTA 2'yi küçük harfle (14 px 500) verdim; P1 text-link'in büyük harf stili bir e-posta adresinde okunmuyordu.

## G5 — Footer

Dosyalar: `Footer.tsx`, `BrandSignature.tsx`, `content/footer.ts`.

| Ölçü | 1280 | 375 |
|---|---|---|
| Kolonlar | Marka 4 kolon; üç link kolonu kalan 8 kolonu paylaşıyor (başlıklar x=445 / 726 / 1007) | Tek kolon, gruplar arası 32 px |
| Üst çizgi | 1 px `--color-v2-border`, %40 opaklık (izinli tek yatay çizgi) | aynı |
| Padding | 64 / 48 | aynı |
| Başlık / link | 12 px 500 uppercase `.12em` beyaz / 14 px 400 secondary, hover beyaz | aynı |
| Alt satır | `© 2026 DOVEIFYIO AI SOLUTIONS LTD.` solda, `Gizlilik Politikası` → `/privacy/` sağda | alt alta |
| Yükseklik | 343 px | 893 px |

- **Marka imzası Nav ile aynı bileşen değil, birebir kopyası.** Nav'daki imza `Nav.tsx` içinde inline; ortak bileşene çıkarmak `Nav.tsx`'i
  değiştirmeyi gerektiriyor, Nav P1 kilitli. Bu yüzden aynı markup ve ölçülerle yeni bir `BrandSignature.tsx` yazdım ve yalnız footer'da kullandım.
  Nav'ın da bu bileşene geçmesi kilit açılınca yapılabilir.
- Footer'daki heartbeat statik: çizili duruyor, animasyon yok (ölçüldü).
- Harici linkler `_blank` + `rel=noopener`; telefon `tel:+905428050815`.

## G6 — Temizlik

- `[BEKLEYEN-İÇERİK]` homepage'de kalmadı (`src/components/HomePageV2/` içinde arama: 0 sonuç). `[[...slug]].js` ve `_legacy/` değişmedi.
- Section sırası (ölçüldü): hero → urunler → web-factory → donusum → sahiplik → why → calismalar → iletisim; ardından footer.
- `contain-intrinsic-size`: dört yeni section için ölçülen içerik yüksekliği.

| Section | 1280 | 375 |
|---|---:|---:|
| `#sahiplik` | 620 | 1070 |
| `#why` | 552 | 853 |
| `#calismalar` | 192 | 377 |
| `#iletisim` | 315 | 339 |

Render öncesi tahmin ile gerçek yükseklik artık eşit. İlk değerlerle 375'te `#why` çapası 133 px'e iniyordu, düzeltmeden sonra 63 px.

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

- 3 eski `no-img-element` uyarısı var, yeni uyarı yok. Sayfa JS'i 15,6 → 17,8 kB, First Load 95,6 → 97,7 kB.
- **Yatay scrollbar:** yüklemede ve bütün bölümlere kaydırdıktan sonra `scrollWidth === clientWidth` (1280 = 1280, 375 = 375).
- **Çapa inişleri** (`#sahiplik`, `#why`, `#calismalar`, `#iletisim`): 1280'de dördü de 80 px; 375'te 64 / 63 / 64 / 64 px.
- **`prefers-reduced-motion`:** reveal öncesi bütün yeni öğeler görünür; heartbeat çizili.

## Lighthouse

Mobil, `simulate`, Lighthouse 12.8.2. Süreler ms. Lighthouse sayfanın tamamını ölçüyor; tam sayfa görüntüsü 7221 px yüksekliğinde ve bütün
bölümleri içeriyor. DOM 318 öğe, 23 istek, 409 KB.

| Set | Koşum | Skor | LCP | TBT | SI | CLS | CPU kıyas |
|---|---|---:|---:|---:|---:|---:|---:|
| P4 | 1 | 61 | 2795 | 3669 | 3951 | 0 | 852 |
| P4 | 2 | 86 | 3289 | 256 | 3262 | 0 | 890 |
| P4 | 3 | 94 | 2950 | 103 | 1596 | 0 | 1918 |
| **P4** | **medyan** | **86** | **2950** | **256** | **3262** | **0** | |
| P4b (tekrar) | 1 | 95 | 2811 | 39 | 1563 | 0 | 2057 |
| P4b | 2 | 84 | 3275 | 308 | 3331 | 0 | 800 |
| P4b | 3 | 86 | 3267 | 242 | 3243 | 0 | 747 |
| **P4b** | **medyan** | **86** | **3267** | **242** | **3243** | **0** | |
| P4-base (P4 kapalı) | 1 | 84 | 3288 | 308 | 3227 | 0 | 884 |
| P4-base | 2 | 82 | 3385 | 348 | 3279 | 0 | 1129 |
| P4-base | 3 | 86 | 3303 | 231 | 3268 | 0 | 1342 |
| **P4-base** | **medyan** | **84** | **3303** | **308** | **3268** | **0** | |

| Kıyas | Koşumlar | Medyan | LCP | TBT | SI |
|---|---|---:|---:|---:|---:|
| P3 | 79, 89, 98 | 89 | 3474 | 100 | 3102 |
| P3-R1 | 72, 95, 96 | 95 | 2051 | 241 | 1867 |
| **P4** | 61, 86, 94 | **86** | 2950 | 256 | 3262 |

- **LCP elementi:** 9 koşumda da hero kafa görseli.
- **Taban ölçümü nasıl alındı:** P2AR B0 yöntemiyle. Yeni bileşenler `index.tsx`'te geçici olarak render dışı bırakıldı, build alındı, 3 koşum
  yapıldı, dosya yedeğinden geri getirildi (birebir aynı olduğu doğrulandı) ve yeniden derlendi.
- **Okuma:**
  - Taban (84) P4'ün iki setinin de (86, 86) altında; bu oturumdaki düşük skorlar P4'ün eklediği yükle açıklanmıyor.
  - Skor, koşumun hangi LCP/SI kümesine düştüğüne bağlı. CPU kıyas değeri ~1900'ün üstündeki koşumlar 94–95, ~750–1350 arasındakiler 82–86 verdi.
  - P4-1'de ana iş parçacığı yükü 10 s ile tek seferlik bir sıçrama. Lighthouse 9 koşumun 4'ünde "yavaş CPU" uyarısı verdi.
- **Ortam:** koşum sırasında 27 `chrome` ve 7 `node` süreci açıktı, CPU yükü %34. Senin tarayıcın olabilecekleri için kapatmadım.
- P3-R1'in 95'i ile kıyas yanıltıcı olur: o set yalnız hızlı LCP kümesine düşmüştü.

## Kapı

| Koşul | Sonuç |
|---|---|
| tsc / build / lint 0, yeni uyarı yok | ✅ |
| Yatay scrollbar yok | ✅ Ölçüldü |
| CLS ≤0,02 | ✅ 0 |
| LCP = kafa | ✅ |
| Mobil medyan ≥88 | ❌ **86** (tekrar 86). Aynı ortamda P4'süz taban 84; gerileme P4'ten değil |
| P1–P3 bileşenleri dokunulmadı | ✅ `Nav`, `Hero`, `HeroHead`, `Heartbeat`, `Products*`, `WebFactory`, `Transformation`, `useRevealOnce` değişmedi |
| Ortak dosyalar | ⚠️ `index.tsx` (yeni bölümler) ve `main.css` (yalnız sona P4 bloğu eklendi) değişti |
| `_legacy/` dokunulmadı | ✅ |

**Sonuç: performans koşulu sayısal olarak tutmadı; geri kalan her koşul geçti.** Kontrollü taban, düşüşün P4'ten gelmediğini gösteriyor.

## Çıktılar

`docs/qa/P4-1280.png`, `P4-1280-sahiplik.png`, `P4-1280-why.png`, `P4-1280-calismalar-cta.png`, `P4-375.png`, `P4-375-sahiplik.png`.

- Reveal'lar bittikten sonra, prod build'den çekildi.
- Her bölüm ayrı çekilip birleştirildi; tek karede tam sayfa çekimi masaüstünde bozuk çıkıyordu (RAPOR-P3).

Lighthouse dosyaları: `docs/perf/P4-{1,2,3}.report.json` (brief'in istediği set), ek olarak `P4b-{1,2,3}` (tekrar) ve `P4-base-{1,2,3}` (P4 kapalı taban).

## Bekleyen kararlar

1. **Performans kapısı:** medyan 86, eşik 88. Taban 84 olduğu için gerileme yok, ama sayı eşiğin altında. Kabul mü, yoksa ölçüm temiz ortamda
   (Chrome kapalı ya da CI) tekrarlansın mı?
2. **Why liste aralığı:** 16 + 1 + 16 px mi, çizginin iki yanında 32'şer px mi?
3. **Logolar:** Teknik Telsiz'in beyaza boyanması onaylanıyor mu? Bizim OSGB ve Ömer Mutfak için ≥64 px yüksekliğinde kaynak gelebilir mi?

## Dosya listesi

**Yeni:** `src/components/HomePageV2/Ownership.tsx`, `Why.tsx`, `Work.tsx`, `FinalCta.tsx`, `Footer.tsx`, `BrandSignature.tsx`,
`content/ownership.ts`, `content/why.ts`, `content/finalCta.ts`, `content/footer.ts`, `public/logos/*` (6 dosya),
`paketler/PAKET-P4-SAHIPLIK-FINAL.md`, `docs/perf/P4-{1,2,3}.report.json`, `P4b-{1,2,3}.report.json`, `P4-base-{1,2,3}.report.json`,
`docs/qa/P4-*.png` (6 dosya), `RAPOR-P4.md`.

**Değişti:** `DESIGN-LOCK.md`, `src/components/HomePageV2/index.tsx`, `src/css/main.css`, `content/work.ts`, `PROJECT-STATE.md`.

Framer Motion: kullanılmadı, tüm reveal'lar CSS.

**Paket adı (branch/commit için):** P4. Commit önerisi: `feat(p4): sahiplik, why doveify, calismalar, final cta ve footer; LOCK v0.4`.
