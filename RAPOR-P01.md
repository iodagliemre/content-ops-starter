# RAPOR-P01 — Hero Prototipi + Performance Gate (P-GATE-1)

> Durum: **Kapı sayısal olarak geçti** (`tsc`/`build`/`lint` → 0, mobil Lighthouse medyan 95,
> CLS 0). FAZ-PLANI.md'nin resmi kapı şartı ("Emre 'geç' der") gereği nihai Faz 1 onayı Emre'de.

## Kapsam

Sadece nav + hero (PAKET-01'in istediği gibi). Diğer 6 section hâlâ placeholder
(`Ürünlerimiz`, `Web Factory`, `Dijital Dönüşüm`, `Sahiplik`, `Çalışmalar`, `İletişim`).

## Yapılan

### G1 — Nav
`src/components/HomePageV2/Nav.tsx`. Sol: `logo-mark.svg` (32px) + `logo-wordmark.svg` +
`Heartbeat` bileşeni (~64px), `<img>` ile (spec gereği — gradyan id çakışması). Sağ (≥1024px):
`content/site.ts`'nin `nav.primary`'sinden 5 link (anchor'lar `#urunler` / `#web-factory` /
`#donusum` / `#sahiplik` / `#calismalar`) + `nav.cta` ("İletişim") outline pill. <1024px:
hamburger → tam ekran overlay, aynı linkler. Nav `h-20` (5rem) sabit yükseklik — hero'nun
`min-h-[calc(100vh-5rem)]`'i buna göre hesaplanıyor, CLS'e katkısı yok.

**Düzeltme (bu paket sırasında)**: `logo-wordmark.svg`'nin `fill="currentColor"`'ı
`fill="#FFFFFF"` yapıldı — `<img>` ile yüklenen bir SVG, host sayfadan `currentColor`
miras alamıyor (izole doküman). P00'da bunu gözden kaçırmışım.

### G2 — Hero yapısı
`src/components/HomePageV2/Hero.tsx`. Grid: metin 5/12 (sol, ≥1024px), kafa 7/12 (sağ).
<1024px: kafa üstte (`order-first`, `HeroHead`'in `max-h-[42vh]`'i ile küçültülmüş), metin
altta (`order-last`), ≥1024px'te `lg:order-none` ile kaynak sıraya (metin-sol) dönüyor. Metin
`content/site.ts`'ten birebir: "DİJİTAL ZEKÂ." (beyaz) / "GERÇEK ETKİ." (`--color-v2-blue`) /
alt metin / heartbeat ayırıcı / 2 CTA (`ÜRÜNLERİMİZİ KEŞFET` dolu buton, `WEB FACTORY'Yİ İNCELE
→` metin link). Tüm görsellerde explicit width/height veya aspect-ratio (CLS önlemi).

### G3 — Kafa görseli
`docs/design/reference/homepage-ref-v1.png`'den Python/Pillow ile kesildi (x 380–1024,
y 60–500, spec'teki koordinatlarla). `public/hero/head-placeholder.webp` (1400px) +
`head-placeholder-mobile.webp` (640px — bkz. G5 remediation, aşağıda) üretildi.
`HeroHead.tsx`: `layers: HeroHeadLayer[]` prop'u alan, her katmanı aynı aspect-ratio'lu
(`644/440`) kutuda mutlak konumlandırılmış `<div>` içinde stack'leyen bileşen — bugün 1
katman, katman eklemek kod değişikliği gerektirmiyor. Kenarlar `mask-image:
radial-gradient(...)` ile zemine eritildi (CSS, piksel düzenleme yok). `next/image` `fill` +
`sizes` kullanıldı (spec gereği).

### G4 — Motion (CSS, tek seferlik)
`src/css/main.css`'e eklendi (`.v2-fade-in`, `.v2-fade-up`, `.v2-hero-head-layer`,
`.v2-heartbeat-path` + `@keyframes`). Desen: her sınıfın varsayılan (media-query'siz) hâli
**bitmiş görünüm**; `animation` özelliği SADECE `@media (prefers-reduced-motion:
no-preference)` içinde ekleniyor — reduce tercih edenler hiçbir zaman gizli içerik görmüyor,
animasyon hiç oynamıyor. Framer Motion kullanılmadı (spec gereği). Sıra/zamanlama G4
tablosuyla birebir, TEK istisna aşağıda.

**Sapma (ölçümle zorunlu)**: kafa katmanı animasyonundan `opacity` çıkarıldı (tablo:
"opacity 0→1 + scale + blur" diyordu; uygulanan: sadece `scale .96→1`, blur de kaldırıldı —
bkz. G5). Sebep NO_LCP hatası — detay `docs/perf/GATE-1-hero.md`. Görsel etki minimal (kafa
zaten scale ile "toplanıyor" hissi veriyor), ama CD'nin onayladığı tam tarif değil — Faz 2
DESIGN-LOCK'ta bu spesifik nokta gözden geçirilmeli.

### G5 — Performance Gate
Tam yolculuk ve sayılar: **`docs/perf/GATE-1-hero.md`**. Özet:
- İlk koşum `NO_LCP` hatası verdi → kök neden bulundu (opacity animasyonu LCP adayını görünmez
  kılıyordu) → düzeltildi.
- Düzeltme sonrası ilk 3x mobil medyan 94 (95'in 1 altı) → G5.6 remediation ladder'ı (a)(b)(c)
  denendi, (a)'nın gerçek mekanizması bulundu (`next/image` kaynağı kendi `quality` prop'una
  bakıyor, benim webp dosya kalitem değil) ve düzeltildi.
- Nihai 3x mobil: **99, 95, 95 → medyan 95** ✅. CLS 0, TBT 0-7ms.
- Masaüstü (bilgi amaçlı, kapı değil): medyan 86.

### Ekstra düzeltme: `preloaded but not used` uyarısı
`HeroHead`'in masaüstü+mobil `<Image>` ikilisi ikisi de `priority` iken Next her ikisi için de
preload linki basıyordu (CSS `hidden`/`block` fark etmiyor) — mobilde gereksiz ~90KB'lık
masaüstü görseli indiriliyordu. Sadece mobil `priority` aldı (Gate'in sert şartı mobil olduğu
için); masaüstü native lazy-load'a bırakıldı (`display:none` iken hiç indirilmiyor). Kod
yorumuyla `HeroHead.tsx`'te belgelendi.

## Kapı sonuçları

```
tsc --noEmit         → exit 0
npm run build         → exit 0
npm run lint           → exit 0 (3 pre-existing/beklenen @next/next/no-img-element uyarısı —
                          ikisi Nav.tsx'in logo <img>'leri, spec gereği kasıtlı)
Lighthouse mobil       → medyan 95 (≥95 şartı) ✅
CLS mobil               → 0 (≤0.02 şartı) ✅
```

Görsel doğrulama: `docs/qa/P01-1280.png`, `docs/qa/P01-375.png` (animasyon bitmiş hâl, gerçek
tarayıcıda — Browser pane'in `--screenshot` CLI yolu bu makinede küçük SVG ikonları (hamburger)
tutarlı biçimde boş bırakıyordu; `puppeteer-core` ile CDP üzerinden alınan screenshot doğru
render etti — bu bir kod hatası değil, headless Chrome CLI screenshot'ının bu ortamdaki bir
tuhaflığıydı, doğrulandı ve dosyaya not düşüldü).

## Bekleyen / not düşülenler

- **G4 sapması** (opacity kaldırıldı) — Faz 2'de CD ile teyit edilmeli.
- **Wordmark + OG image** (P00'dan devam) — hâlâ gerçek Inter/vektör outline bekliyor.
- **Bekleyen kararlar #4-#8** (PROJECT-STATE.md) — bu paket kapsamında DEĞİL (sadece hero+nav),
  Faz 1'in FAZ-PLANI.md'deki resmi kapanışı için hâlâ açık.
- **Masaüstü performansı** (86) ölçüldü ama kapı şartı değildi, aksiyon alınmadı.
- `.claude/launch.json` eklendi (yerel önizleme için, `npm run dev`) — proje dosyası değil,
  geliştirme kolaylığı; Emre isterse silebilir.
- Server: `npm run start` arka planda açık bırakıldı (port 3000) — kapatmak için o terminal
  penceresini kapat / process'i sonlandır.

## Dosya listesi

**Yeni:** `src/components/HomePageV2/Nav.tsx`, `Hero.tsx`, `HeroHead.tsx`, `Heartbeat.tsx`,
`public/hero/head-placeholder.webp`, `head-placeholder-mobile.webp`, `docs/perf/GATE-1-hero.md`,
`docs/perf/gate-1-{mobile,desktop}-{1,2,3}.report.{json,html}`, `docs/qa/P01-1280.png`,
`docs/qa/P01-375.png`, `.claude/launch.json`.

**Değişti:** `src/components/HomePageV2/index.tsx` (Nav+Hero bağlandı, placeholder listesinden
`hero` çıkarıldı), `src/css/main.css` (motion CSS eklendi, sonuna), `public/brand/logo-wordmark.svg`
(fill sabitlendi).

**Silinmedi, dokunulmadı:** diğer 6 section, subpages, `[[...slug]].js` (P00'dan beri sabit).
