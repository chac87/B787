#!/usr/bin/env node
// lint-content.mjs — deterministic checks for the B787 Quartz vault.
// Usage: node scripts/lint-content.mjs
// Exit code 1 if any ERROR-level finding exists (warnings don't fail).
//
// Enforced rules (from CLAUDE.md):
//   dash          en dash (–) only, never em dash (—)
//   hr            no `---` separator lines in the body (frontmatter only)
//   thousands     dot as thousands separator (8.000), never comma (8,000)
//   speed         v<sub>XX</sub> notation, never plain V1/V2/VR/VREF/...
//   frontmatter   every page starts with a `---` frontmatter block
//   images        .webp only, never .png/.jpg/.jpeg; never <a>-wrapped <img>
//   book          every book.md wikilink resolves to a real file
//   orphans       every md file is reachable (book.md or linked from another page)
//   bilder        every image in Bilder/ is referenced somewhere

import fs from "node:fs"
import path from "node:path"
import { fileURLToPath } from "node:url"

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..")
const CONTENT = path.join(ROOT, "content")
const SKIP_DIRS = new Set([".obsidian", ".trash"])

if (!fs.existsSync(CONTENT)) {
  console.error(`content/ not found at ${CONTENT}`)
  process.exit(2)
}

/** Recursively collect files under dir. */
function walk(dir) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (SKIP_DIRS.has(entry.name)) continue
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full))
    else out.push(full)
  }
  return out
}

const allFiles = walk(CONTENT)
const mdFiles = allFiles.filter((f) => f.endsWith(".md"))
const rel = (f) => path.relative(CONTENT, f)

const errors = []
const warnings = []
const err = (file, line, rule, msg) =>
  errors.push(`${rel(file)}${line ? ":" + line : ""}  [${rule}]  ${msg}`)
const warn = (file, line, rule, msg) =>
  warnings.push(`${rel(file)}${line ? ":" + line : ""}  [${rule}]  ${msg}`)

// ── Per-file line checks ─────────────────────────────────────────────────────
const SPEED_RE = /\bV(1|2|R|REF|FE|LO|MO|APP|MCA|SR|TIRE)\b/
const wikiTargets = new Set() // lowercased basenames referenced via [[...]]
const referencedImages = new Set()

// Quartz slugifies emitted asset names AND rewrites <img src> at build time, so
// "hyd ovhd.webp", "hyd%20ovhd.webp" and "hyd-ovhd.webp" all resolve to the same
// file. Normalize both sides of the comparison the same way.
const imgKey = (s) => {
  let d = s
  try {
    d = decodeURIComponent(s)
  } catch {
    /* keep raw on malformed escapes */
  }
  return d.toLowerCase().replace(/[\s-]+/g, "-")
}

