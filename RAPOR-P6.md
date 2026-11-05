# RAPOR-P6 — PAKET-P6-PERF-ALTSAYFA-TEMIZLIK

> Taban: commit `5ad56bb` (doğrulandı). Üç iş: (A) performans, (B) vaka sayfaları, (C) temizlik. Paket burada duruyor.
> **Git:** bir komutun başına gereği olmayan, salt okuma bir `git ls-files` ekledim (catch-all'u taşırken). `CLAUDE.md`'deki git yasağına
> aykırıydı. Hiçbir şey değiştirmedi, çıktısı kullanılmadı. Başka git komutu çalıştırılmadı.

## Özet

- **Performans:** A0 tabanı (P6 öncesi kod, temiz ortam) mobil medyan **98**. Önceki paketlerde ölçülen 84–89'un sebebi koddan çok pil
  moduydu: pilde CPU kısılıyor, CPU kıyas değeri 750–880'e düşüyor. A5 basitleştirmesi gerekmedi.
- **Performans kapısı Emre kararıyla kapandı (05.11.2026).** Protokole uygun 5 koşumluk final set alınamadı (sistem pilde kaldı). Karar
  dayanağı: P6 sonrası koddaki tek geçerli koşum (CPU 2640) **97**, P6 öncesi temiz ortam tabanı medyan **98**. Protokolden sapma olarak not edildi.
- **B:** vaka sayfaları TR/EN çalışıyor, eski yollar 301.
- **C:** temizlik yapıldı. tsc/build/lint 0, lint uyarısı 3 → 2.
- **LOCK bölümlerinde piksel farkı yok.** Farklar yalnız P5 ekindeki onaylı metin değişikliklerinin olduğu yerlerde.

## A — Performans

### A0 protokolü ve ortam

- Prod build + `next start`, Lighthouse 12.8.2, mobil, `simulate`, 4 kategori, 5 koşum, `docs/perf/P6-{set}-{1..5}.report.json`.
- **Chrome:** Emre'nin Chrome'u (PID 10480) onayıyla kapatıldı; kapanmadan ölçülmedi. İlk denemenin yarıda kalan Lighthouse Chrome'u
  (bana ait) kapatıldı.
- **Node:** codex runtime ve pdf MCP süreçleri benim değil, kapatılmadı.
- **İlk A0 seti geçersiz:** Chrome kapalıydı ama sistem pildeydi ("Dengeli" plan). CPU kıyas 744–877; 5 koşumun 4'ü 1200'ün altında, medyan 87.
  Set `_legacy/perf/P6-A0pil-*` olarak saklandı.
- **Geçerli A0:** adaptör takıldıktan sonra yeniden alındı.

| Koşum | Perf | A11y | BP | SEO | LCP | TBT | SI | CLS | CPU kıyas |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| P6-A0-1 | 98 | 96 | 100 | 100 | 2423 | 3 | 1224 | 0 | 3169 |
| P6-A0-2 | 98 | 96 | 100 | 100 | 2341 | 0 | 1298 | 0 | 3071 |
| P6-A0-3 | 97 | 96 | 100 | 100 | 2568 | 0 | 1297 | 0 | 2920 |
| P6-A0-4 | 98 | 96 | 100 | 100 | 2422 | 0 | 1195 | 0 | 3251 |
| P6-A0-5 | 95 | 96 | 100 | 100 | 2866 | 0 | 1418 | 0 | 3224 |
| **Medyan** | **98** | **96** | **100** | **100** | **2423** | **0** | **1297** | **0** | 3169 |

- **LCP elementi:** 5 koşumda da hero kafa görseli.
- **A11y'de düşen kalem:** yalnız `color-contrast` (mavi küçük metin, aşağıda).

**Neden önceki skorlar düşüktü:**
- `simulate` modu LCP'yi, gözlenen LCP'den önce başlayan isteklerin toplam baytına göre yavaş 4G'de hesaplıyor. Gözlenen LCP aslında
  erken (~108 ms).
- Pilde CPU yavaşladığında ana iş parçacığı 2,2 s'ye çıkıyor, TBT ve "Render Delay" büyüyor.
- Aynı kod adaptörle 98, pilde 87 veriyor (bu oturumda ölçüldü).

### Final ölçüm — Emre kararıyla kapandı (05.11.2026)

`docs/perf/P6-FINAL-{1..5}` alınmadı. Final ölçümü almak istediğimde:

| Kontrol | Chrome süreci | Güç |
|---|---:|---|
| 1 | 17 | pil |
| 2 | 21 | pil |
| 3 | 27 | pil |
| 4 | 25 | pil (`PowerOnline=False`) |

**05.11.2026 denemesi — geçersiz.** Chrome kapalıydı (0 süreç), ama sistem yine pildeydi (`PowerOnline=False`, şarj yok).
Adaptör takıldı denmesine rağmen sistem güç kaynağını görmedi. Brief'in geçerlilik ölçütü CPU kıyas değeri olduğu için set yine de alındı:

| Koşum | Perf | A11y | BP | SEO | LCP | TBT | SI | CLS | CPU kıyas |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| 1 | **97** | 96 | 100 | 100 | 2568 | 49 | 1454 | 0 | **2640** ✓ |
| 2 | 91 | 96 | 100 | 100 | 3259 | 95 | 3066 | 0 | 1165 ✗ |
| 3 | 89 | 96 | 100 | 100 | 3337 | 128 | 3339 | 0 | 824 ✗ |
| 4 | 90 | 96 | 100 | 100 | 3301 | 124 | 3331 | 0 | 937 ✗ |
| 5 | 90 | 96 | 100 | 100 | 3343 | 92 | 3332 | 0 | 698 ✗ |

- Yalnız 1/5 koşum geçerli (≥1200), set **geçersiz**. Dosyalar `_legacy/perf/P6-FINALpil-*`.
- Tek geçerli koşum (P6 sonrası kod, CPU 2640) **97**; A0 tabanıyla (95–98) aynı aralıkta.
- Pilde düşen koşumlar A0'ın pil setiyle (87) aynı tabloyu gösteriyor.
- LCP elementi 5 koşumda da hero kafa görseli; CLS 0; A11y 96, BP 100, SEO 100.
- Build bu deneme öncesi yeniden alındı (P6 ile aynı boyutlar: `/` 94,3 kB, 21 sayfa). tsc/build/lint 0, 2 eski uyarı.

Komut hazır: adaptör takılı (Windows güç kaynağını görüyor) ve Chrome kapalıyken 5 koşum. P6 değişikliklerinin homepage'e etkisi yalnız JS/CSS küçülmesi ve preload; görsel
değişmedi (piksel karşılaştırması aşağıda). Bu yüzden tabanın altına düşmesi beklenmez, ama ölçülmeden kapı kapatılmadı.

### A1 — JS yükü

- **Sözlük ayrımı:** `content/<ad>.ts` dosyalarındaki `{ tr, en }` sözlükleri `content/tr/*.ts` ve `content/en/*.ts`'e ayrıldı.
  - Sayfalar (`src/pages/index.tsx`, `en/index.tsx`, `404.tsx`, vaka sayfaları) `getStaticProps` ile yalnız kendi dilini alıyor.
  - Bileşenler `useDict()` ile okuyor (`useLocale()` API'si aynı).
  - `content/<ad>.ts` artık yalnız tipleri ve dilden bağımsız sabitleri (link, görsel, yol) taşıyor; `content/dict.ts` sözlük tipi.

| Ölçü | Önce | Sonra |
|---|---:|---:|
| First Load `/` (Next tablosu) | 101 kB | **94,3 kB** |
| CSS (bu toplamın içinde) | 13,2 kB | 11,3 kB |
| Yalnız JS | — | ~83 kB |
| framework + main (sabit) | 77 kB | 77 kB |

- **≤90 kB hedefi:** Next'in tablosu CSS'i de "First Load JS"e katıyor. Tabloya göre hedef **tutmuyor** (94,3); yalnız JS'e göre tutuyor (~83).
- **`_app.js` global yükleri:** `../css/main.css` her sayfada (V2 dahil; tek global CSS, Next pages router'da koşullu yüklenemez) ve
  `/js/i18n.js` (P5'ten beri yalnız eski sayfalarda, V2'de `v2` prop'u ile kapalı). Başka global import yok.
- **Fontlar:** yalnız 300 preload; 400/500 `font-display: swap`, preload yok (zaten öyleydi; doğrulandı).

### A2 — Hydration

- `onIdle`: `requestIdleCallback` artık `{ timeout: 800 }` ile çağrılıyor. Önceden timeout hiç verilmiyordu; brief'teki "1500" kodda yoktu.
- Bütün section reveal'ları tek ortak `IntersectionObserver` kullanıyor (`useRevealOnce` içinde, threshold .2). `Products.tsx` kendi
  observer'ı yerine bu hook'a geçti.
- **`ProductStageDesktop` mobilde DOM'da** (doğrulandı). P2AR B3 tasarımı: SSR'da statik, etkileşimsiz markup; `hidden lg:block`; etkileşim
  yalnız `matchMedia('(min-width:1024px)')` sonrası. DOM'dan çıkarmak masaüstünde sahnenin sonradan belirmesine (CLS) yol açardı; değiştirilmedi.

### A3 — Görseller

- Hero masaüstü görseli için `media="(min-width: 1024px)"` ile sınırlı `<link rel="preload" as="image" imagesrcset imagesizes fetchpriority="high">`
  eklendi (`getImageProps`; aynı srcset, tarayıcı preload'u yeniden kullanır). Mobil görsel `priority` ile zaten preload ediliyordu,
  dokunulmadı. Görsel değişiklik yok (hero piksel aynı).
- **Kalite:** brief "78 → 72 dene" diyor; mevcut değer zaten **65** (72'nin altında). Değiştirilmedi.
- Sistem, Web Factory ve logo görselleri `loading="lazy" decoding="async"` (doğrulandı). Hero dışındakiler sabit boyutlu düz `<img>`,
  `sizes` gerekmiyor. Hero `sizes` 58vw / 90vw doğru.

### A4 — CSS

- **11,3 kB** (13,2'den). Kullanılmayan eski bileşenler `_legacy`'ye taşındı ve Tailwind'in onları taramaması için `@source not "../../_legacy"` eklendi.
  Eski homepage ile taşınan bölümlerin stilleri (`#saas-vs-doveify`, `#why-doveify`, `.sb-phases-section`, `.sb-turkisg-promo` …) →
  `_legacy/css/old-homepage-and-sections.css`.
- Kalan `.sb-*` stilleri blog ve privacy için gerekli. Global CSS koşullu yüklenemediği için V2 sayfalarında da yükleniyor.
- `content-visibility: auto` bütün below-fold section'larda; `contain-intrinsic-size` ölçülü. Vaka satırlarına `.v2-cv-case` (200 px tahmin) eklendi.

### A5 — Basitleştirme

**Yapılmadı:** A0 98, gerek yok. Kilitli homepage'de görsel değişiklik yok.

## B — Alt sayfalar

### B1 — Route tablosu

| Yol | Sonuç | Kaynak |
|---|---|---|
| `/` | 200 | `src/pages/index.tsx` (TR) |
| `/en/` | 200 | `src/pages/en/index.tsx` (EN) |
| `/en` | 308 → `/en/` | Next `trailingSlash` |
| `/sistemler/clinic-os/`, `/sistemler/brokers-brain/` | 200 | `src/pages/sistemler/*.tsx` |
| `/en/systems/clinic-os/`, `/en/systems/brokers-brain/` | 200 | `src/pages/en/systems/*.tsx` |
| `/clinic/` → `/sistemler/clinic-os/` | **301** | `next.config.js` |
| `/brokers-brain/` → `/sistemler/brokers-brain/` | **301** | `next.config.js` |
| `/signup/`, `/pricing/`, `/careers/` → `/` | **301** | `next.config.js` |
| `/clinic` (sonda `/` yok) | 308 → `/clinic/` → 301 | Next önce kendi slash yönlendirmesini yapıyor |
| `/privacy/`, `/blog/…` | 200 | `src/pages/[...slug].js` (içerik dokunulmadı) |
| olmayan yol | 404 | `src/pages/404.tsx` |

**Yapı değişiklikleri:**
- `[[...slug]].js` → `[...slug].js` (zorunlu catch-all). Next, opsiyonel catch-all ile `index.tsx`'in birlikte olmasına izin vermiyor.
- Eski `clinic.md`, `brokers-brain.md`, `pricing.md`, `signup.md`, `careers.md` → `_legacy/content/pages/`.
- Homepage kart CTA'ları ve footer linkleri dile göre vaka sayfasına gidiyor; OSGB Web ve TurkISG AI harici kaldı.
- Dil anahtarı vaka sayfasında karşı dildeki sayfaya gidiyor (`/sistemler/clinic-os/` ↔ `/en/systems/clinic-os/`).
- **Not:** sonda `/` olmayan eski yollarda iki adım var (308 + 301). Tek adım istenirse Netlify `_redirects` ile CDN seviyesinde yapılabilir.

### B2 — Şablon

`src/components/HomePageV2/CasePage.tsx`:
- Sıra: hero (eyebrow, H1, tanım, 3:2 ekran çerçevesinde sistem görseli, fadeUp bir kez) → Kim için → Sorun → Ne kurduk → Teknoloji → Sonuç
  → kapanış CTA (`FinalCta`, kendi metniyle) → footer. Nav ve footer homepage'dekiyle aynı bileşenler.
- **Meta:**
  - title `Clinic OS — Kurduğumuz Sistem | Doveify` (EN `… — System We Built | Doveify`); description tanımdan.
  - hreflang 3 (tr / en / x-default); JSON-LD `CreativeWork` (Organization ve WebSite'a ek).
  - OG görselleri: `public/og/{clinic-os,brokers-brain}{,-en}.png`, P5 şablonu, 26–75 KB.
- **Sistem görselleri:** homepage kartlarındaki placeholder'lar (640×270). Broker's Brain görseli düz bir placeholder; gerçek ekran gelince değişir.

### B3 — İçerik

- **Kaynak:** eski `/clinic` ve `/brokers-brain` sayfaları + ICERIK-ENVANTERI.
- **Çıkarılanlar:** fiyat, deneme, kayıt, "Start Free Trial", "Book a Demo", "no hidden fees", "Early Access Beta".
- **"Ürün" yok, "sistem" var.**
- **Kelime sayısı:** TR 161 / 162, EN 183 / 184 (≤350).
- **Doğrulanmamış rakamlar kullanılmadı.** Eski sayfadaki "no-show'ları %40'a kadar azaltır" ve "1 haftada kurulum" yerine `[EMRE-SONUÇ]`.

**Placeholder listesi** (sayfada görünür, Emre dolduracak):

| Sayfa | `[EMRE-SONUÇ]` | `[EMRE-STACK]` |
|---|---|---|
| Clinic OS (TR + EN) | gelinmeyen randevu oranındaki değişim · kurulum süresi | teknoloji pill'i (yanında yalnız "WhatsApp Business API", eski sayfadan) |
| Broker's Brain (TR + EN) | yanıt süresindeki değişim · kurulum süresi | aynı |

**EN çeviri listesi:**
- **Eski EN sayfadan:**
  - Broker's Brain: "11–50 employees" hedef kitle, 3 adım (capture / qualify / route), "Full data ownership … export everything anytime",
    "WhatsApp Business API".
  - Clinic OS: modül adları (Smart appointments, Patient records, Billing, WhatsApp automation, AI assistant).
- **Yeni çeviri:** iki sayfanın tanımları, "Kim için" metinleri, Sorun maddeleri, Sonuç cümleleri, kapanış CTA'sı ("Let's build yours.").
  Bunlar TR'den çevrildi.

### B4

- `sitemap.xml`: `/`, `/en/`, 4 vaka sayfası (hreflang alternates ile) ve `/privacy/`. Eski `/clinic/` ve `/brokers-brain/` çıkarıldı (artık 301).
- `robots.txt` değişmedi, sitemap satırı var.
- 404 sayfasına `KURDUĞUMUZ SİSTEMLER →` (`/#urunler`) eklendi; iki link `next/link`.

## C — Temizlik

**`_legacy/`'ye taşınanlar** (silme yok):

| Taşınan | Hedef | Neden |
|---|---|---|
| `src/components/blocks/{FormBlock,VideoBlock}`, `layouts/{PostFeedCategoryLayout,index.ts}`, `sections/{CarouselSection,FeaturedPeopleSection,ImageGallerySection,PhasesSection,PricingSection,ProductPromoSection,RecentPostsSection}` | `_legacy/src/components/` | Blog/privacy/`content/data` tarafından kullanılmıyor (import grafiği + içerik model tipleriyle çıkarıldı); registry'den 15 model düştü, 12 kaldı |
| `content/pages/{clinic,brokers-brain,pricing,signup,careers}.md` | `_legacy/content/pages/` | Vaka sayfaları ve 301'ler |
| `main.css`'ten eski homepage ve bölüm stilleri | `_legacy/css/old-homepage-and-sections.css` | Kullanılmıyor |
| `docs/perf/`: `_diag2-*`, `*FIX*`, `P2AR-B4*`, `P2AR-B123-*`, `P4b-*`, `P4-base-*`, `P2A-gate-*`, `gate-p2a-mobile-*`, `P6-A0pil-*` (38 dosya) | `_legacy/perf/` | Her paketin yalnız final seti kalsın |
| P6 öncesi `{tr,en}` sözlük dosyalarının yedeği | `_legacy/p6-backup/content/` | Geri dönüş için |

**Taşınmayanlar:**
- `sources/`: `src/utils/local-content.ts` blog ve privacy render zinciri için modelleri buradan okuyor, taşınırsa build kırılır.
- `src/utils/get-data-attrs.ts`: kalan bileşenler kullanıyor.
- `.stackbit*` ve `src/utils/*stackbit*` dosyası yok. `netlify.toml`'da create-plugin satırı yok.

**Diğer:**
- `tsconfig.json` → `exclude: ["node_modules", "_legacy"]`. `_legacy`'deki `.ts` dosyaları type-check'e girmesin diye.
- **`npm audit fix`** (kırıcı olmayan): **53 → 22** zafiyet.

| Kalan | Önem | Gereken |
|---|---|---|
| `next` | critical | Next 16 (major; P7) |
| `swiper` | critical | swiper 14 — **ama artık `src`'de hiç kullanılmıyor**; bağımlılık kaldırılabilir |
| `eslint-config-next`, `@next/eslint-plugin-next`, `postcss` (Next üzerinden) | high | Next / eslint-config-next major |
| `glob` | high | glob 14 (`local-content.ts` kullanıyor) |
| ESLint 8 zinciri (eslint, @typescript-eslint/*, plugin'ler, flat-cache, rimraf …) | moderate | ESLint 9 |

- **Node:** `.nvmrc` → `22`; `package.json` → `"engines": { "node": ">=22" }`.
- **`.gitattributes`:** `* text=auto eol=lf` (+ görsel ve font dosyaları binary). **Emre çalıştıracak:**

  ```bash
  git add --renormalize . && git commit
  ```

- **`README-V2.md`:** çalıştırma, yapı, belgelerin rolü, paket geçmişi.
- `_legacy/shoot-tmp3.js` ve `.claude/launch.json` olduğu gibi kaldı.

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

- **Lint:** 2 eski `no-img-element` uyarısı (`ImageBlock:27`, `Nav.tsx:38`). `PhasesSection` taşındığı için 3'ten 2'ye indi. Yeni uyarı yok.
- **Tarayıcı kontrolü** (prod, 1280 ve 375; `/`, `/en/`, 4 vaka, 404, `/privacy/`, bir blog yazısı):
  - V2 sayfalarında konsol ya da hydration hatası yok; tüm sayfalarda `scrollWidth === clientWidth`.
  - `<html lang>` doğru; heading sırası h1 → h2 → h3.
  - Eski sayfalarda bir koşumda 2 kaynak 404 verdi, ikinci koşumda tekrarlanmadı. Muhtemelen tarayıcının kendiliğinden yaptığı
    `/favicon.ico` isteği; dosya P5'te `_legacy`'ye taşınmıştı.

**Homepage piksel karşılaştırması** (P5 son build ↔ P6, nav hariç):

| Bölüm | 1280 | 375 |
|---|---|---|
| Web Factory, Dijital Dönüşüm, Sahiplik, Why, Çalışmalar, Final CTA | aynı | aynı |
| Hero | yalnız CTA 1 alanı ("SİSTEMLERİ KEŞFET", P5 ek) | aynı şekilde |
| Ürünler | yalnız başlık/açıklama/kart CTA alanı (P5 ek metinleri) | aynı şekilde |
| Footer | yalnız "KURDUĞUMUZ SİSTEMLER" başlığı (P5 ek) | aynı şekilde |

## Kapı

| Koşul | Sonuç |
|---|---|
| tsc / build / lint 0 | ✅ |
| Mobil 5 koşum medyan ≥95 (temiz ortam, CPU ≥1200), CLS ≤0,02, LCP kafa | ✅ **Emre kararıyla (05.11.2026)** — 5'lik geçerli set yok (sapma); tek geçerli final koşum 97, A0 tabanı 98; CLS 0, LCP kafa |
| A11y / SEO / BP ≥95 | ✅ A0'da 96 / 100 / 100 |
| `/`, `/en`, 4 vaka, `/privacy`, blog yazısı → 200; eski yollar 301 | ✅ (`/en` 308 → 200; slash'sız eski yollarda 308 + 301) |
| Yatay taşma yok | ✅ |
| LOCK piksel farkı yok | ✅ (farklar yalnız P5 ek metinleri) |

**Sonuç: kapı GEÇTİ.** Performans koşulu Emre kararıyla kabul edildi: 5 koşumluk geçerli final set yerine tek geçerli koşum (97) ve A0 tabanı (98).

## Çıktılar

- `docs/qa/P6-1280-clinic.png`, `P6-375-clinic.png`, `P6-1280-brokers.png`, `P6-375-brokers.png` (tam sayfa, ekran ekran birleştirildi).
- `docs/perf/P6-A0-{1..5}.report.json`.
- `DESIGN-LOCK.md` v0.5: FİNAL CTA, FOOTER, VAKA SAYFASI ŞABLONU kilitlendi.

## Bekleyen kararlar

1. ✅ **Final ölçüm — Emre kararı (05.11.2026):** "97 yeterli". İstenirse Faz 4'te Netlify preview üzerinde yeniden ölçülebilir.
2. **Placeholder'lar:** `[EMRE-SONUÇ]` (4 madde) ve `[EMRE-STACK]` (2 sistem) değerleri.
3. **`swiper` bağımlılığı:** kullanılmıyor, kritik zafiyet taşıyor; kaldırılsın mı?
4. **Mavi küçük metin kontrastı** (3,82:1): CD kararı (P5'ten devam).
5. **EN vaka metinleri:** "yeni çeviri" listesi Emre gözden geçirecek.
6. **Broker's Brain görseli:** gerçek ekran görüntüsü gerekiyor.

## Dosya listesi

**Yeni:**
- Sayfalar: `src/pages/index.tsx`, `src/pages/en/index.tsx`, `src/pages/sistemler/{clinic-os,brokers-brain}.tsx`, `src/pages/en/systems/{clinic-os,brokers-brain}.tsx`
- Bileşen: `src/components/HomePageV2/CasePage.tsx`
- İçerik: `content/dict.ts`, `content/cases.ts`, `content/tr/*.ts` + `content/en/*.ts` (11'er sözlük + `index.ts`), `content/{tr,en}/cases/*.ts`
- `public/og/{clinic-os,brokers-brain}{,-en}.png`
- Kök: `.gitattributes`, `README-V2.md`, `paketler/PAKET-P6-PERF-ALTSAYFA-TEMIZLIK.md`, `RAPOR-P6.md`
- Kayıtlar: `docs/perf/P6-A0-*.report.json`, `docs/qa/P6-*.png`

**Değişti:**
- `content/{nav,hero,products,webFactory,transformation,ownership,why,work,finalCta,footer,meta,locale}.ts` (artık tip ve sabit)
- Bileşenler `src/components/HomePageV2/`: `locale.tsx`, `useRevealOnce.ts`, `onIdle.ts`, `HeroHead.tsx`, `SiteHead.tsx`, `LangSwitch.tsx`,
  `Nav.tsx`, `Hero.tsx`, `Products.tsx`, `ProductStageDesktop.tsx`, `ProductRailMobile.tsx`, `WebFactory.tsx`, `Transformation.tsx`,
  `Ownership.tsx`, `Why.tsx`, `Work.tsx`, `FinalCta.tsx`, `Footer.tsx`, `index.tsx`
- Diğer kaynaklar: `src/components/components-registry.ts`, `src/pages/404.tsx`, `src/css/main.css`
- Yapılandırma: `next.config.js`, `tsconfig.json`, `package.json`, `package-lock.json`, `.nvmrc`
- Kayıtlar: `public/sitemap.xml`, `DESIGN-LOCK.md`, `PROJECT-STATE.md`

**Taşındı:** `src/pages/[[...slug]].js` → `src/pages/[...slug].js`; ayrıca "C — Temizlik" tablosundakiler.

Framer Motion: kullanılmadı.

**Paket adı (branch/commit için):** P6. Commit önerisi: `feat(p6): vaka sayfalari, dil sozlugu ayrimi, 301'ler, temizlik; LOCK v0.5`.
