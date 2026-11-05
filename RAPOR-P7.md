# RAPOR-P7 — PAKET-P7-ILETISIM-REVIZYON

> Paket: `paketler/PAKET-P7-ILETISIM-REVIZYON.md` · Taban: `v2` @ `ec94b54` (+ `de1e55e` deploy tetik) · Tarih: 05.11.2026
> Git komutu çalıştırılmadı. Branch/commit Emre'nin. Silme yok; değişen/taşınan dosyaların eski hali `_legacy/`'de.
> Öneri commit: `feat(iletisim): P7 iletisim + gizlilik sayfalari, WhatsApp buton, nav/CTA revizyonu, Web Factory slayt, sistem ekranlari; LOCK v0.6`

## Kapı özeti
| Kapı | Sonuç |
|---|---|
| `tsc --noEmit` | exit 0 |
| `npm run build` | exit 0 (`/iletisim`, `/en/contact`, `/gizlilik`, `/en/privacy` SSG; `/api/contact` fonksiyon) |
| `npm run lint` | exit 0 (2 uyarı, ikisi de P7 öncesinden: `ImageBlock` ve `Nav.tsx` `<img>`) |
| Yollar | 10 sayfa 200 · `/privacy/` 301 → `/gizlilik/` · `/clinic`, `/brokers-brain`, `/signup`, `/pricing`, `/careers` 301 (sondaki `/` olmadan Next önce 308 → `/x/`, sonra 301; Netlify'da `netlify.toml` doğrudan 301) · `/yok/` 404 |
| Form | Yerel: doğrulama, honeypot, rate limit, hata durumu + WhatsApp linki ✅ (P7 son: Netlify Forms fallback'i kaldırıldı). **Gerçek Resend gönderimi test edilmedi** (anahtar yalnız Netlify'da) → preview'da tek test gönderimi gerekiyor |
| WhatsApp buton | 11 V2 sayfasının hepsinde (TR/EN home, 2+2 vaka, iletişim ×2, gizlilik ×2, 404) |
| Placeholder | `[EMRE-STACK]` / `[EMRE-SONUÇ]` kodda ve sayfa metninde 0 (grep + sayfa taraması) |
| Lighthouse mobil | Homepage 3×: medyan **Perf 97 · A11y 96 · BP 100 · SEO 100** (≥90 / ≥95 ✅) — **Chrome açıkken** ölçüldü, aşağıya bakın |
| Yatay taşma | 1280 ve 375'te 11 sayfada yok |

## G0 — Teknik
1. **`<html lang>` / hreflang / LangSwitch:** `ec94b54` preview HTML'inde zaten doğru (`lang="tr"`, tr/en/x-default hreflang, relative `/` ve `/en/`). Değişiklik gerekmedi. Yeni sayfalarda da doğru: her sayfa kendi canonical + hreflang çiftini yazıyor (ör. `/iletisim/` ↔ `/en/contact/`).
2. **Ürünler çift SSR:** `Products.tsx` iki düzeni sarmalayıcıya aldı. SSR ve ilk render'da mobil rail `aria-hidden="true"`; JS `matchMedia('(min-width:1024px)')` hemen (idle beklemeden) cevaplayınca ekranda olmayan düzen `aria-hidden` + `inert` alıyor. Doğrulama: 1280'de rail `aria-hidden=true inert`, 375'te desktop sahne `aria-hidden=true inert`.
3. **Placeholder'lar:** `EMRE_SONUC` / `EMRE_STACK` sabitleri ve kullanımları kaldırıldı (G6).

## G1 — İletişim sayfası (`/iletisim/`, `/en/contact/`)
- `ContactPage.tsx` + `ContactForm.tsx` + `SubPage.tsx` (nav, footer, WhatsApp buton ve sayfaya özel head'i olan ortak kabuk). Desktop: sol H1 `Projenizi konuşalım.` 300 48/32 + alt metin + 4 kanal kartı, sağ form kartı. Mobil: başlık → form → kartlar.
- Kartlar: koyu zemin, 1px kenarlık, radius 12, ikon 20px monokrom beyaz, hover'da kenarlık ve ikon mavi. WhatsApp 0542 805 08 15 (brief'teki `?text=` ile), WhatsApp 0553 770 65 50, emre@doveify.io, Instagram @doveify.io.
- Form alanları, sektör ve çalışma listeleri, KVKK metni, buton ve başarı metni brief'ten aynen. "Mevcut web sitesi durumu" yok. KVKK linki `/gizlilik/`'e, yeni sekmede.
- Hata: kırmızı yok. Alan kenarlığı mavi, altında 13px secondary metin ve başında 16px mavi çizgi; ilk hatalı alana odak. Başarı: form yerine kart + `WhatsApp: 0542 805 08 15 →` (WhatsApp kartına `#whatsapp` anchor); odak başarı kartına. Ekranlar: `docs/qa/P7-1280-iletisim-hata.png`, `P7-1280-iletisim-basari.png`.
- **Gönderim:** `POST /api/contact/` → Resend REST (`https://api.resend.com/emails`, SDK yok). Env: `RESEND_API_KEY` ve `RESEND_FROM` Netlify'da tanımlı (Emre 05.11.2026); opsiyonel `CONTACT_TO` (varsayılan emre@doveify.io). Konu `Yeni iletişim talebi — <işletme> (<çalışma>)`, düz metin gövde, e-posta varsa `reply_to`.
- **Spam:** honeypot alanı `company_website` (doluysa gönderim yapmadan 200) + IP başına 10 dakikada 5 istek (bellek içi; fonksiyon örneği başına, best effort) → 429 ve ayrı bir mesaj.
- **Fallback yok (P7 son):** Netlify Forms fallback'i kaldırıldı; tek kanal Resend. Her hata durumunda (anahtar yok 503, Resend hatası 502, ağ hatası, 429) form yerinde kalır, hata satırı ve sonunda `WhatsApp'tan yazın.` linki (`wa.me/905428050815?text=…`, `_blank`) görünür. Gizlilik metni §5/§7a ile uyumlu: site formu verisi yalnız e-postayla iletilir, saklanmaz.
- **Yerel test sonuçları** (prod build, `next start`, anahtar yok):
  - boş gönderim → 6 alan hatası, odak `Ad Soyad`
  - geçerli TR ve EN gövde → `503 {error:'not_configured'}` (yerelde anahtar yok) → tek POST `/api/contact/`, hata satırı + WhatsApp linki (TR/EN, `docs/qa/P7-1280-iletisim-gonderim-hata.png`)
  - geçersiz e-posta → 400 `email` · onaysız → 400 `consent` · honeypot → 200, gönderim yok · 6. istek → 429
  - `/api/contact/` 200 mock'lu → başarı kartı
- **Resend test e-postası: gönderilmedi.** Anahtar yerelde yok ve okunmadı (`.env*` dokunulmaz). Preview deploy sonrası Emre `/iletisim/`'den bir test talebi gönderip emre@doveify.io'ya ulaştığını kontrol etmeli.
- Meta: TR `İletişim — Doveify`, EN `Contact — Doveify`; description alt metin; OG ana sayfa görseli.

## G2 — Gizlilik sayfaları
- `docs/legal/gizlilik-2026-09-04.md`: Emre'nin dosyası bayt bayt kopya (sha256 `2edf5029…2652ae` kaynakla aynı). **Tek kelime değişmedi.**
- `/gizlilik/`: metin build sırasında bu dosyadan okunur ve yalnız yapıya ayrılır (`content/legal.ts`): satır 1 H1, satır 2 tarih, `1.`–`12.` H2, `a)`/`b)`/`c)` H3, kalan satır grupları paragraf (satırlar alt alta). Doğrulama: sayfadaki `<article>` metni kaynakla kelime kelime **aynı** (1272 / 1272 kelime), 12 H2, 5 H3. E-posta adresleri mailto linki oldu, metin aynı.
- Şablon: max-width 760, H1 300 40/32, H2 400 22, alt başlık 500 17, gövde 400 16 secondary lh 1.7.
- `/en/privacy/` (P7 son): TR metnin EN çevirisi `docs/legal/gizlilik-2026-09-04.en.md`, başında `This is an unofficial translation; the Turkish version prevails.` Aynı ayrıştırıcı ve şablon; sayfa metni dosyayla kelime kelime aynı (1612 / 1612), 12 H2, 5 H3. Başlık `Privacy and Personal Data Information Notice`. Eski Stackbit metni `_legacy/content/legal/privacy-en.md`, orijinal md `_legacy/content/pages/privacy.md`'de (catch-all artık `/privacy/` üretmiyor).
- 301: `next.config.js` `/privacy` + `/privacy/` → `/gizlilik/`; `netlify.toml` `/privacy` ve `/privacy/*` → `/gizlilik/`.
- Footer "Gizlilik Politikası" → `/gizlilik/`, EN "Privacy Policy" → `/en/privacy/`.

## G3 — CTA / nav
- Nav pill `Toplantı Talep Et` / `Book a Meeting` (cal.com, `_blank`, 40px, padding 22px). 6. link `İletişim` / `Contact` → iletişim sayfası (desktop + mobil overlay).
- **Nav sığmıyor (1024–1179):** altı link + uzun pill + büyük imza, EN ölçümüyle ~1175px istiyor; brief'in önerdiği 24px gap ile de 1024'te sığmıyor (linkler iki satıra kırılıyor, nav 1073px'e taşıyor). Uygulanan: tam nav **≥1180px** (gap 24, ≥1280 gap 32 eskisi gibi); 1024–1179 hamburger (overlay `top-20`). Ölçüm: 1180'de nav sağ kenarı 1156 (TR ve EN), linkler tek satır. → Bekleyen karar 1.
- Final CTA (home + 4 vaka): `TOPLANTI TALEP ET` → cal.com, `İLETİŞİM FORMU →` → `/iletisim/`; EN `BOOK A MEETING` / `CONTACT FORM →` → `/en/contact/`. E-posta linki kalktı.
- Footer İletişim kolonu ilk link `İletişim formu` / `Contact form`.
- **WhatsApp buton** (`WhatsAppButton.tsx`): sağ alt, 56px (r/b 24) desktop, 48px (r/b 16) mobil; `--color-v2-bg-base` zemin, 1px mavi kenarlık, beyaz monokrom ikon 24px, hafif mavi glow. 400px kaydırmada .3s fade-in, gizliyken `visibility:hidden` (odaklanmaz), hero'da görünmez; reduced motion'da geçişsiz. 404 kaymadığı için baştan görünür. `aria-label` TR `WhatsApp ile yazın` (brief), EN `Message us on WhatsApp`. Tek pasif scroll dinleyici + rAF.
- Brief'teki `--color-v2-bg` token'ı kodda yok; karşılığı `--color-v2-bg-base` kullanıldı.
- Ayrıca düzeltildi: footer DOVEIFY kolonundaki `#donusum` / `#sahiplik` / `#calismalar` linkleri P6'dan beri vaka sayfalarında boşa gidiyordu → `/#…` ve `/en/#…`. `BrandSignature` linki de dil ana sayfasının `#hero`'suna gidiyor.

## G4 — Marka imzası (Emre kararı)
- Nav + footer `BrandSignature`: amblem 36, wordmark 17px (.22em), heartbeat 64px, gap 12; mobil 32 / 15 / 48, gap 8. Nav yüksekliği 80/64 aynı, dikey ortalı. OG yeniden üretilmedi.
- Ekran: `docs/qa/P7-1280-nav.png`, `P7-375-nav.png`.

## G5 — Sistem görselleri
| Sistem | Kaynak | Çıktı | Not |
|---|---|---|---|
| Broker's Brain | `public/images/brokerbrain-dashboard.png` (eski landing'deki gerçek dashboard) | `products/brokers-brain.webp` 1200×800 (24 KB) + `-1600.webp` (35 KB) | Tarayıcı çubuğu ve yer imleri (üst 80px) kırpıldı, telefon kolonu satır satır bulanık, avatar baş harfleri bulanık; 3:2 soldan |
| OSGB Web | `https://osgb.doveify.io` canlı, 1600×1000, nav dahil | `products/osgb-web.webp` 1200×800 (37 KB) | Güven satırındaki iki kişisel iş e-postası bulanık |
| TurkISG AI | `https://turkisgai.doveify.io` canlı, 1600×1000 | `products/turkisg-ai.webp` 1200×800 (31 KB) | Hero'daki uygulama ekranında görünen kişisel e-posta (2 yer) bulanık |
| Clinic OS | — | mevcut `products/clinic-os.webp` (approved dashboard crop, 640×270) | **Emre: "demo giriş yok, approved crop kalsın"** |

- **Çekilemeyenler:** Clinic OS canlı dashboard (`clinic.doveify.io` giriş ekranı, demo hesap yok); TurkISG `app.` sohbet ekranı (giriş ekranı; yerine landing kullanıldı, landing'in hero'sunda uygulama dashboard'u görünüyor); Broker's Brain canlı uygulama çekilmedi (mevcut gerçek ekran görüntüsü kullanıldı). Çekim dosyaları scratchpad'de, repoya girmedi.
- Kart: merkez kart 480×200 kutu ve 24px taşma aynı; görsel `object-cover object-top`. Mobil rail 140px kutu `cover/top` + radius 8 (önceden placeholder'lar için `contain`). Geometri değişmedi.
- Vaka hero: 3:2 çerçeve (kenarlık + 6px şerit), max 640px, `object-top`; Broker's Brain `srcset` 1200/1600. Clinic OS hero'su 640×270 kaynaktan geldiği için yumuşak görünüyor (approved crop kararı).
- Eski placeholder WebP'ler: `_legacy/public/products/`.

## G6 — Vaka içerik
- Clinic OS teknoloji (9 pill) ve Broker's Brain teknoloji (9 pill, n8n yok) brief'ten aynen.
- Clinic OS "Ne kurduk"a 3 madde eklendi. Şablon başlık + açıklama olduğu için parantez içi açıklama alt satıra alındı, kelimeler aynı: `Klinik bazlı dinamik AI asistan` / `Çalışma saatleri, tedaviler, randevu.` · `Bring-your-own WhatsApp API` / `Müşterinin kendi numarası ve token'ı.` · `Multi-tenant Postgres (Supabase)` (açıklamasız; açıklama alanı opsiyonel yapıldı). Madde sayısı 9 oldu, 2 kolonda son madde tek kalıyor.
- "Sonuç" → **"Ne değişti"** (EN "What changed"); brief'in 3'er nitel maddesi aynen.
- Vaka CTA'ları G3'e göre güncellendi. OSGB / TurkISG için vaka sayfası açılmadı.

## G7 — Web Factory slayt (Emre kararı)
- Sıra 1 Teknik Telsiz → 2 Dr. Serap Korkmaz → 3 Dry Clean Online; aktif ekran merkezde, sonraki sağda. Yan ekran görünümü P3-R1 ile aynı (255×170 = aynı 450×300 kutu scale .567, ∓205px, ∓18°, Z −80, opacity .85); hareket tek transform/opacity transition `.55s`.
- Ok butonları Ürünler'in 36px butonu (ortak `ArrowButton.tsx`'e taşındı), açıklama + CTA'nın altında. Yan ekrana tıklama merkeze getiriyor; merkez ekran müşteri sitesi (`_blank`, `aria-label` "<ad> — siteyi yeni sekmede aç").
- Otomatik ölçüm: 0–3.5s TT → 3.5s Dr. Serap → 7s Dry Clean → durdu (11s'ye kadar izlendi). Hover 5s: değişmedi. Reduced motion 8s: değişmedi. Ok/tıklama otomatiği kalıcı kapatıyor.
- Mobil: 3 ekranlı snap-rail (Ürünler rail ölçüsü), otomatik yok, ekran → site.
- Sıra değişikliği: P3-R1'de sol Dr. Serap / sağ Dry Clean idi; şimdi ilk karede sağ Dr. Serap (sıradaki), sol Dry Clean.
- Ekran: `docs/qa/P7-1280-webfactory.png` (otomatik tur bitince, merkez Dry Clean), `P7-375-webfactory.png`.

## G8 — TR başlıklar
- Sahiplik TR `ARAÇLAR KİRALANIR.` / `BİLGİ KİRALANMAZ.`: 1280'de 56px'te her satır tek satır (satır yüksekliği 59px). 52px'e inmeye gerek kalmadı. EN değişmedi.
- Why TR `%100` / `SAHİPLİK`; EN `100%` / `OWNERSHIP`. Dönüşüm etiketleri EN.
- Ekran: `docs/qa/P7-1280-sahiplik.png`.

## G9 — Ev işi
- **DESIGN-LOCK v0.6:** NAV (G3/G4 + 1180 eşiği), ÜRÜNLER görsel notu (G5), WEB FACTORY slayt (G7), FİNAL CTA ve FOOTER linkleri, VAKA ŞABLONU "Ne değişti", SAHİPLİK/WHY TR metin (G8); her biri "Emre kararı 05.11.2026 — CD final QA'da görülecek" notlu. Yeni bölümler: İLETİŞİM SAYFASI, WHATSAPP BUTON, GİZLİLİK SAYFASI. v0.5 kopyası `_legacy/docs/DESIGN-LOCK-v0.5.md`.
- **Sitemap:** `/iletisim/`, `/en/contact/`, `/gizlilik/`, `/en/privacy/` (karşılıklı hreflang); `/privacy/` çıktı; lastmod 2026-11-05. Eski hali `_legacy/public/sitemap-P6.xml`.
- **`netlify.toml`:** `[[redirects]]` 301: `/privacy`, `/privacy/*` → `/gizlilik/`; `/clinic`, `/brokers-brain`, `/signup`, `/pricing`, `/careers` (next.config ile aynı hedefler).

## Lighthouse (mobil, simulate, Lighthouse 12.8.2, prod build + `next start`)
| Koşum | Perf | A11y | BP | SEO | LCP | TBT | CLS | CPU kıyas |
|---|---|---|---|---|---|---|---|---|
| home-1 | 90 | 96 | 100 | 100 | 3,38 s | 45 | 0 | 1324 |
| home-2 | 98 | 96 | 100 | 100 | 2,44 s | 43 | 0 | 1411 |
| home-3 | 97 | 96 | 100 | 100 | 2,52 s | 61 | 0 | 2014 |
| **medyan** | **97** | **96** | **100** | **100** | 2,52 s | 45 | 0 | 1411 |
| iletisim-2 | 94 | 100 | 100 | 100 | 2,07 s | 269 | 0 | 880 (yavaş CPU, geçersiz) |
| gizlilik-1 | 99 | 100 | 100 | 100 | 1,83 s | 97 | 0,009 | 1470 |

- **Protokol sapması:** Ölçüm öncesi Chrome'u kapatmanızı sordum, seçim gelmedi; 32 chrome.exe açıkken ölçtüm (kapatmadım). Adaptör takılıydı (`PowerOnline=True`). Homepage'in 3 koşumu da CPU kıyası ≥1200 olduğu için geçerli sayılır. Chrome kapalıyken tekrar ölçülürse sonuç daha temiz olur. Raporlar: `docs/perf/P7-*.report.json`.
- A11y'de düşen tek kalem `color-contrast`: mavi eyebrow'lar ve Web Factory CTA (`#2563eb` koyu zeminde 3,81). P6'dan beri aynı, LOCK rengi, P7 kaynaklı değil.
- İletişim sayfasının ilk ölçümü `NO_LCP` verdi: büyük öğelerin hepsi fadeUp ile opacity 0'dan başlıyordu (P1'deki sorunun aynısı). Başlık bloğu statik yapıldı, form fadeUp'ı kaldı; ikinci ölçümde LCP = alt metin.

## Bekleyen kararlar (Emre)
1. **Nav 1024–1179:** tam nav sığmadığı için bu aralıkta hamburger. Alternatifler: link metinlerini kısaltmak, `İletişim` linkini bu aralıkta gizlemek, 14px link. Onay ya da tercih.
2. **Gizlilik metni ile form alanları (metne dokunmadım):** metnin §2a listesinde site formu için sektör ve "istenen çalışma" yok (bunlar Meta formu listesinde var), form ise ikisini de topluyor. (Fallback kısmı P7 son'da kapandı.)
3. ~~EN gizlilik metni eski~~ → **kapandı (P7 son):** TR metnin resmî olmayan EN çevirisi yayında. Çeviriyi Emre gözden geçirmeli.
4. ~~Resend gönderici~~ → **kapandı:** `RESEND_API_KEY` ve `RESEND_FROM` Netlify'da tanımlı (Emre 05.11.2026).
5. **Gerçek test gönderimi:** preview'da bir test talebi → emre@doveify.io'ya ulaştı mı (kapının açık kalan tek maddesi).
6. **İkinci WhatsApp numarası** (0553 770 65 50) brief'te `?text=` olmadan verildi; mesajsız link olarak bıraktım.
7. **Clinic OS görseli:** approved crop (640×270) vaka hero'sunda 640px çerçevede yumuşak. Demo hesap açılırsa gerçek ekran P8'de alınabilir.

## Yeni mikro metinler / çeviriler (Emre gözden geçirir)
- TR (yeni): hata `Bu alan zorunlu.` · `Geçerli bir telefon numarası yazın.` · `Geçerli bir e-posta adresi yazın.` · `Göndermek için aydınlatma metnini onaylayın.` · `Talep gönderilemedi. Lütfen tekrar deneyin ya da WhatsApp'tan yazın.` · `Kısa sürede çok fazla talep gönderildi. …` · `GÖNDERİLİYOR…` · `Seçin` · `E-posta` (kart etiketi) · `İletişim kanalları` (liste etiketi) · `Bu alanı boş bırakın` (honeypot, görünmez) · başarı linki `WhatsApp: 0542 805 08 15` · Web Factory `Önceki site` / `Sonraki site` / ` — siteyi yeni sekmede aç` · Gizlilik meta description `Doveify <başlık>. <tarih>.`
- EN (çeviri): iletişim sayfasının tamamı (`Let's talk about your project.`, alanlar, listeler, KVKK satırı `I have read and accept the Privacy Policy.`, `SEND REQUEST →`, başarı/hata), WhatsApp mesajı `Hello, I'd like to learn more about Doveify.`, buton `Message us on WhatsApp`, nav `Book a Meeting` / `Contact`, CTA `BOOK A MEETING` / `CONTACT FORM →`, footer `Contact form`, vaka "What changed" maddeleri ve Clinic OS ek "What we built" maddeleri.

## Motion / Framer Motion
- Framer Motion kullanılmadı. Yeni CSS: WhatsApp buton fade .3s; Web Factory geçişi .55s (ikisi de yalnız `prefers-reduced-motion: no-preference` içinde); form fadeUp (mevcut `.v2-fade-up`). Web Factory otomatiği tek tur ve durur, sonsuz loop yok.

## Dosya listesi
**Yeni**
- `paketler/PAKET-P7-ILETISIM-REVIZYON.md`, `docs/legal/gizlilik-2026-09-04.md` (Emre'nin dosyaları, aynen)
- `content/contact.ts`, `content/tr/contact.ts`, `content/en/contact.ts`, `content/legal.ts`, `docs/legal/gizlilik-2026-09-04.en.md` (P7 son)
- `src/components/HomePageV2/{WhatsAppButton,ContactForm,ContactPage,SubPage,LegalPage,ArrowButton}.tsx`, `src/components/svgs/whatsapp.tsx`
- `src/pages/iletisim.tsx`, `src/pages/gizlilik.tsx`, `src/pages/en/contact.tsx`, `src/pages/en/privacy.tsx`, `src/pages/api/contact.ts`
- `public/products/brokers-brain-1600.webp`
- `docs/qa/P7-1280-{nav,iletisim,iletisim-hata,iletisim-gonderim-hata,iletisim-basari,webfactory,sahiplik,clinic}.png`, `docs/qa/P7-375-{nav,iletisim,webfactory,wa-button}.png`
- `docs/perf/P7-home-{1,2,3}.report.json`, `P7-iletisim-{1,2}.report.json`, `P7-gizlilik-1.report.json`
- `RAPOR-P7.md`

**Değişen**
- `content/{cases,finalCta,locale,nav,dict,webFactory}.ts`
- `content/tr/{index,nav,finalCta,footer,ownership,why,webFactory}.ts`, `content/tr/cases/{clinic-os,brokers-brain}.ts`
- `content/en/{index,nav,finalCta,footer,webFactory}.ts`, `content/en/cases/{clinic-os,brokers-brain}.ts`
- `src/components/HomePageV2/{Nav,BrandSignature,Products,ProductStageDesktop,ProductRailMobile,WebFactory,CasePage,index}.tsx`, `src/pages/404.tsx`, `src/css/main.css` (P7 bloğu)
- `public/products/{brokers-brain,osgb-web,turkisg-ai}.webp`, `public/__forms.html` (P7'de eklenen `contact` formu P7 son'da çıkarıldı; dosya P6 haline döndü, `signup` duruyor), `public/sitemap.xml`
- `next.config.js`, `netlify.toml`, `DESIGN-LOCK.md` (v0.6), `PROJECT-STATE.md`

**Taşınan / yedek (`_legacy/`)**
- `content/pages/privacy.md` → `_legacy/content/pages/privacy.md`; P7 son: `content/legal/privacy-en.md` → `_legacy/content/legal/privacy-en.md`, `_legacy/public/__forms-P7.html` (contact formlu hali)
- `_legacy/public/products/{brokers-brain,osgb-web,turkisg-ai}.webp` (eski placeholder'lar), `_legacy/public/sitemap-P6.xml`, `_legacy/docs/DESIGN-LOCK-v0.5.md`

## P7 son (Emre, 05.11.2026)
**(a) Netlify Forms fallback'i kaldırıldı.**
- `ContactForm.tsx`: Netlify'a gönderim fonksiyonu, `data-netlify`, `netlify-honeypot` ve gizli `form-name` alanı çıktı; `action` artık `/api/contact/` (JS kapalıyken de aynı route). Başarı dışındaki her yanıt (503, 502, 4xx, ağ hatası) hata satırını gösterir.
- Hata satırı: `Talep gönderilemedi. Lütfen tekrar deneyin ya da` + link **`WhatsApp'tan yazın.`** → `wa.me/905428050815?text=…` (`_blank`). 429'da `Kısa sürede çok fazla talep gönderildi. Lütfen biraz sonra tekrar deneyin ya da` + aynı link. EN: `Your request could not be sent. Please try again or` + `message us on WhatsApp.`
- `api/contact.ts`: anahtar yoksa `503 {error:'not_configured'}` + sunucu log'u; `fallback` alanı kalktı.
- `public/__forms.html`: P7'de eklenen `contact` formu çıkarıldı (contact formlu hali `_legacy/public/__forms-P7.html`). Netlify artık bu formu algılamaz, site formu verisi Netlify'da saklanmaz.
- Başarı kartına odak, bazı koşumlarda kaçıyordu (`requestAnimationFrame` commit'ten önce çalışabiliyor) → `useEffect` ile kart DOM'a girince odaklanıyor; doğrulandı.
- Test (prod build, anahtarsız): tek istek `/api/contact/` 503 → TR ve EN hata satırı + doğru WhatsApp linki; boş gönderim → 6 alan hatası; mock 200 → başarı kartı, odak kartta. Ekran: `docs/qa/P7-1280-iletisim-gonderim-hata.png`.

**(b) `/en/privacy/` = TR metnin EN çevirisi.**
- `docs/legal/gizlilik-2026-09-04.en.md`: yapı birebir (başlık, tarih, 1–12 bölüm, a/b/c alt başlıklar, adres blokları); en başta `This is an unofficial translation; the Turkish version prevails.` TR dosyasına dokunulmadı (`/gizlilik/` hâlâ 1272 / 1272 kelime aynı).
- Çeviri notları (Emre gözden geçirsin): "Aydınlatma Metni" → *Information Notice*; hukuki dayanaklar `KVKK Art. 5/2-c; UK GDPR Art. 6/1-b` biçiminde (kaynaktaki numaralama korundu); §3 ve §8'deki "…amaçlarıyla işlenebilir." / "…haklarına sahip olabilirsiniz." kapanış satırları İngilizcede giriş cümlesine alındı ("may be processed in order to:", "you may have the right to:"); §8'de kanun adı yanına "(KVKK)" eklendi.
- `/en/privacy/` sayfası `marked` yerine aynı ayrıştırıcıyı kullanıyor; markdown HTML yolu ve `.v2-legal-md` CSS'i kaldırıldı. Meta: `Privacy and Personal Data Information Notice — Doveify`, description `Doveify Privacy and Personal Data Information Notice (unofficial English translation). Last Updated: 4 September 2026.`
- EN iletişim formundaki onay metni sayfa adına uyduruldu: `I have read and accept the Privacy and Personal Data Information Notice.`; onay hatası `Please accept the information notice to send.` Footer etiketi `Privacy Policy` aynı kaldı.

**(c) Resend env:** `RESEND_API_KEY` ve `RESEND_FROM` Netlify'da tanımlı. Bekleyen karar 4 kapandı; kodda değişiklik gerekmedi (`RESEND_FROM` okunuyor).

**Kapı (P7 son):** `tsc --noEmit` 0 · `npm run build` 0 · `npm run lint` 0 (aynı 2 eski uyarı) · `/gizlilik/`, `/en/privacy/`, `/iletisim/`, `/en/contact/` 200, `/privacy/` 301. Lighthouse yeniden koşulmadı: değişiklik form hata dalı ve EN gizlilik metniyle sınırlı, homepage değişmedi.

**Hâlâ açık:** preview'da gerçek test gönderimi (Resend → emre@doveify.io) · nav 1024–1179 hamburger onayı · gizlilik §2a'da sektör/çalışma alanları · EN çeviri onayı.
