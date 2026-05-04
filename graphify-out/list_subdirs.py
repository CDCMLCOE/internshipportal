import json
from pathlib import Path
from collections import Counter

detect_path = Path('graphify-out/.graphify_detect_utf8.json')
if not detect_path.exists():
    print("[]")
    exit()

detect = json.loads(detect_path.read_text(encoding='utf-8-sig'))
counts = Counter()
all_files = [f for files in detect['files'].values() for f in files]

cwd = Path.cwd()
for f in all_files:
    try:
        p = Path(f)
        rel = p.relative_to(cwd)
        parts = rel.parts
        if len(parts) > 1:
            counts[parts[0]] += 1
        else:
            counts['/'] += 1
    except ValueError:
        # File might be outside CWD if absolute paths were used oddly
        counts['other'] += 1

print(json.dumps(counts.most_common(5)))
