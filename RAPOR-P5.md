# RAPOR-P5 — PAKET-P5-SEO-META-DIL

> Taban: commit `89151bc` (doğrulandı). SEO/meta/OG, TR + EN dil altyapısı, Sahiplik/Why metin düzeltmesi ve erişilebilirlik
> geçişi yapıldı. Görsel değişiklik yalnız dil anahtarı. Git komutu çalıştırılmadı. Paket burada duruyor.
>
> Ölçümler son kodda, prod build + `next start` ile alındı.

## Özet

- **Kapı geçti.**
  - tsc/build/lint 0, yeni uyarı yok.
  - `/` ve `/en/` 200; hydration ya da konsol uyarısı yok.
  - Yatay taşma yok; CLS 0; LCP = kafa.
  - Lighthouse (mobil, 3 koşum medyanı): **A11y 96 · Best Practices 100 · SEO 100**.
- **Kilitli bölümlerde piksel değişmedi.** Kod değişmeden önce çekilen TR referans görüntüleri birebir karşılaştırıldı: hero, Ürünler,
  Web Factory, Dijital Dönüşüm, Çalışmalar ve Final CTA iki genişlikte de piksel piksel aynı. Farklar yalnız şunlar: istenen metin
  değişikliği (G1), dil anahtarı ve doğru Türkçe büyük harf.
- **Kendi bulduğum iki sorun, ikisi de düzeltildi:**
  1. Eski siteden kalan `/js/i18n.js` her sayfada çalışıyordu. Bu script DOM'daki İngilizce metni Türkçeye çeviriyor ve varsayılanı TR;
     `/en` metnini Türkçeye döndürürdü. V2 sayfalarında artık yüklenmiyor.
  2. `<html lang="tr">` eklenince CSS `uppercase` marka adını **"DOVEİFY"** yapıyordu. Wordmark'a `lang="en"` verildi.

## G1 — Metin düzeltmesi (TR)

| Yer | Önce | Sonra |
|---|---|---|
| Why madde 1 | Kod, veri ve altyapı sizin mülkünüzdür; kiralamazsınız. | … kiralamazsınız. **Tüm veri müşteride kalır.** |
| Why madde 4 | Veriniz kendi altyapınızda, kontrol her zaman sizde. | Tüm veriniz kendi altyapınızda, kendi mülkünüzde; üçüncü taraf erişimi yok, kontrol her zaman sizde. |
| Sahiplik, Doveify satır 2 | Regülasyon ağır, veri egemenliği zorunlu | Veri egemenliği: tüm veri müşteride |

Başka metin değişmedi. Sonuç olarak Why bölümü uzadı: 1280'de 744 → 792 px, 375'te 981 → 1005 px. `contain-intrinsic-size` 600 / 877 olarak
güncellendi.

## G2 — Dil altyapısı

- **Yapı:** i18n kütüphanesi yok. `content/*.ts` dosyalarının her biri `{ tr, en }` export ediyor: nav, hero, products, webFactory,
  transformation, ownership, why, work, finalCta, footer, meta. Ortak tipler `content/locale.ts`'te; bileşenler
  `useLocale()` (`src/components/HomePageV2/locale.tsx`) ile seçiyor.
- **Route:** `/` = TR, `/en/` = EN; `[[...slug]].js`'de özel durum. `next.config` `trailingSlash: true` olduğu için `/en` → `/en/` 308
  yönlendirmesi var; canonical, hreflang ve sitemap bu yüzden `/en/` kullanıyor.
- **`<html lang>`:** yeni `src/pages/_document.js` sayfanın `locale` değerinden alıyor (`tr` / `en`). Eski Stackbit sayfaları önceki gibi
  `lang` olmadan render ediliyor.
- **`hreflang`:** her iki sayfada `tr`, `en`, `x-default` (= TR).
- **Hata ve düzeltme:** ilk sürümde her sayfada bir hreflang eksikti. `next/head` aynı `key`'e sahip etiketlerden birini atıyordu (hreflang linki ile
  `og:locale:alternate` ikisi de `en`/`tr` key'i kullanıyordu); key'ler önekle ayrıldı.

