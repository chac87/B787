#!/bin/bash
# sync-snippets.sh
# Syncs Obsidian CSS snippets → quartz/styles/partials/_snippets.scss

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# iCloud vault path — override with OBSIDIAN_VAULT env var if needed
VAULT="${OBSIDIAN_VAULT:-$HOME/Library/Mobile Documents/iCloud~md~obsidian/Documents/787}"
SNIPPETS_DIR="$VAULT/.obsidian/snippets"
TARGET="$SCRIPT_DIR/quartz/styles/partials/_snippets.scss"

# Guard: skip sync if snippets dir doesn't exist (e.g. Netlify CI).
# Without this, the redirect truncates _snippets.scss to empty on every Netlify build.
if [ ! -d "$SNIPPETS_DIR" ]; then
  echo "⚠ Snippets dir not found — skipping _snippets.scss sync (using committed version)"
  bash "$SCRIPT_DIR/convert-images.sh"
  exit 0
fi

# Build into a temp file first — only replace the committed _snippets.scss if
# the result is non-empty (protects against an existing-but-empty snippets dir).
TMP="$TARGET.tmp"
{
  for f in "$SNIPPETS_DIR"/*.css; do
    [ -f "$f" ] || continue
    NAME=$(basename "$f")
    printf '\n/* === snippet: %s === */\n' "$NAME"
    cat "$f"
    printf '\n'
  done
} > "$TMP"

if [ -s "$TMP" ]; then
  mv "$TMP" "$TARGET"
  COUNT=$(ls "$SNIPPETS_DIR"/*.css 2>/dev/null | wc -l | tr -d ' ')
  echo "✓ $COUNT Snippets synchronisiert → $TARGET"
else
  rm -f "$TMP"
  echo "⚠ Snippets dir is empty — keeping committed _snippets.scss"
fi

# Auto-convert new images in Bilder/ to WebP
bash "$SCRIPT_DIR/convert-images.sh"
