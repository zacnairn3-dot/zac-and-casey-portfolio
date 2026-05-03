"""
Generate a tile-able warm-paper texture (subtle fiber + grain) for the page bg
and case-opener bg. Output: ../assets/paper.jpg (large, tileable) and ../assets/paper-card.jpg
"""
import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "assets")


def make_paper(size, base_rgb, fiber_density, grain, name, seed):
    rng = random.Random(seed)
    w, h = size
    img = Image.new("RGB", size, base_rgb)
    px = img.load()

    # Per-pixel grain
    for y in range(h):
        for x in range(w):
            n = rng.randint(-grain, grain)
            r = max(0, min(255, base_rgb[0] + n))
            g = max(0, min(255, base_rgb[1] + n))
            b = max(0, min(255, base_rgb[2] + n))
            px[x, y] = (r, g, b)

    # Fibers — short, faint, slightly darker
    fibers = Image.new("RGBA", size, (0, 0, 0, 0))
    fdraw = ImageDraw.Draw(fibers)
    n_fibers = int(w * h / fiber_density)
    for _ in range(n_fibers):
        fx = rng.randint(0, w - 1)
        fy = rng.randint(0, h - 1)
        flen = rng.randint(20, 80)
        ang = rng.uniform(-0.25, 0.25)  # mostly horizontal
        x2 = int(fx + flen * math.cos(ang))
        y2 = int(fy + flen * math.sin(ang))
        shade = rng.randint(-20, -5)
        col = (
            max(0, min(255, base_rgb[0] + shade)),
            max(0, min(255, base_rgb[1] + shade)),
            max(0, min(255, base_rgb[2] + shade)),
            rng.randint(20, 50),
        )
        fdraw.line([(fx, fy), (x2, y2)], fill=col, width=1)
    fibers = fibers.filter(ImageFilter.GaussianBlur(0.5))
    img = img.convert("RGBA")
    img = Image.alpha_composite(img, fibers)

    # Subtle vignette/light variance via large gaussian noise field
    field = Image.new("L", size, 128)
    fpx = field.load()
    cells_x = 32
    cells_y = 32
    cell_w = max(1, w / cells_x)
    cell_h = max(1, h / cells_y)
    grid = [[rng.randint(110, 146) for _ in range(cells_x + 2)] for _ in range(cells_y + 2)]
    for y in range(h):
        gy = y / cell_h
        gy0 = min(int(gy), cells_y)
        gyf = gy - gy0
        for x in range(w):
            gx = x / cell_w
            gx0 = min(int(gx), cells_x)
            gxf = gx - gx0
            a = grid[gy0][gx0]
            b = grid[gy0][gx0 + 1]
            c = grid[gy0 + 1][gx0]
            d = grid[gy0 + 1][gx0 + 1]
            top = a * (1 - gxf) + b * gxf
            bot = c * (1 - gxf) + d * gxf
            fpx[x, y] = int(top * (1 - gyf) + bot * gyf)
    field = field.filter(ImageFilter.GaussianBlur(8))
    # apply field as a very subtle warm overlay (warmer than greys)
    warm_field = Image.new("RGBA", size, (0, 0, 0, 0))
    wf_px = warm_field.load()
    f_px = field.load()
    for y in range(h):
        for x in range(w):
            v = f_px[x, y]
            # bias warm: red+green > blue
            wf_px[x, y] = (v, int(v * 0.97), int(v * 0.86), 28)
    img = Image.alpha_composite(img, warm_field)

    img = img.convert("RGB")
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.04)

    out = os.path.join(OUT_DIR, f"{name}.jpg")
    img.save(out, "JPEG", quality=82, optimize=True, progressive=True)
    print(f"wrote {out} ({w}x{h})")


if __name__ == "__main__":
    # Big tileable page texture
    make_paper((1200, 1200), (246, 240, 226), 700, 6, "paper", 7)
    # Card / opener texture (slightly warmer & cleaner)
    make_paper((1400, 700), (252, 245, 226), 1000, 5, "paper-card", 19)
