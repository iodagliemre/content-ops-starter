# PAKET-P1-HERO-NAV — Nav + Hero'yu DESIGN-LOCK v0.1'e getirme

> Faz 3 / P1. Taban: PAKET-01 çıktısı (commit 3cd3887). Otorite: `DESIGN-LOCK.md` v0.1 (NAV, HERO kilitli) + `docs/design/approved/homepage-v1.png`.
> Bu paket yeni bölüm eklemez; sadece PAKET-01'de kurulan nav+hero'yu LOCK'a birebir uydurur.

## Kısıtlar (değişmez)
- Kod `src/components/HomePageV2/` altında kalır. `src/pages/index.*` AÇILMAZ.
- Silme yok; kaldırılan dosya `_legacy/`'e taşınır.
- Git komutu yok (Emre atar).
- Metin değişikliği yok. Hero headline "DİJİTAL ZEKÂ. / GERÇEK ETKİ." sabit.
- Kafa görseli boyutu/konumu PAKET-01 ölçülerinde kalır (CD: "P1 screenshot sonrası ölçelim").
- Mevcut `RAPOR-P01.md`, `RAPOR-P1.md`, `docs/qa/P01-*.png` DOKUNULMAZ. Bu paketin çıktıları ayrı adla (aşağıda).

## PAKET-01 → LOCK farkı (P01 screenshot'larından tespit)
| # | Şu an | Olması gereken (LOCK) |
|---|---|---|
| F1 | Nav altında 1px border | Border yok; nav hero zeminiyle aynı |
| F2 | Amblem / wordmark / heartbeat üç ayrı obje, heartbeat gri ve ~80px uzakta | Tek flex imza: mark 28px + wordmark + heartbeat, gap 10/6px, heartbeat wordmark'ın hemen sağında, ~56px, mavi, 1.5px |
| F3 | Headline bold | Inter 300, uppercase, 64/40px, lh 1.05, ls 0.02em |
| F4 | Hero heartbeat gri, glow yok | 120px, mavi, 1.5px, drop-shadow(0 0 6px rgba(47,123,255,.55)) |
| F5 | Kafa dikdörtgen sınırla okunuyor | Sol/üst/alt kademeli erime, sağ kontur keskin (mask-image ×2, intersect) |
| F6 | Font sistem/Segoe görünümlü | Inter self-host, latin-ext subset, swap; 300/400/500 yüklü, 700 yüklü DEĞİL |
| F7 | Kafa motion: scale only | Overlay-fade: kafa opacity 1 (LCP), üstünde zemin rengi overlay 1→0 .9s @.9s + scale .96→1 |

## Adımlar

### G1 — Fontlar (F6)
- `public/fonts/` altına Inter 300/400/500, woff2, latin + latin-ext subset (İ ı Ş ş Ğ ğ Ü ü Ö ö Ç ç Â â mutlaka).
- `@font-face` × 3, `font-display: swap`. 700 tanımı YOK; hiçbir yerde `font-bold`/`font-weight:700` kalmayacak (`grep` ile doğrula).
- Hero için 300 dosyasına `<link rel="preload" as="font">`.
- Doğrulama: DevTools → Rendered Fonts = Inter; TR karakterler fallback'e düşmüyor.

### G2 — Nav (F1, F2)
- Nav `border-bottom` kaldır; arka plan `--color-v2-bg`, 80px / 64px.
- Marka imzası tek `<a>` içinde tek yatay flex:
  - `logo-mark.svg` 28px (`<img>` kalabilir — RAPOR-P01 G1 gradyan-id gerekçesi geçerli)
  - Wordmark "DOVEIFY": Inter 400, 15px, uppercase, `letter-spacing:.22em`, beyaz
  - Heartbeat: **inline SVG** (dasharray animasyonu için şart), ~56px genişlik, `stroke: var(--color-v2-blue)`, `stroke-width:1.5`, `fill:none`, `vector-effect: non-scaling-stroke`
  - `gap: 10px` desktop / `6px` mobil. Heartbeat wordmark'ın son harfinden hemen sonra başlar; dikeyde wordmark x-height ortasına hizalı.
- Sağ linkler / İletişim pill / hamburger: PAKET-01'deki gibi, LOCK ölçüleri kontrol (15px 400 secondary, pill 40px/22px, hamburger 24px 2 çizgi).

### G3 — Hero tipografi + heartbeat (F3, F4)
- Headline: `font-weight:300`, uppercase, 64px ≥1024 / 40px altı, `line-height:1.05`, `letter-spacing:.02em`. Satır 1 beyaz, satır 2 `--color-v2-blue`.
- Açıklama: 400, 18/16px, secondary, lh 1.6, max-width 440px.
- Hero heartbeat: inline SVG, 120px, mavi, 1.5px, `filter: drop-shadow(0 0 6px rgba(47,123,255,.55))`.
- CTA'lar: LOCK "Tipografi" bölümü birebir (13px 500 uppercase .08em, 48px, radius 8px; text-link ok hover 4px).

