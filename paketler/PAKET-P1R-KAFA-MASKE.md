# PAKET-P1R-KAFA-MASKE — P1 mikro revizyon (CD kararı 05.09.2026)

> Taban: PAKET-P1-HERO-NAV çıktısı (commit'lenmedi, çalışma ağacında). Otorite: CD Karar 01 revizyonu (aşağıda).
> Kapsam: yalnızca kafa maskesi + placeholder zemini. Başka HİÇBİR şey değişmez.

## Kısıtlar
- Kod `src/components/HomePageV2/` altında kalır; `src/pages/index.*` açılmaz.
- Silme yok (`_legacy/`); git komutu yok.
- `RAPOR-P01.md`, `RAPOR-P1.md`, `RAPOR-P1-HERO-NAV.md`, `docs/qa/P01-*`, `docs/qa/P1-*` DOKUNULMAZ.

## DEĞİŞTİR (3 madde, CD)
1. Kafa yatay maske başlangıcı `38%` → **`46%`**:
   `linear-gradient(to right, transparent 0%, #000 46%, #000 100%)`
2. Dikey erime `14–86%` → **`20–80%`**:
   `linear-gradient(to bottom, transparent 0%, #000 20%, #000 80%, transparent 100%)`
   (`-webkit-mask-image` aynı; `mask-composite: intersect` / `-webkit-mask-composite: source-in` korunur.)
3. Placeholder görsel zemini hero zeminiyle **0 görsel fark**:
   - `public/hero/head-placeholder*.webp` dosyalarının kenar/arka plan rengini Pillow ile ölç, `--color-v2-bg` (TOKENS.md) ile karşılaştır.
   - Fark varsa görseli yeniden üret: transparan alanları / düz zemini tam `--color-v2-bg` hex'ine boya (kafa pikselleri değişmez). Eski dosyalar `_legacy/hero/`'a taşınır, yeni dosyalar aynı adla `public/hero/`'a yazılır (dosya adı değişmez → LCP/preload kırılmaz).
   - Kontrol: kafa `<img>`'ın hemen dışından ve maske geçiş bölgesinden piksel örnekle; RGB farkı 0 olmalı.
   - Görsel WebP kalite/boyutu artmayacak (mevcut KB ±%5).

## KORU (CD)
1280 ve 375 kafa ölçeği + konumu · headline scale/weight · logo+heartbeat kompozisyonu · CTA yerleşimi · nav · motion timing ve overlay-fade · performans mimarisi. **Kafa büyütülmeyecek.**

## Kapı
- `npx tsc --noEmit`, `npm run build`, `npm run lint` → exit 0, yeni uyarı yok.
- Lighthouse mobil ×3 medyan ≥95, CLS ≤0.02, LCP = kafa görseli (görsel dosyası değiştiyse zorunlu).
- Screenshot (motion bittikten sonra, ≥3s): `docs/qa/P1R-1280.png`, `P1R-375.png`, `P1R-1280-hero-crop.png` (P1 crop ile aynı bölge/boyut, doğrudan karşılaştırılacak), `P1R-375-hero-crop.png`.
- Crop'larda konteyner sınırı **hiçbir noktada** algılanmamalı; özellikle sol-üst köşe.

## Çıktılar
- `RAPOR-P1R-KAFA-MASKE.md`: 3 maddenin ne yapıldığı, placeholder zemin rengi ölçümü (önce/sonra hex), tsc/build/lint çıktısı, Lighthouse tablosu + LCP elementi, dosya boyutu önce/sonra.
- `docs/qa/P1R-*.png` (4 adet).
- `PROJECT-STATE.md`: Karar 01 kafa maske değerleri güncellendi (46% / 20–80%); "Son Paket" = P1R; "Sonraki Adım" = Emre QA → commit (P1+P1R tek commit) → P2 (CD #4–#8 sonrası).
- DESIGN-LOCK.md'yi **düzenleme** — v0.2 güncellemesini Claude (Delivery Lead) yazacak.
