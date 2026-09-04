# GATE-1-hero.md — Performance Gate sonucu (PAKET-01)

> Ölçüm: `npm run build` → `npm run start` (port 3000) → `lighthouse --preset=perf
> --throttling-method=simulate`, her form-factor için 3 koşum, medyan alındı.
> Chrome: sistemdeki Google Chrome (`--headless --no-sandbox --disable-gpu`).
> Ham raporlar bu klasörde: `gate-1-mobile-{1,2,3}.report.{json,html}`,
> `gate-1-desktop-{1,2,3}.report.{json,html}`.

## Sonuç: GEÇTİ ✅

| Form factor | Performance (medyan) | LCP (medyan) | CLS (medyan) | TBT (medyan) |
|---|---|---|---|---|
| **Mobil** | **95** (99, 95, 95) | 2871 ms | 0 | 0 ms |
| Masaüstü (bilgi amaçlı, kapı değil) | 86 (84, 86, 86) | 2575 ms | 0 | 44.5 ms |

Kapı şartı "Mobil Lighthouse ≥95, CLS ≤0.02" → **95 ≥ 95 ✅, CLS 0 ≤ 0.02 ✅**. Sınırda
geçti (3 koşumdan biri 99, ikisi 95) — G5.4'ün istediği gibi 3 kez koşulup medyan alındı, tek
seferlik iyi bir sonuca güvenilmedi.

## Yolculuk: NO_LCP hatasından 95'e

İlk koşumda Lighthouse **`NO_LCP`** hatası verdi (performance score: `null`, hesaplanamadı).
Kök neden ölçümle bulundu (spekülasyon değil):

1. `--throttling-method=devtools` (gerçek, simüle-olmayan koşum) ile tekrar denendiğinde LCP
   elemanı **nav'daki 120×16px wordmark logosu** çıktı — sayfanın en büyük içeriği (hero kafa
   görseli) değil.
2. Sebep: G4'ün motion tablosu kafa katmanları için `opacity 0→1` istiyordu. Chrome, bir
   eleman `opacity:0` iken yaptığı paint'i LCP adayı saymıyor; `animation-fill-mode:both` ile
   opacity 0'dan başlayıp saf compositor-taraflı (repaint tetiklemeyen) bir animasyonla 1'e
   çıkan bir eleman, tarayıcı tarafından hiç "yeniden LCP adayı" olarak değerlendirilmiyor.
   Sonuç: gerçek LCP adayı (kafa görseli) hiç sayılmadı, sayfa küçük wordmark'a düştü, Lantern
   (simüle motoru) bunu tutarsız bulup `NO_LCP` fırlattı.
3. **Düzeltme**: `.v2-hero-head-layer` animasyonundan `opacity` tamamen çıkarıldı (scale+blur
   kaldı, sonra sadece scale — aşağı bkz). Element artık ilk frame'den itibaren `opacity:1`
   (G4 tablosundan bu noktada sapma — bkz. `src/css/main.css`'teki kod içi not ve
   RAPOR-P01.md). Bu tek değişiklik NO_LCP'yi giderdi ve LCP doğru elemana (kafa görseli)
   bağlandı.

Bu, PAKET-01 G5.6'nın listelediği (a)-(d) adımlarının HİÇBİRİ değil — o liste görsel/animasyon
*ince ayarını* varsayıyordu, ölçümün kendisinin hiç çalışmamasını değil. Kendi başına
5. adım olarak buraya ve RAPOR-P01.md'ye not düşüldü.

## G5.6 remediation denemeleri (opacity düzeltmesinden SONRA, 94→95 için)

Opacity düzeltmesiyle ölçüm çalışır hale geldi ama ilk 3xmobil medyan **94** çıktı (95 eşiğinin
1 puan altı). Sırayla denendi:

| Adım | Değişiklik | Ölçülen etki |
|---|---|---|
| (c) blur kaldır | `filter: blur(6px→0)` kafa animasyonundan çıkarıldı, sadece `scale` kaldı | Ölçülemedi — `--throttling-method=simulate` (Lantern) CSS paint/compositing maliyetini modellemiyor, sadece kaynak (network+CPU) grafiğini simüle ediyor |
| (a) kalite 78→65 | Python tarafında webp kalitesi düşürüldü | **İlk denemede ölçülemedi** — sebebi bulundu: `next/image` kaynağı KENDİ `q=75` varsayılanıyla yeniden kodluyor, benim dosya kalitem hiç dikkate alınmıyordu |
| (a) düzeltilmiş | `<Image quality={65}>` prop'u eklendi (next/image'ın gerçek kalite kontrolü) | Gerçek byte azalması sağlandı (mobil ~62KB→~37KB) |
| (b) mobil görsel 800→640px | Python'da yeniden export | Gerçek boyut azalması |

**Önemli not**: (a) ve (b)'nin bu localhost ortamındaki ölçülebilir etkisi küçüktü çünkü yerel
sunucuda ağ transfer süresi zaten ihmal edilebilir düzeyde (localhost bant genişliği sonsuz
varsayılır); LCP'nin %58'i ("Render Delay") React hydration/JS execution maliyetinden geliyor,
bu da hero'ya özgü değil, tüm Next.js Pages Router uygulamasının temel maliyeti (framework.js +
main.js ≈ 77KB, her sayfada aynı). Yine de (a)+(b) **production'da CDN üzerinden gerçek fayda
sağlayacak** (daha küçük dosya = daha hızlı gerçek indirme), bu yüzden geri alınmadı.

Nihai 3x mobil koşum (tüm düzeltmeler sonrası) **99/95/95 → medyan 95** verdi — muhtemelen
run-to-run doğal varyans + (a)/(b)'nin küçük de olsa gerçek katkısı üst üste bindi. Sınırda ama
geçti; şartına göre 3 koşum + medyan zaten bu tür sınır durumları için isteniyordu.

## Diğer bulgular

- `render-blocking-resources`: boş (render'ı bloklayan kaynak yok).
- CLS her koşumda tam 0 — açık width/height (next/image `fill` + aspect-ratio'lu kapsayıcı,
  nav `h-20` sabit) CLS'yi tamamen önlüyor.
- TBT mobilde 0-7ms arası — ana thread bloklanmıyor.
- Masaüstü skoru (86) mobilden düşük — beklenen davranış değil, throttling farkı normal
  (masaüstü preset'i farklı bir Lighthouse skor eğrisi kullanıyor); kapı şartı değil, bilgi
  amaçlı.

## prefers-reduced-motion

Otomatik emülasyon aracı bu ortamda yoktu (Browser tool'da doğrudan bir "reduced motion"
toggle'ı yok); kod incelemesiyle doğrulandı: her animasyon sınıfının varsayılan (media
query'siz) hâli zaten "bitmiş" görünüm (`opacity:1`, `transform:none`, çizgi tam çizili) —
`animation` özelliği SADECE `@media (prefers-reduced-motion: no-preference)` içinde ekleniyor.
Bu yüzden reduce tercih edildiğinde hiçbir eleman gizli kalmaz, sadece animasyon oynamaz.
Gerçek tarayıcıda manuel doğrulama Faz 2/QA'da önerilir.

## Ekran görüntüleri

`docs/qa/P01-1280.png`, `docs/qa/P01-375.png` — animasyon bitmiş halde (CDP tabanlı,
`prefers-reduced-motion` uygulanmadan, gerçek 2.7s+ bekleme sonrası).
