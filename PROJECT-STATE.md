# PROJECT-STATE.md — Doveify Site V2

> Tek gerçek kaynak. Bu dosya birikmez, her paket sonunda ÜZERİNE YAZILIR.
> Güncelleyen: Claude Code (her paket sonunda, RAPOR-*.md ile birlikte).

## Kimlik
- Proje: doveify.io ana site yeniden tasarımı (V2)
- Müşteri: Doveify (kendi markamız) — DOVEIFYIO AI SOLUTIONS LTD
- Paket seviyesi: PREMIUM (kendi vitrinimiz, tam creative süreç)
- Repo: `D:/content-ops-starter-main` (Netlify/Stackbit content-ops starter tabanlı). V2 çalışması `v2` branch'inde; `main` = canlı site, dokunulmaz
- Repo yapısı (klasörden okunan): `stackbit.config.ts`, `content/`, `src/`, `sources/`, `tailwind.config.js` (v3), `postcss.config.js`, `netlify.toml`, `.env-example`, `.nvmrc`. Son içerik commit'i 29.01.2026
- Stack: Next.js (mevcut sürüm G0'da ölçülecek) + Tailwind v3 → v4 geçişi kararlı (#12), Netlify
- Taban: mevcut repo (Next.js). İskelet kopyası YOK; `iskelet-kurumsal` bileşenleri gerekirse alınır
- Canlı site: https://doveify.io — `main` branch. V2 `v2` branch'inde, Netlify branch preview ile test edilir

## Faz Durumu
| Faz | Ad | Durum |
|---|---|---|
| 0 | Kurulum (repo, docs, brand assets, içerik envanteri) | ✅ Tamam — `tsc`/`build`/`lint` üçü de exit 0. bkz. RAPOR-P00.md |
| 1 | Referans → Araştırma → Performance Gate (hero motion prototipi) | ✅ Emre "geç" dedi (mobil Lighthouse medyan 95, CLS 0). bkz. RAPOR-P01.md, docs/perf/GATE-1-hero.md |
| 2 | Approved Design → DESIGN-LOCK | ✅ LOCK v0.5 (04.11.2026) — kilitli: NAV, HERO, ÜRÜNLER, WEB FACTORY, DİJİTAL DÖNÜŞÜM, FİNAL CTA, FOOTER, VAKA SAYFASI ŞABLONU. Sahiplik / Why / Çalışmalar CD-REVİZE-BEKLİYOR. |
| 3 | Implementation (P1–P6) | ✅ P1–P6 uygulandı (P6: performans, vaka sayfaları, temizlik — RAPOR-P6.md). Commit `5ad56bb` üzerinde P6 commit'lenmedi. Performans kapısı Emre kararıyla kapandı (05.11.2026): geçerli final koşum 97, A0 tabanı medyan 98 (5'lik final set alınamadı, sapma RAPOR-P6.md'de). bkz. RAPOR-P1…RAPOR-P6. |
| 4 | Visual QA + Lighthouse + Deploy (preview) | ⬜ Bekliyor |
| 5 | DNS cutover + eski site arşivi | ⬜ Bekliyor |

## Görsel Otorite
- Referans: `docs/design/reference/homepage-ref-v1.png` (CD üretimi, 03.09.2026)
- Karar: Emre — "bunun aynısına evireceğiz". Referans görsel ANA yön.
- CD metni (`docs/design/reference/CD-SAYFA-KURGUSU.md`) tamamlayıcı; görsel ile çeliştiğinde **görsel esas**, çelişki aşağıda karara açılır.
- `docs/design/approved/homepage-v1.png` ve `DESIGN-LOCK.md` (v0.3, 03.11.2026) repoda.
  `DESIGN-LOCK.md`: NAV, HERO, ÜRÜNLER kilitli; diğer bölümler CD-REVİZE-BEKLİYOR.

## Bekleyen Kararlar (Emre)
1. ✅ **Repo** — `D:/content-ops-starter-main`, branch `v2`
2. ✅ **Dil** — TR ana (`/`) + EN (`/en/`), Emre 03.11.2026. P5'te uygulandı (kütüphanesiz sözlük, `useLocale()`, dil anahtarı nav'da).
3. ✅ **Logo bileşimi** — amblem sol + wordmark + heartbeat (wordmark'ın devamı). Amblem favicon/OG'de de kullanılır. (03.09.2026)
4. ✅ **Dijital Dönüşüm bölümü** — tek hat `DATA → AI → SYSTEMS → AUTONOMY` (CD). P3'te uygulandı.
5. ✅ **Sahiplik bölümü** — "TOOLS ARE RENTED. KNOWLEDGE SHOULD NOT BE." + ikonsuz SaaS/Doveify karşılaştırma (CD). P4'te uygulandı.
6. ✅ **Why Doveify (CD 06)** — `100% OWNERSHIP` + 5 maddelik editorial liste. P4'te uygulandı.
7. ✅ **Work/Proof** — 6 gerçek projenin logo bandı (CD). P4'te uygulandı.
8. ✅ **Nav** — İletişim pili cal.com demo linkine gidiyor (P2).
9. ✅ **Hero motion tekniği** — Framer Motion ONAYLI (bu proje için). Önce CSS dene; Framer Motion yalnızca CSS ile temiz çözülemeyen yerde (hero kafa oluşumu, 3D carousel). Performance Gate şartı değişmez. (03.09.2026) **PAKET-01 sonucu**: saf CSS yeterli oldu, Framer Motion'a hiç gerek kalmadı. **Sapma (hâlâ geçerli)**: kafa katmanı animasyonunda `opacity` YOK — `opacity:0` ile başlayan elemanlar Chrome'da LCP adayı sayılmıyor, `NO_LCP` hatasına yol açıyordu (RAPOR-P01.md, docs/perf/GATE-1-hero.md). **PAKET-P1-HERO-NAV günceli**: LOCK'un "overlay-fade" tarifi (F7) bu kısıtla uyumlu şekilde uygulandı — kafa `opacity:1` sabit, üstündeki `bg` renkli overlay `opacity 1→0` fade oluyor (görsel olarak "kafa beliriyor" hissi opacity yerine overlay ile veriliyor). Emre/CD onayı hâlâ bekliyor.
10. ✅ **Hero görseli kaynağı** — (a) seçildi: referans görselden Python/Pillow ile kesilmiş statik WebP (`public/hero/head-placeholder*.webp`), gerçek CD katmanları gelene kadar placeholder. Performance Gate'i geçti (mobil medyan 95). (03.09.2026) **PAKET-P1-HERO-NAV**: aynı görsel, maske F5'e göre güncellendi (2 linear-gradient + intersect — sol/üst/alt erime, sağ keskin), boyut/konum değişmedi. **PAKET-P1R-KAFA-MASKE (CD Karar 01 revizyonu, 05.09.2026)**: maske değerleri yatay `38%→46%`, dikey `14-86%→20-80%`; placeholder zemin rengi `--color-v2-bg-base` (#050B14) ile eşleşecek şekilde yeniden boyandı (eski dosyalar `_legacy/hero/`'da). Tam "RGB farkı 0" lossy WebP ile sağlanamadı (1-3 birim kaldı, gözle ayırt edilemez) — detay RAPOR-P1R-KAFA-MASKE.md. Kafa boyutu/konumu DEĞİŞMEDİ (CD: "büyütülmeyecek").
11. ✅ **Stackbit / Netlify Create** — `v2`'de ÇIKARILIR. Düz Next.js. (03.09.2026) **Uygulama notu
    (PAKET-00)**: sadece Stackbit visual-editor'ın kendisi (`stackbit.config.ts`, `@stackbit/cms-git`)
    kaldırıldı. `content/` ve `sources/local/models` — Stackbit'e değil, `/clinic`, `/brokers-brain`,
    `/privacy`, `/signup` render zincirine bağımlı çıktı; onlar P6'da (subpage'ler flat bileşene
    dönüşene kadar) yerinde kalacak. Sadece `content/pages/index.md` `_legacy/content/pages/`'e
    taşındı (yeni V2 homepage `src/components/HomePageV2/` içinde, `[[...slug]].js`'in özel-durum
    render'ıyla geliyor — bkz. RAPOR-P00.md "Olay kaydı #3"). Git geçmişi + Netlify site bağlantısı korunur.
12. ✅ **Tailwind v3 → v4** — ONAYLI. (03.09.2026)

## Kilitli Kurallar (bu proje)
- %80 sakin / %20 dijital enerji. Neon cyberpunk YOK.
- Sonsuz animasyon YOK. Hero bir kez oynar, durur.
- Arka plan: neredeyse siyah lacivert. Beyaz tipografi. Doveify mavisi sadece aktif noktalarda.
- Glow sadece: insan kafası, heartbeat, sistem geçişleri.
- Performance Gate: Mobil Lighthouse ≥95, CLS ≈0. Ölçüm: prod build + `next start`, Chrome kapalı, **adaptör takılı** (pilde CPU kısılır; CPU kıyas <1200 → set geçersiz, P6).
- Hero motion sırası: logo → heartbeat (0.8–1.2s) → parçalar toplanır → kafa formu → headline fadeUp .6s → CTA'lar → dur.
- Mevcut site içerik omurgası korunur (bkz. `docs/content/ICERIK-ENVANTERI.md`); metin değişikliği ancak Emre talimatıyla.
- Hero headline: "DİJİTAL ZEKÂ. GERÇEK ETKİ." (görselden, onaysız değiştirilmez)
- Sahiplik copy: "Kod, veri ve altyapı sizin mülkünüzdür" — Emre onaylı (03.11.2026), tüm veri müşteride.
- Doveify SaaS satmaz; Clinic OS/Broker's Brain/OSGB Web/TurkISG AI kuruma özel kurulan sistem örnekleridir. Sitede 'ürün' değil 'sistem'. (Emre 03.11.2026)

## Son Paket
- **P6** — `paketler/PAKET-P6-PERF-ALTSAYFA-TEMIZLIK.md`: performans (A0 taban + A1–A4), vaka sayfaları (B), repo temizliği (C).
  Rapor: RAPOR-P6.md. Commit'lenmedi.
- **Performans:** A0 tabanı (P6 öncesi kod, Chrome kapalı, adaptör takılı, CPU kıyas 2920–3251) mobil medyan **98** (95–98),
  LCP 2,4 s, TBT 0, CLS 0. Önceki paketlerdeki 84–89'un sebebi pil modu (CPU kısılıyor, kıyas <1200). A5 basitleştirmesi gerekmedi.
  **Geçerli final set yok:** 04.11'de Chrome açık + pil; 05.11'de Chrome kapalı ama sistem yine pilde (`PowerOnline=False`) → 1/5 koşum
  geçerli (CPU 2640, skor 97), set geçersiz (`_legacy/perf/P6-FINALpil-*`). **Emre kararı (05.11.2026): "97 yeterli" → kapı kapandı.**
- **A1:** sözlük `content/tr|en/` + `getStaticProps`; First Load `/` 101 → 94,3 kB (11,3 kB'si CSS; yalnız JS ~83 kB).
- **B:** `/`, `/en/`, `/sistemler/{clinic-os,brokers-brain}/`, `/en/systems/...` → 200; `/clinic`, `/brokers-brain`, `/signup`,
  `/pricing`, `/careers` → 301; blog + `/privacy` catch-all'da. Vaka içerikte `[EMRE-SONUÇ]` ×2, `[EMRE-STACK]` ×1 (sayfa başına).
- **C:** kullanılmayan Stackbit bileşenleri, sayfaları, eski CSS ve deneme perf setleri `_legacy/`'de; `npm audit` 53 → 22
  (kalanlar major); Node 22; `.gitattributes`; `README-V2.md`.
- tsc/build/lint 0 (lint uyarısı 3 → 2); yatay taşma yok; homepage kilitli bölümleri P5 ile piksel aynı (farklar yalnız P5 ek metinleri).

## Sonraki Adım
1. Emre `git add --renormalize . && git commit`, sonra Faz 4: `git push -u origin v2` → Netlify branch preview URL → CD final tam-sayfa QA
   (home TR/EN + 2 vaka + 404) → Faz 5 cutover.

Açık kalanlar:
- **Vaka içerik placeholder'ları:** `[EMRE-SONUÇ]` (Clinic OS: gelinmeyen randevu değişimi, kurulum süresi; Broker's Brain: yanıt süresi
  değişimi, kurulum süresi) ve `[EMRE-STACK]` (iki sistem) — Emre doldurur.
- **Kontrast:** Doveify mavisi `#2563eb` koyu zeminde 3,82:1; küçük mavi metinler WCAG 4,5 altında (tek düşen a11y kalemi, A11y 96). Karar CD'nin.
- **Bağımlılıklar:** kalan 22 zafiyet major sürüm istiyor (Next 16, ESLint 9 / eslint-config-next, glob, swiper) → P7. `swiper` artık
  kullanılmıyor; kaldırılabilir (kritik zafiyet).
- **EN çeviriler** (P5 + P6 vaka sayfaları) Emre gözden geçirecek; **404** yalnız TR.
- **P4'ten:** Why liste aralığı, Teknik Telsiz logosunun beyaz kopyası, Bizim OSGB / Ömer Mutfak için büyük kaynak, Nav'ın
  `BrandSignature.tsx`'e geçmesi.
- Kod yeri: V2 bileşenleri `src/components/HomePageV2/`; P6 ile `src/pages/index.tsx` ve `src/pages/en/` açıldı (catch-all artık
  `[...slug].js`, yalnız blog + privacy).
