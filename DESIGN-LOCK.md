# DESIGN-LOCK.md — Doveify Site V2

> v0.4 — 03.11.2026. Kilitli: NAV, HERO, ÜRÜNLER, WEB FACTORY, DİJİTAL DÖNÜŞÜM.
> v0.1 → v0.2 değişiklikleri: kafa maske değerleri (CD Karar 01 revizyonu), Karar 04 "görsel davranış kilitli / teknik yöntem serbest", P1 KİLİT listesi eklendi.
> Görsel otorite: `docs/design/approved/homepage-v1.png` (referans görselin onaylı kopyası, 05.09.2026 CD + Emre onayı).
> Değişiklik: yalnızca Emre + CD onayıyla, bu dosyada versiyon artırılarak.

## Genel
- Zemin: `--color-v2-bg` (TOKENS.md). Section'lar arasında border/çizgi YOK; ayrım boşluk ve içerikle.
- Tipografi ailesi: Inter (self-host, latin-ext). Display metinler 300 (Light), gövde 400, buton/etiket 500. **700 yok.**
- Renk: beyaz metin, `--color-v2-blue` yalnızca aktif/vurgu noktasında. Glow yalnızca: dijital kafa, heartbeat, sistem geçişleri.
- Motion: bir kez oynar, durur. `prefers-reduced-motion` → statik son kare. Sonsuz loop YOK.
- Performans: mobil Lighthouse ≥95, CLS ≤0.02. Her paket ölçer.

## NAV (kilitli — CD Karar 03)
- Yükseklik 80px desktop / 64px mobil, sabit; arka plan hero zemini ile aynı, **alt border yok**, hero'nun içinde çözülür.
- Sol: **tek marka imzası** — `logo-mark.svg` 28px + "DOVEIFY" wordmark + heartbeat, tek yatay flex, `gap` 10px / 6px. Heartbeat wordmark'ın hemen sağından başlar, genişlik ~56px, `--color-v2-blue`, 1.5px stroke. Üç ayrı obje gibi okunmayacak.
- Wordmark: Inter 400, 15px, uppercase, `letter-spacing: 0.22em`, beyaz.
- Sağ (≥1024): 5 link, 15px, 400, `--color-v2-text-secondary`, hover beyaz; "İletişim" outline pill (1px `--color-v2-border`, 40px yükseklik, 22px yatay padding, radius full).
- Mobil (<1024): hamburger (24px, 2 çizgi, beyaz) → tam ekran overlay, linkler dikey 24px/300, kapat ikonu. Overlay açılış fadeIn .3s.

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
- Sıra: Broker's Brain ← CLINIC OS → OSGB Web → TurkISG AI; ilk state Clinic OS merkez.
- Desktop sahne: merkez 560×320; yan 440×280, rotateY ∓30°, translateX ∓310px, translateZ −200px, opacity .9; yan/merkez derinlik ilişkisi ve konumlar kilitli. Yer yansıması yok; sahne altı radial parlama.
- Mobil: snap-rail, kart calc(100vw − 88px), gap 16, komşu kart peek 19px, pasif scale .94.
- Otomatik kaydırma YOK; uçlarda oklar disabled; tek transition .55s.
- Görseller placeholder; final ürün görselleri geldiğinde yalnızca görsel treatment QA, geometri değişmez.
- Mevcut tipografi, renk, CTA, ok butonları kilitli.
- Referans screenshot: docs/qa/P2AR-1280-carousel-crop.png, P2AR-375-carousel-crop.png.

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

## SAHİPLİK / WHY DOVEIFY / ÇALIŞMALAR / FİNAL CTA / FOOTER — CD-REVİZE-BEKLİYOR (P4)
CD-REVİZE-BEKLİYOR. Görsel otorite `approved/homepage-v1.png`; ölçü/motion kuralları v0.2'de.
