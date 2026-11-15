# RAPOR-P8 — Sistem sayfaları + Bilgi Bankası + SEO

> Paket: `paketler/PAKET-P8-SISTEM-SAYFALARI-BILGI-BANKASI.md` (Emre, 15.11.2026). Çalışma `v2` üzerinde, commit yok (git Emre'nin).
> Commit önerisi: `feat(p8): 6 sistem tanitim sayfasi, kendi yaziliminiz, bilgi bankasi, carousel 6 kart, seo`

## Kapı

| Madde | Sonuç |
|---|---|
| `tsc --noEmit` | **0** |
| `npm run build` | **0** (34 sayfa; `prebuild` sitemap'i üretir). Not: iki deneme makinede boş bellek ~0,9 GB iken Node "heap out of memory" ile düştü, kod değişmeden üçüncü deneme 0 — kod kaynaklı değil. |
| `npm run lint` | **0** (yalnız eski 2 `<img>` uyarısı: ImageBlock, Nav) |
| Yeni yollar 200 (TR+EN) | ✅ 26/26 (6+6 sistem, 2 çözüm, 2 liste, 5+5 yazı) + `/sitemap.xml`, `/robots.txt` |
| `/blog/*` 301 | ✅ `/blog/`, `/blog/case-study-1/` → **301** `/bilgi-bankasi/`. Eğik çizgisiz `/blog/x` yerelde önce Next'in kendi 308'iyle `/blog/x/`'e gider (P6/P7'deki `/clinic` ile aynı davranış); Netlify'da `netlify.toml` `/blog` ve `/blog/*` için doğrudan 301 verir. |
| Placeholder (`[EMRE-`) | ✅ 0. (`content/site.ts`'teki eski `[BEKLEYEN-İÇERİK]` notları P0'dan, dosya kullanılmıyor.) |
| Yatay taşma | ✅ yok — 17 yol × 375 ve 1280 |
| LOCK piksel farkı | ✅ homepage'de yalnız 2 text link (Sahiplik altı, Çalışmalar CTA yanı) + carousel kart sayısı/sırası (brief G1). `docs/qa/P8-{1280,375}-{sahiplik,calismalar}-link.png` |
| Mobil Lighthouse ≥90 / A11y·SEO·BP ≥95 | ⚠️ **Ölçüm ortamı geçersiz** — aşağıda. A11y 96, BP 100, SEO 100 her koşumda; Perf 79–92. |

### Lighthouse (12.8.2, mobil, prod `next start`, 3×)

| Sayfa | Koşum | Perf | A11y | BP | SEO | LCP ms | TBT ms | CLS | CPU kıyas |
|---|---|---:|---:|---:|---:|---:|---:|---:|---:|
| `/` | 1 / 2 / 3 | 89 / 90 / 79 | 96 | 100 | 100 | 3384 / 3359 / 3323 | 107 / 78 / 452 | 0 | 1040 / 875 / 1098 |
| `/sistemler/osgb-yonetim/` | 1 / 3 (2. koşum rapor yazmadı) | 89 / 89 | 96 | 100 | 100 | 3458 / 3453 | 102 / 109 | 0 | 1000 / 1197 |
| `/bilgi-bankasi/araclar-kiralanir-bilgi-kiralanmaz/` | 1 / 2 / 3 | 82 / 92 / 91 | 96 | 100 | 100 | 1710 / 2890 / 2891 | 718 / 173 / 211 | 0,001 | 1298 / 2254 / 1041 |

- **Geçersiz ortam:** P6 protokolüne göre CPU kıyas <1200 olan koşum geçersiz; 8 koşumun 6'sı altında. Ölçüm sırasında Emre'nin Chrome'u açıktı (21 süreç) ve boş bellek ~0,9 GB'tı. Chrome'u kapatmadım.
- Homepage LCP öğesi değişmeyen hero kafa görseli; P8 homepage'e yalnız 2 lazy kart görseli ve 2 link ekledi. P6'nın geçerli A0 setinde aynı sayfa 98 idi.
- **Emre:** adaptör takılı, Chrome kapalı, `npm run build && npm run start` + aynı 3 sayfa. Gate'in kapanışı bu ölçüme bağlı.

## Sayfa listesi

| Sayfa | TR | EN | Title (karakter) |
|---|---|---|---|
| Clinic OS | `/sistemler/clinic-os/` | `/en/systems/clinic-os/` | Clinic OS — Klinik Yönetim Yazılımı \| Doveify (45) |
| Broker's Brain | `/sistemler/brokers-brain/` | `/en/systems/brokers-brain/` | Broker's Brain — Emlak CRM ve WhatsApp Otomasyonu \| Doveify (59) |
| Emlak Ofis Paneli | `/sistemler/emlak-ofis-paneli/` | `/en/systems/real-estate-office-panel/` | Emlak Ofis Paneli — Emlak Yazılımı \| Doveify (44) |
| OSGB Yönetim | `/sistemler/osgb-yonetim/` | `/en/systems/osgb-management/` | OSGB Yönetim — OSGB Yazılımı \| Doveify (38) |
| Kuru Temizleme Paneli | `/sistemler/kuru-temizleme/` | `/en/systems/dry-cleaning-panel/` | Kuru Temizleme Paneli — Kuru Temizleme Yazılımı \| Doveify (57) |
| TurkİSG AI | `/sistemler/turkisg-ai/` | `/en/systems/turkisg-ai/` | TurkİSG AI — İSG Yapay Zekâ Asistanı \| Doveify (46) |
| Kendi Yazılımınız | `/kendi-yaziliminiz/` | `/en/your-own-software/` | Kendi Yazılımınızı Yaptırın — Özel Yazılım \| Doveify (52) |
| Bilgi Bankası | `/bilgi-bankasi/` | `/en/knowledge-base/` | Bilgi Bankası — Sahiplik, Sistemler, Yapay Zekâ \| Doveify (57) |
| 5 yazı | `/bilgi-bankasi/<slug>/` | `/en/knowledge-base/<slug>/` | aşağıda |

- Tüm sayfalarda: title ≤60, description ≤155 (ölçüldü), canonical (mutlak, `/` ile biten), hreflang tr/en/x-default, OG 1200×630, JSON-LD.
- JSON-LD: sistemler `SoftwareApplication` + `FAQPage`; Kendi Yazılımınız `Service` + `FAQPage`; yazılar `Article`; hepsinde mevcut `Organization` + `WebSite`.
- **Yazı title kuralı (yazı başlığı değiştirilmeden):** `başlık | Doveify` 60'a sığarsa o; sığmazsa yalnız başlık; o da sığmazsa ilk `:` / `?`'ye kadarki kısım + ` | Doveify` (`src/utils/bilgi.ts` `metaTitleFor`). Sonuç: "SaaS mı, özel yazılım mı? İşletmeniz için doğru model" (53), "Araçlar kiralanır, bilgi kiralanmaz \| Doveify" (45), "Her işletmenin kendi yapay zekâsı olmalı mı? \| Doveify" (54), "Kendi yazılımınızı yaptırmadan önce sorulacak 7 soru" (52), "Excel'den sisteme geçiş: küçük işletmeler için yol haritası" (59).

## Yapılanlar

### G1 — 6 sistem, carousel, footer, sitemap
- Carousel 4 → 6 kart, sıra Clinic OS → Broker's Brain → Emlak Ofis Paneli → OSGB Yönetim → Kuru Temizleme → TurkİSG AI. İlk state Clinic OS merkez (index 0; solda kart yok, sol ok disabled — doğrulandı; sonda sağ ok disabled — doğrulandı). Geometri, tipografi, otomatik kaydırma yok kuralı aynı. `docs/qa/P8-1280-carousel-6.png`, `P8-1280-carousel-6-son.png`.
- Her kart CTA'sı `SİSTEMİ İNCELE` → tanıtım sayfası, `target` yok (doğrulandı). Kart başlığı `OSGB WEB` → `OSGB YÖNETİM` (sistemin adı). Yeni iki kartın tek satırlık açıklaması tanımdan kısaltıldı: "Emlak ofisleri için portföy, müşteri ve randevu takibi." / "Kuru temizleme için sipariş, müşteri ve tahsilat yönetimi."
- Footer "Kurduğumuz Sistemler" 6 sistem (hepsi iç sayfa, `CASE_SLUGS`'tan üretiliyor); "DOVEIFY" kolonuna `Kendi Yazılımınız`, `Bilgi Bankası`.
- Yollar tek yerde: `content/locale.ts` (`CASE_PATH`, `OWN_SOFTWARE_PATH`, `KB_PATH`, `kbArticlePath`, `contactForWork`).

### G2 — Tanıtım şablonu (`CasePage.tsx`)
- Sıra: Hero → Kim için → Sorun → Ne yapar → Ekranlar → Rakamlar (yalnız OSGB, TurkİSG AI) → Teknoloji → Ne değişti (yalnız Clinic OS / Broker's Brain, P7 metni korundu) → Sahiplik kutusu → SSS → İlgili okumalar → Final CTA.
- Hero: eyebrow + `CANLI` / `PROTOTİP` etiketi; `SİSTEMİ İNCELE →` (canlı uygulama, `_blank`) + `BENZERİNİ İSTEYİN →` (`/iletisim/?calisma=<slug>`); TurkİSG AI'de `ÜCRETSİZ DENE →` → `app.turkisgai.doveify.io`.
- `?calisma=` → iletişim formunda "İstenen çalışma" önseçili (doğrulandı: `?calisma=turkisg-ai` → "İşletmeye özel yapay zekâ") + gizli `calisma` alanı; API e-postaya `İlgilenilen sistem: <slug>` satırı ekler (yalnız bilinen slug kabul edilir, diğerleri sessizce atılır). Eşleme: 5 sistem → "Kurumsal sistem (CRM/ERP benzeri)", TurkİSG AI → "İşletmeye özel yapay zekâ", `kendi-yaziliminiz` → "Web / mobil uygulama".
- Ekranlar: yatay rail, native scroll-snap, JS yok, klavyeyle kaydırılabilir (`tabIndex=0`).
- Mevcut 2 sayfa (Clinic OS, Broker's Brain) bu şablona geçti; sayfa dosyaları ortak `src/utils/case-props.ts`'i kullanıyor.

### G3 — İçerik
- Brief metinleri (tanım, kim için, sorun, ne yapar, rakamlar, teknoloji, SSS soruları) aynen. **SSS cevaplarını ben yazdım** (brief yalnız soruları veriyordu); kaynakları aşağıda.
- Clinic OS / Broker's Brain: mevcut içerik + 5 SSS; meta title/description arama kelimeli yenilendi.

### G4 — Kendi Yazılımınız
- Şirket Tanıtım PDF: s.2 (Kritik süreçler kiralık araçlarda: Veri / Kurumsal hafıza / Kontrol), s.3 manifesto, s.4 SaaS vs Doveify (4+4), s.6 rakamlar, s.11 üç adım. Nasıl çalışıyoruz: brief'in 4 adımı (yalnız adım adları; açıklama uydurmadım). 6 sistem linki, 5 SSS, ilgili 3 yazı, Final CTA (homepage metni).
- Homepage Sahiplik kapanış cümlesinin altına `Kendi yazılımınızı yaptırın →`.

### G5 — Bilgi Bankası
- `docs/kaynak/bilgi-bankasi-5-yazi.md` → `content/tr/bilgi/<slug>.md` (frontmatter dahil **birebir**, betikle bölündü). EN: `content/en/bilgi/` (5 çeviri).
- Frontmatter YAML ile değil satır satır okunuyor: kaynak başlıklarda `: ` var (YAML tırnaksız kabul etmiyor), dosyalara dokunmamak için. Yeni yazı = aynı 6 alanlı `.md` dosyası; sonraki build'de liste, sayfa ve sitemap'e girer. İlk `# H1` render edilmiyor (sayfa başlığı H1).
- OG: `public/og/bilgi/<slug>{,-en}.png` (`python scripts/og.py bilgi`); dosya yoksa sayfa `og/bilgi-bankasi.png`'yi kullanır.
- Stackbit demo blog (`content/pages/blog/*`, 12 dosya) → `_legacy/content/pages/blog/` (silme yok). `/blog`, `/blog/*` → 301 `/bilgi-bankasi/` (`next.config.js` + `netlify.toml`).
- Homepage Çalışmalar CTA'sının yanına `BİLGİ BANKASI →` (EN `KNOWLEDGE BASE`).

### G6 — SEO / dizin
- `public/sitemap.xml` artık `scripts/sitemap.js` ile üretiliyor ve `prebuild`'e bağlı (32 URL, hreflang alternatifli). `robots.txt` aynı.
- İç link ağı: her sistem → 2 ilgili yazı + `/kendi-yaziliminiz/`; her yazı → ilgili sistem + `/kendi-yaziliminiz/` (sağ kutu); `/kendi-yaziliminiz/` → 6 sistem + 3 yazı.

### G7 — Görseller

| Sistem | Hero | Ekranlar | Kaynak | Kişisel veri |
|---|---|---|---|---|
| Clinic OS | PDF s.8 laptop (1596×1064) | Dashboard, haftalık takvim | Şirket Tanıtım PDF + repodaki uygulama ekranları (`public/images/clinic-*.png`) | sol alttaki hesap e-postası kapatıldı; hasta adı görünen "Tedaviler" ekranı kullanılmadı |
| Broker's Brain | mevcut 1600 (P7) | Canlı WhatsApp, talep listesi, performans | repodaki uygulama ekranları | demo lead'ler; P7 bulanıklığı korundu |
| Emlak Ofis Paneli | Bugün (1358×905) | Bugün, Takvim, mobil portföy detayı | Emlak broşürü gömülü ekranları + Kılavuz s.6 (kırpım; 2 numaralı işaret rozeti boyandı) | demo verisi; **Kılavuz s.3 "Kayıt" ekranı kullanılmadı** (formda kişisel e-posta adresi var) |
| OSGB Yönetim | Dashboard (1494×996) | İSG Katip planlama, doküman takip, performans | `osgb.doveify.io` ürün görselleri | demo firmalar |
| Kuru Temizleme | Raporlar (1328×885) | Siparişler, Müşteriler, Raporlar, Ürünler | **Emre'nin ekran görüntüleri** (15.11.2026) | müşteri adları + telefonları gri çubukla kapatıldı; sağ üstteki işletme e-postası kapatıldı; **Raporlar'daki tüm tutarlar** (ciro, nakit, kart, havale, açık alacak, gider, avans, Net Kasa ve alt satırı) gri çubukla, grafik ekseni etiketleri silindi (Emre, 15.11.2026) — sipariş/parça adetleri açık |
| TurkİSG AI | Fotoğraf analizi (843×562) | Asistan, fotoğraf analizi, kontrol listesi, deneme sınavı | `turkisgai.doveify.io` ürün görselleri | sol alttaki hesap e-postası kapatıldı |

- Hepsi `public/systems/<slug>/hero.webp` + `screen-N.webp`, 3:2, ≤66 KB (sınır 120). TurkİSG kaynakları 1200 px genişlikte olduğu için 3:2 kırpım 843 px kaldı (1600/1200 değil).
- Carousel: `public/products/{emlak-ofis-paneli,kuru-temizleme}.webp` (1200×800). OG: 6 sistem × TR/EN yeniden üretildi (Clinic OS ve Broker's Brain dahil).
- Ham kaynaklar (Emre'nin ekran görüntüleri, PDF çıkarımları) ve kırpım betiği yalnız oturum geçici klasöründe; repoya ham, kapatılmamış görsel girmedi.
- Emlak demo hesabıyla giriş **yapılmadı** (soruya yanıt gelmedi; talimattaki "yoksa PDF" yolu). Kuru temizleme prototipine de girilmedi; Emre'nin 4 ekranı kullanıldı.

## SSS cevap kaynakları (onay bekler)

- **Kaynaklı (PDF / canlı site / mevcut metin):** Clinic 1–4 (vaka metni + PDF s.8), Broker 1–3 (vaka metni), Emlak 1–5 (broşür + kılavuz s.18), OSGB 1–3, 5 (`osgb.doveify.io`), Kuru 1, 4 (brief + ekranlar), TurkİSG 1–5 (brief + PDF s.10 + `turkisgai.doveify.io`), Kendi Yazılımınız 1–5 (Bilgi Bankası yazıları; 5. cevap 4. yazıdan neredeyse aynen).
- **Çıkarım — Emre doğrular:** Clinic 5 (mevcut kayıt aktarımı "kurulum kapsamında planlanır"), Broker 4 (portföy eşleştirme ayrıntısı) ve 5 (danışman sayısı), OSGB 4 (veri kimde), Kuru 2 (müşteriye bildirim), 3 (şube), 5 (fiş düzeni).

## "Emre doğrular" işaretli maddeler

1. **Teknoloji pill'leri:** Emlak `React · TypeScript · Supabase · Excel içe aktarma · PWA`; OSGB `React · TypeScript · Supabase · Resend`; Kuru `React · TypeScript · Supabase · PWA`; TurkİSG `RAG · OpenAI · Supabase · React` (hepsi brief'teki gibi).
2. **Nasıl çalışıyoruz:** Keşif görüşmesi → Kapsam ve teklif → Kurulum ve eğitim → Bakım ve geliştirme.
3. **Broker's Brain canlı adresi** brief'te yoktu; eski sayfadan `https://brokerbrain.doveify.io` alındı.
4. **Kuru Temizleme "Ne yapar"** prototip ekranlarından doğrulandı: brief'teki "PWA" maddesi ekranlarda doğrulanamadığı için çıkarıldı; ekranlarda görülen **"Ürün ve fiyat matrisi"** eklendi; durumlar gerçek sekmelere göre (yıkamada / teslim edilecek / serviste / teslim edildi), brief'teki "alındı / işlemde / hazır" değil.
5. **OSGB "Ne yapar"** açıklamaları `osgb.doveify.io`'dan doğrulandı.

## Bekleyen kararlar

1. ✅ **Kapandı (Emre, 15.11.2026):** Kuru temizleme Raporlar ekranındaki ciro/tahsilat tutarları tüm görünümlerde (ekran şeridi, hero, carousel kartı, OG TR/EN) gri çubukla kapatıldı; grafik ekseni etiketleri silindi. Sipariş (212) ve parça (1.130) adetleri tutar olmadığı için açık.
2. **OSGB canlı sitesi kendini "SaaS platformu" olarak tanıtıyor** (fiyatlandırma, pilot, multi-tenant). V2 konumu "Doveify SaaS satmaz"; tanıtım sayfasının `SİSTEMİ İNCELE` butonu o siteye gidiyor. OSGB SSS 4'ü buna göre temkinli yazdım.
3. **Arama kelimesi tanımda geçmiyor:** brief "hedef kelime H1 altındaki tanımda geçer" diyor, ama brief'in kendi tanımları (Emlak, OSGB, Kuru) ve mevcut Clinic/Broker tanımları bu kelimeleri içermiyor. Tanımları aynen bıraktım; kelime title, description ve ilk SSS'de var. Tanım değişsin mi?
4. **"Rakamlarla Doveify":** brief "4 canlı sistem → 6" diyor; Kuru Temizleme prototip olduğu için etiketi "canlı sistem" yerine **"kurduğumuz sistem"** yazdım.
5. **Carousel ilk state:** Clinic OS sıra 1 + merkez → solda kart yok (önceki düzende iki yan doluydu). Brief'e uygun; CD görmeli.
6. **Clinic OS hero** brief gereği PDF s.8 laptop görseli; kaynak düşük çözünürlüklü ve bulanık (eski approved crop da bu kaynaktan). CD görmeli.
7. **EN kart başlıkları** sığması için kısaltıldı: `REAL ESTATE OFFICE`, `DRY CLEANING`.
8. **Lighthouse kapanışı** Emre'nin geçerli ortam ölçümüne bağlı (yukarıda).
9. **Git:** CLAUDE.md git'i yasaklıyor; ara kontrolde bir kez salt-okunur `git diff --stat` çalıştırdım (hiçbir şey yazmadı). Bundan sonra git kullanmadım.

## EN çeviri listesi (Claude Code; Emre gözden geçirir)

- `content/en/cases/{emlak-ofis-paneli,osgb-yonetim,kuru-temizleme,turkisg-ai}.ts` — tamamı.
- `content/en/cases/{clinic-os,brokers-brain}.ts` — yeni meta title/description, ekran açıklamaları, 5 SSS.
- `content/en/ownSoftware.ts` — tamamı (manifesto mevcut EN ifadesi `TOOLS ARE RENTED. / KNOWLEDGE SHOULD NOT BE.`).
- `content/en/bilgi/*.md` — 5 yazı.
- `content/cases.ts` `CASE_UI.en` (LIVE / PROTOTYPE, VIEW THE SYSTEM →, ASK FOR ONE LIKE IT →, Screens, In numbers, Don't rent. Own., …), `content/kb.ts` EN, `content/en/products.ts` 2 yeni kart, `content/en/footer.ts` 2 link, `content/en/work.ts` `KNOWLEDGE BASE`.

## Search Console — "Dizine eklenmesini iste" listesi

```
https://doveify.io/
https://doveify.io/en/
https://doveify.io/sistemler/clinic-os/
https://doveify.io/sistemler/brokers-brain/
https://doveify.io/sistemler/emlak-ofis-paneli/
https://doveify.io/sistemler/osgb-yonetim/
https://doveify.io/sistemler/kuru-temizleme/
https://doveify.io/sistemler/turkisg-ai/
https://doveify.io/en/systems/clinic-os/
https://doveify.io/en/systems/brokers-brain/
https://doveify.io/en/systems/real-estate-office-panel/
https://doveify.io/en/systems/osgb-management/
https://doveify.io/en/systems/dry-cleaning-panel/
https://doveify.io/en/systems/turkisg-ai/
https://doveify.io/kendi-yaziliminiz/
https://doveify.io/en/your-own-software/
https://doveify.io/bilgi-bankasi/
https://doveify.io/en/knowledge-base/
https://doveify.io/bilgi-bankasi/saas-mi-ozel-yazilim-mi/
https://doveify.io/bilgi-bankasi/araclar-kiralanir-bilgi-kiralanmaz/
https://doveify.io/bilgi-bankasi/isletmenin-kendi-yapay-zekasi/
https://doveify.io/bilgi-bankasi/kendi-yaziliminizi-yaptirmadan-once/
https://doveify.io/bilgi-bankasi/excelden-sisteme-gecis/
https://doveify.io/en/knowledge-base/saas-mi-ozel-yazilim-mi/
https://doveify.io/en/knowledge-base/araclar-kiralanir-bilgi-kiralanmaz/
https://doveify.io/en/knowledge-base/isletmenin-kendi-yapay-zekasi/
https://doveify.io/en/knowledge-base/kendi-yaziliminizi-yaptirmadan-once/
https://doveify.io/en/knowledge-base/excelden-sisteme-gecis/
```
Önce sitemap'i gönderin: `https://doveify.io/sitemap.xml` (32 URL; iletişim ve gizlilik dahil). Öncelik: 6 TR sistem sayfası + `/kendi-yaziliminiz/` + 5 TR yazı.

## Dosya listesi

**Yeni**
- `paketler/PAKET-P8-SISTEM-SAYFALARI-BILGI-BANKASI.md`
- `content/tr/cases/{emlak-ofis-paneli,osgb-yonetim,kuru-temizleme,turkisg-ai}.ts`, `content/en/cases/` aynıları
- `content/{tr,en}/bilgi/*.md` (5 + 5), `content/ownSoftware.ts`, `content/{tr,en}/ownSoftware.ts`, `content/kb.ts`
- `src/utils/bilgi.ts`, `src/utils/case-props.ts`
- `src/components/HomePageV2/OwnSoftwarePage.tsx`, `src/components/HomePageV2/KbPages.tsx`
- `src/pages/sistemler/{emlak-ofis-paneli,osgb-yonetim,kuru-temizleme,turkisg-ai}.tsx`, `src/pages/en/systems/{real-estate-office-panel,osgb-management,dry-cleaning-panel,turkisg-ai}.tsx`
- `src/pages/kendi-yaziliminiz.tsx`, `src/pages/en/your-own-software.tsx`, `src/pages/bilgi-bankasi/{index,[slug]}.tsx`, `src/pages/en/knowledge-base/{index,[slug]}.tsx`
- `scripts/og.py`, `scripts/sitemap.js`
- `public/systems/<6 sistem>/{hero,screen-N}.webp` (25), `public/products/{emlak-ofis-paneli,kuru-temizleme}.webp`
- `public/og/{emlak-ofis-paneli,osgb-yonetim,kuru-temizleme,turkisg-ai,kendi-yaziliminiz,bilgi-bankasi}{,-en}.png`, `public/og/bilgi/*.png` (10)
- `docs/qa/P8-1280-{emlak,osgb,kuru,turkisg,kendi-yazilim,bilgi-liste,bilgi-yazi,carousel-6,carousel-6-son}.png`, `P8-375-{emlak,bilgi-yazi}.png`, `P8-{1280,375}-{sahiplik,calismalar}-link.png`
- `RAPOR-P8.md`

**Değişen**
- `content/nav.ts`, `content/{tr,en}/nav.ts`, `src/components/HomePageV2/Nav.tsx` (P8 ek)
- `content/locale.ts`, `content/cases.ts`, `content/products.ts`, `content/footer.ts`, `content/work.ts`, `content/contact.ts`
- `content/{tr,en}/{products,footer,work}.ts`, `content/{tr,en}/cases/{clinic-os,brokers-brain}.ts`
- `src/components/HomePageV2/{CasePage,Ownership,Work,SubPage,ContactForm}.tsx`, `src/pages/api/contact.ts`
- `src/pages/sistemler/{clinic-os,brokers-brain}.tsx`, `src/pages/en/systems/{clinic-os,brokers-brain}.tsx`
- `src/css/main.css` (P8 bloğu: rail scrollbar, `.v2-prose`)
- `next.config.js`, `netlify.toml` (`/blog` 301), `package.json` (`prebuild`), `public/sitemap.xml` (üretilen)
- `public/og/{clinic-os,brokers-brain}{,-en}.png` (yeni hero ile yeniden üretildi)
- `DESIGN-LOCK.md` (v0.7), `PROJECT-STATE.md`

**Taşınan:** `content/pages/blog/*` (12 dosya) → `_legacy/content/pages/blog/`.

**Framer Motion:** kullanılmadı. Yeni motion yok (hero fadeUp mevcut sınıf).

## Ek — Nav'a Bilgi Bankası (Emre, 15.11.2026)

- Nav'a 7. link: TR `Bilgi Bankası` → `/bilgi-bankasi/`, EN `Knowledge` → `/en/knowledge-base/` (aşağıda: etiket kısaltıldı); Çalışmalar ile İletişim arasında, desktop ve mobil overlay'de (overlay sırası doğrulandı). Dosyalar: `content/nav.ts` (`kb` alanı), `content/{tr,en}/nav.ts`, `src/components/HomePageV2/Nav.tsx`.
- **Ölçüm (1280, içerik kutusu 1232px — `max-w-7xl` yüzünden daha geniş ekranda da 1232 kalır):**

| | gap 32 | gap 24 |
|---|---:|---:|
| TR: marka 223 + nav | 223 + 1008 = 1231 (1px pay) | 223 + 952 = 1175 (**57px pay**) |
| EN: marka 223 + nav | 223 + 1062 = 1285 (**53px taşma**) | 223 + 1006 = 1229 (**3px pay**) |

- Uygulanan (talimat dahilinde): link gap her genişlikte **24px** (`xl:gap-8` kalktı); tam nav eşiği **1180 → 1280** (`xl`), 1279 ve altı hamburger (1279'da nav gizli, 1280'de görünür — ölçüldü). Taşma ve satır kırılması yok.
- ✅ **EN nav kapandı (Emre: "Etiketi kısalt"):** EN nav etiketi `Knowledge Base` → **`Knowledge`** (yalnız nav ve mobil overlay; sayfa başlığı, footer, Çalışmalar linki `Knowledge Base` olarak kaldı). 1280'de EN nav 1006 → 967px; marka ile ilk link arası **3 → 42px** (TR 57px). `docs/qa/P8-1280-nav-en.png` yeniden çekildi.
- `tsc --noEmit` 0 · `npm run build` 0. Görseller: `docs/qa/P8-1280-nav-{tr,en}.png`, `docs/qa/P8-375-nav-overlay.png`.
