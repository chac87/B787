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
| `.cl-sep` | Thin horizontal rule — panel section separator inside a checklist |
| `.cl-indent` | Adds one extra indent level — combine with `cl-item` or `cl-sub` for items nested under a panel header |
| `.cl-variant` | Dark blue bar opening an aircraft-specific section (e.g. `B787 (-ABPF to -ABPU)`) |
| `.cl-variant-end` | Gray bar closing a variant section — **always required** after the last item of every `cl-variant` block (e.g. `END B787 (-ABPF to -ABPU)`) |
| `.cl-note` | Inline note — small italic gray text, indented |
| `.cl-warning` | Inline warning — small italic red text, indented |
| `.cl-caution` | Inline caution — small italic amber text, indented |
| `.c-red` | Inline red span for labeled indicators (e.g. `<span class="c-red">OFF</span>`) |
| `.c-green` | Inline green span for positive states (e.g. `<span class="c-green">illuminated</span>`) |
| `.nnc-back` | ← Back-link on NNC leaf pages (always after H1) |
| `.nnc-condition` | Gray condition banner at top of NNC |
| `.nnc-step` | Bold numbered step header |
| `.nnc-decision` | ◆ decision option (auto-prefixed) |
| `.nnc-cl` | Container for items under a decision branch |
| `.nnc-item` | Numbered dot-leader checklist item |
| `.nnc-num` | Step number inside `.nnc-item` or `.nnc-text` |
| `.nnc-text` | Numbered plain-text step (no dot-leader) |
| `.nnc-sub` | Indented plain sub-step |
| `.nnc-sub-item` | Indented dot-leader sub-item |
| `.nnc-box` | Bordered info box |
| `.nnc-note` | Italic gray note |
| `.nnc-caution` | Italic red caution |
| `.nnc-goto` | ▶▶ redirect line |
| `.nnc-separator` | Dashed separator (memory / reference) |
| `.nnc-confirm` | Intermediate confirm value before final action (e.g. "Confirm … CUTOFF") |
| `.nnc-role` | Role badge after action value — `C` (Captain) or `F/O` (First Officer) |
| `.nnc-complete` | Checklist complete — always `text-align: center` |

## Alert / Info Cards

Use the `.eicas-card` pattern whenever color helps group or rank content — not limited to EICAS. The left color bar and tinted background guide the reader's eye effectively for any categorized content (alert levels, status categories, procedure variants, system states, etc.).

```html
<div class="eicas-levels">

<div class="eicas-card eicas-card--red">
  <div class="eicas-card-title">Title <span class="eicas-card-badge">optional badge</span></div>
  <div class="eicas-card-body">Body text · use · dot · separators</div>
</div>

<div class="eicas-card eicas-card--amber">
  <div class="eicas-card-title">Title</div>
  <div class="eicas-card-body">Body text</div>
</div>

<div class="eicas-card eicas-card--white">
  <div class="eicas-card-title">Title</div>
  <div class="eicas-card-body">Body text</div>
</div>

</div>
```

### Color modifiers

| Modifier | Color | Semantic use |
|---|---|---|
| `.eicas-card--red` | `#e74c3c` | Critical / immediate action / warning |
| `.eicas-card--amber` | `#f39c12` | Caution / awareness / secondary priority |
| `.eicas-card--white` | `#888888` | Info / memo / low priority |

### Rules
- Always wrap cards in `<div class="eicas-levels">` (flex column with gap)
- `.eicas-card-title` — bold, card color; use for the category name
- `.eicas-card-body` — 0.875em neutral text; use `·` as item separator
- `.eicas-card-badge` — optional uppercase outlined pill for metadata (e.g. "NOT CANCELABLE", "~ 20 sec", "CANCELABLE")
- Dark mode handled automatically via `color-mix`
- CSS defined in `quartz/styles/custom.scss` lines ~827–867
- Use this pattern **instead of tables or callouts** when color encodes importance/rank across multiple items

## Content Location

- Procedures live in `content/Normal Ops/SOPs/` or `content/Non Normals/`
- Content is a **symlink** to the Obsidian vault at `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/787`
- Editing files in `content/` directly edits the Obsidian vault

