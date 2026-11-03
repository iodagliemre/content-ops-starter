# PAKET-P5-SEO-META-DIL — SEO/Meta/OG + TR/EN + copy düzeltmesi

> Faz 3 / P5. Taban: commit `89151bc` (homepage içerik tamam, LOCK v0.4). Görsel değişiklik YOK; bu paket görünmeyen katman + EN kopya. CD onayı gerekmez (CD final tam-sayfa QA'da görür).
> Kararlar (Emre 03.11.2026): dil = TR ana + EN (`/en`); Sahiplik copy = kod+veri+altyapı kalır, veri egemenliği vurgusu güçlenir.

## Kısıtlar
- Kod `src/components/HomePageV2/`; `src/pages/index.*` AÇILMAZ (route P6'ya kadar `[[...slug]].js` içinde). Silme yok. Git yok.
- LOCK v0.4 kilitli bölümler piksel değiştirmez; metin uzunluğu EN'de satır kırılımını değiştirebilir — kabul, raporla; kompozisyona dokunma.
- i18n kütüphanesi eklenmez (next-i18next vb. yok). Basit sözlük: `content/*.ts` → `{ tr: {...}, en: {...} }`, `useLocale()` hook, `[[...slug]].js`'de `/en` özel durumu.

## G1 — Copy düzeltmesi (TR, Sahiplik + Why)
- `content/why.ts` madde 1: `%100 Sahiplik` — `Kod, veri ve altyapı sizin mülkünüzdür; kiralamazsınız. Tüm veri müşteride kalır.`
- madde 4: `Veri Egemenliği` — `Tüm veriniz kendi altyapınızda, kendi mülkünüzde; üçüncü taraf erişimi yok, kontrol her zaman sizde.`
- `content/ownership.ts` Doveify sütunu satır 2: `Regülasyon ağır, veri egemenliği zorunlu` → `Veri egemenliği: tüm veri müşteride`.
- Başka metin değişmez.

## G2 — Dil altyapısı (TR/EN)
- `content/*.ts` (hero, nav, products, webFactory, transformation, ownership, why, work, finalCta, footer, meta): her export `{ tr, en }`. TR mevcut; EN çeviriler aşağıdaki kurallarla: Inter 300 display metinlerde uzunluk TR ±%20 içinde; marka/ürün adları ve `DATA → AI → SYSTEMS → AUTONOMY`, `TOOLS ARE RENTED…`, `100% OWNERSHIP` değişmez.
- Route: `/` = TR, `/en` = EN. `[[...slug]].js`'de `slug[0]==='en'` özel durumu → aynı `HomePageV2` + `locale='en'`. `<html lang>` doğru.
- Nav sağ ucunda dil anahtarı: `TR | EN` (500 12px uppercase `.12em`, aktif beyaz, pasif secondary, arada 1px dikey çizgi 12px) — İletişim pilinin solunda 24px boşlukla; P1 nav kompozisyonu bozulmaz (ölçü/dikey hiza aynı). Mobil overlay'de linklerin altında. Bu tek görsel ekleme; screenshot'la raporla.
- `hreflang` alternates her iki sayfada (`tr`, `en`, `x-default`=tr).
- EN hero: `DIGITAL INTELLIGENCE. / REAL IMPACT.` · sub `Doveify designs, builds and grows the digital future of businesses.` · CTA `EXPLORE OUR PRODUCTS` / `SEE WEB FACTORY →`.
- EN diğer metinler: ICERIK-ENVANTERI'ndeki mevcut EN kaynak esas (4 Faz, SaaS vs Ownership, Why Doveify, alıntı `Businesses that cannot measure cannot manage; businesses that cannot manage cannot compete.`); karşılığı olmayanlar çevrilir, raporda listelenir (Emre gözden geçirir).

## G3 — Meta / SEO
- `content/meta.ts` (tr/en): title `Doveify — Dijital Zekâ. Gerçek Etki.` / `Doveify — Digital Intelligence. Real Impact.`; description (≤155 kr) TR: `İşletmeniz için sahip olduğunuz dijital altyapı: Clinic OS, Broker's Brain, OSGB Web, TurkISG AI ve Web Factory. Kiralamayın, sahip olun.` EN karşılığı.
- `<Head>`: title, description, canonical (`https://doveify.io/`, `/en`), hreflang, OG (`og:title`, `og:description`, `og:image`, `og:locale` tr_TR/en_GB, `og:type` website), Twitter card `summary_large_image`, `theme-color` `--color-v2-bg`.
- OG görseli: `public/og/og-home.png` 1200×630 — Pillow ile üret: zemin `--color-v2-bg`, sol üst marka imzası (logo-mark + DOVEIFY + heartbeat beyaz/mavi), ortada `DİJİTAL ZEKÂ.` beyaz / `GERÇEK ETKİ.` mavi (Inter 300, `public/fonts` dosyaları), sağda kafa placeholder'ı maskeli. EN için `og-home-en.png`. ≤300KB.
- Favicon: `public/favicon.svg` (amblem, mavi) + `favicon-32.png`, `apple-touch-icon.png` 180, `site.webmanifest` (name Doveify, theme/bg `--color-v2-bg`). Eski favicon `_legacy/`.
- JSON-LD `Organization` (name DOVEIFYIO AI SOLUTIONS LTD, url, logo, sameAs LinkedIn/Instagram, contactPoint email) + `WebSite`.
- `public/robots.txt` (allow all, sitemap satırı) + `next-sitemap` YERİNE basit statik `public/sitemap.xml`: `/`, `/en`, `/clinic/`, `/brokers-brain/`, `/privacy/`. (Alt sayfalar P6'da düzenlenecek; şimdilik mevcut URL'ler.)
- 404: `src/pages/404.*` mevcut Stackbit 404'ü V2 stiline çek: nav + "Sayfa bulunamadı." 300 48px + `ANA SAYFAYA DÖN →`. (`index.*` yasağı 404'ü kapsamaz.)

## G4 — Erişilebilirlik hızlı geçiş
- Tüm `<img>` alt; carousel oklar `aria-label`; dil anahtarı `aria-current`; heading sırası h1 (hero) → h2 (section) → h3 (kart/madde); odak halkası `outline 2px --color-v2-blue offset 2px` görünür; renk kontrastı secondary metin ≥4.5:1 (ölç, değilse secondary tonunu bir kademe açmak YASAK — LOCK; raporla, PERF/P6'da CD'ye gider).
- Lighthouse Accessibility + SEO + Best Practices skorları raporda (hedef ≥95 her üçü; Performance bu pakette bilgi amaçlı).

## Çıktılar
- `docs/qa/P5-1280-nav-lang.png` (nav crop, dil anahtarı), `P5-375-nav-lang.png`, `P5-1280-en.png` (EN hero), `P5-og.png` (OG görselinin kendisi kopya), `P5-404.png`.
- `RAPOR-P5.md`: G1–G4; EN çeviri listesi (kaynak EN / yeni çeviri ayrımı); Lighthouse 4 kategori tablo (mobil, 3 koşum medyan); satır kırılımı değişen EN bölümler.
- `PROJECT-STATE.md`: P5 ✅/durum; karar #2 ✅ (TR+EN); "Sonraki: PERF → P6 → Faz 4".
- PROJECT-STATE "Kilitli Kurallar"a ekle: `Sahiplik copy: "Kod, veri ve altyapı sizin mülkünüzdür" — Emre onaylı (03.11.2026), tüm veri müşteride.`

## Kapı
tsc/build/lint 0 · `/` ve `/en` ikisi de 200, hydration uyarısı yok · yatay taşma yok · CLS 0, LCP kafa · Lighthouse A11y/SEO/BP ≥95 · LOCK kilitli bölümlerde piksel değişikliği yok (dil anahtarı hariç, raporla).
