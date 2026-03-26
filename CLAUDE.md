# Claude Instructions – B787 Quartz Guide

## SOP / Procedure Format

All procedures (Normal Ops, Non-Normals, Supplementary) must use the **dot-leader checklist format**. Never use tables for procedure steps.

### Structure

```markdown
<div class="checklist">

<div class="cl-item"><strong>Item Name</strong><span class="cl-dots"></span><strong>ACTION</strong></div>
<div class="cl-sub">Sub-step or clarifying note (indented, smaller font)</div>

</div>
```

### Rules

- **Main steps**: `<div class="cl-item">` — item name and action both in `<strong>`, separated by `<span class="cl-dots"></span>`
- **Sub-steps**: `<div class="cl-sub">` — indented, slightly smaller font, plain text (no bold)
- **No colored pills**: Never use `sop-badge` or `sop-value` classes inside `.checklist`
- **Notes/warnings** above the checklist: use Obsidian callouts (`> [!info]`, `> [!warning]`, `> [!limit]`)
- **Mobile-safe**: The CSS handles responsive layout — do not add `white-space: nowrap` or fixed widths to checklist elements

### Frontmatter

```yaml
---
title: <Procedure Name>
tags: [sop, <phase>, <role>]   # e.g. preflight, first-officer, captain
section: <FCOM section>        # e.g. 2-1-2
role: <First Officer | Captain | Both>
---
```

### Example

```markdown
<div class="checklist">

<div class="cl-item"><strong>Security Check</strong><span class="cl-dots"></span><strong>PERFORM</strong></div>

<div class="cl-item"><strong>IRS selectors</strong><span class="cl-dots"></span><strong>OFF 30 seconds, then ON</strong></div>
<div class="cl-sub">Verify that the ON BAT light is extinguished</div>

<div class="cl-item"><strong>STATUS display</strong><span class="cl-dots"></span><strong>CHECK</strong></div>
<div class="cl-sub">Verify that only expected messages are shown</div>
<div class="cl-sub">Verify that the following are sufficient for flight: Oxygen pressure, Hydraulic quantity, Engine oil quantity</div>

</div>
```

## CSS Classes Reference

Defined in `quartz/styles/custom.scss`:

| Class | Purpose |
|---|---|
| `.checklist` | Flex column container for the full procedure |
| `.cl-item` | One checklist row: item name + dots + action |
| `.cl-dots` | Dot-leader span that fills space between name and action |
| `.cl-sub` | Indented sub-step (0.875em font, 1.4em left margin) |
| `.sop-badge` | Colored pill — **only for non-checklist use** (e.g. summary tables) |
| `.sop-value` | Monospace action value — **only for non-checklist use** |
| `.cl-indent` | Adds one extra indent level — combine with `cl-item` or `cl-sub` for items nested under a panel header |
| `.cl-variant` | Dark blue bar opening an aircraft-specific section (e.g. `B787 (-ABPF to -ABPU)`) |
| `.cl-variant-end` | Gray bar closing a variant section — **always required** after the last item of every `cl-variant` block (e.g. `END B787 (-ABPF to -ABPU)`) |
| `.cl-note` | Inline note — small italic gray text, indented |
| `.cl-warning` | Inline warning — small italic red text, indented |
| `.cl-caution` | Inline caution — small italic amber text, indented |
| `.c-red` | Inline red span for labeled indicators (e.g. `<span class="c-red">OFF</span>`) |
| `.c-green` | Inline green span for positive states (e.g. `<span class="c-green">illuminated</span>`) |

## Content Location

- Procedures live in `content/Normal Ops/SOPs/` or `content/Non Normals/`
- Content is a **symlink** to the Obsidian vault at `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/787`
- Editing files in `content/` directly edits the Obsidian vault

## book.md — Navigation Order

`content/book.md` defines the linear reading order for the Prev/Next navigation buttons. **Every new page must be added here**, otherwise the navigation skips it.

Current structure:
```
## [[index|Inhaltsverzeichnis]]
[[General Infos]]
[[Limitations]]
## [[Systems/index|Systems]]
[[Systems/Electrical Power System|Electrical Power System]]
...
[[Doors]]
## [[Normal Ops/index|Normal Ops, SOPs]]
### [[Normal Ops/SOPs/index|Standard Operating Procedures]]
[[Normal Ops/SOPs/Preliminary Preflight - First Officer|Preliminary Preflight Procedure]]
[[Normal Ops/SOPs/CDU EFB Preflight - Capt and FO|CDU/EFB Preflight Procedure]]
### [[Normal Ops/Supplementary Procedures/index|Supplementary Procedures]]
[[Low Visibility Operations]]
[[Adverse Weather]]
[[De-Ice, Anti-Ice]]
```

### Rules
- `## [[path|Title]]` — top-level section (e.g. Systems, Normal Ops)
- `### [[path|Title]]` — sub-section index (e.g. SOPs, Supplementary Procedures)
- `[[path|Title]]` — individual page
- New SOPs go under `### [[Normal Ops/SOPs/index|Standard Operating Procedures]]`
- New Non-Normals go under the appropriate Non-Normals section
- Also update the corresponding `index.md` with a `## [[link]]` entry

## CSS Architecture — Snippets vs. custom.scss

`quartz sync` runs `sync-snippets.sh` before every commit. This script merges all Obsidian CSS snippets directly into `custom.scss`, overwriting the `/* AUTO-SYNC START */` … `/* AUTO-SYNC END */` block.

**Rule: never edit callout/snippet styles in `custom.scss` directly — always edit the source snippet file.**

| What to change | Edit this file |
|---|---|
| Callout styles (padding, title size, colors, dark mode) | `~/.../787/.obsidian/snippets/callouts.css` |
| Image tweaks | `~/.../787/.obsidian/snippets/image-tweak.css` |
| Table in callout | `~/.../787/.obsidian/snippets/tabelle-in-callout.css` |
| Table 50/50 | `~/.../787/.obsidian/snippets/table-50-50.css` |
| Global hacks | `~/.../787/.obsidian/snippets/global-hacks.css` |
| Everything else (checklist, layout, SOP classes) | `quartz/styles/custom.scss` directly |

Full snippet path: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/787/.obsidian/snippets/`

## Deployment

```bash
npx quartz sync --no-pull   # commit + push to GitHub (triggers Netlify deploy)
npx quartz build --serve    # local preview at http://localhost:8080
```
