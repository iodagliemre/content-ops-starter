# RAPOR-P2A — PAKET-P2-URUNLER-CAROUSEL, Faz A (Ürünler bölümü)

> Kapsam: brief'in G1-G5 maddeleri (bölüm başlığı/açıklama, masaüstü 3D kart sahnesi, mobil
> scroll-snap rail, section-girişi fadeUp). **P2-A DUR noktasında durdu — P2-B'ye geçilmedi**
> (kullanıcı talimatı, iki kez tekrarlandı).

## Yapılanlar

- `content/products.ts` — bölüm metni (eyebrow/heading/description/CTA) + 4 ürün kaydı
  (Broker's Brain, Clinic OS, OSGB Web, TurkISG AI). TurkISG AI TR metni Emre onaylı (05.09.2026).
- `src/components/HomePageV2/ProductStageDesktop.tsx` — masaüstü (≥1024px) 3D kart sahnesi, saf
  CSS transform (`perspective`/`rotateY`/`translateX`/`translateZ`), JS kütüphanesi yok.
- `src/components/HomePageV2/ProductRailMobile.tsx` — mobil (<1024px) `scroll-snap` rail,
  `IntersectionObserver` ile aktif kart algılama, ok tuşlarıyla klavye navigasyonu.
- `src/components/HomePageV2/Products.tsx` — bölüm sarmalayıcı, başlık, ok butonları,
  `IntersectionObserver` tabanlı tek seferlik `.v2-reveal` girişi (G5).
- `src/css/main.css` — `.v2-reveal`, `.v2-product-card`, `.v2-product-card-mobile`, rail
  scrollbar gizleme; hepsi `prefers-reduced-motion: reduce` altında `transition-duration: 0`.
- `public/products/*.webp` — 4 kart görseli (Clinic OS: onaylı referans görselden gerçek kırpım;
  diğer 3: placeholder, hepsi <10KB).
- `src/components/HomePageV2/Nav.tsx` — İletişim pilleri (masaüstü + mobil overlay) artık
  `https://cal.com/emre-dagli-ffwxpr/doveify-demo`'ya gidiyor (`target="_blank"`), `#iletisim`
  yerine.
- `src/components/HomePageV2/index.tsx` — `overflow-x-hidden` eklendi (bkz. "Hata kaydı").
  `Products`, `next/dynamic` ile ayrı chunk'a bölündü (below-the-fold, performans gerekçesi
  aşağıda).

## Hata kaydı

**Yatay taşma**: masaüstü sahnenin "4. kart" (gizli) slotu `translateX(±900px)` kullanıyor —
sayfanın `scrollWidth`'i `clientWidth`'i aşıyor, yatay scrollbar çıkıyordu. Çözüm: kırpma
carousel'in kendi kutusunda değil, sayfanın en dış `<div>`'inde (`overflow-x-hidden`) — böylece
yer yansımasının (ground reflection) veya yan kartların hafif taşan gölge/genişliği kırpılmıyor.

## Performans — bekleyen karar (ÖNEMLİ)

Brief'in kapısı: **mobil Lighthouse medyan ≥95, CLS ≤0.02**. P1-R taban çizgisi buydu (medyan 95).
Ürünler bölümü eklendikten sonra bu kapı **tutturulamadı** — aşağıda tüm yolculuk, dürüst şekilde:

### Gözlem

Ürünler bölümü eklenir eklenmez mobil medyan ~86-88'e (bazı koşumlarda daha da düşük) düştü.
LCP elementi HER koşumda doğru kaldı (hero kafa görseli — Ürünler'e hiç kaymadı), CLS **0**
kaldı her koşumda. Yani bu **doğruluk hatası değil, saf zamanlama regresyonu**: TBT (Total
Blocking Time) ~0-7ms'den ~110-280ms'ye çıktı, LCP "Render Delay" fazı ~57%'den ~87%'ye çıktı.

### Denenen düzeltmeler (sırayla)

1. **`next/image` → düz `<img loading="lazy">`** (tüm ürün görselleri, hem masaüstü hem mobil):
   gerekçe, mobil rail'de 4 kart koşulsuz DOM'da (native scroll-snap için hepsi gerekli) —
   4 ayrı `next/image` instance'ının init/effect maliyeti, bu boyuttaki (2-6KB) placeholder'lar
   için gereksiz. **Sonuç: marjinal iyileşme, tek başına yetersiz.**
2. **`ProductStageDesktop`'ı tek başına devre dışı bırakma testi**: skoru neredeyse hiç
   değiştirmedi — bu, ana sebep olmadığını gösterdi (zaten mobilde `hidden lg:block` ile
   `display:none`).
3. **`next/dynamic()` ile `Products` bileşenini ayrı chunk'a bölme**: ana bundle 13.9kB→11.6kB
   düştü ama Lighthouse skoru değişmedi (medyan ~87 kaldı).
4. **Ortam temizliği**: oturum boyunca birikmiş 31 başıboş `chrome.exe` + 11 başıboş `node.exe`
   process'i temizlendi (`Get-Process ... | Stop-Process -Force`, aktif sunucu PID'i korunarak).
   Regresyon TEMİZ sistemde de aynen sürdü — yani başıboş process kirliliği açıklama değil
   (ama bu ortamda koşumlar arası varyansın gerçek ve yüksek olduğu ayrıca doğrulandı, bkz. altı).
