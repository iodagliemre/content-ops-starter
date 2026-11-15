---
slug: isletmenin-kendi-yapay-zekasi
title: Her işletmenin kendi yapay zekâsı olmalı mı?
description: Genel sohbet botları ile işletmenin kendi verisini öğrenen yapay zekâ arasındaki fark; kime, ne zaman gerekir; nasıl kurulur.
date: 2026-11-15
system: turkisg-ai
readMin: 6
---

# Her işletmenin kendi yapay zekâsı olmalı mı?

Herkesin elinde bir sohbet botu var. Soru soruyorsunuz, cevap veriyor. Ama o bot sizin kliniğinizin çalışma saatlerini, sizin OSGB'nizin firma listesini, sizin emlak ofisinizin portföyünü bilmiyor. Genel bilgiyle konuşuyor; sizin bilginizle değil.

İşletmenin kendi yapay zekâsı, tam olarak bu farkı kapatır.

## Genel bot ile işletme zekâsı arasındaki fark

**Genel bot:** İnternetin genel bilgisiyle eğitilmiş. Her soruya makul cevap verir, hiçbirine sizin için doğru cevabı veremez. "Yarın randevu var mı?" sorusuna cevabı yoktur.

**İşletmenin yapay zekâsı:** Sizin verinizle çalışır. Randevu defterinizi, hasta kayıtlarınızı, mevzuat arşivinizi, portföyünüzü bilir. "Yarın 14:00'te boşluk var, Ayşe Hanım'ın kontrol randevusu da o gün" der. Kaynak gösterir. Yanlış biliyorsa düzeltirsiniz, öğrenir.

## Kime gerekir?

Şu işaretlerden ikisi varsa, vakit gelmiştir:

- Aynı sorulara her gün defalarca cevap veriliyor (randevu, fiyat, çalışma saati, mevzuat).
- Bilgi dağınık: Excel, WhatsApp, e-posta, klasör. Bulmak aramaktan uzun sürüyor.
- Uzman kişi tek; o yokken işler bekliyor.
- Mesai dışı gelen talepler sabaha kalıyor.
- Raporlama elle yapılıyor ve her ay aynı emek harcanıyor.

## Nasıl kurulur?

İşletme yapay zekâsı sıfırdan model eğitmek değildir. Üç katman:

1. **Veri.** İşletmenin kendi bilgisi düzenli bir yapıya alınır: dokümanlar, kayıtlar, süreç kuralları. Bu katman olmadan yapay zekâ boş konuşur.
2. **Zekâ.** Hazır bir dil modeli, işletmenin verisiyle bağlanır (RAG — retrieval-augmented generation). Model genel dili bilir, cevabı sizin verinizden üretir, kaynağını gösterir.
3. **Sistem.** Yapay zekâ bir sohbet kutusu olarak kalmaz; randevu alır, DÖF raporu yazar, müşteriye WhatsApp'tan cevap verir. İş akışının içine girer.

## Bir örnek: TurkİSG AI

İş sağlığı ve güvenliği uzmanları için kurduğumuz asistan, 91'den fazla mevzuat belgesi ve 89 ÇSGB rehberiyle çalışır. Mevzuat sorusuna madde göstererek cevap verir, saha fotoğrafından tehlike analizi ve DÖF raporu çıkarır, 2.700'den fazla sınav sorusuyla pratik yaptırır. Genel bir bot bunların hiçbirini yapamaz; çünkü veri onda değil.

Aynı yaklaşım kliniğe, emlak ofisine, OSGB'ye uyarlanır. Veri değişir, yöntem aynıdır.

## Kritik şart: sahiplik

İşletmenin yapay zekâsı işletmenin verisiyle çalışır. O veri başkasının sunucusuna gidiyorsa, yapay zekâ da başkasının olur. Doğru kurulumda veri kendi altyapınızda kalır, model ona oradan erişir, hiçbir şey dışarı çıkmaz.

Yapay zekâ işletmenin hafızasını öğreniyorsa, hafıza işletmede kalmalı.