## Markdown Rules

- **No `---` separators in content files**: Never use `---` between or within sections. Frontmatter delimiters (`---` at the very top of the file) are the only exception. This applies to all content files — SOPs, Non-Normals, Systems, etc.

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

### Consistency Rule — ALWAYS enforce after structural changes
After **any** of the following actions, verify `book.md` is consistent with all `index.md` files:
- Adding a new page
- Renaming or deleting a page
- Moving a page to a different section
- Reordering pages in any `index.md`

**Checklist:**
1. Every linked page in `book.md` must exist as a `.md` file
2. Order in `book.md` must match the order in the corresponding section `index.md`
3. No page present in an `index.md` (and as a real file) may be missing from `book.md`
4. Deleted or renamed pages must be removed/updated in `book.md` immediately

## CSS Architecture — Partials

`custom.scss` is a thin orchestrator (`@use` statements only). All styles live in `quartz/styles/partials/`.

`sync-snippets.sh` runs automatically on **both** `npx quartz build` and `npx quartz sync`. It overwrites `_snippets.scss` completely — no marker logic.

**Rule: never edit callout/snippet styles in the partials directly — always edit the source snippet file.**

| What to change | Edit this file |
|---|---|
| Callout styles (padding, title size, colors, dark mode) | `~/.../787/.obsidian/snippets/callouts.css` |
| Image tweaks | `~/.../787/.obsidian/snippets/image-tweak.css` |
| Unified table system (`.data-table`, global Markdown tables, table modifiers) | `~/.../787/.obsidian/snippets/tabelle-in-callout.css` |
| Global hacks | `~/.../787/.obsidian/snippets/global-hacks.css` |
| Floating Home Button, Hero Image | `quartz/styles/partials/_floating-home.scss` |
| Link colors, Fold/Expand icon | `quartz/styles/partials/_global.scss` |
| EICAS Cards, Flowcharts, Page Transition | `quartz/styles/partials/_eicas.scss` |
| Image Row, `.media-split` | `quartz/styles/partials/_images.scss` |
| SOP Checklist, Badges, Flow Timeline | `quartz/styles/partials/_sop.scss` |
| NNC Filter UI | `quartz/styles/partials/_nnc-filter.scss` |
| NNC Procedure CSS classes, Memory Item Blocks (`.mi-*`) | `quartz/styles/partials/_nnc.scss` |
| Auto-generated (never edit manually) | `quartz/styles/partials/_snippets.scss` |

Full snippet path: `~/Library/Mobile Documents/iCloud~md~obsidian/Documents/787/.obsidian/snippets/`

## Unified Table Pattern

Use one visual table system everywhere: `.data-table`.

- Markdown tables are styled automatically; prefer plain Markdown tables when possible.
- Raw HTML tables must use `class="data-table"`.
- Use `.data-table--split` only for PF/PM or CP/F/O two-column comparison layouts that require fixed 50/50 columns.
- Use `.data-table--matrix` only for wide numeric/reference matrices that need compact cells and horizontal scrolling.
- Use neutral helper classes only when a raw HTML matrix needs row semantics: `.data-table__row-label`, `.data-table__row-label--strong`, `.data-table__group`, `.data-table__empty`, `.data-table__section-row`, `.data-table__section-title`.
- Do not reintroduce retired performance/prototype/50-50 table class names or styles.
- Procedure steps still use the dot-leader checklist format, not tables. Use tables only for real comparison/reference data.

## Image Lightbox Pattern

Use a plain `<img>` — the JS lightbox (`imageLightbox.inline.ts`) attaches click/tap handlers to all `article img` automatically. Never wrap images in `<a>` tags.

### Full-width image

```html
<img src="/Bilder/example.webp" alt="Example">
```

`article img` already has `max-width: 100%; display: block; margin: auto` via `image-tweak.css`. No extra wrapper needed.

### Split image + cards layout

Use this when the image should take about half the width and explanatory cards should sit beside it on desktop. The `.media-split` CSS stacks automatically on mobile.

