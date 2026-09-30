// ── Lightbox overlay — built once, persists across SPA navigations ────────────
let lightboxOpener: HTMLElement | null = null

if (!document.getElementById("lightbox-overlay")) {
  const overlay = document.createElement("div")
  overlay.id = "lightbox-overlay"
  overlay.setAttribute("role", "dialog")
  overlay.setAttribute("aria-modal", "true")
  overlay.setAttribute("aria-label", "Image viewer")
  overlay.innerHTML = `
    <button id="lightbox-close" type="button" aria-label="Close">&times;</button>
    <img id="lightbox-img" alt="" />
  `
  document.body.appendChild(overlay)
  const closeBtn = overlay.querySelector<HTMLButtonElement>("#lightbox-close")!

  const close = () => {
    if (!overlay.classList.contains("open")) return
    overlay.classList.remove("open")
    document.body.classList.remove("lightbox-open")
    // Return focus to the image that opened the lightbox
    const opener = lightboxOpener
    lightboxOpener = null
    if (opener?.isConnected) opener.focus({ preventScroll: true })
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

  // Keyboard activation of the close button (Enter/Space fire click, not pointerup)
  closeBtn.addEventListener("click", (e) => {
    if (e.detail === 0) close()
  })

  document.addEventListener("keydown", (e) => {
    if (!overlay.classList.contains("open")) return
    if (e.key === "Escape") {
      // Quartz search's Escape handler (also on document, registered later)
      // would otherwise pull focus to the search button
      e.stopImmediatePropagation()
      close()
    }
    // The close button is the only focusable element — keep focus inside the dialog
    if (e.key === "Tab") {
      e.preventDefault()
      closeBtn.focus()
    }
  })
}

function setupLightbox() {
  const overlay     = document.getElementById("lightbox-overlay")!
  const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement
  const closeBtn    = document.getElementById("lightbox-close") as HTMLButtonElement

  const open = (img: HTMLImageElement) => {
    lightboxOpener = img
    lightboxImg.src = img.src
    // Strip Obsidian modifier keywords (small, right, left, invert, clean) so
    // image-tweak.css rules like img[alt*="small"] don't constrain the lightbox image.
    lightboxImg.alt = img.alt.replace(/\b(small|right|left|invert|clean)\b/g, "").trim()
    overlay.classList.add("open")
    document.body.classList.add("lightbox-open")
    closeBtn.focus({ preventScroll: true })
  }

  document.querySelectorAll<HTMLImageElement>("article img:not([alt*='clean'])").forEach((img) => {
    img.style.cursor = "zoom-in"
    img.tabIndex = 0
    img.setAttribute("aria-haspopup", "dialog")
    // Focusable elements need a name; many diagrams still lack alt text
    if (!img.alt.trim()) img.setAttribute("aria-label", "Enlarge image")
    const onClick = () => open(img)
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== "Enter" && e.key !== " ") return
      e.preventDefault()
      open(img)
    }
    img.addEventListener("click", onClick)
    img.addEventListener("keydown", onKey)
    window.addCleanup(() => {
      img.removeEventListener("click", onClick)
      img.removeEventListener("keydown", onKey)
    })
  })
}

document.addEventListener("nav", setupLightbox)
