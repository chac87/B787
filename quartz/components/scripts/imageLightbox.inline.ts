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

function setupPage() {
  // ── Page transition ────────────────────────────────────────────────────────
  const article = document.querySelector("article")
  if (article) {
    article.classList.remove("page-enter")
    void (article as HTMLElement).offsetWidth
    article.classList.add("page-enter")
  }

  // ── Image lightbox ─────────────────────────────────────────────────────────
  const articleEl   = document.querySelector("article")
  const overlay     = document.getElementById("lightbox-overlay")!
  const lightboxImg = document.getElementById("lightbox-img") as HTMLImageElement

  const open = (img: HTMLImageElement) => {
    lightboxImg.src = img.src
    lightboxImg.alt = img.alt
    overlay.classList.add("open")
    document.body.classList.add("lightbox-open")
  }

  // Cursor auf einzelnen Images setzen (nur visuell, kein Event-Listener mehr hier)
  document.querySelectorAll<HTMLImageElement>("article img:not([alt*='clean'])").forEach((img) => {
    img.style.cursor = "zoom-in"
  })

  if (articleEl) {
    // ── Touch: Event-Delegation auf article ────────────────────────────────
    // Robuster als per-Element-Listener auf iOS Safari (content-visibility, stacking).
    let tStartX = 0
    let tStartY = 0
    let tapTarget: HTMLImageElement | null = null

    const onTouchStart = (e: TouchEvent) => {
      const img = (e.target as Element).closest<HTMLImageElement>("img:not([alt*='clean'])")
      tapTarget = img ?? null
      if (img) {
        tStartX = e.touches[0].clientX
        tStartY = e.touches[0].clientY
      }
    }

    const onTouchEnd = (e: TouchEvent) => {
      if (!tapTarget) return
      const dx = Math.abs(e.changedTouches[0].clientX - tStartX)
      const dy = Math.abs(e.changedTouches[0].clientY - tStartY)
      if (dx < 15 && dy < 15) open(tapTarget)
      tapTarget = null
    }

    articleEl.addEventListener("touchstart", onTouchStart, { passive: true })
    articleEl.addEventListener("touchend",   onTouchEnd,   { passive: true })
    window.addCleanup(() => {
      articleEl.removeEventListener("touchstart", onTouchStart)
      articleEl.removeEventListener("touchend",   onTouchEnd)
    })

    // ── Desktop-Maus: Event-Delegation auf article ─────────────────────────
    let pStartX = 0
    let pStartY = 0
    let pTarget: HTMLImageElement | null = null

    const onPointerDown = (e: PointerEvent) => {
      if (e.pointerType === "touch") return
      const img = (e.target as Element).closest<HTMLImageElement>("img:not([alt*='clean'])")
      pTarget = img ?? null
      if (img) { pStartX = e.clientX; pStartY = e.clientY }
    }

    const onPointerUp = (e: PointerEvent) => {
      if (e.pointerType === "touch" || !pTarget) return
      if (Math.abs(e.clientX - pStartX) < 10 && Math.abs(e.clientY - pStartY) < 10) open(pTarget)
      pTarget = null
    }

    articleEl.addEventListener("pointerdown", onPointerDown)
    articleEl.addEventListener("pointerup",   onPointerUp)
    window.addCleanup(() => {
      articleEl.removeEventListener("pointerdown", onPointerDown)
      articleEl.removeEventListener("pointerup",   onPointerUp)
    })
  }

  // ── Non-Normal Checklist Filter ────────────────────────────────────────────
  const filterBar = document.querySelector<HTMLElement>(".nn-filter-bar")
  if (filterBar) {
    const catBar       = document.getElementById("nn-cat-bar")
    const catContainer = document.getElementById("nn-cat-sections")
    const levelBar     = document.getElementById("nn-eicas-level-bar")

    const catNames: Record<string, string> = {
      misc: "Misc", general: "General", airsystems: "Air Systems", antiice: "Anti-Ice / Rain",
      autoflight: "Automatic Flight", comms: "Communications", electrical: "Electrical",
      engine: "Engines / APU", fire: "Fire Protection", flightcontrols: "Flight Controls",
      flightinstruments: "Flight Instruments", navigation: "Flight Mgmt / Nav",
      fuel: "Fuel", hydraulic: "Hydraulics", gear: "Landing Gear",
      warnings: "Warning Systems", backcover: "Back Cover",
    }
    const catOrder = [
      "misc","general","airsystems","antiice","autoflight","comms","electrical",
      "engine","fire","flightcontrols","flightinstruments","navigation","fuel",
      "hydraulic","gear","warnings","backcover",
    ]

    let currentMode: string      = "alpha"
    let currentCat:  string|null = null
    let currentLevel: string|null = null

    const applyFilter = () => {
      const alphaSections = Array.from(
        document.querySelectorAll<HTMLElement>("#nn-list .nn-section[data-section]")
      )

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
            items.sort((a, b) =>
              (a.querySelector("span")?.textContent ?? "").localeCompare(
               b.querySelector("span")?.textContent ?? "")
            )
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
            const show =
              currentMode === "alpha"  ? true :
              currentMode === "eicas"  ? (item.dataset.eicas === "true" &&
                                          (currentLevel === null || item.dataset.eicasLevel === currentLevel)) :
              currentMode === "qa"     ? item.dataset.qa === "true" :
                                         item.dataset.unann === "true"
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

    // Inject EICAS / Unann badges
    document.querySelectorAll<HTMLElement>("#nn-list .nn-item").forEach(item => {
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
