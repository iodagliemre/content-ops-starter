# PAKET-P6-PERF-ALTSAYFA-TEMIZLIK — Performans + vaka sayfaları + temizlik

> Faz 3 son paketi. Taban: commit `5ad56bb`. Üç iş: (A) mobil Lighthouse ≥95'i temiz ortamda kapat, (B) alt sayfaları V2'ye bağla (vaka sayfaları), (C) repo temizliği. Sonra Faz 4 (push + preview + CD final QA).
> Konumlandırma (Emre 03.11.2026): Doveify SaaS satmaz; Clinic OS / Broker's Brain kuruma özel kurulan sistem örnekleri → alt sayfalar **vaka sayfası**.

## Kısıtlar
- LOCK v0.4 kilitli bölümlerde piksel değişikliği yok. Homepage'de görsel değişiklik yalnızca A'da "basitleştirme" gerekirse ve raporda ayrı başlıkla — CD final QA'da görür.
- Silme yok (`_legacy/`). Git yok. `src/pages/index.*` bu pakette AÇILABİLİR (P6 izni): `[[...slug]].js` özel durumu → `src/pages/index.tsx` + `src/pages/en/index.tsx`'e taşınır, catch-all yalnızca `/privacy` ve blog için kalır.

## A — PERFORMANS (hedef mobil medyan ≥95, CLS ≤0.02, LCP = kafa)
### A0 — Ölçüm protokolü (her set bununla)
- `next build` + `next start`; ölçüm öncesi: tüm `chrome.exe` ve ilgisiz `node.exe` kapalı (Claude Code sahibi olmadığı süreçleri kapatmaz → Emre'ye "kapat" der ve bekler; kapanmadan ölçmez). CPU benchmark index raporda; <1200 ise set geçersiz, tekrar.
- 5 koşum, medyan; `docs/perf/P6-{set}-{1..5}.report.json`.
- A0 tabanı: mevcut kod, temiz ortam. Bu sayı gerçek başlangıç.
### A1 — JS yükü
- `First Load JS` 101kB → hedef ≤90kB. İki dilin metni tek pakette: `content/*.ts` `{tr,en}` yerine `content/tr/*.ts` + `content/en/*.ts`, sayfa `getStaticProps` ile yalnızca kendi dilini alır (sözlük hook aynı API, bileşenler değişmez).
- `_app.js`'de eski siteden kalan her global import (css/js) V2 sayfalarında yüklenmesin; liste raporda.
- Font preload yalnızca 300 (zaten); 400/500 `font-display: swap`, preload yok.
### A2 — Hydration
- Below-fold interaktif bileşenler (`Products`, `Transformation` reveal, `Work`, `FinalCta` heartbeat) `onIdle` ile zaten erteleniyor; `requestIdleCallback` timeout 1500 → 800, ve `IntersectionObserver` kurulumları tek ortak observer'a (`useRevealOnce` içinde paylaşımlı).
- `ProductStageDesktop` mobilde DOM'a girmiyor mu doğrula (SSR'da `display:none` değil, `matchMedia` + statik fallback — P2AR B3).
### A3 — Görseller
- Hero `head-placeholder*.webp`: `fetchpriority="high"` + `<link rel="preload" as="image" imagesrcset>` (mobil/desktop ayrı); kalite 78 → 72 dene, görsel fark yoksa (SSIM ≥.98) kal.
- Ürün/Web Factory/logo görselleri `loading="lazy" decoding="async"` doğrula; `sizes` doğru.
### A4 — CSS
- Tailwind v4 çıktı boyutu; kullanılmayan eski Stackbit bileşen CSS'i (`src/components/blocks`, `sections`) V2 sayfalarında yükleniyorsa ayır. `content-visibility: auto` tüm below-fold section'larda, `contain-intrinsic-size` ölçülü.
### A5 — Hâlâ <95 ise basitleştirme (sırayla, her adımda ölç, 95 gelince dur)
1. Final CTA büyük heartbeat → statik SVG (animasyon yok).
2. Dönüşüm reveal → sadece opacity (scaleX/scaleY yok).
3. Ürünler desktop sahne `filter`/`drop-shadow` kaldır, overlay ile karartma.
4. Hero overlay-fade → kafa doğrudan görünür, sadece heartbeat animasyonu (LOCK Karar 04 "görsel davranış: oluşum→reveal→stop" ile çelişir → **yapma**, raporla, CD kararı).
Her adım görsel değişiklikse `docs/qa/P6-perf-<adım>-375.png` + raporda "CD onayı gerekli" işareti.

