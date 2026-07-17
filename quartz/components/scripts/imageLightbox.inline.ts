// ── Lightbox overlay — built once, persists across SPA navigations ────────────
if (!document.getElementById("lightbox-overlay")) {
  const overlay = document.createElement("div")
  overlay.id = "lightbox-overlay"
  overlay.innerHTML = `
    <button id="lightbox-close" aria-label="Close">&times;</button>
    <img id="lightbox-img" src="" alt="" />
  `
  document.body.appendChild(overlay)

  const close = () => {
    overlay.classList.remove("open")
    document.body.classList.remove("lightbox-open")
  }

  // Touch: schließen per touchend.
  // Ghost-Click ist ein synthetisches click-Event, kein touchend → kann Lightbox nicht versehentlich schließen.
  overlay.addEventListener("touchend", (e) => {
    const t = e.target as HTMLElement
    if (t === overlay || t.id === "lightbox-close") close()
  }, { passive: true })

  // Desktop-Maus: schließen per pointerup (kein ghost-click-Risiko).
  overlay.addEventListener("pointerup", (e) => {
    if (e.pointerType === "touch") return // wird von touchend behandelt
    const t = e.target as HTMLElement
    if (t === overlay || t.id === "lightbox-close") close()
  })

  // Close on Escape
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close()
  })
}

function setupLightbox() {
  const overlay     = document.getElementById("lightbox-overlay")!
  const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement

  const open = (img: HTMLImageElement) => {
    lightboxImg.src = img.src
    // Strip Obsidian modifier keywords (small, right, left, invert, clean) so
    // image-tweak.css rules like img[alt*="small"] don't constrain the lightbox image.
    lightboxImg.alt = img.alt.replace(/\b(small|right|left|invert|clean)\b/g, "").trim()
    overlay.classList.add("open")
    document.body.classList.add("lightbox-open")
  }

  document.querySelectorAll<HTMLImageElement>("article img:not([alt*='clean'])").forEach((img) => {
    img.style.cursor = "zoom-in"
    const onClick = () => open(img)
    img.addEventListener("click", onClick)
    window.addCleanup(() => img.removeEventListener("click", onClick))
  })
}

document.addEventListener("nav", setupLightbox)
