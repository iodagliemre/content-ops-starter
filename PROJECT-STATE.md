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
| 1 | Referans → Araştırma → Performance Gate (hero motion prototipi) | 🟡 Kapı sayısal olarak geçti (mobil Lighthouse medyan 95, CLS 0) — FAZ-PLANI.md'nin resmi kapanışı Emre'nin "geç" demesini bekliyor. bkz. RAPOR-P01.md, docs/perf/GATE-1-hero.md |
| 2 | Approved Design → DESIGN-LOCK | ⬜ Bekliyor |
| 3 | Implementation (P1–P5) | ⬜ Bekliyor |
| 4 | Visual QA + Lighthouse + Deploy (preview) | ⬜ Bekliyor |
| 5 | DNS cutover + eski site arşivi | ⬜ Bekliyor |

## Görsel Otorite
- Referans: `docs/design/reference/homepage-ref-v1.png` (CD üretimi, 03.09.2026)
- Karar: Emre — "bunun aynısına evireceğiz". Referans görsel ANA yön.
- CD metni (`docs/design/reference/CD-SAYFA-KURGUSU.md`) tamamlayıcı; görsel ile çeliştiğinde **görsel esas**, çelişki aşağıda karara açılır.
- `docs/design/approved/` henüz BOŞ. Performance Gate geçince referans buraya kopyalanır. Chat onayı ≠ kalıcı kayıt.
- DESIGN-LOCK.md: YAZILMADI. Faz 2'de yazılır.

## Bekleyen Kararlar (Emre)
1. ✅ **Repo** — `D:/content-ops-starter-main`, branch `v2`
2. **Dil** — Referans TR, mevcut site EN. Seçenek: (a) sadece TR, (b) TR ana + EN ikinci, (c) sadece EN. Öneri: TR/EN, TR varsayılan (Türkiye pazarı + London için EN gerekli)
3. ✅ **Logo bileşimi** — amblem sol + wordmark + heartbeat (wordmark'ın devamı). Amblem favicon/OG'de de kullanılır. (03.09.2026)
4. **Dijital Dönüşüm bölümü** — CD metni: tek hat `DATA → AI → SYSTEMS → AUTONOMY` (4 faz zincir). Referans görsel: 4 ikonlu kart (Strateji / Süreç / Veri / Teknoloji). İkisi farklı hem yapı hem içerik. Hangisi?
5. **Sahiplik bölümü** — CD metni: "TOOLS ARE RENTED. KNOWLEDGE SHOULD NOT BE." + SaaS/Doveify karşılaştırma, ikon yok. Görsel: 3 ikonlu kart + yan kart. Hangisi?
6. **Why Doveify manifesto (CD 06)** — Görselde yok. Eklenecek mi, çıkarılacak mı?
7. **Work/Proof** — CD: site crop'ları; görsel: logo bandı (memarts, teknikradyo, Delta OSGB, BİNNUR, akort, ERA ROSE). Öneri: logo bandı (Faz 1), crop'lar Faz 2 içerik gelince
8. **Nav** — Görsel nav: Ürünlerimiz / Web Factory / Dijital Dönüşüm / Sahiplik / Çalışmalar / İletişim. Mevcut sitedeki "Book a Demo" (cal.com) ve TurkISG AI nav'da yok. Demo CTA nereye?
9. ✅ **Hero motion tekniği** — Framer Motion ONAYLI (bu proje için). Önce CSS dene; Framer Motion yalnızca CSS ile temiz çözülemeyen yerde (hero kafa oluşumu, 3D carousel). Performance Gate şartı değişmez. (03.09.2026) **PAKET-01 sonucu**: saf CSS yeterli oldu, Framer Motion'a hiç gerek kalmadı. **Sapma**: kafa katmanı animasyonundan `opacity` çıkarıldı (scale+blur yerine sadece scale) — `opacity:0` ile başlayan elemanlar Chrome'da LCP adayı sayılmıyor, `NO_LCP` hatasına yol açıyordu. Detay: RAPOR-P01.md, docs/perf/GATE-1-hero.md. Faz 2'de CD ile teyit edilmeli.
10. ✅ **Hero görseli kaynağı** — (a) seçildi: referans görselden Python/Pillow ile kesilmiş statik WebP (`public/hero/head-placeholder*.webp`), gerçek CD katmanları gelene kadar placeholder. Performance Gate'i geçti (mobil medyan 95). (03.09.2026)
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
- `paketler/PAKET-01-HERO-GATE.md` — Nav + Hero gerçek içerikle kuruldu, CSS motion (G4)
  uygulandı, Performance Gate koşuldu. Kapı sayısal olarak geçti: `tsc`/`build`/`lint` exit 0,
  mobil Lighthouse medyan 95, CLS 0. Yolda bir `NO_LCP` hatası bulunup kök nedeniyle
  düzeltildi (opacity animasyonu LCP adayını gizliyordu — bkz. RAPOR-P01.md,
  docs/perf/GATE-1-hero.md). Ekran görüntüleri: docs/qa/P01-1280.png, P01-375.png.

## Sonraki Adım
1. **Emre**: `docs/perf/GATE-1-hero.md` + `docs/qa/P01-*.png` incele, Faz 1'i "geç" de
   (FAZ-PLANI.md'nin resmi kapı şartı). #9'daki opacity sapmasını CD ile teyit et.
2. Karar #2 (dil) açık; #4–#8 hâlâ açık — Faz 1'in FAZ-PLANI.md'deki resmi kapanışı için bu
   fazın sonuna kadar karara bağlanmalı olmaları gerekiyordu, PAKET-01 kapsamı (sadece hero+nav)
   bunlara dokunmadı.
3. Gate geçtikten sonra Faz 2 (Approved Design + DESIGN-LOCK): referans görsel `docs/design/
   approved/`'a kopyalanır, `DESIGN-LOCK.md` yazılır. Önemli kısıt hâlâ geçerli: yeni homepage
   kodu `src/components/HomePageV2/` altında kalmalı, ayrı bir `src/pages/index.*` açılmamalı
   (bkz. RAPOR-P00.md "Olay kaydı #3").
