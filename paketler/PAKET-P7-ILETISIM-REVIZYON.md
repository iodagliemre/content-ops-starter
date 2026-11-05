# PAKET-P7-ILETISIM-REVIZYON — Preview bulguları (Emre, 05.11.2026) + yayın öncesi son düzeltmeler

> Taban: `v2` @ `ec94b54` (preview https://v2--doveify-landing.netlify.app). Emre'nin canlı preview incelemesi; bazı maddeler LOCK'u Emre kararıyla değiştirir (işaretli), DESIGN-LOCK v0.6'ya "Emre kararı 05.11.2026" notuyla işlenir. CD'ye yeniden onay turu yok; final tam-sayfa QA'da görür.
> Kısıtlar: silme yok, git yok, `_legacy/`. Perf: mobil ≥90 korunur (ölç, raporla).

## G0 — Teknik (preview'da tespit)
1. `<html lang>` çıktıda yok; `hreflang` yok; dil anahtarı mutlak preview URL yazıyor → `_document` `lang` locale'den; `SiteHead` hreflang `https://doveify.io/` + `/en/` sabit; LangSwitch relative (`/`, `/en/`).
2. Ürünler: desktop sahne + mobil rail ikisi de SSR'da → ekran okuyucu/SEO'da kartlar 2 kez. Çözüm: her iki kapsayıcıya `aria-hidden` + `inert` (JS `matchMedia` ile aktif olmayana), SSR'da mobil rail `aria-hidden`.
3. `[EMRE-STACK]` / `[EMRE-SONUÇ]` placeholder'ları kaldırılır (G6).

## G1 — İletişim sayfası (`/iletisim`, `/en/contact`) — Emre #1, #7
- Yeni sayfa, V2 nav + footer. Yapı web.doveify.io/#iletisim ile aynı (Emre ekran görüntüsü): sol kolon H1 `Projenizi konuşalım.` (300 48/32px) + alt metin `Yeni bir sistem, uygulama, yapay zekâ veya web sitesi için bize ulaşın.` + 4 iletişim kartı (WhatsApp 0542 805 08 15 → `https://wa.me/905428050815?text=Merhaba, Doveify hakkında bilgi almak istiyorum.`, WhatsApp 0553 770 65 50, e-posta emre@doveify.io, Instagram @doveify.io); kartlar V2 stili (koyu zemin, 1px kenarlık, radius 12, ikon 20px monokrom; yeşil/pembe marka rengi YOK — ikon beyaz, hover mavi).
- Sağ kolon form (`Resend` ile emre@doveify.io'ya; env `RESEND_API_KEY` Netlify'da — Emre ekler; yoksa Netlify Forms fallback `data-netlify="true"`). Alanlar:
  - Ad Soyad* · Telefon* · E-posta · İşletme / Marka adı* · Sektör* (select: Sağlık, Gayrimenkul, İSG/OSGB, Gıda & Restoran, Perakende, Üretim, Lojistik, Eğitim, Turizm, Hizmet, Diğer) · **İstenen çalışma*** (select: Web sitesi, Web / mobil uygulama, İşletmeye özel yapay zekâ, Otomasyon (n8n / WhatsApp), Kurumsal sistem (CRM/ERP benzeri), Danışmanlık, Diğer) · Projenizle ilgili kısaca bilgi (textarea) · KVKK onay checkbox* `Gizlilik ve Kişisel Veriler Aydınlatma Metni'ni okudum, kabul ediyorum.` (link `/gizlilik`) · Gönder (dolu mavi `TALEBİ GÖNDER →`).
  - "Mevcut web sitesi durumu" sorusu YOK (Emre).
  - Başarı durumu: form yerine `Talebiniz alındı. En kısa sürede dönüş yapacağız.` + WhatsApp kartına link. Hata: satır altı kırmızı değil, secondary + mavi çizgi.
  - Spam: honeypot alanı + Resend tarafında rate limit.
- Mobil: form üstte, kartlar altta.
- Meta/OG/hreflang sayfaya özel.

## G2 — Gizlilik sayfası (`/gizlilik`, `/en/privacy`) — Emre eki
- `docs/legal/gizlilik-2026-09-04.md`'ye Emre'nin metni **aynen** (Claude Code: ekli metni dosyaya kopyalar, bir kelime değiştirmez; başlık hiyerarşisi 1–12 numaralı bölümler, alt başlıklar a/b/c). Sayfa: V2 nav + footer, editorial tipografi (H1 300 40px, H2 400 22px, gövde 400 16px secondary lh 1.7, max-width 760). EN: mevcut `/privacy/` içeriği (Stackbit markdown) `/en/privacy`'ye taşınır, aynı şablon. Eski `/privacy/` → 301 `/gizlilik`.
- Footer "Gizlilik Politikası" → `/gizlilik` (EN: `/en/privacy`).

## G3 — CTA / nav değişiklikleri — Emre #2, #7
- Nav pill `İletişim` → **`Toplantı Talep Et`** (cal.com, `_blank`) — metin uzadı; pill 40px yükseklik sabit, padding 22px, nav kompozisyonu bozulmaz; 1024–1100 arası sığmıyorsa linkler gap 24px.
- Nav'a `İletişim` text link (5. link, Çalışmalar'dan sonra) → `/iletisim`. Mobil overlay'de de.
- Final CTA (homepage + vaka sayfaları): CTA 1 `TOPLANTI TALEP ET` → cal.com; CTA 2 text-link `İLETİŞİM FORMU →` → `/iletisim` (e-posta linki kalkar). EN: `BOOK A MEETING` / `CONTACT FORM →`.
- Footer İletişim kolonuna `İletişim formu` linki.
- **WhatsApp floating buton** (Emre #7): sağ alt 56px daire, zemin `--color-v2-bg` + 1px mavi kenarlık, beyaz WhatsApp ikonu 24px (monokrom, yeşil yok), hafif mavi glow; `https://wa.me/905428050815?text=...`; sayfa 400px kaydırılınca fade-in, hero'da gizli; mobilde 48px, `bottom:16 right:16`; `aria-label="WhatsApp ile yazın"`. Tüm V2 sayfalarında.

## G4 — Nav marka imzası büyütme — Emre #3 (LOCK P1 değişikliği, Emre kararı)
- Referans: web.doveify.io logo oranı (amblem ~36px + iki satır wordmark). V2'de: amblem 28→**36px**, wordmark 15→**17px** (0.22em korunur), heartbeat ~56→**64px**, gap 12/8. Nav yüksekliği 80/64 değişmez; dikey ortalı. Mobil: amblem 32, wordmark 15, heartbeat 48.
- Footer `BrandSignature` aynı ölçü. OG görseli yeniden üretilmez.
- `docs/qa/P7-1280-nav.png`, `P7-375-nav.png`.

## G5 — Kurduğumuz Sistemler görselleri — Emre #4
- Her sistem için **gerçek uygulama ekran görüntüsü**: Claude Code Playwright ile canlı uygulamalardan çeker (Emre giriş gerektirenler için URL + varsa demo hesap verir; vermezse bu adım placeholder kalır ve raporda listelenir):
  - Clinic OS: `https://clinic.doveify.io` dashboard (giriş gerekli → Emre: demo hesap?)
  - Broker's Brain: `/brokers-brain` eski landing'deki görseller + varsa uygulama
  - OSGB Web: `https://osgb.doveify.io` ana ekran
  - TurkISG AI: `https://turkisgai.doveify.io` ana ekran + `app.` sohbet ekranı
- Çekim: 1600×1000 viewport, tam ekran, üst nav dahil; `public/products/<id>.webp` 2× (1200px genişlik, kalite 80, ≤120KB) + vaka sayfası hero için 1600px versiyon.
- Kart içinde görsel kartın alt kenarından 24px taşan, 3:2 crop, P2 geometrisi değişmez. Vaka sayfası hero görseli: 3:2, kenarlık + tarayıcı şeridi (Web Factory ekran stili), 640px genişlik.
- Erişilemeyen uygulama için: Pillow ile "koyu zemin + sistem adı + 3 satır arayüz silueti" placeholder yerine **approved görselden dashboard crop** (Clinic OS'ta zaten var) — ama tercih gerçek ekran.

## G6 — Vaka sayfaları içerik — Emre stack bilgisi
- Clinic OS — Teknoloji pill'leri: `React · TypeScript · Vite · Tailwind CSS · Supabase · n8n · OpenAI GPT-4o-mini · WhatsApp Business Cloud API · Cloudflare`. "Ne kurduk" maddelerine ekle: `Klinik bazlı dinamik AI asistan (çalışma saatleri, tedaviler, randevu)` · `Bring-your-own WhatsApp API: müşterinin kendi numarası ve token'ı` · `Multi-tenant Postgres (Supabase)`. Sonuç bölümü: rakam yok → başlık `Sonuç` yerine **`Ne değişti`**, 3 nitel madde: `Randevu hatırlatma ve onayları WhatsApp'ta otomatik; resepsiyonun telefon yükü düşer.` · `Hasta kaydı, tedavi şablonu ve faturalama tek ekranda.` · `Veri kliniğin kendi altyapısında; sistem kliniğe ait.`
- Broker's Brain — Teknoloji: `React · TypeScript · Vite · Tailwind CSS · Supabase · Twilio WhatsApp API · Twilio Functions · OpenAI GPT-4o-mini + Whisper · Netlify`. n8n YOK. Ne değişti: `Gelen WhatsApp lead'leri otomatik sınıflanır ve portföyle eşleşir.` · `Sesli mesajlar Whisper ile metne çevrilir, aynı akışta yanıtlanır.` · `Takip gecikmesi dakikalara iner; ek personel gerekmez.`
- `[EMRE-STACK]`, `[EMRE-SONUÇ]` kalmayacak (grep).
- OSGB Web ve TurkISG AI için vaka sayfası yok (harici link) — Emre stack verirse P8.

## G7 — Web Factory slayt — Emre #5 (LOCK P3 değişikliği, Emre kararı)
- Kolaj 3 ekran kalır; **aktif ekran merkeze gelir**: ok butonları (Ürünler stili, sağ üstte açıklama kolonunun altında) + yan ekrana tıklama = merkeze getir. Geçiş .55s tek transition.
- **Otomatik geçiş** (Emre istedi; "sonsuz loop yok" kuralıyla uzlaşı): section görünüme girince 3.5s aralıkla 1 → 2 → 3 **bir tur**, sonra durur; kullanıcı ok/tıklama yaparsa otomatik hemen iptal. `prefers-reduced-motion`: otomatik yok. Hover'da duraklama.
- Mobil: snap-rail 3 ekran (Ürünler rail'i ile aynı davranış), otomatik yok.
- Merkez ekran tıklanınca ilgili müşteri sitesi (`_blank`).

## G8 — TR başlıklar — Emre #6
- Sahiplik ana ifade TR sayfada: `ARAÇLAR KİRALANIR.` / `BİLGİ KİRALANMAZ.` (300 56/36px, satır 2 mavi; uzunluk ölç, 1280'de tek satır sığmalı — sığmazsa 52px, raporla). EN sayfada `TOOLS ARE RENTED. / KNOWLEDGE SHOULD NOT BE.` kalır.
- Why Doveify TR: `%100` / `SAHİPLİK` (120/40px). EN: `100% / OWNERSHIP`.
- Dönüşüm hat etiketleri `DATA → AI → SYSTEMS → AUTONOMY` EN kalır (CD #4, Emre itiraz etmedi).

## G9 — Ev işi
- DESIGN-LOCK v0.6: G4, G7, G8 "Emre kararı 05.11.2026 — CD final QA'da görülecek" notuyla; İletişim sayfası + WhatsApp buton + Gizlilik sayfası şablonları eklenir.
- sitemap: `/iletisim`, `/gizlilik`, `/en/contact`, `/en/privacy`.
- `netlify.toml`: 301'ler (`/privacy/*` → `/gizlilik`, eski yollar).

## Çıktılar
- `docs/qa/P7-1280-{nav,iletisim,webfactory,sahiplik,clinic}.png`, `P7-375-{nav,iletisim,webfactory,wa-button}.png`.
- `RAPOR-P7.md`: G0–G9; çekilemeyen uygulama ekranları listesi; form gönderim testi (Resend/Netlify Forms hangisi, test maili ulaştı mı); Lighthouse mobil 3× (Performance/A11y/SEO/BP).
- `PROJECT-STATE.md`: P7 ✅; "Sonraki: Emre commit+push → preview → CD final tam-sayfa QA → Faz 5".

## Kapı
tsc/build/lint 0 · tüm yollar 200/301 doğru · form çalışıyor (test gönderimi) · WhatsApp buton her sayfada · placeholder yok · mobil Performance ≥90, A11y/SEO/BP ≥95 · yatay taşma yok.
