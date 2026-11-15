# PAKET-P8-SISTEM-SAYFALARI-BILGI-BANKASI — 6 sistem tanıtım sayfası + Bilgi Bankası + SEO

> Taban: `main` @ `7455cf6`+ (canlı). Çalışma `v2` branch'inde, bitince merge. Kaynak: `docs/kaynak/Doveify-Sirket-Tanitim.pdf`, `Doveify-Emlak-Brosuru.pdf`, `Doveify-Emlak-Kullanim-Kilavuzu.pdf` (Emre, 15.11.2026) + canlı uygulamalar.
> Amaç (Emre): her sistemin önce **tanıtım sayfası** (Clinic OS gibi), sonra "sistemi incele" → canlı uygulama; 6 sistem; Bilgi Bankası (5 yazı); Google'da "kendi yazılımım / yazılım yaptırma / klinik yazılımı / emlak yazılımı / kuru temizleme yazılımı / OSGB yazılımı / İSG yazılımı / İSG yapay zekâ" indekslenmesi.
> Kısıtlar: LOCK v0.6 kilitli bölümlere piksel dokunulmaz (carousel geometrisi dahil). Silme yok, git yok. Metin değişikliği bu brief'teki kadar.

## G1 — Sistem listesi ve sıra (homepage carousel + footer + sitemap)
Carousel 6 kart (geometri aynı, kart sayısı 4→6; oklar uçta disabled kuralı korunur, otomatik kaydırma yok). Sıra (Emre):
1. **Clinic OS** — `/sistemler/clinic-os/` (mevcut) → "Sistemi incele" → `https://clinic.doveify.io`
2. **Broker's Brain** — `/sistemler/brokers-brain/` (mevcut)
3. **Emlak Ofis Paneli** — `/sistemler/emlak-ofis-paneli/` → `https://emlak.doveify.io/giris`
4. **OSGB Yönetim** — `/sistemler/osgb-yonetim/` → `https://osgb.doveify.io`
5. **Kuru Temizleme Paneli** — `/sistemler/kuru-temizleme/` → `https://kurutemizleme-proto.netlify.app/`
6. **TurkİSG AI** — `/sistemler/turkisg-ai/` → `https://turkisgai.doveify.io`
İlk state: Clinic OS merkez (kilitli). Kart CTA `SİSTEMİ İNCELE →` artık **her kartta tanıtım sayfasına** gider (harici link kartta YOK).
EN karşılıkları `/en/systems/<slug>` (clinic-os, brokers-brain, real-estate-office-panel, osgb-management, dry-cleaning-panel, turkisg-ai).

