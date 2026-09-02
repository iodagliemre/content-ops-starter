# CD SAYFA KURGUSU — ChatGPT Creative Director çıktısı (03.09.2026, verbatim)

> Bu metin CD'nin sayfa kurgusudur. Referans görsel (homepage-ref-v1.png) ile çeliştiği yerlerde görsel esastır; çelişkiler PROJECT-STATE.md "Bekleyen Kararlar" listesindedir.

Evet. Bu referansı artık **ana görsel yön** kabul edip siteyi mevcut içerikten yeniden kurgulayabiliriz. Ancak standart gereği henüz DESIGN-LOCK yazmıyorum; önce bu yönü tam sayfa tasarıma çevirip Performance Gate'ten geçirmemiz gerekiyor.

Mevcut `doveify.io` içeriğinin ana omurgası korunabilir: ownership yaklaşımı, TurkISG AI, sektör çözümleri, dijital dönüşümün 4 fazı, SaaS vs ownership karşılaştırması, Why Doveify ve iletişim. Fakat sunum sırasını ciddi biçimde değiştirelim.

## DOVEIFY V2 — SAYFA KURGUSU

**01 — HERO / DIGITAL INTELLIGENCE**
Referanstaki kompozisyon korunacak. Sol tarafta mesaj ve CTA. Sağ tarafta büyük dijital insan başı. Kafa hazır bir görsel gibi durmayacak; ilk açılışta küçük kod blokları, veri parçaları, grid noktaları ve interface parçaları birleşerek insan profiline dönüşecek. Üstte yeni Doveify logosu + logo işaretinden çıkan **tek seferlik heartbeat çizgisi**.

Hero hareket sırası:
1. Logo görünür.
2. Heartbeat çizgisi yaklaşık `0.8–1.2s` ilerler.
3. Dijital parçalar merkezde toplanır.
4. İnsan kafasının formu ortaya çıkar.
5. Headline `fadeUp .6s`.
6. CTA'lar gelir.
7. Sahne sakinleşir ve **durur**.

Sonsuz animasyon yok. Hero teknoloji gösterisi değil, güçlü bir giriş olacak.

**02 — PRODUCTS / SYSTEMS**
Mevcut klasik Industry Solutions grid'i kaldırılıyor. Yanlarda pasif sistemler, merkezde aktif ürün. Merkez: **CLINIC OS**. Yanlar: **BROKER'S BRAIN**, **OSGB WEB**. Kullanıcı ilerledikçe aktif ürün merkeze geçer. TurkISG AI ekosisteme dahil edilebilir. Education / Logistics / Manufacturing / Tourism aynı ağırlıkta yedi kart olmasın; ikinci seviyede "geliştirilebilir sektör altyapıları" olarak gösterilebilir. Bu bölüm sayfanın **ürün vitrini**.

**03 — WEB FACTORY**
Ürün carousel'inden görsel olarak kopmaz. Koyu zeminde büyük gerçek proje ekranları; desktop + mobile + birkaç sayfa crop'ı. Mesaj: **Doveify teknoloji geliştiriyor. Web Factory markayı dijitalde görünür kılıyor.** Ana site Web Factory'ye geçiş kapısı.

**04 — DIGITAL TRANSFORMATION**
"4 Phases" içeriği korunuyor ama dört eşit kart YOK. Tek yatay veya dikey **sistem hattı**: `DATA → AI → SYSTEMS → AUTONOMY`. Kullanıcı aşağı indikçe hat aktive olur.
Phase 01 Algorithm Evolution / Phase 02 AI Tools → Systems / Phase 03 Hardware + AI / Phase 04 Autonomous Systems. Her aşama öncekinin devamı; tek dijital dönüşüm hikâyesi.

**05 — OWNERSHIP**
Sol büyük: **TOOLS ARE RENTED. KNOWLEDGE SHOULD NOT BE.**
Sağ: SaaS → hızlı başlangıç / standart süreç / platform bağımlılığı. Doveify → özel altyapı / veri egemenliği / kurumsal hafıza / tam sahiplik. Bu section'da ikon YOK.

**06 — WHY DOVEIFY**
Beş avantaj korunur (ownership, long-term value, industry-specific, data sovereignty, solution partnership) ama beş kart YOK. Büyük manifesto: bir tarafta dev **100% OWNERSHIP**, diğer tarafta beş unsur tipografik.

**07 — WORK / PROOF**
Logo bandından ileri: Memarts, Teknik Radyo, Delta OSGB ve diğerleri seçili projelerde website crop'larıyla. **Gerçek sistemler. Gerçek işletmeler. Gerçek sonuçlar.**

**08 — CONTACT / DIGITAL ARCHITECT**
"Meet Your Digital Architect" final CTA. Kart duvarı yok: **LET'S BUILD WHAT YOUR BUSINESS OWNS.** altında iletişim.

## GÖRSEL DİL
Koyu yön korunur ama **neon cyberpunk siteye dönüşmeyecek.** Arka plan neredeyse siyah lacivert. Beyaz typography. Doveify mavisi sadece aktive olan yerlerde. Glow yalnızca insan kafası, heartbeat ve sistem geçişleri. **%80 sakin / %20 dijital enerji.**

## HERO MOTION KARARI
Dijital kafanın parçalar halinde oluşması tasarımın ana karakteri → **onaylanmış motion yönü adayı**. Varsayılan implementation: transform, opacity, clip-path, kontrollü katman animasyonu. Yüzlerce DOM parçacığı veya ağır WebGL görsel şart değil.
**Performance Gate: Mobil Lighthouse ≥95, CLS ≈0.**

Sonraki adım: **1280px tam homepage exploration** (Hero + Products + Web Factory + Digital Transformation + Ownership + Work + Contact tek uzun tasarım). Onay → Performance Gate → Approved Design → DESIGN-LOCK.
