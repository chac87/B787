// ── Reading Progress Bar (created once, persists across nav) ───────────────
let progressBar = document.getElementById("reading-progress") as HTMLDivElement | null
if (!progressBar) {
  progressBar = document.createElement("div")
  progressBar.id = "reading-progress"
  document.body.appendChild(progressBar)
}

const updateProgress = () => {
  const scrollTop = window.scrollY
  const docHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
  const pct = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0
  progressBar!.style.width = `${pct}%`
}

window.addEventListener("scroll", updateProgress, { passive: true })
// Reset on each navigation
progressBar.style.width = "0%"

function setupLightbox() {
  // ── Page transition ──────────────────────────────────────────────────────
  const article = document.querySelector("article")
  if (article) {
    article.classList.remove("page-enter")
    void (article as HTMLElement).offsetWidth
    article.classList.add("page-enter")
  }

  // ── Lightbox ─────────────────────────────────────────────────────────────
  let overlay = document.getElementById("lightbox-overlay") as HTMLDivElement | null
  if (!overlay) {
    overlay = document.createElement("div")
    overlay.id = "lightbox-overlay"
    overlay.innerHTML = `
      <button id="lightbox-close" aria-label="Close">&times;</button>
      <img id="lightbox-img" src="" alt="" />
    `
    document.body.appendChild(overlay)

    const closeBtn = document.getElementById("lightbox-close")!
    const img = document.getElementById("lightbox-img") as HTMLImageElement

    const close = () => {
      overlay!.classList.remove("open")
      document.body.classList.remove("lightbox-open")
    }

    overlay.addEventListener("click", (e) => {
      if (e.target === overlay || e.target === closeBtn) close()
    })

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close()
    }
    document.addEventListener("keydown", onKey)
    window.addCleanup(() => document.removeEventListener("keydown", onKey))
  }

  // Attach to all content images (skip alt="...clean...")
  const imgs = document.querySelectorAll<HTMLImageElement>(
    "article img:not([alt*='clean'])"
  )

  const listeners: Array<{ el: HTMLImageElement; fn: () => void }> = []

  imgs.forEach((img) => {
    img.style.cursor = "zoom-in"
    const open = () => {
      const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement
      lightboxImg.src = img.src
      lightboxImg.alt = img.alt
      overlay!.classList.add("open")
      document.body.classList.add("lightbox-open")
    }
    img.addEventListener("click", open)
    listeners.push({ el: img, fn: open })
  })

  window.addCleanup(() => {
    listeners.forEach(({ el, fn }) => el.removeEventListener("click", fn))
  })

  // ── Keyboard Arrow Navigation ─────────────────────────────────────────────
  const prevLink = document.querySelector<HTMLAnchorElement>(".nav-btn.prev")
  const nextLink = document.querySelector<HTMLAnchorElement>(".nav-btn.next")

  const onArrow = (e: KeyboardEvent) => {
    // Skip if lightbox is open, or user is typing in an input
    if (document.body.classList.contains("lightbox-open")) return
    const tag = (e.target as HTMLElement).tagName
    if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return
    if ((e.target as HTMLElement).isContentEditable) return

    if (e.key === "ArrowLeft" && prevLink) {
      prevLink.click()
    } else if (e.key === "ArrowRight" && nextLink) {
      nextLink.click()
    }
  }

  document.addEventListener("keydown", onArrow)
  window.addCleanup(() => document.removeEventListener("keydown", onArrow))

  // ── Swipe Navigation ─────────────────────────────────────────────────────
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

document.addEventListener("nav", setupLightbox)
