# PAKET-P3-WEBFACTORY-DONUSUM — Web Factory + Dijital Dönüşüm

> Faz 3 / P3. Taban: commit `2c3e038`. Otorite: `docs/design/approved/homepage-v1.png` (Web Factory y≈890–1010, Dijital Dönüşüm y≈1040–1150 @1024) + CD P3 Creative Direction (03.11.2026) + DESIGN-LOCK v0.3 (bu brief G0'da işlenir).
> Yeni görsel dil yok; P1/P2'nin koyu, teknik, editorial karakteri. Paket sonunda tek CD onayı (1280/375 screenshot).

## Kısıtlar
- Kod `src/components/HomePageV2/`; `src/pages/index.*` yok. Silme yok (`_legacy/`). Git yok.
- P1 + P2 KİLİT listelerine dokunulmaz (LOCK). Nav/hero'da yalnızca **link hedefi** değişebilir (G1).
- Metin: ICERIK-ENVANTERI + bu brief'teki TR metinler (Emre onaylı). Anlam değişikliği yok.
- Sonsuz animasyon yok; section'lar görünüme girince tek seferlik reveal, sonra sabit.
- Section'lar arası çizgi yok. Inter 300/400/500.
- Performans: ≥95 hedefi PERF paketine ertelendi; bu paket **gerileme yaratmaz**: mobil medyan P2 seviyesinin (88) altına düşmez, CLS ≤0.02, LCP = kafa. 3 koşum, yalnızca `.json`, `docs/perf/P3-{1,2,3}.report.json`.

## G0 — DESIGN-LOCK v0.3 (Delivery Lead yazdı, dosyaya aynen işle)
`DESIGN-LOCK.md` başlık satırını `v0.3 — 03.11.2026. Kilitli: NAV, HERO, ÜRÜNLER.` yap ve "## ÜRÜNLER / WEB FACTORY / ..." bölümünün **önüne** şunu ekle:

```
## ÜRÜNLER (kilitli — CD P2AR GEÇTİ, 03.11.2026)
- Sıra: Broker's Brain ← CLINIC OS → OSGB Web → TurkISG AI; ilk state Clinic OS merkez.
- Desktop sahne: merkez 560×320; yan 440×280, rotateY ∓30°, translateX ∓395px, translateZ −200px, opacity .9; yan/merkez derinlik ilişkisi ve konumlar kilitli. Yer yansıması yok; sahne altı radial parlama.
- Mobil: snap-rail, kart calc(100vw − 88px), gap 16, komşu kart peek 19px, pasif scale .94.
- Otomatik kaydırma YOK; uçlarda oklar disabled; tek transition .55s.
- Görseller placeholder; final ürün görselleri geldiğinde yalnızca görsel treatment QA, geometri değişmez.
- Mevcut tipografi, renk, CTA, ok butonları kilitli.
- Referans screenshot: docs/qa/P2AR-1280.png, P2AR-375.png.
```
Bölüm başlığındaki listeden "ÜRÜNLER /" kelimesini çıkar (kalanlar CD-REVİZE-BEKLİYOR).

## G1 — Link hedefleri (kompozisyon değişmez)
- Hero CTA 1 "ÜRÜNLERİMİZİ KEŞFET" → `#urunler`. Hero CTA 2 "WEB FACTORY'Yİ İNCELE →" → `#web-factory`.
- Nav: Ürünlerimiz `#urunler`, Web Factory `#web-factory`, Dijital Dönüşüm `#donusum`, Sahiplik `#sahiplik`, Çalışmalar `#calismalar`. Sabit nav altında kaymaması için section'lara `scroll-margin-top: 80px / 64px`.

## G2 — WEB FACTORY (`#web-factory`) — "web.doveify.io'ya açılan premium geçiş alanı" (CD)
Referans: sol başlık, orta ekran kolajı, sağ açıklama + CTA. Ürün vitrini değil, geçiş alanı: tek CTA, tek mesaj.
- Metin (`content/webFactory.ts`): eyebrow `WEB FACTORY`; H2 `Markanızı dijitalde zirveye taşıyoruz.`; açıklama `Strateji, tasarım ve yazılımı bir araya getirerek yüksek performanslı web deneyimleri sunuyoruz.`; CTA `WEB FACTORY'Yİ KEŞFET →` → `https://web.doveify.io` (`target=_blank rel=noopener`).
- Desktop yerleşim (12 kolon): başlık kolon 1–3 (eyebrow + H2 Inter 300 34px, 2 satır), kolaj kolon 4–9, açıklama+CTA kolon 10–12 (14px secondary + text-link CTA P1 stilinde, mavi). Dikey ortalı. Section padding 96px.
- Kolaj: 3 site ekranı yelpaze dizilimi — merkez ekran 360×240 dik, iki yan ekran 300×200 `rotateY ∓18°` hafif geride (`translateZ -80`), opacity .85. P2 sahnesinin küçültülmüş, sakin akrabası; **farklı** olması için: açı küçük, kartlar ekran çerçevesi (ince 1px kenarlık, radius 8, üstte 6px tarayıcı şeridi). 3D sahne `perspective 1200px`.
- Placeholder ekranlar: `public/webfactory/screen-{1,2,3}.webp` ≤40KB; approved görselden kolaj crop'u (Pillow) merkez ekrana; yanlar düz koyu çerçeve + ince grid çizgisi (gerçek site crop'ları ayrı creative review — CD #7).
- Mobil: eyebrow → H2 (28px) → kolaj (3D yok, sadece merkez ekran tam genişlik 16:10, yanlar gizli) → açıklama → CTA. Padding 64px.
- Reveal: section görünüme girince kolaj `opacity 0→1 + translateY 16→0` .6s, bir kez.

## G3 — DİJİTAL DÖNÜŞÜM (`#donusum`) — TEK HAT `DATA → AI → SYSTEMS → AUTONOMY` (CD #4)
4 eşit kart YOK. Doveify'ın dönüşüm metodolojisi olarak tek hat, dört aşama.
- Metin (`content/transformation.ts`), Emre onaylı TR:
  - eyebrow `DİJİTAL DÖNÜŞÜM`; H2 `Dönüşüm bir tercih değil, rekabet avantajıdır.`
  - Aşamalar (etiket EN büyük harf — CD, başlık+açıklama TR):
    1. `DATA` — **Algoritma evrimi** — Yapay zekâ algoritmaları gelişir, büyük veri işlenir, öngörü ve analiz kapasitesi büyür.
    2. `AI` — **Araçların sistemlere uyarlanması** — AI ajan sistemleri devreye girer, şirkete özel çözümler geliştirilir, süreç bazlı otomasyonlar canlıya alınır.
    3. `SYSTEMS` — **Donanım ve AI entegrasyonu** — IoT ve akıllı sensörler devreye girer, gerçek zamanlı veri akışı kurulur, dijital ve fiziksel dünya bütünleşir.
    4. `AUTONOMY` — **Otonom ve bağlı sistemler** — Sistemler birbiriyle konuşur, operasyonlar otonom yönetilir, stratejiyle uyumlu sonuçlar üretilir.
  - Alt satır alıntı: `Ölçemeyen yönetemez; yönetemeyen rekabet edemez.` (Inter 300 20px, secondary, sola hizalı, başında 24px mavi çizgi)
- Desktop: sol kolon 1–4 eyebrow + H2 (34px, 2 satır). Sağ kolon 5–12: **yatay hat** — 1.5px çizgi `--color-v2-border`, üzerinde 4 düğüm (10px mavi dolu daire + dış 1px mavi halka 20px, `drop-shadow 0 0 6px rgba(47,123,255,.45)` — heartbeat glow kuralı). Düğümler eşit aralıklı; her düğümün altında etiket (Inter 500 12px uppercase `letter-spacing .12em`, mavi) → başlık (400 16px beyaz) → açıklama (400 13px secondary, max-width 200px). Düğümler arası ince ok YOK; hat kendisi akışı anlatır. Son düğüm (AUTONOMY) ile hattın sonu arasında 24px çıkıntı, hattın sonunda yok olma (`mask-image` sağda 10% fade).
- Reveal (bir kez): hat soldan sağa `scaleX 0→1` (transform-origin left) .9s; düğümler sırayla `.15s` aralıkla `opacity 0→1 + scale .6→1`; metinler düğümden .1s sonra fadeUp. Toplam ≤1.8s, sonra sabit. `prefers-reduced-motion`: son kare.
- Mobil: eyebrow → H2 (28px) → **dikey hat** solda (x=20px, 1.5px), düğümler dikey 4 blok; her blokta etiket → başlık → açıklama, sol padding 44px; bloklar arası 32px → alıntı. Reveal: hat yukarıdan aşağı `scaleY`, aynı sıra.
- Bu section'da ikon YOK (CD).

## G4 — Placeholder temizliği
- `[BEKLEYEN-İÇERİK]` placeholder'ları sadece Sahiplik / Why Doveify / Çalışmalar / İletişim için kalır; `id`'leri `#sahiplik`, `#why`, `#calismalar`, `#iletisim`. Çizgi yok.

## Ev işi (bu pakette, kod değil)
- `.gitignore`'a `docs/perf/_diag*`, `docs/perf/*-FIX*`, `tsconfig.tsbuildinfo` ekle. Zaten commit'lenmiş olanlara dokunma (git yok).
- `docs/design/P2A-OLCU-ONERISI.md` → `_legacy/docs/`'a taşı (güncel değerler LOCK v0.3'te).

## Çıktılar
- `docs/qa/P3-1280.png` (hero altından Dijital Dönüşüm sonuna kadar), `P3-1280-webfactory.png`, `P3-1280-donusum.png`, `P3-375.png` (aynı aralık), `P3-375-donusum.png`. Reveal'lar bittikten sonra (≥2.5s).
- `RAPOR-P3.md`: G0–G4 yapıldı/nasıl, gerçekleşen ölçüler, tsc/build/lint, Lighthouse 3× tablo (skor/LCP/TBT/SI/CLS) + P2 kıyası.
- `PROJECT-STATE.md`: Faz 2 ✅ (LOCK v0.3), P2 ✅, P3 durumu, kararlar #4 ✅ #8 ✅ (#5 #6 #7 CD kararı alındı — P4'te), "Sonraki Adım: CD görsel onayı → commit → P4 (Sahiplik + Why Doveify + Çalışmalar logo bandı + Final CTA/İletişim)".

## Kapı
tsc/build/lint 0, yeni uyarı yok · yatay scrollbar yok · CLS ≤0.02, LCP = kafa, mobil medyan ≥88 · P1/P2 dosyaları ve `_legacy/` dokunulmadı.
