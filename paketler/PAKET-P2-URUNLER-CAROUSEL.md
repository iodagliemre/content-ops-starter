# PAKET-P2-URUNLER-CAROUSEL — Ürünler bölümü (3D carousel)

> Faz 3 / P2. Taban: commit `dba6fd2` (P1 kilitli). Otorite: `DESIGN-LOCK.md` v0.2 + `docs/design/approved/homepage-v1.png` (Ürünler bölümü, y≈535–880 @1024px genişlik) + CD kararları 05.09.2026 (aşağıda).
> **İki aşamalı paket.** P2-A sonunda DUR, screenshot'lar CD'ye gider, ölçü kilidi gelmeden P2-B'ye geçilmez.

## Kısıtlar (değişmez)
- Kod `src/components/HomePageV2/` altında; `src/pages/index.*` açılmaz. Silme yok (`_legacy/`). Git yok.
- **P1 KİLİT LİSTESİ'ne dokunulmaz** (LOCK v0.2 "P1 KİLİT LİSTESİ"): nav, hero, kafa, headline, imza, CTA, motion. Tek istisna aşağıda G0 (link hedefi).
- Metin: `docs/content/ICERIK-ENVANTERI.md` "V2 kart metinleri"; anlam değişikliği yok. TurkISG AI için V2 TR metin yok → G1'deki öneri kullanılır, **Emre onayı bekleniyor** işaretiyle.
- Sonsuz loop YOK. Otomatik kaydırma YOK. Son üründen ilke otomatik dönüş YOK.
- Tipografi: Inter 300/400/500, 700 yok. Section'lar arası border yok.
- JS kütüphanesi eklenmez (carousel el yazması; Framer Motion yalnızca CSS yetmezse, gerekçe raporda).

