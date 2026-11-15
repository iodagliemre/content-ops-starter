"""PAKET-P8 G2/G5: Open Graph images (1200x630), P5/P6 template.

    python scripts/og.py            # systems (public/og/<slug>{,-en}.png) + every Bilgi Bankası article
    python scripts/og.py bilgi      # only articles (public/og/bilgi/<slug>{,-en}.png)

Needs Pillow + fontTools (+ brotli) to read the self-hosted Inter woff2 subsets. The brand signature
(emblem + DOVEIFY + heartbeat) is taken from public/og/og-home.png so it stays pixel-identical to P5.
A new article without its own image falls back to public/og/bilgi-bankasi.png (see src/pages bilgi pages).
"""
import io
import os
import re
import sys

from fontTools.ttLib import TTFont
from PIL import Image, ImageDraw, ImageFont

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
PUB = os.path.join(ROOT, "public")
BG = (5, 11, 20)
BLUE = (40, 88, 170)
WHITE = (255, 255, 255)
GREY = (150, 160, 178)


def _ttf(name):
    font = TTFont(os.path.join(PUB, "fonts", name))
    font.flavor = None
    buf = io.BytesIO()
    font.save(buf)
    return buf.getvalue(), set(font.getBestCmap())


_FACES = {w: [_ttf(f"inter-latin-{w}.woff2"), _ttf(f"inter-latin-ext-{w}.woff2")] for w in (300, 400, 500)}


class Face:
    """Inter is split into latin / latin-ext subsets; pick the subset that has each character."""

    def __init__(self, weight, size):
        self.parts = [(ImageFont.truetype(io.BytesIO(data), size), cmap) for data, cmap in _FACES[weight]]

    def _font(self, ch):
        for font, cmap in self.parts:
            if ord(ch) in cmap:
                return font
        return self.parts[0][0]

    def width(self, text, tracking=0):
        return sum(self._font(c).getlength(c) + tracking for c in text)

    def draw(self, d, xy, text, fill, tracking=0):
        x, y = xy
        for c in text:
            f = self._font(c)
            d.text((x, y), c, font=f, fill=fill)
            x += f.getlength(c) + tracking


def wrap(face, text, max_w):
    lines, line = [], ""
    for word in text.split():
        test = f"{line} {word}".strip()
        if face.width(test) <= max_w or not line:
            line = test
        else:
            lines.append(line)
            line = word
    return lines + [line]


SIGNATURE = Image.open(os.path.join(PUB, "og", "og-home.png")).convert("RGB").crop((70, 62, 400, 112))


def base():
    im = Image.new("RGB", (1200, 630), BG)
    im.paste(SIGNATURE, (70, 62))
    return im


def save(im, rel):
    path = os.path.join(PUB, rel)
    os.makedirs(os.path.dirname(path), exist_ok=True)
    im.save(path, optimize=True)
    print(rel, os.path.getsize(path) // 1024, "KB")


def system_og(rel, eyebrow, title, shot):
    im = base()
    d = ImageDraw.Draw(im)
    Face(500, 16).draw(d, (74, 262), eyebrow, BLUE, tracking=2.4)  # already upper case (Turkish İ)
    face = Face(300, 56 if len(title) < 16 else 46)
    y = 300
    for line in wrap(face, title, 480):
        face.draw(d, (72, y), line, WHITE)
        y += 64
    frame = (608, 142, 1128, 488)
    s = Image.open(os.path.join(PUB, shot)).convert("RGB")
    w, h = frame[2] - frame[0], frame[3] - frame[1]
    s = s.resize((w, round(s.height * w / s.width)), Image.LANCZOS).crop((0, 0, w, h))
    mask = Image.new("L", (w, h), 0)
    ImageDraw.Draw(mask).rounded_rectangle((0, 0, w - 1, h - 1), radius=8, fill=255)
    im.paste(s, frame[:2], mask)
    d.rounded_rectangle(frame, radius=8, outline=(29, 40, 58), width=1)
    save(im, rel)


def article_og(rel, eyebrow, title):
    im = base()
    d = ImageDraw.Draw(im)
    Face(500, 16).draw(d, (74, 250), eyebrow, BLUE, tracking=2.4)
    face = Face(300, 52)
    lines = wrap(face, title, 1040)
    if len(lines) > 3:
        face = Face(300, 44)
        lines = wrap(face, title, 1040)
    y = 292
    for line in lines:
        face.draw(d, (72, y), line, WHITE)
        y += int(face.parts[0][0].size * 1.2)
    save(im, rel)


SYSTEMS = [
    ("clinic-os", "Clinic OS", "Clinic OS"),
    ("brokers-brain", "Broker's Brain", "Broker's Brain"),
    ("emlak-ofis-paneli", "Emlak Ofis Paneli", "Real Estate Office Panel"),
    ("osgb-yonetim", "OSGB Yönetim", "OSGB Management"),
    ("kuru-temizleme", "Kuru Temizleme Paneli", "Dry Cleaning Panel"),
    ("turkisg-ai", "TurkİSG AI", "TurkİSG AI"),
]


def frontmatter(path):
    text = open(path, encoding="utf8").read()
    m = re.match(r"---\n(.*?)\n---", text, re.S)
    return dict(line.split(": ", 1) for line in m.group(1).splitlines() if ": " in line)


def main(only):
    if only != "bilgi":
        for slug, tr, en in SYSTEMS:
            shot = f"systems/{slug}/hero.webp"
            system_og(f"og/{slug}.png", "KURDUĞUMUZ SİSTEM", tr, shot)
            system_og(f"og/{slug}-en.png", "SYSTEM WE BUILT", en, shot)
        article_og("og/kendi-yaziliminiz.png", "KENDİ YAZILIMINIZ", "Kendi yazılımınızı yaptırın.")
        article_og("og/kendi-yaziliminiz-en.png", "YOUR OWN SOFTWARE", "Get your own software built.")
        article_og("og/bilgi-bankasi.png", "BİLGİ BANKASI", "Sahiplik, sistemler ve işletmenin yapay zekâsı.")
        article_og("og/bilgi-bankasi-en.png", "KNOWLEDGE BASE", "Ownership, systems and the business's own AI.")
    for locale, eyebrow in (("tr", "BİLGİ BANKASI"), ("en", "KNOWLEDGE BASE")):
        folder = os.path.join(ROOT, "content", locale, "bilgi")
        for name in sorted(os.listdir(folder)):
            if name.endswith(".md"):
                fm = frontmatter(os.path.join(folder, name))
                suffix = "" if locale == "tr" else "-en"
                article_og(f"og/bilgi/{fm['slug']}{suffix}.png", eyebrow, fm["title"])


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else "")
