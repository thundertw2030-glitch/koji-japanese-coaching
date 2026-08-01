#!/usr/bin/env python3
"""Copy an MP4 and enable the prepared video section on all homepages."""
from pathlib import Path
import shutil
import sys

ROOT = Path(__file__).resolve().parents[1]
LANGS = ['ja', 'en', 'zh-tw', 'zh-cn', 'ko', 'id', 'th', 'de', 'fr', 'it', 'es', 'pt']

if len(sys.argv) != 2:
    raise SystemExit('Usage: python tools/enable_intro_video.py /path/to/koji-introduction.mp4')

source = Path(sys.argv[1]).expanduser().resolve()
if not source.is_file() or source.suffix.lower() != '.mp4':
    raise SystemExit('Please provide an existing MP4 file.')

destination = ROOT / 'assets' / 'video' / 'koji-introduction.mp4'
destination.parent.mkdir(parents=True, exist_ok=True)
shutil.copy2(source, destination)

updated = 0
for lang in LANGS:
    page = ROOT / lang / 'index.html'
    text = page.read_text(encoding='utf-8')
    old = 'data-video-ready="false"'
    if old not in text and 'data-video-ready="true"' not in text:
        raise SystemExit(f'Missing video integration marker: {page}')
    if old in text:
        page.write_text(text.replace(old, 'data-video-ready="true"', 1), encoding='utf-8')
    updated += 1

print(f'Video copied to {destination}')
print(f'Enabled the video section on {updated} language homepages.')
