"""
Generate photorealistic masking-tape PNGs with paper grain, slight transparency,
torn edges, and subtle color variance. Run from this directory:
    python3 make_tape.py
Outputs to ../assets/tape-*.png
"""
import os
import math
import random
from PIL import Image, ImageDraw, ImageFilter, ImageEnhance

OUT_DIR = os.path.join(os.path.dirname(__file__), "..", "assets")
os.makedirs(OUT_DIR, exist_ok=True)

# Each tape: width, height, base color (RGB), alpha range, grain strength, name, seed
TAPES = [
    # cream masking tape
    (1400, 360, (244, 232, 198), (175, 215), 22, "tape-1", 11),
    (1100, 320, (240, 226, 192), (165, 205), 20, "tape-2", 23),
    (1300, 340, (248, 238, 210), (180, 220), 24, "tape-3", 47),
    # slightly more yellow / aged
    (1200, 330, (236, 218, 178), (170, 210), 26, "tape-4", 71),
    # narrow strip
    (900, 220, (243, 230, 196), (175, 215), 20, "tape-narrow-1", 91),
    (820, 200, (238, 222, 188), (170, 210), 22, "tape-narrow-2", 113),
]


def make_tape(width, height, base_rgb, alpha_range, grain, name, seed):
    rng = random.Random(seed)
    img = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    px = img.load()

    # Subtle horizontal banding to mimic tape extrusion
    bands = [rng.uniform(-6, 6) for _ in range(height)]
    # smooth bands
    smoothed = []
    win = 12
    for y in range(height):
        s = sum(bands[max(0, y - win):y + win + 1]) / max(1, min(2 * win + 1, y + win + 1))
        smoothed.append(s)

    # Soft horizontal sheen
    sheen_center = rng.uniform(0.35, 0.65)
    sheen_strength = 14

    for y in range(height):
        band_shift = smoothed[y]
        # vertical sheen factor (gaussian-ish around sheen_center)
        ny = y / height
        sheen = math.exp(-((ny - sheen_center) ** 2) / 0.18) * sheen_strength
        for x in range(width):
            grain_n = rng.randint(-grain, grain)
            r = max(0, min(255, base_rgb[0] + int(band_shift + sheen) + grain_n - 4))
            g = max(0, min(255, base_rgb[1] + int(band_shift + sheen * 0.95) + grain_n - 3))
            b = max(0, min(255, base_rgb[2] + int(band_shift + sheen * 0.7) + grain_n))
            # alpha noise gives that "see-through tape" feel
            a = rng.randint(alpha_range[0], alpha_range[1])
            px[x, y] = (r, g, b, a)

    # Add fiber streaks (long, thin, faint)
    fiber_layer = Image.new("RGBA", (width, height), (0, 0, 0, 0))
    fdraw = ImageDraw.Draw(fiber_layer)
    for _ in range(int(width * height / 1800)):
        fx0 = rng.randint(0, width - 1)
        fy = rng.randint(0, height - 1)
        flen = rng.randint(20, 90)
        shade = rng.randint(-18, 8)
        col = (
            max(0, min(255, base_rgb[0] + shade - 18)),
            max(0, min(255, base_rgb[1] + shade - 18)),
            max(0, min(255, base_rgb[2] + shade - 12)),
            rng.randint(20, 55),
        )
        fdraw.line([(fx0, fy), (fx0 + flen, fy + rng.randint(-1, 1))], fill=col, width=1)
    fiber_layer = fiber_layer.filter(ImageFilter.GaussianBlur(0.6))
    img = Image.alpha_composite(img, fiber_layer)

    # Torn / feathered edges on the short ends (left & right)
    edge_jitter = max(8, height // 14)
    edge_mask = Image.new("L", (width, height), 255)
    em = edge_mask.load()
    # left edge
    for y in range(height):
        chew = rng.randint(0, edge_jitter)
        for x in range(chew):
            em[x, y] = 0
        # soft falloff
        for x in range(chew, chew + 6):
            em[x, y] = int(255 * (x - chew) / 6)
    # right edge
    for y in range(height):
        chew = rng.randint(0, edge_jitter)
        for x in range(width - chew, width):
            em[x, y] = 0
        for x in range(width - chew - 6, width - chew):
            em[x, y] = int(255 * (width - chew - x) / 6)
    # very mild softening on top/bottom edges
    for x in range(width):
        em[x, 0] = min(em[x, 0], 200)
        em[x, height - 1] = min(em[x, height - 1], 200)

    edge_mask = edge_mask.filter(ImageFilter.GaussianBlur(0.8))
    # combine alpha
    base_alpha = img.split()[3]
    combined_alpha = Image.eval(Image.merge("L", (Image.eval(base_alpha, lambda a: a),)).split()[0], lambda a: a)
    # multiply
    final_alpha = Image.new("L", (width, height))
    fa = final_alpha.load()
    ba = base_alpha.load()
    ema = edge_mask.load()
    for y in range(height):
        for x in range(width):
            fa[x, y] = (ba[x, y] * ema[x, y]) // 255
    img.putalpha(final_alpha)

    # subtle final blur for matte feel
    img = img.filter(ImageFilter.GaussianBlur(0.4))

    # boost contrast a touch
    enhancer = ImageEnhance.Contrast(img)
    img = enhancer.enhance(1.05)

    out = os.path.join(OUT_DIR, f"{name}.png")
    img.save(out, optimize=True)
    print(f"wrote {out} ({width}x{height})")


if __name__ == "__main__":
    for args in TAPES:
        make_tape(*args)
