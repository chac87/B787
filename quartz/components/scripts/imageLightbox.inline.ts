// Create persistent elements once
if (!document.getElementById("lightbox-overlay")) {
  const overlay = document.createElement("div")
  overlay.id = "lightbox-overlay"
  overlay.innerHTML = `
    <button id="lightbox-close" aria-label="Close">&times;</button>
    <img id="lightbox-img" src="" alt="" />
  `
  document.body.appendChild(overlay)

  const closeBtn = document.getElementById("lightbox-close")!

  const close = () => {
    overlay.classList.remove("open")
    document.body.classList.remove("lightbox-open")
  }

  overlay.addEventListener("click", (e) => {
    if (e.target === overlay || e.target === closeBtn) close()
  })

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close()
  })
}

function setupPage() {
  // ── Page transition ────────────────────────────────────────────────────────
  const article = document.querySelector("article")
  if (article) {
    article.classList.remove("page-enter")
    void (article as HTMLElement).offsetWidth
    article.classList.add("page-enter")
  }

  // ── Lightbox: attach to content images ────────────────────────────────────
  const overlay = document.getElementById("lightbox-overlay")!
  const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement

  const imgs = document.querySelectorAll<HTMLImageElement>(
    "article img:not([alt*='clean'])"
  )

  imgs.forEach((img) => {
    img.style.cursor = "zoom-in"

    let imgTouchStartX = 0
    let imgTouchStartY = 0

    const openLightbox = () => {
      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      overlay.classList.add("open")
      document.body.classList.add("lightbox-open")
    }

    const onImgTouchStart = (e: TouchEvent) => {
      imgTouchStartX = e.touches[0].clientX
      imgTouchStartY = e.touches[0].clientY
    }

    const onImgTouchEnd = (e: TouchEvent) => {
      const dx = Math.abs(e.changedTouches[0].clientX - imgTouchStartX)
      const dy = Math.abs(e.changedTouches[0].clientY - imgTouchStartY)
      if (dx < 10 && dy < 10) {
        e.preventDefault() // suppress subsequent click event
        openLightbox()
      }
    }

    img.addEventListener("touchstart", onImgTouchStart, { passive: true })
    img.addEventListener("touchend", onImgTouchEnd, { passive: false })
    img.addEventListener("click", openLightbox)
    window.addCleanup(() => {
      img.removeEventListener("touchstart", onImgTouchStart)
      img.removeEventListener("touchend", onImgTouchEnd)
      img.removeEventListener("click", openLightbox)
    })
  })

  // ── Keyboard arrow navigation ─────────────────────────────────────────────
  const prevLink = document.querySelector<HTMLAnchorElement>(".nav-btn.prev")
  const nextLink = document.querySelector<HTMLAnchorElement>(".nav-btn.next")

  const onArrow = (e: KeyboardEvent) => {
    if (document.body.classList.contains("lightbox-open")) return
    const tag = (e.target as HTMLElement).tagName
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return
    if ((e.target as HTMLElement).isContentEditable) return
    if (e.key === "ArrowLeft" && prevLink) prevLink.click()
    else if (e.key === "ArrowRight" && nextLink) nextLink.click()
  }

  document.addEventListener("keydown", onArrow)
  window.addCleanup(() => document.removeEventListener("keydown", onArrow))

  // ── Swipe navigation ──────────────────────────────────────────────────────
  let touchStartX = 0
  const SWIPE_THRESHOLD = 50

  const onTouchStart = (e: TouchEvent) => {
    touchStartX = e.touches[0].clientX
  }

  const onTouchEnd = (e: TouchEvent) => {
    if (document.body.classList.contains("lightbox-open")) return
    const delta = e.changedTouches[0].clientX - touchStartX
    if (Math.abs(delta) < SWIPE_THRESHOLD) return
    if (delta > 0 && prevLink) prevLink.click()
    else if (delta < 0 && nextLink) nextLink.click()
  }

  document.addEventListener("touchstart", onTouchStart, { passive: true })
  document.addEventListener("touchend", onTouchEnd, { passive: true })
  window.addCleanup(() => {
    document.removeEventListener("touchstart", onTouchStart)
    document.removeEventListener("touchend", onTouchEnd)
  })
}

document.addEventListener("nav", setupPage)