## B — ALT SAYFALAR (vaka sayfaları)
### B1 — Route yapısı
- `src/pages/index.tsx` (TR) ve `src/pages/en/index.tsx` (EN) → `HomePageV2`. `[[...slug]].js`'den homepage özel durumu kaldırılır. `/en/` → `/en` (trailing slash config neyse tutarlı, 301 tek yön).
- `/clinic`, `/brokers-brain` → `src/pages/sistemler/clinic-os.tsx`, `sistemler/brokers-brain.tsx` (+ `/en/systems/...`). Eski `/clinic`, `/brokers-brain` → 301 yeni yola (`next.config` redirects). `/signup`, `/pricing`, `/careers` → 301 `/`. Blog + `/privacy` catch-all'da kalır (içerik dokunulmaz).
- Homepage kart CTA'ları `SİSTEMİ İNCELE →` yeni yollara; OSGB Web / TurkISG AI harici kalır.
### B2 — Vaka sayfası şablonu (`src/components/HomePageV2/CasePage.tsx`, V2 nav + footer aynı bileşenler)
Bölümler (hepsi `content/tr|en/cases/*.ts`'den):
1. Hero (küçük): eyebrow `KURDUĞUMUZ SİSTEM` · H1 sistem adı (Inter 300 56/36px) · tek satır tanım · sağda sistem görseli (homepage kart görseli, 3:2, kenarlık/radius Web Factory ekran stili). Motion: fadeUp bir kez.
2. `Kim için` — sektör + işletme tipi (2–3 cümle).
3. `Sorun` — 3 madde (editorial liste, Why stili, numaralı).
4. `Ne kurduk` — 4–6 madde (başlık + 1 cümle), ikon yok.
5. `Teknoloji` — etiket satırı (monokrom pill'ler: React · TypeScript · Supabase · n8n · WhatsApp API …) — ICERIK-ENVANTERI + Emre'nin stack'i; sistem başına Emre doğrular.
6. `Sonuç` — 2–3 somut ifade (sayı varsa Emre'den; yoksa nitel, uydurma YOK — `[EMRE-SONUÇ]` placeholder bırak, raporda listele).
7. Kapanış CTA (Final CTA bileşeni, metin): `Benzerini sizin için kuralım.` / alt `İşletmenize özel sistemi birlikte tasarlayalım.` / `İLETİŞİME GEÇ` → cal.com.
8. Footer.
Meta: title `Clinic OS — Kurduğumuz Sistem | Doveify`, description sayfa tanımından, OG = sistem görseli üstüne marka imzası (Pillow, P5 OG şablonu), hreflang, JSON-LD `CreativeWork`.
### B3 — İçerik (TR; EN çevirisi Claude Code, raporda listelenir)
Mevcut `/clinic` ve `/brokers-brain` markdown'ından + ICERIK-ENVANTERI'nden derlenir; "fiyat / deneme / kayıt" ifadeleri çıkar; "ürün" yok, "sistem". Her sayfa ≤350 kelime. `[EMRE-SONUÇ]` ve `[EMRE-STACK]` placeholder'ları işaretli kalır.
### B4 — Sitemap/robots güncelle; 404 sayfasına `Kurduğumuz sistemler →` linki.

## C — TEMİZLİK
- Stackbit kalıntıları: `sources/`, `content/pages/*.md` (blog hariç), `src/components/blocks|sections` (yalnızca blog/privacy'nin kullandıkları kalır; kalan `_legacy/`), `src/utils/*stackbit*`, `.stackbit*`, `netlify.toml` içindeki create-plugin satırları. Build hâlâ 0 hata.
- `npm audit`: `npm audit fix` (breaking olmayan); kalan zafiyetler listesi + hangi paketin (Next 14 major bump P7'ye).
- `.nvmrc` → `22`; `package.json engines.node ">=22"`.
- `.gitattributes` (`* text=auto eol=lf`), CRLF uyarıları biter; `git add --renormalize` Emre çalıştırır (brief'te komut).
- `docs/perf/`: yalnızca her paketin final seti kalsın (`P*-FINAL-*` / son set), deneme setleri (`_diag`, `FIX`, `B4`, `base`, `b`) `_legacy/perf/`'e.
- `_legacy/shoot-tmp*.js`, `.claude/launch.json` (kalır, gitignore'a değil — Emre kullanıyor).
- `README-V2.md` (repo kökü): çalıştırma, yapı, paket geçmişi, LOCK/STATE/RAPOR dosyalarının rolü; 1 sayfa.

## Çıktılar
- `RAPOR-P6.md`: A0 taban → her adım → final 5 koşum tablo (skor/LCP/TBT/SI/CLS/CPU index); basitleştirme yapıldıysa hangi adım + screenshot; B route tablosu (eski → yeni, 301'ler), vaka içerik placeholder listesi, EN çeviri listesi; C silinen/taşınan dosya listesi, audit sonucu.
- `docs/qa/P6-1280-clinic.png`, `P6-375-clinic.png`, `P6-1280-brokers.png`, `P6-375-brokers.png`.
- `PROJECT-STATE.md`: Faz 3 ✅; "Sonraki: Emre `git add --renormalize . && git commit`, sonra Faz 4: `git push -u origin v2` → Netlify branch preview URL → CD final tam-sayfa QA (home TR/EN + 2 vaka + 404) → Faz 5 cutover".
- `DESIGN-LOCK.md` v0.5: vaka sayfası şablonu + "Final CTA / Footer" P4 kilidi yazılır.

## Kapı
tsc/build/lint 0 · mobil Lighthouse 5 koşum medyan ≥95 (temiz ortam, CPU index ≥1200), CLS ≤0.02, LCP kafa · A11y/SEO/BP ≥95 · `/`, `/en`, `/sistemler/clinic-os`, `/sistemler/brokers-brain`, `/en/systems/...`, `/privacy`, bir blog yazısı → 200; eski yollar 301 · yatay taşma yok · LOCK piksel farkı yok (A5 hariç, işaretli).