## CD kararları (05.09.2026) — P2'yi bağlayan
- Sıra: `Broker's Brain ← CLINIC OS → OSGB Web → TurkISG AI`; ilk state Clinic OS merkez.
- Desktop: ok navigasyonu + yan karta tıklayınca o kart merkeze gelir. Mobil: kullanıcı kontrollü snap-scroll/swipe.
- Aktif ürün değişiminde **tek** transition; arayüz kendi kendine kaymaz.
- "Üç eşit kart" görüntüsü YASAK — merkez aktif, yanlar açık şekilde ikincil (ölçek, açı, opaklık).
- Nav "İletişim" pill → cal.com (Karar #8).

## G0 — Nav link hedefi (Karar #8)
- "İletişim" pill `href` → `https://cal.com/emre-dagli-ffwxpr/doveify-demo`, `target="_blank" rel="noopener"`. Nav kompozisyonuna, ölçüye, stile dokunulmaz.

## G1 — İçerik (`content/products.ts`)
| id | Başlık | Açıklama (TR) | Link | Görsel |
|---|---|---|---|---|
| clinic-os | CLINIC OS | Sağlık kurumları için bütünleşik yönetim sistemi. | `/clinic/` | dashboard placeholder (approved görselden crop) |
| brokers-brain | BROKER'S BRAIN | Gayrimenkul profesyonelleri için akıllı takip ve analiz platformu. | `/brokers-brain/` | koyu placeholder |
| osgb-web | OSGB WEB | İş sağlığı ve güvenliği süreçlerinizi dijitalleştiren platform. | `https://osgb.doveify.io` | koyu placeholder |
| turkisg-ai | TURKISG AI | İSG profesyonelleri için yapay zekâ asistanı. **[EMRE-ONAY]** | `https://turkisgai.doveify.io` | koyu placeholder |
- Kart CTA: "DETAYLARI GÖR →" (hepsi). Dış linkler `target="_blank" rel="noopener"`.
- Section metinleri: eyebrow "ÜRÜNLERİMİZ"; H2 "İşinizi geleceğe taşıyan dijital sistemler."; açıklama "Sektörünüze özel geliştirdiğimiz yazılımlar ile operasyonlarınızı dijitalleştiriyor, verimliliğinizi artırıyoruz."
- Placeholder görseller: `public/products/*.webp`, ≤60KB, `--color-v2-bg` zemin; Clinic OS için approved görselden dashboard crop'u (Pillow), diğerleri ürün adı yazılı düz koyu kart. Gerçek ekranlar CD'den sonra.

## G2 — Section iskeleti (approved görselden ölçü, 1024→1280 ×1.25)
- Üst boşluk hero'dan 96px; section iç dikey padding 96/64px (mobil).
- Başlık satırı (desktop): sol eyebrow (Inter 500 12px uppercase `letter-spacing .12em`, `--color-v2-blue`) + H2 (Inter 300, 36px, lh 1.2, max-width 380px, 2 satır); orta-sağ açıklama (400, 15px, secondary, max-width 360px, H2 ile baseline hizalı); en sağ ok çifti (2× 36px yuvarlak, 1px `--color-v2-border`, ok ikonu 14px beyaz; hover border beyaz).
- Mobil: eyebrow → H2 (28px) → açıklama → carousel → oklar carousel altında ortalı (isteğe bağlı; swipe ana yöntem).

## G3 — Carousel desktop (≥1024) — **ÖNERİ ÖLÇÜLER, CD kilidi için**
Aşağıdakiler approved görselden çıkarıldı; P2-A bunlarla kurulur, CD değiştirebilir.
- Sahne: genişlik 1280, yükseklik 440px, `perspective: 1400px`, `perspective-origin: 50% 40%`.
- Merkez kart: **560×320**, `translateZ(0)`, opacity 1, radius 12px, zemin `rgba(10,16,32,.7)` + 1px `--color-v2-border`, hafif iç glow üst kenar (`inset 0 1px 0 rgba(255,255,255,.06)`).
- Yan kartlar: **480×288** (ölçek .86), `rotateY(±28deg) translateX(∓470px) translateZ(-180px)`, opacity .72, `filter: brightness(.85)`. Görünür yan kart genişliği ≈ 300px (kenardan içeri), merkezle **overlap yok**, boşluk ≈ 32px.
- 4. kart (görünmeyen): `rotateY(±28deg) translateX(∓900px) translateZ(-360px)` opacity 0, `pointer-events:none`, `visibility:hidden` (erişilebilirlik: `aria-hidden`).
- Zemin yansıması: sahne altında 80px, `mask-image: linear-gradient(to bottom, rgba(0,0,0,.25), transparent)`, `transform: scaleY(-1)` kopya **yalnızca merkez kart için**; performans ölçümünde LCP/CLS bozarsa kaldır, raporla.
- Kart içi: başlık Inter 300 26px uppercase `letter-spacing .04em` ortalı (merkez) / sola (yan, 22px); açıklama 400 14px secondary max-width 300px; CTA outline pill 36px (P1 "İletişim" pill stili, 12px uppercase). Merkez kartta ek: alt yarıda ürün görseli (dashboard) kartın alt kenarından 24px taşarak.
- **Template kontrolü:** merkez ile yan arasında en az 3 fark aynı anda görünür olmalı: ölçek, açı, opaklık. Eşit görünüyorsa değerleri sertleştir (rotateY 32°, opacity .6) ve raporla.

## G4 — Carousel mobil (<1024)
- 3D yok. Yatay `scroll-snap-type: x mandatory`, kartlar `scroll-snap-align: center`.
- Kart genişliği `calc(100vw - 72px)` (375'te 303px), gap 16px, kenar peek 28px. Aktif kart scale 1 / opacity 1, diğerleri scale .94 / opacity .6 (IntersectionObserver ile aktif belirleme, CSS class).
- Scroll bar gizli; `overscroll-behavior-x: contain`. Klavye: kartlar focusable, ok tuşları ile geçiş.
- Kart yüksekliği sabit (min-height 380px) → CLS 0.

## G5 — State + transition
- State: `activeIndex` (0–3), başlangıç 1 (Clinic OS). Oklar uçlarda `disabled` (sonsuz dönüş yok; aria-disabled + opacity .35).
- Desktop geçiş: tüm kartlar `transform/opacity` `transition: .55s cubic-bezier(.22,.61,.36,1)`; tek transition, ardışık tıklamada devam eden animasyonu kesip yeniden hedefle (kuyruğa alma yok).
- Yan karta tıklama = o kartı merkeze getir (linke gitmez); merkez kartta CTA linke gider.
- `prefers-reduced-motion`: transition 0s, state atlar.
- Section görünüme girince tek seferlik fadeUp (.6s) — sonra sabit. Otomatik kaydırma, otomatik dönüş, hover'da dönme YOK.

## P2-A — DUR NOKTASI (CD ölçü kilidi)
P2-A çıktıları:
- `docs/qa/P2A-1280.png` (Ürünler section tam, hero altı), `P2A-1280-carousel-crop.png` (sadece sahne, 1280×~520), `P2A-1280-state-brokers.png` (Broker's Brain merkezde), `P2A-375.png`, `P2A-375-carousel-crop.png`.
- `docs/design/P2A-OLCU-ONERISI.md`: G3/G4'te kullanılan **gerçek** değerler tablo halinde (kart px, rotateY, translateX/Z, opacity, görünür yan kart px, boşluk, mobil kart genişliği, peek, gap). Değer değiştirildiyse neden.
- `RAPOR-P2A.md` kısa: tsc/build/lint çıktısı, mobil Lighthouse ×3 medyan + CLS (kapı P2-A'da da geçerli, ≥95 / ≤0.02), LCP elementi hâlâ kafa mı.
- **P2-B'ye geçme.** PROJECT-STATE.md: "P2-A CD-ÖLÇÜ-KİLİDİ-BEKLİYOR".

## P2-B — CD kararıyla bitirme (ayrı talimatla başlar)
- CD'nin ölçü revizyonları uygulanır; `P2B-*` screenshot'ları; `RAPOR-P2.md`; PROJECT-STATE.md güncel; DESIGN-LOCK v0.3 Ürünler bölümü Claude (Delivery Lead) yazar.

## Kapı (her aşama)
- `tsc`/`build`/`lint` exit 0, yeni uyarı yok.
- Mobil Lighthouse ×3 medyan ≥95, CLS ≤0.02. Lighthouse `.html` raporları commit'lenmez — sadece `.json` (`docs/perf/gate-p2a-*.json`); `.html` `docs/perf/.gitignore`'a eklenir.
- Hero LCP bütçesi: Ürünler görselleri `loading="lazy"`, hero LCP'sini geciktirmeyecek; LCP hâlâ kafa görseli.
- `_legacy/` dokunulmaz; P1 dosyaları dokunulmaz.
