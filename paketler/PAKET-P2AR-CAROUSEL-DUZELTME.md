# PAKET-P2AR-CAROUSEL-DUZELTME — P2-A revizyonu (görsel + performans)

> Taban: P2-A çalışma ağacı (commit'lenmedi). Otorite: `docs/design/approved/homepage-v1.png` Ürünler bölümü + PAKET-P2 kısıtları (sonsuz loop yok, otomatik kaydırma yok, JS kütüphanesi yok, P1 kilidi).
> P2-A'daki ölçülerin bir kısmı Delivery Lead hatasıydı (yan kart konumu, mobil peek). Bu paket ölçüleri referansa göre düzeltir, ardından CD ölçü kilidi istenir.
> Yine DUR noktalı: P2A-R çıktıları CD'ye gider, P2-B başlamaz.

## A. GÖRSEL DÜZELTMELER

### A1 — Yan kartlar sahne içinde kalsın
- Sahne: container 1280 içi, `overflow: visible` ama kartların hiçbir pikseli 24px yatay padding dışına çıkmayacak. `index.tsx`'teki `overflow-x-hidden` sayfa köküne kalabilir (güvenlik), ama ona **ihtiyaç kalmaması** hedef — kalıyorsa raporda belirt.
- Yeni değerler (referanstan: yan kart görünür genişliği ≈ 270px @1280, sol kenardan ≈ 50px):
  - Merkez: 560×320 (değişmedi).
  - Yan: **440×280**, `rotateY(∓30deg) translateX(∓395px) translateZ(-200px)`, `transform-origin` merkez. Perspektifle projekte edilmiş dış kenar ≤ 1256px (1280-24) olacak; hesapla, uymuyorsa `translateX`'i 10px adımlarla azalt ve **gerçek** değeri raporla.
  - Gizli slot: `translateX(∓760px) translateZ(-400px)` opacity 0 (görünmez, ama taşma yaratmayacak: `contain: paint` sahne kapsayıcısında).
- Yan kart içeriği: başlık + açıklama + CTA kartın **içinde** ortalanmış kalır (kesilmez); padding 32px.

### A2 — Yan kartlar okunsun (referans: koyu cam panel, mavi kenarlık, metin okunur)
- Yan kart: opacity **.9**, `filter: brightness(.9)`; kart zemini `rgba(14,22,44,.85)`, kenarlık `1px rgba(90,130,255,.28)`; başlık beyaz 22px 300; açıklama secondary 14px.
- Merkez kart: zemin `rgba(12,18,36,.92)`, kenarlık `1px rgba(90,130,255,.45)`, dış glow `0 0 40px rgba(47,123,255,.12)` (referansta merkez kart hafif ışıklı).
- Fark hâlâ 3 boyutta okunur olmalı: ölçek (.79), açı (30°), parlaklık/glow. Opaklıkla değil, glow+açıyla ayır.

### A3 — Yer yansıması KALDIR
- Ayna kopya tamamen çıkar. Yerine sahnenin altında tek `div`: 1280×120, `background: radial-gradient(ellipse 60% 100% at 50% 0%, rgba(47,123,255,.10), transparent 70%)` — referanstaki zemin parlaması. JS yok, ekstra DOM 1 eleman.

### A4 — Başlık satırı + boşluklar (referans oranları)
- H2 `max-width: 440px`, 34px → 2 satır ("İşinizi geleceğe taşıyan / dijital sistemler."). Hâlâ 3 satırsa 32px.
- Başlık satırı → sahne üst kenarı: **64px** (şu an ~130). Sahne yüksekliği 400px. Sahne altı parlama 120px → sonraki section'a 48px.
- Section toplam yüksekliği referansa yakın olmalı: ≈ 640–700px @1280.

### A5 — Section arası çizgiler
- Placeholder section'lardaki `border-t`/`border-b` kaldır (LOCK "Genel": section'lar arasında çizgi YOK). Sadece boşluk.

