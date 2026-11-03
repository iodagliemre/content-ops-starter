# PAKET-P4-SAHIPLIK-FINAL — Sahiplik + Why Doveify + Çalışmalar + Final CTA + Footer

> Faz 3 / P4. Taban: commit `1fb90fd`. Otorite: `docs/design/approved/homepage-v1.png` (Sahiplik y≈1180–1330, Çalışmalar y≈1360–1440, Final CTA y≈1470–1560, Footer @1024) + CD kararları #5 #6 #7 (05.09.2026) + DESIGN-LOCK v0.4 (G0).
> P1–P3 kilitli; yeniden tasarım yok. Paket sonunda tek CD onayı. Bu paketle homepage içerik olarak tamamlanır.

## Kısıtlar
- Kod `src/components/HomePageV2/`; `src/pages/index.*` yok. Silme yok (`_legacy/`). Git yok.
- P1/P2/P3 KİLİT listelerine dokunulmaz. Nav'da yalnızca link hedefleri.
- Metin: bu brief (ICERIK-ENVANTERI'nden çevrildi, Emre onaylı). Anlam değişikliği yok.
- İkon YOK (CD #5). Section'lar arası çizgi yok. Inter 300/400/500. Reveal bir kez.
- Perf: gerileme yok — mobil medyan ≥88, CLS ≤0.02, LCP = kafa. 3 koşum, `docs/perf/P4-{1,2,3}.report.json`.

## G0 — DESIGN-LOCK v0.4
Başlık `v0.4 — <tarih>. Kilitli: NAV, HERO, ÜRÜNLER, WEB FACTORY, DİJİTAL DÖNÜŞÜM.` "## ÜRÜNLER" bölümünün altına ekle:

```
## WEB FACTORY (kilitli — CD P3-R1 GEÇTİ)
- 3 kolon: başlık (1–3) / kolaj (4–9) / açıklama + tek CTA → web.doveify.io (10–12).
- Kolaj: merkez ekran 450×300 dik; yan ekranlar 255×170, rotateY ∓18°, translateZ −80, translateX ∓205, opacity .85. Perspective 1200. Tarayıcı şeridi 6px, 1px kenarlık, radius 8.
- Görseller: Teknik Telsiz (merkez), Dr. Serap Korkmaz (sol), Dry Clean Online (sağ). Değişiklik CD onayıyla.
- Mobil: yalnız merkez ekran, içerik alanının %100'ü (3:2).
- Referans: docs/qa/P3R-1280-webfactory.png, P3R-375-webfactory.png.

## DİJİTAL DÖNÜŞÜM (kilitli — CD P3 GEÇTİ)
- Tek hat DATA → AI → SYSTEMS → AUTONOMY; ikon yok. Desktop yatay hat (1.5px), 4 düğüm (10px mavi + 20px halka, glow); mobil dikey hat solda.
- Metin kolonları: etiket 500 12px mavi / başlık 400 16px / açıklama 400 13px secondary. Alıntı 300 20px, 24px mavi çizgi.
- Reveal: hat scaleX/scaleY .9s + düğümler .15s kademeli, ≤1.8s, bir kez.
- Referans: docs/qa/P3-1280-donusum.png, P3-375-donusum.png.
```
Kalan liste başlığı: `## SAHİPLİK / WHY DOVEIFY / ÇALIŞMALAR / FİNAL CTA / FOOTER — CD-REVİZE-BEKLİYOR (P4)`.

## G1 — SAHİPLİK (`#sahiplik`) — tipografi + karşıtlık (CD #5)
Metin (`content/ownership.ts`):
- eyebrow `SAHİPLİK`
- Ana ifade (EN, CD kararı, iki satır): `TOOLS ARE RENTED.` / `KNOWLEDGE SHOULD NOT BE.`
- Alt satır: `Dijitalde gerçek sahiplik, geleceğin güvencesi.`
- Karşılaştırma (ikonsuz, iki sütun):
  - Sütun başlıkları: `SAAS` / `DOVEIFY`
  - Satırlar (sol SaaS / sağ Doveify):
    1. `Hızlı standart dijitalleşme` / `Kritik süreçlerde tam kontrol`
    2. `Düşük başlangıç maliyeti, pazar testi` / `Regülasyon ağır, veri egemenliği zorunlu`
    3. `Bakım sağlayıcıda, küçük ekip` / `Kurumsal hafıza kendi sisteminizde`
    4. `Derin özelleştirme ihtiyacı yok` / `Uzun vadeli yatırım, yol haritası sizde`
    5. `Kısa vadeli veya sezonluk` / `Platform sınırlarını aşan sektörel iş akışları`
  - Kapanış: `Doveify sahiplik tarafındadır — çünkü işletmelerin en kritik süreçlerinin stratejik kontrolünü başka bir sağlayıcıya devretmemesi gerektiğine inanıyoruz.`
Yerleşim desktop: üst blok tam genişlik — ana ifade Inter **300, 56px**, uppercase, `letter-spacing .02em`, lh 1.05; satır 1 beyaz, satır 2 mavi (hero kuralı). Altında alt satır 400 18px secondary max-width 520. 64px boşluk. Karşılaştırma: iki sütun 6+6, aralarında 1px dikey çizgi `--color-v2-border` (section arası değil, tablo içi — izinli). Sütun başlığı 500 12px uppercase `.12em`; SAAS secondary, DOVEIFY mavi. Satırlar 400 16px, lh 1.6, satır arası 20px; SaaS sütunu secondary, Doveify sütunu beyaz. Kapanış 300 18px secondary, üstte 48px, max-width 720, başında 24px mavi çizgi (Dönüşüm alıntısı stili).
Mobil: ana ifade 36px; sütunlar alt alta (SAAS sonra DOVEIFY), aralarında 32px, dikey çizgi yok; satır eşlemesi kaybolduğu için her sütun kendi listesi.
Reveal: ana ifade satırları .15s kademeli fadeUp; sütunlar .6s.

## G2 — WHY DOVEIFY (`#why`) — büyük tipografi + editorial liste (CD #6)
Metin (`content/why.ts`):
- eyebrow `NEDEN DOVEIFY`
- Büyük ifade: `100%` (satır 1) `OWNERSHIP` (satır 2)
- Liste (başlık — açıklama):
  1. `%100 Sahiplik` — Kod, veri ve altyapı sizin mülkünüzdür; kiralamazsınız.
  2. `Uzun Vadeli Değer` — Abonelik değil yatırım; sistem büyüdükçe değeri artar.
  3. `Sektöre Özel Çözümler` — Genel platform değil, iş akışınıza göre kurulmuş sistemler.
  4. `Veri Egemenliği` — Veriniz kendi altyapınızda, kontrol her zaman sizde.
  5. `Uzun Vadeli Çözüm Ortaklığı` — Teslimle bitmez; birlikte büyütürüz.
Yerleşim desktop: sol kolon 1–5: eyebrow + `100%` (Inter 300 **120px**, beyaz, lh .9) + `OWNERSHIP` (300 40px, mavi, uppercase `.08em`), sticky değil. Sağ kolon 6–12: 5 madde dikey liste, her madde: numara `01`–`05` (500 12px mavi) + başlık (400 20px beyaz) + açıklama (400 15px secondary max-width 440); maddeler arası 32px, aralarında 1px yatay çizgi `--color-v2-border` opacity .5 (liste içi). Kart/grid YOK.
Mobil: `100%` 80px, `OWNERSHIP` 28px; liste altta.
Reveal: `100%` fadeUp .6s; maddeler .1s kademeli.

## G3 — ÇALIŞMALAR (`#calismalar`) — logo bandı (CD #7), 6 gerçek proje
Metin (`content/work.ts`): eyebrow `ÇALIŞMALAR`; H2 `Gerçek sonuçlar, gerçek hikayeler.`; CTA `TÜM ÇALIŞMALARI GÖR →` → `https://web.doveify.io`.
Logolar `docs/design/reference/logos/` içinde (Emre, 03.11.2026). Her logo tıklanınca müşteri sitesine gider (`_blank rel=noopener`):

| Dosya | Marka | Link |
|---|---|---|
| dr-serap-korkmaz.svg | Dr. Serap Korkmaz | https://drserapkorkmaz.com/ |
| dry-clean-online.webp | Dry Clean Online | https://drycleanonline.com/ |
| bizim-osgb.webp | Bizim OSGB | https://bizimosgb.netlify.app/ |
| omer-mutfak.webp | Ömer Mutfak | https://omermutfak.com/ |
| teknik-telsiz.png | Teknik Telsiz | https://tekniktelsiz.com.tr/ |
| ottome-doner.webp | Ottomè Döner | https://ottome.com.tr/ |

İşleme → `public/logos/`: SVG olduğu gibi (viewBox korunur). Raster'lar küçük (36–161px yükseklik); 28px bantta 2× için ≥56px gerekir — `teknik-telsiz.png` RGB beyaz zemin: zemini şeffaflaştır (Pillow, beyaz→alfa). Hepsini WebP alfa, yükseklik 64px (en-boy korunur), ≤12KB. Kaynaklara dokunma.
Monokrom: CSS `filter: grayscale(1) brightness(1.7)` + opacity .55; hover/focus opacity .85 (marka rengine dönüş YOK — CD). Gösterim yüksekliği 28px (Teknik Telsiz ikonu kare olduğu için 32px), genişlik otomatik max 140px, `alt` marka adı.
Desktop: H2 solda (300 34px, 2 satır) + sağda CTA text-link; altında tek satır 6 logo `justify-content: space-between`, dikey ortalı, 48px üst boşluk. Yatay scroll yok.
Mobil: H2 → 2 sütunlu logo matrisi (3 satır, gap 32/24px, hücre ortalı) → CTA. Yatay scroll YOK (CD).
Reveal: logolar .08s kademeli fade.

## G4 — FİNAL CTA (`#iletisim`)
Metin (`content/finalCta.ts`): H2 `Fikrini gerçeğe dönüştürelim.` (300 48px / 32px, beyaz); alt `Projenizi konuşalım, birlikte büyütelim.` (400 18px secondary); CTA 1 dolu mavi `İLETİŞİME GEÇ` → `https://cal.com/emre-dagli-ffwxpr/doveify-demo` (`_blank`); CTA 2 text-link `emre@doveify.io` → `mailto:`.
Yerleşim: ortalı blok, max-width 640, padding 128/80px. Arka planda hero heartbeat'in 1 kez çizilen büyük versiyonu (240px, mavi, opacity .35, H2'nin üstünde 32px) — glow kuralı içinde. Başka dekor yok.

## G5 — FOOTER
Metin (`content/footer.ts`):
- Sol: marka imzası (P1 ile aynı bileşen, heartbeat statik) + `Dijital çözüm ortağınız.` + `İstanbul • London`
- Kolon "Ürünler": Clinic OS `/clinic/`, Broker's Brain `/brokers-brain/`, OSGB Web `osgb.doveify.io`, TurkISG AI `turkisgai.doveify.io`
- Kolon "Doveify": Web Factory `web.doveify.io`, Dijital Dönüşüm `#donusum`, Sahiplik `#sahiplik`, Çalışmalar `#calismalar`
- Kolon "İletişim": `emre@doveify.io`, `+90 542 805 08 15`, LinkedIn `https://www.linkedin.com/company/doveify`, Instagram `https://instagram.com/doveify.io`
- Alt satır: `© 2026 DOVEIFYIO AI SOLUTIONS LTD.` sol, `Gizlilik Politikası` `/privacy/` sağ.
Yerleşim: 4 kolon (4+ 8/3 ×3), üstte 1px `--color-v2-border` opacity .4 (footer ayırıcı — izinli tek yatay çizgi), padding 64/48px; link 400 14px secondary, hover beyaz; başlık 500 12px uppercase `.12em` beyaz. Mobil: tek kolon, kolonlar alt alta 32px.

## G6 — Temizlik
- Tüm `[BEKLEYEN-İÇERİK]` placeholder'ları kaldırılır (artık yok). `[[...slug]].js` özel durumu ve `_legacy/` olduğu gibi.
- Section sırası son hali: Nav → Hero → Ürünler → Web Factory → Dijital Dönüşüm → Sahiplik → Why Doveify → Çalışmalar → Final CTA → Footer.
- `contain-intrinsic-size` her yeni section için ölçülmüş gerçek değer.

## Çıktılar
- `docs/qa/P4-1280.png` (Sahiplik'ten footer sonuna), `P4-1280-sahiplik.png`, `P4-1280-why.png`, `P4-1280-calismalar-cta.png`, `P4-375.png` (aynı aralık), `P4-375-sahiplik.png`. Reveal sonrası.
- `RAPOR-P4.md`: G0–G6, gerçekleşen ölçüler, logo işleme sonuçları (boyut/KB), tsc/build/lint, Lighthouse 3× + P3 kıyası, **tam sayfa** mobil Lighthouse (artık tüm sayfa var).
- `PROJECT-STATE.md`: P4 durumu; kararlar #5 #6 #7 ✅; "Sonraki Adım: CD onayı → commit → P5 (SEO/OG/sitemap/dil #2) → PERF → Faz 4".

## Kapı
tsc/build/lint 0, yeni uyarı yok · yatay scrollbar yok · CLS ≤0.02, LCP = kafa, mobil medyan ≥88 · P1–P3 dosyaları ve `_legacy/` dokunulmadı.
