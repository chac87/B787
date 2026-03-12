#!/bin/bash
# sync-snippets.sh
# Syncs Obsidian CSS snippets → Quartz custom.scss
# Uses Python for reliable marker replacement (macOS-compatible)

SNIPPETS_DIR="/Users/jonasvaupel/Library/Mobile Documents/iCloud~md~obsidian/Documents/787/.obsidian/snippets"
TARGET="/Users/jonasvaupel/quartz/quartz/styles/custom.scss"

# 1. Snippets zusammenbauen
GENERATED="/* AUTO-SYNC START */"$'\n'
for f in "$SNIPPETS_DIR"/*.css; do
  [ -f "$f" ] || continue
  NAME=$(basename "$f")
  GENERATED+=$'\n'"/* === snippet: $NAME === */"$'\n'
  GENERATED+=$(cat "$f")$'\n'
done
GENERATED+="/* AUTO-SYNC END */"

# 2. Block ersetzen via Python
python3 -c "
import sys

target = sys.argv[1]
new_block = sys.argv[2]

with open(target, 'r') as f:
    content = f.read()

start = content.find('/* AUTO-SYNC START */')
end = content.find('/* AUTO-SYNC END */') + len('/* AUTO-SYNC END */')

if start >= 0 and end > start:
    content = content[:start] + new_block + content[end:]
elif start < 0:
    content += '\n' + new_block
else:
    print('Fehler: Marker defekt', file=sys.stderr)
    sys.exit(1)

with open(target, 'w') as f:
    f.write(content)
" "$TARGET" "$GENERATED"

COUNT=$(ls "$SNIPPETS_DIR"/*.css 2>/dev/null | wc -l | tr -d ' ')
echo "✓ $COUNT Snippets synchronisiert → $TARGET"