5. **İzolasyon testi — her iki carousel de devre dışı** (yalnızca başlık render): 3 koşum
   `{86, 96, 95}` — medyan **95**, yani P1-R tabanına yakın. Bu, Ürünler bölümünün (özellikle
   mobilde gerçekten layout'a giren `ProductRailMobile`, masaüstü sahnesi mobilde zaten
   `display:none`) regresyonun asıl/ağırlıklı sebebi olduğunu doğruluyor.
6. **Gizli slot içerik kırpması** (`ProductStageDesktop.tsx`): masaüstü sahnede her zaman 1 kart
   `translateX(±900px)`'de, tamamen görünmez ama önceden başlık/açıklama/CTA/görsel ile birlikte
   render ediliyordu. P2-A'da bu slot için içerik tamamen kaldırıldı, sadece boş
   `visibility:hidden` kutu kalıyor. **Sonuç, hem carousel'ler geri açılıp hem bu kırpma
   uygulanınca**: 3 koşumdan 2'si `{87, 87}` (1'i `NO_LCP` hatasıyla düştü — ortamın bilinen
   arıza modu, aşağıda not). Yani **iyileşme yok/marjinal** — asıl ağırlık masaüstü sahnede değil.
7. **Mobil `IntersectionObserver` eşiklerini sadeleştirme** (`ProductRailMobile.tsx`):
   `threshold: [0.25, 0.5, 0.75, 0.9]` → tek değer `threshold: 0.6` (G4'ün tek işlevsel ihtiyacı
   "hangi kart en görünür" — tek eşik yeterli, callback churn'ünü azaltır). **Sonuç**: 3 koşum
   `{85, 83, 84}`, medyan **84** — istatistiksel olarak önceki (87) ile aynı aralıkta, iyileşme
   **doğrulanamadı**. Bu test öncesi ortam yeniden kontrol edildi: 0 başıboş `chrome.exe`, tek bir
   ilgisiz düşük-CPU `node.exe` — yani sonuç ortam kirliliğiyle açıklanmıyor.

### Sonuç ve bekleyen karar

Ürünler bölümü (iki carousel bileşeni birlikte) mobilde gerçek, tekrarlanabilir bir performans
maliyeti taşıyor — temiz ortamda bile medyan **~84-87** aralığında kalıyor, hedef **≥95**'in
altında. Uygulanan optimizasyonlar (düz `<img>`, `next/dynamic` bölme, gizli-slot içerik
kırpması, `IntersectionObserver` eşik sadeleştirmesi) gerçek ve gerekçeli iyileştirmeler ama
tek başlarına veya birlikte hedefi tutturmaya yetmedi. Bu ortamın kendisi de (aynı kod üzerinde
83-96 arası tek koşumluk sıçramalar görüldü) ölçüm gürültüsü taşıyor — tek bir sayının ne kadar
güvenilir olduğu sınırlı.

Brief'in "Karar gerektiren şey: durdur, RAPOR'a yaz, sonrakine geç" ilkesi gereği burada
duruyorum — sayıyı gizlemek veya gerçekçi olmayan bir ölçüm ortamı arayarak "geçti" göstermek
yerine gerçek son durumu bildiriyorum. Emre/CD için üç seçenek:

1. Mevcut mobil performansı (~84-87 medyan) P2-A için kabul et, daha zengin below-the-fold
   Ürünler deneyiminin bilinçli maliyeti say; ileri optimizasyon ayrı bir performans paketine
   bıraksın.
2. Bu paket kapsamında daha köklü müdahale iste — örn. yer yansımasını kaldır (brief zaten
   "maliyetli çıkarsa ilk kaldırılacak öğe" diyor, bkz. `ProductStageDesktop.tsx` yorum), 3D
   sahneyi 2D/opacity tabanlı basitleştir, ya da bölüm mount'unu görünürlüğe kadar tamamen
   ertele (bu son seçenek gerçek kullanıcı CLS riski taşır, CLAUDE.md'nin "CLS ≈0" ilkesiyle
   gerilir — önerilmiyor, sadece seçenek olarak not).
3. Bu yerel Windows ortamının ölçüm güvenilirliğini sorgula (aynı kodda 83-96 arası tek-koşum
   sıçramaları görüldü) — CI tabanlı bir Lighthouse ölçümüyle (örn. Lighthouse CI, GitHub
   Actions) yeniden doğrula, kararı ona göre ver.

### Ham veriler

`docs/perf/P2A-gate-{1,2,3}.report.json` (carousel'ler geri + gizli-slot kırpması, IO eşiği
henüz eski): `{87, NO_LCP-hata, 87}`, TBT 110-175ms, LCP 3512-3707ms, CLS 0.
`docs/perf/P2A-gate2-{1,2,3}.report.json` (+ IO eşik sadeleştirmesi): `{85, 83, 84}`,
TBT 236-283ms, LCP 3453-3695ms, CLS 0. `docs/perf/*.report.html` `.gitignore`'da (yalnız JSON
commit'lenir).

**NO_LCP hatası notu**: bu ortamda tekrar eden, bilinen bir ölçüm arızası (PAKET-01/P1R'de de
görülmüştü) — Chrome trace'i bazen LCP hesaplaması için yetersiz kalıyor, kodla ilgisi yok.

## Ölçü önerisi

Gerçek uygulanan px/derece/opacity değerleri ve mobil "peek" ölçüsündeki brief-tutarsızlığı için
bkz. `docs/design/P2A-OLCU-ONERISI.md` (CD kilidi bekliyor).

## Kapı

```
$ npx tsc --noEmit; echo "exit: $?"
exit: 0

$ npm run build; echo "exit: $?"
... (aynı 3 önceden var olan @next/next/no-img-element uyarısı — ImageBlock, Nav, PhasesSection;
     yeni ürün görselleri eslint-disable ile bilinçli olarak düz <img>, ayrıca bkz. yukarı)
 ✓ Compiled successfully
 ✓ Generating static pages (21/21)
exit: 0

$ npm run lint; echo "exit: $?"
(aynı 3 uyarı, yeni uyarı yok)
exit: 0
```

**Lighthouse (mobil, ≥95 hedef): GEÇMEDİ.** Medyan ~84-87 (yukarıdaki iki koşum setinden).
CLS: 0 (geçti). LCP elementi: doğru (hero kafa görseli, hiç değişmedi).

## Ekran görüntüleri

`docs/qa/P2A-1280.png`, `P2A-1280-carousel-crop.png`, `P2A-1280-state-brokers.png`,
`P2A-375.png`, `P2A-375-carousel-crop.png` — performans hata ayıklaması sırasında yapılan kod
değişiklikleri (next/image→img, dynamic split, gizli-slot kırpması, IO eşiği) görsel çıktıyı
etkilemiyor (DOM içerik/stil aynı, sadece hangi elementin render edildiği/nasıl algılandığı
değişti); ekran görüntüleri kod değişikliklerinden ÖNCE çekildi ama tarayıcıda manuel doğrulama
(1280 masaüstü sahne + 375 mobil rail, her ikisi de üretim sunucusunda canlı kontrol edildi)
sonucu bu ekran görüntülerinin hâlâ geçerli olduğu teyit edildi.

## Bekleyen kararlar (özet)

1. **Performans** (yukarıda detaylı) — mobil medyan ~84-87, hedef ≥95 tutturulamadı.
2. **Mobil "peek" ölçüsü** — brief formülü (`calc(100vw - 72px)` + 16px gap) 28px hedef peek
   yerine ~20px veriyor; detay `docs/design/P2A-OLCU-ONERISI.md`.
3. Yer yansımasının (ground reflection) kalıp kalmayacağı — brief zaten "maliyetli çıkarsa ilk
   kaldırılacak öğe" diyor; performans kararına bağlı.

## Dosya listesi

**Yeni:** `content/products.ts`, `src/components/HomePageV2/ProductStageDesktop.tsx`,
`ProductRailMobile.tsx`, `Products.tsx`, `public/products/{brokers-brain,clinic-os,osgb-web,
turkisg-ai}.webp`, `docs/perf/.gitignore`, `docs/perf/P2A-gate-{1,2,3}.report.json`,
`docs/perf/P2A-gate2-{1,2,3}.report.json`, `docs/design/P2A-OLCU-ONERISI.md`,
`docs/qa/P2A-1280.png`, `P2A-1280-carousel-crop.png`, `P2A-1280-state-brokers.png`,
`P2A-375.png`, `P2A-375-carousel-crop.png`, `paketler/PAKET-P2-URUNLER-CAROUSEL.md`,
`RAPOR-P2A.md`.

**Değişti:** `src/components/HomePageV2/index.tsx` (`overflow-x-hidden`, `Products` dynamic
import), `src/components/HomePageV2/Nav.tsx` (İletişim → cal.com), `src/css/main.css` (P2 CSS
kuralları), `content/site.ts` (eski `products` anahtarı kaldırıldı, `content/products.ts`'e
yönlendirme yorumu eklendi).

**Dokunulmadı:** `DESIGN-LOCK.md`, `docs/design/approved/`, nav/hero (P1/P1-R kilitleri),
placeholder section'lar (Web Factory, Dijital Dönüşüm, Sahiplik, Çalışmalar, İletişim —
kapsam dışı, P2-B ve sonrası).
