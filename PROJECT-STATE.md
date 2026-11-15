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
| 2 | Approved Design → DESIGN-LOCK | ✅ LOCK **v0.7** (15.11.2026, P8: sistem tanıtım şablonu, Kendi Yazılımınız, Bilgi Bankası, carousel 6 kart, homepage'e 2 text link — Emre kararı, CD görecek). v0.6 (05.11.2026) — kilitli: NAV, HERO, ÜRÜNLER, WEB FACTORY, DİJİTAL DÖNÜŞÜM, FİNAL CTA, FOOTER, VAKA SAYFASI ŞABLONU, İLETİŞİM SAYFASI, WHATSAPP BUTON, GİZLİLİK SAYFASI. v0.6 değişiklikleri (nav imzası/pill, Web Factory slayt, TR Sahiplik/Why) Emre kararı — CD final QA'da görecek. Sahiplik / Why / Çalışmalar CD-REVİZE-BEKLİYOR. |
| 3 | Implementation (P1–P8) | ✅ P1–P8 uygulandı. **P8 ✅** (6 sistem tanıtım sayfası, Kendi Yazılımınız, Bilgi Bankası, SEO — RAPOR-P8.md), commit'lenmedi. P6 `ec94b54`'te commit'li. **P7 ✅** (iletişim + gizlilik sayfaları, WhatsApp buton, nav/CTA revizyonu, Web Factory slayt, gerçek sistem ekranları — RAPOR-P7.md), `7455cf6`'da commit'li. bkz. RAPOR-P1…RAPOR-P8. |
| 4 | Visual QA + Lighthouse + Deploy (preview) | ⬜ Bekliyor |
| 5 | DNS cutover + eski site arşivi | ⬜ Bekliyor |

## Görsel Otorite
- Referans: `docs/design/reference/homepage-ref-v1.png` (CD üretimi, 03.09.2026)
- Karar: Emre — "bunun aynısına evireceğiz". Referans görsel ANA yön.
- CD metni (`docs/design/reference/CD-SAYFA-KURGUSU.md`) tamamlayıcı; görsel ile çeliştiğinde **görsel esas**, çelişki aşağıda karara açılır.
- `docs/design/approved/homepage-v1.png` ve `DESIGN-LOCK.md` (v0.6, 05.11.2026) repoda. Kilitli bölümler Faz 2 satırında.

## Bekleyen Kararlar (Emre)
1. ✅ **Repo** — `D:/content-ops-starter-main`, branch `v2`
2. ✅ **Dil** — TR ana (`/`) + EN (`/en/`), Emre 03.11.2026. P5'te uygulandı (kütüphanesiz sözlük, `useLocale()`, dil anahtarı nav'da).
3. ✅ **Logo bileşimi** — amblem sol + wordmark + heartbeat (wordmark'ın devamı). Amblem favicon/OG'de de kullanılır. (03.09.2026)
4. ✅ **Dijital Dönüşüm bölümü** — tek hat `DATA → AI → SYSTEMS → AUTONOMY` (CD). P3'te uygulandı.
5. ✅ **Sahiplik bölümü** — "TOOLS ARE RENTED. KNOWLEDGE SHOULD NOT BE." + ikonsuz SaaS/Doveify karşılaştırma (CD). P4'te uygulandı.
6. ✅ **Why Doveify (CD 06)** — `100% OWNERSHIP` + 5 maddelik editorial liste. P4'te uygulandı.
7. ✅ **Work/Proof** — 6 gerçek projenin logo bandı (CD). P4'te uygulandı.
8. ✅ **Nav** — pill `Toplantı Talep Et` → cal.com, 6. link `İletişim` → `/iletisim/` (P7, Emre 05.11.2026). ⏳ 1024–1179'da tam nav sığmıyor → hamburger; Emre onayı bekliyor (RAPOR-P7 bekleyen karar 1).
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
- Doveify SaaS satmaz; Clinic OS / Broker's Brain / Emlak Ofis Paneli / OSGB Yönetim / Kuru Temizleme Paneli / TurkİSG AI kuruma özel kurulan sistem örnekleridir (P8: 6 sistem, her birinin tanıtım sayfası; canlı uygulama yalnız o sayfanın hero'sundan). Sitede 'ürün' değil 'sistem'. (Emre 03.11.2026)
- Gizlilik metni `docs/legal/gizlilik-2026-09-04.md` Emre'nindir; kelimesi değiştirilmez, `/gizlilik/` build'de aynen okur. (Emre 05.11.2026)
- İletişim formu yalnız Resend ile emre@doveify.io'ya; `RESEND_API_KEY` + `RESEND_FROM` Netlify'da (Emre 05.11.2026). Netlify Forms fallback'i yok; site formu verisi saklanmaz (gizlilik §5/§7a).

