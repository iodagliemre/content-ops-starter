# CLAUDE.md — Doveify Site V2 (Claude Code Proje Talimatı)

## Rol
Sen Implementation'sın. Delivery Lead (Claude) paket briefi yazar, Emre paylaşır, sen uygularsın.

## Sadece Oku (dokunma)
- `CLAUDE.md` (bu dosya), `DOVEIFY-DESIGN-SKILL.md`, `.env*`
- `docs/design/approved/` (görsel QA otoritesi; sen buraya dosya koymazsın)
- `docs/design/reference/`, `docs/brand/`

## Her Paket Sonunda Zorunlu
1. `tsc --noEmit; echo "exit: $?"` → 0
2. `npm run build; echo "exit: $?"` → 0
3. `npm run lint; echo "exit: $?"` → 0
4. `RAPOR-Pxx.md` yaz (yapılan / yapılmayan / bekleyen karar / dosya listesi)
5. `PROJECT-STATE.md` üzerine yaz (birikme yok)

Pipe ile doğrulama yasak (`| head && echo ok` exit code'u maskeler).

## Git
- Git komutları yasak (`.claude/settings.json` deny). Branch/commit/push Emre'nindir.
- Paket adını RAPOR'a yaz; Emre branch açar.

## Tasarım Kuralları (özet — tamamı DESIGN-LOCK.md'de olacak)
- Görsel otorite: `docs/design/approved/homepage-v1.png`. Yoksa (Faz 0–1) `docs/design/reference/homepage-ref-v1.png`.
- %80 sakin / %20 dijital enerji. Neon cyberpunk YOK.
- Sonsuz animasyon YOK. Hero bir kez oynar, durur. `prefers-reduced-motion` → statik.
- Zemin: neredeyse siyah lacivert. Beyaz tipografi. Doveify mavisi yalnızca aktif noktada.
- Glow yalnızca: dijital kafa, heartbeat, sistem geçişleri.
- Motion presetleri: fadeUp .6s / fadeIn .8s / stagger (DOVEIFY-DESIGN-SKILL.md). Framer Motion bu projede ONAYLI; önce CSS, gerçekten gerekiyorsa Framer Motion (`LazyMotion` + `domAnimation`, bundle küçük). Kullanılan her yer RAPOR'da listelenir.
- Lighthouse mobil ≥95, CLS ≈0. Görseller: WebP/AVIF, `next/image`, boyut belirtilmiş.
- Fontlar self-host, TR karakter subset.

## İçerik
- Metin kaynağı: `content/` klasörü (mevcut siteden envanter). Chat'ten metin uydurma.
- Metin değişikliği önerme. Boşluk varsa `[BEKLEYEN-İÇERİK]` yaz, RAPOR'da listele.
- Karar gerektiren şey: durdur, RAPOR'a "bekleyen karar" yaz, sonrakine geç.

## Doğrulama
- Her bölüm 1280px ve 375px'te kontrol; screenshot `docs/qa/Pxx-1280.png`, `docs/qa/Pxx-375.png`
- Commit mesajı formatı (Emre için öneri): Turkish ASCII-safe, `feat(hero): ...`
