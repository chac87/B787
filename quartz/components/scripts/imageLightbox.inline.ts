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
      if (dx < 50 && dy < 50) {
        e.preventDefault()    // suppress subsequent click event
        e.stopPropagation()   // prevent document swipe handler from navigating
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

  // ── Non-Normal Checklist Filter ──────────────────────────────────────────
  const filterBar = document.querySelector<HTMLElement>(".nn-filter-bar")
  if (filterBar) {
    const catBar = document.getElementById("nn-cat-bar")
    const catContainer = document.getElementById("nn-cat-sections")
    const levelBar = document.getElementById("nn-eicas-level-bar")

    const catNames: Record<string, string> = {
      misc: "Misc", general: "General", airsystems: "Air Systems", antiice: "Anti-Ice / Rain",
      autoflight: "Automatic Flight", comms: "Communications", electrical: "Electrical",
      engine: "Engines / APU", fire: "Fire Protection", flightcontrols: "Flight Controls",
      flightinstruments: "Flight Instruments", navigation: "Flight Mgmt / Nav",
      fuel: "Fuel", hydraulic: "Hydraulics", gear: "Landing Gear",
      warnings: "Warning Systems", backcover: "Back Cover",
    }
    const catOrder = ["misc","general","airsystems","antiice","autoflight","comms","electrical","engine","fire","flightcontrols","flightinstruments","navigation","fuel","hydraulic","gear","warnings","backcover"]

    let currentMode = "alpha"
    let currentCat: string | null = null
    let currentLevel: string | null = null

    const applyFilter = () => {
      const alphaSections = Array.from(document.querySelectorAll<HTMLElement>("#nn-list .nn-section[data-section]"))

      // Update active button
      document.querySelectorAll<HTMLElement>(".nn-filter-btn").forEach(btn => {
        btn.classList.toggle("active", btn.dataset.mode === currentMode)
      })

      if (currentMode === "eicas") {
        levelBar?.classList.add("visible")
      } else {
        levelBar?.classList.remove("visible")
        currentLevel = null
        document.querySelectorAll<HTMLElement>(".nn-level-btn").forEach(b => b.classList.remove("active"))
      }

      if (currentMode === "cat") {
        catBar?.classList.add("visible")
        alphaSections.forEach(s => { s.style.display = "none" })
        if (catContainer) {
          catContainer.style.display = ""
          catContainer.innerHTML = ""
          const allItems = Array.from(document.querySelectorAll<HTMLElement>("#nn-list .nn-item"))
          catOrder.forEach(catKey => {
            if (currentCat && currentCat !== catKey) return
            const items = allItems.filter(i => i.dataset.cat === catKey)
            if (!items.length) return
            const section = document.createElement("div")
            section.className = "nn-section"
            const header = document.createElement("div")
            header.className = "nn-section-header"
            header.textContent = catNames[catKey]
            section.appendChild(header)
            items.sort((a, b) => (a.querySelector("span")?.textContent ?? "").localeCompare(b.querySelector("span")?.textContent ?? ""))
            items.forEach(item => {
              const clone = item.cloneNode(true) as HTMLElement
              clone.classList.remove("hidden")
              section.appendChild(clone)
            })
            catContainer.appendChild(section)
          })
        }
      } else {
        catBar?.classList.remove("visible")
        if (catContainer) { catContainer.style.display = "none"; catContainer.innerHTML = "" }
        alphaSections.forEach(section => {
          const items = Array.from(section.querySelectorAll<HTMLElement>(".nn-item"))
          let visible = 0
          items.forEach(item => {
            const show = currentMode === "alpha" ? true
              : currentMode === "eicas" ? (item.dataset.eicas === "true" && (currentLevel === null || item.dataset.eicasLevel === currentLevel))
              : currentMode === "qa" ? item.dataset.qa === "true"
              : item.dataset.unann === "true"
            item.classList.toggle("hidden", !show)
            if (show) visible++
          })
          section.style.display = visible === 0 ? "none" : ""
        })
      }
    }

    const onFilterClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>(".nn-filter-btn")
      if (!btn) return
      currentMode = btn.dataset.mode ?? "alpha"
      if (currentMode !== "cat") currentCat = null
      applyFilter()
    }

    const onLevelClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>(".nn-level-btn")
      if (!btn) return
      const key = btn.dataset.level ?? ""
      currentLevel = currentLevel === key ? null : key
      document.querySelectorAll<HTMLElement>(".nn-level-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.level === currentLevel)
      })
      applyFilter()
    }

    const onCatClick = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>(".nn-cat-btn")
      if (!btn) return
      const key = btn.dataset.cat ?? ""
      currentCat = currentCat === key ? null : key
      document.querySelectorAll<HTMLElement>(".nn-cat-btn").forEach(b => {
        b.classList.toggle("active", b.dataset.cat === currentCat)
      })
      applyFilter()
    }

    filterBar.addEventListener("click", onFilterClick)
    window.addCleanup(() => filterBar.removeEventListener("click", onFilterClick))
    if (levelBar) {
      levelBar.addEventListener("click", onLevelClick)
      window.addCleanup(() => levelBar.removeEventListener("click", onLevelClick))
    }
    if (catBar) {
      catBar.addEventListener("click", onCatClick)
      window.addCleanup(() => catBar.removeEventListener("click", onCatClick))
    }

    applyFilter()

    // Inject EICAS / Unann badges and wrap all badges per item
    const allNNItems = Array.from(document.querySelectorAll<HTMLElement>("#nn-list .nn-item"))
    allNNItems.forEach(item => {
      const wrap = document.createElement("div")
      wrap.className = "nn-badge-wrap"

      const existingQa = item.querySelector<HTMLElement>(".nn-qa-badge")
      if (existingQa) wrap.appendChild(existingQa)

      if (item.dataset.eicas === "true") {
        const b = document.createElement("span")
        b.className = "nn-eicas-badge"
        const lvl = item.dataset.eicasLevel
        if (lvl) {
          b.dataset.level = lvl
          b.textContent = "EICAS " + lvl.charAt(0).toUpperCase() + lvl.slice(1)
        } else {
          b.textContent = "EICAS"
        }
        wrap.appendChild(b)
      }
      if (item.dataset.unann === "true") {
        const b = document.createElement("span")
        b.className = "nn-unann-badge"
        b.textContent = "Unann"
        wrap.appendChild(b)
      }

      if (wrap.children.length > 0) item.appendChild(wrap)
    })
  }
}

document.addEventListener("nav", setupPage)

