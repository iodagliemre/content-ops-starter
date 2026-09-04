# RAPOR-P1 — Doğrulama Çıktıları (PAKET-01)

> Anlatı/gerekçe için bkz. `RAPOR-P01.md`; Performance Gate'in tam yolculuğu için
> `docs/perf/GATE-1-hero.md`. Bu dosya sadece ham komut çıktıları + sonuç özeti.

## tsc

```
$ npx tsc --noEmit; echo "exit: $?"
exit: 0
```

## build

```
$ npm run build; echo "exit: $?"

> content-ops-starter@0.1.0 build
> next build

  ▲ Next.js 14.2.15

   Linting and checking validity of types ...

./src/components/blocks/ImageBlock/index.tsx
27:13  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. @next/next/no-img-element

./src/components/HomePageV2/Nav.tsx
22:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. @next/next/no-img-element
23:21  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. @next/next/no-img-element

./src/components/sections/PhasesSection/index.tsx
64:41  Warning: Using `<img>` could result in slower LCP and higher bandwidth. Consider using `<Image />` from `next/image` to automatically optimize images. @next/next/no-img-element

 ✓ Compiled successfully
   Generating static pages (21/21)

Route (pages)                                  Size     First Load JS
┌   /_app                                      0 B              80 kB
├ ● /[[...slug]]                               11.4 kB        91.5 kB
├   ├ /clinic, /brokers-brain, /privacy, /signup, /pricing, /careers, /blog + 10 yazı
├ ○ /404                                       180 B          80.2 kB
└ ƒ /api/reindex                               0 B              80 kB
+ First Load JS shared by all                  91.8 kB

exit: 0
```

3 uyarı **beklenen/kasıtlı**: `Nav.tsx`'in 2 uyarısı logo mark+wordmark'ın `<img>` ile
kullanılması gereğinden (gradyan id çakışmasını önlemek için — bkz. RAPOR-P01.md G1);
`ImageBlock`/`PhasesSection` uyarıları bu paketten önce de vardı, dokunulmadı. Hepsi
`Warning`, `Error` değil — build'i kırmıyor.

## lint

```
$ npm run lint; echo "exit: $?"

> content-ops-starter@0.1.0 lint
> next lint

(yukarıdaki 3 uyarıyla aynı çıktı)

exit: 0
```

## Lighthouse (Performance Gate)

3x mobil + 3x masaüstü, `--throttling-method=simulate`, medyan alındı. Ham raporlar:
`docs/perf/gate-1-{mobile,desktop}-{1,2,3}.report.{json,html}`.

| Form factor | Koşumlar | Medyan | Şart | Sonuç |
|---|---|---|---|---|
| **Mobil — Performance** | 99, 95, 95 | **95** | ≥95 | ✅ |
| **Mobil — CLS** | 0, 0, 0 | **0** | ≤0.02 | ✅ |
| Masaüstü — Performance (bilgi amaçlı) | 84, 86, 86 | 86 | — | — |
| Masaüstü — CLS | 0, 0, 0 | 0 | — | — |

**Kapı: GEÇTİ** (mobil ≥95 ve CLS ≤0.02, ikisi de sağlandı).

## Sapma notu

G4'ün motion tablosu kafa katmanı için `opacity 0→1 + scale + blur` istiyordu. İlk ölçümde
Lighthouse `NO_LCP` hatası verdi (performance score hesaplanamadı) — kök neden: Chrome,
`opacity:0`'dan başlayıp saf compositor animasyonuyla (repaint tetiklemeden) 1'e çıkan bir
elemanı LCP adayı olarak hiç saymıyor. Gerçek LCP adayı (kafa görseli) bu yüzden hiç
ölçülmüyor, sayfa küçük nav logosuna düşüyordu.

**Düzeltme**: kafa katmanı animasyonundan `opacity` çıkarıldı (blur de sonradan kaldırıldı,
sadece `scale .96→1` kaldı). Element artık ilk karadan itibaren `opacity:1`. Bu, spec'ten
gerekli/ölçümle zorunlu kılınmış tek sapma — CD onayına açık, bkz. PROJECT-STATE.md karar #9
ve `docs/perf/GATE-1-hero.md`.

Başka sapma yok — nav/hero yapısı, metin, breakpoint davranışı G1-G3 ile birebir.