**Dil anahtarı** (tek görsel ekleme):

| Ölçü @1280 | Sonuç |
|---|---|
| Tipografi | `TR \| EN`, 12 px 500, `.12em`; aktif beyaz, pasif secondary |
| Ayırıcı | 1×12 px |
| İletişim piline uzaklık | 24 px |
| Dikey hiza | Anahtar ve pil ortası y=40; nav yüksekliği 80 / 64 değişmedi |
| Erişilebilirlik | `aria-current="page"`, `hreflang`, `lang` |
| Mobil | Overlay'de linklerin altında (y=445) |

- Nav'daki marka imzası P5 öncesi kareyle (`P2AR-1280.png`, x=0–260) piksel piksel aynı.
- Nav linkleri anahtarın genişliği kadar sola kaydı (TR'de ilk link x=507). EN linkler daha uzun ama sığıyor (ilk link x=489).
- Nav bölüm linkleri artık dil yoluyla başlıyor (`/#urunler`, `/en/#urunler`), böylece 404 sayfasından da çalışıyor. Ana sayfada yine
  aynı sayfa içinde atlama.

**EN satır kırılımı değişen bölümler** (kompozisyon aynı):

| Öğe | 1280 TR → EN | 375 TR → EN |
|---|---|---|
| Hero H1 | 2 → **3** satır ("DIGITAL / INTELLIGENCE.") | 2 → **3** |
| Ürünler açıklama | 3 → 2 | 3 → 2 |
| Ürünler H2 | 2 → 2 | 2 → **3** |
| Dönüşüm H2 | 2 → **3** | 2 → **3** |
| Dönüşüm alıntı | 1 → **2** | 3 → **4** |
| Sahiplik kapanış | 2 → **3** | 6 → 6 |
| Sahiplik satırları | hepsi 1 satır | Doveify 2, 4, 5. satırlar **2 satır** |
| Çalışmalar H2 | 2 → 2 | 2 → 2 |
| Merkez ürün kartı açıklaması | 4 üründe de 1 satır, CTA–görsel arası 7 px | — |

**Uzunluk kuralı** (Inter 300 display metinler, TR ±%20):

| Öğe | TR → EN karakter | Fark |
|---|---|---:|
| Ürünler H2 | 43 → 48 | +12% |
| Web Factory H2 | 38 → 41 | +8% |
| Dönüşüm H2 | 46 → 55 | +20% |
| Çalışmalar H2 | 34 → 33 | −3% |
| Final CTA H2 | 29 → 34 | +17% |

- Çalışmalar EN başlığını "Real results, real stories." (−21%) yerine "Real results, real-world stories." yaptım; ilk hal kuralın
  dışındaydı.
- Kuralı aşan iki metin brief'in kendisinden geliyor: hero satır 1 "DIGITAL INTELLIGENCE." (+62%) ve Dönüşüm alıntısı (+90%, mevcut EN
  kaynak). Değiştirilmedi.

### EN çeviri listesi (Emre gözden geçirecek)

**Mevcut EN kaynaktan (ICERIK-ENVANTERI / eski sitenin `i18n.js` sözlüğü):**
- Nav: `Contact`
- Dönüşüm: 4 aşama başlığı ve açıklaması (`Algorithm Evolution` …), alıntı
- Sahiplik: SaaS sütunu 5 satır; Doveify sütunu 1, 3, 4, 5. satırlar; kapanış
- Why: 5 madde başlığı (`100% Ownership`, `Long-Term Value`, `Industry-Specific Solutions`, `Data Sovereignty`, `Long-Term Solution Partnership`)
- Footer: `Your business's digital solution partner.`, `Istanbul • London`, `Privacy Policy`
- Brief'ten: hero (H1, alt satır, iki CTA), meta title

**Yeni çeviri:**

