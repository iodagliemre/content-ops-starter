# DESIGN-LOCK.md — Doveify Site V2

> v0.7 — 15.11.2026 (PAKET-P8). Kilitli: v0.6 listesi + SİSTEM TANITIM SAYFASI ŞABLONU (vaka şablonunun yerine), KENDİ YAZILIMINIZ, BİLGİ BANKASI (liste + yazı).
> v0.6 → v0.7: ÜRÜNLER 4 → 6 kart (geometri aynı) ve sıra; kart CTA'ları tanıtım sayfasına; homepage'e 2 text link (Sahiplik altı `Kendi yazılımınızı yaptırın →`, Çalışmalar CTA yanı `BİLGİ BANKASI →`) — **Emre kararı (P8 brief), CD final QA'da görülecek**; FOOTER DOVEIFY kolonuna 2 link; NAV'a 7. link `Bilgi Bankası`, tam nav eşiği 1180 → 1280, gap 24 (P8 ek, Emre 15.11.2026). v0.6 metni aşağıda korunuyor.
> v0.6 — 05.11.2026 (PAKET-P7). Kilitli: NAV, HERO, ÜRÜNLER, WEB FACTORY, DİJİTAL DÖNÜŞÜM, FİNAL CTA, FOOTER, VAKA SAYFASI ŞABLONU, İLETİŞİM SAYFASI, WHATSAPP BUTON, GİZLİLİK SAYFASI.
> v0.5 → v0.6: NAV marka imzası + pill metni + İletişim linki (G3/G4), WEB FACTORY slayt (G7), SAHİPLİK/WHY TR metin (G8) — Emre kararı 05.11.2026 — CD final QA'da görülecek. Yeni şablonlar: İletişim, WhatsApp buton, Gizlilik. v0.5: _legacy/docs/DESIGN-LOCK-v0.5.md.
> v0.5 — 04.11.2026. Kilitli: NAV, HERO, ÜRÜNLER, WEB FACTORY, DİJİTAL DÖNÜŞÜM, FİNAL CTA, FOOTER, VAKA SAYFASI ŞABLONU.
> v0.1 → v0.2 değişiklikleri: kafa maske değerleri (CD Karar 01 revizyonu), Karar 04 "görsel davranış kilitli / teknik yöntem serbest", P1 KİLİT listesi eklendi.
> Görsel otorite: `docs/design/approved/homepage-v1.png` (referans görselin onaylı kopyası, 05.09.2026 CD + Emre onayı).
> Değişiklik: yalnızca Emre + CD onayıyla, bu dosyada versiyon artırılarak.

## Genel
- Zemin: `--color-v2-bg` (TOKENS.md; kodda `--color-v2-bg-base`). Section'lar arasında border/çizgi YOK; ayrım boşluk ve içerikle.
- Tipografi ailesi: Inter (self-host, latin-ext). Display metinler 300 (Light), gövde 400, buton/etiket 500. **700 yok.**
- Renk: beyaz metin, `--color-v2-blue` yalnızca aktif/vurgu noktasında. Glow yalnızca: dijital kafa, heartbeat, sistem geçişleri.
- Motion: bir kez oynar, durur. `prefers-reduced-motion` → statik son kare. Sonsuz loop YOK.
- Performans: mobil Lighthouse ≥95, CLS ≤0.02. Her paket ölçer.

