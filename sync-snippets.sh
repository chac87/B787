#!/bin/bash
# sync-snippets.sh
# Syncs Obsidian CSS snippets → quartz/styles/partials/_snippets.scss

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Machine-specific: iCloud vault path — adjust per machine if needed
SNIPPETS_DIR="/Users/jonasvaupel/Library/Mobile Documents/iCloud~md~obsidian/Documents/787/.obsidian/snippets"
TARGET="$SCRIPT_DIR/quartz/styles/partials/_snippets.scss"

# Guard: skip sync if snippets dir doesn't exist (e.g. Netlify CI).
# Without this, the redirect truncates _snippets.scss to empty on every Netlify build.
if [ ! -d "$SNIPPETS_DIR" ]; then
  echo "⚠ Snippets dir not found — skipping _snippets.scss sync (using committed version)"
  bash "$SCRIPT_DIR/convert-images.sh"
  exit 0
fi

# Build and overwrite _snippets.scss directly (no marker logic needed)
{
  for f in "$SNIPPETS_DIR"/*.css; do
    [ -f "$f" ] || continue
    NAME=$(basename "$f")
    printf '\n/* === snippet: %s === */\n' "$NAME"
    cat "$f"
    printf '\n'
  done
} > "$TARGET"

COUNT=$(ls "$SNIPPETS_DIR"/*.css 2>/dev/null | wc -l | tr -d ' ')
echo "✓ $COUNT Snippets synchronisiert → $TARGET"

# Auto-convert new images in Bilder/ to WebP
bash "$SCRIPT_DIR/convert-images.sh"