## Son Paket
- **P8** — `paketler/PAKET-P8-SISTEM-SAYFALARI-BILGI-BANKASI.md`. Rapor: RAPOR-P8.md. Commit'lenmedi.
- **Yeni sayfalar (TR+EN, 26):** 6 sistem tanıtım sayfası (`/sistemler/<slug>/`, `/en/systems/<en-slug>/`; Clinic OS ve Broker's Brain yeni şablona geçti),
  `/kendi-yaziliminiz/` + `/en/your-own-software/`, `/bilgi-bankasi/` + `/en/knowledge-base/` + 5+5 yazı. Eski Stackbit blog `_legacy/`'de, `/blog/*` → 301 `/bilgi-bankasi/`.
- **Şablon:** hero `CANLI`/`PROTOTİP` + `SİSTEMİ İNCELE →` (canlı uygulama) + `BENZERİNİ İSTEYİN →` (`/iletisim/?calisma=<slug>`, form önseçili + e-postada sistem satırı) · Ekranlar rail · Rakamlar · Sahiplik kutusu · SSS (FAQPage) · İlgili okumalar.
- **Homepage:** carousel 6 kart (Clinic OS merkez, index 0), kart CTA'ları iç sayfaya; Sahiplik altı ve Çalışmalar yanı 2 text link; footer 6 sistem + 2 link.
- **SEO:** title ≤60 / description ≤155 ölçüldü; JSON-LD SoftwareApplication / Service / Article / FAQPage; sitemap `scripts/sitemap.js` ile `prebuild`'de (32 URL); OG `scripts/og.py`.
- **Görseller:** `public/systems/<slug>/`; kişisel veriler kapatıldı (kuru temizleme müşteri adları/telefonları ve Raporlar'daki tüm tutarlar, hesap e-postaları).
- tsc/build/lint 0; 26 yeni yol 200; yatay taşma yok. Lighthouse mobil A11y 96 / BP 100 / SEO 100; Perf 79–92 **geçersiz ortamda** (CPU kıyas çoğu <1200, Chrome açık) — yeniden ölçülecek.

## Sonraki Adım
1. **Emre:** RAPOR-P8 "Bekleyen kararlar" (özellikle OSGB canlı sitesinin "SaaS" dili; kuru temizleme tutarları kapatıldı) → commit+push → preview.
2. **Emre:** geçerli ortamda Lighthouse (adaptör takılı, Chrome kapalı): `/`, `/sistemler/osgb-yonetim/`, bir Bilgi Bankası yazısı, 3'er koşum.
3. Yayın sonrası Search Console: sitemap + RAPOR-P8'deki URL listesi için "Dizine eklenmesini iste".
4. CD final tam-sayfa QA (LOCK v0.7 yeni şablonlar + 2 text link) → Faz 5.

Açık kalanlar:
- **RAPOR-P8:** SSS cevap taslakları ve stack/süreç maddeleri Emre onayı · EN çeviriler · arama kelimesinin tanımda geçmemesi · "kurduğumuz sistem" etiketi · Clinic OS hero kaynağının çözünürlüğü.
- **RAPOR-P7 bekleyen kararlar:** nav 1024–1179 hamburger · gizlilik §2a'da site formu için sektör/çalışma alanları yok (P8 ile e-postaya "ilgilenilen sistem" de eklendi) ·
  EN gizlilik çevirisi Emre onayı · ikinci WhatsApp numarasında mesaj yok.
- **Kontrast:** Doveify mavisi `#2563eb` koyu zeminde 3,81:1; küçük mavi metinler WCAG 4,5 altında (A11y 96'nın tek düşen kalemi). Karar CD'nin.
- **Bağımlılıklar:** kalan 22 zafiyet major sürüm istiyor (Next 16, ESLint 9 / eslint-config-next, glob, swiper). `swiper` kullanılmıyor.
- **404** yalnız TR. **P4'ten:** Why liste aralığı, Teknik Telsiz logosunun beyaz kopyası, Bizim OSGB / Ömer Mutfak için büyük kaynak.
- Kod yeri: V2 bileşenleri `src/components/HomePageV2/` (CasePage, OwnSoftwarePage, KbPages dahil); içerik `content/` (sistemler `content/{tr,en}/cases/`, yazılar `content/{tr,en}/bilgi/*.md`);
  sayfalar `src/pages/{index,iletisim,gizlilik,kendi-yaziliminiz}.tsx`, `src/pages/{sistemler,bilgi-bankasi}/`, `src/pages/en/`; yardımcılar `src/utils/{bilgi,case-props}.ts`; betikler `scripts/{og.py,sitemap.js}`.
  Catch-all `[...slug].js` artık boş (blog `_legacy/`'de).