```html
<div class="media-split">
  <img src="/Bilder/example.webp" alt="Example">
  <div class="eicas-levels">
    <div class="eicas-card eicas-card--white">
      <div class="eicas-card-title">Title</div>
      <div class="eicas-card-body">Body text</div>
    </div>
  </div>
</div>
```

Rules:
- Use URL-encoded spaces in `src`, e.g. `/Bilder/Flight%20Path%20Tolerances.webp`.
- Never wrap `<img>` in `<a>` — the JS lightbox handles clicks on all bare images.
- `.media-split` provides desktop 50/50 layout; it stacks to single column on mobile.

## LHG Brand Color Guide

This project uses the official **Lufthansa Group (LHG) brand color palette** throughout. Always apply these colors — never reintroduce Apple system colors or arbitrary hex values.

### Color Palette

| Name | Light (primary) | Dark (shade) | Usage |
|---|---|---|---|
| **LHG Core Blue** | `#3257BC` | `#05164D` | Links, `[!proc]` callout, primary accent, H2 bar |
| **LHG Light Blue** | `#5291ED` | `#243F9B` | `[!limit]` callout, dark mode links |
| **LHG Teal** | `#4B9DA1` | `#1C4C5C` | `[!info]` callout, dark mode tertiary |
| **LHG Red** | `#FF526B` | `#93030C` | `[!warning]` callout title |
| **LHG Purple** | `#C775B5` | `#841E45` | Reserved / future use |
| **LHG Sand** | `#9C8F7A` | — | Text highlights |

### Callout Type → Color Mapping

| Callout | Color | Title text |
|---|---|---|
| `[!proc]` | LHG Core Blue `#3257BC` | `#05164D` |
| `[!limit]` | LHG Light Blue `#5291ED` | `#243F9B` |
| `[!info]` | LHG Teal `#4B9DA1` | `#1C4C5C` |
| `[!warning]` | LHG Red `#FF526B` | `#93030C` |

### Exceptions — do NOT change

- `.c-red` (`#e74c3c`) and `.c-amber` (`#f39c12`) — EICAS indicator colors, always keep as-is
- `quartz.config.ts` background/text colors (`light`, `lightgray`, `gray`, `darkgray`, `dark`) — these are the warm sand/navy page palette, not LHG brand colors

### Speed Notation

Always write speed designations with lowercase v and subscript: `v<sub>FE</sub>`, `v<sub>LO</sub>`, `v<sub>MO</sub>` etc. `M<sub>MO</sub>` keeps uppercase M.

### Limitations Language

All content in `content/Limitations.md` and `[!limit]` callouts in system notes must be in **English** (original PDF language). Never translate limitation text to German.

## Images — Auto-Convert to WebP

**Rule: never reference `.png`, `.jpg`, or `.jpeg` files directly in notes.** All images must be WebP.

`convert-images.sh` runs automatically inside `sync-snippets.sh` before every `npx quartz build` and `npx quartz sync`. It:
1. Finds any non-WebP files in `content/Bilder/`
2. Converts them to WebP at quality 95 (`cwebp -q 95 -m 6`) — lossless-equivalent sharpness
3. Updates all `![[...]]` references in the vault to the new `.webp` filename
4. Deletes the original

**If a user adds a new image to `content/Bilder/` and references it in a note as `![[name.png]]`:** do not manually rename the reference. The next build/sync will convert and fix it automatically. Only intervene if the user explicitly asks to run the conversion immediately — in that case run `bash convert-images.sh` from the repo root.

## NNC (Non-Normal Checklist) Notes

NNC detail notes are **leaf pages** — accessible only via links, not in the linear Prev/Next navigation.

### File Location
Always create in `content/Non Normals/Non-Normal Checklists/<Title>.md` (subfolder, not directly in `Non Normals/`).
→ Breadcrumb will show: **Non Normals › Non-Normal Checklists › Title**