### A6 — Mobil peek + görünürlük
- Kart genişliği `calc(100vw - 88px)` (375'te 287 → peek 28px). Gap 16, kenar padding 24 kalır. Son kart sonrası spacer 28px.
- Pasif kart opacity **.75** / scale .94 (.6 karanlıkta kayboluyor). Pasif kartın kenarlığı görünür kalsın.
- Aktif kart görselinin kart altından taşmasına mobilde gerek yok; görsel kart içinde, alt padding 24px, kırpılmasın (`object-fit: contain` veya sabit oran 16:9).

### A7 — Merkez kart görseli (desktop)
- Görsel kartın alt kenarından 24px taşacak (brief), `overflow: visible` merkez kartta; görsel 480×~200, radius 8px, `box-shadow 0 20px 40px rgba(0,0,0,.5)`. Kırpılmış dashboard şu an kartın içinde kesiliyor.

## B. PERFORMANS (hedef: mobil medyan ≥95 geri)

Sıra önemli; her adımdan sonra 3 koşum ölç, tabloya yaz. Hedef tutunca kalan adımları atla.

### B0 — Taban doğrulama
- `git stash` YOK (git yasak). Bunun yerine `Products` render'ını geçici olarak `null` yap, 3 koşum ölç → medyan 95 civarı olmalı (P2-A raporunda 95'ti). Bu taban; sonra geri aç.
- Her ölçüm: `next build` + `next start`, yeni Chrome profili (`--user-data-dir` geçici), sistemde başka node/chrome yok.

### B1 — `next/dynamic` KALDIR
- `Products` normal import; SSR markup ana HTML'de. Dynamic chunk fetch'i hero LCP ile ağ/CPU'da yarışıyor; below-fold için ayrı chunk kazanç değil kayıp.

### B2 — `content-visibility: auto`
- `<section id="urunler">` ve tüm placeholder section'lara: `content-visibility: auto; contain-intrinsic-size: auto 700px` (mobil 900px). Tarayıcı fold-altını LCP öncesi layout/paint etmez. CLS için `contain-intrinsic-size` gerçek yüksekliğe yakın olmalı — ölç, yaz.
- Reveal `IntersectionObserver`'ı bununla çakışmasın: reveal class'ı `content-visibility` içindeki elemanlara değil section'ın kendisine bağlı kalsın.

### B3 — Efektleri boşta zamana ertele
- `Products.tsx` / `ProductRailMobile.tsx` içindeki tüm `useEffect` (IO kurulumu, listener'lar) `requestIdleCallback` (fallback `setTimeout 200`) içinde başlasın. Hydration'da senkron iş sıfıra yakın.
- Desktop sahne mobilde DOM'da hydrate edilmesin: `useEffect` içinde `matchMedia('(min-width:1024px)')` ile `mounted && isDesktop` koşuluyla render; SSR'da desktop sahne **statik** markup olarak (state'siz, `activeIndex=1` sabit) basılır ki HTML'de görünsün, hydrate sonrası interaktif versiyon yerine geçer. Mismatch uyarısı olmayacak (aynı markup).

### B4 — Hâlâ <95 ise
- Rail'deki `IntersectionObserver` yerine `scrollend` event + `scrollLeft` hesabı (tek listener, passive).
- 3D sahne `will-change` yok; `transform` tek katman; `filter` kaldır (brightness yerine overlay `::after` ile karartma).
- Bunlar da yetmezse DUR, metrik tablosuyla (FCP/LCP/TBT/SI her adım) raporla; ben CD'yle "kabul/basitleştir" kararına giderim.

## Çıktılar
- `docs/qa/P2AR-1280.png`, `P2AR-1280-carousel-crop.png`, `P2AR-1280-state-brokers.png`, `P2AR-375.png`, `P2AR-375-carousel-crop.png` (kod değişikliği bittikten SONRA, prod build'den).
- `docs/design/P2A-OLCU-ONERISI.md` üzerine yaz (gerçek yeni değerler; "peek 28px doğrulandı: ölçülen X px").
- `RAPOR-P2AR.md`: A1–A7 yapıldı/nasıl; B tablosu (adım → 3 koşum → medyan, TBT, LCP, SI, CLS); hangi adımda hedefe ulaşıldı.
- `PROJECT-STATE.md`: "P2A-R tamam, CD ölçü kilidi bekliyor" / ya da "perf B4 sonrası hâlâ X, karar bekliyor".
- Lighthouse yalnızca `.json` (`docs/perf/P2AR-*.json`).

## Kapı
tsc/build/lint 0, yeni uyarı yok · mobil ×3 medyan ≥95, CLS ≤0.02, LCP = kafa · yatay scrollbar yok (1280/375) · P1 dosyaları ve `_legacy/` dokunulmadı.
