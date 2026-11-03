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
| 2 | Approved Design → DESIGN-LOCK | 🟡 LOCK v0.1 var (NAV, HERO kilitli — PAKET-P1-HERO-NAV brief'inin otoritesi) ama repoda DEĞİL: `DESIGN-LOCK.md` ve `docs/design/approved/homepage-v1.png` bulunamadı. Emre'de/CD'de duruyor olabilir — repoya eklenmeli. |
| 3 | Implementation (P1–P5) | 🟡 Başladı — **P1 (PAKET-P1-HERO-NAV + PAKET-P1R-KAFA-MASKE)**: nav+hero LOCK v0.1'e uydurma + kafa maske revizyonu tamam, kapı geçti. **P2-A + P2AR (Ürünler bölümü)**: implementasyon commit'lenmedi, tsc/build/lint geçti, **performans kapısı GEÇMEDİ** (son kodda mobil medyan 88, hedef ≥95). bkz. RAPOR-P1-HERO-NAV.md, RAPOR-P1R-KAFA-MASKE.md, RAPOR-P2A.md, RAPOR-P2AR.md. P3-P5 bekliyor. |
| 4 | Visual QA + Lighthouse + Deploy (preview) | ⬜ Bekliyor |
| 5 | DNS cutover + eski site arşivi | ⬜ Bekliyor |

## Görsel Otorite
- Referans: `docs/design/reference/homepage-ref-v1.png` (CD üretimi, 03.09.2026)
- Karar: Emre — "bunun aynısına evireceğiz". Referans görsel ANA yön.
- CD metni (`docs/design/reference/CD-SAYFA-KURGUSU.md`) tamamlayıcı; görsel ile çeliştiğinde **görsel esas**, çelişki aşağıda karara açılır.
- `docs/design/approved/homepage-v1.png` ve `DESIGN-LOCK.md` (v0.2, 05.09.2026) artık repoda —
  önceki "eksik" notu güncel değildi, ikisi de eklendi. `DESIGN-LOCK.md`: NAV, HERO kilitli (P1 +
  P1-R CD APPROVED); diğer bölümler CD-REVİZE-BEKLİYOR (aşağıdaki #4–#8).

## Bekleyen Kararlar (Emre)
1. ✅ **Repo** — `D:/content-ops-starter-main`, branch `v2`
2. **Dil** — Referans TR, mevcut site EN. Seçenek: (a) sadece TR, (b) TR ana + EN ikinci, (c) sadece EN. Öneri: TR/EN, TR varsayılan (Türkiye pazarı + London için EN gerekli)
3. ✅ **Logo bileşimi** — amblem sol + wordmark + heartbeat (wordmark'ın devamı). Amblem favicon/OG'de de kullanılır. (03.09.2026)
4. **Dijital Dönüşüm bölümü** — CD metni: tek hat `DATA → AI → SYSTEMS → AUTONOMY` (4 faz zincir). Referans görsel: 4 ikonlu kart (Strateji / Süreç / Veri / Teknoloji). İkisi farklı hem yapı hem içerik. Hangisi?
5. **Sahiplik bölümü** — CD metni: "TOOLS ARE RENTED. KNOWLEDGE SHOULD NOT BE." + SaaS/Doveify karşılaştırma, ikon yok. Görsel: 3 ikonlu kart + yan kart. Hangisi?
6. **Why Doveify manifesto (CD 06)** — Görselde yok. Eklenecek mi, çıkarılacak mı?
7. **Work/Proof** — CD: site crop'ları; görsel: logo bandı (memarts, teknikradyo, Delta OSGB, BİNNUR, akort, ERA ROSE). Öneri: logo bandı (Faz 1), crop'lar Faz 2 içerik gelince
8. **Nav** — Görsel nav: Ürünlerimiz / Web Factory / Dijital Dönüşüm / Sahiplik / Çalışmalar / İletişim. Mevcut sitedeki "Book a Demo" (cal.com) ve TurkISG AI nav'da yok. Demo CTA nereye?
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
- **P2AR** — `paketler/PAKET-P2AR-CAROUSEL-DUZELTME.md` (P2-A'nın görsel + performans revizyonu).
  Rapor: RAPOR-P2AR.md. Kod commit'lenmedi.
- **Kapı durumu: GEÇMEDİ.** Son kodda mobil Lighthouse medyan **88** (94, 88, 88; LCP 3425 ms, TBT
  139 ms; hedef ≥95). Önceki kodda: B1+B2+B3 → 93, B4 → 91, B4 tekrar → 93, kayma düzeltmesi → 87–88.
- **Ölçüm notu:** koşum sırasında Chrome penceresi açıktı (PID 10480) ve başka node süreçleri vardı;
  "başka chrome/node kapalıyken" koşulu sağlanmadı. CPU kıyas değeri 1278–2455, uyarı yok. Eski kod benzer
  CPU'da 92–93 veriyordu; düşüşün sebebi ayrıştırılmadı (hipotez RAPOR-P2AR.md §1).
- Geçenler: CLS 0, LCP = hero kafa (18 koşum), `tsc`/`build`/`lint` exit 0 (yeni uyarı yok), yatay
  taşma yok (1280 ve 375'te `scrollWidth === clientWidth`, ölçüldü), mobilde `scrollY` 0.
- **A7 kapandı:** görsel 480×200 tam görünür, 24 px taşıyor, CTA tıklanabilir.
- **A6 hedef tutmadı:** görünür peek ölçülen 19,4 px, hedef 28 (sebep pasif `scale(.94)`).
- **A4 hedef tutmadı:** bölüm ölçülen 735,6 px, hedef 640–700 (verilen değerlerin toplamı).
- A1, A2, A3, A5, A7, B1–B4 uygulandı (sapmalar RAPOR-P2AR.md). 5 QA görüntüsü son koddan çekildi.

## Sonraki Adım
CD görsel onayı → commit → P3

Bu adımdan önce açık kalanlar (RAPOR-P2AR.md "Açık sorunlar" ve "Bekleyen kararlar"):
- **Performans kararı:** medyan 88 kabul mü, basitleştirme mi (paket B4 "DUR" kuralı). Karardan önce
  Chrome tamamen kapalıyken tekrar ölçmek sonucu daha güvenilir kılar.
- **Görsel kararlar:** mobil peek 19,4 px kabul mü (28 px için kart `calc(100vw - 104px)` veya pasif ölçek
  kalkar); bölüm 735,6 px kabul mü (hedef için padding 36 px kısılır).
- **CD paketi:** `docs/design/P2A-OLCU-ONERISI.md` hâlâ P2-A değerlerinde; güncel ölçüler
  RAPOR-P2AR.md'de.
- CD kararları #4–#8 ve karar #2 (dil) hâlâ açık.
- Kısıt hâlâ geçerli: yeni homepage kodu `src/components/HomePageV2/` altında kalmalı, ayrı
  bir `src/pages/index.*` açılmamalı (bkz. RAPOR-P00.md "Olay kaydı #3").
