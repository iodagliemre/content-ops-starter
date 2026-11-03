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
| 2 | Approved Design → DESIGN-LOCK | ✅ LOCK v0.3 (03.11.2026) — kilitli: NAV, HERO, ÜRÜNLER. Diğer bölümler CD-REVİZE-BEKLİYOR. |
| 3 | Implementation (P1–P5) | 🟡 Başladı — **P1 (PAKET-P1-HERO-NAV + PAKET-P1R-KAFA-MASKE)**: nav+hero LOCK v0.1'e uydurma + kafa maske revizyonu tamam, kapı geçti. **P2 (P2-A + P2AR, Ürünler)**: ✅ CD P2AR GEÇTİ (03.11.2026), commit `2c3e038`; ≥95 hedefi PERF paketine ertelendi. **P3 (Web Factory + Dijital Dönüşüm)**: 🟡 uygulandı, kapı geçti (mobil medyan 89, eşik 88); **P3-R1** (CD revizyonu, Web Factory) uygulandı (medyan 95); ✅ CD P3-R1 GEÇTİ, commit `1fb90fd`. **P4 (Sahiplik + Why Doveify + Çalışmalar + Final CTA + Footer)**: 🟡 uygulandı, homepage içerik olarak tamam; görsel kapı geçti, mobil medyan 86 (eşik 88; aynı ortamda P4'süz taban 84, gerileme yok); commit'lenmedi, CD onayı bekliyor. bkz. RAPOR-P1-HERO-NAV.md, RAPOR-P1R-KAFA-MASKE.md, RAPOR-P2A.md, RAPOR-P2AR.md, RAPOR-P3.md, RAPOR-P4.md. P5 bekliyor. |
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
2. **Dil** — Referans TR, mevcut site EN. Seçenek: (a) sadece TR, (b) TR ana + EN ikinci, (c) sadece EN. Öneri: TR/EN, TR varsayılan (Türkiye pazarı + London için EN gerekli)
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
- Performance Gate: Mobil Lighthouse ≥95, CLS ≈0.
- Hero motion sırası: logo → heartbeat (0.8–1.2s) → parçalar toplanır → kafa formu → headline fadeUp .6s → CTA'lar → dur.
- Mevcut site içerik omurgası korunur (bkz. `docs/content/ICERIK-ENVANTERI.md`); metin değişikliği ancak Emre talimatıyla.
- Hero headline: "DİJİTAL ZEKÂ. GERÇEK ETKİ." (görselden, onaysız değiştirilmez)

## Son Paket
- **P4** — `paketler/PAKET-P4-SAHIPLIK-FINAL.md`: LOCK v0.4 (WEB FACTORY, DİJİTAL DÖNÜŞÜM kilitli), Sahiplik, Why Doveify,
  Çalışmalar (6 gerçek logo), Final CTA, footer; placeholder kalmadı. Rapor: RAPOR-P4.md. Commit'lenmedi.
- **Kapı:** tsc/build/lint 0 (yeni uyarı yok), yatay taşma yok, CLS 0, LCP = hero kafa ✅. **Mobil medyan 86 — eşik 88'in altında ❌**
  (P4: 61, 86, 94; tekrar P4b: 95, 84, 86). Aynı oturumda P4 bölümleri kapalı ölçülen taban medyan 84: düşüş P4'ten değil,
  ortamdan (CPU kıyas değeri düşük koşumlar 82–86, yüksek olanlar 94–95).
- Ekran görüntüleri: `docs/qa/P4-1280.png`, `P4-1280-sahiplik.png`, `P4-1280-why.png`, `P4-1280-calismalar-cta.png`,
  `P4-375.png`, `P4-375-sahiplik.png`.

## Sonraki Adım
CD onayı → commit → P5 (SEO/OG/sitemap/dil #2) → PERF → Faz 4

Açık kalanlar (RAPOR-P4.md "Bekleyen kararlar"):
- **Performans kapısı:** medyan 86 kabul mü, ölçüm temiz ortamda (Chrome kapalı ya da CI) tekrarlansın mı?
- **Why liste aralığı:** 16 + 1 + 16 px uygulandı; çizginin iki yanında 32'şer px isteniyor mu?
- **Logolar:** Teknik Telsiz'in işlenmiş kopyası beyaza boyandı (siyah logo filtreyle görünmüyordu); Bizim OSGB ve Ömer Mutfak
  64 px'e büyütüldü, daha büyük kaynak gerekebilir.
- **Nav marka imzası:** footer'daki `BrandSignature.tsx` ile aynı; Nav P1 kilitli olduğu için hâlâ inline kopyayı kullanıyor.
- **PERF paketi:** ≥95 hedefi buna ertelendi.
- Karar #2 (dil) hâlâ açık (P5).
- Kısıt hâlâ geçerli: yeni homepage kodu `src/components/HomePageV2/` altında kalmalı, ayrı
  bir `src/pages/index.*` açılmamalı (bkz. RAPOR-P00.md "Olay kaydı #3").
