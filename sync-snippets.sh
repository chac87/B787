#!/bin/bash
# sync-snippets.sh
# Syncs Obsidian CSS snippets → quartz/styles/partials/_snippets.scss

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"

# Machine-specific: iCloud vault path — adjust per machine if needed
SNIPPETS_DIR="/Users/jonasvaupel/Library/Mobile Documents/iCloud~md~obsidian/Documents/787/.obsidian/snippets"
TARGET="$SCRIPT_DIR/quartz/styles/partials/_snippets.scss"

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
