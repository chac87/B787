# Project Memory

## Unified Table Pattern

Use `.data-table` as the single visual table system.

- Plain Markdown tables are styled automatically.
- Raw HTML tables use `class="data-table"`.
- Use `.data-table--split` for fixed 50/50 two-column layouts.
- Use `.data-table--matrix` for wide, dense numeric/reference matrices.
- Allowed matrix helpers: `.data-table__row-label`, `.data-table__row-label--strong`, `.data-table__group`, `.data-table__empty`, `.data-table__section-row`, `.data-table__section-title`.
- Do not create new retired performance/prototype/50-50 table rules or classes.
- Procedure steps stay in dot-leader checklist format; tables are only for comparison/reference data.

## Image Lightbox Pattern

For manually embedded images, use the robust hash-lightbox pattern so click/tap opens the image large. This is more reliable than a plain `<img>`, especially for pages like Circling.

Full-width thumbnail:

```html
<a class="img-lightbox img-lightbox--full" href="#example-lightbox">
  <img class="img-thumb" src="/Bilder/example.webp" alt="Example">
</a>
<div id="example-lightbox" class="img-lightbox-overlay">
  <a href="#">
    <img src="/Bilder/example.webp" alt="Example">
  </a>
</div>
```

Desktop split / mobile stacked:

```html
<div class="media-split">
  <a class="img-lightbox" href="#example-lightbox">
    <img class="img-thumb" src="/Bilder/example.webp" alt="Example">
  </a>
  <div id="example-lightbox" class="img-lightbox-overlay">
    <a href="#">
      <img src="/Bilder/example.webp" alt="Example">
    </a>
  </div>
  <div class="eicas-levels">
    <div class="eicas-card eicas-card--white">
      <div class="eicas-card-title">Title</div>
      <div class="eicas-card-body">Body text</div>
    </div>
  </div>
</div>
```

Rules:
- Use unique lightbox IDs per page.
- URL-encode spaces in image paths, e.g. `/Bilder/Flight%20Path%20Tolerances.webp`.
- Use `.img-lightbox--full` for standalone full-width thumbnails.
- Use `.media-split` when the image should be half-width with cards beside it; it stacks on mobile.
