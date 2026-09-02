# FAZ PLANI — Doveify Site V2

Standart zincir: REFERANS → ARAŞTIRMA → DESIGN EXPLORATION → PERFORMANCE GATE → APPROVED DESIGN → DESIGN-LOCK → IMPLEMENTATION → VISUAL QA

Bu projede DESIGN EXPLORATION adımı CD tarafından tamamlanmış sayılır (referans görsel = 1280px tam sayfa exploration). Kalan zincir aşağıda fazlara bölünmüştür.

---

## FAZ 0 — KURULUM  (~1.5 saat, Claude Code)
Çıktı: çalışan boş repo + docs yapısı + brand assetleri

- Mevcut repoda `v2` branch (Emre açar). Netlify'da branch deploy aç → `v2--<site>.netlify.app` preview
- Repo envanteri (`D:/content-ops-starter-main`, Stackbit starter): sürümler, router, Stackbit model bağımlılıkları, alt sayfalar. `docs/REPO-ENVANTERI.md`
- Karar #11/#12 onaylıysa: Stackbit sökümü + Tailwind v4 geçişi (PAKET-00 G0.5)
- Bu klasördeki `docs/`, `PROJECT-STATE.md`, `CLAUDE.md`, `PROJE-KUNYE.md`, `paketler/` repo köküne (Emre kopyalar; mevcut CLAUDE.md varsa birleştirilir)
- Alt sayfalar (/clinic, /brokers-brain, /privacy, /signup) V2'de olduğu gibi korunur; sadece homepage + layout yeniden yapılır
- Logo: `docs/brand/logo-doveify-v2.png` → SVG'ye çevir (amblem ayrı, wordmark ayrı, heartbeat ayrı) → `public/brand/`
- Favicon seti (amblem)
- Design token dosyası: `docs/design/TOKENS.md` (referans görselden renk/tipografi çıkarımı — Claude Code renkleri görselden ölçer, Emre onaylar)
- Mevcut site içerik envanterini `content/` altına JSON/TS olarak taşı (metin kaynağı chat değil, repo)

Kapı: `tsc && npm run build` exit 0, preview URL açılıyor.

---

## FAZ 1 — ARAŞTIRMA + PERFORMANCE GATE  (~4 saat)
Çıktı: hero motion prototipi + Lighthouse raporu + gate kararı

- **P-GATE-1 Hero prototipi**: sadece hero, gerçek içerikle. Dijital kafa katmanları (CD'den 4–6 PNG/WebP katman veya SVG grid). Motion sırası kilitli kurallara göre, saf CSS.
- Mobil Lighthouse ölç: hedef ≥95, CLS ≈0, LCP hero görseli.
- Başarısızsa: katman sayısı azalt → statik kafa + sadece heartbeat + fadeUp'a düş. Yeniden ölç.
- Fontlar: self-host, `font-display: swap`, subset (TR karakterler dahil: İ ı Ş ş Ğ ğ Ü ü Ö ö Ç ç Â â)
- Araştırma: referans görseldeki 3D perspektif kart carousel (Ürünler) için CSS 3D transform fizibilitesi; JS kütüphanesiz çözüm

Kapı: Lighthouse raporu `docs/perf/GATE-1-hero.md` + Emre "geç" der.
Bekleyen kararlar #4–#8 bu fazın sonunda kapanmış olmalı.

---

## FAZ 2 — APPROVED DESIGN + DESIGN-LOCK  (~1 saat, Claude + Emre)
Çıktı: `docs/design/approved/homepage-v1.png` + `DESIGN-LOCK.md`

- Referans görsel `approved/` altına kopyalanır (gate geçtiyse). Bekleyen kararlarla değişen bölümler için CD'den revize görsel istenir; revize gelene kadar o bölüm LOCK'ta "CD-REVİZE-BEKLİYOR" işaretlenir.
- DESIGN-LOCK.md: bölüm bölüm ölçü, renk, tipografi, motion, breakpoint kuralları. Claude taslak yazar, Emre onaylar.
- Mobil (375px) kurgu: referans sadece 1280. Her bölüm için mobil davranış LOCK'ta tanımlanır (özellikle 3D carousel → mobilde yatay snap-scroll).

Kapı: DESIGN-LOCK.md commit'lendi.

---

## FAZ 3 — IMPLEMENTATION  (~14 saat, Claude Code, paket paket)
Her paket: ayrı feature branch, `tsc + build + lint` temiz, RAPOR-Pxx.md, PROJECT-STATE.md güncelle. Emre 1280/375 görsel QA → merge.

| Paket | Kapsam | Tahmin |
|---|---|---|
| P1 | Layout, nav (desktop + hamburger), footer, tokens, fontlar, hero (gate prototipinden) | 3h |
| P2 | Ürünler — 3D carousel (Clinic OS merkez, Broker's Brain / OSGB Web yan; TurkISG AI 4. kart); ok navigasyonu; mobil snap-scroll | 3h |
| P3 | Web Factory bölümü (ekran kolajı, koyu zemin) + Dijital Dönüşüm (karara göre hat veya kart) | 2.5h |
| P4 | Sahiplik + (varsa) Why Doveify manifesto + Çalışmalar logo bandı + Final CTA/İletişim | 2.5h |
| P5 | SEO (meta, OG, sitemap, schema), KVKK/Privacy sayfa bağlantısı, dil altyapısı (karara göre), form/CTA bağlantıları (cal.com, mailto, WhatsApp) | 2h |
| P6 | Mevcut alt sayfa/subdomain linkleri (clinic/, brokers-brain/, osgb., turkisgai.) ve 301 haritası | 1h |

Kapı: her paket sonunda Emre görsel QA (1280 + 375).

---

## FAZ 4 — VISUAL QA + PERF + PREVIEW  (~2 saat)
- Bölüm bölüm `approved/` görseli ile karşılaştırma (Claude Code screenshot → Emre göz)
- Lighthouse mobil ≥95 tüm metrikler, CLS ≈0
- Tarayıcı: Chrome, Safari iOS, Firefox
- `prefers-reduced-motion` → hero statik
- ChatGPT CD'ye preview URL: creative onay

Kapı: Emre + CD onayı.

---

## FAZ 5 — CUTOVER  (~1 saat)
- Mevcut site yedeği (export)
- Turhost DNS → yeni Netlify site
- 301 kontrolü, Search Console yeniden gönderim
- PROJECT-STATE.md → "CANLI"

---

## Toplam: ~24 saat (≈18 saat delege)
Sıra: 0 → 1 → 2 → 3 → 4 → 5, atlama yok. Faz 1 gate geçmeden Faz 3 başlamaz.