### G4 — Kafa maskesi (F5)
- Kafa görseli konteynerine:
  ```css
  mask-image:
    linear-gradient(to right, transparent 0%, #000 38%, #000 100%),
    linear-gradient(to bottom, transparent 0%, #000 14%, #000 86%, transparent 100%);
  mask-composite: intersect;
  -webkit-mask-image: (aynı);
  -webkit-mask-composite: source-in;
  ```
- Sağ kenar maskesiz. 375 ve 1280'de dikdörtgen sınır hiçbir yerde okunmayacak — özellikle mobilde görselin sol/üst/alt kenarlarında zemine geçişi kontrol et.
- Overlay katmanı (G5) da aynı maskenin İÇİNDE kalmalı; aksi halde overlay dikdörtgeni fade sırasında görünür. Öneri: mask'i overlay + görseli saran ortak wrapper'a uygula.

### G5 — Motion: overlay-fade (F7)
- Kafa `<img>` baştan `opacity:1` (LCP koşulu, RAPOR-P01 sapması korunuyor).
- Üstüne `position:absolute; inset:0; background: var(--color-v2-bg)` overlay: `opacity 1→0`, `.9s`, `delay .9s`, `forwards`. `pointer-events:none`.
- Aynı anda wrapper `scale(.96)→1`, `.9s`, `delay .9s`. Blur yok.
- Heartbeat (nav + hero aynı anda): `stroke-dasharray/dashoffset` çizim `1.0s`, `delay .3s`, `forwards`. Sonra sabit. Loop yok.
- Sıra ve toplam süre: logo/imza → heartbeat (.3s) → kafa (.9s) → headline → açıklama → CTA → dur (≤2.7s). PAKET-01 G4 tablosundaki headline/açıklama/CTA fadeUp zamanları aynen.
- `prefers-reduced-motion: reduce` → tüm animasyonlar kapalı, son kare (overlay opacity 0, heartbeat çizili).
- LCP kontrolü: Lighthouse LCP elementi = kafa görseli olmalı (raporda belirt). Overlay `will-change: opacity`.

### G6 — Kapı + QA
- `npx tsc --noEmit`, `npm run build`, `npm run lint` → üçü exit 0. Yeni uyarı eklenmemeli (mevcut 4 `<img>` uyarısı kabul).
- Lighthouse mobil ×3 medyan ≥95, CLS ≤0.02; desktop bilgi amaçlı. LCP elementinin ne olduğunu raporla.
- Reduced-motion ile bir Lighthouse koşumu daha (CLS kontrolü).
- Screenshot: `docs/qa/P1-1280.png` (tam hero, nav dahil), `docs/qa/P1-375.png`, `docs/qa/P1-1280-hero-crop.png` (kafa + sol kenar geçişi yakın çekim, ~800px genişlik). Motion bittikten sonra (≥3s) çekilecek.
- Ek: `docs/qa/P1-375-nav-crop.png` — marka imzası yakın çekim (F2 kontrolü için).

## Çıktılar
- `RAPOR-P1-HERO-NAV.md` (repo kökü, diğer raporların yanında): F1–F7 için "yapıldı / nasıl" tablosu, tsc/build/lint ham çıktı, Lighthouse tablosu (LCP elementi dahil), sapma varsa gerekçe.
- `docs/qa/P1-*.png` (4 adet).
- `PROJECT-STATE.md` üzerine yazılır: Faz 1 ✅, Faz 2 🟡 (LOCK v0.1), Faz 3 P1 durumu, karar #9/#10 güncel, "Son Paket" = bu paket, "Sonraki Adım" = Emre QA → commit → P2 (CD kararları #4–#8 sonrası).
- Mevcut `RAPOR-P01.md`, `RAPOR-P1.md`, `P01-*.png` dokunulmadan kalır.

## Kabul (Emre QA, 1280 + 375)
- [ ] Nav border yok, imza tek obje gibi okunuyor, heartbeat mavi ve wordmark'a bitişik
- [ ] Headline ince (300), 700 hiçbir yerde yok, Inter render ediliyor, TR karakterler temiz
- [ ] Hero heartbeat mavi + kontrollü glow
- [ ] Kafa: sol/üst/alt erime, sağ keskin, dikdörtgen yok — her iki breakpoint
- [ ] Motion bir kez, ≤2.7s, durur; overlay fade'de dikdörtgen kenar görünmüyor; reduced-motion statik
- [ ] Mobil sıra kafa → headline → açıklama → heartbeat → CTA, kafa ≤42vh
- [ ] tsc/build/lint 0, mobil LH ≥95, CLS ≤0.02, LCP = kafa görseli
