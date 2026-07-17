#!/bin/bash
# convert-images.sh
# Converts any non-WebP images in content/Bilder/ to WebP (quality 95, method 6)
# and updates all ![[...]] references in the Obsidian vault automatically.
# Runs automatically via sync-snippets.sh before every quartz build/sync.
# Must be a clean no-op on machines without the vault or cwebp (e.g. Netlify CI).

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
BILDER="$SCRIPT_DIR/content/Bilder"

# iCloud vault path — override with OBSIDIAN_VAULT env var if needed
VAULT="${OBSIDIAN_VAULT:-$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/787}"

# Guards: silently skip where the environment can't do conversions
if [ ! -d "$BILDER" ]; then
  echo "⚠ $BILDER not found — skipping image conversion"
  exit 0
fi
if ! command -v cwebp >/dev/null 2>&1; then
  echo "⚠ cwebp not installed — skipping image conversion"
  exit 0
fi

converted=0
failed=0

while read -r f; do
  base="${f%.*}"
  ext="${f##*.}"
  webp="${base}.webp"
  name=$(basename "$f")
  name_noext="${name%.*}"

  # Skip if .webp already exists (already converted)
  [ -f "$webp" ] && continue

  if cwebp -q 95 -m 6 "$f" -o "$webp" 2>/dev/null; then
    # Update references: handles both ![[file.ext]] and ![[Bilder/file.ext]].
    # perl with \Q...\E treats the filename literally (regex-safe) and its
    # in-place edit works identically on macOS and Linux (unlike sed -i).
    if [ -d "$VAULT" ]; then
      export IMG_NAME="$name_noext" IMG_EXT="$ext"
      find "$VAULT" -name "*.md" -not -path "*/.obsidian/*" -print0 |
        xargs -0 perl -pi -e 's/\Q$ENV{IMG_NAME}\E\.\Q$ENV{IMG_EXT}\E/$ENV{IMG_NAME}.webp/g'
    fi
    rm "$f"
    echo "  ✓ $name → ${name_noext}.webp"
    converted=$((converted + 1))
  else
    echo "  ✗ Fehler bei: $name (Original bleibt erhalten)" >&2
    failed=$((failed + 1))
  fi
done < <(find "$BILDER" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \))

[ $converted -gt 0 ] && echo "✓ $converted Bild(er) konvertiert → WebP"
[ $failed -gt 0 ] && echo "⚠ $failed Bild(er) konnten nicht konvertiert werden" >&2
exit 0
