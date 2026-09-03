# TOKENS.md — V2 Design Tokens (ölçülen)

> Kaynak: `docs/design/reference/homepage-ref-v1.png` (1024×1536 px, ChatGPT CD, 03.09.2026).
> Yöntem: Python/Pillow ile piksel örnekleme (tekil piksel + küçük bölge histogramı). Koordinatlar
> görselin gerçek piksel ızgarasına göre (sol üst = 0,0). Bu bir **placeholder ölçüm**tür —
> Faz 2 DESIGN-LOCK'ta Emre onayıyla kesinleşir.
> Uygulama: `src/css/main.css` → `@theme` bloğunda `--color-v2-*` olarak tanımlı. Henüz hiçbir
> bileşene bağlanmadı (P00 sadece token'ları tanımlıyor); P1 nav/hero için tüketecek.

## Zemin

| Token | Değer | Ölçüm |
|---|---|---|
| `--color-v2-bg-base` | `#050B14` | 6 nokta ortalaması: (5,5) `#010509`, (5,760) `#01070E`, (5,1400) `#010A13`, (900,5) `#010912`, (990,1520) `#010C14`, (500,610) `#010A11` → ort. rgb(1,9,16). `#060B16` (BRAND.md placeholder) ile örtüşüyor, teyit edildi. |
| `--color-v2-bg-elevated` | `#1C2F47` | Ürün kartı (CLINIC OS) iç zemini, y=620 yatay tarama x=330→560: kenar `#182B3E` → merkez `#223A5A` (hafif radyal glow). Temsili orta değer alındı. |

## Tipografi rengi

| Token | Değer | Ölçüm |
|---|---|---|
| `--color-v2-text-primary` | `#FFFFFF` | Nav wordmark "DOVEIFY" (x≈32-160, y≈32-64) ölç. `#F7F7F7`/`#E7E8E9`; headline "DİJİTAL ZEKÂ." beyaz. Pratik değer: saf beyaz. |
| `--color-v2-text-secondary` | `#9AA0A6` | Nav linkleri "Ürünlerimiz Web Factory..." (x=544-960, y=32-64), 9 örnek ortalaması rgb(148,153,157). |

## Doveify mavisi

| Token | Değer | Ölçüm |
|---|---|---|
| `--color-v2-blue` | `#2563EB` | Mevcut marka mavisi (`content/data/style.json` → `primary`) ile uzlaştırıldı (BRAND.md #12). Referans görsel ölçümü (CTA buton, 6 nokta ortalaması) ≈ `#2969CD` — aynı aralıkta, uzlaşma onaylandı. |
| `--color-v2-blue-from` | `#2E8AE9` | CTA butonu "ÜRÜNLERİMİZİ KEŞFET" üst kenarı, örnek noktalar (80,405) `#2E85E4`, (180,401) `#3083E7`, (200,408) `#2B77DA`. Buton dikey gradyanının açık ucu. |
| `--color-v2-blue-to` | `#2452B9` | Aynı buton alt kenarı, örnek noktalar (90,423) `#2457BD`, (150,426) `#224EB6`, (70,428) `#2651B8`. Gradyanın koyu ucu — logo kanadındaki gradyanla aynı aile (bkz. BRAND.md). |

Buton konumu: x≈59-218, y≈399-430 (1024×1536 görsel üzerinde), ince tarama ile (3px adım) doğrulandı — bkz. G2 vektörizasyon notları.

## Border

| Token | Değer | Ölçüm |
|---|---|---|
| `--color-v2-border` | `rgba(120,160,255,0.18)` | BRAND.md placeholder — ince 1px kart kenarı bu çözünürlükte güvenilir tekil piksel ölçümüne uygun değildi (anti-aliasing). **Bekleyen ölçüm**: Faz 2'de daha yüksek çözünürlüklü referans veya gerçek Figma/CD kaynağından netleştirilecek. |

## Bekleyen

- Kart border rengi kesin ölçülmedi (yukarı bkz).
- Glow/shadow değerleri ölçülmedi (Faz 1 Performance Gate hero prototipinde ele alınacak).
- Bu token seti şu an sadece `@theme` içinde tanımlı, hiçbir bileşen tüketmiyor (bilinçli — P00 kapsamı sadece homepage iskeleti + token tanımı; gerçek nav/hero P1'de bu token'ları kullanacak).
