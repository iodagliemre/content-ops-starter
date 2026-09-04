# PAKET-01 — HERO PROTOTİPİ + PERFORMANCE GATE (P-GATE-1)

> Faz 1. Amaç: hero'nun motion sırasını gerçek içerikle kurup mobil Lighthouse ≥95 / CLS ≈0 ölçmek. Bu paket TASARIM paketi değil, GATE paketi — hero dışında hiçbir bölüme dokunma.
> Kısıt (RAPOR-P00): homepage `src/components/HomePageV2/` altında kalır; `src/pages/index.*` AÇMA.

## Oku
`CLAUDE.md`, `PROJECT-STATE.md`, `RAPOR-P00.md` (Olay kaydı #3), `docs/design/TOKENS.md`, `docs/design/reference/REFERANS-NOTU.md` (bölüm 1–2), `docs/design/reference/CD-SAYFA-KURGUSU.md` (01 HERO + HERO MOTION KARARI).

## Kapsam
Sadece: nav + hero. Diğer 6 section placeholder olarak kalır.

## G1 — Nav
- Sol: `logo-mark.svg` (28–32px) + `logo-wordmark.svg` + `heartbeat.svg` (wordmark'ın sağından devam, ~64px genişlik).
- Sağ: `content/site.ts` nav öğeleri (Ürünlerimiz / Web Factory / Dijital Dönüşüm / Sahiplik / Çalışmalar) + "İletişim" outline pill. Anchor linkler (`#urunler` vb.).
- Mobil (<1024): hamburger, tam ekran overlay, aynı öğeler. Nav yüksekliği sabit (CLS için `h-16`/`h-20` explicit).
- Logo `<img>` ile, inline SVG değil (gradient id çakışması).

## G2 — Hero yapısı
Grid: sol kolon metin (5/12), sağ kolon kafa (7/12). Mobilde: kafa üstte (küçültülmüş, `max-h-[42vh]`), metin altta.
Metin `content/site.ts` hero'dan: "DİJİTAL ZEKÂ." (beyaz) / "GERÇEK ETKİ." (`--color-v2-blue`) / alt metin / heartbeat ayırıcı / 2 CTA.
Hero yüksekliği: desktop `min-h-[calc(100vh-5rem)]`, mobil doğal akış. Tüm görsellere explicit width/height.

## G3 — Kafa görseli (placeholder katman sistemi)
CD'den katmanlar gelmedi. Şimdilik:
1. `docs/design/reference/homepage-ref-v1.png`'den sağ üst hero bölgesini kes (kafa + parçacık alanı, yaklaşık x 380–1024, y 60–500). Python/Pillow.
2. Kenarları CSS `mask-image: radial-gradient(...)` ile zemine eritilecek (görselde zaten koyu zemin var, transparan gerekmez).
3. Çıktı: `public/hero/head-placeholder.webp` (1400px genişlik, kalite 78) + `head-placeholder-mobile.webp` (800px). `next/image` `priority`, `sizes` doğru.
4. Bileşen `HeroHead.tsx`: `layers: string[]` prop alır; şimdi 1 katman. Katman sayısı artınca kod değişmeden çalışacak (her katman ayrı `<img>`, aynı boyut, absolute stack).

## G4 — Motion (saf CSS, bir kez, dur)
Sıra ve zamanlar (CD kararı):
| # | Öğe | Efekt | Başlangıç | Süre |
|---|---|---|---|---|
| 1 | Logo mark+wordmark | fadeIn | 0 | .4s |
| 2 | Heartbeat (nav + hero ayırıcı) | stroke-dasharray çizim (`pathLength=1`) | .3s | 1.0s |
| 3 | Kafa katmanları | opacity 0→1 + scale .96→1 + hafif blur(6px)→0, katmanlar stagger .12s | .9s | .9s |
| 4 | Headline | fadeUp .6s | 1.6s | .6s |
| 5 | Alt metin | fadeUp .6s | 1.8s | .6s |
| 6 | CTA'lar | fadeUp .6s, stagger .1s | 2.0s | .6s |
| 7 | — | animasyon biter, `animation-fill-mode: forwards`, hiçbir şey loop etmez | 2.7s | — |

- Tümü `transform`/`opacity`/`filter`; `will-change` sadece kafa katmanlarında ve animasyon bitince kaldırılır (`animationend` → class toggle).
- `@media (prefers-reduced-motion: reduce)`: tüm animasyonlar kapalı, son kare statik.
- Framer Motion KULLANMA bu pakette. CSS ile çözülmezse RAPOR'a yaz, P2'de değerlendirilir.
- Parçacık/kod parçaları (`</>`, grid noktaları): ŞİMDİLİK YOK. Placeholder görselde zaten var.

## G5 — Performance Gate ölçümü
1. `npm run build; echo "exit: $?"` → `npm run start` (port 3000).
2. `npx lighthouse http://localhost:3000 --preset=perf --form-factor=mobile --screenEmulation.mobile --throttling-method=simulate --output=json --output=html --output-path=./docs/perf/gate-1-mobile --chrome-flags="--headless" ; echo "exit: $?"`
3. Aynısı `--form-factor=desktop --screenEmulation.disabled` ile `gate-1-desktop`.
4. 3'er kez koş, medyan al.
5. `docs/perf/GATE-1-hero.md`: Performance / LCP / CLS / TBT / INP (varsa) tablosu, LCP elementi ne, en büyük 3 fırsat. HTML raporlar `docs/perf/` altında kalır.
6. Mobil Performance <95 veya CLS >0.02 ise: sırayla dene ve her denemeyi ölç: (a) placeholder kalite 78→65, (b) mobil görsel 800→640px, (c) blur efektini kaldır, (d) kafa animasyonunu sadece opacity'ye indir. Hangi adımda geçtiğini yaz.

## Kapı
- `tsc --noEmit; echo "exit: $?"` → 0
- `npm run build; echo "exit: $?"` → 0
- `npm run lint; echo "exit: $?"` → 0
- Mobil Lighthouse ≥95, CLS ≤0.02 (medyan)
- Screenshot: `docs/qa/P01-1280.png`, `docs/qa/P01-375.png` (animasyon bitmiş hal)
- `RAPOR-P01.md` + `PROJECT-STATE.md` (Faz 1 → durum, gate sonucu, sonraki adım Faz 2)

## Yapma
- Hero dışı section'lara dokunma.
- Metin değiştirme / önerme.
- Sonsuz animasyon, Lenis, scroll-jack, Framer Motion.
- `rm`; her şey `_legacy/` (CLAUDE.md kuralı).
- Git.