## NAV (kilitli — CD Karar 03)
- Yükseklik 80px desktop / 64px mobil, sabit; arka plan hero zemini ile aynı, **alt border yok**, hero'nun içinde çözülür.
- Sol: **tek marka imzası** — `logo-mark.svg` + "DOVEIFY" wordmark + heartbeat, tek yatay flex. Heartbeat wordmark'ın hemen sağından başlar, `--color-v2-blue`, 1.5px stroke. Üç ayrı obje gibi okunmayacak.
  - **v0.6 (G4, Emre kararı 05.11.2026 — CD final QA'da görülecek):** desktop amblem **36px**, wordmark **17px**, heartbeat **64px**, gap 12px; mobil amblem 32px, wordmark 15px, heartbeat 48px, gap 8px. Nav yüksekliği 80/64 değişmedi. Footer `BrandSignature` aynı ölçü. OG görseli yeniden üretilmedi. (v0.5: 28px / 15px / ~56px, gap 10/6.)
- Wordmark: Inter 400, uppercase, `letter-spacing: 0.22em`, beyaz (`lang="en"`).
- Sağ: 7 link (v0.7) — Sistemler · Web Factory · Dijital Dönüşüm · Sahiplik · Çalışmalar · **Bilgi Bankası** · **İletişim** (→ `/iletisim/`, EN `/en/contact/`) — 15px, 400, `--color-v2-text-secondary`, hover beyaz; TR | EN anahtarı; outline pill **"Toplantı Talep Et" / "Book a Meeting"** → cal.com `_blank` (1px `--color-v2-border`, 40px yükseklik, 22px yatay padding, radius full). **v0.6 (G3, Emre kararı 05.11.2026 — CD final QA'da görülecek).**
  - **v0.7 (P8 ek, Emre 15.11.2026):** 7. link `Bilgi Bankası` / `Knowledge` (EN nav etiketi kısa — Emre 15.11.2026; sayfa adı ve footer `Knowledge Base`) (→ `/bilgi-bankasi/`, `/en/knowledge-base/`) Çalışmalar ile İletişim arasında, mobil overlay'de de. Tam nav artık **≥1280px**, link gap her genişlikte **24px**; <1280 hamburger. Ölçüm 1280 (içerik kutusu 1232, daha geniş ekranda büyümüyor): marka 223 + nav TR 952 / EN 967 → marka ile ilk link arası TR 57px, EN 42px. (`Knowledge Base` ile EN 3px kalıyordu.) Referans: docs/qa/P8-1280-nav-{tr,en}.png, P8-375-nav-overlay.png.
  - (v0.6) Tam nav **≥1180px** (link gap 24px; ≥1280 gap 32px). Altı link + uzun pill + büyük imza 1024'te 24px gap ile de sığmıyor (EN ölçü ~1175px) → 1024–1179 hamburger. Bekleyen karar (RAPOR-P7).
- Mobil / <1280 (v0.7; v0.6'da <1180): hamburger (24px, 2 çizgi, beyaz) → tam ekran overlay, linkler dikey (İletişim dahil), dil anahtarı, pill. Overlay açılış fadeIn .3s.

## HERO (kilitli — CD Karar 01, 02, 04)
### Yerleşim
- Desktop: 12 kolon; metin 1–5, kafa 6–12. `min-height: calc(100vh - 80px)`, dikey ortalı. Container max 1280, yatay padding 24px.
- Mobil: dikey sıra **kafa → headline → açıklama → heartbeat → CTA**. Kafa `max-height: 42vh`. Bu sıra değişmez.
### Kafa görseli (Karar 01)
- Sol, üst ve alt kenar zemine **kademeli** erir; sağ kontur keskin, en yüksek kontrast bölgesi.
- Uygulama: `mask-image` iki katman — yatay `linear-gradient(to right, transparent 0%, black 46%, black 100%)` + dikey `linear-gradient(to bottom, transparent 0%, black 20%, black 80%, transparent 100%)`, `mask-composite: intersect` / `-webkit-mask-composite: source-in`. Sağ kenar maskesiz. (v0.2: 38%→46%, 14–86%→20–80%, CD P1-R.)
- Kafa görselinin zemini `--color-v2-bg` ile eşit; lossy WebP kaynaklı ≤3/255 fark kabul (CD P1-R B).
- Dikdörtgen sınır hiçbir breakpoint'te okunmayacak.
- Boyut/konum: P1 ölçüleri **kilitli** (1280 ve 375 ayrı ayrı; CD P1-R C). Final katmanlı kafa asset'i bu ölçüleri değiştirme izni değildir.
### Tipografi (Karar 02)
- Headline: Inter **300**, uppercase, 64px desktop / 40px mobil, `line-height: 1.05`, `letter-spacing: 0.02em`. Satır 1 beyaz, satır 2 `--color-v2-blue`. Bold display görünümü YOK.
- Açıklama: Inter 400, 18px / 16px mobil, `--color-v2-text-secondary`, `line-height: 1.6`, max-width 440px.
- Heartbeat ayırıcı: 120px genişlik, `--color-v2-blue`, 1.5px stroke, `filter: drop-shadow(0 0 6px rgba(47,123,255,.55))` — kontrollü glow, gri değil.
- CTA 1: dolu `--color-v2-blue`, beyaz metin, Inter 500 13px uppercase `letter-spacing: 0.08em`, 48px yükseklik, radius 8px. CTA 2: text link, aynı tipografi, beyaz, sağında ok; hover ok 4px sağa.
### Motion (Karar 04) — zaman çizelgesi PAKET-01 G4 tablosu, tek değişiklik:
- Kilitli olan **görsel davranış**: oluşum → reveal → final state → stop. Teknik yöntem (overlay-fade vs opacity) serbest; LCP şartı belirleyici (CD P1-R D).
- Kafa belirmesi: kafa görselinin kendisi baştan opacity 1 (LCP). Üstünde zemin renginde overlay `opacity 1 → 0`, .9s, .9s'de başlar; kafa aynı anda `scale .96→1`. Blur yok.
- Heartbeat: nav ve hero heartbeat aynı anda, `stroke-dasharray` çizim 1.0s, .3s'de başlar; sonra sabit kalır (loop yok).
- Sıra: logo/imza → heartbeat → kafa → headline → açıklama → CTA → dur (2.7s).

### P1 KİLİT LİSTESİ (CD, 05.09.2026 — P1'e geri dönülmez, final kafa asset QA'sı hariç)
Hero desktop/mobil kompozisyonu · kafa ölçek ve konumu · headline ölçek/ağırlık · logo + DOVEIFY + heartbeat ilişkisi · hero heartbeat · CTA hiyerarşisi · nav kompozisyonu · motion timing / final-state-stop.
Referans screenshot: `docs/qa/P1R-1280.png`, `docs/qa/P1R-375.png`.

## ÜRÜNLER (kilitli — CD P2AR GEÇTİ, 03.11.2026)
- **v0.7 (P8 G1, Emre):** 6 kart, sıra CLINIC OS → BROKER'S BRAIN → EMLAK OFİS PANELİ → OSGB YÖNETİM → KURU TEMİZLEME → TURKISG AI; ilk state Clinic OS merkez (index 0: solda kart yok, sol ok disabled). Her kartın CTA'sı `SİSTEMİ İNCELE` → sistemin tanıtım sayfası (kartta harici link yok). Yeni iki kartın görseli `public/products/{emlak-ofis-paneli,kuru-temizleme}.webp` (3:2, 1200). Geometri, tipografi, oklar değişmedi.
- (v0.6) Sıra: Broker's Brain ← CLINIC OS → OSGB Web → TurkISG AI; ilk state Clinic OS merkez.
- Desktop sahne: merkez 560×320; yan 440×280, rotateY ∓30°, translateX ∓310px, translateZ −200px, opacity .9; yan/merkez derinlik ilişkisi ve konumlar kilitli. Yer yansıması yok; sahne altı radial parlama.
- Mobil: snap-rail, kart calc(100vw − 88px), gap 16, komşu kart peek 19px, pasif scale .94.
- Otomatik kaydırma YOK; uçlarda oklar disabled; tek transition .55s.
- Görseller (v0.6, G5): gerçek ekranlar 3:2, 1200px WebP — Broker's Brain (dashboard, tarayıcı çubuğu kırpıldı, telefonlar bulanık), OSGB Web ve TurkISG AI (canlı landing, kişisel e-posta bulanık); Clinic OS approved dashboard crop (demo giriş yok, Emre 05.11.2026). Merkez kartta 480×200 kutu, `object-cover object-top`, alt kenardan 24px taşma; mobil rail 140px kutu, cover/top, radius 8. Geometri değişmedi.
- Mevcut tipografi, renk, CTA, ok butonları kilitli.
- Referans screenshot: docs/qa/P2AR-1280-carousel-crop.png, P2AR-375-carousel-crop.png.

## WEB FACTORY (kilitli — CD P3-R1 GEÇTİ; v0.6 slayt: Emre kararı 05.11.2026 — CD final QA'da görülecek)
- 3 kolon: başlık (1–3) / kolaj (4–9) / açıklama + tek CTA → web.doveify.io + ok butonları (10–12).
- Kolaj: merkez ekran 450×300 dik; yan ekranlar 255×170 görünümü (aynı 450×300 kutu, scale .567), rotateY ∓18°, translateZ −80, translateX ∓205, opacity .85. Perspective 1200. Tarayıcı şeridi 6px, 1px kenarlık, radius 8.
- **v0.6 (G7) slayt:** sıra 1 Teknik Telsiz → 2 Dr. Serap Korkmaz → 3 Dry Clean Online; aktif ekran merkezde, sonraki sağda, önceki solda (döngüsel). Ok butonları (Ürünler stili 36px, açıklama + CTA'nın altında), yan ekrana tıklama = merkeze getir; geçiş tek transform/opacity transition .55s. Merkez ekran tıklanınca müşteri sitesi `_blank`.
- **Otomatik:** section görünüme girince 3.5s aralıkla 1 → 2 → 3, **bir tur**, 3'te durur; ok/tıklama otomatiği kalıcı iptal eder; hover duraklatır (çıkınca yeni 3.5s); `prefers-reduced-motion` ve mobilde otomatik yok. Sonsuz loop yok.
- Mobil: snap-rail, 3 ekran (3:2), kart calc(100vw − 88px), gap 16, komşu peek (Ürünler rail'i); otomatik yok; ekran → müşteri sitesi.
- Referans: docs/qa/P3R-1280-webfactory.png, P3R-375-webfactory.png.

## DİJİTAL DÖNÜŞÜM (kilitli — CD P3 GEÇTİ)
- Tek hat DATA → AI → SYSTEMS → AUTONOMY; ikon yok. Desktop yatay hat (1.5px), 4 düğüm (10px mavi + 20px halka, glow); mobil dikey hat solda.
- Metin kolonları: etiket 500 12px mavi / başlık 400 16px / açıklama 400 13px secondary. Alıntı 300 20px, 24px mavi çizgi.
- Reveal: hat scaleX/scaleY .9s + düğümler .15s kademeli, ≤1.8s, bir kez.
- Referans: docs/qa/P3-1280-donusum.png, P3-375-donusum.png.

## FİNAL CTA (kilitli — P4)
- Ortalı blok, max-width 640; padding 128 desktop / 80 mobil. Hero heartbeat'in büyük hali (240×40, mavi, opacity .35, glow) H2'nin 32px üstünde; bölüm görünüme girince bir kez çizilir, yüklemede değil.
- H2 Inter 300 48 / 32px beyaz; alt satır 400 18 / 16px secondary.
- CTA 1 dolu mavi (hero CTA 1 stili) **`TOPLANTI TALEP ET` / `BOOK A MEETING`** → cal.com, `_blank`; CTA 2 text-link 500 14px **`İLETİŞİM FORMU →` / `CONTACT FORM →`** → `/iletisim/`, `/en/contact/` (v0.6 G3; e-posta linki kalktı, iletişim sayfasında).
- Başka dekor yok. Vaka sayfaları aynı bileşeni kendi metniyle kullanır.
- Referans: docs/qa/P4-1280-calismalar-cta.png, P4-375.png.

## FOOTER (kilitli — P4)
- Üstte 1px `--color-v2-border` %40 (sitedeki tek izinli yatay çizgi); padding 64 / 48.
- Desktop: marka 4 kolon (marka imzası — heartbeat statik — + tagline + konum), 3 link kolonu kalan 8 kolonu paylaşır. Mobil: tek kolon, gruplar arası 32px.
- Kolon başlığı 500 12px uppercase `.12em` beyaz; link 400 14px secondary, hover beyaz. Alt satır: © solda, Gizlilik Politikası sağda → `/gizlilik/` (EN `/en/privacy/`).
- v0.7 (P8 G1/G4/G5): Kurduğumuz Sistemler kolonu 6 sistem (hepsi tanıtım sayfasına, harici link yok); DOVEIFY kolonunun sonuna `Kendi Yazılımınız` + `Bilgi Bankası` (EN `Your Own Software`, `Knowledge Base`).
- v0.6: İletişim kolonunun ilk linki `İletişim formu` / `Contact form`; DOVEIFY kolonundaki bölüm linkleri dil ana sayfasına göre (`/#donusum`, `/en/#donusum`), alt sayfalarda da çalışır.
- Marka adları Türkçe büyük harf kuralından korunur (wordmark `lang="en"`, kolon başlığı "DOVEIFY").
- Referans: docs/qa/P4-1280.png (alt kısım), P4-375.png.

## SİSTEM TANITIM SAYFASI ŞABLONU (v0.7 — P8 G2, CD final QA'da görür; vaka şablonunun yerine geçer)
- 6 sistem: `/sistemler/{clinic-os,brokers-brain,emlak-ofis-paneli,osgb-yonetim,kuru-temizleme,turkisg-ai}/`; EN `/en/systems/{clinic-os,brokers-brain,real-estate-office-panel,osgb-management,dry-cleaning-panel,turkisg-ai}/`.
- Sıra: **Hero** → Kim için → Sorun → Ne yapar (Clinic OS / Broker's Brain'de başlık "Ne kurduk" kaldı) → **Ekranlar** → **Rakamlar** (yalnız kaynaklı sistemde: OSGB, TurkİSG AI) → Teknoloji → Ne değişti (yalnız Clinic OS / Broker's Brain, P7 metni) → **Sahiplik kutusu** → **SSS** → **İlgili okumalar** → Final CTA.
- Hero: eyebrow `KURDUĞUMUZ SİSTEM` + yanında durum pill'i (`CANLI` / `PROTOTİP`; 24px, 1px kenarlık, 11px secondary). CTA 1 dolu (hero CTA 1 stili) `SİSTEMİ İNCELE →` → canlı uygulama `_blank`; CTA 2 text `BENZERİNİ İSTEYİN →` (13px 500 uppercase beyaz) → `/iletisim/?calisma=<slug>` (form "İstenen çalışma" önseçili); TurkİSG AI'de 3. text link `ÜCRETSİZ DENE →` mavi. Görsel çerçeve v0.6 ile aynı (3:2, max 640).
- Ekranlar: yatay rail, native scroll-snap; kart 480px (mobil %85), aynı 3:2 tarayıcı çerçevesi; altında 13px secondary açıklama; ince scrollbar (`--color-v2-border`). JS yok.
- Rakamlar: 2–4 değer, değer 300 40px beyaz + etiket 400 14px secondary; ikon yok.
- Sahiplik kutusu (her sayfada aynı metin): 1px kenarlık, radius 12, padding 56/40; başlık 300 40 / 28px, gövde 400 18 / 16px secondary.
- SSS: soru 400 18px beyaz, cevap 400 16px secondary 1.7; aralarında %50 çizgi (Sorun listesi gibi). Accordion yok (hepsi açık).
- İlgili okumalar: 16px link, alt çizgi `--color-v2-border`; ilgili Bilgi Bankası yazıları + `/kendi-yaziliminiz/`.
- JSON-LD `SoftwareApplication` + `FAQPage`; OG `public/og/<slug>{,-en}.png` (P5 şablonu + hero ekran, `scripts/og.py`).
- Görseller `public/systems/<slug>/hero.webp` (≤1600) + `screen-N.webp` (≤1200, 3:2), hepsi ≤120 KB; kişisel veri kapatıldı (RAPOR-P8).
- Referans: docs/qa/P8-1280-{emlak,osgb,kuru,turkisg}.png, P8-375-emlak.png.

## KENDİ YAZILIMINIZ (yeni — v0.7, P8 G4; CD final QA'da görür)
- `/kendi-yaziliminiz/`, EN `/en/your-own-software/`. Nav'a girmez; footer + homepage Sahiplik text link'i.
- Hero: eyebrow 12px mavi, H1 300 64 / 40px, alt satır 18 / 16px secondary, CTA 1 dolu `TOPLANTI TALEP ET` + text `İLETİŞİM FORMU →` (`?calisma=kendi-yaziliminiz`).
- Satırlar (sistem sayfası satır düzeni): Kritik süreçler (giriş + 3 kolon etiket/metin) → manifesto (Sahiplik ana ifadesi tipografisi, 56/36px, 2. satır mavi) → SaaS vs Doveify (Sahiplik karşılaştırma stili) → Nasıl çalışıyoruz (4 numaralı adım) → Rakamlarla Doveify (5 değer) → Adım adım (3 adım) → Kurduğumuz sistemler (6 link, 2 kolon, `→` mavi) → SSS → İlgili okumalar → Final CTA (homepage metni). JSON-LD `Service` + `FAQPage`.
- Referans: docs/qa/P8-1280-kendi-yazilim.png.

## BİLGİ BANKASI (yeni — v0.7, P8 G5; CD final QA'da görür)
- Liste `/bilgi-bankasi/` (EN `/en/knowledge-base/`): eyebrow `BİLGİ BANKASI`, H1 300 56 / 36px; kart grid 2 kolon (mobil 1), kart 1px kenarlık radius 12 padding 32/24, hover kenarlık mavi; kartta üst satır tarih · okuma süresi · ilgili sistem (mavi), başlık 300 22px, açıklama 15px secondary.
- Yazı `/bilgi-bankasi/<slug>/`: sol 8 kolon editorial (Gizlilik sayfası tipografisi: H1 300 40/32, H2 400 22, gövde 400 16 secondary 1.7, kalın kısımlar beyaz 500, liste işaretleri mavi), sağ 4 kolon sticky kutu `İLGİLİ SİSTEM` (ilgili sistem + Kendi Yazılımınız); mobilde kutu metnin altında. Sonra Final CTA. Motion yok. JSON-LD `Article`; OG başlık + marka imzası (`public/og/bilgi/`).
- İçerik `content/{tr,en}/bilgi/*.md` (title, description, date, slug, system, readMin); dosya eklenince sonraki build'de yayınlanır, sitemap `prebuild`'de güncellenir.
- Referans: docs/qa/P8-1280-bilgi-liste.png, P8-1280-bilgi-yazi.png, P8-375-bilgi-yazi.png.

## VAKA SAYFASI ŞABLONU (v0.6 — P6; v0.7'de yukarıdaki tanıtım şablonu geçerli)
- Yollar: `/sistemler/<slug>/` (TR), `/en/systems/<slug>/` (EN). Nav, footer ve kapanış CTA'sı homepage bileşenleri.
- Hero: eyebrow `KURDUĞUMUZ SİSTEM` (12px 500 mavi) · H1 sistem adı Inter 300 56 / 36px · tek satır tanım 400 18 / 16px secondary (max 520) · sağda sistem görseli 3:2, Web Factory ekran stili (1px kenarlık, radius 8, 6px tarayıcı şeridi). Motion: fadeUp bir kez.
- Bölümler sırayla: Kim için → Sorun → Ne kurduk → Teknoloji → Ne değişti (v0.6; eski "Sonuç") → kapanış CTA → footer. Her satır: başlık 1–4. kolon (Inter 300 34 / 28px), içerik 5–12. kolon; mobilde alt alta.
- Sorun: numaralı editorial liste (Why stili, `01`–`03` mavi, aralarında %50 çizgi). Ne kurduk: 2 kolon başlık (400 20px) + açıklama (400 15px). Teknoloji: monokrom pill'ler (1px kenarlık, 13px 500 secondary). Sonuç: 300 20px beyaz, başında 24px mavi çizgi.
- İkon yok; "ürün" değil "sistem"; fiyat / deneme / kayıt ifadesi yok. Doğrulanmamış rakam yok; "Ne değişti" nitel maddeler (P7 G6). Ne kurduk maddesinde açıklama opsiyonel.
- v0.6 (G5): hero görseli 3:2 çerçeve, max 640px, `object-cover object-top`; Broker's Brain gerçek ekran (1200 + 1600 srcset), Clinic OS approved crop.
- Referans: docs/qa/P6-1280-clinic.png, P6-375-clinic.png, P6-1280-brokers.png, P6-375-brokers.png.

## SAHİPLİK / WHY DOVEIFY / ÇALIŞMALAR — CD-REVİZE-BEKLİYOR
CD-REVİZE-BEKLİYOR. Görsel otorite `approved/homepage-v1.png`; ölçü/motion kuralları v0.2'de.
- **v0.7 (P8, Emre kararı — CD'ye not, final QA'da görülecek):** Sahiplik kapanış cümlesinin altına text link `Kendi yazılımınızı yaptırın →` (14px 500 mavi, kapanış metniyle hizalı); Çalışmalar'da `TÜM ÇALIŞMALARI GÖR` yanına aynı stilde ikinci text link `BİLGİ BANKASI` + ok (EN `KNOWLEDGE BASE`). Kompozisyon değişmedi; piksel farkı yalnız bu iki link.
- **v0.6 (G8, Emre kararı 05.11.2026 — CD final QA'da görülecek):** Sahiplik ana ifade TR `ARAÇLAR KİRALANIR.` / `BİLGİ KİRALANMAZ.` (300 56/36px, satır 2 mavi; 1280'de her satır tek satır, 56px korundu); EN `TOOLS ARE RENTED.` / `KNOWLEDGE SHOULD NOT BE.`. Why TR `%100` / `SAHİPLİK`, EN `100%` / `OWNERSHIP`. Dönüşüm etiketleri EN kalır.

## İLETİŞİM SAYFASI (yeni — v0.6, P7 G1; CD final QA'da görür)
- Yollar `/iletisim/`, `/en/contact/`; nav + footer + WhatsApp buton. Sayfaya özel title/description/canonical/hreflang; OG ana sayfa görseli.
- Desktop 12 kolon: sol 1–5 H1 `Projenizi konuşalım.` Inter 300 48 / 32px + alt metin 400 18 / 16px secondary (max 440) + 4 kanal kartı alt alta (gap 12); sağ 6–12 form kartı (1px kenarlık, radius 12, padding 32 / 24). Mobil: başlık → form → kartlar (sm: kartlar 2 kolon).
- Kanal kartı: koyu zemin, 1px `--color-v2-border`, radius 12, padding 16/20; ikon 20px monokrom beyaz, hover kenarlık + ikon mavi; etiket 500 12px uppercase `.12em` secondary, değer 400 16px beyaz. Marka renkleri (yeşil/pembe) yok.
- Form: etiket 500 13px secondary (zorunlu `*` yalnız Ad Soyad, Telefon ve KVKK onayında — P7 düzeltme); alan 48px, 1px kenarlık, radius 8, şeffaf zemin, 16px beyaz, odakta mavi kenarlık; select özel ok, boşken secondary, seçiliyken beyaz; açılır liste OS'nin çizdiği native liste: option `#0B1220` metin / `#fff` zemin. Autofill: inset gölge `--color-v2-bg-elevated` + beyaz metin. textarea 5 satır. Desktop alanlar 2 kolon (mesaj tam genişlik). KVKK onay kutusu 18px mavi accent, link beyaz alt çizgili. Buton: hero CTA 1 stili `TALEBİ GÖNDER →`.
- Hata: kırmızı yok — alan kenarlığı mavi + altında 13px secondary metin, başında 16px mavi çizgi; ilk hatalı alana odak. Gönderim hatası (P7 son): butonun altında aynı satır + `WhatsApp'tan yazın.` linki (beyaz, alt çizgili); Netlify Forms fallback'i yok, tek kanal Resend. Başarı: form yerine kart, 40px mavi çizgi + 300 28 / 24px metin + WhatsApp kartına link; odak başarı kartına.
- Motion: yalnız form fadeUp bir kez; başlık statik (LCP öğesi — hepsi opacity 0 başlayınca Lighthouse NO_LCP verdi); başka hareket yok.

## WHATSAPP BUTON (yeni — v0.6, P7 G3)
- Tüm V2 sayfalarında sağ alt, `position: fixed`: desktop 56px, right/bottom 24px; mobil 48px, right/bottom 16px. Zemin `--color-v2-bg-base`, 1px `--color-v2-blue` kenarlık, beyaz monokrom WhatsApp ikonu 24px, glow `0 0 18px rgba(37,99,235,.28)` (hover .42).
- Sayfa 400px kaydırılınca fade-in .3s (geri çıkınca fade-out); gizliyken `visibility: hidden` (odaklanmaz). Hero'da görünmez. 404'te (kaydırma yok) baştan görünür. Reduced motion: geçişsiz.
- `aria-label` TR `WhatsApp ile yazın`, EN `Message us on WhatsApp`; link `wa.me/905428050815?text=…` `_blank`.

## GİZLİLİK SAYFASI (yeni — v0.6, P7 G2)
- Yollar `/gizlilik/` (metin `docs/legal/gizlilik-2026-09-04.md`, build sırasında aynen okunur), `/en/privacy/` (TR metnin resmî olmayan EN çevirisi, `docs/legal/gizlilik-2026-09-04.en.md`; ilk paragraf "This is an unofficial translation; the Turkish version prevails."). Eski `/privacy/` → 301 `/gizlilik/`.
- Editorial: tek kolon max-width 760, H1 Inter 300 40 / 32px, tarih 14px secondary, 40px mavi çizgi; H2 400 22px beyaz (56px üst boşluk); alt başlık (a/b/c) 500 17px beyaz; gövde 400 16px secondary, line-height 1.7; metindeki e-posta mailto linki. Motion yok.
