#!/bin/bash
# convert-images.sh
# Converts any non-WebP images in content/Bilder/ to WebP (quality 95, method 6)
# and updates all ![[...]] references in the Obsidian vault automatically.
# Runs automatically via sync-snippets.sh before every quartz build/sync.

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BILDER="$SCRIPT_DIR/content/Bilder"

# Machine-specific: iCloud vault path — adjust per machine if needed
VAULT="/Users/jonasvaupel/Library/Mobile Documents/iCloud~md~obsidian/Documents/787"

converted=0

while read -r f; do
  base="${f%.*}"
  ext="${f##*.}"
  webp="${base}.webp"
  name=$(basename "$f")
  name_noext="${name%.*}"

  # Skip if .webp already exists (already converted)
  [ -f "$webp" ] && continue

  cwebp -q 95 -m 6 "$f" -o "$webp" 2>/dev/null

  if [ $? -eq 0 ]; then
    # Update references: handles both ![[file.ext]] and ![[Bilder/file.ext]]
    find "$VAULT" -name "*.md" -not -path "*/.obsidian/*" \
      -exec sed -i '' "s/${name_noext}\\.${ext}/${name_noext}.webp/g" {} \;
    rm "$f"
    echo "  ✓ $name → ${name_noext}.webp"
    converted=$((converted + 1))
  else
    echo "  ✗ Fehler bei: $name" >&2
  fi
done < <(find "$BILDER" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \))

[ $converted -gt 0 ] && echo "✓ $converted Bild(er) konvertiert → WebP"
exit 0