## G2 — Tanıtım sayfası şablonu (CasePage.tsx revizyonu; mevcut 2 sayfa da bu şablona geçer)
Sıra:
1. **Hero**: eyebrow `KURDUĞUMUZ SİSTEM` · H1 sistem adı · tek satır tanım · **iki CTA**: dolu `SİSTEMİ İNCELE →` (canlı uygulama, `_blank`) + text `BENZERİNİ İSTEYİN →` (`/iletisim?calisma=<slug>`, form "istenen çalışma" önseçili) · sağda ekran görüntüsü (3:2, tarayıcı çerçevesi).
2. **Kim için** (2–3 cümle).
3. **Sorun** (3 madde, numaralı editorial).
4. **Ne yapar** (4–6 özellik; başlık + 1 cümle; ikon yok).
5. **Ekranlar** (2–4 gerçek ekran görüntüsü, yatay rail; mobil snap).
6. **Rakamlar** (varsa, 2–4 sayı — Şirket Tanıtım PDF'teki: OSGB 12+ modül / 2.700+ OSGB pazarı; TurkİSG AI 91+ mevzuat belgesi, 89+ ÇSGB rehberi, 2.700+ sınav sorusu, 78+ kontrol listesi). Olmayan sistemde bölüm yok, uydurma yok.
7. **Teknoloji** pill'leri.
8. **Sahiplik kutusu** (her sayfada aynı, Emlak broşüründen): `Kiralamayın, sahip olun.` — `Sistem kendi logonuz ve kendi adresinizle işletmenize kurulur. Kod, veri ve altyapı sizindir.`
9. **SSS** (5 soru, `FAQPage` JSON-LD) — arama niyeti burada.
10. **Final CTA**: `Benzerini sizin için kuralım.` → `TOPLANTI TALEP ET` + `İLETİŞİM FORMU →`.
Meta: title `<Sistem> — <arama kelimesi> | Doveify`, description sayfa tanımı + arama kelimesi, OG = ekran görüntüsü + marka imzası (P5 şablonu), hreflang, JSON-LD `SoftwareApplication` + `FAQPage`.

## G3 — Sayfa içerikleri (TR; EN çeviri Claude Code, raporda liste)
Her sayfanın hedef arama kelimesi H1 altındaki tanımda ve ilk SSS'de geçer.

### 3.1 Clinic OS — hedef: *klinik yazılımı, klinik yönetim yazılımı, klinik randevu programı*
Mevcut içerik + SSS: `Klinik yönetim yazılımı nedir?` · `Clinic OS hangi klinikler için uygun?` · `Hastalar WhatsApp'tan randevu alabilir mi?` · `Verilerimiz nerede tutulur?` · `Mevcut hasta kayıtlarımızı aktarabilir miyiz?`

### 3.2 Broker's Brain — hedef: *emlak CRM, emlak WhatsApp otomasyonu*
Mevcut içerik + SSS: `Emlak ofisi için CRM nedir?` · `WhatsApp'tan gelen müşteriler nasıl kaydedilir?` · `Sesli mesajlar okunur mu?` · `Portföy eşleştirme nasıl çalışır?` · `Kaç danışman kullanabilir?`

### 3.3 Emlak Ofis Paneli — hedef: *emlak yazılımı, emlak ofis programı, emlak portföy yönetimi*
- Tanım: `1–10 danışmanlı emlak ofisleri için portföy, müşteri ve randevu takibi — telefonda ve bilgisayarda aynı panel.`
- Kim için: Küçük ve orta emlak ofisleri; portföyü Excel'de, müşterisi WhatsApp'ta, randevusu defterde olan ekipler.
- Sorun: `Mülk sahibinin numarası WhatsApp'ta, son görüşmenin notu defterde, portföy listesi Excel'de.` · `Yer gösterme saati arada kaynıyor.` · `Ay sonunda "kaç mülk sattık, kaçını kiraladık" için kayıtlar tek tek açılıyor.`
- Ne yapar: `Excel'den tek seferde aktarım` (mevcut portföy ve müşteri listesi tek dosyayla; önizlemede hatalı satırlar görünür) · `Fotoğraflı portföy` (kapak fotoğrafı, mülk sahibi, ilgilenen kişiler, tarihli notlar, satış/kiralama kaydı aynı kayıtta) · `Takvim ve hatırlatma` (arama, görüşme, yer gösterme; panel açıkken hatırlatır) · `Bugün ekranı` (günün randevuları, gecikenler, bu ay satılan/kiralanan) · `Bir numara, bir kişi kartı` (aynı kişi hem mülk sahibi hem müşteri olabilir; karttan ara / WhatsApp aç) · `Ofis kayıtları ayrı` (diğer ofisler göremez).
- Ekranlar: Bugün, Takvim, Portföy detayı (mobil), Kayıt. Kaynak: `docs/kaynak/` PDF'lerden Pillow ile kırp (kılavuz sayfa 4–6 ekranları) + canlı `emlak.doveify.io` demo hesabıyla Playwright (Emre giriş verirse; vermezse PDF kırpımı).
- Teknoloji: `React · TypeScript · Supabase · Excel içe aktarma · PWA` (Emre doğrular; Broker's Brain stack'i referans).
- SSS: `Emlak ofisi yazılımı ne işe yarar?` · `Excel'deki portföyümü aktarabilir miyim?` · `Telefondan kullanılır mı?` · `Diğer ofisler kayıtlarımı görür mü?` · `Demo var mı?` (evet → `emlak.doveify.io/giris`, örnek verilerle açılır)
- Rakamlar: yok.

### 3.4 OSGB Yönetim — hedef: *OSGB yazılımı, OSGB yönetim programı, İSG Katip entegrasyonu*
- Tanım: `OSGB'ler için Excel'lerin yerine tek panel: firma, doküman, atama planlama, performans, memnuniyet anketi ve finans.`
- Kim için: Ortak sağlık ve güvenlik birimleri; firma ve profesyonel atamalarını Excel'de yöneten ekipler.
- Sorun: `Firma, uzman ve hekim atamaları dağınık dosyalarda.` · `İSG Katip planlaması elle yapılıyor.` · `Doküman süresi dolan firmalar gözden kaçıyor.`
- Ne yapar (PDF s.9 + osgb.doveify.io'dan Claude Code doğrular): `Firma yönetimi` · `Doküman takibi ve süre uyarısı` · `İSG Katip atama planlama` · `Profesyonel iş yükü dağılımı` · `Memnuniyet anketi` · `Finans / ticari takip`.
- Rakamlar: `12+ modül` · `Sınırsız firma` · `2.700+ OSGB'lik pazar`.
- Teknoloji: `React · TypeScript · Supabase · Resend` (osgb-management repo; Emre doğrular).
- SSS: `OSGB yazılımı hangi işleri kapsar?` · `İSG Katip ile uyumlu mu?` · `Kaç firma eklenebilir?` · `Veriler OSGB'nin kendi altyapısında mı?` · `Mevcut Excel'lerimiz aktarılır mı?`

### 3.5 Kuru Temizleme Paneli — hedef: *kuru temizleme yazılımı, kuru temizleme programı, çamaşırhane yazılımı*
- Tanım: `Kuru temizleme işletmeleri için sipariş, müşteri, tahsilat ve rapor yönetimi — telefonda çalışan tek panel.`
- Kim için: Tek şube kuru temizleme / çamaşırhane; fiş defteri ve WhatsApp'la çalışan işletmeler.
- Sorun: `Sipariş fişleri kâğıtta, teslim tarihi akılda.` · `Kimin ne kadar borcu var belli değil.` · `Ay sonu ciro ve en çok yapılan iş görünmüyor.`
- Ne yapar (Claude Code canlı prototipten doğrular, uydurmaz): `Sipariş alma ve durum takibi (alındı / işlemde / hazır / teslim)` · `Müşteri kartı ve geçmiş siparişler` · `Tahsilat ve borç takibi` · `Günlük / aylık rapor` · `Telefona ana ekran olarak eklenir (PWA)`.
- Ekranlar: Playwright ile prototipten 3 ekran (giriş gerekiyorsa Emre'den demo; yoksa ana ekran).
- Teknoloji: `React · TypeScript · Supabase · PWA`.
- SSS: `Kuru temizleme için yazılım gerekli mi?` · `Sipariş durumu müşteriye bildirilir mi?` · `Birden fazla şube olur mu?` · `Tablet/telefonda çalışır mı?` · `Kendi fiş düzenimize uyarlanır mı?`
- Rakamlar: yok. Durum etiketi: `PROTOTİP` (diğerleri `CANLI`).

### 3.6 TurkİSG AI — hedef: *İSG yapay zekâ, İSG asistanı, İSG yazılımı, risk değerlendirmesi yapay zekâ*
- Tanım: `Türk mevzuatıyla eğitilmiş İSG asistanı: mevzuat soru-cevap, fotoğraftan tehlike analizi ve DÖF raporu, deneme sınavları, kontrol listeleri.`
- Kim için: İSG uzmanları, işyeri hekimleri, OSGB'ler, sınava hazırlanan adaylar.
- Sorun: `Mevzuat dağınık; doğru maddeyi bulmak zaman alıyor.` · `Saha fotoğrafından rapor yazmak saatler sürüyor.` · `Sınav hazırlığı için güncel soru havuzu yok.`
- Ne yapar: `Mevzuat soru-cevap (6331, yönetmelikler, ÇSGB rehberleri)` · `Fotoğraftan tehlike analizi ve DÖF raporu` · `2.700+ ÖSYM tarzı deneme sorusu` · `Kontrol listeleri` · `Kaynak gösterir`.
- Rakamlar: `91+ mevzuat belgesi` · `89+ ÇSGB rehberi` · `2.700+ sınav sorusu` · `78+ kontrol listesi`.
- Teknoloji: `RAG · OpenAI · Supabase · React` (isg-chatbot repo; Emre doğrular).
- SSS: `İSG yapay zekâ asistanı ne yapar?` · `Hangi mevzuatı biliyor?` · `Fotoğraf analizi nasıl çalışır?` · `Sınav soruları hangi formatta?` · `Kurumlar için özel kurulum var mı?` (evet → kuruma özel, kendi verisiyle)
- Hero CTA 1 → `https://turkisgai.doveify.io`; ek text link `ÜCRETSİZ DENE →` → `https://app.turkisgai.doveify.io`.

## G4 — "Yazılım yaptırma" çözüm sayfası — hedef: *kendi yazılımım, yazılım yaptırma, işletmeye özel yazılım, özel yazılım geliştirme*
`/kendi-yaziliminiz/` (EN `/en/your-own-software/`). Nav'a girmez; footer "Doveify" kolonuna `Kendi Yazılımınız` + homepage Sahiplik bölümü kapanış cümlesinin altına text link `Kendi yazılımınızı yaptırın →` (LOCK: metin ekleme, kompozisyon değişmez; CD'ye not).
İçerik (Şirket Tanıtım PDF'ten): H1 `Kendi yazılımınızı yaptırın.` · alt `Kiralık araçlar yerine işletmenize ait sistem.` · bölümler: `Kritik süreçler kiralık araçlarda` (Veri başkasının sunucusunda / Kurumsal hafıza başkasının ürününde / Kontrol başkasının elinde) · `Araçlar kiralanır. Bilgi kiralanmaz.` manifesto · `SaaS vs Doveify` (4+4 satır, PDF s.4) · `Nasıl çalışıyoruz` 4 adım (Keşif görüşmesi → Kapsam ve teklif → Kurulum ve eğitim → Bakım ve geliştirme; Emre doğrular) · `Rakamlarla Doveify` (4 canlı sistem → **6**, 6+ marka projesi, 3 pazar, %100 sahiplik, 15 yıl deneyim) · `Önce site, sonra otomasyon, sonra işletmenin verisini öğrenen AI` · SSS: `Yazılım yaptırmak ne kadar sürer?` · `Kaynak kod bize mi ait?` · `Hazır program yerine neden özel yazılım?` · `Bakım nasıl olur?` · `Küçük işletme için mantıklı mı?` · Final CTA.
JSON-LD `Service` + `FAQPage`.

## G5 — Bilgi Bankası (`/bilgi-bankasi/`, EN `/en/knowledge-base/`)
- Liste sayfası: V2 nav+footer, eyebrow `BİLGİ BANKASI`, H1 `Sahiplik, sistemler ve işletmenin yapay zekâsı.`, kart listesi (başlık, 1 cümle, tarih, okuma süresi, ilgili sistem etiketi). Yazı sayfası: editorial (LegalPage tipografisi), sağda sabit "İlgili sistem" kutusu + Final CTA. `Article` JSON-LD, OG otomatik (başlık + marka imzası).
- Kaynak: `content/tr/bilgi/*.md` (frontmatter: title, description, date, slug, system, readMin) — Emre sonradan yazı ekler, dosya koyunca yayınlanır. Mevcut Stackbit blog yazıları (`content/pages/blog/*`) `_legacy/`'ye; `/blog/*` → 301 `/bilgi-bankasi/`.
- 5 yazı — metinler ekli `docs/kaynak/bilgi-bankasi-5-yazi.md`'den aynen (Claude Code yazmaz, kopyalar):
  1. `saas-mi-ozel-yazilim-mi` — SaaS mı, özel yazılım mı? İşletmeniz için doğru model
  2. `araclar-kiralanir-bilgi-kiralanmaz` — Araçlar kiralanır, bilgi kiralanmaz: kurumsal hafıza kimde kalıyor?
  3. `isletmenin-kendi-yapay-zekasi` — Her işletmenin kendi yapay zekâsı olmalı mı?
  4. `kendi-yaziliminizi-yaptirmadan-once` — Kendi yazılımınızı yaptırmadan önce sorulacak 7 soru
  5. `excelden-sisteme-gecis` — Excel'den sisteme geçiş: küçük işletmeler için yol haritası
- Nav'a `Bilgi Bankası` eklenmez (nav kilitli, zaten dolu); footer "Doveify" kolonuna eklenir; homepage Final CTA üstüne bölüm eklenmez (LOCK). Çalışmalar bölümü CTA'sının yanına ikinci text link `BİLGİ BANKASI →` (metin ekleme; CD'ye not).

## G6 — SEO / dizin
- Her yeni sayfa: title ≤60, description ≤155, canonical, hreflang, OG, JSON-LD. `sitemap.xml` güncel (tüm sistem, çözüm, bilgi sayfaları, TR+EN). `robots.txt` aynı.
- İç link ağı: her sistem sayfası → ilgili bilgi yazısı + `/kendi-yaziliminiz/`; her bilgi yazısı → ilgili sistem + `/kendi-yaziliminiz/`; `/kendi-yaziliminiz/` → 6 sistem.
- Homepage: section eyebrow altı metinler değişmez. Sistem kartları 6'ya çıkar (G1).
- RAPOR'a: Search Console'a gönderilecek URL listesi (Emre "Dizine eklenmesini iste" yapar).

## G7 — Görseller
- Her sistem için en az 1 hero + 2 ekran. Kaynak öncelik: canlı uygulama (Playwright, kişisel veri blur) → PDF kırpımı (`docs/kaynak/`) → mevcut. `public/systems/<slug>/hero.webp` 1600px, `screen-N.webp` 1200px, ≤120KB.
- Carousel kart görselleri 6 sistem için aynı kaynaktan 3:2 (P2 ölçüleri).
- Clinic OS: Şirket Tanıtım PDF s.8 laptop görseli hero olarak (mevcut kırpımdan daha iyi).

## Çıktılar
- `docs/qa/P8-1280-{emlak,osgb,kuru,turkisg,kendi-yazilim,bilgi-liste,bilgi-yazi}.png`, `P8-375-{emlak,bilgi-yazi}.png`, `P8-1280-carousel-6.png`.
- `RAPOR-P8.md`: sayfa listesi (TR/EN URL), her sistem için görsel kaynağı, "Emre doğrular" işaretli stack/süreç maddeleri, EN çeviri listesi, Search Console URL listesi, Lighthouse (home + 1 sistem + 1 bilgi, mobil 3×).
- `PROJECT-STATE.md`, `DESIGN-LOCK.md` v0.7 (sistem sayfası şablonu, bilgi bankası şablonu, homepage'e eklenen 2 text link "Emre kararı").

## Kapı
tsc/build/lint 0 · tüm yeni yollar 200 (TR+EN), eski `/blog/*` 301 · placeholder yok (`[EMRE-` grep) · yatay taşma yok · mobil Performance ≥90, A11y/SEO/BP ≥95 · LOCK piksel farkı yalnızca belirtilen 2 text link.
