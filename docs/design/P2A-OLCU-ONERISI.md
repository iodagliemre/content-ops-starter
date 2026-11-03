# P2-A — Ölçü Önerisi (CD Kilidi Bekliyor)

Bu doküman `PAKET-P2-URUNLER-CAROUSEL.md` G3/G4'ün P2-A'da uygulanan gerçek ölçülerini listeler.
Değerler kodda (`ProductStageDesktop.tsx`, `ProductRailMobile.tsx`) sabit; CD onayı sonrası
burada "KİLİTLİ" olarak işaretlenecek, değişirse hem kod hem bu doküman güncellenecek.

## Desktop 3D Sahne (`ProductStageDesktop.tsx`, ≥1024px)

| Parametre | Merkez kart | Yan kart (±1) | Gizli slot (±2+) |
|---|---|---|---|
| Genişlik | 560px | 480px | 480px (içerik yok) |
| Yükseklik | 320px | 288px | 288px |
| `translateX` | 0 | ∓470px | ∓900px |
| `translateZ` | 0 | -180px | -360px |
| `rotateY` | 0° | ∓28° | ∓28° |
| `opacity` | 1 | 0.72 | 0 |
| `filter` | none | brightness(.85) | brightness(.85) |
| `z-index` | 30 | 20 | 10 |

- `perspective: 1400px`, `perspective-origin: 50% 40%` (sahne kapsayıcısında).
- Sahne yüksekliği: 440px (kapsayıcı `h-[440px]`).
- Geçiş: `.v2-product-card` → 0.55s `cubic-bezier(0.22, 0.61, 0.36, 1)` (transform/opacity/filter); `prefers-reduced-motion: reduce` → 0s.
- Yer yansıması (ground reflection): dekoratif, `opacity: .3`, `scaleY(-1)`, yükseklik 80px, alt kenardan `linear-gradient` mask ile soluklaştırma. Maliyetli çıkarsa ilk kaldırılacak öğe (bkz. RAPOR-P2A.md).
- Gizli slot (offset ±2 ve ötesi): P2-A optimizasyonunda başlık/açıklama/CTA/görsel render edilmiyor — sadece boş, `visibility:hidden` bir kutu (layout/paint maliyetini düşürmek için, bkz. RAPOR-P2A.md "Performans" bölümü).

## Mobil Rail (`ProductRailMobile.tsx`, <1024px)

| Parametre | Değer |
|---|---|
| Kart genişliği | `calc(100vw - 72px)` |
| Kart-arası boşluk (`gap`) | 16px |
| Kenar boşluğu (`px-6` = 24px sol/sağ) | 24px |
| Son kart sonrası spacer | `calc(36px - 8px)` = 28px |
| Aktif kart `opacity` / `transform` | 1 / `scale(1)` |
| Pasif kart `opacity` / `transform` | 0.6 / `scale(.94)` |
| Geçiş | 0.3s `ease-out` (transform/opacity); reduced-motion → 0s |
| Scroll snap | `snap-x snap-mandatory`, kart `snap-center` |
| Aktif kart algılama | `IntersectionObserver`, `threshold: 0.6` (P2-A'da 4 eşikten teke düşürüldü, bkz. RAPOR-P2A.md) |

### Brief ile ölçülen fark — CD'ye not

Brief'in "ÖNERİ ÖLÇÜLER" bölümü mobilde 24px kenar boşluğu + 16px gap + 28px "peek" (bir sonraki
kartın görünen payı) hedefliyordu. Ekranda gerçek peek ölçümü **~20px** çıkıyor:

```
kart genişliği = 100vw - 72px  (24px sol kenar + 24px sağ kenar + 24px "peek payı" varsayımıyla türetilmiş görünüyor)
peek = viewport_genişliği - kenar_boşluğu - kart_genişliği - gap
     = 100vw - 24px - (100vw - 72px) - 16px
     = 72px - 24px - 16px = 32px  (tek taraf değil, iki taraf toplamı)
```

Tek kenardaki gerçek görünür payı ölçtüğümüzde (375px viewport'ta puppeteer ile) ~20px çıkıyor —
brief'in "28px peek" hedefiyle birebir örtüşmüyor. Formül (`100vw - 72px`) ile 16px gap birlikte
28px'lik tek-taraf peek'i matematiksel olarak vermiyor; P2-A bu tutarsızlığı olduğu gibi
(brief'teki `calc(100vw - 72px)` formülünü birebir uygulayarak) bıraktı, düzeltmedi.

**Bekleyen karar:** CD, 20px'lik mevcut peek'i mi onaylıyor, yoksa formülü 28px'e denk gelecek
şekilde mi (`calc(100vw - 88px)` gibi) revize ediyor? P2-A bu kararı beklemeden brief'in
formülünü aynen uyguladı; iki seçenek de tek satırlık bir sabit değişikliği.

## Renk / kart gövdesi (her iki breakpoint)

- Kart arka planı: `rgba(10,16,32,.7)`
- Kenarlık: `border-v2-border` (1px)
- İç gölge: `inset 0 1px 0 rgba(255,255,255,.06)`
- Köşe yuvarlama: `rounded-xl`