### Workflow for every NNC
1. Create `Non Normals/Non-Normal Checklists/<Title>.md`
2. Add back-link directly after H1: `<a class="nnc-back" href="/Non-Normals/Non-Normal-Checklists">Non-Normal Checklists</a>`
3. Link item in `Non-Normal Checklists.md`: `<a href="/Non-Normals/Non-Normal-Checklists/<slug>">...</a>`
4. If memory items exist (above dashed separator): update `[!warning]-` callout in `Memory Items.md` — memory items only, never reference items
5. Add `[[Non Normals/Memory Items|s. auch Memory Items]]` at bottom if note has memory items
6. **Do NOT add to `book.md`** — NNC notes must never appear in Prev/Next navigation
7. **Do NOT add to `Non Normals/index.md`**

### NNC CSS Classes (`quartz/styles/custom.scss`)

| Class | Purpose |
|---|---|
| `.nnc-back` | ← Back link to Non-Normal Checklists (always first after H1) |
| `.nnc-condition` | Gray italic condition banner |
| `.nnc-step` | Bold step header (e.g. "1  Choose One:") |
| `.nnc-decision` | ◆ diamond decision option (auto-prefix via CSS) |
| `.nnc-cl` | Container for checklist items under a decision branch |
| `.nnc-item` | Numbered item with dot-leader: `<span class="nnc-num">N</span><strong>Item</strong><span class="cl-dots"></span><strong>ACTION</strong>` |
| `.nnc-text` | Numbered plain-text step (no dot-leader) |
| `.nnc-sub` | Indented plain sub-step under a conditional branch |
| `.nnc-sub-item` | Indented dot-leader item under a conditional branch |
| `.nnc-box` | Bordered info box (e.g. "To descend:") |
| `.nnc-note` | Italic note (gray) |
| `.nnc-caution` | Italic caution (red, `#e74c3c`) |
| `.nnc-goto` | ▶▶ Go to step N redirect |
| `.nnc-separator` | Dashed line — memory items above / reference items below |
| `.nnc-complete` | Final line ("■ ■ ■ ■" or "Checklist Complete") — **always `text-align: center`** |

### NNC Legend
| Symbol | Meaning |
|---|---|
| ◆ (vertical line) | Decision — read to first true statement |
| ▶▶ Go to … | Redirect to another step or checklist |
| --- dashed line | Separator: memory items above, reference items below |
| — solid line | Task divider |
| ⚠ | Precaution — read aloud "PRECAUTION" |
| ■ ■ ■ ■ | Checklist complete |

### Frontmatter
```yaml
---
title: "<Title>"   # include [] prefix if EICAS-triggered
tags: [non-normal, <category>]
---
```

## Deployment

```bash
npx quartz build --serve    # sync-snippets.sh läuft automatisch → local preview at http://localhost:8080
npx quartz sync --no-pull   # sync-snippets.sh läuft erneut → commit + push to GitHub (triggers Netlify deploy)
```

## Deploy Safety — Both localhost AND Netlify Must Work

**Rule: every change must be correct on both local dev and the Netlify deploy. Never ship something that only works locally.**

### Known deploy traps in this project

- **`sync-snippets.sh`** copies Obsidian snippets into `_snippets.scss` at build time. The iCloud snippets path is machine-local — it does not exist on Netlify. A missing guard previously caused `_snippets.scss` to be truncated to empty on every Netlify build, breaking all callout/color styles. The fix (a directory-existence guard in `sync-snippets.sh`) must not be removed.
- **`_snippets.scss`** is tracked by git and contains all custom CSS (callouts, `.c-green`, `.c-red`, `.c-amber`, table styles). It must remain committed. Never add it to `.gitignore`.
- **Any new script called at build time** (from `sync-snippets.sh`, `convert-images.sh`, or `handlers.js`) must guard against machine-local paths and tools (`cwebp`, iCloud paths, etc.) — either with an existence check or silent no-op.
- **Local-only tools** (`cwebp`, etc.) must either be available on Netlify or the script must exit cleanly without them.

### Checklist before pushing any infrastructure change

1. Does it rely on a path that only exists on this Mac? → Add an existence guard.
2. Does it overwrite a committed file unconditionally? → Guard with dir/file existence check first.
3. Does it call an external tool that may not be on Netlify? → Suppress errors and exit 0.