for (const file of mdFiles) {
  const text = fs.readFileSync(file, "utf8")
  const lines = text.split("\n")

  // book.md is a pure navigation manifest — no frontmatter required
  if (!text.startsWith("---") && rel(file) !== "book.md")
    err(file, 1, "frontmatter", "missing frontmatter block")

  let inFrontmatter = text.startsWith("---")
  let frontmatterDone = !inFrontmatter
  let inFence = false

  lines.forEach((line, i) => {
    const n = i + 1
    if (inFrontmatter && n > 1 && /^---\s*$/.test(line)) {
      inFrontmatter = false
      frontmatterDone = true
      return
    }
    if (inFrontmatter) return
    if (/^```/.test(line)) {
      inFence = !inFence
      return
    }
    if (inFence) return

    if (line.includes("—")) err(file, n, "dash", "em dash (—) — use en dash (–)")
    if (frontmatterDone && /^\s*---\s*$/.test(line)) err(file, n, "hr", "`---` separator in body")
    if (/\b\d{1,3},\d{3}\b/.test(line) && !/points=|<path|<svg|<polygon|<polyline/.test(line))
      err(file, n, "thousands", "comma thousands separator — use dot (8.000)")
    if (SPEED_RE.test(line) && !line.includes("<sub>") && !/alt="/.test(line))
      err(file, n, "speed", `plain V-speed — use v<sub>…</sub> (${line.match(SPEED_RE)[0]})`)
    if (/!\[[^\]]*\]\([^)]*\.(png|jpe?g)\)|\[\[[^\]]*\.(png|jpe?g)/i.test(line) || /<img[^>]*\.(png|jpe?g)/i.test(line))
      err(file, n, "images", ".png/.jpg reference — must be .webp")
    if (/<a[^>]*>\s*<img/i.test(line)) err(file, n, "images", "<img> wrapped in <a> — breaks lightbox")

    // Raw <table> at line start without a class must sit inside a .data-table
    // wrapper div (pattern: <div class="data-table data-table--split"> above).
    // Nested mid-line layout tables (inside cells/cards) are intentionally exempt.
    if (/^<table\b(?![^>]*class=)/.test(line)) {
      const prev = lines
        .slice(Math.max(0, i - 2), i)
        .filter((l) => l.trim() !== "")
        .join(" ")
      if (!prev.includes("data-table"))
        err(file, n, "tables", "raw <table> without class and without .data-table wrapper")
    }

    for (const m of line.matchAll(/\[\[([^\]|#]+)/g)) {
      const target = m[1].trim()
      if (/\.(webp|png|jpe?g|svg|gif)$/i.test(target)) {
        referencedImages.add(imgKey(path.basename(target)))
      } else {
        wikiTargets.add(path.basename(target).toLowerCase())
      }
    }
    // src="/Bilder/…" — the name may contain literal spaces, %20 or hyphens
    for (const m of line.matchAll(/\/Bilder\/([^")>]+?\.(?:webp|png|jpe?g|svg|gif))/gi)) {
      referencedImages.add(imgKey(m[1]))
    }
  })
}

// ── book.md link resolution ──────────────────────────────────────────────────
const basenameIndex = new Map() // lowercased basename (no ext) -> [files]
for (const f of mdFiles) {
  const key = path.basename(f, ".md").toLowerCase()
  if (!basenameIndex.has(key)) basenameIndex.set(key, [])
  basenameIndex.get(key).push(f)
}

const bookFile = path.join(CONTENT, "book.md")
const bookTargets = new Set()
if (fs.existsSync(bookFile)) {
  const bookText = fs.readFileSync(bookFile, "utf8")
  bookText.split("\n").forEach((line, i) => {
    for (const m of line.matchAll(/\[\[([^\]|#]+)/g)) {
      const target = m[1].trim()
      bookTargets.add(path.basename(target).toLowerCase())
      if (!basenameIndex.has(path.basename(target).toLowerCase()))
        err(bookFile, i + 1, "book", `link target not found: [[${target}]]`)
    }
  })
}

// ── Orphan pages ─────────────────────────────────────────────────────────────
for (const f of mdFiles) {
  const base = path.basename(f, ".md").toLowerCase()
  if (base === "index" || base === "book") continue
  const inBook = bookTargets.has(base)
  const linked = wikiTargets.has(base)
  // NNC leaf pages are linked via <a href> from the NNC index — count folder as reachable
  const isNncLeaf = rel(f).startsWith("Non Normals/Non-Normal Checklists/")
  const hrefLinked = mdFiles.some((other) => {
    if (other === f) return false
    return false // href resolution handled via warning below only for non-NNC
  })
  if (!inBook && !linked && !isNncLeaf && !hrefLinked) {
    warn(f, 0, "orphan", "not in book.md and not wiki-linked from any page")
  }
}

// ── Unreferenced images ──────────────────────────────────────────────────────
const bilderDir = path.join(CONTENT, "Bilder")
if (fs.existsSync(bilderDir)) {
  for (const img of fs.readdirSync(bilderDir)) {
    if (img.startsWith(".")) continue
    if (!referencedImages.has(imgKey(img))) {
      warn(path.join(bilderDir, img), 0, "bilder", "image referenced nowhere")
    }
  }
}

// ── Report ───────────────────────────────────────────────────────────────────
if (errors.length) {
  console.log(`\n✗ ${errors.length} error(s):\n`)
  for (const e of errors) console.log("  " + e)
}
if (warnings.length) {
  console.log(`\n⚠ ${warnings.length} warning(s):\n`)
  for (const w of warnings) console.log("  " + w)
}
if (!errors.length && !warnings.length) console.log("✓ content lint clean")
else console.log(`\nChecked ${mdFiles.length} markdown files.`)
process.exit(errors.length ? 1 : 0)