| Bölüm | EN |
|---|---|
| Nav | Products · Digital Transformation · Ownership · Work (+ menü/dil `aria-label`'ları) |
| Ürünler | `OUR PRODUCTS` · "Digital systems that move your business forward." · "Software built for your industry that digitizes your operations and raises your efficiency." · `VIEW DETAILS` · ok etiketleri |
| Ürün kartları | Broker's Brain "Smart tracking and analytics platform for real estate professionals." · Clinic OS "Integrated management system for healthcare organizations." · OSGB Web "The platform that digitizes your occupational health and safety work." · TurkISG AI "AI assistant for occupational health and safety professionals." |
| Web Factory | "We take your brand to the top in digital." · "We bring strategy, design and software together to deliver high-performance web experiences." · `EXPLORE WEB FACTORY` |
| Dönüşüm | `DIGITAL TRANSFORMATION` · "Transformation isn't a choice; it's a competitive edge." |
| Sahiplik | `OWNERSHIP` · "Real ownership in digital is the safeguard of your future." · Doveify satır 2 "Data sovereignty: all data stays with the client" (G1 ile anlamı değişti, kaynaktaki karşılığı artık uymuyor) |
| Why | `WHY DOVEIFY` · 5 açıklama TR'den çevrildi (aşağıda) |
| Çalışmalar | `OUR WORK` · "Real results, real-world stories." · `SEE ALL WORK` |
| Final CTA | "Let's turn your idea into reality." · "Let's talk about your project and grow it together." · `GET IN TOUCH` |
| Footer | Kolon başlıkları `Products` / `Contact`; bölüm linkleri |
| Meta | EN description (130 karakter) |

- **Why açıklamaları neden kaynaktan alınmadı:** eski sitenin EN açıklamaları onaylı TR metinle aynı anlamı taşımıyor (örneğin "One-time
  investment with optional annual maintenance…"). Anlam değişmesin diye TR'den çevirdim.
- **Ürün kartları neden kaynaktan alınmadı:** kaynaktaki uzun EN açıklamalar kart ölçüsüne sığmıyor; TR kart metninden çevirdim.

## G3 — Meta / SEO

- **`SiteHead.tsx`:** title, description (TR 137 / EN 130 karakter, ≤155), canonical (`https://doveify.io/`, `https://doveify.io/en/`), hreflang,
  OG (`type`, `site_name`, `title`, `description`, `url`, `image` 1200×630, `locale` tr_TR / en_GB + `locale:alternate`), Twitter
  `summary_large_image`, `theme-color #050b14`, ikonlar, manifest.
- **JSON-LD:** `Organization` (DOVEIFYIO AI SOLUTIONS LTD, url, logo, sameAs LinkedIn/Instagram, contactPoint e-posta) + `WebSite`; JSON geçerli.
- **OG görselleri:** `public/og/og-home.png`, `og-home-en.png`, 1200×630, 270 KB (≤300).
  - Pillow ile üretildi: zemin `#050b14`; sol üstte marka imzası (Chrome ile rasterize edilmiş logo + Inter 400 DOVEIFY + mavi heartbeat);
    başlık Inter 300 76 px, satır 1 beyaz, satır 2 mavi; sağda hero ile aynı maskeli kafa.
  - Türkçe `İ` latin-ext dosyasında olduğu için harf harf, glifi içeren fonttan çizildi.
  - 24-bit PNG 590 KB çıkıyordu; 256 renkli palete indirildi.
  - EN başlık üç satır: DIGITAL / INTELLIGENCE. / REAL IMPACT.
- **Favicon:**
  - `favicon.svg`: amblem; D-çerçeve mavi `#2563EB`, kanat gradyanı aynı.
  - `favicon-32.png`, `apple-touch-icon.png` (180, koyu zemin): SVG'den Chrome ile rasterize edildi.
  - `site.webmanifest`: name Doveify, theme/bg `#050b14`.
  - Eski `favicon.ico`, `icon.svg`, `apple-icon.png` → `_legacy/public/`. Eski sayfalar `/images/favicon.svg` kullandığı için etkilenmiyor.
- **`robots.txt`:** allow all + sitemap satırı.
- **`sitemap.xml`:** statik; `/`, `/en/` (hreflang alternates ile), `/clinic/`, `/brokers-brain/`, `/privacy/`.
- **404:**
  - Repoda özel bir 404 yoktu (brief "mevcut Stackbit 404" diyor, ama Next'in varsayılanı sunuluyordu); `src/pages/404.tsx` oluşturuldu.
  - İçerik: nav + "Sayfa bulunamadı." (300 48 px) + `ANA SAYFAYA DÖN →`, `noindex`, `lang="tr"`.
  - Yalnız TR: statik bir 404 sayfası ziyaretçinin hangi dilden geldiğini bilemez.

## G4 — Erişilebilirlik

- **`<img>`:** hepsinde `alt` var (eksik 0). Dekoratif görseller `alt=""`, logolar marka adıyla.
- **Etiketler:** carousel okları `aria-label` (TR/EN); dil anahtarı `aria-current="page"`; menü butonu ve nav `aria-label` (TR/EN).
- **Heading sırası:** h1 (hero) → h2 (section) → h3 (kart / madde); seviye atlama yok (ölçüldü).
- **Odak halkası:** `.v2-root :focus-visible` → `outline 2px #2563eb, offset 2px`; Tab ile doğrulandı. Fare tıklamasında görünmüyor.

**Kontrast** (ölçüldü):

| Renk çifti | Oran | Sonuç |
|---|---:|---|
| Secondary `#9aa0a6` / zemin `#050b14` | 7,47:1 | ✅ ≥4,5 |
| Secondary / yan ürün kartı zemini | 6,93:1 | ✅ |
| Beyaz / zemin | 19,73:1 | ✅ |
| **Mavi `#2563eb` / zemin** | **3,82:1** | ❌ küçük metin için 4,5 gerekir |

- Lighthouse'un düşürdüğü tek a11y kalemi bu: 12 px eyebrow'lar ve 13 px mavi metin bağlantıları (Web Factory ve Çalışmalar CTA'ları).
  Lighthouse 6 öğe listeliyor; sayfadaki diğer mavi küçük metinler de (aşama etiketleri, Why numaraları, DOVEIFY sütun başlığı) aynı orana sahip.
- Renk LOCK kapsamında olduğu için değiştirilmedi. Karar CD'nin (PERF/P6). Örneğin küçük metinlerde bir kademe açık mavi (≈#4d82f0, ~5:1) kullanılabilir.

## Doğrulama

Son kod değişikliğinden sonra:

```
$ npx tsc --noEmit
exit: 0

$ npm run build
 ✓ Compiled successfully
 ✓ Generating static pages (22/22)
exit: 0

$ npm run lint
exit: 0
```

- 3 eski `no-img-element` uyarısı var; Nav'daki uyarının satır numarası 28'den 39'a kaydı. Yeni uyarı yok.
- **Boyut:** First Load JS 97,7 → 101 kB; iki dilin sözlüğü de pakette. Sayfa JS'i 17,8 kB'de kaldı.

**Durum kodları:**

| Yol | Kod |
|---|---|
| `/`, `/en/` | 200 |
| `/en` | 308 → `/en/` |
| `/clinic/`, `/privacy/` | 200 |
| `/robots.txt`, `/sitemap.xml`, `/site.webmanifest`, ikonlar, OG | 200 |
| Olmayan bir yol | 404 (V2 404 sayfası) |

**Sayfa kontrolleri** (`/` ve `/en/`, 1280 ve 375):
- Konsolda hata ya da uyarı yok, hydration hatası yok.
- `i18n.js` istenmiyor; EN metni yüklemeden sonra EN kalıyor.
- `scrollWidth === clientWidth`.

**TR piksel karşılaştırması** (kod değişmeden önceki build ↔ son build, nav hariç her bölüm):

| Bölüm | 1280 | 375 |
|---|---|---|
| Hero, Ürünler, Web Factory, Dijital Dönüşüm, Çalışmalar, Final CTA | aynı | aynı |
| Sahiplik | yalnız Doveify satır 2 (G1) | aynı şekilde |
| Why | G1 metni uzadığı için +48 px | +24 px |
| Footer | "İLETİŞİM" başlığındaki İ noktaları (12 piksel) | aynısı + logoda 5 piksellik yumuşatma farkı |

Footer'daki "İletişim" başlığı önceden "İLETIŞIM" görünüyordu; `lang="tr"` ile artık doğru Türkçe "İLETİŞİM". Bunu düzeltme olarak bıraktım.
Footer'ın "Doveify" kolon başlığı içerikte "DOVEIFY" olarak yazıldı, marka adı Türkçe büyük harf kuralından etkilenmiyor.

## Lighthouse (mobil, `simulate`, 12.8.2)

Dosyalar: `docs/perf/P5-{1,2,3}.report.json` (`/`) ve `P5-en-1.report.json` (`/en/`, bilgi amaçlı).

| Koşum | Performance | Accessibility | Best Practices | SEO | LCP | TBT | SI | CLS | CPU kıyas |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| P5-1 | 69 | 96 | 100 | 100 | 2499 | 1179 | 3881 | 0 | 994 |
| P5-2 | 86 | 96 | 100 | 100 | 3268 | 273 | 3153 | 0 | 1257 |
| P5-3 | 95 | 96 | 100 | 100 | 2158 | 238 | 1653 | 0 | 1250 |
| **Medyan** | **86** | **96** | **100** | **100** | **2499** | **273** | **3153** | **0** | |
| `/en/` (1×) | 95 | 96 | 100 | 100 | 2749 | 105 | 2961 | 0 | 1262 |

- **LCP elementi:** 4 koşumda da hero kafa görseli.
- **A11y:** tek düşen kalem `color-contrast` (yukarıda). **BP ve SEO:** düşen kalem yok.
- **Performance** bu pakette bilgi amaçlı. Medyan 86, P4 ile aynı (86); P5-1'deki TBT 1179 ms tek seferlik bir sıçrama. Ölçüm sırasında
  24 `chrome` ve 7 `node` süreci açıktı.
- **Not:** canonical `https://doveify.io/...` gösteriyor, ölçüm `localhost` üzerinde. Lighthouse bunu SEO'dan düşürmedi; canlı alan adında
  yeniden ölçülmeli.

## Kapı

| Koşul | Sonuç |
|---|---|
| tsc / build / lint 0 | ✅ |
| `/` ve `/en` 200, hydration uyarısı yok | ✅ (`/en` → 308 → `/en/` 200) |
| Yatay taşma yok | ✅ |
| CLS 0, LCP kafa | ✅ |
| Lighthouse A11y / SEO / BP ≥95 | ✅ 96 / 100 / 100 |
| LOCK bölümlerinde piksel değişikliği yok (dil anahtarı hariç) | ✅ Karşılaştırmayla doğrulandı; farklar yalnız G1, Why yüksekliği ve doğru Türkçe "İ" |

**Sonuç: kapı GEÇTİ.**

## Brief'ten farklı yaptıklarım

- **Dosya kısıtının dışına çıkan değişiklikler:** `src/pages/_app.js` (`i18n.js` V2'de kapatıldı) ve yeni `src/pages/_document.js`
  (`<html lang>`). İkisi de G2 için gerekliydi; `index.*` açılmadı.
- **`/en/` (sonda slash):** brief `/en` diyor, site ayarı gereği sunulan URL `/en/`.
- **P1/P2 dosyalarındaki zorunlu değişiklikler:** Nav, Hero, Products, ProductStageDesktop ve ProductRailMobile metni artık sözlükten okuyor
  (TR çıktı piksel olarak aynı). Nav'a dil anahtarı ve wordmark'a `lang="en"` eklendi.
- **`content/site.ts`:** hero ve nav alanları yeni dosyalara taşındı; eski alanlar silinmedi, hiçbir bileşen artık okumuyor.

## Bekleyen kararlar

1. **Mavi küçük metin kontrastı** (3,82:1): LOCK rengi korunsun mu, küçük metinler için açık bir mavi tonu mu? (CD, PERF/P6)
2. **EN çeviriler:** "Yeni çeviri" listesini Emre gözden geçirecek.
3. **404 dili:** yalnız TR; EN 404 isteniyor mu?

## P5 ek — "ürün" → "sistem" (Emre, 03.11.2026)

Yalnız metin değişti, görsel aynı. Gerekçe: Doveify SaaS satmıyor; Clinic OS, Broker's Brain, OSGB Web ve TurkISG AI, kuruma özel kurulmuş
sistem örnekleri. Bu bölüm, yukarıdaki EN çeviri listesinde ve G3 açıklama uzunluklarında geçen eski değerlerin yerini alıyor.

| Yer | TR (önce → sonra) | EN (önce → sonra) |
|---|---|---|
| Ürünler eyebrow | ÜRÜNLERİMİZ → **KURDUĞUMUZ SİSTEMLER** | OUR PRODUCTS → **SYSTEMS WE BUILT** |
| Ürünler açıklama | "Sektörünüze özel geliştirdiğimiz yazılımlar ile …" → **"Sektöre özel kurduğumuz sistemler: her biri bir işletme için sıfırdan tasarlandı, sahipliği onda."** | → "Industry-specific systems we built: each one designed from scratch for a single business, and owned by it." (yeni çeviri) |
| Kart CTA | DETAYLARI GÖR → **SİSTEMİ İNCELE** | VIEW DETAILS → **VIEW SYSTEM** (ok ikon olarak) |
| Carousel ok etiketleri (`aria-label`) | Önceki/Sonraki ürün → Önceki/Sonraki **sistem** | Previous/Next product → Previous/Next **system** |
| Nav 1. link | Ürünlerimiz → **Sistemler** (`#urunler` aynı) | Products → **Systems** |
| Hero CTA 1 | ÜRÜNLERİMİZİ KEŞFET → **SİSTEMLERİ KEŞFET** | EXPLORE OUR PRODUCTS → **EXPLORE OUR SYSTEMS** |
| Footer kolon başlığı | Ürünler → **Kurduğumuz Sistemler** | Products → **Systems We Built** |
| Meta description | → Emre'nin metni, aynen | → "We build custom applications, systems and AI for your organization. Clinic OS, Broker's Brain, OSGB Web, TurkISG AI: systems we built. Don't rent, own." (yeni çeviri) |

**TR meta description — düzeltildi 04.11.2026:** ilk metin 166 karakterdi (≤155 kuralının üstünde). Emre'nin yeni metniyle değiştirildi:
"Kuruma özel uygulama, sistem ve yapay zekâ geliştiriyoruz. Clinic OS, Broker's Brain, OSGB Web, TurkISG AI: kurduğumuz sistemler. Kiralamayın,
sahip olun." → **154 karakter** ✅. Build çıktısında (`.next/server/pages/index.html`) doğrulandı. Sonrasında tsc/build/lint exit 0, yeni uyarı
yok. EN 151 karakter, değişmedi.

**grep `ürün|Ürün|product` sonucu:**
- **Görünen metin:** V2'de kalan yok. Hiçbir bileşenin okumadığı `content/site.ts`'teki eski `nav`/`hero` alanları da "sistem" yapıldı.
- **Bilerek bırakılanlar (görünmüyor):**
  - Kod kimlikleri: `Products.tsx`, `ProductStageDesktop.tsx`, `ProductRailMobile.tsx`, `productsContent`, `Product` tipi
  - CSS sınıfları: `.v2-product-card`, `.v2-product-rail`, `.v2-cv-products`
  - Section id: `#urunler` (talimat gereği aynı)
  - Görsel yolu: `/products/*.webp`
  - Yorumlar
- **Kapsam dışı (P6):** eski Stackbit sayfaları — `content/pages/signup.md` (1) ve blog demo yazıları (4 dosya, 10 geçiş) — ile eski `public/js/i18n.js`
  (V2'de yüklenmiyor).

**Doğrulama:**

- **tsc / build / lint:** exit 0, yeni uyarı yok.
- **Sayfalar:** `/` ve `/en/` 200; konsol ve hydration uyarısı yok; yatay taşma yok (1280 / 375).
- **Ürünler bölümü:**
  - TR'de yükseklik değişmedi (1280: 575,6 px içerik; 375: 600,7 px). Açıklama 1280'de 3 → 2 satır.
  - EN 375'te bölüm 634,3 px ve `contain-intrinsic-size` değeri (601, TR'ye göre) bunun 33 px altında. Bölüm yüklemede zaten render alanı içinde
    olduğu için etkisi yok; bilgi notu.
- **Merkez kart açıklamaları:** dört üründe de TR ve EN 1 satır, CTA–görsel arası 7 px (değişmedi).
- **Nav @1280:** linkler sığıyor; dil anahtarı–pil arası 24 px.
- **Ekran görüntüleri:** `docs/qa/P5-1280-nav-lang.png` yenilendi. Aynı kontrolde `P5-375-nav-lang.png`, `P5-1280-en.png` ve `P5-404.png` de yeni
  metinle yeniden çekildi.
- **Lighthouse:** yalnız metin değiştiği için yeniden koşulmadı; yukarıdaki P5 değerleri geçerli.

**Değişen dosyalar:** `content/products.ts`, `content/nav.ts`, `content/hero.ts`, `content/footer.ts`, `content/meta.ts`, `content/site.ts`,
`RAPOR-P5.md`, `PROJECT-STATE.md`, `docs/qa/P5-*.png` (4 dosya yeniden çekildi).

## Dosya listesi

**Yeni:**
- Bileşenler: `src/components/HomePageV2/locale.tsx`, `LangSwitch.tsx`, `SiteHead.tsx`, `src/pages/_document.js`, `src/pages/404.tsx`
- İçerik: `content/locale.ts`, `content/nav.ts`, `content/hero.ts`, `content/meta.ts`
- `public/`: `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `site.webmanifest`, `robots.txt`, `sitemap.xml`, `og/og-home.png`, `og/og-home-en.png`
- Diğer: `paketler/PAKET-P5-SEO-META-DIL.md`, `docs/perf/P5-{1,2,3}.report.json`, `P5-en-1.report.json`, `docs/qa/P5-1280-nav-lang.png`,
  `P5-375-nav-lang.png`, `P5-1280-en.png`, `P5-og.png`, `P5-404.png`, `RAPOR-P5.md`

**Değişti:**
- `content/products.ts`, `webFactory.ts`, `transformation.ts`, `ownership.ts`, `why.ts`, `work.ts`, `finalCta.ts`, `footer.ts`
- `src/components/HomePageV2/index.tsx`, `Nav.tsx`, `Hero.tsx`, `Products.tsx`, `ProductStageDesktop.tsx`, `ProductRailMobile.tsx`,
  `WebFactory.tsx`, `Transformation.tsx`, `Ownership.tsx`, `Why.tsx`, `Work.tsx`, `FinalCta.tsx`, `Footer.tsx`, `BrandSignature.tsx`
- `src/pages/[[...slug]].js`, `src/pages/_app.js`, `src/css/main.css`, `PROJECT-STATE.md`

**Taşındı:** `public/favicon.ico`, `icon.svg`, `apple-icon.png` → `_legacy/public/`.

Framer Motion: kullanılmadı.

**Paket adı (branch/commit için):** P5. Commit önerisi: `feat(p5): seo, meta, og, tr/en dil altyapisi, 404`.
